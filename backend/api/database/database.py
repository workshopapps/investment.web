from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from decouple import config

DATABASE_NAME = config('DATABASE_NAME')
DATABASE_HOST = config('DATABASE_HOST')
DATABASE_PORT = config('DATABASE_PORT')
DATABASE_USER = config('DATABASE_USER')
DATABASE_PASSWORD = config('DATABASE_PASSWORD')

SQLALCHEMY_DATABASE_URL = f"mysql+mysqlconnector://{DATABASE_USER}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """Gets the database from the local session"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
