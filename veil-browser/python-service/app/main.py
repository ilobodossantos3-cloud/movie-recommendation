from fastapi import FastAPI
from routes import analyze, trackers, risk
from core.config import settings

app = FastAPI(
    title="Veil Browser AI Service",
    description="Privacy analysis and tracking detection API",
    version="0.1.0"
)

# Include routers
app.include_router(analyze.router, prefix="/api/v1", tags=["analyze"])
app.include_router(trackers.router, prefix="/api/v1", tags=["trackers"])
app.include_router(risk.router, prefix="/api/v1", tags=["risk"])


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "veil-ai-service"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=True
    )
