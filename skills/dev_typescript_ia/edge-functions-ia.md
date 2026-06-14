# Skill — Edge Functions & AI Middleware
> Certifications: Vercel Next.js Certification 2025

## Objective
Deploy AI routes on the Edge Runtime to minimize latency and scale globally.

## Edge Runtime vs Node.js Runtime
| Criterion | Edge Runtime | Node.js Runtime |
|---|---|---|
| Latency | Ultra-low (global) | Standard |
| Cold start | ~0ms | ~100-500ms |
| LLM streaming | ✓ optimal | ✓ |
| File system | ✗ | ✓ |
| Node libraries | Limited | All |
| Vercel pricing | Cheaper | Standard |

## Edge API Route with streaming
```typescript
// app/api/chat/route.ts
export const runtime = "edge"
export const maxDuration = 30  // seconds

import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: anthropic("claude-opus-4-8"),
    messages,
    system: "You are an expert assistant."
  })

  return result.toDataStreamResponse()
}
```

## AI middleware (auth + rate limiting)
```typescript
// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Basic per-IP rate limiting
  const ip = request.ip ?? "anonymous"
  const rateLimit = checkRateLimit(ip)  // Implemented with Upstash Redis
  if (!rateLimit.success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
  }

  // Auth check for AI routes
  if (request.nextUrl.pathname.startsWith("/api/chat")) {
    const token = request.headers.get("authorization")
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = { matcher: ["/api/:path*"] }
```

## Cloudflare Workers AI
```typescript
// For Cloudflare deployment (Vercel alternative)
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const ai = new Ai(env.AI)
    const response = await ai.run("@cf/meta/llama-3.1-8b-instruct", {
      messages: [{ role: "user", content: "Hello" }],
      stream: true
    })
    return new Response(response, { headers: { "content-type": "text/event-stream" } })
  }
}
```

## Deliverables
- AI route configured on the Edge Runtime
- Auth + rate limiting middleware
- Optimized maxDuration configuration
- Edge vs Node.js latency benchmark

## Output format
Specify: deployment provider (Vercel, Cloudflare) · auth need · request volume · target regions

## Anti-patterns
- ❌ **Node dependency (fs, native modules) on the Edge Runtime**: build error → check edge compatibility or switch to the Node runtime
- ❌ **In-memory local rate limiting**: ineffective in multi-region edge → distributed store (Upstash Redis)
- ❌ **`maxDuration` too short** for long generations: timeout mid-stream → calibrate it
- ❌ **Auth only in middleware** without route-side control: bypass possible → defense in depth
- ❌ **Hardcoded model**: centralize the ID (`claude-opus-4-8`)

## Sources
- **Vercel Edge Functions / Edge Runtime** — vercel.com/docs/functions · **Vercel AI SDK** — ai-sdk.dev
- **Cloudflare Workers AI** — developers.cloudflare.com/workers-ai (e.g., `@cf/meta/llama-3.1-8b-instruct`)
- **Upstash Redis** (serverless rate limiting) — upstash.com · current model **`claude-opus-4-8`**

## See also
- [`nextjs-ia.md`](nextjs-ia.md) — Next.js routes and runtime
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — streaming via the SDK
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — API-side rate limiting and retry
