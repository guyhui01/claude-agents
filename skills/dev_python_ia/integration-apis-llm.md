# Skill — LLM API Integration (Python)
> Certifications: DeepLearning.AI · Anthropic Claude Code in Action

## Objective
Integrate and use the main LLM APIs in Python in a robust and cost-efficient way.

## Anthropic SDK (Claude)
```python
import anthropic

client = anthropic.Anthropic(api_key="...")

# Basic call
message = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain RAG"}]
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

## Multi-provider abstraction (LiteLLM)
```python
import litellm

# Same interface for every provider
response = await litellm.acompletion(
    model="anthropic/claude-opus-4-8",  # or "openai/gpt-4o", "mistral/mistral-large"
    messages=[{"role": "user", "content": prompt}]
)
```

## Cost optimization
| Technique | Estimated saving |
|---|---|
| **Prompt Caching** (Anthropic) | up to 90% on repeated prompts |
| **Batch API** (Anthropic/OpenAI) | 50% reduction when real-time isn't needed |
| **Smaller model** (Haiku vs Opus) | 90% cheaper, enough for simple tasks |
| **Capped max tokens** | Avoids needlessly long responses |

## Error handling
```python
from anthropic import RateLimitError, APIError
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=60),
       retry=retry_if_exception_type(RateLimitError))
async def call_claude(prompt: str) -> str: ...
```

## Deliverables
- LLM client configured with retry and error handling
- Monthly cost estimate based on volume
- Integration tests with mocks for unit testing

## Output format
Specify: provider(s) · target model(s) · requests/day volume · streaming need · tools to implement
