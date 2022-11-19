from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.models import models
from api.crud.base import get_db

router = APIRouter()

@router.get('/company/ranking')
async def get_list_of_ranked_companies(score: float, db: Session = Depends(get_db)):
    companies_ranking = db.query(models.Ranking).filter(models.Ranking.id == score).all()

    if companies_ranking:
        return companies_ranking
    raise HTTPException(status_code=404, detail="List of ranked companies unavailable")