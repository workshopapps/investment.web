from api.crud.base import get_db
from sqlalchemy.orm import Session
from api.models import models
from .email import send_user_email



async def send_user_email(company_ranks):
    print('beginning')
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
    await send_user_email("Updated List of Ranked Companies", destinations, body)
