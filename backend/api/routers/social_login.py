from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.models import models
from api.schemas import schemas
from api.crud.base import get_db
from starlette.config import Config
from starlette.requests import Request
from authlib.integrations.starlette_client import OAuth, OAuthError

router = APIRouter()

config = Config('.env')  # read config from .env file
oauth = OAuth(config)
CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'
oauth.register(
    name='google',
    server_metadata_url=CONF_URL,
    client_kwargs={
        'scope': 'openid email profile'
    }
)

@router.get('/googlelogin')
async def google_login(request: Request):
    redirect_uri = request.url_for('auth')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get('/auth') #auth redirection
async def auth(request: Request):
    db: Session = next(get_db())
    try:
        token = await oauth.google.authorize_access_token(request)
    except OAuthError as error:
        return {"Error": "authentication error"}
    username = token['userinfo'] 
    google_user_data = {'user_id':username['sub'], 
                        'profile_picture':username['picture'], 
                        'email_verified':username['email_verified'], 
                        'email':username['email'],
                        'name':username['name']}
    google_user = schemas.User

    #check whwther user already exists
    user_data = db.query(models.User).filter(models.User.id == username['sub']).first() 
    if user_data: 
        old_user_type_data = {'user_type': 'old user'}
        old_user_data = {**google_user_data, **old_user_type_data}
        return old_user_data
    else:
        user = schemas.User
        thename = username['name']
        theid = username['sub']
        theemail = username['email']
        
        db_user = models.User(id=theid, email=theemail, name=thename)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        new_user_type_data = {'user_type': 'new user(added to database)'}
        new_user_data = {**google_user_data, **new_user_type_data}
        return new_user_data
    