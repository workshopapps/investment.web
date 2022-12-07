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


# create a checkout session
@router.post('/create-checkout-session/', tags=["Customer"],)
async def create_session(request: Request, price_id: str user: User=Depends(get_current_user)):
    if request:
        # get the current user
        try:
            db: Session = next(get_db())
            id = user.id
            users = db.query(Customer).filter(Customer.user_id == id).first()
            CUSTOMER_ID = users.customer_id
        except:
            return HTTPException(status_code=503, detail="customer ID is unavailable")

        try:
            check_session = stripe.checkout.Session.create(
            customer=CUSTOMER_ID,
            success_url="http://yieldvest.hng.tech/success/?session_id={sessionID}}",
            cancel_url="http://yieldvest.hng.tech/cancel",
            payment_method_collection= "if_required",
            mode="subscription",
            payment_method_types=["card"],
            line_items=[{
                "price": price_id,
                "quantity": 1
            }]
        )
            users = db.query(Customer).filter(Customer.user_id == id).first()
            if users:
                users.session_id = check_session['id']
                db.add(users)
                db.flush()
                db.commit()
                db.refresh(users)
            else:
                return HTTPException(status_code=403, detail="Customer does not exist")
            
            return {"SessionID": check_session["id"]}

        except:
            return HTTPException(status_code=403, detail="could not create a session")

    return HTTPException(status_code=401 "error": "could not create a connection")

# Create customer portal to manage subscription billing
@router.post('/customer-portal/', tags=["Customer"],)
async def customer_portal(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get user customer ID
        try:
            db: Session = next(get_db())
            id = user.id
            users = db.query(Customer).filter(Customer.user_id == id).first()
            CUSTOMER_ID = users.customer_id
        except:
            return HTTPException(status_code=503, detail="customer ID is unavailable")

        try:
            session = stripe.billing_portal.Session.create(
            customer=CUSTOMER_ID,
            return_url='http://yieldvest.hng.tech'
        )
            return {"status_code": 303, "Session_url": session.url}

        except:
            return HTTPException(status_code=403, detail="could not generate redirect url")

    return HTTPException(status_Code=401, detail="could not create connection")
