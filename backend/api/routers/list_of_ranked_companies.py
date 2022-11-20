import os
from dotenv import load_dotenv
from fastapi import APIRouter
from sqlalchemy.orm import Session
from api.models import models
from api.crud.base import get_db
from api.models.models import Ranking

router = APIRouter()


@router.get('/company/ranking')
def get_list_of_ranked_companies():
    db: Session = next(get_db())
    # get companies
    low_cap_category_id = os.getenv('LOW_MARKET_CAP_CATEGORY_ID')
    companies: list = db.query(models.Company).filter(models.Company.category != low_cap_category_id).all()

    # get latest rankings
    rankings: list = []
    for company in companies:
        rank = db.query(Ranking).filter(Ranking.company == company.company_id) \
            .order_by(Ranking.created_at.desc()).first()
        if rank:
            rankings.append(rank)

    # sort rankings by score (descending)
    def get_ranking_sort_key(inner_rank: Ranking):
        return inner_rank.score

    rankings.sort(key=get_ranking_sort_key, reverse=True)

    # create the response list
    response = []
    for ranking in rankings:
        comp: models.Company = ranking.comp_ranks
        data = {
            'company_id': comp.company_id,
            'name': comp.name,
            'sector': comp.sect_value,
            'category': comp.cat_value,
            'ticker_symbol': comp.ticker_value.symbol,
            'exchange_platform': comp.ticker_value.exchange_name,
            'current_ranking': {
                'score': ranking.score,
                'created_at': ranking.created_at
            }
        }
        response.append(data)

    return response
