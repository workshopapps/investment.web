from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Depends, HTTPException, APIRouter, Request, Query

from dotenv import load_dotenv
from sqlalchemy.orm import Session

from api.crud.base import get_db, get_company
from api.schemas.schemas import Company
from api.models.models import User, Customer, Subscription, Product

from . import security

import stripe
import os


load_dotenv()

app = FastAPI()
router = APIRouter()

stripe.api_key = os.getenv("STRIPE_API_KEY")
price_id = os.getenv("PRICE_ID")



# create customer profile
@router.post('/create-customer-object/', tags=["Customer"],)
async def create_customer_object(request: Request, db: Session=Depends(get_db)):
    user = security.read_users()

    users = db.query(User).all()
    CUSTOMER_EMAIL = users[0].email
    CUSTOMER_NAME = users[0].name

    customer = stripe.Customer.create(
        email=CUSTOMER_EMAIL,
        name=CUSTOMER_NAME,
    )
    insert_customer_id = Customer(customer_id=customer['id'])
    db.add(insert_customer_id)
    db.commit()

    return { "list_of_users": users, "Customer_id": customer['id']}


# create a checkout session
@router.post('/create-checkout-session/{price_id}', tags=["Customer"],)
async def create_session(price_id: str, request: Request, db: Session = Depends(get_db)):
    PRICE_ID='price_1M7SgJCCH5YrTF3ceYgl5mhM'

    try:
        check_session = stripe.checkout.Session.create(
        success_url="http://127.0.0.1:8000/success/?session_id={CHECKOUT_SESSION_ID}}",
        cancel_url="http://127.0.0.1:8000/",
        mode="subscription",
        payment_method_types=["card"],
        # customer_email="{{customer.email}}",
        line_items=[{
            "price": price_id,
            "quantity": 1
        }]
    )

        return {"SessionID": check_session["id"]}

    except Exception as e:
        return {"status_code": 200, "error": e.args}


# Create customer portal
@router.post('/customer-portal/{customer_id}', tags=["Customer"],)
async def customer_portal(customer_id: str, request: Request, db: Session = Depends(get_db)):
    user = security.read_users()
    
    users = db.query(Customer).all()
    customer_id = users[0].customer_id

    try:
        session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url='http://127.0.0.1:8000'
    )
        return {"Session_url": session.url}

    except Exception as e:
        return{"status_Code": 200, "errors": e.args}


# create subscription for user
@router.post('/create-subscription-object/{CUSTOMER_ID}', tags=["Customer"],)
async def create_subscription_object(request: Request, CUSTOMER_ID: str, price_id: str, db: Session = Depends(get_db)):
    user = security.read_users()

    users = db.query(Customer).all()
    CUSTOMER_ID = users[0].customer_id
    PRICE_ID = price_id

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
        insert_sub_id = Subscription(subscription_id=subscription.id)
        db.add(insert_sub_id)
        db.commit()

        return {
            "subscriptionId": subscription.id, "clientSecret": subscription.latest_invoice.payment_intent.client_secret,
            "customer": subscription.customer
        }
    except Exception as e:
        return {"statusCode": 200, "error": e.args }
        


# cancel subscription
@router.post('/cancel-subscription/{subscription_id}', tags=["Customer"],)
async def cancel_subscription(subscription_id: str, request: Request, db: Session = Depends(get_db)):
    user = security.read_users()

    users  = db.query(Subscription).all()
    subscription_id = users[0].subscription_id

    try:
        deleted_subscription = stripe.Subscription.delete(subscription_id)
        return {
            deleted_subscription
        }
    except Exception as e:
        return {"status_code": 200, "error": e.args}


# to handle webhook data from stripe
@router.post('/webhook', tags=["Customer"],)
async def webhook_received_object(request: Request):
    webhook_secret = os.getenv('STRIPE_API_KEY')
    request_data = request.json()

    if webhook_secret:
        # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload=request.data, sig_header=signature, secret=webhook_secret)
            data = event['data']

        except Exception as e:
            return e

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

