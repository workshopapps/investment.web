from fastapi import FastAPI, BackgroundTasks
import uvicorn

from api.models import models

from api.database import database
from api.database.database import engine


from api.routers import company_metrics, company_category, company_timeframe
from api.scripts.ranking import run_process_scripts
from fastapi_utils.tasks import repeat_every


database.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(company_metrics.router)
app.include_router(company_category.router)
app.include_router(company_timeframe.router)
app.include_router(list_of_ranked_companies.router)


async def update_script_task():
    print('Running update script...')
    await run_process_scripts()


@app.on_event("startup")
@repeat_every(seconds=10) # run every hour
async def run_cron():
    await update_script_task()


@app.get('/')
async def get_root():
    return {
        "message": "My Stock Plug",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)