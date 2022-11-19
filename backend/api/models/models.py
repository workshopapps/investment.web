from sqlalchemy import (Boolean, Column, ForeignKey, 
                            Integer, String, Float, DateTime)
from sqlalchemy.orm import relationship
from uuid import uuid4
from sqlalchemy.sql import func
from api.database.database import Base


class Company(Base):
    __tablename__ = "company"

    company_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    name = Column(String(100), unique=True, index=True)
    location = Column(String(100))
    description = Column(String(1000))
    sector = Column(String(64), ForeignKey("sectors.sector_id"))
    category = Column(String(64), ForeignKey("categories.category_id"))
    ticker = Column(String(64), ForeignKey("tickers.ticker_id"))

    sect_value = relationship("Sector", back_populates="sect")
    cat_value = relationship("Category", back_populates="cat")
    ticker_value = relationship("Ticker", back_populates="tick")
    stock_price_value = relationship("StockPrice", back_populates="company_value")
    financial_value = relationship("Financial", back_populates="finance")


class StockPrice(Base):
    __tablename__ = "stock_prices"

    stock_price_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    company = Column(String(64), ForeignKey("company.company_id"))
    market_cap = Column(Float)
    stock_price = Column(Float)
    date = Column(DateTime(timezone=True), server_default=func.now())
    annual_stock_return = Column(Float)
    average_volume = Column(Float)
    volume = Column(Float)
    exchange_platform = Column(String(30))
    price_risk = Column(Float)
    pe_ratio = Column(Float)
    peg_ratio = Column(Float)
    total_price_value = Column(Float)

    company_value = relationship("Company", back_populates="stock_price_value")


class Ranking(Base):
    __tablename__ = 'rankings'
    ranking_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    company = Column(String(64), ForeignKey("company.company_id"))
    score = Column(Float)
    methodology = Column(String(1000))
    created_at = Column(DateTime(timezone=True), server_default=func.now() )


class Sector(Base):
    __tablename__ = "sectors"

    sector_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    industry = Column(String(64))

    sect = relationship("Company", back_populates="sect_value")


class Ticker(Base):
    __tablename__ = "tickers"
    
    ticker_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    symbol = Column(String(10))
    exchange_name = Column(String(30))
    exchange_symbol = Column(String(10))
    exchange_website = Column(String(30))
    isin = Column(Integer)

    tick = relationship("Company", back_populates="ticker_value")


class Financial(Base):
    __tablename__ = "financials"

    financial_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    company = Column(String(64), ForeignKey("company.company_id"))
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
    income_statement_type = Column(String(30))

    finance = relationship("Company", back_populates="financial_value")


class Category(Base):
    __tablename__ = "categories"

    category_id = Column(String(64), primary_key=True, index=True, default=uuid4())
    market_cap = Column(Float)
    name = Column(String(30))

    cat = relationship("Company", back_populates="cat_value")
