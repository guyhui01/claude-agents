# Skill — TypeScript Avancé pour l'IA
> Certifications : JSNAD · JSNSD · OpenJS Foundation

## Objectif
Écrire du TypeScript strict, typé et performant pour les applications IA.

## Types avancés pour l'IA
```typescript
// Types pour les messages LLM
type Role = "user" | "assistant" | "system"
interface Message { role: Role; content: string }

// Generic pour les réponses typées
type LLMResponse<T> = { data: T; usage: { inputTokens: number; outputTokens: number } }

// Discriminated union pour les tool results
type ToolResult =
  | { type: "success"; content: string }
  | { type: "error"; error: string; code: number }
```

## Zod — Validation des outputs LLM
```typescript
import { z } from "zod"
import { generateObject } from "ai"

const UserStorySchema = z.object({
  title: z.string().min(5),
  asA: z.string(),
  iWant: z.string(),
  soThat: z.string(),
  acceptanceCriteria: z.array(z.string()).min(1).max(10)
})

const { object } = await generateObject({
  model: anthropic("claude-opus-4-8"),
  schema: UserStorySchema,
  prompt: "Génère une User Story pour..."
})
// object est typé UserStory automatiquement
```

## Async patterns pour les LLM
```typescript
// Streaming avec gestion d'erreurs
async function* streamLLM(prompt: string): AsyncGenerator<string> {
  try {
    const stream = await client.messages.stream({ ... })
    for await (const chunk of stream) {
      if (chunk.type === "content_block_delta") yield chunk.delta.text
    }
  } catch (error) {
    if (error instanceof RateLimitError) {
      await sleep(60000)
      yield* streamLLM(prompt)  // retry
    }
    throw error
  }
}

// Promise.all pour appels parallèles
const [summary, keywords, sentiment] = await Promise.all([
  summarize(text), extractKeywords(text), analyzeSentiment(text)
])
```

## Error handling typé
```typescript
class LLMError extends Error {
  constructor(public code: "RATE_LIMIT" | "CONTEXT_LENGTH" | "INVALID_API_KEY",
              message: string) { super(message) }
}
```

## Livrables
- Code TypeScript strict (tsconfig: strict: true)
- Types Zod pour tous les schémas LLM
- Gestion d'erreurs typée et retry logic

## Format de sortie
Précise : framework (Next.js, Node.js) · version TypeScript · librairies existantes · cas d'usage

## Anti-patterns
- ❌ **Retry récursif sans borne** (`yield* streamLLM(prompt)`) : risque de récursion infinie → compteur d'essais + plafond
- ❌ **Imports implicites** (`RateLimitError`, `sleep`, `client`) : code non autonome → imports explicites
- ❌ **`any` au lieu de discriminated unions** : perte des garanties de typage → unions discriminées (`ToolResult`)
- ❌ **`generateObject` sans contraintes Zod** (`.min`, `.max`, `.enum`) : sorties non fiables → schéma strict
- ❌ **`usage` (tokens) non typé/non suivi** : pas de maîtrise des coûts → typer `LLMResponse<T>` avec `usage`
- ❌ **`strict: false`** dans tsconfig : bugs silencieux → `strict: true` (déjà recommandé ✓)

## Sources
- **TypeScript Handbook** — typescriptlang.org/docs (Microsoft ; strict mode, discriminated unions, generics)
- **Zod** — zod.dev (validation runtime + inférence de types) · **Vercel AI SDK** `generateObject` — ai-sdk.dev
- **Anthropic SDK** `@anthropic-ai/sdk` (streaming, `RateLimitError`) — modèle courant **`claude-opus-4-8`**

## Voir aussi
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — retry/backoff et gestion d'erreurs LLM
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — structured outputs typés (Zod)
- [`tool-use-frontend.md`](tool-use-frontend.md) — typage des tools et résultats
