from sqlalchemy import (Boolean, Column, ForeignKey, 
                            Integer, String, Float, DateTime)
from sqlalchemy.orm import relationship
from uuid import uuid4
from sqlalchemy.sql import func
# from fastapi_utils.guid_type import GUID, GUID_DEFAULT_SQLITE

import datetime

from database import Base

class Company(Base):
    __tablename__ = "company"

    company_id = Column(String, primary_key=True, index=True, default=uuid4())
    name = Column(String, unique=True, index=True)
    location = Column(String, max_length=200)
    description = Column(String)
    sector = Column(String, ForeignKey("sectors.industry"))
    category = Column(Float, ForeignKey("categories.market_cap", on_delete="CASCADE"))
    ticker = Column(String, ForeignKey("tickers.symbol"))

    sect_value = relationship("Sector", data_populates="sect")
    cat_value = relationship("Category", data_populates="cat")
    ticker_value = relationship("Ticker", data_populates="tick")
    stock_price_value = relationship("StockPrice", data_populates="company_value")
    financial_value = relationship("Financial", data_populates="finance")

class StockPrice(Base):
    __tablename__="stock_prices"

    stock_price_id = Column(String, primary_key=True, index=True, default=uuid4())
    company = Column(String, ForeignKey("company.name", on_delete="CASCADE"))
    market_cap = Column(Float)
    stock_price = Column(Float)
    date = Column(DateTime(timezone=True), server_default=func.now())
    annual_stock_return = Column(Float)
    average_volume = Column(Float)
    volume = Column(Float)
    exchange_platform = Column(String, max_length=100)
    price_risk = Column(Float)
    pe_ratio = Column(Float)
    peg_ratio = Column(Float)
    total_price_value = Column(Float)

    company_value = relationship("Company", data_populates="stock_price_value")

class Ranking(Base):
    ranking_id = Column(String, primary_key=True, index=True, default=uuid4())
    company = Column(String, ForeignKey("company.name", on_delete="CASCADE"))
    score = Column(Float)
    methodology = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now() )

class Sector(Base):
    __tablename__ = "sectors"

    sector_id = Column(String, primary_key=True, index=True, default=uuid4())
    industry = Column(String, max_length=100)

    sect = relationship("Company", data_populates="sect_value")

class Ticker(Base):
    __tablename__ = "tickers"
    
    ticker_id = Column(String, primary_key=True, index=True, default=uuid4())
    symbol = Column(String, max_length=20)
    exchange_name = Column(String, max_length=200)
    exchange_symbol = Column(String, max_length=200)
    exchange_website = Column(String, max_length=200)
    isin = Column(Integer)

    tick = relationship("Company", data_populates="ticker_value")

class Financial(Base):
    __tablename__ = "financials"

    financial_id = Column(String, primary_key=True, index=True, default=uuid4())
    company = Column(String, ForeignKey("company.name", on_delete="CASCADE"))
    date = Column(DateTime(timezone=True), server_default=func.now())
    equity = Column(Float)
    dividend_per_stock = Column(Float)
    earnings_per_share = Column(Float)
    growth_rate = Column(Float)
    total_revenue = Column(Float)
    ttm = Column(Float)
    operating_cost = Column(Float)
    gross_profit = Column(Float)
    income_statement = Column(Float)
    income_statement_type = Column(ENUM(pass)) # this should contain a particular argument as required by the PM

    finance = relationship("Company", data_populates="financial_value")
    
class Category(Base):
    __tablename__ = "categories"

    category_id = Column(String, primary_key=True, index=True, default=uuid4())
    market_cap = Column(Float)
    name = Column(String, max_length=100)

    cat = relationship("Company", data_populates="cat_value")