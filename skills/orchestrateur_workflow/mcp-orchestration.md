# Skill — Orchestration via MCP and the A2A Protocol
> Certifications: Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)
> Framework: **Model Context Protocol** (Anthropic 2024) — modelcontextprotocol.io · SDK @modelcontextprotocol/sdk@latest

## Objective
Technically implement agent orchestration via the Model Context Protocol (MCP) and the Agent-to-Agent (A2A) protocol — connecting MCP servers, inter-agent routing, exposing tools, and managing sessions.

> ⚠️ **Educational vs. Production**: this skill presents **reference patterns with explicit stubs** to complete per use case. The `generateUserStories()`, `prioritizeBacklog()`, etc. functions are extension points to implement — either via an Anthropic SDK call or via your own business logic. Real production: see `skills/orchestrateur_workflow/claude-api-integration.md` for a complete, working Anthropic SDK integration.

## MCP architecture — Key concepts

```
MCP ARCHITECTURE
─────────────────────────────────────────────────────────────
  HOST (Claude Code / App)
       │
       │  MCP Protocol (JSON-RPC 2.0)
       ▼
  MCP SERVER ──► Exposed tools (callable functions)
       │      ──► Resources (files, data)
       │      ──► Prompts (templates)
       │
  TRANSPORT
  ├── stdio       (local process — CLI)
  ├── HTTP/SSE    (remote server)
  └── WebSocket   (real time)
```

## Multi-agent MCP configuration — claude_desktop_config.json

> ℹ️ **Env var substitution**: Claude Desktop **does not perform shell substitution** `${VAR}` in the JSON. Two options:
> 1. **Hardcode the value in the JSON** (local config only, never committed)
> 2. **Read the variable on the MCP server side** via `process.env.ANTHROPIC_API_KEY` in the Node code — recommended method for CI/CD.

```json
{
  "mcpServers": {
    "orchestrator": {
      "command": "node",
      "args": ["./mcp-servers/orchestrator/index.js"],
      "env": {
        "LOG_LEVEL": "info"
      }
    },
    "agent-po-scrum": {
      "command": "node",
      "args": ["./mcp-servers/po-scrum/index.js"]
    },
    "agent-business-analyst": {
      "command": "node",
      "args": ["./mcp-servers/business-analyst/index.js"]
    },
    "agent-qa-agile": {
      "command": "node",
      "args": ["./mcp-servers/qa-agile/index.js"]
    }
  }
}
```

## Implementing an agent MCP server — TypeScript template

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "agent-po-scrum", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// Declaration of the tools exposed by the agent
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "write_user_stories",
      description: "Writes User Stories in INVEST format with Gherkin criteria",
      inputSchema: {
        type: "object",
        properties: {
          business_context: { type: "string", description: "Client brief or business analysis" },
          story_count: { type: "number", description: "Number of US to produce", default: 8 },
          methodology: { type: "string", enum: ["scrum", "safe"], default: "scrum" },
        },
        required: ["business_context"],
      },
    },
    {
      name: "prioritize_backlog",
      description: "Prioritizes a backlog by SAFe level: WSJF for Epics and Features, MoSCoW for User Stories",
      inputSchema: {
        type: "object",
        properties: {
          backlog: { type: "array", items: { type: "string" } },
          method: { type: "string", enum: ["wsjf", "moscow"], default: "wsjf" },
        },
        required: ["backlog"],
      },
    },
  ],
}));

// Tool execution — EXTENSION POINTS to implement
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "write_user_stories") {
    // ⚠️ STUB to implement — a possible implementation example is below
    const result = await generateUserStories(args.business_context, args.story_count);
    return { content: [{ type: "text", text: result }] };
  }

  if (name === "prioritize_backlog") {
    // ⚠️ STUB to implement
    const result = await prioritizeBacklog(args.backlog, args.method);
    return { content: [{ type: "text", text: result }] };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);

// ─────────────────────────────────────────────────────────────
// REFERENCE IMPLEMENTATION of the stubs (via the Anthropic SDK)
// ─────────────────────────────────────────────────────────────
import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY from process.env

async function generateUserStories(business_context: string, story_count: number = 8): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 4096,
    system: `You are an expert Product Owner Scrum. You write User Stories in INVEST format with Gherkin criteria (Given/When/Then). Format: "As a [role], I want [action] so that [benefit]".`,
    messages: [{
      role: "user",
      content: `Business context: ${business_context}\n\nProduce ${story_count} sprint-ready User Stories, with Gherkin acceptance criteria.`,
    }],
  });
  return response.content.map((b) => (b.type === "text" ? b.text : "")).join("\n");
}

