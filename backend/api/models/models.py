from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from uuid import uuid4

from ..database.database import Base

class Company(Base):
    __tablename__ = 'companies'
    company_id = Column(String, primary_key=True, index=True, default=uuid4())
    name = Column(String, unique=True, index=True)
    location = Column(String)
    description = Column(String)
    sector = relationship('Sector', back_populates='sector_id')
