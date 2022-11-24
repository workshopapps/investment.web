# from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
# from starlette.responses import JSONResponse
from email.message import EmailMessage
import ssl, smtplib


async def send_email(email: str, content: str):

    email_sender = 'nexusdomains360@gmail.com'
    email_password = 'rifbznmpwfssrpvp'
    email_reciever = email

    subject = 'My Stock Plug Testing'
    body = content

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_reciever
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_reciever, em.as_string())









# conf = ConnectionConfig(
#     MAIL_USERNAME = "nexusdomains360@gmail.com",
#     MAIL_PASSWORD = "rifbznmpwfssrpvp",
#     MAIL_FROM = "nexusdomains360@gmail.com",
#     MAIL_PORT = 587,
#     MAIL_SERVER = "smtp.gmail.com",
#     MAIL_SSL_TLS = False,
#     MAIL_STARTTLS = True,
#     USE_CREDENTIALS = True,
#     VALIDATE_CERTS = True
# )

# email = "osilajaabdulhameed@gmail.com"

# async def send_email():

#     message = MessageSchema(
#         subject="Fastapi-Mail testing",
#         recipients=email,  # List of recipients, as many as you can pass  
#         body="This is just a test mail",
#         subtype="html"
#         )

#     fm = FastMail(conf)
#     await fm.send_message(message)
#     return JSONResponse(status_code=200, content={"message": "email has been sent"})