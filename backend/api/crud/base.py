from sqlalchemy.orm import Session
from api.models import models
from api.schemas import schemas

def get_db():
    """Gets the database from the local session"""
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_company(db:Session, company_id: str):
    return db.query(models.Company).filter(models.Company.company_id == company_id).first()

def get_ranks(db:Session, ranking_id: str):
    return db.query(models.Ranking).filter(models.Ranking.ranking_id == ranking_id).first()