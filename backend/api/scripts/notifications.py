import asyncio

from collections import defaultdict
from api.schemas.schemas import EmitEventModel
from sqlalchemy.orm import Session
from api.crud.base import get_db
from api.models.models import User, Customer, Subscription
from api.routes.auth import get_current_user
from fastapi import Request, APIRouter, Depends
from sse_starlette.sse import EventSourceResponse


router = APIRouter()


db: Session = next(get_db())


clients = defaultdict(list)



async def retrieve_events(recipient_id: str, request: Request, user: User=Depends(get_current_user)):
    yield dict(data="Connection established")
    while True:
        if recipient_id in clients and len(clients[recipient_id]) > 0:
            yield clients[recipient_id].pop()
        await asyncio.sleep(1)
        print(clients)


@router.get("/subscribe/{recipient_id}")
async def loopBackStream(req: Request, recipient_id: str, user: User=Depends(get_current_user)):
    return EventSourceResponse(retrieve_events(recipient_id))


@router.post("/emit")
async def emitEvent(event: EmitEventModel, user: User=Depends(get_current_user)):
    clients[event.recipient_id].append(event)