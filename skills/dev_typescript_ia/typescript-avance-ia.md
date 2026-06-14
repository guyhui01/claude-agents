# Skill — Advanced TypeScript for AI
> Certifications: JSNAD · JSNSD · OpenJS Foundation

## Objective
Write strict, typed, performant TypeScript for AI applications.

## Advanced types for AI
```typescript
// Types for LLM messages
type Role = "user" | "assistant" | "system"
interface Message { role: Role; content: string }

// Generic for typed responses
type LLMResponse<T> = { data: T; usage: { inputTokens: number; outputTokens: number } }

// Discriminated union for tool results
type ToolResult =
  | { type: "success"; content: string }
  | { type: "error"; error: string; code: number }
```

## Zod — Validating LLM outputs
```typescript
import { z } from "zod"
import { generateObject } from "ai"

const UserStorySchema = z.object({
  title: z.string().min(5),
  asA: z.string(),
  iWant: z.string(),
  soThat: z.string(),
  acceptanceCriteria: z.array(z.string()).min(1).max(10)
})

const { object } = await generateObject({
  model: anthropic("claude-opus-4-8"),
  schema: UserStorySchema,
  prompt: "Generate a User Story for..."
})
// object is automatically typed as UserStory
```

## Async patterns for LLMs
```typescript
// Streaming with error handling
async function* streamLLM(prompt: string): AsyncGenerator<string> {
  try {
    const stream = await client.messages.stream({ ... })
    for await (const chunk of stream) {
      if (chunk.type === "content_block_delta") yield chunk.delta.text
    }
  } catch (error) {
    if (error instanceof RateLimitError) {
      await sleep(60000)
      yield* streamLLM(prompt)  // retry
    }
    throw error
  }
}

// Promise.all for parallel calls
const [summary, keywords, sentiment] = await Promise.all([
  summarize(text), extractKeywords(text), analyzeSentiment(text)
])
```

## Typed error handling
```typescript
class LLMError extends Error {
  constructor(public code: "RATE_LIMIT" | "CONTEXT_LENGTH" | "INVALID_API_KEY",
              message: string) { super(message) }
}
```

## Deliverables
- Strict TypeScript code (tsconfig: strict: true)
- Zod types for every LLM schema
- Typed error handling and retry logic

## Output format
Specify: framework (Next.js, Node.js) · TypeScript version · existing libraries · use case

## Anti-patterns
- ❌ **Unbounded recursive retry** (`yield* streamLLM(prompt)`): risk of infinite recursion → attempt counter + cap
- ❌ **Implicit imports** (`RateLimitError`, `sleep`, `client`): non-self-contained code → explicit imports
- ❌ **`any` instead of discriminated unions**: loss of typing guarantees → discriminated unions (`ToolResult`)
- ❌ **`generateObject` without Zod constraints** (`.min`, `.max`, `.enum`): unreliable outputs → strict schema
- ❌ **`usage` (tokens) untyped/untracked**: no cost control → type `LLMResponse<T>` with `usage`
- ❌ **`strict: false`** in tsconfig: silent bugs → `strict: true` (already recommended ✓)

## Sources
- **TypeScript Handbook** — typescriptlang.org/docs (Microsoft; strict mode, discriminated unions, generics)
- **Zod** — zod.dev (runtime validation + type inference) · **Vercel AI SDK** `generateObject` — ai-sdk.dev
- **Anthropic SDK** `@anthropic-ai/sdk` (streaming, `RateLimitError`) — current model **`claude-opus-4-8`**

## See also
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — retry/backoff and LLM error handling
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — typed structured outputs (Zod)
- [`tool-use-frontend.md`](tool-use-frontend.md) — typing tools and results
