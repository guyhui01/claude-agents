# Skill — Orchestration via MCP et Protocole A2A
> Certifications : Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objectif
Implémenter techniquement l'orchestration d'agents via le Model Context Protocol (MCP) et le protocole Agent-to-Agent (A2A) — connexion des serveurs MCP, routage inter-agents, exposition des tools et gestion des sessions.

## Architecture MCP — Concepts clés

```
ARCHITECTURE MCP
─────────────────────────────────────────────────────────────
  HOST (Claude Code / App)
       │
       │  MCP Protocol (JSON-RPC 2.0)
       ▼
  MCP SERVER ──► Tools exposés (functions appelables)
       │      ──► Resources (fichiers, données)
       │      ──► Prompts (templates)
       │
  TRANSPORT
  ├── stdio       (process local — CLI)
  ├── HTTP/SSE    (serveur distant)
  └── WebSocket   (temps réel)
```

## Configuration MCP multi-agents — claude_desktop_config.json

```json
{
  "mcpServers": {
    "orchestrateur": {
      "command": "node",
      "args": ["./mcp-servers/orchestrateur/index.js"],
      "env": {
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
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

## Implémentation d'un serveur MCP agent — Template TypeScript

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

// Déclaration des tools exposés par l'agent
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "rediger_user_stories",
      description: "Rédige des User Stories au format INVEST avec critères Gherkin",
      inputSchema: {
        type: "object",
        properties: {
          contexte_metier: { type: "string", description: "Brief client ou analyse métier" },
          nombre_us: { type: "number", description: "Nombre de US à produire", default: 8 },
          methodologie: { type: "string", enum: ["scrum", "safe"], default: "scrum" },
        },
        required: ["contexte_metier"],
      },
    },
    {
      name: "prioriser_backlog",
      description: "Priorise un backlog selon le niveau SAFe : WSJF pour Epics et Features, MoSCoW pour User Stories",
      inputSchema: {
        type: "object",
        properties: {
          backlog: { type: "array", items: { type: "string" } },
          methode: { type: "string", enum: ["wsjf", "moscow"], default: "wsjf" },
        },
        required: ["backlog"],
      },
    },
  ],
}));

// Exécution des tools
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "rediger_user_stories") {
    const result = await genererUserStories(args.contexte_metier, args.nombre_us);
    return { content: [{ type: "text", text: result }] };
  }

  if (name === "prioriser_backlog") {
    const result = await prioriserBacklog(args.backlog, args.methode);
    return { content: [{ type: "text", text: result }] };
  }

  throw new Error(`Tool inconnu : ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

## Protocole A2A — Appel inter-agents

```typescript
// L'orchestrateur appelle un agent via MCP tool use
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function callAgent(
  agentName: string,
  toolName: string,
  toolArgs: Record<string, unknown>
): Promise<string> {
  // L'orchestrateur utilise le tool MCP de l'agent cible
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    tools: [
      {
        name: toolName,
        description: `Tool de l'agent ${agentName}`,
        input_schema: { type: "object", properties: {}, required: [] },
      },
    ],
    messages: [
      {
        role: "user",
        content: `Appelle le tool ${toolName} avec ces arguments : ${JSON.stringify(toolArgs)}`,
      },
    ],
  });

  // Extraire le résultat du tool_use
  for (const block of response.content) {
    if (block.type === "tool_use") {
      return JSON.stringify(block.input);
    }
    if (block.type === "text") {
      return block.text;
    }
  }
  return "";
}

// Exemple d'appel A2A dans un workflow
const userStories = await callAgent(
  "agent-po-scrum",
  "rediger_user_stories",
  { contexte_metier: brief, nombre_us: 8, methodologie: "scrum" }
);
```

## Structure de dossier MCP multi-agents

```
claude-agents/
├── mcp-servers/
│   ├── orchestrateur/
│   │   ├── index.ts          # Serveur MCP orchestrateur
│   │   ├── workflow-runner.ts # Exécution des workflows
│   │   └── agent-registry.ts  # Registre des agents disponibles
│   ├── po-scrum/
│   │   └── index.ts
│   ├── business-analyst/
│   │   └── index.ts
│   └── qa-agile/
│       └── index.ts
├── package.json
└── tsconfig.json
```

## Gestion des sessions MCP

```typescript
// Maintenir le contexte de session entre appels
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

## Livrables
- Configuration MCP multi-agents (JSON)
- Serveur MCP agent template (TypeScript)
- Implémentation A2A inter-agents
- Gestion des sessions de workflow

## Format de sortie
Précise : agents à connecter, tools à exposer, transport MCP (stdio / HTTP), langage (TypeScript / Python).
