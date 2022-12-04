import os
import random
from uuid import uuid4

import httpx
from dotenv import load_dotenv
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.models.models import Company, Ticker, Sector, Category, StockPrice, Financial, Industry

load_dotenv()

client = httpx.AsyncClient()
base_api_url = 'https://financialmodelingprep.com/api/v3'
query_params = {'apikey': os.getenv('FINANCIAL_MODEL_PREP_API_KEY')}


async def call_api(url: str, queries=None):
    """ Makes a call to the financial modelling grep API and returns the parsed result """
    # get the data from the API
    if queries is None:
        queries = {}
    result = await client.get(f"{base_api_url}/{url}", params={**query_params, **queries})

    # parse the data
    data = result.json()
    return data


def sort_categories_key(category: Category):
    """ A function that returns the key to sort categories by """
    return category.market_cap


async def create_company(company: dict, db: Session):
    """ Creates a new company and insert it to the database """
    company_profile = await call_api(f"profile/{company['symbol']}")
    company_profile = company_profile[0]
    ticker_id = str(uuid4())
    sector_id = str(uuid4())

    # only use companies with market cap
    if not company_profile['mktCap'] > 0:
        return None

    # insert ticker
    insert_ticker = Ticker(ticker_id=ticker_id, symbol=company['symbol'],
                           exchange_name=company['exchange'], exchange_symbol=company['exchangeShortName'],
                           isin=company_profile['isin'])
    db.add(insert_ticker)

    # get or insert sector
    sector = db.query(Sector).filter(Sector.sector == company_profile['sector']).first()
    if not sector:
        sector = Sector(sector_id=sector_id, sector=company_profile['sector'])
        db.add(sector)
        db.commit()

    # get or insert industry
    industry = db.query(Industry).filter(Industry.industry == company_profile['industry'],
                                         Industry.sector == sector.sector_id).first()
    if not industry:
        industry = Industry(industry_id=str(uuid4()), industry=company_profile['industry'],
                            sector=sector.sector_id)
        db.add(industry)

    # determine the category for the company
    categories: list = db.query(Category).all()
    categories.sort(key=sort_categories_key, reverse=True)
    company_market_cap = company_profile['mktCap']
    company_category: Category = categories[len(categories) - 1]
    for category in categories:
        if company_market_cap >= category.market_cap:
            company_category = category
            break

    # insert the company
    insert_company = Company(company_id=company['symbol'], name=company['name'],
                             location=company_profile['country'], description=company_profile['description'],
                             sector=sector.sector_id, category=company_category.category_id, ticker=ticker_id,
                             market_cap=company_profile['mktCap'], profile_image=company_profile['image'],
                             industry=industry.industry_id)
    db.add(insert_company)
    db.commit()

    return True


async def create_or_update_stock_price(ratio: dict, stock_price_id: str, company_id: str, db: Session):
    """ Creates a new stock price record or updates an existing one """
    insert_stock = StockPrice(stock_price_id=stock_price_id, company=company_id,
                              stock_price=ratio['priceFairValue'], pe_ratio=ratio['priceEarningsRatio'],
                              peg_ratio=ratio['priceEarningsToGrowthRatio'],
                              de_ratio=ratio['debtEquityRatio'], current_ratio=ratio['currentRatio'],
                              roe_ratio=ratio['returnOnEquity'], quick_ratio=ratio['quickRatio'],
                              pb_ratio=ratio['priceToBookRatio'], ps_ratio=ratio['priceToSalesRatio'],
                              gross_profit_margin=ratio['grossProfitMargin'],
                              dividend_yield=ratio['dividendYield'], date=ratio['date'])
    db.add(insert_stock)
    db.commit()
    return insert_stock


async def create_or_update_financial(financial: dict, financial_id: str, company_id: str,
                                     income_statement: dict, income_statement_growth: dict,
                                     db: Session):
    """ Creates a new financials record or updates an existing one"""
    insert_financial = Financial(financial_id=financial_id, company=company_id,
                                 growth_rate=financial['revenueGrowth'],
                                 income_statement_type='Annual', date=financial['date'],
                                 gross_profit=income_statement['grossProfit'],
                                 operating_expenses=income_statement['operatingExpenses'],
                                 ebitda=income_statement['ebitda'],
                                 net_income=income_statement['netIncome'],
                                 revenue_growth=income_statement_growth['growthRevenue'],
                                 operating_expenses_growth=income_statement_growth['growthOperatingExpenses'],
                                 gross_profit_growth=income_statement_growth['growthGrossProfit'],
                                 net_income_growth=income_statement_growth['growthNetIncome'],
                                 total_revenue=income_statement['revenue'])
    db.add(insert_financial)
    db.commit()
    return insert_financial


async def pick_random_companies():
    """ Picks random companies from the API, fetch their metrics and store their records"""
    count = 2
    # get companies
    data = await call_api('available-traded/list', {'query': 'USD'})

    # shuffle the list
    random.shuffle(data)

    # pick four companies
    companies = []
    for company in data:
        if len(companies) == count:
            break

        # Only use companies trading in the US (this is a limitation of the free plan)
        if company['exchangeShortName'] == 'NYSE':
            companies.append(company)

    # for each company, get its profile, financials and stock prices
    db: Session = next(get_db())
    for company in companies:
        symbol = company['symbol']
        query_result = db.query(Company).filter(Company.company_id == symbol).first()
        if not query_result:
            # create the company since it doesn't exist yet
            created = await create_company(company, db)
            if not created:
                continue

        # get ratios and financial growth from API
        ratios = await call_api(f"ratios/{symbol}")
        financial_growth = await call_api(f"financial-growth/{symbol}")
        income_statements = await call_api(f"income-statement/{symbol}")
        income_statement_growths = await call_api(f"income-statement-growth/{symbol}")

        stock_prices = []
        for ratio in ratios:
            stock_price_id = f"{symbol}-{ratio['date']}"
            stock = await create_or_update_stock_price(ratio, stock_price_id, symbol, db)
            stock_prices.append(stock)
        company['stock_prices'] = stock_prices

        financials = []
        for financial in financial_growth:
            financial_id = f"{symbol}-{financial['date']}"
            income_statement = {}
            income_statement_growth = {}

            try:
                for statement in income_statements:
                    if statement['date'] == financial['date']:
                        income_statement = statement
                        break

                for statement_growth in income_statement_growths:
                    if statement_growth['date'] == financial['date']:
                        income_statement_growth = statement_growth
                        break
            except Exception:
                continue

            financial_data = await create_or_update_financial(financial, financial_id, symbol,
                                                              income_statement, income_statement_growth,
                                                              db)
            financials.append(financial_data)
        company['financials'] = financials
