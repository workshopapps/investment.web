from api.crud.base import get_db
from api.models import models
from sqlalchemy.orm import Session
from uuid import uuid4
from api.scripts import data_gathering, data_calculations

"""
    This is the main function that accumulates all the 
    metric scores and uses that to determine the 
    rank of each company.
"""

def rank_companies():
    db: Session = next(get_db())

    companies = db.query(models.Company).all()

    for company in companies:
        stock_prices = db.query(models.StockPrice).filter(models.StockPrice.company == company.company_id ).order_by(models.StockPrice.date.asc()).limit(2).all()
        financials = db.query(models.Financial).filter(models.Financial.company == company.company_id ).order_by(models.Financial.date.asc()).limit(2).all()
        current_stock_price: models.StockPrice = stock_prices[0]
        previous_stock_price: models.StockPrice = stock_prices[1]
        current_financials: models.Financial = financials[0]
        previous_financials: models.Financial = financials[1]

        print(current_stock_price)

        de_ratio_score = data_calculations.get_debt_to_equity_ratio_weighted_score(current_stock_price.de_ratio)
        gpm_score = data_calculations.get_gross_profit_margin_weighted_score(current_stock_price.gross_profit_margin, 
                    previous_stock_price.gross_profit_margin)
        current_ratio_score = data_calculations.get_current_ratio_weighted_score(current_stock_price.current_ratio)
        roe_score = data_calculations.get_return_on_equity_weighted_score(current_stock_price.roe_ratio)
        quick_ratio_score = data_calculations.get_quick_ratio_weighted_score(current_stock_price.quick_ratio)
        pe_ratio_score = data_calculations.get_profit_earning_ratio_weighted_score(current_stock_price.pe_ratio)
        peg_ratio_score = data_calculations.get_profit_earning_growth_weighted_score(current_stock_price.peg_ratio)
        revenue_growth_score = data_calculations.get_revenue_growth_weighted_score(current_financials.growth_rate, 
                        previous_financials.growth_rate)
        pb_ratio_score = data_calculations.get_price_to_book_weighted_score(current_stock_price.pb_ratio)
        ps_ratio_score = data_calculations.get_price_to_sales_weighted_score(current_stock_price.ps_ratio)
        dividend_yield_score = data_calculations.get_dividend_yield_weighted_score(current_stock_price.dividend_yield)

        total_score = (de_ratio_score + gpm_score + current_ratio_score + roe_score + quick_ratio_score + pe_ratio_score + 
                        peg_ratio_score + revenue_growth_score + pb_ratio_score + ps_ratio_score + dividend_yield_score)

        ranking_score = (total_score / 11) * 10

        ranking = models.Ranking(ranking_id=str(uuid4()), company=company.company_id, 
                    score=ranking_score, methodology="Fundamental Analysis")

        db.add(ranking)
        db.commit()

async def run_process_scripts():
    await data_gathering.pick_four_random_companies()
    rank_companies()



