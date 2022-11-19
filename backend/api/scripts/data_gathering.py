import os
import random
from uuid import uuid4

import httpx
from dotenv import load_dotenv
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.models.models import Company, Ticker, Sector, Category

load_dotenv()

client = httpx.AsyncClient()
base_api_url = 'https://financialmodelingprep.com/api/v3'
query_params = {'apikey': os.getenv('FINANCIAL_MODEL_PREP_API_KEY')}


async def call_api(url: str, queries=None):
    # get the data from the API
    if queries is None:
        queries = {}
    result = await client.get(f"{base_api_url}/{url}", params={**query_params, **queries})

    # parse the data
    data = result.json()
    return data


def sort_categories(category: Category):
    return category.market_cap


async def create_company(company: dict, db: Session):
    company_profile = await call_api(f"profile/{company['symbol']}")
    company_profile = company_profile[0]
    ticker_id = str(uuid4())
    sector_id = str(uuid4())

    # insert ticker
    insert_ticker = Ticker(ticker_id=ticker_id, symbol=company['symbol'],
                           exchange_name=company['exchange'], exchange_symbol=company['exchangeShortName'],
                           isin=company_profile['isin'])
    db.add(insert_ticker)

    # insert sector
    insert_sector = Sector(sector_id=sector_id, industry=company_profile['sector'])
    db.add(insert_sector)

    # determine the category for the company
    categories: list = db.query(Category).all()
    categories.sort(key=sort_categories, reverse=True)
    company_market_cap = company_profile['mktCap']
    company_category: Category = categories[0]
    for category in categories:
        if company_market_cap >= category.market_cap:
            company_category = category
            break

    # insert the company
    insert_company = Company(company_id=company['symbol'], name=company['name'],
                             location=company_profile['country'], description=company_profile['description'],
                             sector=sector_id, category=company_category.category_id, ticker=ticker_id)
    db.add(insert_company)
    db.commit()


async def pick_four_random_companies():
    # get companies
    data = await call_api('available-traded/list', {'query': 'USD'})

    # shuffle the list
    random.shuffle(data)

    # pick four companies
    companies = []

    for company in data:
        if len(companies) == 4:
            break

        if company['exchangeShortName'] == 'NYSE':
            companies.append(company)

    # Insert new companies to the database
    db: Session = next(get_db())
    for company in companies:
        symbol = company['symbol']
        query_result = db.query(Company).filter(Company.company_id == symbol).first()
        if not query_result:
            # create the company since it doesn't exist yet
            await create_company(company, db)

        # get ratios and financial growth from API
        ratios = await call_api(f"ratios/{symbol}")
        financial_growth = await call_api(f"financial-growth/{symbol}")

        for ratio in ratios:
            stock_price_id = f"{symbol}"