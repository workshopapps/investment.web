from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Depends, HTTPException, APIRouter, Query
from starlette.requests import Request

from dotenv import load_dotenv
from sqlalchemy.orm import Session

from api.crud.base import get_db, get_company
from api.schemas.schemas import Company
from api.models.models import User, Customer, Subscription, Product
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


# get all info for product
@router.get('/product-info', tags=['Customer'])
async def product_info(request: Request, user: User=Depends(get_current_user)):
    db: Session = next(get_db())
    product_info = db.query(Product).all()
    return {
        "Product": product_info
    }

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
            insert_session = Customer(session_id=check_session['id'])
            db.add(insert_session)
            db.commit()
            db.refresh(insert_session)

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
async def cancel_subscription(request: Request, user: User=Depends(get_current_user)):
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
async def webhook(request: Request):
    event = None
    payload = request.data
    sig_header = request.headers['STRIPE_SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
    except Exception as e:
        return {
            "error": e.args
        }

    # Handle the event
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
    elif event['type'] == 'checkout.session.async_payment_failed':
      session = event['data']['object']
    elif event['type'] == 'checkout.session.async_payment_succeeded':
      session = event['data']['object']
    elif event['type'] == 'checkout.session.completed':
      session = event['data']['object']
    elif event['type'] == 'checkout.session.expired':
      session = event['data']['object']
    elif event['type'] == 'coupon.created':
      coupon = event['data']['object']
    elif event['type'] == 'coupon.deleted':
      coupon = event['data']['object']
    elif event['type'] == 'coupon.updated':
      coupon = event['data']['object']
    elif event['type'] == 'credit_note.created':
      credit_note = event['data']['object']
    elif event['type'] == 'credit_note.updated':
      credit_note = event['data']['object']
    elif event['type'] == 'credit_note.voided':
      credit_note = event['data']['object']
    elif event['type'] == 'customer.created':
      customer = event['data']['object']
    elif event['type'] == 'customer.deleted':
      customer = event['data']['object']
    elif event['type'] == 'customer.updated':
      customer = event['data']['object']
    elif event['type'] == 'customer.discount.created':
      discount = event['data']['object']
    elif event['type'] == 'customer.discount.deleted':
      discount = event['data']['object']
    elif event['type'] == 'customer.discount.updated':
      discount = event['data']['object']
    elif event['type'] == 'customer.source.created':
      source = event['data']['object']
    elif event['type'] == 'customer.source.deleted':
      source = event['data']['object']
    elif event['type'] == 'customer.source.expiring':
      source = event['data']['object']
    elif event['type'] == 'customer.source.updated':
      source = event['data']['object']
    elif event['type'] == 'customer.subscription.created':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.deleted':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.pending_update_applied':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.pending_update_expired':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.trial_will_end':
      subscription = event['data']['object']
    elif event['type'] == 'customer.subscription.updated':
      subscription = event['data']['object']
    elif event['type'] == 'customer.tax_id.created':
      tax_id = event['data']['object']
    elif event['type'] == 'customer.tax_id.deleted':
      tax_id = event['data']['object']
    elif event['type'] == 'customer.tax_id.updated':
      tax_id = event['data']['object']
    elif event['type'] == 'customer_cash_balance_transaction.created':
      customer_cash_balance_transaction = event['data']['object']
    elif event['type'] == 'file.created':
      file = event['data']['object']
    elif event['type'] == 'financial_connections.account.created':
      account = event['data']['object']
    elif event['type'] == 'financial_connections.account.deactivated':
      account = event['data']['object']
    elif event['type'] == 'financial_connections.account.disconnected':
      account = event['data']['object']
    elif event['type'] == 'financial_connections.account.reactivated':
      account = event['data']['object']
    elif event['type'] == 'financial_connections.account.refreshed_balance':
      account = event['data']['object']
    elif event['type'] == 'identity.verification_session.canceled':
      verification_session = event['data']['object']
    elif event['type'] == 'identity.verification_session.created':
      verification_session = event['data']['object']
    elif event['type'] == 'identity.verification_session.processing':
      verification_session = event['data']['object']
    elif event['type'] == 'identity.verification_session.requires_input':
      verification_session = event['data']['object']
    elif event['type'] == 'identity.verification_session.verified':
      verification_session = event['data']['object']
    elif event['type'] == 'invoice.created':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.deleted':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.finalization_failed':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.finalized':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.marked_uncollectible':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.paid':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.payment_action_required':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.payment_failed':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.payment_succeeded':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.sent':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.upcoming':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.updated':
      invoice = event['data']['object']
    elif event['type'] == 'invoice.voided':
      invoice = event['data']['object']
    elif event['type'] == 'invoiceitem.created':
      invoiceitem = event['data']['object']
    elif event['type'] == 'invoiceitem.deleted':
      invoiceitem = event['data']['object']
    elif event['type'] == 'invoiceitem.updated':
      invoiceitem = event['data']['object']
    elif event['type'] == 'issuing_authorization.created':
      issuing_authorization = event['data']['object']
    elif event['type'] == 'issuing_authorization.updated':
      issuing_authorization = event['data']['object']
    elif event['type'] == 'issuing_card.created':
      issuing_card = event['data']['object']
    elif event['type'] == 'issuing_card.updated':
      issuing_card = event['data']['object']
    elif event['type'] == 'issuing_cardholder.created':
      issuing_cardholder = event['data']['object']
    elif event['type'] == 'issuing_cardholder.updated':
      issuing_cardholder = event['data']['object']
    elif event['type'] == 'issuing_dispute.closed':
      issuing_dispute = event['data']['object']
    elif event['type'] == 'issuing_dispute.created':
      issuing_dispute = event['data']['object']
    elif event['type'] == 'issuing_dispute.funds_reinstated':
      issuing_dispute = event['data']['object']
    elif event['type'] == 'issuing_dispute.submitted':
      issuing_dispute = event['data']['object']
    elif event['type'] == 'issuing_dispute.updated':
      issuing_dispute = event['data']['object']
    elif event['type'] == 'issuing_transaction.created':
      issuing_transaction = event['data']['object']
    elif event['type'] == 'issuing_transaction.updated':
      issuing_transaction = event['data']['object']
    elif event['type'] == 'mandate.updated':
      mandate = event['data']['object']
    elif event['type'] == 'order.created':
      order = event['data']['object']
    elif event['type'] == 'payment_intent.amount_capturable_updated':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.canceled':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.created':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.partially_funded':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.payment_failed':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.processing':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.requires_action':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_intent.succeeded':
      payment_intent = event['data']['object']
    elif event['type'] == 'payment_link.created':
      payment_link = event['data']['object']
    elif event['type'] == 'payment_link.updated':
      payment_link = event['data']['object']
    elif event['type'] == 'payment_method.attached':
      payment_method = event['data']['object']
    elif event['type'] == 'payment_method.automatically_updated':
      payment_method = event['data']['object']
    elif event['type'] == 'payment_method.detached':
      payment_method = event['data']['object']
    elif event['type'] == 'payment_method.updated':
      payment_method = event['data']['object']
    elif event['type'] == 'payout.canceled':
      payout = event['data']['object']
    elif event['type'] == 'payout.created':
      payout = event['data']['object']
    elif event['type'] == 'payout.failed':
      payout = event['data']['object']
    elif event['type'] == 'payout.paid':
      payout = event['data']['object']
    elif event['type'] == 'payout.updated':
      payout = event['data']['object']
    elif event['type'] == 'person.created':
      person = event['data']['object']
    elif event['type'] == 'person.deleted':
      person = event['data']['object']
    elif event['type'] == 'person.updated':
      person = event['data']['object']
    elif event['type'] == 'plan.created':
      plan = event['data']['object']
    elif event['type'] == 'plan.deleted':
      plan = event['data']['object']
    elif event['type'] == 'plan.updated':
      plan = event['data']['object']
    elif event['type'] == 'price.created':
      price = event['data']['object']
    elif event['type'] == 'price.deleted':
      price = event['data']['object']
    elif event['type'] == 'price.updated':
      price = event['data']['object']
    elif event['type'] == 'product.created':
      product = event['data']['object']
    elif event['type'] == 'product.deleted':
      product = event['data']['object']
    elif event['type'] == 'product.updated':
      product = event['data']['object']
    elif event['type'] == 'promotion_code.created':
      promotion_code = event['data']['object']
    elif event['type'] == 'promotion_code.updated':
      promotion_code = event['data']['object']
    elif event['type'] == 'quote.accepted':
      quote = event['data']['object']
    elif event['type'] == 'quote.canceled':
      quote = event['data']['object']
    elif event['type'] == 'quote.created':
      quote = event['data']['object']
    elif event['type'] == 'quote.finalized':
      quote = event['data']['object']
    elif event['type'] == 'radar.early_fraud_warning.created':
      early_fraud_warning = event['data']['object']
    elif event['type'] == 'radar.early_fraud_warning.updated':
      early_fraud_warning = event['data']['object']
    elif event['type'] == 'recipient.created':
      recipient = event['data']['object']
    elif event['type'] == 'recipient.deleted':
      recipient = event['data']['object']
    elif event['type'] == 'recipient.updated':
      recipient = event['data']['object']
    elif event['type'] == 'reporting.report_run.failed':
      report_run = event['data']['object']
    elif event['type'] == 'reporting.report_run.succeeded':
      report_run = event['data']['object']
    elif event['type'] == 'review.closed':
      review = event['data']['object']
    elif event['type'] == 'review.opened':
      review = event['data']['object']
    elif event['type'] == 'setup_intent.canceled':
      setup_intent = event['data']['object']
    elif event['type'] == 'setup_intent.created':
      setup_intent = event['data']['object']
    elif event['type'] == 'setup_intent.requires_action':
      setup_intent = event['data']['object']
    elif event['type'] == 'setup_intent.setup_failed':
      setup_intent = event['data']['object']
    elif event['type'] == 'setup_intent.succeeded':
      setup_intent = event['data']['object']
    elif event['type'] == 'sigma.scheduled_query_run.created':
      scheduled_query_run = event['data']['object']
    elif event['type'] == 'sku.created':
      sku = event['data']['object']
    elif event['type'] == 'sku.deleted':
      sku = event['data']['object']
    elif event['type'] == 'sku.updated':
      sku = event['data']['object']
    elif event['type'] == 'source.canceled':
      source = event['data']['object']
    elif event['type'] == 'source.chargeable':
      source = event['data']['object']
    elif event['type'] == 'source.failed':
      source = event['data']['object']
    elif event['type'] == 'source.mandate_notification':
      source = event['data']['object']
    elif event['type'] == 'source.refund_attributes_required':
      source = event['data']['object']
    elif event['type'] == 'source.transaction.created':
      transaction = event['data']['object']
    elif event['type'] == 'source.transaction.updated':
      transaction = event['data']['object']
    elif event['type'] == 'subscription_schedule.aborted':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'subscription_schedule.canceled':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'subscription_schedule.completed':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'subscription_schedule.created':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'subscription_schedule.expiring':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'subscription_schedule.released':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'subscription_schedule.updated':
      subscription_schedule = event['data']['object']
    elif event['type'] == 'tax_rate.created':
      tax_rate = event['data']['object']
    elif event['type'] == 'tax_rate.updated':
      tax_rate = event['data']['object']
    elif event['type'] == 'terminal.reader.action_failed':
      reader = event['data']['object']
    elif event['type'] == 'terminal.reader.action_succeeded':
      reader = event['data']['object']
    elif event['type'] == 'test_helpers.test_clock.advancing':
      test_clock = event['data']['object']
    elif event['type'] == 'test_helpers.test_clock.created':
      test_clock = event['data']['object']
    elif event['type'] == 'test_helpers.test_clock.deleted':
      test_clock = event['data']['object']
    elif event['type'] == 'test_helpers.test_clock.internal_failure':
      test_clock = event['data']['object']
    elif event['type'] == 'test_helpers.test_clock.ready':
      test_clock = event['data']['object']
    elif event['type'] == 'topup.canceled':
      topup = event['data']['object']
    elif event['type'] == 'topup.created':
      topup = event['data']['object']
    elif event['type'] == 'topup.failed':
      topup = event['data']['object']
    elif event['type'] == 'topup.reversed':
      topup = event['data']['object']
    elif event['type'] == 'topup.succeeded':
      topup = event['data']['object']
    elif event['type'] == 'transfer.created':
      transfer = event['data']['object']
    elif event['type'] == 'transfer.reversed':
      transfer = event['data']['object']
    elif event['type'] == 'transfer.updated':
      transfer = event['data']['object']
    # ... handle other event types
    else:
      print('Unhandled event type {}'.format(event['type']))

    return {"success": True}

@router.post('/model-info', tags=["Customer"],)
async def model_info(request: Request, user: User=Depends(get_current_user)):
    if request:
        # get current user
        id = user.id
        db: Session = next(get_db())
        users_sub = db.query(Subscription).all()
        users_customer = db.query(Customer).all()

        return {"user_subscription_details": users_sub, "customer_Details":users_customer}