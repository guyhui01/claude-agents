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
  model: anthropic("claude-opus-4-5"),
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
