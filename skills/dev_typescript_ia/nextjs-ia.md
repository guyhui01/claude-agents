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
    model: anthropic("claude-opus-4-8"),
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
    model: anthropic("claude-opus-4-8"),
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

## Anti-patterns
- ❌ **Server Actions pour le streaming** : préférer les Route Handlers (déjà noté) → stream via `app/api/.../route.ts`
- ❌ **Edge Runtime avec dépendances Node** : incompatibilité → choisir le runtime selon les libs
- ❌ **Clé API LLM côté client** : fuite → server-side (route/action)
- ❌ **Pas de cache sur générations répétitives** : coût inutile → `unstable_cache` / revalidation
- ❌ **Version Next.js non épinglée** : ruptures App Router entre majeures → fixer la version (Next.js 15/16)
- ❌ **`maxTokens` (AI SDK v4)** : sur AI SDK 5 c'est `maxOutputTokens` → vérifier la version

## Sources
- **Next.js** — nextjs.org (Vercel) : App Router, Server Actions, Route Handlers (Next.js **15/16**, + React 19)
- **Vercel AI SDK** — ai-sdk.dev (`streamText`, `generateObject`) · **Zod** — zod.dev
- **Anthropic** `@ai-sdk/anthropic` — modèle courant **`claude-opus-4-8`**

## Voir aussi
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — API du SDK utilisées dans les routes
- [`edge-functions-ia.md`](edge-functions-ia.md) — Edge Runtime et middleware
- [`chat-ui-streaming.md`](chat-ui-streaming.md) — UI cliente du chat
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — couche d'intégration LLM
