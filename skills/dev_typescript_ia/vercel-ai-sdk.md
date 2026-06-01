# Skill — Vercel AI SDK
> Certifications : Vercel Next.js Certification · DeepLearning.AI JS/TS

## Objectif
Construire des applications IA avec le Vercel AI SDK (streaming, tools, structured outputs).

## Installation & providers
```bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai
```

## generateText — Génération simple
```typescript
import { generateText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

const { text } = await generateText({
  model: anthropic("claude-opus-4-8"),
  prompt: "Explique le RAG en 3 phrases",
  system: "Tu es un expert IA. Réponds en français."
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
    system: "Tu es un assistant PO Agile."
  })
  return result.toDataStreamResponse()
}
```

## generateObject — Structured outputs avec Zod
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
  prompt: "Génère une User Story pour la fonctionnalité de recherche"
})
```

## Tools avec AI SDK
```typescript
import { tool } from "ai"

const searchTool = tool({
  description: "Recherche dans la base de connaissances",
  parameters: z.object({ query: z.string(), limit: z.number().optional() }),
  execute: async ({ query, limit = 5 }) => {
    return await vectorDB.search(query, limit)
  }
})

const result = await generateText({
  model: anthropic("claude-opus-4-8"),
  tools: { search: searchTool },
  maxSteps: 5,  // Nombre max d'itérations agent
  prompt: userMessage
})
```

## useChat — Hook React (client)
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

## Livrables
- API route streaming fonctionnelle
- Hook useChat ou useCompletion côté client
- Tools configurés et testés
- Gestion des erreurs et loading states

## Format de sortie
Précise : framework (Next.js App Router ?) · provider LLM · besoin de tools · structured output nécessaire

## Anti-patterns
- ❌ **Syntaxe AI SDK v4 sur AI SDK 5** : v5 (juill. 2025) renomme `parameters`→`inputSchema`, `maxSteps`→`stopWhen`, `ai/react`→`@ai-sdk/react`, et passe au SSE natif (`toUIMessageStreamResponse`). Vérifier la version cible avant de copier.
- ❌ **Clé API LLM côté client** : fuite de secret → appels exclusivement côté serveur (Server Action / route)
- ❌ **Modèle codé en dur** dispersé : maintenance pénible → centraliser l'ID de modèle (config/env)
- ❌ **Pas de `onError` / `stop`** sur `useChat` : UX dégradée → gérer erreurs + interruption
- ❌ **`generateObject` sans schéma strict** : sorties non fiables → Zod avec contraintes (`.min`, `.max`, `.enum`)

## Sources
- **Vercel AI SDK** — ai-sdk.dev (AI SDK **5**, juill. 2025 : typage UIMessage/ModelMessage, SSE natif, classe Agent) · npm `ai`
- **Anthropic SDK / provider** `@ai-sdk/anthropic` — docs.anthropic.com · modèle courant **`claude-opus-4-8`**
- **Zod** — zod.dev (validation des structured outputs)

## Voir aussi
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — SDK Anthropic natif + prompt caching
- [`nextjs-ia.md`](nextjs-ia.md) — intégration Next.js (routes, Server Actions)
- [`chat-ui-streaming.md`](chat-ui-streaming.md) — UI de chat consommant le SDK
- [`tool-use-frontend.md`](tool-use-frontend.md) — tools et human-in-the-loop
