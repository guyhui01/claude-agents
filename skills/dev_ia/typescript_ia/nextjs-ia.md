# Skill — Next.js + IA (App Router)
> Certifications : Vercel Next.js Certification 2025

## Objectif
Construire des applications IA full-stack avec Next.js 15 App Router.

## Structure de projet recommandée
```
app/
├── api/
│   ├── chat/route.ts          ← API streaming LLM
│   ├── generate/route.ts      ← Génération one-shot
│   └── tools/[name]/route.ts  ← Endpoints tools
├── (chat)/
│   ├── page.tsx               ← Interface chat
│   └── components/
│       ├── chat-messages.tsx
│       ├── chat-input.tsx
│       └── message-bubble.tsx
└── layout.tsx
```

## API Route — Streaming LLM
```typescript
// app/api/chat/route.ts
import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

export const runtime = "edge"  // Edge runtime pour la latence minimale

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: anthropic("claude-opus-4-5"),
    system: "Tu es un assistant PO Agile expert.",
    messages,
    maxTokens: 2048
  })
  return result.toDataStreamResponse({
    headers: { "X-Accel-Buffering": "no" }  // Désactiver le buffering nginx
  })
}
```

## Server Actions avec IA
```typescript
// app/actions.ts
"use server"
import { generateObject } from "ai"
import { z } from "zod"

export async function generateUserStory(feature: string) {
  const { object } = await generateObject({
    model: anthropic("claude-opus-4-5"),
    schema: UserStorySchema,
    prompt: `Génère une User Story pour : ${feature}`
  })
  return object
}
```

## Patterns de performance
- **Suspense + Streaming** : afficher le contenu au fur et à mesure
- **Edge Runtime** : déploiement global, latence minimale pour les API LLM
- **Route Handlers** : préférer aux Server Actions pour les streams
- **Cache** : `unstable_cache` pour les réponses LLM répétitives

## Gestion de l'état côté client
```typescript
"use client"
// Pour les conversations : useChat (Vercel AI SDK)
// Pour les générations ponctuelles : useCompletion
// Pour l'état global : Zustand ou Context
```

## Livrables
- API route streaming fonctionnelle
- Page Next.js avec composants chat
- Server Actions pour les opérations ponctuelles
- Configuration Edge Runtime

## Format de sortie
Précise : Next.js version · provider LLM · fonctionnalités (chat, génération, tools) · déploiement cible (Vercel, autre)
