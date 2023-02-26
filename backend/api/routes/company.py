import os
from datetime import datetime, timedelta
from typing import List

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from api.crud.base import get_db, get_company
from api.models import models
from api.models.models import Ranking

load_dotenv()
router = APIRouter()

low_cap_category_id = os.getenv('LOW_MARKET_CAP_CATEGORY_ID')


@router.get('/company/sectors', tags=["Company"], )
def get_sectors():
    db: Session = next(get_db())
    sectors = db.query(models.Sector).all()

    response = []
    for sector in sectors:
        industries = db.query(models.Industry) \
            .filter(models.Industry.sector == sector.sector_id).all()

        industry_list = []
        for industry in industries:
            industry_list.append({
                'industry_id': industry.industry_id,
                'industry': industry.industry
            })

        data = {
            'sector_id': sector.sector_id,
            'sector': sector.sector,
            'industries': industry_list
        }
        response.append(data)
    db.close()

    return response


@router.get('/company/ranking', tags=["Company"], )
def get_list_of_ranked_companies(category: str = None, sector: str = None, industry: str = None):
    db: Session = next(get_db())
    # get companies

    filters = []

    if category:
        if category == low_cap_category_id:
            return []
        else:
            filters.append(models.Company.category == category)
    else:
        filters.append(models.Company.category != low_cap_category_id)

    if sector:
        filters.append(models.Company.sector == sector)

    if industry:
        filters.append(models.Company.industry == industry)

    companies: list = db.query(models.Company).filter(*filters).all()

    # get latest rankings
    rankings: list = []
    for company in companies:
        rank = db.query(Ranking).filter(Ranking.company == company.company_id) \
            .order_by(Ranking.created_at.desc()).first()
        if rank:
            rankings.append(rank)

    # sort rankings by score (descending)
    def get_ranking_sort_key(inner_rank: Ranking):
        return inner_rank.score

    rankings.sort(key=get_ranking_sort_key, reverse=True)

    # create the response list
    response = []
    top_rankings = []
    for ranking in rankings:
        if len(top_rankings) == 12:
            break

        top_rankings.append(ranking)

    position = 0
    for ranking in top_rankings:
        position += 1
        comp: models.Company = ranking.comp_ranks
        sector: models.Sector = comp.sect_value
        industry: models.Industry = comp.industry_value
        category: models.Category = comp.cat_value
        stock_price = db.query(models.StockPrice).filter(models.StockPrice.company == comp.company_id).order_by(
            models.StockPrice.date.desc()).first()
        data = {
            'company_id': comp.company_id,
            'name': comp.name,
            'market_cap': comp.market_cap,
            'stock_price': stock_price.stock_price,
            'dividend_yield': stock_price.dividend_yield,
            'profile_image': comp.profile_image,
            'sector': sector.sector,
            'industry': industry.industry,
            'category': category.name,
            'ticker_symbol': comp.ticker_value.symbol,
            'exchange_platform': comp.ticker_value.exchange_name,
            'current_ranking': {
                'score': ranking.score,
                'position': position,
                'created_at': ranking.created_at,
                'updated_at': ranking.updated_at,
            }
        }
        response.append(data)

    db.close()
    return {
        'records': response,
        'total': 12,
        'page': 1,
        'pages': 1,
    }


@router.get('/company/ranks/{category}', tags=["Company"], )
async def get_company_category(category: str):
    db: Session = next(get_db())
    if category == low_cap_category_id:
        raise HTTPException(status_code=401,
                            detail="Please use the authenticated version of this route to "
                                   "access low market cap stocks")
    # get companies
    companies: list = db.query(models.Company).filter(models.Company.category == category).all()

    # get latest rankings
    rankings: list = []
    for company in companies:
        rank = db.query(Ranking).filter(Ranking.company == company.company_id) \
            .order_by(Ranking.created_at.desc()).first()
        if rank:
            rankings.append(rank)

    # sort rankings by score (descending)
    def get_ranking_sort_key(inner_rank: Ranking):
        return inner_rank.score

    rankings.sort(key=get_ranking_sort_key, reverse=True)

    # create the response list
    response = []
    top_rankings = []
    for ranking in rankings:
        if len(top_rankings) == 12:
            break

        top_rankings.append(ranking)

    for ranking in top_rankings:
        comp: models.Company = ranking.comp_ranks
        data = {
            'company_id': comp.company_id,
            'name': comp.name,
            'profile_image': comp.profile_image,
            'sector': comp.sect_value,
            'category': comp.cat_value,
            'ticker_symbol': comp.ticker_value.symbol,
            'exchange_platform': comp.ticker_value.exchange_name,
            'current_ranking': {
                'score': ranking.score,
                'created_at': ranking.created_at,
                'updated_at': ranking.updated_at,
            }
        }
        response.append(data)

    db.close()
    return response


