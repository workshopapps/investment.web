import os
from datetime import timedelta, datetime
from typing import Any, Optional, MutableMapping, Union, List

from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from sqlalchemy.orm import Session

from api.crud.base import get_db, verify_password, hash_password
from api.models import models
from api.models.models import User, CreateUserModel
from uuid import uuid4
from ..scripts.email import send_reset_password_email

load_dotenv()

from google.oauth2 import id_token
from google.auth.transport import requests

router = APIRouter()

GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES')
API_URL = os.getenv('API_URL')
JWT_SECRET = os.getenv('JWT_SECRET')

JWTPayloadMapping = MutableMapping[
    str, Union[datetime, bool, str, List[str], List[int]]
]

# creates OAuth2PasswordBearer instance with token url as parameter as json
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{API_URL}/auth/login")


# google auth endpoint
@router.get('/google_auth', tags=['Auth'], description="Endpoint for both Google login and Google singup")
def authentication(token: str):
    try:
        # verify the jwt signature
        user = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
        name = user['name']
        email = user['email']

        db: Session = next(get_db())
        current_user: User = db.query(models.User).filter(models.User.id == id).first()

        def generate_token(user_id: str):
            return {
                "access_token": create_access_token(sub=user_id),
                "token_type": "Bearer",
            }

        # check whether the user already exist
        if current_user:
            return generate_token(current_user.id)

        # add new user to database
        db_user: User = models.User(email=email, name=name)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return generate_token(db_user.id)

    except ValueError:
        return HTTPException(status_code=401, detail='Invalid token')


# login route returns access token and token type
@router.post("/login", tags=['Auth'])
def login(form_data: OAuth2PasswordRequestForm = Depends()
          ) -> Any:
    db: Session = next(get_db())

    user = authenticate(email=form_data.username, password=form_data.password, db=db)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {
        "access_token": create_access_token(sub=user.id),
        "token_type": "Bearer",
    }


@router.post("/reset-password", tags=['Auth'])
async def request_password_reset(email: str):
    db: Session = next(get_db())

    # check if user email exists in database
    user = db.query(models.User).filter(models.User.email == email).all()
    # if it exists, get user id and generate an auth token to be sent to user email
    if user:
        token = uuid4()
        reset_link = f"http://localhost:8000/docs/reset?token={token}"

        data = "Hi, here's your password reset link" + ' ' + reset_link
        await send_reset_password_email(email=email, content=data)

        return "email sucessfully sent"
    else:
        return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User with this email does not exist")
    # send magic link with auth token to user email


@router.post("/signup", tags=['Auth'])
def signup(user: CreateUserModel):
    db: Session = next(get_db())
    existing_user: User = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="This email is already registered"
        )
    else:
        db_user = User(id=str(uuid4()), email=user.name, name=user.email, password=hash_password(user.password))
        db.add(db_user)
        db.commit()

    return {"message": "Account created successfully"}


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
        lifetime=timedelta(minutes=float(ACCESS_TOKEN_EXPIRE_MINUTES)),
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
