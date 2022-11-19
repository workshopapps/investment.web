from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.crud import base
from api.crud.base import get_db
from api.models import models
from datetime import datetime

router = APIRouter()



@router.get('/company/{id}')
# Returns a url in the format curl --location -g --request GET '{{baseUrl}}/company/{id}/?startDateTimestamp=1668255638&endDateTimestamp=1668342483'
async def get_company_timeframe(id: str, startDateTimestamp: int, endDateTimestamp: int, db: Session = Depends(get_db)):

    """
    This gets the value of a company within a specified interval
    """
    startDateTimestamp = datetime()
    endDateTimestamp = datetime()
    
    interval = db.query(models.Ranking).filter(models.Ranking.created_at >= startDateTimestamp, models.Ranking.created_at <= endDateTimestamp)

    interval.json() # convert the data to json

    if interval is None:
        raise HTTPException(status_code=404, detail="Company info not available")

    return {'interval': interval}
    

