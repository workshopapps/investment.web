from fastapi import APIRouter, Depends, HTTPException
from api.crud import base
from api.models import models
from api.schemas import schemas

from sqlalchemy.orm import Session

from api.database import database

router = APIRouter()

def get_db():
    """Gets the database from the local session"""
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get('/company/{company_id}', tags=["company"], response_model=schemas.Company)
async def metrics_data(company_id: str, db: Session = Depends(get_db)):
    db_user = base.get_company(db, company_id=company_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="Company info not available")
    print(db_user.json())
    return db_user
    # return {
    #     'Company ': {
    #                 'company_id' : 'company_id',
    #                 'name': 'name_of_company',
    #                 'location': 'location',
    #                 'description': 'description of country',
    #                 'sector': {
    #                     'sector_id': 'sector_id',
    #                     'industry': 'industry',
    #                 },
    #                 'category': {
    #                     'category_id': 'category_id',
    #                     'market_cap': 'market_cap',
    #                     'name': 'name'
    #                 },
    #                 'ticker': {
    #                     'ticker_id': 'ticker_id',
    #                     'symbol': 'symbol',
    #                     'exchange_name': 'exchange_name',
    #                     'exchange_symbol': 'exchange_symbol',
    #                     'exchange_website': 'exchange_website',
    #                     'isin': 'isin_int'
    #                 },
    #                 'Ranking': {
    #                     'ranking_id': 'ranking_id',
    #                     'company': 'company_id',
    #                     'created_at': 'date'
    #                 },
    #                 'stockPrice' : {
    #                     'stock_price_id': 'stock_price_id',
    #                     'company': 'company_id',
    #                     'market_cap': 'market_cap',
    #                     'stock_price': 'stock_price',
    #                     'date': 'date',
    #                     'annual_stock_return': 'annual_stock_return',
    #                     'average_volume': 'average_volume',
    #                     'volume': 'volume',
    #                     'exchange_platform': 'exchange_platform',
    #                     'price_risk': 'price_risk',
    #                     'pe_ratio': 'pe_ratio',
    #                     'peg_ratio': 'peg_ratio',
    #                     'total_price_value': 'total_price_value'                            
    #                 },
    #                 'financial': {
    #                     'financial_id': 'financial_id',
    #                     'company': 'company_id',
    #                     'date': 'date',
    #                     'equity': 'equity',
    #                     'dividend_per_stock': 'dividend_per_stock',
    #                     'earnings_per_share': 'earnings_per_share',
    #                     'growth_rate': 'growth_rate',
    #                     'total_revenue': 'total_revenue',
    #                     'ttm': 'ttm',
    #                     'operating_cost': 'operating_cost',
    #                     'gross_profit': 'gross_profit',
    #                     'income_statement': 'income_statement',
    #                     'income_statement_type': 'income_statement_type'
    #                 }
    #             }
    #         }