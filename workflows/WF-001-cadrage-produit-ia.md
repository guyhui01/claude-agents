# WF-001 — AI Product Scoping

> Client brief → prioritized backlog + acceptance criteria  
> Certifications mobilized: PSPO I · SAFe 6 · PMI-ACP · ISTQB · certified UX

---

## Identity card

```yaml
id: "WF-001"
nom: "Cadrage Produit IA"
domaine: "Agile & Product"
declencheur: "Client brief received / product idea to scope"
resultat_final: "Prioritized initial backlog + Gherkin acceptance criteria"
duree_estimee: "45-90 min"
modele_recommande: "claude-sonnet-5"
modele_raison: "Structured, sequential workflow — well-bounded outputs (US, Gherkin, wireframes). Sonnet 5 offers the best quality/speed/cost ratio for this kind of production."
modele_alternatif: "claude-opus-4-8"  # if the client brief is very ambiguous or the business context complex (e.g. regulatory, sector niche)
agents_core:
  - BUSINESS-ANALYST     # business-needs analysis, AS-IS BPMN
  - UX-DESIGNER          # user journey, personas, key wireframes
  - PO-SCRUM             # User Stories drafting + MoSCoW prioritization
  - QA-AGILE             # acceptance criteria + BDD test cases
agents_optionnels:
  - CHANGE-MANAGER       # if organizational transformation is involved
  - PRODUCT-MANAGER-SAFE # if SAFe / multi-team context
  - JURIDIQUE-IA         # if personal data or AI Act is concerned
  - AI-ARCHITECT         # if AI-native product (RAG, agents, multi-model)
  - PROMPT-ENGINEER      # if prompt or AI-agent design is in scope
  - FINANCIAL-ANALYST    # if business case and ROI costing required from scoping
statut: "disponible"
version: "1.2"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | BUSINESS-ANALYST | Business-needs analysis, AS-IS BPMN | Needs map, in/out scope |
| 2 | UX-DESIGNER | User journey, personas, key wireframes | User journey map, mockups |
| 3 | PO-SCRUM | User Stories drafting + MoSCoW prioritization | Initial backlog (8-15 US) |
| 4 | QA-AGILE | Acceptance criteria + BDD test cases | Validated Gherkin scenarios |
| opt | CHANGE-MANAGER | Adoption plan if organizational change | ADKAR assessment, comms plan |
| opt | PRODUCT-MANAGER-SAFE | Program vision alignment if ART | SAFe Epic, Lean Business Case |
| opt | AI-ARCHITECT | Target architecture sketch if AI-native product | C4 Level 1 architecture diagram, LLM choice |
| opt | PROMPT-ENGINEER | Baseline prompt design if AI | System prompt v0, token strategy |
| opt | FINANCIAL-ANALYST | Light business case for go/no-go | Estimated ROI, payback, scenarios |

---

## Contextual parameters

```
CLIENT CONTEXT (to fill in before starting)
──────────────────────────────────────────────────
Sector           : [Banking / Insurance / Retail / Industry / Other]
Product type     : [AI app / B2B portal / CMS / Internal workflow / Other]
Team size        : [Solo / 1 squad / Several SAFe teams]
Project method   : [Scrum / SAFe / Kanban / Hybrid]
Constraints      : [Milestone date, budget, GDPR, AI Act, imposed stack]
Deliverables language : [French / English / Bilingual]
Level of detail  : [Quick MVP / Full scoping / Multi-sprint backlog]
```

---

## BPMN flow diagram

```
(START — Client brief received)
        │
        ▼
[STEP-01 — BUSINESS-ANALYST]
  Business analysis, AS-IS BPMN,
  needs identification
        │
        ▼
<GATEWAY — UX component identified?>
  ├── YES ──▶ [STEP-02 — UX-DESIGNER]
  │            User journey, personas, wireframes
  │                      │
  └── NO ───────────────┘
        │
        ▼
[STEP-03 — PO-SCRUM]
  User Stories drafting,
  MoSCoW / WSJF prioritization
        │
        ▼
[STEP-04 — QA-AGILE]
  Gherkin acceptance criteria
  BDD test cases
        │
        ▼
<GATEWAY — Organizational transformation?>
  ├── YES ──▶ [STEP-05 — CHANGE-MANAGER]
  │            ADKAR, communication plan
  │                      │
  └── NO ───────────────┘
        │
        ▼
<GATEWAY — SAFe / multi-team context?>
  ├── YES ──▶ [STEP-06 — PRODUCT-MANAGER-SAFE]
  │            SAFe Epic, Lean Business Case
  │                      │
  └── NO ───────────────┘
        │
        ▼
