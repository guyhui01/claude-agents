# Skill — Protocoles MCP & A2A
> Certifications : Anthropic Claude Code in Action

## Objectif
Implémenter les protocoles standards de communication entre agents et outils.

## MCP — Model Context Protocol (Anthropic, 2024)
Standard ouvert pour connecter les LLM aux outils, données et services externes.

### Architecture MCP
```
Host (Claude / app)  ←→  MCP Client  ←→  MCP Server  ←→  Ressource externe
```

### 3 primitives MCP
| Primitive | Description | Exemple |
|---|---|---|
| **Tools** | Fonctions que le LLM peut appeler | search_web(), run_query() |
| **Resources** | Données exposées au LLM (read-only) | fichiers, DB, APIs |
| **Prompts** | Templates de prompts réutilisables | prompt_analyse_code() |

### Créer un MCP Server complet (TypeScript)

```typescript
// server.ts — MCP server minimal avec 1 tool et 1 resource
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

// 1. Déclarer les tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "create_jira_issue",
    description: "Crée un ticket Jira dans le projet courant",
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

// 2. Exécuter un tool
server.setRequestHandler(CallToolRequestSchema, async (req) => {
  if (req.params.name === "create_jira_issue") {
    const { summary, type } = req.params.arguments as any;
    const ticket = await jiraApi.createIssue({ summary, type });
    return { content: [{ type: "text", text: `Créé : ${ticket.key}` }] };
  }
  throw new Error(`Unknown tool: ${req.params.name}`);
});

// 3. Exposer des resources (read-only)
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{ uri: "jira://current-sprint", name: "Sprint en cours", mimeType: "application/json" }],
}));

server.setRequestHandler(ReadResourceRequestSchema, async (req) => {
  if (req.params.uri === "jira://current-sprint") {
    const sprint = await jiraApi.getCurrentSprint();
    return { contents: [{ uri: req.params.uri, mimeType: "application/json", text: JSON.stringify(sprint) }] };
  }
  throw new Error(`Unknown resource: ${req.params.uri}`);
});

// 4. Démarrer via stdio (mode Claude Desktop / Claude Code)
const transport = new StdioServerTransport();
await server.connect(transport);
```

**Démarrage rapide** :
```bash
npx @modelcontextprotocol/create-server jira-mcp
cd jira-mcp && npm install && npm run build
# Enregistrer dans ~/.claude/claude_desktop_config.json :
# { "mcpServers": { "jira": { "command": "node", "args": ["./dist/server.js"] } } }
```

### MCP Servers de référence (2026)
filesystem · git · github · slack · postgres · sqlite · puppeteer · brave-search · memory · fetch · sequential-thinking · time

## A2A — Agent-to-Agent Protocol (Google, 2025)
Standard pour la communication entre agents hétérogènes (multi-éditeurs).

### Concepts clés A2A
- **Agent Card** : carte d'identité JSON de l'agent (capacités, endpoint)
- **Task** : unité de travail échangée entre agents
- **Artifact** : résultat produit par un agent
- **Push / Pull** : modes de communication asynchrone

### Quand utiliser MCP vs A2A
| Critère | MCP | A2A |
|---|---|---|
| Connexion LLM ↔ outil | ✓ | — |
| Communication agent ↔ agent | — | ✓ |
| Standard | Anthropic (dominant) | Google (émergent) |
| Maturité | Production | Beta 2025 |

## Livrables
- Schéma d'intégration MCP ou A2A
- MCP Server configuré et testé
- Agent Card JSON (si A2A)

## Format de sortie
Précise : protocole ciblé · outil à connecter · langage (TypeScript/Python) · contexte d'usage
