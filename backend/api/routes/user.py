import os
from datetime import datetime
from math import ceil
from typing import List
from uuid import uuid4

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, Form
from sqlalchemy.orm import Session

from api.crud.base import get_db, get_company
from api.models import models
from api.payment_gte.subscription_scripts import get_subscription_status
from api.routes.auth import get_current_user
from api.models.models import User, UpdateNotificationSettingsModel, NotificationSettings, Ranking, Customer
from api.scripts.email import send_email
import stripe

load_dotenv()

router = APIRouter()

low_cap_category_id = os.getenv('LOW_MARKET_CAP_CATEGORY_ID')
stripe.api_key = os.getenv("STRIPE_API_KEY")
BASIC_PLAN_MONTHLY_PRICE_ID = os.getenv('BASIC_PLAN_MONTHLY_PRICE_ID')
PRO_PLAN_MONTHLY_PRICE_ID = os.getenv('PRO_PLAN_MONTHLY_PRICE_ID')
PREMIUM_PLAN_MONTHLY_PRICE_ID = os.getenv('PREMIUM_PLAN_MONTHLY_PRICE_ID')
BASIC_PLAN_YEARLY_PRICE_ID = os.getenv('BASIC_PLAN_YEARLY_PRICE_ID')
PRO_PLAN_YEARLY_PRICE_ID = os.getenv('PRO_PLAN_YEARLY_PRICE_ID')
PREMIUM_PLAN_YEARLY_PRICE_ID = os.getenv('PREMIUM_PLAN_YEARLY_PRICE_ID')


@router.get('/profile', tags=['User'])
async def get_user_profile(user: User = Depends(get_current_user)):
    subscription_status = get_subscription_status(user)
    subscription = subscription_status[2]
    subscription_type = subscription_status[0]
    can_view_small_caps = subscription_status[1]

    return {
        'id': user.id,
        'email': user.email,
        'name': user.name,
        'subscription': {
            'status': subscription.subscription_status if subscription else None,
            'type': subscription_type,
            'can_view_small_caps': can_view_small_caps,
            'updated_at': subscription.updated_at if subscription else None
        },
    }


@router.post("/contact_us/", tags=["User"])
async def contact_us(name: str = Form(), email: str = Form(), msg: str = Form()):
    body = f"<html><body><h4>{name}</h4>"
    body += f"<p>{email}</p>"
    body += f"<p>{msg}</p>"
    body += "</body></html>"

    await send_email('New Customer Suggestion/Complaints', ['yieldvesttech@gmail.com', ], body)

    return {'Email successfully sent'}


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
    db.close()

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
    db.close()

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

    db.close()
    return response


@router.get('/in_watchlist/{company_id}', tags=["User"])
def verify_watchlist_item(company_id: str, user: User = Depends(get_current_user)):
    """
    Verifies if a company is in a user's watchlist
    """
    db: Session = next(get_db())

    watchlist = db.query(models.WatchlistItem) \
        .filter(models.WatchlistItem.user_id == user.id, models.WatchlistItem.company_id == company_id) \
        .first()
    if watchlist:
        return {"message": "This company is in your watchlist"}
    else:
        raise HTTPException(status_code=404, detail="This company is not in your watchlist")


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
                                                      models.WatchlistItem.company_id == company_id) \
        .first()
    if duplicate:
        raise HTTPException(status_code=400, detail="This company is already in your watchlist")

    item = models.WatchlistItem(id=str(uuid4()), user_id=user.id, company_id=company_id)
    db.add(item)
    db.commit()
    db.close()

    return {
        "code": "success",
        "message": "Company added to watchlist"
    }


