from fastapi import FastAPI
import uvicorn
from api.models import models
from api.database.database import engine
from api.routes import rankings, password_reset
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(rankings.router)
app.include_router(password_reset.router)

@app.get('/')
async def get_root():
    return {
        "message": "welcome to investment web",
        "url": "http://localhost:8000/docs"
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
