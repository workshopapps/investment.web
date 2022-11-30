from api.crud.base import get_db
from sqlalchemy.orm import Session
from api.models import models
from .email import send_email



async def send_user_email(company_ranks):
    db: Session = next(get_db())

    # get users emails
    emails = db.query(models.User.email).all()
    
    body = "<html> <body><h4>Top 12 Ranked Companies</h4>"
    body += "<table><thead><tr><th>Company Name</th><th>Company Rank</th><th>Position</th></tr></thead>"
    body += "<tbody>"

    position = 0
    for company_rank in company_ranks:
        position +=1
        body += f"<tr><td>{company_rank['company']}</td>"
        body += f"<td>{company_rank['current_ranking']}</td><td>{position}</td></tr>"
    
    body += "</tbody></table></body></html>"

    def map_emails(e):
        return e[0]

    destinations = []
    for e in emails:
        destinations.append(e[0])
    await send_email("Updated List of Ranked Companies", destinations, body)



async def send_subscribedUser_email(stocks):
    db: Session = next(get_db())

    # get users emails
    emails = db.query(models.User.email).join(models.Subscription).all()
    
    body = "<html> <body><h4>Top 10 Recommended Stocks</h4>"
    body += "<table><thead><tr><th>Company Name</th><th>Company Rank</th><th>Position</th></tr></thead>"
    body += "<tbody>"

    position = 0
    for recommended in stocks:
        position +=1
        body += f"<tr><td>{recommended['company']}</td>"
        body += f"<td>{recommended['current_ranking']}</td><td>{position}</td></tr>"
    
    body += "</tbody></table></body></html>"

    def map_emails(e):
        return e[0]

    destinations = []
    for e in emails:
        destinations.append(e[0])
    await send_email("Recommended Stocks", destinations, body)