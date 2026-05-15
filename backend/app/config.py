from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

# Carga .env desde backend/ o raíz del repo
_BACKEND_DIR = Path(__file__).resolve().parent.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=(_BACKEND_DIR / ".env", _BACKEND_DIR.parent / ".env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    database_url: str = "postgresql://markdecord:markdecord@localhost:5432/markdecord"
    api_prefix: str = "/api"


settings = Settings()
