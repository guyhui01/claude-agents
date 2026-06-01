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
    model: anthropic("claude-opus-4-8"),
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

## Anti-patterns
- ❌ **Dépendance Node (fs, modules natifs) en Edge Runtime** : erreur de build → vérifier la compat edge ou basculer en Node runtime
- ❌ **Rate limiting en mémoire locale** : inefficace en edge multi-région → store distribué (Upstash Redis)
- ❌ **`maxDuration` trop court** pour de longues générations : timeout en plein stream → calibrer
- ❌ **Auth uniquement en middleware** sans contrôle côté route : bypass possible → défense en profondeur
- ❌ **Modèle codé en dur** : centraliser l'ID (`claude-opus-4-8`)

## Sources
- **Vercel Edge Functions / Edge Runtime** — vercel.com/docs/functions · **Vercel AI SDK** — ai-sdk.dev
- **Cloudflare Workers AI** — developers.cloudflare.com/workers-ai (ex. `@cf/meta/llama-3.1-8b-instruct`)
- **Upstash Redis** (rate limiting serverless) — upstash.com · modèle courant **`claude-opus-4-8`**

## Voir aussi
- [`nextjs-ia.md`](nextjs-ia.md) — routes et runtime Next.js
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — streaming via le SDK
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — rate limiting et retry côté API
