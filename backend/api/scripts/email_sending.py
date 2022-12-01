from .email import send_email


async def send_user_email(company_ranks, email):
    body = "<html> <body><h4>Top 12 Recommended Stocks</h4>"
    body += "<table><thead><tr><th>Company Name</th><th>Ranking Score</th><th>Position</th></tr></thead>"
    body += "<tbody>"

    position = 0
    for company_rank in company_ranks:
        position += 1
        body += f"<tr><td>{company_rank['company']}</td>"
        body += f"<td>{round(company_rank['current_ranking'], 2)}</td><td>{position}</td></tr>"

    body += "</tbody></table></body></html>"

    destinations = [email]
    await send_email("Updated List of Ranked Companies", destinations, body)