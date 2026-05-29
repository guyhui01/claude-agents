# Skill — Orchestration via MCP et Protocole A2A
> Certifications : Anthropic Claude Code in Action (2026), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)
> Référentiel : **Model Context Protocol** (Anthropic 2024) — modelcontextprotocol.io · SDK @modelcontextprotocol/sdk@latest

## Objectif
Implémenter techniquement l'orchestration d'agents via le Model Context Protocol (MCP) et le protocole Agent-to-Agent (A2A) — connexion des serveurs MCP, routage inter-agents, exposition des tools et gestion des sessions.

> ⚠️ **Pédagogique vs Production** : ce skill présente des **patterns de référence avec stubs explicites** à compléter selon le cas d'usage. Les fonctions `genererUserStories()`, `prioriserBacklog()` etc. sont des points d'extension à implémenter — soit via appel Anthropic SDK, soit via logique métier propre. Production réelle : voir `skills/orchestrateur_workflow/claude-api-integration.md` pour intégration Anthropic SDK fonctionnelle complète.

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

> ℹ️ **Substitution d'env vars** : Claude Desktop **n'effectue pas de substitution shell** `${VAR}` dans le JSON. Deux solutions :
> 1. **Hardcoder la valeur dans le JSON** (config locale uniquement, jamais committée)
> 2. **Lire la variable côté serveur MCP** via `process.env.ANTHROPIC_API_KEY` dans le code Node — méthode recommandée pour CI/CD.

```json
{
  "mcpServers": {
    "orchestrateur": {
      "command": "node",
      "args": ["./mcp-servers/orchestrateur/index.js"],
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

// Exécution des tools — POINTS D'EXTENSION à implémenter
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "rediger_user_stories") {
    // ⚠️ STUB à implémenter — exemple d'implémentation possible ci-dessous
    const result = await genererUserStories(args.contexte_metier, args.nombre_us);
    return { content: [{ type: "text", text: result }] };
  }

  if (name === "prioriser_backlog") {
    // ⚠️ STUB à implémenter
    const result = await prioriserBacklog(args.backlog, args.methode);
    return { content: [{ type: "text", text: result }] };
  }

  throw new Error(`Tool inconnu : ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);

// ─────────────────────────────────────────────────────────────
// IMPLÉMENTATION RÉFÉRENCE des stubs (via Anthropic SDK)
// ─────────────────────────────────────────────────────────────
import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic(); // lit ANTHROPIC_API_KEY depuis process.env

async function genererUserStories(contexte_metier: string, nombre_us: number = 8): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system: `Tu es un Product Owner Scrum expert. Tu rédiges des User Stories au format INVEST avec critères Gherkin (Given/When/Then). Format : "En tant que [rôle], je veux [action] afin de [bénéfice]".`,
    messages: [{
      role: "user",
      content: `Contexte métier : ${contexte_metier}\n\nProduis ${nombre_us} User Stories prêtes pour un sprint, avec critères d'acceptation Gherkin.`,
    }],
  });
  return response.content.map((b) => (b.type === "text" ? b.text : "")).join("\n");
}

async function prioriserBacklog(backlog: string[], methode: "wsjf" | "moscow" = "wsjf"): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system: methode === "wsjf"
      ? `Tu pries selon WSJF SAFe POPM 6 (cotation relative par colonne, plus petit = 1, colonnes indépendantes : Business Value, Time Criticality, Risk Reduction, Job Size).`
      : `Tu pries selon MoSCoW (Must / Should / Could / Won't) pour les User Stories uniquement.`,
    messages: [{
      role: "user",
      content: `Backlog à prioriser (${methode.toUpperCase()}) :\n${backlog.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nProduis le backlog priorisé avec justifications par item.`,
    }],
  });
  return response.content.map((b) => (b.type === "text" ? b.text : "")).join("\n");
}
```

## Protocole A2A — Appel inter-agents

> ℹ️ **Architecture A2A via MCP** : il n'existe pas (encore) de protocole standardisé "Agent-to-Agent" direct dans MCP. Deux patterns possibles :
> 1. **MCP client comme proxy** — l'orchestrateur instancie un MCP client qui se connecte au MCP server de l'agent cible, et invoque le tool via `client.callTool()`. Recommandé pour communication multi-process réelle.
> 2. **Tool use direct sur LLM** — l'orchestrateur passe les tools de l'agent à Claude comme tools natifs, et Claude décide quand les invoquer. Pattern plus simple si tous les agents tournent dans le même processus.

```typescript
// Pattern 1 : MCP client → MCP server (vrai inter-process A2A)
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function callAgentViaMCP(
  agentCommand: string,
  agentArgs: string[],
  toolName: string,
  toolArgs: Record<string, unknown>
): Promise<string> {
  // Lance le MCP server de l'agent et s'y connecte
  const transport = new StdioClientTransport({
    command: agentCommand,
    args: agentArgs,
  });
  const client = new Client(
    { name: "orchestrateur-client", version: "1.0.0" },
    { capabilities: {} }
  );
  await client.connect(transport);

  // Invoque le tool sur le MCP server
  const result = await client.callTool({
    name: toolName,
    arguments: toolArgs,
  });

  await client.close();
  return result.content.map((c: any) => (c.type === "text" ? c.text : "")).join("\n");
}

// Exemple d'appel A2A inter-process
const userStories = await callAgentViaMCP(
  "node",
  ["./mcp-servers/po-scrum/index.js"],
  "rediger_user_stories",
  { contexte_metier: brief, nombre_us: 8, methodologie: "scrum" }
);

// Pattern 2 : Tool use direct sur Claude (intra-process plus simple)
// Voir skills/orchestrateur_workflow/claude-api-integration.md section "Tool Use"
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
