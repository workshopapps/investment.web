import os
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from typing import List
from dotenv import load_dotenv
from email.message import EmailMessage
import ssl, smtplib

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
    # TEMPLATE_FOLDER = Path(__file__).parent / 'templates',
)


async def send_email(subject: str, email_to: List[str], body):
    """ Sending the email to users"""
    message = MessageSchema(
        subject=subject,
        recipients=email_to,
        body=body,
        subtype='html',
    )

    fast_mail = FastMail(conf)
    await fast_mail.send_message(message)


# send password reset email
async def send_reset_password_email(email: str, content: str):

    email_sender =os.getenv("MAIL_USERNAME")
    email_password =os.getenv("MAIL_PASSWORD")
    email_reciever = email

    subject = 'Yieldvest Password Reset Email'
    body = content

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_reciever, em.as_string())
