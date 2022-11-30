from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Depends, HTTPException, APIRouter, Query
from starlette.requests import Request

from dotenv import load_dotenv
from sqlalchemy.orm import Session

from api.crud.base import get_db, get_company
from api.schemas.schemas import Company
from api.models.models import User, Customer, Subscription
from api.routes.auth import get_current_user

from google.oauth2 import id_token
from google.auth.transport import requests

import stripe
import os


load_dotenv()

app = FastAPI()
router = APIRouter()

stripe.api_key = os.getenv("STRIPE_API_KEY")
PRICE_ID = os.getenv("PRICE_ID")
GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")


# create customer profile
@router.post('/create-customer-object/', tags=["Customer"],)
async def create_customer_object(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get the current user
        db: Session = next(get_db())
        if user.name:
            id = user.id
            CUSTOMER_EMAIL = user.email
            CUSTOMER_NAME = user.name
        id = user.id
        CUSTOMER_EMAIL = user.email
        CUSTOMER_NAME = user.email

        try:
            # create customer_id for the current user
            customer = stripe.Customer.create(
                email=CUSTOMER_EMAIL,
                name=CUSTOMER_NAME,
            )
            insert_customer_id = Customer(user_id=id, customer_id=customer['id'])
            db.add(insert_customer_id)
            db.commit()
            db.refresh(insert_customer_id)

            return {"Customer_id": customer['id']}

        except Exception as e:
            return {"status_code": 403, "error": e.args}
   
    return HTTPException(status_code=401, detail="Network error")


# create a checkout session
@router.post('/create-checkout-session/', tags=["Customer"],)
async def create_session(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get the current user
        db: Session = next(get_db())
        id = user.id
        users = db.query(Customer).filter(Customer.user_id == id).first()
        CUSTOMER_ID = users.customer_id

        try:
            check_session = stripe.checkout.Session.create(
            customer=CUSTOMER_ID,
            success_url="http://127.0.0.1:8000/success/?session_id={CHECKOUT_SESSION_ID}}",
            cancel_url="http://127.0.0.1:8000/cancel",
            payment_method_collection= "if_required",
            mode="subscription",
            payment_method_types=["card"],
            line_items=[{
                "price": PRICE_ID,
                "quantity": 1
            }]
        )
        # working to fix the bug on the commented code
            # insert_session = Customer(session_id=check_session['id'])
            # db.add(insert_session)
            # db.commit()
            # db.refresh(insert_session)

            return {"SessionID": check_session["id"]}

        except Exception as e:
            return {"status_code": 403, "error": e.args}

    return {"status_code": 401, "error": "Invalid request"}

# Create customer portal to manage subscription billing
@router.post('/customer-portal/', tags=["Customer"],)
async def customer_portal(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get user customer ID
        db: Session = next(get_db())
        id = user.id
        users = db.query(Customer).filter(Customer.user_id == id).first()
        CUSTOMER_ID = users.customer_id

        try:
            session = stripe.billing_portal.Session.create(
            customer=CUSTOMER_ID,
            return_url='http://127.0.0.1:8000'
        )
            return {"status_code": 303, "Session_url(note: user is redirected to this url)": session.url}

        except Exception as e:
            return{"status_Code": 200, "errors": e.args}

    return HTTPException(status_Code=401, detail="invalid request")

# create subscription for user
@router.post('/create-subscription-object/', tags=["Customer"],)
async def create_subscription_object(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get current user
        db: Session = next(get_db())
        id = user.id
        users = db.query(Customer).filter(Customer.user_id == id).first()
        CUSTOMER_ID = users.customer_id

        try:
            subscription = stripe.Subscription.create(
                customer=CUSTOMER_ID,
                items=[{
                    "price": PRICE_ID
                }],
                payment_behavior="default_incomplete",
                payment_settings={"save_default_payment_method": "on_subscription"},
                expand=["latest_invoice.payment_intent"]
            )
            insert_sub_id = Subscription(user_id=id, subscription_id=subscription.id)
            db.add(insert_sub_id)
            db.commit()
            db.refresh(insert_sub_id)

            return {
                "subscriptionId": subscription.id, "clientSecret": subscription.latest_invoice.payment_intent.client_secret
            }
        except Exception as e:
            return {"statusCode": 403, "error": e.args }

    return HTTPException(status_code=400, detail="invalid request")    


# cancel subscription
@router.post('/cancel-subscription/', tags=["Customer"],)
async def cancel_subscription(request: Request, subscription_id: str, user: User=Depends(get_current_user)):
    if request:
        # get current user
        id = user.id
        db: Session = next(get_db())
        users = db.query(Subscription).filter(Subscription.user_id == id).first()
        SUBSCRIPTION_ID = users.subscription_id

        try:
            deleted_subscription = stripe.Subscription.delete(SUBSCRIPTION_ID)
            return {
                "deleted_subscription": deleted_subscription
            }
        except Exception as e:
            return {"status_code": 403, "error": e.args}
            
    return HTTPException(status_code=401, detail="invalid request")


# to handle webhook data from stripe
@router.post('/webhook', tags=["Customer"],)
async def webhook_received_object(request: Request):
    webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
    request_data = request

    if webhook_secret:
        # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload=request_data, sig_header=signature, secret=webhook_secret)
            data = event['data']

        except Exception as e:
            return {"errors": e.args}

        event_type = event['type']
    else:
        data = request_data['data']
        event_type = request_data['type']

    data_object = data['object']

    if event_type == 'invoice.paid':
        print(data)

    if event_type == 'invoice.payment_failed':
        print(data)

    if event_type == 'customer.subscription.deleted':
        print(data)

    return jsonify({'status': 'success'})