# Skill — MCP & A2A Protocols
> Certifications: Anthropic Claude Code in Action

## Objective
Implement the standard protocols for communication between agents and tools.

## MCP — Model Context Protocol (Anthropic, 2024)
Open standard for connecting LLMs to external tools, data and services.

### MCP architecture
```
Host (Claude / app)  ←→  MCP Client  ←→  MCP Server  ←→  External resource
```

### The 3 MCP primitives
| Primitive | Description | Example |
|---|---|---|
| **Tools** | Functions the LLM can call | search_web(), run_query() |
| **Resources** | Data exposed to the LLM (read-only) | files, DB, APIs |
| **Prompts** | Reusable prompt templates | prompt_analyze_code() |

### Build a complete MCP Server (TypeScript)

```typescript
// server.ts — minimal MCP server with 1 tool and 1 resource
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "jira-mcp", version: "1.0.0" },
  { capabilities: { tools: {}, resources: {} } }
);

// 1. Declare the tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "create_jira_issue",
    description: "Create a Jira issue in the current project",
    inputSchema: {
      type: "object",
      properties: {
        summary: { type: "string" },
        type: { type: "string", enum: ["Story", "Bug", "Task"] },
      },
      required: ["summary", "type"],
    },
  }],
}));

// 2. Execute a tool
server.setRequestHandler(CallToolRequestSchema, async (req) => {
  if (req.params.name === "create_jira_issue") {
    const { summary, type } = req.params.arguments as any;
    const ticket = await jiraApi.createIssue({ summary, type });
    return { content: [{ type: "text", text: `Created: ${ticket.key}` }] };
  }
  throw new Error(`Unknown tool: ${req.params.name}`);
});

// 3. Expose resources (read-only)
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{ uri: "jira://current-sprint", name: "Current sprint", mimeType: "application/json" }],
}));

server.setRequestHandler(ReadResourceRequestSchema, async (req) => {
  if (req.params.uri === "jira://current-sprint") {
    const sprint = await jiraApi.getCurrentSprint();
    return { contents: [{ uri: req.params.uri, mimeType: "application/json", text: JSON.stringify(sprint) }] };
  }
  throw new Error(`Unknown resource: ${req.params.uri}`);
});

// 4. Start over stdio (Claude Desktop / Claude Code mode)
const transport = new StdioServerTransport();
await server.connect(transport);
```

**Quick start**:
```bash
npx @modelcontextprotocol/create-server jira-mcp
cd jira-mcp && npm install && npm run build
# Register in ~/.claude/claude_desktop_config.json:
# { "mcpServers": { "jira": { "command": "node", "args": ["./dist/server.js"] } } }
```

### Reference MCP Servers (2026)
filesystem · git · github · slack · postgres · sqlite · puppeteer · brave-search · memory · fetch · sequential-thinking · time

## A2A — Agent-to-Agent Protocol (Google, 2025)
Standard for communication between heterogeneous agents (multi-vendor).

### Key A2A concepts
- **Agent Card**: the agent's JSON identity card (capabilities, endpoint)
- **Task**: unit of work exchanged between agents
- **Artifact**: result produced by an agent
- **Push / Pull**: asynchronous communication modes

### When to use MCP vs A2A
| Criterion | MCP | A2A |
|---|---|---|
| LLM ↔ tool connection | ✓ | — |
| Agent ↔ agent communication | — | ✓ |
| Standard | Anthropic (dominant) | Google (emerging) |
| Maturity | Production | Beta 2025 |

## Deliverables
- MCP or A2A integration diagram
- MCP Server configured and tested
- Agent Card JSON (if A2A)

## Output format
Specify: target protocol · tool to connect · language (TypeScript/Python) · usage context
