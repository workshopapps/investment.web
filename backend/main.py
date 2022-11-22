import uvicorn
from starlette.middleware.sessions import SessionMiddleware

from dotenv import load_dotenv
import os

from fastapi import FastAPI
from fastapi_utils.tasks import repeat_every

from api.database import database
from api.database.database import engine
from api.routes import routes, social_login
from api.scripts.ranking import run_process_scripts
# email
from fastapi import BackgroundTasks, FastAPI
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import BaseModel, EmailStr
from starlette.responses import JSONResponse
from typing import List
from sqlalchemy.testing import db
from api.models import Ranking

load_dotenv()

database.Base.metadata.create_all(bind=engine)


app = FastAPI()
SECRET_KEY = os.getenv('SECRET_KEY')
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

app.include_router(social_login.router)
app.include_router(routes.router)

class EmailSchema(BaseModel):
    email: List[EmailStr]

class EmailContent(BaseModel):
    message : str
    subject : str
    

from dotenv import dotenv_values

credentials = dotenv_values('.env')


conf = ConnectionConfig(
    MAIL_USERNAME = credentials('EMAIL'),
    MAIL_PASSWORD = credentials('PASSWORD'),
    MAIL_FROM = credentials('EMAIL'),
    MAIL_PORT = 587,
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_TLS = True,
    MAIL_SSL = False,
    USE_CREDENTIALS = True,
    
)
@app.post('/email/{ranking_id}')
async def send_email(ranking_id: str, content: EmailContent):
    ranking = await Ranking.get(id=ranking_id)
    user = await db["users"].find_one({"email": user_email.email})
    user_email = [user.email]
    html = f"""
    <h3>My Stock Plug</h3> 
    <br>
    <p>{content.message}</p>
    <br>
    <h5>Best Regards</h5>
    <h6>My Stock Plug </h6>
    """
    message = MessageSchema(
        subject=content.subject,
        recipients=user_email,
        body=html,
        subtype="html")

    fm = FastMail(conf)
    await fm.send_message(message)
    return JSONResponse(status_code=200, content={"message": "email has been sent"})   


async def update_script_task():
    print('Running update script...')
    await run_process_scripts()


@app.on_event("startup")
@repeat_every(seconds=60 * 60)  # run every hour
async def run_cron():
    await update_script_task()


@app.get('/')
async def get_root():
    return {
        "message": "My Stock Plug API",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
