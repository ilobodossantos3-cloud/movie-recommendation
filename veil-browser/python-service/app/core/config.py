from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = True
    LOG_LEVEL: str = "info"
    
    # AI Model settings
    MODEL_PATH: str = "models/risk_model.pkl"
    
    # Tracker lists
    TRACKER_LIST_URL: str = "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts"
    
    class Config:
        env_file = ".env"


settings = Settings()
