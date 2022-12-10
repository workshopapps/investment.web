import os

import stripe
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.models.models import User, Customer

stripe.api_key = os.getenv("STRIPE_API_KEY")


# Get the subscription status
async def get_subscription_status(user: User):
    """ Get the subscription status of current user"""
    db: Session = next(get_db())
    user = db.query(Customer).filter(Customer.user_id == user.id,
                                     Customer.subscription_status == 'active').first()

    if not user:
        return False

    sub_id = user.subscription_id
    try:
        subscription_data = stripe.Subscription.retrieve(sub_id)
        return subscription_data
    except Exception as e:
        return False
