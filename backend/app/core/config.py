from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_ENV: str = "development"
    SECRET_KEY: str
    DATABASE_URL: str
    REDIS_URL: str
    OLLAMA_BASE_URL: str
    JWT_SECRET_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()
