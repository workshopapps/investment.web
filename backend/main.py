from fastapi import FastAPI
import uvicorn
import os

from api.database import database

app = FastAPI()

# testing the database models

database.Base.metadata.drop_all(database.engine)  # just for testing here
database.Base.metadata.create_all(database.engine)


@app.get('/')
async def get_root():
    return {
        "message": "welcome to investment web",
        "url": "http://localhost:8000/docs"
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
