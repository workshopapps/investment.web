from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.routes.auth import get_current_user
from api.models.models import User, NotificationSettings, UpdateNotificationSettingsModel

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
