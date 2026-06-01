# Skill — Tool Use & Function Calling Frontend
> Certifications : Anthropic Claude Code in Action

## Objectif
Implémenter le tool use côté frontend pour permettre à l'agent d'exécuter des actions réelles.

## Tool Use avec Vercel AI SDK (recommandé)
```typescript
import { tool } from "ai"
import { z } from "zod"

// Définition des tools
const tools = {
  createJiraTicket: tool({
    description: "Crée un ticket Jira",
    parameters: z.object({
      title: z.string(),
      description: z.string(),
      priority: z.enum(["Low", "Medium", "High", "Critical"]),
      labels: z.array(z.string()).optional()
    }),
    execute: async ({ title, description, priority, labels }) => {
      const response = await fetch("/api/jira/create", {
        method: "POST",
        body: JSON.stringify({ title, description, priority, labels })
      })
      const ticket = await response.json()
      return { ticketId: ticket.id, url: ticket.url, status: "created" }
    }
  }),
  searchConfluence: tool({
    description: "Recherche dans Confluence",
    parameters: z.object({ query: z.string(), spaceKey: z.string().optional() }),
    execute: async ({ query, spaceKey }) => {
      const results = await confluenceClient.search(query, spaceKey)
      return results.slice(0, 5).map(r => ({ title: r.title, url: r.url, excerpt: r.excerpt }))
    }
  })
}

// Utilisation dans streamText
const result = streamText({
  model: anthropic("claude-opus-4-8"),
  tools,
  maxSteps: 10,
  messages
})
```

## Affichage des tool calls en UI
```typescript
// Afficher ce que l'agent fait en temps réel
{messages.map((m) => (
  <div key={m.id}>
    {m.role === "assistant" && m.toolInvocations?.map((tool) => (
      <ToolCallDisplay key={tool.toolCallId} tool={tool} />
    ))}
    {m.content && <MessageBubble content={m.content} />}
  </div>
))}

function ToolCallDisplay({ tool }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-sm">
      <span className="font-mono">🔧 {tool.toolName}</span>
      {tool.state === "result" && <span className="text-green-600"> ✓</span>}
      {tool.state === "call" && <span className="animate-spin">⏳</span>}
    </div>
  )
}
```

## Human-in-the-loop (confirmation avant action)
```typescript
const tools = {
  deleteRecord: tool({
    description: "Supprime un enregistrement",
    parameters: z.object({ id: z.string() }),
    // Pas de execute = nécessite confirmation manuelle
  })
}

// Dans le hook useChat, intercepter les tool calls non exécutés
onToolCall: async ({ toolCall }) => {
  if (toolCall.toolName === "deleteRecord") {
    const confirmed = await showConfirmDialog(`Supprimer l'enregistrement ${toolCall.args.id} ?`)
    if (confirmed) return await deleteRecord(toolCall.args.id)
    return { status: "cancelled" }
  }
}
```

## Livrables
- Tools définis avec schémas Zod
- Affichage des tool calls en temps réel
- Human-in-the-loop pour les actions destructives
- Gestion des erreurs par tool

## Format de sortie
Précise : tools à implémenter · APIs backend disponibles · actions nécessitant confirmation · framework UI

## Anti-patterns
- ❌ **Tools destructifs sans human-in-the-loop** : l'agent supprime/modifie sans validation → confirmation obligatoire (tool sans `execute`)
- ❌ **Exécuter des tools sensibles côté client** sans contrôle serveur (auth/ACL) : élévation de privilège → vérification backend systématique
- ❌ **Pas d'affichage des tool calls** : opacité, l'utilisateur ne voit pas ce que fait l'agent → UI temps réel
- ❌ **Pas de gestion d'erreur par tool** : un tool qui échoue casse la boucle → try/catch + retour structuré
- ❌ **Syntaxe AI SDK v4** (`parameters`, `maxSteps`, `toolInvocations`) sur AI SDK 5 (`inputSchema`, `stopWhen`, `parts`) → vérifier la version
- ❌ **Boucle d'agent sans borne** : coûts/incidents → limiter le nombre d'étapes (`stopWhen`/`maxSteps`)

## Sources
- **Vercel AI SDK** — ai-sdk.dev (tool calling ; AI SDK 5 : `inputSchema`/`outputSchema`, `stopWhen`, classe Agent)
- **Anthropic Tool Use** — docs.anthropic.com/tool-use · modèle courant **`claude-opus-4-8`**
- **Zod** — zod.dev (schémas de paramètres des tools)

## Voir aussi
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — base du tool calling
- [`mcp-server-dev.md`](mcp-server-dev.md) — exposer des tools via MCP (serveur)
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — tool use via le SDK Anthropic natif
- [`react-patterns-ia.md`](react-patterns-ia.md) — affichage temps réel des tool calls
