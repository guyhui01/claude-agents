# Skill — Python Avancé pour l'IA
> Certifications : PCAP · PCPP1 · PCPP2

## Objectif
Écrire du Python robuste, typé et performant pour les applications IA.

## Typage statique (indispensable en IA)
```python
from typing import Optional, Union, Literal
from pydantic import BaseModel, Field

class RAGQuery(BaseModel):
    query: str = Field(..., min_length=1, max_length=1000)
    top_k: int = Field(default=5, ge=1, le=20)
    filters: Optional[dict[str, str]] = None
```

## Async/Await (critique pour les appels LLM)
```python
import asyncio
import httpx

async def call_llm(prompt: str) -> str:
    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={"prompt": prompt})
        return response.json()["content"]

# Appels parallèles
results = await asyncio.gather(*[call_llm(p) for p in prompts])
```

## Dataclasses & Pydantic
- `@dataclass` : structures légères sans validation
- `BaseModel` Pydantic : validation + sérialisation JSON automatique
- `@validator` / `@field_validator` : validation custom des champs

## Gestion des erreurs en contexte LLM
```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
async def call_with_retry(prompt: str) -> str:
    ...  # Retry automatique sur RateLimitError
```

## Patterns utiles IA
- **Streaming** : `async for chunk in stream:` pour les réponses token par token
- **Context managers** : `async with` pour les clients HTTP
- **Generators** : production lazy de données pour les pipelines
- **Decorators** : logging, retry, cache des appels LLM

---

## Exemples testables (fichiers prêts à copier)

### `examples/async_llm_retry.py` — Appel LLM async avec retry exponentiel

```python
"""
Module : appel LLM Anthropic avec retry exponentiel et timeout.
Couvre les patterns : async, tenacity, structured logging, type hints stricts.
"""
from __future__ import annotations
import asyncio
import logging
from typing import Final

import anthropic
from tenacity import (
    retry,
    retry_if_exception_type,
    stop_after_attempt,
    wait_exponential_jitter,
)

logger = logging.getLogger(__name__)

MAX_ATTEMPTS: Final = 3
MAX_TOKENS: Final = 1024
DEFAULT_MODEL: Final = "claude-sonnet-4-6"

# Erreurs Anthropic transitoires : rate limit, surcharge serveur, timeout
TRANSIENT_ERRORS = (
    anthropic.RateLimitError,
    anthropic.APITimeoutError,
    anthropic.InternalServerError,
)


@retry(
    retry=retry_if_exception_type(TRANSIENT_ERRORS),
    stop=stop_after_attempt(MAX_ATTEMPTS),
    wait=wait_exponential_jitter(initial=2, max=30),
    reraise=True,
)
async def call_claude(
    prompt: str,
    model: str = DEFAULT_MODEL,
    max_tokens: int = MAX_TOKENS,
    timeout_s: float = 30.0,
) -> str:
    """Appelle Claude et retourne la réponse texte. Retry exponentiel sur 5xx/429."""
    client = anthropic.AsyncAnthropic(timeout=timeout_s)
    logger.info("llm.call.start", extra={"model": model, "prompt_len": len(prompt)})
    response = await client.messages.create(
        model=model,
        max_tokens=max_tokens,
        messages=[{"role": "user", "content": prompt}],
    )
    text = response.content[0].text
    logger.info(
        "llm.call.success",
        extra={
            "input_tokens": response.usage.input_tokens,
            "output_tokens": response.usage.output_tokens,
        },
    )
    return text


async def fanout(prompts: list[str]) -> list[str]:
    """Exécute N appels en parallèle, retourne dans l'ordre des prompts."""
    return await asyncio.gather(*(call_claude(p) for p in prompts))
```

### `examples/test_async_llm_retry.py` — Tests pytest (sans appel réel à l'API)

