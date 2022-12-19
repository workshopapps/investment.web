import os

import sentry_sdk
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_utils.tasks import repeat_every
from starlette.middleware.sessions import SessionMiddleware

from api.database import database
from api.database.database import engine
from api.payment_gte import server
from api.routes import company, auth, user, newsletter
from api.scripts.ranking import run_process_scripts

load_dotenv()

sentry_sdk.init(
    dsn="https://6ea75f2205cc4469a564cf2bce39ccfb@o4504281377996800.ingest.sentry.io/4504283426390016",

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=0.3,
)

database.Base.metadata.create_all(bind=engine)
origins = [
    "http://localhost:3000",
    "https://yieldvest.hng.tech",
    "https://mystockplug-demo.vercel.app",
    "https://www.yieldvest.app",
    "https://yieldvest.app"
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
app.include_router(newsletter.router)
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


@app.get("/sentry-debug")
async def trigger_error():
    division_by_zero = 1 / 0
    return {"message": "Error"}


# DO NOT REMOVE THIS COMMENT, RUN THE APP VIA THE TERMINAL
# if __name__ == "__main__":
#     uvicorn.run("main:app", port=int(os.getenv('BACKEND_PORT')), reload=True)
