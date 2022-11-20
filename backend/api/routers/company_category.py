from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.crud.base import get_db
from api.models import models

router = APIRouter()

"""
    This queries the company model in the database to check
    for the category and return companies based on the
    category (that is high, low or mid market cap)
"""
@router.get('/company/ranks/{category}')
async def get_company_category(category: str, db: Session = Depends(get_db)):
    companies = db.query(models.Company).filter(models.Company.description == category).all()
    
    if companies:
        return companies
    raise HTTPException(404, f'There are no companies with the ranking detail provided.')
        