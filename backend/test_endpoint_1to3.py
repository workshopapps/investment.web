from fastapi.testclient import TestClient
from fastapi import APIRouter, Depends
from main import app
from api.models import models
from api.database.database import get_db
from sqlalchemy.orm import  Session
client = TestClient(app)



def test_get_company_category(db: Session = Depends(get_db)):
    response = client.get("/company/ranks/high_market_cap_category")
    companies = db.query(models.Company).filter(models.Company.category == 'high_market_cap_category').all()
    assert response.status_code == 200
    assert response.json() == companies

def test_get_inexist_company_category():
    response = client.get("/company/ranks/fake_caps")
    assert response.status_code == 400
    assert response.json() == {'There are no companies with the ranking detail provided.'}

def test_metrics_data(db: Session = Depends(get_db)):
    response = client.get("/company/15b92e17-950c-426f-96c1-cecd8bfbafcd")
    company = db.query(models.Company).filter(models.Company.company_id == '15b92e17-950c-426f-96c1-cecd8bfbafcd').first()
    assert response.status_code == 200
    assert response.json() == company
def test_metrics_data_inexist():
    response = client.get("/company/15b92e27-950c-426f-96c1-cecd8dfbafcd")
    assert response.status_code == 404
    assert response.json() == {"detail": "Company info not available"}


def test_matrics_with_timestamp(db: Session = Depends(get_db)):
    response = client.get('/company/15b92e17-950c-426f-96c1-cecd8bfbafcd/?startDateTimestamp=1668255638')
    company = db.query(models.Company).filter(models.Ranking.created_at == '1668255638').all()
    assert response.status_code == 200
    assert response.json() == company

def test_metrics_with_timestamp_inexist():
    response = client.get('/company/15b92e17-950c-426f-96c1-cecd8bfbafcd/?startDateTimestamp=16687638')
    assert response.status_code == 404
    assert response.json() == {"detail": "Company info not available"}