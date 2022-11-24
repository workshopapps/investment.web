from pydantic import BaseModel, EmailStr
from datetime import date as date_type
from typing import Optional, List, Dict


class CompanyBase(BaseModel):
    name: str
    location: str
    description: str

    # class Config:
    #     orm_mode = True

class Company(CompanyBase):
    company_id: str
    sector: str
    category: str
    ticker: str

    class Config:
        orm_mode = True


class StockPriceBase(BaseModel):
    market_cap: float
    stock_price: float
    date: date_type
    annual_stock_return: float
    average_volume: float
    volume: float
    exchange_platform: str
    price_risk: float
    pe_ratio: float
    peg_ratio: float
    total_price_value: float
    de_ratio: float
    current_ratio: float
    roe_ratio: float
    quick_ratio: float
    pb_ratio: float
    ps_ratio: float
    gross_profit_margin: float
    dividend_yield: float


class StockPrice(StockPriceBase):
    stock_price_id: str
    company: str

    class Config:
        orm_mode = True


class RankingBase(BaseModel):
    score: float
    methodology: str
    created_at: date_type


class Ranking(RankingBase):
    ranking_id: str
    company: str

    class Config:
        orm_mode = True


class Sector(BaseModel):
    sector_id: str
    industry: str

    class Config:
        orm_mode = True


class Ticker(BaseModel):
    ticker_id: str
    symbol: str
    exchange_name: str
    exchange_symbol: str
    exchange_website: str
    isin: str

    class Config:
        orm_mode = True


class FinancialBase(BaseModel):
    date: date_type
    equity: float
    dividend_per_stock: float
    earnings_per_share: float
    growth_rate: float
    total_revenue: float
    ttm: float
    operating_cost: float
    gross_profit: float
    income_statement: float
    income_statement_type: str


class Financial(FinancialBase):
    financial_id: str
    company: str

    class Config:
        orm_mode = True


class Category(BaseModel):
    category_id: str
    market_cap: float
    name: str

class User(BaseModel):
    user_id: str
    email: str
    name: str
    
    class Config:
        orm_mode = True


