# Skill — Prompt Cost and Performance Optimization
> Certifications: Anthropic Claude Code in Action (2026), Claude Code 101 (2026), AWS Certified AI Practitioner (Amazon)

## Objective
Reduce the cost and improve the performance of LLM prompts — prompt caching, context compression, model selection, token reduction — without degrading output quality.

## Optimization levers

```
LEVER 1 — PROMPT CACHING (savings up to 90%)
  Cache the stable content (system prompt, long docs)
  Trigger: > 1024 tokens cached (Claude)
  TTL: 5 minutes (Anthropic)

LEVER 2 — MODEL SELECTION
  Opus 4.8   : complex / nuanced / critical tasks
  Sonnet 4.6 : quality / cost balance (80% of cases)
  Haiku 4.5  : simple / repetitive / high-volume tasks

LEVER 3 — TOKEN REDUCTION
  Remove irrelevant context
  Summarize long histories
  Use compact formats (YAML > JSON > long Markdown)

LEVER 4 — BATCH PROCESSING
  Group non-urgent requests
  Anthropic Message Batches API: -50% cost

LEVER 5 — STREAMING
  Reduce perceived latency
  No token savings but better UX
```

## Prompt Caching implementation (Claude)

```typescript
// Enable caching on the long system prompt
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 4096,
  system: [
    {
      type: "text",
      // Long content (> 1024 tokens) — cached for 5 min
      text: longSystemPrompt,
      cache_control: { type: "ephemeral" },
    },
  ],
  messages: [{ role: "user", content: userMessage }],
});

// Cache metrics
console.log("Input tokens   :", response.usage.input_tokens);
console.log("Cached tokens  :", response.usage.cache_read_input_tokens);
console.log("Written tokens :", response.usage.cache_creation_input_tokens);

// Savings calculation
const savings = response.usage.cache_read_input_tokens * 0.9; // 90% cheaper
```

## Model selection matrix

| Task type | Recommended model | Rationale |
|---|---|---|
| Complex workflow orchestration | Opus 4.8 | Multi-step reasoning |
| US / feature writing | Sonnet 4.6 | Sufficient quality, fast |
| Extraction / classification | Haiku 4.5 | Simple task, high volume |
| Complex code analysis | Opus 4.8 | Nuance and precision |
| Document summarization | Sonnet 4.6 | Good balance |
| Format validation | Haiku 4.5 | Explicit rules, fast |

## Context compression

```python
COMPRESSION_PROMPT = """
Summarize the conversation below, keeping ONLY:
- The decisions made (format: "DECISION: ...")
- The key factual information (names, dates, numbers)
- The context for the next action

Maximum 200 tokens. Remove: greetings, repetitions,
explanations of already-known processes.

CONVERSATION:
{conversation_history}
"""
```

## Cost calculator

```python
# Claude Sonnet 4.6 pricing (indicative — check anthropic.com)
PRICE_INPUT  = 3.0   # $/MTok
PRICE_CACHE_READ  = 0.3   # $/MTok (90% cheaper)
PRICE_CACHE_WRITE = 3.75  # $/MTok (+25% first write)
PRICE_OUTPUT = 15.0  # $/MTok

def estimate_cost(input_tokens, cache_read, cache_write, output_tokens):
    cost = (
        (input_tokens / 1_000_000) * PRICE_INPUT +
        (cache_read / 1_000_000) * PRICE_CACHE_READ +
        (cache_write / 1_000_000) * PRICE_CACHE_WRITE +
        (output_tokens / 1_000_000) * PRICE_OUTPUT
    )
    return round(cost, 4)
```

## Deliverables
- Operational prompt caching implementation
- Documented model selection matrix
- Context compression script
- Tailored cost calculator

## Output format
Specify: request volume (monthly), system prompt length, task type, target budget.

## Anti-patterns
- ❌ **"90% savings" taken as an overall gain**: it is ~90% on the **cached (read) tokens** → real gain = f(cache hit ratio), to be measured
- ❌ **Opus everywhere**: overspending → choose the tier (Opus 4.8 reasoning / Sonnet 4.6 routine / Haiku 4.5 simple)
- ❌ **Hard-coded pricing** with no source or date: stale → point to anthropic.com/pricing
- ❌ **Context compression without loss control**: degrades quality → verify the output after compression
- ❌ **Batch for interactive use**: latency (up to 24h) → batch reserved for asynchronous work

## Sources
- **Anthropic — Prompt caching / Message Batches API** (docs.anthropic.com): cache read ≈ 0.1× input (TTL 5 min), batch −50%
- **Anthropic — Pricing & Models** (anthropic.com/pricing): Opus 4.8 / Sonnet 4.6 / Haiku 4.5 (check current pricing before estimating)

## See also
- [`system-prompt-design.md`](system-prompt-design.md) — concise prompts (fewer tokens)
- [`evals-llm-observability.md`](evals-llm-observability.md) — cost and cache hit rate tracking
- [`../orchestrateur_workflow/claude-api-integration.md`](../orchestrateur_workflow/claude-api-integration.md) — caching/batch on the SDK side
- [`../dev_typescript_ia/integration-apis-llm-ts.md`](../dev_typescript_ia/integration-apis-llm-ts.md) — prompt caching implementation
