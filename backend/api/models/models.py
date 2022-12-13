from uuid import uuid4
from pydantic import BaseModel

from pydantic import BaseModel
from sqlalchemy import (Column, ForeignKey, Integer,
                        String, Float, DateTime, Date, Text, Boolean)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from api.database.database import Base


class Company(Base):
    __tablename__ = "company"

    company_id = Column("company_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    name = Column(String(100), unique=True, index=True)
    location = Column(String(100))
    description = Column(String(10000))
    profile_image = Column(String(200), nullable=True)
    market_cap = Column(Float, nullable=True)
    sector = Column(String(64), ForeignKey("sectors.sector_id"))
    industry = Column(String(64), ForeignKey("industries.industry_id"))
    category = Column(String(64), ForeignKey("categories.category_id"))
    ticker = Column(String(64), ForeignKey("tickers.ticker_id"))

    sect_value = relationship("Sector", back_populates="sect")
    industry_value = relationship("Industry", back_populates="industry_value")
    cat_value = relationship("Category", back_populates="cat")
    ticker_value = relationship("Ticker", back_populates="tick")
    stock_price_value = relationship("StockPrice", back_populates="company_value")
    financial_value = relationship("Financial", back_populates="finance")
    ranks_value = relationship("Ranking", back_populates="comp_ranks")


class StockPrice(Base):
    __tablename__ = "stock_prices"

    stock_price_id = Column("stock_price_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    company = Column(String(64), ForeignKey("company.company_id"))
    stock_price = Column(Float, nullable=True)
    date = Column(Date())
    annual_stock_return = Column(Float, nullable=True)
    average_volume = Column(Float, nullable=True)
    volume = Column(Float, nullable=True)
    exchange_platform = Column(String(30))
    price_risk = Column(Float, nullable=True)
    pe_ratio = Column(Float, nullable=True)
    peg_ratio = Column(Float, nullable=True)
    total_price_value = Column(Float, nullable=True)
    de_ratio = Column(Float, nullable=True)
    current_ratio = Column(Float, nullable=True)
    roe_ratio = Column(Float, nullable=True)
    quick_ratio = Column(Float, nullable=True)
    pb_ratio = Column(Float, nullable=True)
    ps_ratio = Column(Float, nullable=True)
    gross_profit_margin = Column(Float, nullable=True)
    dividend_yield = Column(Float, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    company_value = relationship("Company", back_populates="stock_price_value")


class Financial(Base):
    __tablename__ = "financials"

    financial_id = Column("financial_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    company = Column(String(64), ForeignKey("company.company_id"))
    date = Column(Date())
    equity = Column(Float, nullable=True)
    dividend_per_stock = Column(Float, nullable=True)
    earnings_per_share = Column(Float, nullable=True)
    growth_rate = Column(Float, nullable=True)
    total_revenue = Column(Float, nullable=True)
    ttm = Column(Float, nullable=True)
    operating_cost = Column(Float, nullable=True)
    income_statement = Column(Float, nullable=True)
    income_statement_type = Column(String(30))
    gross_profit = Column(Float, nullable=True)
    operating_expenses = Column(Float, nullable=True)
    ebitda = Column(Float, nullable=True)
    net_income = Column(Float, nullable=True)
    revenue_growth = Column(Float, nullable=True)
    operating_expenses_growth = Column(Float, nullable=True)
    gross_profit_growth = Column(Float, nullable=True)
    net_income_growth = Column(Float, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    finance = relationship("Company", back_populates="financial_value")


class Ranking(Base):
    __tablename__ = 'rankings'

    ranking_id = Column("ranking_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    company = Column(String(64), ForeignKey("company.company_id"))
    score = Column(Float)
    methodology = Column(String(1000), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now())

    comp_ranks = relationship("Company", back_populates='ranks_value')


class Sector(Base):
    __tablename__ = "sectors"

    sector_id = Column("sector_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    sector = Column(String(100))

    sect = relationship("Company", back_populates="sect_value")


class Industry(Base):
    __tablename__ = "industries"

    industry_id = Column("industry_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    sector = Column(String(64), ForeignKey("sectors.sector_id"))
    industry = Column(String(100))

    industry_value = relationship("Company", back_populates="industry_value")


class Ticker(Base):
    __tablename__ = "tickers"

    ticker_id = Column("ticker_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    symbol = Column(String(10))
    exchange_name = Column(String(30))
    exchange_symbol = Column(String(10))
    exchange_website = Column(String(30), nullable=True)
    isin = Column(String(30), nullable=True)

    tick = relationship("Company", back_populates="ticker_value")


class Category(Base):
    __tablename__ = "categories"

    category_id = Column("category_id", String(64), primary_key=True, index=True, default=str(uuid4()))
    market_cap = Column(Float)
    name = Column(String(30))

    cat = relationship("Company", back_populates="cat_value")


class User(Base):
    __tablename__ = "user"

    id = Column("user_id", String(64), primary_key=True, index=True, default=str(uuid4))
    email = Column(String(30))
    name = Column(String(30))
    password = Column(String(100))
    is_verified = Column(Boolean, default=False)

    customer = relationship("Customer", back_populates="user_value")
    notifications_settings_value = relationship("NotificationSettings", back_populates="user_value")


class Customer(Base):
    __tablename__ = "customer"

    user_id = Column(String(64), ForeignKey("user.user_id"))
    customer_id = Column(String(64), primary_key=True, index=True, default=str(uuid4))
    subscription_id = Column(String(64), nullable=True)
    subscription_status = Column(String(64), nullable=True)
    current_pricing_id = Column(String(64), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now())

    user_value = relationship("User", back_populates="customer")


class Product(Base):
    __tablename__ = "product"

    name = Column(String(64))
    price = Column(Float)
    price_id = Column(String(64), primary_key=True, index=True)
    sub_type = Column(String(64))


class CreateUserModel(BaseModel):
    email: str
    name: str
    password: str


class NotificationSettings(Base):
    __tablename__ = "notification_settings"

    notification_settings_id = Column(String(64), primary_key=True, index=True, default=str(uuid4))
    user_id = Column(String(64), ForeignKey("user.user_id"))
    receive_for_small_caps = Column(Boolean, default=True)
    receive_for_mid_caps = Column(Boolean, default=True)
    receive_for_high_caps = Column(Boolean, default=True)
    notifications_enabled = Column(Boolean, default=False)

    user_value = relationship("User", back_populates="notifications_settings_value")


class WatchlistItem(Base):
    __tablename__ = "watchlist_items"

    id = Column("watchlist_item_id", String(64), primary_key=True, index=True, default=str(uuid4))
    user_id = Column(String(64), ForeignKey("user.user_id"))
    company_id = Column(String(64), ForeignKey("company.company_id"))

    company = relationship("Company")


class NewsLetter(Base):
    __tablename__ = "newsletter"

    id = Column("newletter_id", Integer, primary_key=True, index=True, autoincrement=True)
    email = Column(String(64))
    subscribed = Column(Boolean, default=False)


class UpdateNotificationSettingsModel(BaseModel):
    notifications_enabled: bool = None
    receive_for_small_caps: bool = None
    receive_for_mid_caps: bool = None
    receive_for_high_caps: bool = None


class PasswordResetRequest(Base):
    __tablename__ = "password_reset_requests"

    email = Column(String(100), primary_key=True, index=True)
    verification_code = Column(String(64))
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class InitPasswordResetModel(BaseModel):
    email: str


class FinalizePasswordResetModel(BaseModel):
    new_password: str
    code: str


class UpdatePasswordModel(BaseModel):
    current_password: str
    new_password: str


class UpdateEmailModel(BaseModel):
    email: str
