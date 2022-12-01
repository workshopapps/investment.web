import os
from uuid import uuid4

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api.crud.base import get_db, get_company
from api.models import models
from api.routes.auth import get_current_user
from api.models.models import User, UpdateNotificationSettingsModel, NotificationSettings

load_dotenv()

router = APIRouter()

low_cap_category_id = os.getenv('LOW_MARKET_CAP_CATEGORY_ID')


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
                                                      models.WatchlistItem.company_id == company_id) \
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


@router.get('/company/{company_id}', tags=["User"])
async def get_company_profile(company_id: str, db: Session = Depends(get_db),
                              user: User = Depends(get_current_user)):
    # TODO: Validate and ensure the user has active subscription for a low cap company
    is_user_subscribed = False

    company: models.Company = get_company(db, company_id=company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company info not available")
    if company.category == low_cap_category_id and not is_user_subscribed:
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
    return response
