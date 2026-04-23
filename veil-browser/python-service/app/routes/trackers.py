from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from services.tracker_service import detect_trackers as detect_trackers_service

router = APIRouter()


class TrackerRequest(BaseModel):
    url: str


class TrackerInfo(BaseModel):
    name: str
    category: str
    domain: str
    risk_level: str


class TrackersResponse(BaseModel):
    url: str
    trackers: List[TrackerInfo]
    total_count: int
    blocked_count: int


@router.post("/detect-trackers", response_model=TrackersResponse)
async def detect_trackers(request: TrackerRequest):
    """
    Detect tracking scripts and pixels on a website
    """
    try:
        result = await detect_trackers_service(request.url)
        return TrackersResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
