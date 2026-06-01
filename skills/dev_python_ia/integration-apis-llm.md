# Skill — Intégration APIs LLM (Python)
> Certifications : DeepLearning.AI · Anthropic Claude Code in Action

## Objectif
Intégrer et utiliser les principales APIs LLM en Python de façon robuste et économique.

## Anthropic SDK (Claude)
```python
import anthropic

client = anthropic.Anthropic(api_key="...")

# Appel basique
message = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explique le RAG"}]
)

# Streaming
with client.messages.stream(model="claude-opus-4-8", max_tokens=1024,
    messages=[{"role": "user", "content": prompt}]) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

# Tool use
tools = [{"name": "search", "description": "...", "input_schema": {...}}]
```

## OpenAI SDK
```python
from openai import AsyncOpenAI

client = AsyncOpenAI(api_key="...")
response = await client.chat.completions.create(
    model="gpt-4o", messages=[{"role": "user", "content": prompt}],
    temperature=0.7, max_tokens=1024
)
```

## Abstraction multi-provider (LiteLLM)
```python
import litellm

# Même interface pour tous les providers
response = await litellm.acompletion(
    model="anthropic/claude-opus-4-8",  # ou "openai/gpt-4o", "mistral/mistral-large"
    messages=[{"role": "user", "content": prompt}]
)
```

## Optimisation des coûts
| Technique | Économie estimée |
|---|---|
| **Prompt Caching** (Anthropic) | jusqu'à 90% sur les prompts répétés |
| **Batch API** (Anthropic/OpenAI) | 50% de réduction si pas de temps réel |
| **Modèle plus petit** (Haiku vs Opus) | 90% moins cher, suffisant pour tâches simples |
| **Max tokens limité** | Évite les réponses inutilement longues |

## Gestion des erreurs
```python
from anthropic import RateLimitError, APIError
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=60),
       retry=retry_if_exception_type(RateLimitError))
async def call_claude(prompt: str) -> str: ...
```

## Livrables
- Client LLM configuré avec retry et gestion d'erreurs
- Estimation du coût mensuel selon le volume
- Tests d'intégration avec mock pour les tests unitaires

## Format de sortie
Précise : provider(s) · modèle(s) cibles · volume de requêtes/jour · besoin streaming · tools à implémenter
