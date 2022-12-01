import uvicorn
from starlette.middleware.sessions import SessionMiddleware

from dotenv import load_dotenv
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_utils.tasks import repeat_every

from api.database import database
from api.database.database import engine
from api.routes import routes, auth
from api.payment_gte import server
from api.scripts.ranking import run_process_scripts
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

database.Base.metadata.create_all(bind=engine)
origins = [
    "http://65.108.237.42",
]

app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = os.getenv('SECRET_KEY')
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix='/auth')
app.include_router(routes.router)
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
        "message": "My Stock Plug API",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=9666, reload=True)
