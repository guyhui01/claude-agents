# Skill — Edge Functions & AI Middleware
> Certifications : Vercel Next.js Certification 2025

## Objectif
Déployer les routes IA sur Edge Runtime pour minimiser la latence et scaler globalement.

## Edge Runtime vs Node.js Runtime
| Critère | Edge Runtime | Node.js Runtime |
|---|---|---|
| Latence | Ultra-faible (global) | Standard |
| Cold start | ~0ms | ~100-500ms |
| Streaming LLM | ✓ optimal | ✓ |
| File system | ✗ | ✓ |
| Bibliothèques Node | Limitées | Toutes |
| Prix Vercel | Moins cher | Standard |

## API Route Edge avec streaming
```typescript
// app/api/chat/route.ts
export const runtime = "edge"
export const maxDuration = 30  // secondes

import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: anthropic("claude-opus-4-5"),
    messages,
    system: "Tu es un assistant expert."
  })

  return result.toDataStreamResponse()
}
```

## Middleware IA (auth + rate limiting)
```typescript
// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Rate limiting basique par IP
  const ip = request.ip ?? "anonymous"
  const rateLimit = checkRateLimit(ip)  // Implémenté avec Upstash Redis
  if (!rateLimit.success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
  }

  // Auth check pour les routes IA
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
// Pour déploiement Cloudflare (alternative Vercel)
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const ai = new Ai(env.AI)
    const response = await ai.run("@cf/meta/llama-3.1-8b-instruct", {
      messages: [{ role: "user", content: "Bonjour" }],
      stream: true
    })
    return new Response(response, { headers: { "content-type": "text/event-stream" } })
  }
}
```

## Livrables
- Route IA configurée en Edge Runtime
- Middleware auth + rate limiting
- Configuration maxDuration optimisée
- Benchmark latence Edge vs Node.js

## Format de sortie
Précise : provider de déploiement (Vercel, Cloudflare) · besoin auth · volume de requêtes · régions cibles