@router.get('/company/{company_id}/interval', tags=["Company"], )
async def get_company_metrics_for_interval(company_id: str, startDate: str, endDate: str,
                                           db: Session = Depends(get_db)):
    """
    This gets the metrics of a company within a specified interval
    """
    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")
    # if company.category == low_cap_category_id:
    #     raise HTTPException(status_code=401,
    #                         detail="Please use the authenticated version of this route to "
    #                                "access low market cap stocks")

    stock_prices = db.query(models.StockPrice).filter(models.StockPrice.company == company_id,
                                                      models.StockPrice.date >= startDate,
                                                      models.StockPrice.date <= endDate
                                                      ).order_by(models.StockPrice.date.desc()).all()
    financials = db.query(models.Financial).filter(models.Financial.company == company_id,
                                                   models.Financial.date >= startDate,
                                                   models.Financial.date <= endDate
                                                   ).order_by(models.Financial.date.desc()).all()

    ranking = db.query(models.Ranking).filter(models.Ranking.company == company_id).order_by(
        models.Ranking.created_at.desc()).first()

    response = {
        'company_id': company.company_id,
        'name': company.name,
        'description': company.description,
        'profile_image': company.profile_image,
        'sector': company.sect_value,
        'category': company.cat_value,
        'ticker': company.ticker_value,
        'current_ranking': ranking,
        'financials': financials,
        'stock_prices': stock_prices,
    }

    db.close()
    return response


@router.get('/company/{company_id}', tags=["Company"])
async def get_company_profile(company_id: str, db: Session = Depends(get_db)):
    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")
    # if company.category == low_cap_category_id:
    #     raise HTTPException(status_code=401,
    #                         detail="Please use the authenticated version of this route to "
    #                                "access low market cap stocks")

    ranking = db.query(models.Ranking).filter(models.Ranking.company == company_id).order_by(
        models.Ranking.created_at.desc()).first()
    stock_price = db.query(models.StockPrice).filter(models.StockPrice.company == company_id).order_by(
        models.StockPrice.date.desc()).first()
    financials = db.query(models.Financial).filter(models.Financial.company == company_id).order_by(
        models.Financial.date.desc()).first()

    response = {
        'company_id': company.company_id,
        'name': company.name,
        'market_cap': company.market_cap,
        'profile_image': company.profile_image,
        'description': company.description,
        'sector': company.sect_value,
        'industry': company.industry_value,
        'category': company.cat_value,
        'ticker': company.ticker_value,
        'current_ranking': ranking,
        'financials': financials,
        'stock_price': stock_price,
    }

    db.close()
    return response


@router.get('/company/{company_id}/ranking/history', tags=["Company"])
async def get_company_ranking_history(company_id: str, restrict_to_category: bool = False,
                                      restrict_to_sector: bool = False,
                                      restrict_to_industry: bool = False,
                                      db: Session = Depends(get_db)):
    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")

    if company.category == low_cap_category_id:
        raise HTTPException(status_code=401,
                            detail="Please use the authenticated version of this route to "
                                   "access low market cap stocks")

    company_rankings = db.query(models.Ranking).filter(models.Ranking.company == company_id).order_by(
        models.Ranking.updated_at.desc()).all()

    filters = []
    if restrict_to_category:
        filters.append(models.Company.category == company.category)
    if restrict_to_sector:
        filters.append(models.Company.sector == company.sector)
    if restrict_to_industry:
        filters.append(models.Company.industry == company.industry)

    # Get all companies matching the filters
    companies = db.query(models.Company).filter(*filters).all()

    # For this endpoint, remove all companies under low market cap
    used = []
    for comp in companies:
        if comp.category != low_cap_category_id:
            used.append(comp)

    companies = used

    response = []

    # For each ranking, get the rankings for other companies and figure out the position of
    # the current company
    for company_rank in company_rankings:
        # Get the current matching ranking of all the companies
        rankings: List[Ranking] = []
        for company in companies:
            date: datetime = company_rank.created_at
            rank = db.query(Ranking).filter(Ranking.company == company.company_id,
                                            Ranking.created_at <= date) \
                .order_by(Ranking.created_at.desc()).first()
            if rank:
                rankings.append(rank)

        # sort rankings by score (descending)
        def get_ranking_sort_key(inner_rank: Ranking):
            return inner_rank.score

        rankings.sort(key=get_ranking_sort_key, reverse=True)

        # get the position of this company
        position = 0
        current_rank = None
        for rank in rankings:
            position += 1
            if rank.company == company_id:
                current_rank = rank
                break

        if current_rank:
            data = {
                'position': position,
                'score': current_rank.score,
                'companies_compared_with': len(rankings),
                'date': current_rank.updated_at,
            }
            response.append(data)

    return response


@router.get('/companies', tags=["Company"], )
async def get_list_of_all_companies(initials: str = None):
    db: Session = next(get_db())
    """
    This gets the lists of all companies
    """
    filters = []
    if initials:
        filters.append(models.Company.name.like(f"{initials}%"))

    companies: List[models.Company] = db.query(models.Company).filter(*filters).order_by(
        models.Company.name.asc()).all()

    # Return the sorted list of companies
    result = []

    for company in companies:
        data = {
            'ticker': company.ticker_value.symbol,
            'name': company.name,
        }
        result.append(data)

    db.close()
    return result
