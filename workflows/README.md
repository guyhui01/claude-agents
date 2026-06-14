# Agentic Workflows — Catalog

> 10 ready-to-use workflows orchestrating the catalog's 38 agents  
> Author: [guyhui01](https://github.com/guyhui01) · Based on AGENT-ORCHESTRATEUR-WORKFLOW.md

---

## Quick selection

```
What is your main goal?

  Define / scope a product or service              → WF-001
  Plan / drive a SAFe delivery                     → WF-002
  Build / deploy an AI application                 → WF-003
  Advise / transform a client                      → WF-004
  Watch the market / communicate / grow business   → WF-005
  Respond to an RFP / build a proposal             → WF-006
  Start a new mission (Day 1–5)                     → WF-007
  Audit AI Act / GDPR compliance                   → WF-008
  Recruit an IT / AI profile                       → WF-009
  Close a project / produce a lessons-learned report → WF-010
```

---

## Overview of the 10 workflows

| ID | Name | Domain | Agents | Duration |
|---|---|---|---|---|
| [WF-001](WF-001-cadrage-produit-ia.md) | AI Product Scoping | Agile & Product | 4-6 | 45-90 min |
| [WF-002](WF-002-delivery-safe.md) | SAFe Agile Delivery | Agile & Product | 6 | 60-120 min |
| [WF-003](WF-003-lancement-app-ia.md) | AI Application Launch | Dev & Technical | 5-6 | 90-180 min |
| [WF-004](WF-004-mission-conseil-ia.md) | AI Consulting Engagement | Management & Consulting | 6 | 60-90 min |
| [WF-005](WF-005-veille-growth.md) | Strategic Watch & Growth | Management & Consulting | 3-4 | 30-60 min |
| [WF-006](WF-006-avant-vente-proposition-commerciale.md) | Pre-sales / Commercial Proposal | Management & Consulting | 6-9 | 75-120 min |
| [WF-007](WF-007-onboarding-mission-j1.md) | Mission Onboarding — Day 1 | Management & Consulting | 4 | 45-75 min |
| [WF-008](WF-008-audit-conformite-ia-act-rgpd.md) | AI Act / GDPR Compliance Audit | Compliance & Governance | 7-9 | 90-150 min |
| [WF-009](WF-009-recrutement-it-ia.md) | IT / AI Recruitment | HR & Talent | 4-7 | 60-90 min |
| [WF-010](WF-010-post-mortem-projet.md) | Project Post-mortem | Management & Consulting | 4-7 | 45-75 min |

---

## Quick start

```
# In Claude Code, load the orchestrator then start a workflow:
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on this role.
Then read the file workflows/WF-001-cadrage-produit-ia.md
and start the workflow with the following context: [describe the client context]
```

---

## Cross-cutting constraints

| Constraint | Agent to always add |
|---|---|
| Personal data / GDPR | + AGENT-JURIDIQUE-IA |
| Executive committee deliverable required | + AGENT-CHEF-PROJET-IA |
| SAFe / multi-team context | WF-002 takes priority |
| Organizational transformation | + AGENT-CHANGE-MANAGER |
| Business case required | + AGENT-FINANCIAL-ANALYST |

---

## Structure of the workflows/ folder

```
workflows/
├── WF-00X-*.md     ← Workflow definitions (immutable)
├── briefs/         ← Pure written inputs — ready to run (immutable after commit)
├── outputs/        ← Raw run results — traceable, uncurated
└── use_cases/      ← Quality-curated showcase outputs (portfolio)
```

### Pipeline

```
briefs/ → [run workflow] → outputs/ → [curation] → use_cases/
```

| Folder | Responsibility | Editable | Committed |
|---------|---------------|------------|---------|
| `briefs/` | Pure input | ❌ Never | ✅ |
| `outputs/` | Raw run | ✅ Enrichment | ✅ |
| `use_cases/` | Curated showcase | ✅ Curation | ✅ |

---

## Structure of a workflow

Each workflow file contains:
- YAML identity card
- BPMN flow diagram (ASCII)
- Contextual parameters to fill in
- Per-agent step sheets (YAML)
- Final deliverables with checklist
- Claude Code quick-start command
