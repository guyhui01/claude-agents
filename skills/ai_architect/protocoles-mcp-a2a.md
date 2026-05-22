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

### Créer un MCP Server (TypeScript)
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
// Déclarer tools, resources, prompts
// Connecter via stdio ou HTTP/SSE
```

### MCP Servers disponibles (2026)
filesystem · git · github · slack · postgres · puppeteer · brave-search · memory

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
