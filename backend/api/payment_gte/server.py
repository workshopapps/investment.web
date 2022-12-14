import datetime
import os
import traceback

import stripe
from dotenv import load_dotenv
from fastapi import FastAPI, Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from starlette.requests import Request
from starlette.responses import RedirectResponse

from api.crud.base import get_db
from api.models.models import User, Customer, Product
from api.routes.auth import get_current_user

load_dotenv()

app = FastAPI()
router = APIRouter()

stripe.api_key = os.getenv("STRIPE_API_KEY")

app_url = os.getenv('APP_URL')
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")
BASIC_PLAN_MONTHLY_PRICE_ID = os.getenv('BASIC_PLAN_MONTHLY_PRICE_ID')
PRO_PLAN_MONTHLY_PRICE_ID = os.getenv('PRO_PLAN_MONTHLY_PRICE_ID')
PREMIUM_PLAN_MONTHLY_PRICE_ID = os.getenv('PREMIUM_PLAN_MONTHLY_PRICE_ID')
BASIC_PLAN_YEARLY_PRICE_ID = os.getenv('BASIC_PLAN_YEARLY_PRICE_ID')
PRO_PLAN_YEARLY_PRICE_ID = os.getenv('PRO_PLAN_YEARLY_PRICE_ID')
PREMIUM_PLAN_YEARLY_PRICE_ID = os.getenv('PREMIUM_PLAN_YEARLY_PRICE_ID')


# cancel subscription
@router.post('/cancel-subscription/', tags=["Customer"], )
async def cancel_subscription(request: Request, user: User = Depends(get_current_user)):
    if request:
        # get current user
        try:
            id = user.id
            db: Session = next(get_db())
            users = db.query(Customer).filter(Customer.user_id == id).first()
            SUBSCRIPTION_ID = users.subscription_id

        except:
            return {"detail": "no subscription for current user"}

        try:
            deleted_subscription = stripe.Subscription.delete(SUBSCRIPTION_ID)

            users = db.query(Customer).filter(Customer.user_id == id).first()
            if users:
                users.subscription_status = deleted_subscription.status
                db.add(users)
                db.flush()
                db.commit()
                db.refresh(users)
            else:
                return {"err": "could not update subscription status to db"}

            return {"subscription_id": deleted_subscription.id, "subscription_status": deleted_subscription.status}

        except:
            return HTTPException(status_code=403, detail="users subscription unavailable")

    return HTTPException(status_code=401, detail="could not create connection")


@router.post('/subscription/checkout_session', tags=["Subscription"], )
def create_checkout_session(subscription_type: str, user: User = Depends(get_current_user)):
    price_id = None
    if subscription_type == 'basic_monthly':
        price_id = BASIC_PLAN_MONTHLY_PRICE_ID
    if subscription_type == 'basic_yearly':
        price_id = BASIC_PLAN_YEARLY_PRICE_ID
    if subscription_type == 'pro_monthly':
        price_id = PRO_PLAN_MONTHLY_PRICE_ID
    if subscription_type == 'pro_yearly':
        price_id = PRO_PLAN_YEARLY_PRICE_ID
    if subscription_type == 'premium_monthly':
        price_id = PREMIUM_PLAN_MONTHLY_PRICE_ID
    if subscription_type == 'premium_yearly':
        price_id = PREMIUM_PLAN_YEARLY_PRICE_ID

    try:
        # get or create customer object
        db: Session = next(get_db())
        customer = db.query(Customer).filter(Customer.user_id == user.id).first()

        if customer is None:
            new_customer = stripe.Customer.create(
                email=user.email,
                name=user.name)
            customer = Customer(user_id=user.id, customer_id=new_customer['id'])
            db.add(customer)
            db.commit()
            db.refresh(customer)

        session = stripe.checkout.Session.create(
            success_url=f'{app_url}/payment/success',
            cancel_url=f'{app_url}/payment/cancel',
            mode='subscription',
            customer=customer.customer_id,
            client_reference_id=user.id,
            line_items=[{
                'price': price_id,
                'quantity': 1
            }],
        )

        return {'checkout_url': session.url}
    except Exception:
        print(traceback.print_exc())
        raise HTTPException(status_code=500, detail="An internal error occurred")


@router.get('/subscription/portal', tags=["Subscription"], )
def get_customer_subscription_portal(user: User = Depends(get_current_user)):
    try:
        # get or create customer object
        db: Session = next(get_db())
        customer = db.query(Customer).filter(Customer.user_id == user.id).first()

        if customer is None:
            new_customer = stripe.Customer.create(
                email=user.email,
                name=user.name)
            customer = Customer(user_id=user.id, customer_id=new_customer['id'])
            db.add(customer)
            db.commit()
            db.refresh(customer)

        session = stripe.billing_portal.Session.create(
            customer=customer.customer_id,
            return_url=f'{app_url}/settings'
        )

        return {'portal_url': session.url}
    except Exception:
        print(traceback.print_exc())
        raise HTTPException(status_code=500, detail="An internal error occurred")


# to handle webhook data from stripe
@router.post('/payment/webhook', tags=["Payment"], )
async def webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
    except Exception:
        return HTTPException(status_code=400, detail="Error parsing data")

    # Handle the type
    data = event['data']['object']
    print(event['type'])
    if event['type'] == 'checkout.session.completed':
        pass
    elif event['type'] == 'invoice.paid':
        db: Session = next(get_db())

        customer_id = data['customer']
        customer = db.query(Customer).filter(Customer.customer_id == customer_id).first()
        if customer:
            customer.subscription_id = data['subscription']
            customer.subscription_status = 'active' if data['status'] == 'paid' else 'inactive'
            customer.current_pricing_id = data['lines']['data'][0]['plan']['id']
            customer.updated_at = datetime.datetime.now()
            db.add(customer)
            db.commit()
    elif event['type'] == 'customer.subscription.updated':
        db: Session = next(get_db())

        customer_id = data['customer']
        customer = db.query(Customer).filter(Customer.customer_id == customer_id).first()
        if customer:
            customer.subscription_status = data['status']
            customer.subscription_id = data['id']
            customer.current_pricing_id = data['plan']['id']
            customer.updated_at = datetime.datetime.now()
            db.add(customer)
            db.commit()
    elif event['type'] == 'customer.subscription.deleted':
        db: Session = next(get_db())

        customer_id = data['customer']
        customer = db.query(Customer).filter(Customer.customer_id == customer_id).first()
        if customer:
            customer.subscription_status = 'cancelled'
            customer.subscription_id = None
            customer.current_pricing_id = BASIC_PLAN_MONTHLY_PRICE_ID
            customer.updated_at = datetime.datetime.now()
            db.add(customer)
            db.commit()
    else:
        print('Unhandled Stripe webhook event type {}'.format(event['type']))

    return {"success": True}
