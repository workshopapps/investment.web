from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.models import models
from api.schemas import schemas
from api.crud.base import get_db
from starlette.config import Config
from starlette.requests import Request
from dotenv import load_dotenv
import os
load_dotenv()

from google.oauth2 import id_token
from google.auth.transport import requests


router = APIRouter()
CLIENT_ID = os.getenv('CLIENT_ID')



@router.get('/auth', tags=['Auth'])
def authentication(request: Request,token:str):
    try:
        #verify the jwt signature
        user =id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
        id = user['sub']
        name = user['name']
        email = user['email']

        db: Session = next(get_db())
        current_user = db.query(models.User).filter(models.User.id == id).first()

        #check whether the user already exist
        if current_user:
            return {'message': 'authentication successful'}
         #add new user to database 
        db_user = models.User(id=id, email=email, name=name)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return {'message': 'authentication successful'}
  
    except ValueError:
        return HTTPException(status_code=401, detail='invalid token')
