import os
from fastapi import FastAPI
from api.models.models import SubscribedUsers, User
from fastapi_mail import FastMail, MessageSchema,ConnectionConfig

from dotenv import load_dotenv
load_dotenv()

class Envs:
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_FROM = os.getenv('MAIL_FROM')
    MAIL_PORT = os.getenv('MAIL_PORT')
    MAIL_FROM_NAME = os.getenv('MAIL_FROM_NAME')
    MAIL_SERVER = os.getenv('MAIL_SERVER')

conf = ConnectionConfig(
    MAIL_USERNAME = Envs.MAIL_USERNAME,
    MAIL_PASSWORD=Envs.MAIL_PASSWORD ,
    MAIL_FROM = Envs.MAIL_FROM,
    MAIL_FROM_NAME = Envs.MAIL_FROM_NAME,
    MAIL_PORT = Envs.MAIL_PORT,
    MAIL_SERVER = Envs.MAIL_SERVER,
    MAIL_TLS = True,
    MAIL_SSL = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True,
    TEMPLATE_FOLDER = "api/templates"
)

async def send_subscription_mail(subject: str, email_to: str, body: dict):
    message = MessageSchema(
        subject=subject,
        recipients=[email_to], 
        template_body=body,
        subtype="html"
        )
    
    fm = FastMail(conf)
    await fm.send_message(message, template_name="email.html")
    



    #callfunction
    # from email import send_subscription_mail
    # await send_subscription_mail('Subscription successful!',user[email] ,{
    # "title": "Subscription Successfull",
    # "name" : user[email]
    # })
