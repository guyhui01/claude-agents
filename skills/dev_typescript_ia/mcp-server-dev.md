# Skill — MCP Server Development
> Certifications: Anthropic Claude Code in Action

## Objective
Build an MCP server to connect Claude to custom tools, APIs, or data sources.

## Structure of a TypeScript MCP server
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js"

const server = new Server(
  { name: "my-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
)

// Declare the available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "search_jira",
    description: "Search Jira tickets by criteria",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search text" },
        project: { type: "string", description: "Jira project key" },
        maxResults: { type: "number", default: 10 }
      },
      required: ["query"]
    }
  }]
}))

// Implement the tools
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "search_jira") {
    const { query, project, maxResults } = request.params.arguments as SearchArgs
    const results = await jiraClient.search(query, project, maxResults)
    return { content: [{ type: "text", text: JSON.stringify(results, null, 2) }] }
  }
  throw new Error(`Unknown tool: ${request.params.name}`)
})

// Start the server
const transport = new StdioServerTransport()
await server.connect(transport)
```

## MCP primitive types

### Tools (actions)
- Functions called by the LLM to act
- Examples: create_ticket, send_email, query_db, search_web

### Resources (read-only data)
```typescript
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{ uri: "jira://projects", name: "List of Jira projects", mimeType: "application/json" }]
}))
```

### Prompts (reusable templates)
```typescript
server.setRequestHandler(ListPromptsRequestSchema, async () => ({
  prompts: [{ name: "create_user_story", description: "Generate a complete User Story" }]
}))
```

## Configuration in Claude Code (.claude/settings.json)
```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["./mcp-servers/jira/dist/index.js"],
      "env": { "JIRA_URL": "...", "JIRA_TOKEN": "..." }
    }
  }
}
```

## Deliverables
- Working MCP server (build + test)
- Tool documentation (name, description, schema)
- Claude Code configuration
- Integration tests for the tools

## Output format
Specify: tool/API to connect · required primitives (tools/resources/prompts) · authentication needed

## Anti-patterns
- ❌ **Overly permissive `inputSchema`** (no `required`, vague types): runtime errors → strict schema + validation
- ❌ **Plaintext secrets in `settings.json`**: token leak → environment variables / secret manager
- ❌ **Handlers without error handling**: one exception takes the server down → try/catch + structured error return
- ❌ **Poorly described tools**: the LLM picks the wrong tool → clear, intent-oriented `description`
- ❌ **Unpinned SDK**: `@modelcontextprotocol/sdk` v1.x recommended in prod (v2 expected Q1 2026) → pin it
- ❌ **Exposing destructive operations** without a guardrail: irreversible action triggered by the LLM → confirmation/scoping

## Sources
- **Model Context Protocol** — modelcontextprotocol.io (spec **2025-11-25**, stdio / Streamable HTTP transports)
- **MCP TypeScript SDK** `@modelcontextprotocol/sdk` (v1.x; low-level `Server` and high-level `McpServer` classes) — github.com/modelcontextprotocol/typescript-sdk
- **Claude Code MCP** — docs.anthropic.com/claude-code (`.claude/settings.json` configuration)

## See also
- [`tool-use-frontend.md`](tool-use-frontend.md) — consuming tools on the agent/frontend side
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — LLM integration calling the MCP server
- [`../../mcp-servers/`](../../mcp-servers/) — the repo's MCP servers (Jira/Confluence/log)
