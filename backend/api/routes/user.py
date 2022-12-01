import os
from uuid import uuid4

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api.crud.base import get_db, get_company
from api.models import models
from api.routes.auth import get_current_user
from api.models.models import User, UpdateNotificationSettingsModel, NotificationSettings, Ranking

load_dotenv()

router = APIRouter()


@router.get('/notification_settings', tags=['User'])
def get_notification_settings(user: User = Depends(get_current_user)):
    db: Session = next(get_db())

    settings = db.query(NotificationSettings).filter(NotificationSettings.user_id == user.id).first()
    if not settings:
        settings = NotificationSettings(
            notification_settings_id=str(uuid4()),
            user_id=user.id,
        )
        db.add(settings)
        db.commit()
        db.refresh(settings)

    return settings


@router.patch('/notification_settings', tags=['User'])
def update_notification_settings(update_model: UpdateNotificationSettingsModel,
                                 user: User = Depends(get_current_user)):
    db: Session = next(get_db())

    settings = db.query(NotificationSettings).filter(NotificationSettings.user_id == user.id).first()
    if not settings:
        raise HTTPException(status_code=404, detail='Notification settings not existing')

    if update_model.notifications_enabled is not None:
        settings.notifications_enabled = update_model.notifications_enabled
    if update_model.receive_for_small_caps is not None:
        settings.receive_for_small_caps = update_model.receive_for_small_caps
    if update_model.receive_for_mid_caps is not None:
        settings.receive_for_mid_caps = update_model.receive_for_mid_caps
    if update_model.receive_for_high_caps is not None:
        settings.receive_for_high_caps = update_model.receive_for_high_caps

    db.add(settings)
    db.commit()
    db.refresh(settings)

    return settings
@router.get('/watchlist', tags=["User"])
def get_watchlist(user: User = Depends(get_current_user)):
    """
    Returns the watchlist for a user
    """
    db: Session = next(get_db())

    watchlist = db.query(models.WatchlistItem).filter(models.WatchlistItem.user_id == user.id).all()
    if not watchlist:
        return []

    response = []
    for item in watchlist:
        company: models.Company = item.company
        company_id = company.company_id
        ranking = db.query(models.Ranking).filter(models.Ranking.company == company_id).order_by(
            models.Ranking.created_at.desc()).first()
        stock_price = db.query(models.StockPrice).filter(models.StockPrice.company == company_id).order_by(
            models.StockPrice.date.desc()).first()
        financials = db.query(models.Financial).filter(models.Financial.company == company_id).order_by(
            models.Financial.date.desc()).first()

        data = {
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
        response.append(data)

    return response


@router.post("/watchlist/{company_id}", tags=["User"])
def add_to_watchlist(company_id: str, user: User = Depends(get_current_user)):
    """
    adds a company to the watchlist
    """
    db: Session = next(get_db())

    company = db.query(models.Company).filter(models.Company.company_id == company_id).first()
    if not company:
        raise HTTPException(status_code=404, detail="A company with this id doesn't exist")

    duplicate = db.query(models.WatchlistItem).filter(models.WatchlistItem.user_id == user.id,
                                                      models.WatchlistItem.company_id == company_id)\
        .first()
    if duplicate:
        raise HTTPException(status_code=400, detail="This company is already in your watchlist")

    item = models.WatchlistItem(id=str(uuid4()), user_id=user.id, company_id=company_id)
    db.add(item)
    db.commit()

    return {
        "code": "success",
        "message": "Company added to watchlist"
    }


@router.delete("/watchlist/{company_id}", tags=["User"])
def remove_from_watchlist(company_id: str, user: User = Depends(get_current_user)):
    """
    removes a company to the watchlist
    """
    db: Session = next(get_db())

    company = db.query(models.Company).filter(models.Company.company_id == company_id).first()
    if not company:
        raise HTTPException(status_code=404, detail="A company with this id doesn't exist")

    item = db.query(models.WatchlistItem).filter(models.WatchlistItem.user_id == user.id,
                                                 models.WatchlistItem.company_id == company_id).first()
    if not item:
        raise HTTPException(status_code=400, detail="This company is not in your watchlist")

    db.delete(item)
    db.commit()

    return {
        "code": "success",
        "message": "Company removed from watchlist"
    }
    
    
@router.get('/company/{company_id}/interval', tags=["User"], )
def get_company_metrics_for_interval(company_id: str, startDate: str, endDate: str,
                                     user: User = Depends(get_current_user)):
    """
    This gets the metrics of a company within a specified interval for an authenticated user
    """
    db: Session = next(get_db())

    # TODO: Validate and ensure the user has active subscription for a low cap company
    is_user_subscribed = False

    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")

    low_cap_category_id = os.getenv('LOW_MARKET_CAP_CATEGORY_ID')
    if company.category == low_cap_category_id and not is_user_subscribed:
        raise HTTPException(status_code=401,
                            detail="You must be subscribed before you can access low cap companies")

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
        'industry': company.industry_value,
        'category': company.cat_value,
        'ticker': company.ticker_value,
        'current_ranking': ranking,
        'financials': financials,
        'stock_prices': stock_prices,
    }

    return response



@router.get('/company/ranking', tags=["User"])
def get_list_of_ranked_companies(category: str = None, sector: str = None, industry: str = None,
                                 user: User = Depends(get_current_user)):
    db: Session = next(get_db())

    # TODO: Validate and ensure the user has active subscription for a low cap company
    is_user_subscribed = False

    # get companies
    low_cap_category_id = os.getenv('LOW_MARKET_CAP_CATEGORY_ID')

    filters = []

    if category:
        if category == low_cap_category_id and not is_user_subscribed:
            raise HTTPException(status_code=401,
                                detail='You must be subscribed to view low market cap stocks')
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

    for ranking in top_rankings:
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
                'created_at': ranking.created_at,
                'updated_at': ranking.updated_at,
            }
        }
        response.append(data)

    return response

