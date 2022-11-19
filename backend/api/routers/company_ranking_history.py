from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.crud.base import get_db
from api.models import models

router = APIRouter()


#edikan
        
 #get all companies ranking 
@router.get('/company/ranks')
async def get_company_ranks(db: Session = Depends(get_db)):
    companies = db.query(models.Company).all()
    if companies:
        return companies
    raise HTTPException(404, f'There are no companies with the ranking detail provided.')

#get all companies ranking history  
@router.get('/company/ranks/history')
async def get_company_ranks_history(db: Session = Depends(get_db)):
    companies = db.query(models.Company).all()
    if companies:
        return companies
    raise HTTPException(404, f'There are no companies with the ranking detail provided.')

# get all companies ranking history by company id
@router.get('/company/ranks/history/{company_id}')
async def get_company_ranks_history_by_id(company_id: str, db: Session = Depends(get_db)):
    companies = db.query(models.Company).filter(models.Company.company_id == company_id).all()
    if companies:
        return companies
    raise HTTPException(404, f'There are no companies with the ranking detail provided.')
