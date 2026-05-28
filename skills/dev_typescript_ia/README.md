# Skills — Développement TypeScript IA

> Dossier rattaché à `AGENT-DEV-TYPESCRIPT-IA.md`
> Référentiels : OpenJS JSNAD/JSNSD · Vercel Next.js Certification · Anthropic Claude Code · DeepLearning.AI · Meta Front-End · MCP standard

---

## Index des skills (9)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`typescript-avance-ia.md`](typescript-avance-ia.md) | TypeScript avancé pour l'IA (types, Zod, async, branded types) | JSNAD · JSNSD |
| 2 | [`mcp-server-dev.md`](mcp-server-dev.md) | Créer un MCP Server complet (tools + resources + prompts) | Anthropic Claude Code |
| 3 | [`vercel-ai-sdk.md`](vercel-ai-sdk.md) | Vercel AI SDK (streaming, tools, useChat, generateObject) | Vercel Next.js · DeepLearning.AI |
| 4 | [`nextjs-ia.md`](nextjs-ia.md) | Next.js + IA (App Router, Server Actions, RSC) | Vercel Next.js |
| 5 | [`chat-ui-streaming.md`](chat-ui-streaming.md) | Chat UI & Streaming responses (SSE, suspense) | DeepLearning.AI JS/TS |
| 6 | [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) | Intégration APIs LLM en TypeScript (Anthropic SDK TS, retry, types) | Anthropic · DeepLearning.AI |
| 7 | [`tool-use-frontend.md`](tool-use-frontend.md) | Tool Use & Function Calling côté frontend (UI confirmations) | Anthropic Claude Code |
| 8 | [`react-patterns-ia.md`](react-patterns-ia.md) | React patterns IA (state, optimistic UI, streaming, hooks) | Meta Front-End |
| 9 | [`edge-functions-ia.md`](edge-functions-ia.md) | Edge Functions & AI middleware (Vercel, Cloudflare Workers) | Vercel Next.js |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CODER UNE APP IA DEPUIS ZÉRO ?
    → typescript-avance-ia.md (typing strict, Zod)
    → nextjs-ia.md (App Router + Server Actions)
    → vercel-ai-sdk.md (intégration LLM moderne)

  ... CONSTRUIRE UN CHAT ?
    → chat-ui-streaming.md (SSE + suspense)
    → vercel-ai-sdk.md (useChat hook)
    → tool-use-frontend.md (si l'IA appelle des tools)

  ... CRÉER UN MCP SERVER ?
    → mcp-server-dev.md (tools + resources + transport stdio/SSE)

  ... INTÉGRER L'API ANTHROPIC SDK TS ?
    → integration-apis-llm-ts.md (SDK + retry + streaming + tools)

  ... OPTIMISER LA PERFORMANCE FRONT ?
    → react-patterns-ia.md (optimistic UI, suspense, streaming)
    → edge-functions-ia.md (latence faible, middleware IA)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Backend Python IA, agents, RAG, fine-tuning | `AGENT-DEV-PYTHON-IA.md` | DEV-TS = frontend / Node.js ; DEV-PYTHON = backend Python |
| Architecture IA globale (RAG, multi-agents) | `AGENT-AI-ARCHITECT.md` | DEV-TS implémente ; AI-ARCHITECT conçoit |
| Déploiement et MLOps | `AGENT-MLOPS-ENGINEER.md` | DEV-TS développe ; MLOPS déploie |
| Infrastructure Edge / serverless | `AGENT-DEVOPS-CLOUD.md` | DEV-TS code l'app ; DEVOPS configure la plateforme |
| Vision Tech Lead applicative | `AGENT-TECH-LEAD.md` | DEV-TS code ; TECH-LEAD pilote (review, architecture, mentoring) |

---

## Référentiels et standards utilisés

- **TypeScript** : https://www.typescriptlang.org/docs/
- **Next.js (App Router)** : https://nextjs.org/docs
- **Vercel AI SDK** : https://sdk.vercel.ai/docs
- **Anthropic SDK TypeScript** : https://github.com/anthropics/anthropic-sdk-typescript
- **MCP (Model Context Protocol)** : https://modelcontextprotocol.io/
- **Zod** : https://zod.dev/
- **React 19** : https://react.dev/
- **Edge runtimes** : Vercel Edge / Cloudflare Workers
