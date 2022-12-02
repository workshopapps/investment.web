from fastapi import Depends, APIRouter
from starlette.requests import Request

from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.routes.auth import get_current_user
from api.models.models import Customer, User, Subscription

import stripe
import os

stripe.api_key = os.getenv("STRIPE_API_KEY")

router = APIRouter()


# Get the subscription status
async def sub_status(user: User):
    """ Get the subscription status of current user"""
    # get current user
    db: Session = next(get_db())
    id = user.id
    users = db.query(Subscription).filter(Subscription.user_id == id).first()
    SUBSCRIPTION_ID = users.subscription_id

    try:
        subscription_data = stripe.Subscription.retrieve(SUBSCRIPTION_ID)
        return {"subscription_data": subscription_data.status}
    except Exception as e:
        return {"error": e.args}
