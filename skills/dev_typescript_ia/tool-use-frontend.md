# Skill — Tool Use & Function Calling Frontend
> Certifications: Anthropic Claude Code in Action

## Objective
Implement tool use on the front end so the agent can perform real actions.

## Tool Use with the Vercel AI SDK (recommended)
```typescript
import { tool } from "ai"
import { z } from "zod"

// Tool definitions
const tools = {
  createJiraTicket: tool({
    description: "Create a Jira ticket",
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
    description: "Search Confluence",
    parameters: z.object({ query: z.string(), spaceKey: z.string().optional() }),
    execute: async ({ query, spaceKey }) => {
      const results = await confluenceClient.search(query, spaceKey)
      return results.slice(0, 5).map(r => ({ title: r.title, url: r.url, excerpt: r.excerpt }))
    }
  })
}

// Usage in streamText
const result = streamText({
  model: anthropic("claude-opus-4-8"),
  tools,
  maxSteps: 10,
  messages
})
```

## Displaying tool calls in the UI
```typescript
// Show what the agent is doing in real time
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

## Human-in-the-loop (confirmation before action)
```typescript
const tools = {
  deleteRecord: tool({
    description: "Delete a record",
    parameters: z.object({ id: z.string() }),
    // No execute = requires manual confirmation
  })
}

// In the useChat hook, intercept the unexecuted tool calls
onToolCall: async ({ toolCall }) => {
  if (toolCall.toolName === "deleteRecord") {
    const confirmed = await showConfirmDialog(`Delete record ${toolCall.args.id}?`)
    if (confirmed) return await deleteRecord(toolCall.args.id)
    return { status: "cancelled" }
  }
}
```

## Deliverables
- Tools defined with Zod schemas
- Real-time display of tool calls
- Human-in-the-loop for destructive actions
- Per-tool error handling

## Output format
Specify: tools to implement · available backend APIs · actions requiring confirmation · UI framework

## Anti-patterns
- ❌ **Destructive tools without human-in-the-loop**: the agent deletes/modifies without validation → mandatory confirmation (tool without `execute`)
- ❌ **Running sensitive tools on the client** without server-side control (auth/ACL): privilege escalation → systematic backend verification
- ❌ **No display of tool calls**: opacity, the user can't see what the agent does → real-time UI
- ❌ **No per-tool error handling**: a failing tool breaks the loop → try/catch + structured return
- ❌ **AI SDK v4 syntax** (`parameters`, `maxSteps`, `toolInvocations`) on AI SDK 5 (`inputSchema`, `stopWhen`, `parts`) → check the version
- ❌ **Unbounded agent loop**: costs/incidents → limit the number of steps (`stopWhen`/`maxSteps`)

## Sources
- **Vercel AI SDK** — ai-sdk.dev (tool calling; AI SDK 5: `inputSchema`/`outputSchema`, `stopWhen`, Agent class)
- **Anthropic Tool Use** — docs.anthropic.com/tool-use · current model **`claude-opus-4-8`**
- **Zod** — zod.dev (tool parameter schemas)

## See also
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — tool calling foundation
- [`mcp-server-dev.md`](mcp-server-dev.md) — expose tools via MCP (server)
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — tool use via the native Anthropic SDK
- [`react-patterns-ia.md`](react-patterns-ia.md) — real-time display of tool calls
