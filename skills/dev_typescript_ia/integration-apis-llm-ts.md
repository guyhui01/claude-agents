# Skill — LLM API Integration in TypeScript
> Certifications: Anthropic Claude Code · DeepLearning.AI JS/TS

## Objective
Integrate LLM APIs in TypeScript with robust error handling and cost optimization.

## Anthropic SDK TypeScript
```typescript
import Anthropic from "@anthropic-ai/sdk"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Basic call
const message = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  system: "You are an expert Agile PO.",
  messages: [{ role: "user", content: userInput }]
})
const text = message.content[0].type === "text" ? message.content[0].text : ""

// Streaming
const stream = await client.messages.stream({
  model: "claude-opus-4-8",
  max_tokens: 2048,
  messages: [{ role: "user", content: prompt }]
})
for await (const chunk of stream) {
  if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
    process.stdout.write(chunk.delta.text)
  }
}
```

## Prompt Caching (cache reads ~90% cheaper than standard input)
```typescript
const message = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  system: [{ type: "text", text: longSystemPrompt,
    cache_control: { type: "ephemeral" }  // Cache this block
  }],
  messages: [{ role: "user", content: userQuery }]
})
// Subsequent calls with the same system prompt use the cache
```

## Retry logic in TypeScript
```typescript
async function callWithRetry<T>(fn: () => Promise<T>, maxAttempts = 3): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (error instanceof Anthropic.RateLimitError && attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000))
        continue
      }
      throw error
    }
  }
  throw new Error("Max attempts reached")
}
```

## Environment variables (Next.js)
```typescript
// .env.local
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...

// Validation at startup
if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY missing")
```

## Deliverables
- Typed LLM client with retry and error handling
- Prompt Caching configured
- Environment variables documented and validated
- Cost estimate

## Output format
Specify: provider(s) · caching need · streaming required · estimated request volume

## Anti-patterns
- ❌ **LLM API key exposed on the client**: secret leak → server-side calls only
- ❌ **"90%" read as a global saving**: it's ~90% on **cached (read) tokens**; the real gain depends on the cached/total token ratio and the TTL (5 min) → measure it
- ❌ **Retry without jitter or a global cap**: "thundering herd" effect → exponential backoff **+ jitter** + attempt budget
- ❌ **No cost/token tracking** (`usage`): budget drift → log input/output tokens
- ❌ **Hardcoded model** scattered around: centralize the ID (`claude-opus-4-8`) in config
- ❌ **`content[0]` assumed to be `text`** without checking the type: exception on a block-based response → type guard (already present ✓)

## Sources
- **Anthropic API** — docs.anthropic.com (Messages API, **prompt caching**: cache read ≈ 0.1× the input price, TTL 5 min) · current model **`claude-opus-4-8`**
- **Anthropic TypeScript SDK** `@anthropic-ai/sdk` — github.com/anthropics/anthropic-sdk-typescript
- **OpenAI SDK** `openai` (alternative provider) — platform.openai.com

## See also
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — multi-provider abstraction layer
- [`typescript-avance-ia.md`](typescript-avance-ia.md) — advanced typing of LLM responses + generic retry
- [`nextjs-ia.md`](nextjs-ia.md) — server-side Next.js integration
- [`edge-functions-ia.md`](edge-functions-ia.md) — edge execution and rate limiting
