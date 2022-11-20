import uvicorn
from starlette.middleware.sessions import SessionMiddleware

from dotenv import load_dotenv
import os

from fastapi import FastAPI
from fastapi_utils.tasks import repeat_every

from api.database import database
from api.database.database import engine
from api.routes import routes, social_login
from api.scripts.ranking import run_process_scripts

from fastapi import FastAPI, BackgroundTasks, HTTPException, status
#from api.scripts.email import send_email_background, send_email_async
from sqlalchemy.testing import db

load_dotenv()

database.Base.metadata.create_all(bind=engine)


app = FastAPI()
SECRET_KEY = os.getenv('SECRET_KEY')
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

app.include_router(social_login.router)
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
        "message": "My Stock Plug API",
    }

# @app.get('/send-email/asynchronous')
# async def send_email_asynchronous():
#     user = await db["users"].find_one({"email": user_email.email})
#     print(user)
#     if user is not None:
#         await send_email_async('Hello World', 'someemail@gmail.com', {
#             'title': 'Hello World',
#             'name': 'user["name"],'
#         })
#         return 'Success'
#     else:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Your details not found, invalid email address"
#         )


# @app.get('/send-email/backgroundtasks')
# def send_email_backgroundtasks(background_tasks: BackgroundTasks):
#     send_email_background(background_tasks, 'Hello ', 'someemail@gmail.com', {
#         'title': 'Mystock plug',
#         'name': 'user'
#     })
#     return 'Success'
#


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