async function prioritizeBacklog(backlog: string[], method: "wsjf" | "moscow" = "wsjf"): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 4096,
    system: method === "wsjf"
      ? `You prioritize by SAFe POPM 6 WSJF (relative scoring per column, smallest = 1, independent columns: Business Value, Time Criticality, Risk Reduction, Job Size).`
      : `You prioritize by MoSCoW (Must / Should / Could / Won't) for User Stories only.`,
    messages: [{
      role: "user",
      content: `Backlog to prioritize (${method.toUpperCase()}):\n${backlog.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nProduce the prioritized backlog with a justification per item.`,
    }],
  });
  return response.content.map((b) => (b.type === "text" ? b.text : "")).join("\n");
}
```

## A2A protocol — Inter-agent call

> ℹ️ **A2A architecture via MCP**: there is no (yet) standardized direct "Agent-to-Agent" protocol in MCP. Two possible patterns:
> 1. **MCP client as proxy** — the orchestrator instantiates an MCP client that connects to the target agent's MCP server and invokes the tool via `client.callTool()`. Recommended for real multi-process communication.
> 2. **Direct tool use on the LLM** — the orchestrator passes the agent's tools to Claude as native tools, and Claude decides when to invoke them. Simpler pattern if all agents run in the same process.

```typescript
// Pattern 1: MCP client → MCP server (true inter-process A2A)
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function callAgentViaMCP(
  agentCommand: string,
  agentArgs: string[],
  toolName: string,
  toolArgs: Record<string, unknown>
): Promise<string> {
  // Launch the agent's MCP server and connect to it
  const transport = new StdioClientTransport({
    command: agentCommand,
    args: agentArgs,
  });
  const client = new Client(
    { name: "orchestrator-client", version: "1.0.0" },
    { capabilities: {} }
  );
  await client.connect(transport);

  // Invoke the tool on the MCP server
  const result = await client.callTool({
    name: toolName,
    arguments: toolArgs,
  });

  await client.close();
  return result.content.map((c: any) => (c.type === "text" ? c.text : "")).join("\n");
}

// Inter-process A2A call example
const userStories = await callAgentViaMCP(
  "node",
  ["./mcp-servers/po-scrum/index.js"],
  "write_user_stories",
  { business_context: brief, story_count: 8, methodology: "scrum" }
);

// Pattern 2: Direct tool use on Claude (simpler intra-process)
// See skills/orchestrateur_workflow/claude-api-integration.md section "Tool Use"
```

## Multi-agent MCP folder structure

```
claude-agents/
├── mcp-servers/
│   ├── orchestrator/
│   │   ├── index.ts          # Orchestrator MCP server
│   │   ├── workflow-runner.ts # Workflow execution
│   │   └── agent-registry.ts  # Registry of available agents
│   ├── po-scrum/
│   │   └── index.ts
│   ├── business-analyst/
│   │   └── index.ts
│   └── qa-agile/
│       └── index.ts
├── package.json
└── tsconfig.json
```

## MCP session management

```typescript
// Maintain session context between calls
interface WorkflowSession {
  id: string;
  workflowId: string;
  currentStep: number;
  context: Record<string, unknown>;
  outputs: Map<string, string>;
  status: "running" | "paused" | "completed" | "error";
}

const sessions = new Map<string, WorkflowSession>();

function createSession(workflowId: string): WorkflowSession {
  const session: WorkflowSession = {
    id: crypto.randomUUID(),
    workflowId,
    currentStep: 0,
    context: {},
    outputs: new Map(),
    status: "running",
  };
  sessions.set(session.id, session);
  return session;
}
```

## Deliverables
- Multi-agent MCP configuration (JSON)
- Agent MCP server template (TypeScript)
- Inter-agent A2A implementation
- Workflow session management

## Output format
Specify: the agents to connect, the tools to expose, the MCP transport (stdio / HTTP), the language (TypeScript / Python).

## Anti-patterns
- ❌ **Unpinned SDK `@modelcontextprotocol/sdk@latest`**: breakage in prod → pin **v1.x** (v2 expected Q1 2026)
- ❌ **Cleartext secrets** in the MCP config: leak → environment variables / secret manager
- ❌ **Permissive `inputSchema`** (no `required`): runtime errors → strict schema
- ❌ **Handlers with no error handling**: server crash → try/catch + structured return
- ❌ **"Educational" code (stubs) deployed in prod**: flagged in the skill → implement before prod
- ❌ **Destructive operations exposed** with no guardrail: irreversible action triggered by the LLM → confirmation/scoping

## Sources
- **Model Context Protocol** — modelcontextprotocol.io (spec **2025-11-25**, stdio / Streamable HTTP transports)
- **MCP TypeScript SDK** `@modelcontextprotocol/sdk` (v1.x) — github.com/modelcontextprotocol/typescript-sdk · **Anthropic SDK** `@anthropic-ai/sdk`

## See also
- [`claude-api-integration.md`](claude-api-integration.md) — Anthropic SDK integration
- [`workflow-automation.md`](workflow-automation.md) — orchestration in production
- [`langgraph-crewai-patterns.md`](langgraph-crewai-patterns.md) — multi-agent orchestration alternatives
- [`../dev_typescript_ia/mcp-server-dev.md`](../dev_typescript_ia/mcp-server-dev.md) — developing an MCP server
