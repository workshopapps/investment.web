from fastapi.testclient import TestClient
from api.models import models
from sqlalchemy.orm import Session
from main import app
from api.database.database import engine





""""
This is a test script for endpoint 4 and endpoint 5
"""


client = TestClient(app)

db = Session(engine)

def test_endpoint_4():
    
    """"
    This script tests an n endpoint that returns the metrics of a company over a specified interval.
    
    """
    params = {"startDateTime":"1000-01-01 00:00:00", "endDateTime":"9999-12-31 23:59:59"} #query parameters
    
    company_id = db.query(models.Company).filter(models.Company.id).first()
    response = client.get(f"/company/{company_id}", params=params)
    
    
    
    interval = db.query(models.Ranking).filter(models.Ranking.created_at  >= params["startDateTime"], 
                    models.Ranking.created_at <= params["endDateTime"]                
                ).all()
              
    assert response.status_code == 200
    assert response.json() == interval
    
    
def test_endpoint_5():
    """ This endpoint returns the ranking history of a specific company """
     
    company_id = db.query(models.Company).filter(models.Company.id == models.Ranking.company).first()
    company_ranking_history = db.query(models.Ranking).filter(models.Ranking.company == company_id).all()
    response = client.get(f"/company/{company_id}/ranking/history")
   
    result = []
    for history in company_ranking_history: 
        """ this iterate through all the rankings and created a dictionary for the attribute
        and then return the result as an output
        """
        id = history.id
        company = history.company
        score = history.score
        methodology = history.methodology
        data = {"id":id, "company":company, "score":score, "methodology":methodology}
        result.append(data)
        
    assert response.status_code == 200
    assert response.json() == result