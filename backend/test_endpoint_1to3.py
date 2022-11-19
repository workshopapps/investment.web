from fastapi.testclient import TestClient
from fastapi import APIRouter, Depends
from main import app
from api.models import models
from api.database.database import import get_db
from sqlalchemy.orm import  Session
client = TestClient(app)



def test_get_company_category(db: Session = Depends(get_db)):
    response = client.get("/company/ranks/caps")
    companies = db.query(models.Company).filter(models.Company.description == 'caps').all()
    assert response.status_code == 200
    assert response.json() == companies

def test_get_inexist_company_category(db: Session = Depends(get_db)):
    response = client.get("/company/ranks/fake_caps")
    companies = db.query(models.Company).filter(models.Company.description == 'caps').all()
    assert response.status_code == 400
    assert response.json() == 'There are no companies with the ranking detail provided.'