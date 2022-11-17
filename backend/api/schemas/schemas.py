from pydantic import BaseModel

class Company(BaseModel):
    name: str
    location: str
    description: str
    sector: str
