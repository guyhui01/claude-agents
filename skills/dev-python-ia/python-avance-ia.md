# Skill — Advanced Python for AI
> Certifications: PCAP · PCPP1 · PCPP2

## Objective
Write robust, typed, performant Python for AI applications.

## Static typing (essential in AI)
```python
from typing import Optional, Union, Literal
from pydantic import BaseModel, Field

class RAGQuery(BaseModel):
    query: str = Field(..., min_length=1, max_length=1000)
    top_k: int = Field(default=5, ge=1, le=20)
    filters: Optional[dict[str, str]] = None
```

## Async/Await (critical for LLM calls)
```python
import asyncio
import httpx

async def call_llm(prompt: str) -> str:
    async with httpx.AsyncClient() as client:
        response = await client.post(url, json={"prompt": prompt})
        return response.json()["content"]

# Parallel calls
results = await asyncio.gather(*[call_llm(p) for p in prompts])
```

## Dataclasses & Pydantic
- `@dataclass`: lightweight structures without validation
- `BaseModel` (Pydantic): validation + automatic JSON serialization
- `@validator` / `@field_validator`: custom field validation

## Error handling in an LLM context
```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
async def call_with_retry(prompt: str) -> str:
    ...  # Automatic retry on RateLimitError
```

## Useful AI patterns
- **Streaming**: `async for chunk in stream:` for token-by-token responses
- **Context managers**: `async with` for HTTP clients
- **Generators**: lazy data production for pipelines
- **Decorators**: logging, retry, caching of LLM calls

---

## Testable examples (ready-to-copy files)

### `examples/async_llm_retry.py` — Async LLM call with exponential retry

```python
"""
Module: Anthropic LLM call with exponential retry and timeout.
Covers patterns: async, tenacity, structured logging, strict type hints.
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
DEFAULT_MODEL: Final = "claude-sonnet-5"

# Transient Anthropic errors: rate limit, server overload, timeout
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
    """Call Claude and return the text response. Exponential retry on 5xx/429."""
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
    """Run N calls in parallel; return in prompt order."""
    return await asyncio.gather(*(call_claude(p) for p in prompts))
```

### `examples/test_async_llm_retry.py` — pytest tests (no real API call)

```python
"""Unit tests for async_llm_retry — mocks of the Anthropic API."""
import asyncio
from unittest.mock import AsyncMock, MagicMock, patch

import anthropic
import pytest

from examples.async_llm_retry import call_claude, fanout


@pytest.fixture
def mock_response():
    """Mocked Anthropic response."""
    resp = MagicMock()
    resp.content = [MagicMock(text="42")]
    resp.usage.input_tokens = 10
    resp.usage.output_tokens = 1
    return resp


@pytest.mark.asyncio
async def test_call_claude_returns_text(mock_response):
    with patch("anthropic.AsyncAnthropic") as MockClient:
        MockClient.return_value.messages.create = AsyncMock(return_value=mock_response)
        result = await call_claude("What is the answer?")
        assert result == "42"


@pytest.mark.asyncio
async def test_call_claude_retries_on_rate_limit(mock_response):
    """Check exponential retry: 2 failures then success."""
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
    """Results must be in input-prompt order."""
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

### `examples/rag_query_validation.py` — Strict input validation with Pydantic

```python
"""Strict server-side validation of a RAG query: prevents injection + DoS."""
from __future__ import annotations
from typing import Literal
from pydantic import BaseModel, Field, field_validator


class RAGQuery(BaseModel):
    """RAG query validated before running the pipeline."""
    query: str = Field(..., min_length=3, max_length=1000)
    top_k: int = Field(default=5, ge=1, le=20)
    filters: dict[str, str] | None = None
    language: Literal["fr", "en", "es", "de"] = "fr"

    @field_validator("query")
    @classmethod
    def reject_obvious_injection(cls, v: str) -> str:
        """Block the most blatant injection patterns."""
        forbidden = ["ignore previous", "system:", "[INST]", "<|im_start|>"]
        lowered = v.lower()
        for pattern in forbidden:
            if pattern in lowered:
                raise ValueError(f"Query rejected: forbidden pattern '{pattern}'")
        return v

    @field_validator("filters")
    @classmethod
    def reject_dangerous_filter_keys(cls, v: dict[str, str] | None) -> dict[str, str] | None:
        """Prevent injecting arbitrary filter keys (e.g., tenant_id)."""
        if v is None:
            return v
        allowed_keys = {"category", "date_from", "date_to", "source"}
        for key in v:
            if key not in allowed_keys:
                raise ValueError(f"Filter key not allowed: '{key}'")
        return v
```

### Run the tests

```bash
pip install pytest pytest-asyncio anthropic tenacity pydantic
pytest examples/ -v
# examples/test_async_llm_retry.py::test_call_claude_returns_text          PASSED
# examples/test_async_llm_retry.py::test_call_claude_retries_on_rate_limit PASSED
# examples/test_async_llm_retry.py::test_fanout_preserves_order            PASSED
```

---

## Deliverables
- Typed, async Python code with error handling
- Unit tests (pytest + pytest-asyncio) — ≥ 80% coverage on business code
- Minimal documentation (docstrings on public functions)
- Testable examples `examples/*.py` + `examples/test_*.py`

## Output format
Specify: use case · Python version (3.11+) · libraries already in use · desired typing level
