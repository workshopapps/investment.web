from fastapi import APIRouter, Depends

from starlette.requests import Request
from sqlalchemy.orm import Session

from api.crud.base import get_db
from api.scripts.email import send_email
from api.models.models import NewsLetter

router = APIRouter()


# subscribed user
@router.post('/newsletter-subscription', tags=['EmailSubscription'])
async def newsletter_subscribed(request: Request, user_email: str, db: Session=Depends(get_db)):
    if request:
        users = db.query(NewsLetter).filter(NewsLetter.email == user_email).first()
        if users is None:
            insert_news_sub = NewsLetter(email=user_email, subscribed=True)
            db.add(insert_news_sub)
            db.commit()
            db.refresh(insert_news_sub)
            return {"isnewLetterSubscribed": {"email": insert_news_sub.email, "subscribed": insert_news_sub.subscribed}}
        else:
            users.subscribed = True
            db.add(users)
            db.flush()
            db.commit()
            db.refresh(users)
            return {"isnewLetterSubscribed": {"email": users.email, "subscribed": users.subscribed}}
        

# cancel newletter subscription
@router.delete('/newsletter-unsubscription', tags=['EmailSubscription'])
async def newsletter_unsubscribed(request: Request, user_email: str, db: Session=Depends(get_db)):
    if request:
        users = db.query(NewsLetter).filter(NewsLetter.email == user_email).first()
        if users is not None:
            db.delete(users)
            db.commit()

            return {"isnewLetterSubscribed": "users unsubscribed"}
        return {"isnewLetterSubscribed": "users email already unsubscribed"}

# get list of subscribed user and send newsletter email
async def newsletter_sub_user():
    users = db.query(NewsLetter).filter(NewsLetter.subscribed == True)
    newsletter = []
    for user in users:
        newsletter.append(user.email)
    return newsletter

    # test body message
    body = "<html> <body><h4>Top 12 Recommended Stocks</h4>"
    body += "<table><thead><tr><th>Company Name</th><th>Ranking Score</th><th>Position</th></tr></thead>"
    body += "<tbody>"
    
    await send_email("NewsLetter", newsletter, body)
