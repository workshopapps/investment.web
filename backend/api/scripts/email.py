import os
from fastapi import BackgroundTasks, FastAPI, APIRouter
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from typing import Optional, List
from dotenv import load_dotenv

load_dotenv()



""" Config values for a connection to be made """
conf = ConnectionConfig(
    # see env values to add yours

    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv('MAIL_FROM'),
    MAIL_PORT=os.getenv('MAIL_PORT'),
    MAIL_SERVER=os.getenv('MAIL_SERVER'),
    MAIL_FROM_NAME=os.getenv('MAIL_FROM_NAME'),
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,

    # TO add a template folder
    #TEMPLATE_FOLDER = Path(__file__).parent / 'templates',
)

async def send_user_email(subject: str, email_to:List[str], body):
    """ Sending the email to users"""
    message = MessageSchema(
        subject=subject,
        recipients=email_to,
        body=body,
        subtype='html',
    )

    fast_mail = FastMail(conf)
    await fast_mail.send_message(message)


def send_email_notifications(background_tasks: BackgroundTasks, subject: str,  email_to:List[str], body):
    """ Send email as a Notification in the background """
    message = MessageSchema(
        subject=subject,
        recipients=email_to,
        body=body,
        subtype='html',
    )
    fast_mail = FastMail(conf)
    background_tasks.add_task(fast_mail.send_message, message)