import os
import traceback
from datetime import timedelta, datetime
from typing import Any, Optional, MutableMapping, Union, List
from uuid import uuid4

from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Request, status, Depends
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from google.auth.transport import requests
from google.oauth2 import id_token
from jose import jwt, JWTError
from sqlalchemy.orm import Session

from api.crud.base import get_db, verify_password, hash_password
from api.models import models
from api.models.models import UpdatePasswordModel, UpdateEmailModel
from api.models.models import User, CreateUserModel, InitPasswordResetModel, PasswordResetRequest, \
    FinalizePasswordResetModel
from api.scripts.email import send_email

load_dotenv()

router = APIRouter()

GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
ACCESS_TOKEN_EXPIRE_DAYS = os.getenv('ACCESS_TOKEN_EXPIRE_DAYS')
API_URL = os.getenv('API_URL')
JWT_SECRET = os.getenv('JWT_SECRET')

JWTPayloadMapping = MutableMapping[
    str, Union[datetime, bool, str, List[str], List[int]]
]

# creates OAuth2PasswordBearer instance with token url as parameter as json
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{API_URL}/auth/login")


# creates get_current_user dependency
# get_current_user will have a dependency with oauth2_scheme
def get_current_user(token: str = Depends(oauth2_scheme)
                     ) -> User:
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    db: Session = next(get_db())

    try:
        payload = jwt.decode(
            token,
            JWT_SECRET,
            algorithms=['HS256'],
            options={"verify_aud": False},
        )
        user_id: str = payload.get("sub")
    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise credentials_exception
    return user


def get_user_from_refresh_token(token: str) -> User:
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    db: Session = next(get_db())

    try:
        payload = jwt.decode(
            token,
            JWT_SECRET,
            algorithms=['HS256'],
            options={"verify_aud": False},
        )
        user_id: str = payload.get("sub")
    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise credentials_exception
    return user


# google auth endpoint
@router.get('/refresh_token', tags=['Auth'],
            description="Endpoint for getting a new access token using a refresh token")
async def get_new_access_token(refresh_token: str):
    try:
        user = get_user_from_refresh_token(refresh_token)

        data = {
            "access_token": create_access_token(sub=user.id),
            "refresh_token": create_refresh_token(sub=user.id),
            "token_type": "Bearer",
        }
        return data
    except ValueError:
        raise HTTPException(status_code=401, detail='Invalid token')
    except HTTPException:
        raise HTTPException(status_code=401, detail='Invalid token')
    except Exception:
        print(traceback.print_exc())
        raise HTTPException(status_code=500, detail='Internal Server Error')


@router.get('/google_auth', tags=['Auth'],
            description="Endpoint for both Google login and Google signup")
async def authentication(token: str):
    db: Session = next(get_db())

    try:
        # verify the jwt signature
        user = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
        name = user['name']
        email = user['email']

        current_user: User = db.query(models.User).filter(models.User.email == email).first()

        def generate_token(sub: str):
            return {
                "access_token": create_access_token(sub=sub),
                "refresh_token": create_refresh_token(sub=sub),
                "token_type": "Bearer",
            }

        # check whether the user already exist
        if current_user:
            if not current_user.is_verified:
                raise HTTPException(status_code=401,
                                    detail="This account is not verified yet. Please check your email")
            return generate_token(current_user.id)

        # add new user to database
        user_id = str(uuid4())
        db_user: User = User(id=user_id, email=email, name=name,
                             is_verified=True, password=hash_password(str(uuid4())))
        db.add(db_user)
        db.commit()

        await resolve_password_reset_request(email, db)
        return generate_token(user_id)

    except ValueError:
        raise HTTPException(status_code=401, detail='Invalid token')
    except HTTPException as e:
        raise e
    except Exception:
        print(traceback.print_exc())
        raise HTTPException(status_code=500, detail='Internal Server Error')


# login route returns access token and token type
@router.post("/login", tags=['Auth'])
def login(form_data: OAuth2PasswordRequestForm = Depends()
          ) -> Any:
    db: Session = next(get_db())

    user = authenticate(email=form_data.username, password=form_data.password, db=db)
    if not user:
        db.close()
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    if not user.is_verified:
        raise HTTPException(status_code=401,
                            detail="This account is not verified yet. Please check your email")

    data = {
        "access_token": create_access_token(sub=user.id),
        "refresh_token": create_refresh_token(sub=user.id),
        "token_type": "Bearer",
    }
    db.close()

    return data


@router.post("/signup", tags=['Auth'])
async def signup(user: CreateUserModel):
    db: Session = next(get_db())
    existing_user: User = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        db.close()
        raise HTTPException(
            status_code=400,
            detail="This email is already registered"
        )
    else:
        try:
            db_user = User(id=str(uuid4()), email=user.email, name=user.name, password=hash_password(user.password),
                           is_verified=False)
            db.add(db_user)
            db.commit()
            db.close()
            await send_verify_email([user.email], user)

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token received",
            )

    return {"message": "Account created successfully"}