```python
"""Tests unitaires pour async_llm_retry — mocks de l'API Anthropic."""
import asyncio
from unittest.mock import AsyncMock, MagicMock, patch

import anthropic
import pytest

from examples.async_llm_retry import call_claude, fanout


@pytest.fixture
def mock_response():
    """Réponse Anthropic mockée."""
    resp = MagicMock()
    resp.content = [MagicMock(text="42")]
    resp.usage.input_tokens = 10
    resp.usage.output_tokens = 1
    return resp


@pytest.mark.asyncio
async def test_call_claude_returns_text(mock_response):
    with patch("anthropic.AsyncAnthropic") as MockClient:
        MockClient.return_value.messages.create = AsyncMock(return_value=mock_response)
        result = await call_claude("Quelle est la réponse ?")
        assert result == "42"


@pytest.mark.asyncio
async def test_call_claude_retries_on_rate_limit(mock_response):
    """Vérifie le retry exponentiel : 2 échecs puis succès."""
    rate_limit = anthropic.RateLimitError(
        message="rate limit", response=MagicMock(status_code=429), body=None
    )
    with patch("anthropic.AsyncAnthropic") as MockClient:
        create_mock = AsyncMock(side_effect=[rate_limit, rate_limit, mock_response])
        MockClient.return_value.messages.create = create_mock
        result = await call_claude("x")
        assert result == "42"
        assert create_mock.call_count == 3


@pytest.mark.asyncio
async def test_fanout_preserves_order(mock_response):
    """Les résultats doivent être dans l'ordre des prompts d'entrée."""
    responses = []
    for i in range(3):
        r = MagicMock()
        r.content = [MagicMock(text=f"answer-{i}")]
        r.usage.input_tokens = 1
        r.usage.output_tokens = 1
        responses.append(r)
    with patch("anthropic.AsyncAnthropic") as MockClient:
        MockClient.return_value.messages.create = AsyncMock(side_effect=responses)
        results = await fanout(["q0", "q1", "q2"])
        assert results == ["answer-0", "answer-1", "answer-2"]
```

### `examples/rag_query_validation.py` — Validation d'entrée stricte avec Pydantic

```python
"""Validation stricte d'une requête RAG côté API : prévient injection + DoS."""
from __future__ import annotations
from typing import Literal
from pydantic import BaseModel, Field, field_validator


class RAGQuery(BaseModel):
    """Requête RAG validée avant exécution du pipeline."""
    query: str = Field(..., min_length=3, max_length=1000)
    top_k: int = Field(default=5, ge=1, le=20)
    filters: dict[str, str] | None = None
    language: Literal["fr", "en", "es", "de"] = "fr"

    @field_validator("query")
    @classmethod
    def reject_obvious_injection(cls, v: str) -> str:
        """Bloque les patterns d'injection les plus grossiers."""
        forbidden = ["ignore previous", "system:", "[INST]", "<|im_start|>"]
        lowered = v.lower()
        for pattern in forbidden:
            if pattern in lowered:
                raise ValueError(f"Requête refusée : pattern interdit '{pattern}'")
        return v

    @field_validator("filters")
    @classmethod
    def reject_dangerous_filter_keys(cls, v: dict[str, str] | None) -> dict[str, str] | None:
        """Empêche d'injecter des clés de filtre arbitraires (ex: tenant_id)."""
        if v is None:
            return v
        allowed_keys = {"category", "date_from", "date_to", "source"}
        for key in v:
            if key not in allowed_keys:
                raise ValueError(f"Clé de filtre non autorisée : '{key}'")
        return v
```

### Lancer les tests

```bash
pip install pytest pytest-asyncio anthropic tenacity pydantic
pytest examples/ -v
# examples/test_async_llm_retry.py::test_call_claude_returns_text          PASSED
# examples/test_async_llm_retry.py::test_call_claude_retries_on_rate_limit PASSED
# examples/test_async_llm_retry.py::test_fanout_preserves_order            PASSED
```

---

## Livrables
- Code Python typé, async, avec gestion d'erreurs
- Tests unitaires (pytest + pytest-asyncio) — couverture ≥ 80% sur le code métier
- Documentation minimaliste (docstrings fonctions publiques)
- Exemples testables `examples/*.py` + `examples/test_*.py`

## Format de sortie
Précise : cas d'usage · version Python (3.11+) · librairies déjà utilisées · niveau de typage souhaité
