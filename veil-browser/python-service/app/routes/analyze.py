from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.analyzer_service import analyze_url as analyze_url_service

router = APIRouter()


class AnalyzeRequest(BaseModel):
    url: str


class AnalyzeResponse(BaseModel):
    url: str
    title: str
    description: str
    privacy_score: float
    trackers_found: int
    ads_detected: int
    https_enabled: bool
    cookies_count: int
    scripts_count: int
    risk_level: str


@router.post("/analyze-url", response_model=AnalyzeResponse)
async def analyze_url(request: AnalyzeRequest):
    """
    Analyze a URL for privacy risks and tracking elements
    """
    try:
        result = await analyze_url_service(request.url)
        return AnalyzeResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