@router.get("/verify_token", tags=['Auth'])
async def email_verification(token: str):
    """Checks if the token is valid"""
    db: Session = next(get_db())
    user = await verify_token(token)
    existing_user: User = db.query(User).filter(User.email == user).first()

    try:
        if existing_user and not existing_user.is_verified:
            existing_user.is_verified = True
            db.commit()

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )

    return {"message": "Account verified successfully"}


@router.post("/init_password_reset", tags=['Auth'])
async def init_password_reset(model: InitPasswordResetModel):
    db: Session = next(get_db())

    user = db.query(User).filter(User.email == model.email).first()
    if not user:
        db.close()
        raise HTTPException(status_code=404, detail="This email address is not registered")

    await resolve_password_reset_request(model.email, db)
    db.close()
    return {"message": "Password reset initialized successfully"}


@router.post("/finalize_password_reset/", tags=['Auth'])
async def finalize_password_reset(model: FinalizePasswordResetModel):
    db: Session = next(get_db())

    password_reset = db.query(PasswordResetRequest) \
        .filter(PasswordResetRequest.verification_code == model.code).first()
    if not password_reset:
        raise HTTPException(status_code=404, detail="Invalid/expired verification code")

    user = db.query(User).filter(User.email == password_reset.email).first()
    user.password = hash_password(model.new_password)
    db.add(user)
    db.delete(password_reset)
    db.commit()

    return {"message": "Password reset successfully"}


@router.patch('/update_password', tags=['Auth'])
def update_password(model: UpdatePasswordModel, user: User = Depends(get_current_user)):
    if not verify_password(model.current_password, user.password):
        raise HTTPException(status_code=400, detail="Invalid current password")

    db: Session = next(get_db())
    update = db.query(User).filter(User.id == user.id).first()
    update.password = hash_password(model.new_password)
    db.commit()
    db.flush()

    return {"message": "Password updated successfully"}


@router.patch('/update_email', tags=['Auth'])
def update_email(model: UpdateEmailModel, user: User = Depends(get_current_user)):
    db: Session = next(get_db())
    update = db.query(User).filter(User.id == user.id).first()
    update.email = model.email
    db.commit()
    db.flush()

    return {"message": "Email updated successfully"}


async def resolve_password_reset_request(email: str, db: Session):
    password_reset = db.query(PasswordResetRequest).filter(PasswordResetRequest.email == email).first()
    if not password_reset:
        password_reset = PasswordResetRequest(email=email, verification_code=str(uuid4()))
        db.add(password_reset)
        db.commit()

    await send_password_reset_request_email(email, password_reset.verification_code)


async def send_password_reset_request_email(email: str, code: str):
    app_url = os.getenv('PASSWORD_RESET_URL')
    reset_url = f"{app_url}?code={code}"

    body = "<html> <body><h4>Hello,</h4>"
    body += "<p>A request to reset your password on YieldVest was created!</p>"
    body += f"<p>Click <a href=\"{reset_url}\">here</a> to reset your password or copy "
    body += f"this link to your browser to reset your password: {reset_url}</p>"
    body += "<br/><br/><strong>If you didn't initiate this request please ignore this email.</strong><br/>"
    body += "<strong>Please note that you're required to reset your password when you signup with Google!</strong>"
    body += "</body></html>"

    await send_email("Reset your YieldVest Password", [email], body)


async def send_verify_email(email, user: User):
    token_data = {
        "email": user.email,
    }
    token = jwt.encode(token_data, JWT_SECRET, algorithm='HS256')
    app_url = os.getenv('APP_URL')
    verify_url = f"{app_url}/auth/verify_token?token={token}"

    body = f"<html> <body><h4>Hello {user.name},</h4>"
    body += "<p>Please verify your email on Yieldvest</p>"
    body += f"<p>Click <a href=\"{verify_url}\">here</a> to verify your email or copy "
    body += f"this link to your browser to verify your email: {verify_url}</p>"
    body += "<br/><br/><strong>If you didn't register on Yieldvest please ignore this email and nothing will happen."
    body += "</strong><br/></body></html>"

    await send_email("Verify your Email", email, body)


def authenticate(
        *,
        email: str,
        password: str,
        db: Session,
) -> Optional[User]:
    user: User = db.query(User).filter(User.email == email).first()
    if not user:
        return None
    if not verify_password(password, user.password):
        return None
    return user


# creates jwt token
def create_access_token(*, sub: str) -> str:
    return _create_token(
        token_type="access_token",
        lifetime=timedelta(days=float(ACCESS_TOKEN_EXPIRE_DAYS)),
        sub=sub,
    )


def create_refresh_token(*, sub: str) -> str:
    return _create_token(
        token_type="refresh_token",
        lifetime=timedelta(days=float(ACCESS_TOKEN_EXPIRE_DAYS * 7)),
        sub=sub,
    )


def _create_token(
        token_type: str,
        lifetime: timedelta,
        sub: str,
) -> str:
    payload = {}
    expire = datetime.utcnow() + lifetime
    payload["type"] = token_type
    payload["exp"] = expire
    payload["iat"] = datetime.utcnow()
    payload["sub"] = str(sub)

    return jwt.encode(payload, JWT_SECRET, algorithm='HS256')


# Decodes JWT token
async def verify_token(token: str):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms='HS256')
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"}
        )
    return payload.get("email")
