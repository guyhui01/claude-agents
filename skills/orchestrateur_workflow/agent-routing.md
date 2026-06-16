# Skill — Selecting and Routing to Specialized Agents
> Certifications: TOGAF 10 (The Open Group), PMI-ACP (PMI), Anthropic Claude Code in Action (2026), Claude Code 101 (2026)

## Objective
Dynamically identify and select the agent(s) best suited to a request — based on context, task, business domain, and constraints — to ensure the highest possible answer quality.

## Routing matrix — Full catalog

### Routing by request type

| Request type | Primary agent | Secondary agent | Condition |
|---|---|---|---|
| Analyze a business need | BUSINESS-ANALYST | CONSULTANT-IA | If strategic context |
| Write User Stories | PO-SCRUM | PO-SAFE | If SAFe / multi-team context |
| PI Planning / WSJF | PO-SAFE | SCRUM-MASTER | If ART level |
| AI system architecture | AI-ARCHITECT | DEV-PYTHON-IA | If immediate code needed |
| Python / ML development | DEV-PYTHON-IA | MLOPS-ENGINEER | If ML pipeline needed |
| TypeScript development | DEV-TYPESCRIPT-IA | DEV-PYTHON-IA | If backend API needed |
| CMS / Drupal site | DEV-DRUPAL-PHP | — | CMS domain only |
| Data pipeline / ETL | DATA-ENGINEER | MLOPS-ENGINEER | If model needed |
| ML model / statistics | DATA-SCIENTIST | DATA-ENGINEER | If data needed first |
| CI/CD / Infrastructure | DEVOPS-CLOUD | AI-ARCHITECT | If design before deployment |
| Security audit | SECURITE-IA | JURIDIQUE-IA | If GDPR compliance needed |
| Agile functional testing | QA-AGILE | SCRUM-MASTER | If sprint blocker |
| Formal testing / UAT | QA-CYCLEV | QA-AGILE | If V-Model context |
| UX / User journey | UX-DESIGNER | BUSINESS-ANALYST | If scoping needed first |
| Scrum facilitation | SCRUM-MASTER | PO-SCRUM | If backlog blocker |
| Project planning | CHEF-PROJET-IA | PO-SAFE | If hybrid Agile/Waterfall |
| AI strategy / Audit | CONSULTANT-IA | CDO-DIRECTEUR-IA | If executive-committee level |
| Data governance / CDO | CDO-DIRECTEUR-IA | CONSULTANT-IA | If long-term data plan |
| AI team training | FORMATEUR-IA | CONSULTANT-IA | If audit needed first |
| Growth / Acquisition | GROWTH-IA | REDACTEUR-IA | If content needed |
| Writing deliverables | REDACTEUR-IA | CHEF-PROJET-IA | If project report |
| GDPR / AI Act compliance | JURIDIQUE-IA | SECURITE-IA | If technical audit too |

---

## Selection algorithm

```
STEP 1 — Identify the primary domain
─────────────────────────────────────────
? Is it a task: technical / product / management?

  TECHNICAL  → Dev & Technical group (9 agents)
  PRODUCT    → Agile & Product group (7 agents)
  MANAGEMENT → Management & Consulting group (7 agents)

STEP 2 — Refine by specialty
─────────────────────────────────────────
? What is the granularity of the task?

  CODE         → DEV-PYTHON / DEV-TYPESCRIPT / DEV-DRUPAL
  ARCHITECTURE → AI-ARCHITECT / DATA-ENGINEER / MLOPS
  BACKLOG      → PO-SCRUM (team) / PO-SAFE (ART)
  TESTS        → QA-AGILE (sprint) / QA-CYCLEV (UAT)
  CONSULTING   → CONSULTANT-IA / CDO / CHEF-PROJET-IA

STEP 3 — Check routing conditions
─────────────────────────────────────────
? Are there specific constraints?

  SAFe / multi-team        → ALWAYS PO-SAFE before PO-SCRUM
  GDPR / AI Act            → ALWAYS JURIDIQUE-IA in parallel
  CAC40 / executive comm.  → ALWAYS CHEF-PROJET-IA for reporting
  Generative AI            → ALWAYS AI-ARCHITECT for the design
```

---

## Routing prompt template

```
CONTEXT : [description of the situation in 2-3 lines]
TASK    : [what the user wants to accomplish]
DOMAIN  : [technical / product / management]
CONSTRAINTS : [deadline, budget, methodology, regulatory]

→ SELECTED AGENT    : [agent name]
→ REASON            : [why this agent and not another]
→ PARALLEL AGENTS (if needed) : [list]
→ NEXT AGENTS       : [next step in the workflow]
```

---

## Priority routing rules

1. **Never route to 2 agents with the same scope** without an explicit condition
2. **PO-SCRUM and PO-SAFE are not interchangeable** — check the level (team vs. ART)
3. **QA-AGILE and QA-CYCLEV are not interchangeable** — check the project method
4. **JURIDIQUE-IA is systematic** if personal data or the AI Act is involved
5. **CHEF-PROJET-IA is systematic** if an executive-committee or steering-committee deliverable is involved

## Deliverables
- Completed routing matrix for the workflow at hand
- Justification for each agent choice
- List of identified parallel agents
- Validated sequencing order

## Output format
Specify: a description of the request, methodological constraints, client type (CAC40 / SME / startup), expected deliverables, deadline.

## Anti-patterns
- ❌ **Routing to 2 agents with the same scope** without an explicit condition: duplicates and conflicts → disambiguation rule
- ❌ **Confusing PO-SCRUM/PO-SAFE** or **QA-AGILE/QA-CYCLEV**: unsuitable deliverables → check the level (team/ART) and method (Agile/V-Model)
- ❌ **No routing fallback** when no agent matches: lost request → default agent + escalation
- ❌ **Forgetting JURIDIQUE-IA** on personal data / AI Act: compliance risk → systematic routing (rule 4)
- ❌ **Static routing** (no re-routing on agent failure): blocker → bounded re-routing loop
- ❌ **Overly expensive router** (Opus for simple classification): a lightweight router is enough → Sonnet/Haiku for routing

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024): **routing** pattern (classification → specialized agent)
- **TOGAF 10** (The Open Group, 2022) — responsibility governance

## See also
- [`workflow-design.md`](workflow-design.md) — workflow decision gateways
- [`dependency-mapping.md`](dependency-mapping.md) — execution order of routed agents
- [`parallel-orchestration.md`](parallel-orchestration.md) — agents in parallel
- [`prompt-engineering-orchestration.md`](prompt-engineering-orchestration.md) — structured routing prompt
