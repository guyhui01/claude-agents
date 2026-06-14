# Skill — Vercel AI SDK
> Certifications: Vercel Next.js Certification · DeepLearning.AI JS/TS

## Objective
Build AI applications with the Vercel AI SDK (streaming, tools, structured outputs).

## Installation & providers
```bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai
```

## generateText — Simple generation
```typescript
import { generateText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

const { text } = await generateText({
  model: anthropic("claude-opus-4-8"),
  prompt: "Explain RAG in 3 sentences",
  system: "You are an AI expert. Respond in English."
})
```

## streamText — Streaming (Server Action)
```typescript
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: anthropic("claude-opus-4-8"),
    messages,
    system: "You are an Agile PO assistant."
  })
  return result.toDataStreamResponse()
}
```

## generateObject — Structured outputs with Zod
```typescript
import { generateObject } from "ai"
import { z } from "zod"

const { object } = await generateObject({
  model: anthropic("claude-opus-4-8"),
  schema: z.object({
    userStory: z.string(),
    acceptanceCriteria: z.array(z.string()),
    storyPoints: z.number().int().min(1).max(13)
  }),
  prompt: "Generate a User Story for the search feature"
})
```

## Tools with the AI SDK
```typescript
import { tool } from "ai"

const searchTool = tool({
  description: "Search the knowledge base",
  parameters: z.object({ query: z.string(), limit: z.number().optional() }),
  execute: async ({ query, limit = 5 }) => {
    return await vectorDB.search(query, limit)
  }
})

const result = await generateText({
  model: anthropic("claude-opus-4-8"),
  tools: { search: searchTool },
  maxSteps: 5,  // Max number of agent iterations
  prompt: userMessage
})
```

## useChat — React hook (client)
```typescript
"use client"
import { useChat } from "ai/react"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    onError: (error) => console.error(error)
  })
  return ( /* JSX */ )
}
```

## Deliverables
- Working streaming API route
- useChat or useCompletion hook on the client
- Configured and tested tools
- Error handling and loading states

## Output format
Specify: framework (Next.js App Router?) · LLM provider · tools need · structured output needed

## Anti-patterns
- ❌ **AI SDK v4 syntax on AI SDK 5**: v5 (July 2025) renames `parameters`→`inputSchema`, `maxSteps`→`stopWhen`, `ai/react`→`@ai-sdk/react`, and moves to native SSE (`toUIMessageStreamResponse`). Check the target version before copying.
- ❌ **LLM API key on the client**: secret leak → calls exclusively on the server (Server Action / route)
- ❌ **Hardcoded model** scattered around: painful maintenance → centralize the model ID (config/env)
- ❌ **No `onError` / `stop`** on `useChat`: degraded UX → handle errors + interruption
- ❌ **`generateObject` without a strict schema**: unreliable outputs → Zod with constraints (`.min`, `.max`, `.enum`)

## Sources
- **Vercel AI SDK** — ai-sdk.dev (AI SDK **5**, July 2025: UIMessage/ModelMessage typing, native SSE, Agent class) · npm `ai`
- **Anthropic SDK / provider** `@ai-sdk/anthropic` — docs.anthropic.com · current model **`claude-opus-4-8`**
- **Zod** — zod.dev (structured output validation)

## See also
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — native Anthropic SDK + prompt caching
- [`nextjs-ia.md`](nextjs-ia.md) — Next.js integration (routes, Server Actions)
- [`chat-ui-streaming.md`](chat-ui-streaming.md) — chat UI consuming the SDK
- [`tool-use-frontend.md`](tool-use-frontend.md) — tools and human-in-the-loop
