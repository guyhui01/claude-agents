# Skill — Training on Claude Code and Professional LLM Tools

> Certifications: Anthropic Claude Code in Action (2026), Anthropic Claude Code 101 (2026), Anthropic Claude 101 (2026), Google AI Essentials Certificate

## Objective

Design and deliver training on Claude Code and professional LLM tools (Anthropic API, Claude.ai Teams, IDE integrations) — for dev, PO, AI project manager, and consultant profiles who want to master the Anthropic ecosystem in a professional context.

## Program

### Module A — Claude Code Fundamentals (half-day — all tech levels)

```
SEQUENCE                                      TIME     FORMAT
──────────────────────────────────────────   ──────   ──────────────────
Install and configure Claude Code             20 min   Guided hands-on
CLI interface: essential commands             20 min   Demo + exercise
Working with an existing codebase             30 min   Lab on a real repo
CLAUDE.md: instructions and conventions       20 min   Guided editing
Auto memory: MEMORY.md and persistence        20 min   Explanation + demo
MCP servers: connect your tools (Jira…)       30 min   Guided config
Hooks and advanced automations                20 min   Practical examples
Q&A + resources to keep going                 20 min   Plenary
```

### Module B — Anthropic API and Anthropic SDK (half-day — dev profiles)

```
SEQUENCE                                      TIME     FORMAT
──────────────────────────────────────────   ──────   ──────────────────
API architecture: models, messages            20 min   Slides + code
Messages API: roles, content blocks            20 min   Python/TS demo
Prompt caching: savings and strategy           30 min   Concrete case + measurement
Tool use / function calling                    30 min   Lab: agent with tools
Thinking and extended thinking                 20 min   Demonstration
Batch API: bulk processing                     20 min   Example + figures
Streaming: real-time UX                        20 min   Code + demo
Cost evaluation and monitoring                 20 min   Dashboard + calculation
```

### Module C — AI Workflows with Claude (full day — PO/PM/Consultant profiles)

```
SEQUENCE                                      TIME     FORMAT
──────────────────────────────────────────   ──────   ──────────────────
Morning:
  Claude.ai Teams vs API: when to use which?     30 min  Decision comparison
  Claude Projects: organization and context      30 min  Demo + config
  Professional prompting (business system prompts) 60 min  Workshop by role

Afternoon:
  Agentic workflows: orchestrating agents        60 min  WF workshop
  Integrations: Claude + Jira/Confluence/GitHub  45 min  Config + MCP demo
  AI governance: secure enterprise usage         30 min  GDPR + AI Act basics
  Build your prompt library                      45 min  Individual lab
```

## Key teaching content

### Claude.ai vs Anthropic API comparison

```
CRITERION        CLAUDE.AI TEAMS           API ANTHROPIC
──────────────   ───────────────────────   ───────────────────────────────
Target           Business users            Developers, integrators
Access           Web/app interface         Code (Python, TS, curl)
Customization    Projects + instructions   Full system prompts
Cost             Fixed subscription/user   Pay-per-token (variable)
Integrations     MCP (Claude.ai Pro+)      Full SDK + webhooks
Control          Limited (no logic)        Full (complete orchestration)
Data             Managed by Anthropic      Configurable (no-logging opt)
```

### Claude Code quick-start guide (cheat-sheet format)

```
┌─────────────────────────────────────────────────────┐
│  CLAUDE CODE — ESSENTIAL COMMANDS                   │
├─────────────────────────────────────────────────────┤
│  /help           → General help                     │
│  /model          → Switch model                     │
│  /config         → Session configuration            │
│  /clear          → Clear the context                │
│  /memory         → View active memories             │
│  ! <command>     → Run a shell command              │
├─────────────────────────────────────────────────────┤
│  KEY FILES                                          │
│  ~/.claude/CLAUDE.md     → Global instructions      │
│  <project>/CLAUDE.md     → Project instructions     │
│  memory/MEMORY.md        → Memory index             │
├─────────────────────────────────────────────────────┤
│  AVAILABLE MODELS                                   │
│  claude-opus-4-8    → Complex reasoning             │
│  claude-sonnet-5  → Everyday tasks                │
│  claude-haiku-4-5   → Simple scripts                │
└─────────────────────────────────────────────────────┘
```

### Security and enterprise best practices

```
✅ CAN BE SHARED WITH CLAUDE CODE
  → Internal source code (with IT permission)
  → Technical documentation
  → Document templates
  → Anonymized data

⚠ CHECK WITH THE DPO / CISO
  → Named client data
  → HR data
  → Sensitive intellectual property
  → Critical-systems code

❌ DO NOT SHARE
  → Credentials / API keys
  → Passwords
  → Health data
  → Confidential financial information
```

## Training deliverables

- "Claude Code on 1 page" cheat sheet (laminated, A4)
- Anthropic API cheat sheet, Python/TypeScript
- Starter CLAUDE.md template (adaptable per team)
- Annotated hands-on labs: 5 progressive exercises
- "AI Governance — Secure enterprise use of Claude" guide

## Output format

Specify: **profile** (dev / PO / consultant / mixed), **desired module** (A / B / C / custom), **duration** (half-day / full day), **context** (initial training / upskilling / certification), **integrated tools** to demo (Jira, Confluence, GitHub, others).

## Sources
- **Anthropic** — *Claude Code* documentation (CLAUDE.md, MCP, hooks) & *Messages API* — [docs.anthropic.com](https://docs.anthropic.com/)
- **Anthropic** — *Prompt Engineering Guide*
- **Anthropic** — *Model Context Protocol (MCP)* (2024)
- Up-to-date models: **Claude Opus 4.8 / Sonnet 5 / Haiku 4.5** (tier policy)

## Anti-patterns
- Training on the tool with no data-governance and security framing
- Demos on real client data (GDPR) during the session
- Citing outdated model versions
- Labs with no real codebase → non-transferable skill
- Confusing Claude.ai Teams and API/SDK for the need at hand

## See also
- [prompt-engineering-formation.md](prompt-engineering-formation.md) — upstream prompting skill
- [formation-agents-ia.md](formation-agents-ia.md) — move toward agents
- [formation-ia-sensibilisation.md](formation-ia-sensibilisation.md) — non-tech prerequisite
- [`../prompt_engineer/prompt-optimization.md`](../prompt_engineer/prompt-optimization.md) — prompt optimization