@router.post("/watchlist/", tags=["User"])
def remove_from_watchlist(company_id: list[str], user: User = Depends(get_current_user)):
    """
    removes a company to the watchlist
    """
    db: Session = next(get_db())

    for company_ids in company_id:
        company = db.query(models.Company).filter(models.Company.company_id == company_ids).first()
        if not company:
            raise HTTPException(status_code=404, detail="A company with this id doesn't exist")

        item = db.query(models.WatchlistItem).filter(models.WatchlistItem.user_id == user.id,
                                                     models.WatchlistItem.company_id == company_ids).first()
        if not item:
            raise HTTPException(status_code=400, detail="This company is not in your watchlist")

        db.delete(item)
        db.commit()
        db.close()

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

    subscription_status = get_subscription_status(user)
    can_view_small_caps = subscription_status[1]

    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")

    if company.category == low_cap_category_id and not can_view_small_caps:
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

    db.close()
    return response


@router.get('/company/ranking', tags=["User"])
def get_list_of_ranked_companies(category: str = None, sector: str = None, industry: str = None,
                                 page: int = 1, rows: int = 12,
                                 user: User = Depends(get_current_user)):
    db: Session = next(get_db())
    if page <= 0:
        page = 1
    if rows <= 12:
        rows = 12

    subscription_status = get_subscription_status(user)
    can_view_small_caps = subscription_status[1]

    filters = []

    if category:
        if category == low_cap_category_id and not can_view_small_caps:
            raise HTTPException(status_code=401,
                                detail='You must be subscribed to view low market cap stocks')
        else:
            filters.append(models.Company.category == category)
    elif not can_view_small_caps:
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
    max_result = None
    subscription_type = subscription_status[0]
    if subscription_type:
        if subscription_type.startswith('pro'):
            max_result = 50
        if subscription_type.startswith('basic') or not can_view_small_caps:
            max_result = 12
    else:
        max_result = 12

    response = []
    top_rankings = []
    if max_result:
        for ranking in rankings:
            if len(top_rankings) == max_result:
                break

            top_rankings.append(ranking)
    else:
        top_rankings = rankings

    total = len(top_rankings)
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

    final_result = []
    if total <= rows:
        final_result = response.copy()
    else:
        offset = (page - 1) * rows
        end = offset + rows

        for i in range(offset, end):
            if i >= total:
                break
            final_result.append(response[i])

    pages = ceil(total / rows) if total >= rows else 0 if len(final_result) == 0 else 1
    db.close()

    return {
        'records': final_result,
        'total': total,
        'page': page,
        'pages': pages,
    }


@router.get('/company/{company_id}', tags=["User"])
async def get_company_profile(company_id: str, db: Session = Depends(get_db),
                              user: User = Depends(get_current_user)):
    subscription_status = get_subscription_status(user)
    can_view_small_caps = subscription_status[1]

    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")
    if company.category == low_cap_category_id and not can_view_small_caps:
        raise HTTPException(status_code=401,
                            detail="You must be subscribed to view low market cap stocks")

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


@router.get('/company/{company_id}/ranking/history', tags=["User"])
async def get_company_ranking_history(company_id: str, restrict_to_category: bool = False,
                                      restrict_to_sector: bool = False,
                                      restrict_to_industry: bool = False,
                                      db: Session = Depends(get_db),
                                      user: User = Depends(get_current_user)):
    subscription_status = get_subscription_status(user)
    can_view_small_caps = subscription_status[1]

    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")

    if company.category == low_cap_category_id and not can_view_small_caps:
        raise HTTPException(status_code=401,
                            detail="You must be subscribed to view low market cap stocks")

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

    # remove all companies under low market cap if the user isn't subscribed to at least Pro
    used = []
    for comp in companies:
        if comp.category != low_cap_category_id or can_view_small_caps:
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


@router.get('/company/ranks/{category}', tags=["User"], )
def get_company_category(category: str, user: User = Depends(get_current_user)):
    """
    This gets the metrics of a company by category for an authenticated user
    """
    db: Session = next(get_db())

    subscription_status = get_subscription_status(user)
    can_view_small_caps = subscription_status[1]

    if category == low_cap_category_id and not can_view_small_caps:
        raise HTTPException(status_code=401,
                            detail="You must be subscribed before you can access low cap companies")
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
