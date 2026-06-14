# Skills — TypeScript AI Development

> Folder attached to `AGENT-DEV-TYPESCRIPT-IA.md`
> Frameworks: OpenJS JSNAD/JSNSD · Vercel Next.js Certification · Anthropic Claude Code · DeepLearning.AI · Meta Front-End · MCP standard

---

## Skill index (9)

| # | Skill | When to use it | Certification |
|---|---|---|---|
| 1 | [`typescript-avance-ia.md`](typescript-avance-ia.md) | Advanced TypeScript for AI (types, Zod, async, branded types) | JSNAD · JSNSD |
| 2 | [`mcp-server-dev.md`](mcp-server-dev.md) | Build a full MCP server (tools + resources + prompts) | Anthropic Claude Code |
| 3 | [`vercel-ai-sdk.md`](vercel-ai-sdk.md) | Vercel AI SDK (streaming, tools, useChat, generateObject) | Vercel Next.js · DeepLearning.AI |
| 4 | [`nextjs-ia.md`](nextjs-ia.md) | Next.js + AI (App Router, Server Actions, RSC) | Vercel Next.js |
| 5 | [`chat-ui-streaming.md`](chat-ui-streaming.md) | Chat UI & streaming responses (SSE, suspense) | DeepLearning.AI JS/TS |
| 6 | [`integration-apis-llm-ts.md`](integration-apis-llm-ts.md) | LLM API integration in TypeScript (Anthropic SDK TS, retry, types) | Anthropic · DeepLearning.AI |
| 7 | [`tool-use-frontend.md`](tool-use-frontend.md) | Tool Use & function calling on the front end (UI confirmations) | Anthropic Claude Code |
| 8 | [`react-patterns-ia.md`](react-patterns-ia.md) | React AI patterns (state, optimistic UI, streaming, hooks) | Meta Front-End |
| 9 | [`edge-functions-ia.md`](edge-functions-ia.md) | Edge Functions & AI middleware (Vercel, Cloudflare Workers) | Vercel Next.js |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... CODE AN AI APP FROM SCRATCH?
    → typescript-avance-ia.md (strict typing, Zod)
    → nextjs-ia.md (App Router + Server Actions)
    → vercel-ai-sdk.md (modern LLM integration)

  ... BUILD A CHAT?
    → chat-ui-streaming.md (SSE + suspense)
    → vercel-ai-sdk.md (useChat hook)
    → tool-use-frontend.md (if the AI calls tools)

  ... CREATE AN MCP SERVER?
    → mcp-server-dev.md (tools + resources + stdio/SSE transport)

  ... INTEGRATE THE ANTHROPIC SDK TS API?
    → integration-apis-llm-ts.md (SDK + retry + streaming + tools)

  ... OPTIMIZE FRONT-END PERFORMANCE?
    → react-patterns-ia.md (optimistic UI, suspense, streaming)
    → edge-functions-ia.md (low latency, AI middleware)
```

---

## Boundaries with other agents

| Adjacent topic | Relevant agent | Boundary |
|---|---|---|
| Python AI backend, agents, RAG, fine-tuning | `AGENT-DEV-PYTHON-IA.md` | DEV-TS = frontend / Node.js; DEV-PYTHON = Python backend |
| Overall AI architecture (RAG, multi-agent) | `AGENT-AI-ARCHITECT.md` | DEV-TS implements; AI-ARCHITECT designs |
| Deployment and MLOps | `AGENT-MLOPS-ENGINEER.md` | DEV-TS develops; MLOPS deploys |
| Edge / serverless infrastructure | `AGENT-DEVOPS-CLOUD.md` | DEV-TS codes the app; DEVOPS configures the platform |
| Application Tech Lead vision | `AGENT-TECH-LEAD.md` | DEV-TS codes; TECH-LEAD steers (review, architecture, mentoring) |

---

## Frameworks and standards used

- **TypeScript**: https://www.typescriptlang.org/docs/
- **Next.js (App Router)**: https://nextjs.org/docs
- **Vercel AI SDK**: https://sdk.vercel.ai/docs
- **Anthropic SDK TypeScript**: https://github.com/anthropics/anthropic-sdk-typescript
- **MCP (Model Context Protocol)**: https://modelcontextprotocol.io/
- **Zod**: https://zod.dev/
- **React 19**: https://react.dev/
- **Edge runtimes**: Vercel Edge / Cloudflare Workers
```
