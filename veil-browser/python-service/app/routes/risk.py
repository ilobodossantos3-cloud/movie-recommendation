from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.risk_service import calculate_risk_score as risk_score_service

router = APIRouter()


class RiskRequest(BaseModel):
    url: str


class RiskResponse(BaseModel):
    url: str
    risk_score: float
    risk_level: str
    factors: list[str]
    recommendations: list[str]


@router.post("/risk-score", response_model=RiskResponse)
async def get_risk_score(request: RiskRequest):
    """
    Calculate privacy risk score for a website
    """
    try:
        result = await risk_score_service(request.url)
        return RiskResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
