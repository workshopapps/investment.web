import os
from typing import Tuple

import stripe
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.models.models import User, Customer

stripe.api_key = os.getenv("STRIPE_API_KEY")
BASIC_PLAN_MONTHLY_PRICE_ID = os.getenv('BASIC_PLAN_MONTHLY_PRICE_ID')
PRO_PLAN_MONTHLY_PRICE_ID = os.getenv('PRO_PLAN_MONTHLY_PRICE_ID')
PREMIUM_PLAN_MONTHLY_PRICE_ID = os.getenv('PREMIUM_PLAN_MONTHLY_PRICE_ID')
BASIC_PLAN_YEARLY_PRICE_ID = os.getenv('BASIC_PLAN_YEARLY_PRICE_ID')
PRO_PLAN_YEARLY_PRICE_ID = os.getenv('PRO_PLAN_YEARLY_PRICE_ID')
PREMIUM_PLAN_YEARLY_PRICE_ID = os.getenv('PREMIUM_PLAN_YEARLY_PRICE_ID')


# Get the subscription status
def get_subscription_status(usr: User) -> Tuple[str, bool, Customer]:
    """ Get the subscription status of current user"""
    db: Session = next(get_db())
    user: User = db.query(User).filter(User.id == usr.id).first()
    subscription: Customer = user.customer[0] if user.customer else None
    pricing_id = subscription.current_pricing_id if subscription else None

    subscription_type = None
    if pricing_id:
        if pricing_id == BASIC_PLAN_MONTHLY_PRICE_ID:
            subscription_type = 'basic_monthly'
        if pricing_id == BASIC_PLAN_YEARLY_PRICE_ID:
            subscription_type = 'basic_yearly'
        if pricing_id == PRO_PLAN_MONTHLY_PRICE_ID:
            subscription_type = 'pro_monthly'
        if pricing_id == PRO_PLAN_YEARLY_PRICE_ID:
            subscription_type = 'pro_yearly'
        if pricing_id == PREMIUM_PLAN_MONTHLY_PRICE_ID:
            subscription_type = 'premium_monthly'
        if pricing_id == PREMIUM_PLAN_YEARLY_PRICE_ID:
            subscription_type = 'premium_yearly'

    can_view_small_caps = (subscription and subscription.subscription_status == 'active') and (
                subscription_type == 'pro_monthly' or subscription_type == 'pro_yearly' or
                subscription_type == 'premium_monthly' or subscription_type == 'premium_yearly')

    return subscription_type, can_view_small_caps, user.customer[0] if user.customer else None
