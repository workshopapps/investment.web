from fastapi import FastAPI, Depends, HTTPException, APIRouter
from starlette.requests import Request

from dotenv import load_dotenv
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.models.models import User, Customer, Product
from api.routes.auth import get_current_user

from google.oauth2 import id_token
from google.auth.transport import requests

import stripe
import os


load_dotenv()

app = FastAPI()
router = APIRouter()

stripe.api_key = os.getenv("STRIPE_API_KEY")
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")


# get all info for product
@router.get('/product-info', tags=['Customer'])
async def product_info(request: Request):
    db: Session = next(get_db())
    product_info = db.query(Product).all()
    return {
        "Product": product_info
    }

# create customer profile
@router.post('/create-subscription/', tags=["Customer"],)
async def create_customer_object(request: Request, price_id: str, user: User=Depends(get_current_user)):
    if request:
        # get the current user
        db: Session = next(get_db())
        id = user.id
        CUSTOMER_EMAIL = user.email
        CUSTOMER_NAME = user.name

        try:
            # create customer_id for the current user
            customer = stripe.Customer.create(
                email=CUSTOMER_EMAIL,
                name=CUSTOMER_NAME,
            )
        except:
          return HTTPException(status_code=403, detail="could not create customer")

        try:
            subscription = stripe.Subscription.create(
                customer=customer['id'],
                items=[{
                    "price": price_id
                }],
                payment_behavior="default_incomplete",
                payment_settings={"save_default_payment_method": "on_subscription"},
                expand=["latest_invoice.payment_intent"]
            )

            users = db.query(Customer).filter(Customer.user_id == id).first()
            if users is None:
              insert_customer = Customer(user_id=id, customer_id=customer['id'], subscription_id=subscription.id, subscription_status=subscription.status)
              db.add(insert_customer)
              db.commit()
              db.refresh(insert_customer)
            else:
              users.subscription_id = subscription.id
              users.subscription_status = subscription.status
              db.add(users)
              db.flush()
              db.commit()
              db.refresh(users)

            return {
                "subscriptionId": subscription.id, "clientSecret": subscription.latest_invoice.payment_intent.client_secret
            }

        except Exception as e:
            return HTTPException(status_code=403, detail="could not create subscription")
   
    return HTTPException(status_code=401, detail="Could not create connection")    


# cancel subscription
@router.post('/cancel-subscription/', tags=["Customer"],)
async def cancel_subscription(request: Request, user: User=Depends(get_current_user)):
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
              
            return {"subscription_id": deleted_subscription.id ,"subscription_status": deleted_subscription.status}

        except:
            return HTTPException(status_code=403, detail="users subscription unavailable")
            
    return HTTPException(status_code=401, detail="could not create connection")


@router.get('/model-info', tags=["Customer"],)
async def model_info(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get current user
        id = user.id
        db: Session = next(get_db())
        users_customer = db.query(Customer).all()

        return users_customer


# to handle webhook data from stripe
@router.post('/webhook', tags=["Customer"],)
async def webhook(request: Request):
    event = None
    payload = request
    sig_header = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
    except Exception as e:
        return HTTPException(status_code=400, detail="could not create connection")
            
    # Handle the type
    if event['type'] == 'account.updated':
      account = event['data']['object']
    elif event['type'] == 'account.external_account.created':
      external_account = event['data']['object']
    elif event['type'] == 'account.external_account.deleted':
      external_account = event['data']['object']
    elif event['type'] == 'account.external_account.updated':
      external_account = event['data']['object']
    elif event['type'] == 'balance.available':
      balance = event['data']['object']
    elif event['type'] == 'billing_portal.configuration.created':
      configuration = event['data']['object']
    elif event['type'] == 'billing_portal.configuration.updated':
      configuration = event['data']['object']
    elif event['type'] == 'billing_portal.session.created':
      session = event['data']['object']
    elif event['type'] == 'capability.updated':
      capability = event['data']['object']
    elif event['type'] == 'cash_balance.funds_available':
      cash_balance = event['data']['object']
    elif event['type'] == 'charge.captured':
      charge = event['data']['object']
    elif event['type'] == 'charge.expired':
      charge = event['data']['object']
    elif event['type'] == 'charge.failed':
      charge = event['data']['object']
    elif event['type'] == 'charge.pending':
      charge = event['data']['object']
    elif event['type'] == 'charge.refunded':
      charge = event['data']['object']
    elif event['type'] == 'charge.succeeded':
      charge = event['data']['object']
    elif event['type'] == 'charge.updated':
      charge = event['data']['object']
    elif event['type'] == 'charge.dispute.closed':
      dispute = event['data']['object']
    elif event['type'] == 'charge.dispute.created':
      dispute = event['data']['object']
    elif event['type'] == 'charge.dispute.funds_reinstated':
      dispute = event['data']['object']
    elif event['type'] == 'charge.dispute.funds_withdrawn':
      dispute = event['data']['object']
    elif event['type'] == 'charge.dispute.updated':
      dispute = event['data']['object']
    elif event['type'] == 'charge.refund.updated':
      refund = event['data']['object']
    
    # ... handle other event types
    else:
      print('Unhandled event type {}'.format(event['type']))

    return {"success": True}
