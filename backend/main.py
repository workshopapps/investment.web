from fastapi import FastAPI
import uvicorn
from starlette.middleware.sessions import SessionMiddleware

from api.models import models

from api.database import database
from api.database.database import engine
from api.routers import company_metrics, company_category, social_login

database.Base.metadata.create_all(bind=engine)


app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key="SECRET KEY")

app.include_router(company_metrics.router)
app.include_router(company_category.router)
app.include_router(social_login.router)


@app.get('/')
async def get_root():
    return {
        "message": "welcome to investment web",
        "url": "http://localhost:8000/docs"
    }



if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
