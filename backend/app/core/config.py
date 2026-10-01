from pydantic_settings import BaseSettings
from pydantic import computed_field

class Settings(BaseSettings):
    APP_ENV: str = "development"
    SECRET_KEY: str
    
    DB_HOST: str
    DB_PORT: str
    DB_NAME: str
    DB_USER: str
    DB_PASSWORD: str
    
    REDIS_URL: str
    OLLAMA_BASE_URL: str
    JWT_SECRET_KEY: str

    @computed_field
    @property
    def DATABASE_URL(self) -> str:
        return f"postgresql+psycopg2://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"

    class Config:
        env_file = ".env"

settings = Settings()
