from fastapi import FastAPI
from api.models import models
from api.database.database import engine


models.Base.metadata.create_all(bind=engine)

app = FastAPI()