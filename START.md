# Quick start — Claude Agents Library

> 38 specialized AI agents · 37 skill folders · 10 workflows · 3 MCP servers
> Author: Guy HUI-BON-HOA · [github.com/guyhui01](https://github.com/guyhui01)
> Agents are **simulated expert personas** — see the persona disclaimer in [README.md](README.md).

---

## 🎯 Choose your entry point

| You want to… | Command |
|---|---|
| **Run a complete workflow** (scoping, delivery, app launch, consulting, market watch) | → Orchestrator + Workflow |
| **Work on a specific task** (user story, wireframe, audit, etc.) | → Single agent |
| **Manually chain several agents** | → Orchestrator only |

---

## 1. Orchestrator + Workflow (recommended)

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on this role.
Then load workflows/WF-001-cadrage-produit-ia.md and start the workflow.
```

### Available workflows

| ID | Workflow | When to use it | Duration |
|---|---|---|---|
| [WF-001](workflows/WF-001-cadrage-produit-ia.md) | AI Product Scoping | Client brief → prioritized backlog | 45-90 min |
| [WF-002](workflows/WF-002-delivery-safe.md) | SAFe Agile Delivery | PI Planning to delivery | 60-120 min |
| [WF-003](workflows/WF-003-lancement-app-ia.md) | AI Application Launch | Design → deployment | 90-180 min |
| [WF-004](workflows/WF-004-mission-conseil-ia.md) | AI Consulting Engagement | Client audit + roadmap | 60-90 min |
| [WF-005](workflows/WF-005-veille-growth.md) | Strategic Watch & Growth | Market intelligence + action plan | 30-60 min |
| [WF-006](workflows/WF-006-avant-vente-proposition-commerciale.md) | Pre-sales / Commercial Proposal | RFP → technical & commercial proposal | 75-120 min |
| [WF-007](workflows/WF-007-onboarding-mission-j1.md) | Mission Onboarding — Day 1 | Onboarding → mission integration kit | 45-75 min |
| [WF-008](workflows/WF-008-audit-conformite-ia-act-rgpd.md) | AI Act / GDPR Compliance Audit | AI system audit + remediation plan | 90-150 min |
| [WF-009](workflows/WF-009-recrutement-it-ia.md) | IT / AI Recruitment | Role brief → profiled shortlist | 60-90 min |
| [WF-010](workflows/WF-010-post-mortem-projet.md) | Project Post-mortem | Closure → lessons-learned report + actions | 45-75 min |

Full index: [workflows/README.md](workflows/README.md)

---

## 2. Single agent

```
Read the file AGENT-<NAME>.md and take on this role.
Confirm you are ready by listing the available skills.
```

### Dev & Technical (16)
- `AGENT-AI-ARCHITECT.md` — AI architecture, RAG, multi-agent, MCP/A2A
- `AGENT-SOLUTIONS-ARCHITECT.md` — Enterprise architecture, TOGAF, IT urbanization, transformation roadmap
- `AGENT-DEV-PYTHON-IA.md` — Python AI, LangChain, RAG, agents
- `AGENT-DEV-TYPESCRIPT-IA.md` — TS AI, Next.js, Vercel AI SDK, MCP
- `AGENT-DEV-DRUPAL-PHP.md` — Drupal 10, Commerce 2.x, custom modules
- `AGENT-CMS-DIGITAL.md` — AEM, Drupal 10, headless CMS, migration, PIM/DAM, WCAG/SEO
- `AGENT-TECH-LEAD.md` — Code review, application architecture, API design, CI/CD, mentoring
- `AGENT-BI-ANALYST.md` — Power BI/Fabric, Tableau, Looker, KPIs, self-service BI
- `AGENT-PIM-EXPERT.md` — Catalog modeling, enrichment, syndication, AI-powered PIM
- `AGENT-DAM-EXPERT.md` — Taxonomy, rights, omnichannel distribution, brand portal, AI-powered DAM
- `AGENT-MLOPS-ENGINEER.md` — Docker, K8s, MLflow, model serving
- `AGENT-DATA-ENGINEER.md` — ETL pipelines, Spark, dbt, Airflow
- `AGENT-DATA-SCIENTIST.md` — ML, statistics, modeling, Python/SQL
- `AGENT-DEVOPS-CLOUD.md` — CI/CD, Kubernetes, Terraform, AWS/GCP/Azure
- `AGENT-SECURITE-IA.md` — OWASP LLM, red teaming, CISSP
- `AGENT-PROMPT-ENGINEER.md` — System prompts, CoT, RAG, evals

### Agile, Product & Quality (11)
- `AGENT-PO-SCRUM.md` — User stories, backlog, Scrum ceremonies
- `AGENT-PO-SAFE.md` — PI Planning, WSJF, ART, portfolio epics
- `AGENT-PRODUCT-MANAGER-SAFE.md` — Program vision, ART roadmap, go-to-market
- `AGENT-RELEASE-TRAIN-ENGINEER.md` — PI Planning, ART coordination, I&A
- `AGENT-SCRUM-MASTER.md` — Facilitation, team coaching, metrics
- `AGENT-QA-AGILE.md` — BDD/Gherkin, ATDD, exploratory testing
- `AGENT-QA-CYCLEV.md` — Test plans, acceptance testing, UAT, performance
- `AGENT-UX-DESIGNER.md` — Figma, wireframing, design system
- `AGENT-BUSINESS-ANALYST.md` — Elicitation, BPMN, specifications
- `AGENT-CHANGE-MANAGER.md` — ADKAR, adoption plan, resistance management
- `AGENT-AUDIT-METHODO-IA.md` — SAFe/Scrum/ISTQB/PMI methodology compliance audit, reasoning challenge

### Management & Consulting (9)
- `AGENT-CHEF-PROJET-IA.md` — Scoping, planning, EVM, steering committee
- `AGENT-CONSULTANT-IA.md` — Maturity assessment, roadmap, ROI
- `AGENT-CDO-DIRECTEUR-IA.md` — Data strategy, governance, OKRs
- `AGENT-FINANCIAL-ANALYST.md` — AI business case, ROI, TCO, EVM
- `AGENT-FORMATEUR-IA.md` — Learning path design, e-learning
- `AGENT-GROWTH-IA.md` — Acquisition, automation, analytics
- `AGENT-REDACTEUR-IA.md` — Copywriting, SEO, editorial prompting
- `AGENT-JURIDIQUE-IA.md` — GDPR, AI Act, AI contracts
- `AGENT-VEILLE-STRATEGIQUE.md` — AI market watch, weak signals, benchmarking

### HR & Talent (1)
- `AGENT-RH-IA.md` — IT/AI sourcing, strategic workforce planning, anti-fraud, ATS, people analytics

### Orchestration (1)
- `AGENT-ORCHESTRATEUR-WORKFLOW.md` — Design and orchestration of multi-agent workflows

---

## 3. Additional tools

### MCP servers (Jira / Confluence / Mission log)

```bash
# Installation
cd /Users/guyhui/CLAUDE/claude-agents/mcp-servers
# Follow mcp-servers/README.md
```

Once configured, you can push your deliverables directly from Claude Code:
- WF-001 → Jira (`jira_bulk_create_backlog`)
- WF-004 → Confluence (`confluence_publish_report`)
- Any mission → log (`log_workflow_run`)

### Skills

Each agent references its skills in its file (the "Available skills" table). Skills are actionable markdown sheets stored in `skills/<domain>/<name>.md`.

---

## 4. Memory & context

- **User profile**: `~/.claude/CLAUDE.md` (global instructions)
- **Auto memory**: `~/.claude/projects/.../memory/MEMORY.md` (conversational updates)
- **Project context**: `memory/CLAUDE.md` (preferences, conventions)

---

## 5. Useful commands

```
/model              # Switch model (Opus 4.8, Sonnet 5, Haiku 4.5)
/clear              # Clear the conversation context
/help               # Claude Code help
! <command>         # Run a shell command directly
```

---

> 💡 **Tip**: for mechanical tasks (edits, refactors), stay on Sonnet 5.
> Switch to Opus 4.8 for genuine architecture trade-offs, audits, and complex reasoning.
