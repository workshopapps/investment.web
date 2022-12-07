
from fastapi import APIRouter, Form
from .email import send_email


router = APIRouter()

@router.post("/contact_us/", tags=["User"])
async def contact_us(name: str = Form(), email: str = Form(), msg: str = Form()):
    
    body = f"<html><body><h4>{name}</h4>"
    body += f"<p>{email}</p>"
    body += f"<p>{msg}</p>"
    body += "</body></html>"

    await send_email('New Customer Suggestion/Complaints', ['yieldvesttech@gmail.com',], body)
    
    return {'Email successfully sent'}