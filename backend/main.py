import os

import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_utils.tasks import repeat_every
from starlette.middleware.sessions import SessionMiddleware

from api.database import database
from api.database.database import engine
from api.routes import company, auth, user
from api.payment_gte import server
from api.scripts.ranking import run_process_scripts

load_dotenv()

database.Base.metadata.create_all(bind=engine)
origins = [

    "http://65.108.237.42",
    "http://localhost:3000",
    "https://yieldvest.hng.tech",
    "https://mystockplug-demo.vercel.app"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = os.getenv('SECRET_KEY')
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

app.include_router(auth.router, prefix='/auth')
app.include_router(user.router, prefix='/user')
app.include_router(company.router)
app.include_router(server.router)

async def update_script_task():
    print('Running update script...')
    await run_process_scripts()


@app.on_event("startup")
@repeat_every(seconds=60 * 60)  # run every hour
async def run_cron():
    await update_script_task()


@app.get('/')
async def get_root():
    return {
        "message": "YieldVest API v1",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=9666, reload=True)
