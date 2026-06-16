# Skill — Agentic Workflow Design
> Certifications: TOGAF 10 (The Open Group), BPMN 2.0 OCM (OMG), PMP (PMI), Anthropic Claude Code in Action (2026)

## Objective
Design a structured, documented agentic workflow — identified agents, sequenced steps, formalized inputs/outputs, explicit decision gateways — to ensure reproducible and maintainable execution.

## Agentic Workflow architecture — Template

### 1. Workflow identity card

```
WORKFLOW NAME   : [e.g. AI Product Scoping]
BUSINESS GOAL   : [expected result in 1 sentence]
TRIGGER         : [event that starts the workflow — e.g. client brief received]
FINAL RESULT    : [deliverable or target state — e.g. prioritized backlog + acceptance criteria]
ESTIMATED TIME  : [e.g. 45 min / 2h / async]
LLM MODEL       : [e.g. Claude Sonnet 4.6 (steps) / Opus 4.8 for the orchestrator]
```

### 2. BPMN mapping — Standard structure

```
[TRIGGER EVENT]
        │
        ▼
[GATEWAY — Client context known?]
    ├── YES ──▶ [AGENT BUSINESS-ANALYST: business analysis]
    └── NO  ──▶ [INPUT: collect context] ──▶ [AGENT BUSINESS-ANALYST]
        │
        ▼
[AGENT PO-SCRUM: write User Stories]
        │
        ▼
[GATEWAY — UX needed?]
    ├── YES ──▶ [AGENT UX-DESIGNER: wireframes]
    └── NO  ──▶ [bypass]
        │
        ▼
[AGENT QA-AGILE: acceptance criteria]
        │
        ▼
[END EVENT — Product deliverable]
```

### 3. Step card — Per-agent template

```yaml
step:
  id: "STEP-01"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Business analysis and needs identification"
  input:
    - "Client brief (free text or template)"
    - "Industry context: [industry]"
    - "Constraints: [budget, deadline, regulatory]"
  expected_output:
    - "Business needs map (job-to-be-done)"
    - "Stakeholder list"
    - "Functional scope (in scope / out of scope)"
  pass_condition: "Output validated by the user (YES/NO)"
  on_failure: "Re-run STEP-01 with enriched context"
  estimated_duration: "10 min"
  execution: "sequential"
```

### 4. Simplified flow diagram

```
SIMPLIFIED BPMN LEGEND
──────────────────────────────────────────────
( ) = Event (circle)
[ ] = Agent task (rectangle)
<>  = Decision gateway (diamond)
──► = Sequential flow
═══► = Conditional flow
|||  = Parallelism (fork/join)
```

### 5. Contextual parameters to inject

```
CLIENT CONTEXT (to fill in at startup)
────────────────────────────────────────────
Industry        : [e.g. Banking / Insurance / Retail / Industry]
Team size       : [e.g. 1 ART / 3 squads / solo project]
Methodology     : [Scrum / SAFe / Kanban / Waterfall / Hybrid]
Constraints     : [GDPR, AI Act, budget freeze, milestone date]
Tech stack      : [e.g. AWS, Azure, Salesforce, SAP]
Deliverable lang: [French / English / Bilingual]
```

## Design best practices

- **1 agent = 1 responsibility**: don't overload an agent with multiple roles
- **Explicit gateways**: always define the pass condition before moving on
- **Measurable outputs**: each step produces a concrete, verifiable deliverable
- **Systematic fallback**: plan an alternative if the agent doesn't produce the expected result
- **Cumulative context**: each agent receives the context of all preceding steps
- **Fixed methodological layer**: respect the certified framework (SAFe, Scrum, PMI)
- **Variable contextual layer**: adapt parameters to the client without changing the skeleton

## Deliverables
- Workflow identity card (1 page)
- Annotated BPMN diagram (mermaid or ASCII)
- YAML step cards for each agent
- Documented contextual parameters
- Success criteria for the overall workflow

## Output format
Specify: the workflow's business goal, the catalog agents to involve, sequencing constraints, client contextual parameters, and the expected deliverable format.

## Anti-patterns
- ❌ **Overloaded agent** (multiple roles): not testable, not reusable → 1 agent = 1 responsibility
- ❌ **Implicit gateways** (undefined pass condition): blockers and ambiguous branches → explicit condition before each continuation
- ❌ **Non-measurable outputs**: impossible to validate a step → concrete deliverable + success criterion
- ❌ **No fallback** on step failure: stalled workflow → systematic `on_failure`
- ❌ **Monolithic workflow** (one mega-prompt) instead of decomposing: orchestrator-workers pattern (Anthropic) → specialized steps
- ❌ **Non-cumulative / unfiltered context**: information loss or overload → structured handoff (see `context-handoff.md`)

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024): prompt-chaining / routing / parallelization / orchestrator-workers / evaluator-optimizer patterns
- **BPMN 2.0.2** — OMG (2013) — workflow modeling — omg.org/spec/BPMN
- **TOGAF 10** (The Open Group, 2022) — architecture framework

## See also
- [`agent-routing.md`](agent-routing.md) — gateways and agent selection
- [`dependency-mapping.md`](dependency-mapping.md) — sequencing and dependencies
- [`context-handoff.md`](context-handoff.md) — context handoff between steps
- [`parallel-orchestration.md`](parallel-orchestration.md) — fork/join and aggregation
- [`workflow-catalog.md`](workflow-catalog.md) — catalog of standard workflows
