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

## Livrables
- Code Python typé, async, avec gestion d'erreurs
- Tests unitaires (pytest + pytest-asyncio)
- Documentation minimaliste (docstrings fonctions publiques)

## Format de sortie
Précise : cas d'usage · version Python (3.11+) · librairies déjà utilisées · niveau de typage souhaité
