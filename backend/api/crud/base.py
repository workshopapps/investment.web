from passlib.context import CryptContext
from sqlalchemy.orm import Session

from api.database import database
from api.models import models

PWD_CONTEXT = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db():
    """Gets the database from the local session"""
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_company(db: Session, company_id: str):
    return db.query(models.Company).filter(models.Company.company_id == company_id).first()

def get_ranks(db:Session, ranking_id: str):
    return db.query(models.Ranking).filter(models.Ranking.ranking_id == ranking_id).first()

def hash_password(password: str) -> str:
    return PWD_CONTEXT.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return PWD_CONTEXT.verify(plain_password, hashed_password)
