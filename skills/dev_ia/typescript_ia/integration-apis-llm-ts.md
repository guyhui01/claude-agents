# Skill — Intégration APIs LLM en TypeScript
> Certifications : Anthropic Claude Code · DeepLearning.AI JS/TS

## Objectif
Intégrer les APIs LLM en TypeScript avec gestion robuste des erreurs et optimisation des coûts.

## Anthropic SDK TypeScript
```typescript
import Anthropic from "@anthropic-ai/sdk"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Appel basique
const message = await client.messages.create({
  model: "claude-opus-4-5",
  max_tokens: 1024,
  system: "Tu es un expert PO Agile.",
  messages: [{ role: "user", content: userInput }]
})
const text = message.content[0].type === "text" ? message.content[0].text : ""

// Streaming
const stream = await client.messages.stream({
  model: "claude-opus-4-5",
  max_tokens: 2048,
  messages: [{ role: "user", content: prompt }]
})
for await (const chunk of stream) {
  if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
    process.stdout.write(chunk.delta.text)
  }
}
```

## Prompt Caching (économies jusqu'à 90%)
```typescript
const message = await client.messages.create({
  model: "claude-opus-4-5",
  max_tokens: 1024,
  system: [{ type: "text", text: longSystemPrompt,
    cache_control: { type: "ephemeral" }  // Cache ce bloc
  }],
  messages: [{ role: "user", content: userQuery }]
})
// Les appels suivants avec le même system prompt utilisent le cache
```

## Retry logic TypeScript
```typescript
async function callWithRetry<T>(fn: () => Promise<T>, maxAttempts = 3): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (error instanceof Anthropic.RateLimitError && attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000))
        continue
      }
      throw error
    }
  }
  throw new Error("Max attempts reached")
}
```

## Variables d'environnement (Next.js)
```typescript
// .env.local
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...

// Validation au démarrage
if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY manquante")
```

## Livrables
- Client LLM typé avec retry et gestion d'erreurs
- Prompt Caching configuré
- Variables d'environnement documentées et validées
- Estimation des coûts

## Format de sortie
Précise : provider(s) · besoin de caching · streaming requis · volume de requêtes estimé
