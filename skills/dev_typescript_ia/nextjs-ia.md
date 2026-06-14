# Skill — Next.js + AI (App Router)
> Certifications: Vercel Next.js Certification 2025

## Objective
Build full-stack AI applications with Next.js 15 App Router.

## Recommended project structure
```
app/
├── api/
│   ├── chat/route.ts          ← LLM streaming API
│   ├── generate/route.ts      ← One-shot generation
│   └── tools/[name]/route.ts  ← Tool endpoints
├── (chat)/
│   ├── page.tsx               ← Chat interface
│   └── components/
│       ├── chat-messages.tsx
│       ├── chat-input.tsx
│       └── message-bubble.tsx
└── layout.tsx
```

## API Route — LLM streaming
```typescript
// app/api/chat/route.ts
import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

export const runtime = "edge"  // Edge runtime for minimal latency

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: anthropic("claude-opus-4-8"),
    system: "You are an expert Agile PO assistant.",
    messages,
    maxTokens: 2048
  })
  return result.toDataStreamResponse({
    headers: { "X-Accel-Buffering": "no" }  // Disable nginx buffering
  })
}
```

## Server Actions with AI
```typescript
// app/actions.ts
"use server"
import { generateObject } from "ai"
import { z } from "zod"

export async function generateUserStory(feature: string) {
  const { object } = await generateObject({
    model: anthropic("claude-opus-4-8"),
    schema: UserStorySchema,
    prompt: `Generate a User Story for: ${feature}`
  })
  return object
}
```

## Performance patterns
- **Suspense + Streaming**: render content as it arrives
- **Edge Runtime**: global deployment, minimal latency for LLM APIs
- **Route Handlers**: prefer over Server Actions for streams
- **Cache**: `unstable_cache` for repetitive LLM responses

## Client-side state management
```typescript
"use client"
// For conversations: useChat (Vercel AI SDK)
// For one-off generations: useCompletion
// For global state: Zustand or Context
```

## Deliverables
- Working streaming API route
- Next.js page with chat components
- Server Actions for one-off operations
- Edge Runtime configuration

## Output format
Specify: Next.js version · LLM provider · features (chat, generation, tools) · target deployment (Vercel, other)

## Anti-patterns
- ❌ **Server Actions for streaming**: prefer Route Handlers (already noted) → stream via `app/api/.../route.ts`
- ❌ **Edge Runtime with Node dependencies**: incompatibility → pick the runtime based on the libs
- ❌ **LLM API key on the client**: leak → server-side (route/action)
- ❌ **No cache on repetitive generations**: needless cost → `unstable_cache` / revalidation
- ❌ **Unpinned Next.js version**: App Router breaking changes between majors → pin the version (Next.js 15/16)
- ❌ **`maxTokens` (AI SDK v4)**: on AI SDK 5 it's `maxOutputTokens` → check the version

## Sources
- **Next.js** — nextjs.org (Vercel): App Router, Server Actions, Route Handlers (Next.js **15/16**, + React 19)
- **Vercel AI SDK** — ai-sdk.dev (`streamText`, `generateObject`) · **Zod** — zod.dev
- **Anthropic** `@ai-sdk/anthropic` — current model **`claude-opus-4-8`**

## See also
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — SDK APIs used in the routes
- [`edge-functions-ia.md`](edge-functions-ia.md) — Edge Runtime and middleware
- [`chat-ui-streaming.md`](chat-ui-streaming.md) — chat client UI
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — LLM integration layer