(END — Backlog + acceptance criteria delivered)
```

---

## Detailed steps

### STEP-01 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Business-needs analysis and elicitation"
  input:
    - "Client brief (free text or structured template)"
    - "Sector context: [sector]"
    - "Identified constraints: [budget, deadline, tech, regulatory]"
  output_attendu:
    - "Needs map (structured job-to-be-done)"
    - "Stakeholder list with roles"
    - "Functional scope: in scope / out of scope"
    - "AS-IS process (simplified BPMN if applicable)"
    - "Open questions to clarify"
  condition_passage: "Output validated by the user before STEP-02"
  si_echec: "Restart STEP-01 with an enriched brief or an elicitation workshop"
  duree_estimee: "15 min"
  execution: "sequential"
```

### STEP-02 — UX-DESIGNER (conditional)

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-UX-DESIGNER"
  condition_activation: "Product with a user interface / journey to design"
  role: "User-journey design and key wireframes"
  input:
    - "Needs map (STEP-01)"
    - "Identified stakeholders"
    - "UX constraints: WCAG accessibility, brand guidelines, target device"
  output_attendu:
    - "User journey map (key steps)"
    - "2-3 main personas"
    - "Wireframes of the key screens (lo-fi)"
    - "Identified friction points"
  condition_passage: "Wireframes validated before US drafting"
  si_echec: "Resume with documented assumptions"
  duree_estimee: "15-20 min"
  execution: "sequential after STEP-01"
```

### STEP-03 — PO-SCRUM

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-PO-SCRUM"
  role: "Initial backlog drafting and prioritization"
  input:
    - "Needs map (STEP-01)"
    - "User journey map and wireframes (STEP-02 if available)"
    - "Prioritization criteria: MoSCoW / WSJF / business value"
  output_attendu:
    - "8 to 15 User Stories in the format: As a [persona], I want [action] so that [benefit]"
    - "Each US with: priority, story-point estimate, DoD"
    - "Backlog ordered by value / risk"
    - "Grouping Epics (3-5 max)"
  condition_passage: "Backlog reviewed and approved by the user"
  si_echec: "Break down overly broad US, reword if ambiguous"
  duree_estimee: "15-20 min"
  execution: "sequential after STEP-02"
```

### STEP-04 — QA-AGILE

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-QA-AGILE"
  role: "Acceptance criteria and BDD scenarios"
  input:
    - "Prioritized backlog (STEP-03)"
    - "5 to 8 priority US to cover"
    - "Identified functional risks"
  output_attendu:
    - "Gherkin acceptance criteria for each selected US"
      # Format: Given [context] / When [action] / Then [expected result]
    - "Nominal cases + error cases + boundary cases"
    - "Sprint 1 test plan (quick win)"
  condition_passage: "Gherkin scenarios functionally validated"
  si_echec: "Refine with the BA or the PO if functional ambiguity"
  duree_estimee: "15 min"
  execution: "sequential after STEP-03"
```

### STEP-05 — CHANGE-MANAGER (optional)

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-CHANGE-MANAGER"
  condition_activation: "Organizational transformation or AI adoption involved"
  role: "Change assessment and support plan"
  input:
    - "Functional scope (STEP-01)"
    - "Impacted stakeholders"
    - "Teams' AI maturity level"
  output_attendu:
    - "ADKAR assessment per target population"
    - "Scoping-phase communication plan"
    - "Identification of sponsors and relays"
    - "Resistance risks and preventive measures"
  duree_estimee: "10 min"
  execution: "parallel possible with STEP-04"
```

### STEP-06 — PRODUCT-MANAGER-SAFE (optional)

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-PRODUCT-MANAGER-SAFE"
  condition_activation: "SAFe context — multi-team ART delivery"
  role: "Program vision alignment and Lean Business Case"
  input:
    - "Initial backlog (STEP-03)"
    - "Budget and timeline constraints"
    - "SAFe portfolio context"
  output_attendu:
    - "SAFe Epic with Lean Business Case"
    - "Value hypotheses and success criteria"
    - "Dependencies identified with the other ART teams"
  duree_estimee: "15 min"
  execution: "sequential after STEP-04"
```

---

## Final deliverables

```
WF-001 CHECKLIST
──────────────────────────────────────────────────────
□ Business needs map (job-to-be-done)
□ Functional scope in scope / out of scope
□ User journey map + personas (if UX enabled)
□ Lo-fi wireframes of the key screens (if UX enabled)
□ Initial backlog: 8-15 ordered User Stories
□ Gherkin acceptance criteria (priority US)
□ Sprint 1 test plan
□ [optional] ADKAR assessment + communication plan
□ [optional] SAFe Epic + Lean Business Case
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-001 from workflows/WF-001-cadrage-produit-ia.md.

Client context:
- Sector: [to fill in]
- Product: [to fill in]
- Constraints: [to fill in]

Launch STEP-01 with AGENT-BUSINESS-ANALYST.
```
