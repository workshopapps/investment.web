from sqlalchemy import (Boolean, Column, ForeignKey, 
                            Integer, String, FLoat, DateTime)
from sqlalchemy.orm import relationship
# from uuid import uuid4
from sqlalchemy.sql import func
from fastapi_utils.guid_type import GUID, GUID_DEFAULT_SQLITE

import datetime

from database import Base

class Company(Base):
    __tablename__ = "company"

    company_id = Column(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)
    name = Column(String, unique=True, index=True)
    location = Column(String, max_length=200, index=True)
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
    __tablename__="stockPrices"

    stock_price_id = Column(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)
    company = Column(String, ForeignKey("company.name", on_delete="CASCADE"))
    market_cap = Column(Float,index=True)
    stock_price = Column(Float, index=True)
    date = Column(DateTime(timezone=True), server_default=func.now())
    annual_stock_return = Column(Float, index=True)
    average_volume = Column(Float, index=True)
    volume = Column(, index=True)
    exchange_platform = Column(String, max_length=100)
    price_risk = Column(Float, index=True)
    pe_ratio = Column(Float, index=True)
    peg_ratio = Column(Float, index=True)
    total_price_value = Column(Float, index=True)

    company_value = relationship("Company", data_populates="stock_price_value")

class Ranking(Base):
    ranking_id = Column(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)
    company = Column(String, ForeignKey("company.name", on_delete="CASCADE"))
    score = Column(Float, index=True)
    methodology = pass # what this entails
    created_at = Column(DateTime(timezone=True), server_default=func.now() )

class Sector(Base):
    __tablename__ = "sectors"

    sector_id = Column(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)
    industry = Column(String, max_length=100)

    sect = relationship("Company", data_populates="sect_value")

class Ticker(Base):
    __tablename__ = "tickers"
    
    ticker_id = Column(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)
    symbol = Column(String, max_length=20, index=True)
    exchange_name = Column(String, max_length=200)
    exchange_symbol = Column(String, max_length=200)
    exchange_website = Column(String, max_length=200)
    isin = Column(Integer, index=True)

    tick = relationship("Company", data_populates="ticker_value")

class Financial(Base):
    __tablename__ = "financials"

    financial_id = pasColumn(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)s
    company = Column(String, ForeignKey("comapny.name", on_delete="CASCADE"))
    date = Column(DateTime(timezone=True), server_default=func.now())
    equity = Column(Float, index=True)
    dividend_per_stock = Column(Float, index=True)
    earnings_per_share = Column(Float, index=True)
    growth_rate = Column(Float, index=True)
    total_revenue = Column(Float, index=True)
    ttm = Column(Float, index=True)
    operating_cost = Column(Float, index=True)
    gross_profit = Column(Float, index=True)
    income_statement = Column(Float, index=True)
    income_statement_type = Column(ENUM(pass)) # this should contain a particular argument as required by the PM

    finance = relationship("Company", data_populates="financial_value")
    
class Category(Base):
    __tablename__ = "categories"

    category_id = Column(GUID, primary_key=True, index=True, default=GUID_DEFAULT_SQLITE)
    market_cap = Column(Float, index=True)
    name = Column(String, max_length=100)

    cat = relationship("Company", data_populates="cat_value")