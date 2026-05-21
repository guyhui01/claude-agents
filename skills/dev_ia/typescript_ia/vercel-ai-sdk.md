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
  model: anthropic("claude-opus-4-5"),
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
    model: anthropic("claude-opus-4-5"),
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
  model: anthropic("claude-opus-4-5"),
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
  model: anthropic("claude-opus-4-5"),
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
