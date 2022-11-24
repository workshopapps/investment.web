from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, FastAPI

from pydantic import BaseModel

from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.models.models import User

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def User(db: Session=Depends(get_db)):
    user_id = db.query(User).get(id=1) 
    EMAIL = db.query(User).get(email).filter(id=1)
    NAME = db.query(User).get(name).filter(id=1)

def decode_token(token):
    return User(user_id=token, name=NAME, email=EMAIL)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    return user

@app.get("/users/")
async def read_users(current_user: User = Depends(get_current_user)):
    return current_user