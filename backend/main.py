import uvicorn
from fastapi import FastAPI
from fastapi_utils.tasks import repeat_every

from api.database import database
from api.database.database import engine
from api.routes import routes
from api.scripts.ranking import run_process_scripts

database.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(routes.router)


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
        "message": "My Stock Plug",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
