from fastapi import APIRouter

router = APIRouter()


@router.get('/rankings')
def get_rankings():
    return {'apple': 10}
