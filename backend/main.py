from fastapi import FastAPI, Depends, Request
import uvicorn
import os

# from .api.database.database import get_db
from sqlalchemy.orm import Session

app = FastAPI()


@app.get('/')
async def get_root():
    return {
        "message": "welcome to investment web",
        "url": "http://localhost:8000/docs"
    }


@app.get('/company/ranks/{category}')
# async def get_company_catagory(request: Request, category: str, db: Session = Depends(get_db)):
async def get_company_catagory(request: Request, category: str):
    # companies = db.query(models.Company).filter(models.Company.category == category)
    return {"category": category}

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
