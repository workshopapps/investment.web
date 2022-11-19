from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.crud.base import get_db
from api.models import models

router = APIRouter()


#edikan

# get all companies ranking history by company id
@router.get('/company/{id}/ranking/history')
async def get_company_ranks_history_by_id(id: str, db: Session = Depends(get_db)):
    rankings = db.query(models.Ranking).filter(models.Ranking.id == id).all()
    if rankings:
        return rankings
    raise HTTPException(404, f'There are no companies with the ranking detail provided.')

