# Skill — Développement MCP Server
> Certifications : Anthropic Claude Code in Action

## Objectif
Créer un MCP Server pour connecter Claude à des outils, APIs ou sources de données custom.

## Structure d'un MCP Server TypeScript
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js"

const server = new Server(
  { name: "mon-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
)

// Déclarer les tools disponibles
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "search_jira",
    description: "Recherche des tickets Jira par critères",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Texte de recherche" },
        project: { type: "string", description: "Clé du projet Jira" },
        maxResults: { type: "number", default: 10 }
      },
      required: ["query"]
    }
  }]
}))

// Implémenter les tools
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "search_jira") {
    const { query, project, maxResults } = request.params.arguments as SearchArgs
    const results = await jiraClient.search(query, project, maxResults)
    return { content: [{ type: "text", text: JSON.stringify(results, null, 2) }] }
  }
  throw new Error(`Tool inconnu : ${request.params.name}`)
})

// Démarrer le serveur
const transport = new StdioServerTransport()
await server.connect(transport)
```

## Types de primitives MCP

### Tools (actions)
- Fonctions appelées par le LLM pour agir
- Exemples : create_ticket, send_email, query_db, search_web

### Resources (données read-only)
```typescript
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{ uri: "jira://projects", name: "Liste des projets Jira", mimeType: "application/json" }]
}))
```

### Prompts (templates réutilisables)
```typescript
server.setRequestHandler(ListPromptsRequestSchema, async () => ({
  prompts: [{ name: "create_user_story", description: "Génère une User Story complète" }]
}))
```

## Configuration dans Claude Code (.claude/settings.json)
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

## Livrables
- MCP Server fonctionnel (build + test)
- Documentation des tools (nom, description, schéma)
- Configuration Claude Code
- Tests d'intégration des tools

## Format de sortie
Précise : outil/API à connecter · primitives nécessaires (tools/resources/prompts) · authentification requise

## Anti-patterns
- ❌ **`inputSchema` trop permissif** (pas de `required`, types vagues) : erreurs runtime → schéma strict + validation
- ❌ **Secrets en clair dans `settings.json`** : fuite de tokens → variables d'environnement / secret manager
- ❌ **Handlers sans gestion d'erreur** : une exception fait tomber le serveur → try/catch + retour d'erreur structuré
- ❌ **Tools mal décrits** : le LLM choisit mal l'outil → `description` claire et orientée intention
- ❌ **SDK non versionné** : `@modelcontextprotocol/sdk` v1.x recommandé en prod (v2 attendu Q1 2026) → épingler
- ❌ **Exposer des opérations destructives** sans garde-fou : action irréversible déclenchée par le LLM → confirmation/scoping

## Sources
- **Model Context Protocol** — modelcontextprotocol.io (spec **2025-11-25**, transports stdio / Streamable HTTP)
- **MCP TypeScript SDK** `@modelcontextprotocol/sdk` (v1.x ; classes `Server` bas niveau et `McpServer` haut niveau) — github.com/modelcontextprotocol/typescript-sdk
- **Claude Code MCP** — docs.anthropic.com/claude-code (configuration `.claude/settings.json`)

## Voir aussi
- [`tool-use-frontend.md`](tool-use-frontend.md) — consommer des tools côté agent/frontend
- [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) — intégration LLM appelant le serveur MCP
- [`../../mcp-servers/`](../../mcp-servers/) — serveurs MCP du dépôt (Jira/Confluence/journal)
