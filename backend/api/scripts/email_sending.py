import os
from fastapi import BackgroundTasks, FastAPI, APIRouter
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig

from dotenv import load_dotenv

load_dotenv()


app = FastAPI()
router = APIRouter()


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

async def send_email_async(subject: str, email_to: str, body):
    """ Sending the email asynchronously"""
    message = MessageSchema(
        subject=subject,
        recipients=[email_to],
        body=body,
        subtype='html',
    )
    
    fast_mail = FastMail(conf)
    await fast_mail.send_message(message)

def send_email_background(background_tasks: BackgroundTasks, subject: str, email_to: str, body):
    """ Send email as a Notification in the background """
    message = MessageSchema(
        subject=subject,
        recipients=[email_to],
        body=body,
        subtype='html',
    )
    fast_mail = FastMail(conf)
    background_tasks.add_task(fast_mail.send_message, message)


@router.post('/send-email/asynchronous')
async def send_email_asynchronous(subject: str, email_to: str, body):
    """ Function to send email asynchrounously """
    await send_email_async(subject, email_to, body)
    return 'Success'


@router.post('/send-email/background')
def send_email_backgroundtasks(background_tasks: BackgroundTasks, subject: str, email_to: str, body):
    """ Fuction to send email as a notification/background task"""

    send_email_background(background_tasks, subject, email_to, body,)
    return 'Success'