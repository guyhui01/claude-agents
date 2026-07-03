# WF-002 — Delivery Agile SAFe

> PI Planning → sprint backlog → executive-committee progress reporting  
> Certifications mobilized: SAFe 6 · SAFe RTE · SAFe POPM 6 · SAFe LPM · PSM I · PMP

---

## Identity card

```yaml
id: "WF-002"
nom: "Delivery Agile SAFe"
domaine: "Agile & Product"
declencheur: "Launch of a PI Planning or start of an ART sprint"
resultat_final: "Validated PI Objectives + WSJF Program Backlog + Sprint plan + Executive-committee reporting"
duree_estimee: "60-120 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Dense workflow: 6 agents, multi-team ART orchestration, WSJF, PI Planning, cross dependencies, and executive-committee reporting. Opus 4.8 is required for the depth of SAFe reasoning and the consistency of outputs across the whole chain."
modele_alternatif: "claude-sonnet-5"  # acceptable for simple ART contexts (1-2 teams, known PI)
agents_core:
  - PRODUCT-MANAGER-SAFE  # Program vision, ART roadmap
  - RELEASE-TRAIN-ENGINEER # PI Planning facilitation, ART coordination
  - PO-SAFE               # features, WSJF, team PI Objectives
  - SCRUM-MASTER          # sprint plan, coaching
  - QA-AGILE              # sprint acceptance tests
  - CHEF-PROJET-IA        # executive-committee reporting, EVM
agents_optionnels:
  - CHANGE-MANAGER        # if deployment involves strong organizational change
  - BUSINESS-ANALYST      # if features require business reframing
statut: "disponible"
version: "1.1"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | PRODUCT-MANAGER-SAFE | Program vision, ART feature prioritization | Vision board, PI roadmap |
| 2 | RELEASE-TRAIN-ENGINEER | PI Planning facilitation, inter-team dependencies | Program Board, ROAM |
| 3 | PO-SAFE | Team PI Objectives, WSJF, sprint features | PI Objectives + sprint backlog |
| 4 | SCRUM-MASTER | Sprint plan, impediment identification | Validated sprint plan |
| 5 | QA-AGILE | Acceptance criteria, sprint test plan | Sprint test plan |
| 6 | CHEF-PROJET-IA | Executive-committee reporting, EVM, dashboard | Dashboard + executive-committee note |
| opt | CHANGE-MANAGER | SAFe adoption support | Resistance plan |

---

## Contextual parameters

```
ART CONTEXT (to fill in before starting)
──────────────────────────────────────────────────
ART name           : [e.g. Digital Banking ART]
Number of teams    : [e.g. 3 squads / 5 Scrum teams]
PI duration        : [e.g. 10 weeks / 4 sprints of 2 weeks]
Current PI number  : [e.g. PI-07]
ART capacity       : [e.g. 120 story points / PI]
Dependencies       : [other ARTs, external systems, vendors]
Constraints        : [code freeze, compliance date, release dependency]
Deliverables language : [French / English / Bilingual]
```

---

## BPMN flow diagram

```
(START — PI Planning or sprint to plan)
        │
        ▼
[STEP-01 — PRODUCT-MANAGER-SAFE]
  Program vision, PI roadmap,
  prioritized features (WSJF)
        │
        ▼
[STEP-02 — RELEASE-TRAIN-ENGINEER]
  PI Planning facilitation,
  Program Board, dependencies,
  ROAM risks
        │
        ▼
[STEP-03 — PO-SAFE]  ◄── Parallel possible with step 02 for each team
  Team PI Objectives,
  WSJF features, sprint 1 backlog
        │
        ▼
[STEP-04 — SCRUM-MASTER]
  Sprint planning,
  impediment identification,
  team capacity
        │
        ▼
[STEP-05 — QA-AGILE]
  Acceptance criteria,
  sprint test plan
        │
        ▼
[STEP-06 — CHEF-PROJET-IA]
  Executive-committee reporting,
  EVM (CPI/SPI),
  PI dashboard
        │
        ▼
<GATEWAY — Major organizational change?>
  ├── YES ──▶ [STEP-07 — CHANGE-MANAGER]
  │            ADKAR, SAFe resistances
  └── NO ───▶ (bypass)
        │
        ▼
(END — PI launched, sprint planned, executive committee informed)
```

---

## Detailed steps

### STEP-01 — PRODUCT-MANAGER-SAFE

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-PRODUCT-MANAGER-SAFE"
  role: "Program vision and prioritization for the PI"
  input:
    - "Current Program product roadmap"
    - "Customer feedback and previous-PI metrics"
    - "Budget and ART capacity constraints"
    - "Strategic portfolio objectives"
  output_attendu:
    - "PI Vision board (1 page)"
    - "Top 10 WSJF-prioritized features"
    - "Lean Business Case for major features"
    - "Vision communication to Business Owners"
  condition_passage: "Vision validated by the Business Owners"
  duree_estimee: "15 min"
  execution: "sequential — starts the workflow"
```

### STEP-02 — RELEASE-TRAIN-ENGINEER

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-RELEASE-TRAIN-ENGINEER"
  role: "PI Planning facilitation and Program Board"
  input:
    - "Vision and prioritized features (STEP-01)"
    - "Scrum team capacities"
    - "Inter-team technical dependencies"
    - "Available architectural enablers"
  output_attendu:
    - "Program Board with visual dependencies"
    - "ROAM risks (Resolved/Owned/Accepted/Mitigated)"
    - "PI Planning agenda (typical 2-day)"
    - "List of ART impediments to remove"
    - "Confidence vote (target > 3.5/5)"
  condition_passage: "Confidence vote reached"
  si_echec: "Re-planning iteration if vote < 3/5"
  duree_estimee: "20 min"
  execution: "sequential after STEP-01"
```

### STEP-03 — PO-SAFE

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-PO-SAFE"
  role: "Team PI Objectives and sprint backlog"
  input:
    - "Features allocated to the team (STEP-02)"
    - "Sprint capacity in story points"
    - "Dependencies identified on the Program Board"
  output_attendu:
    - "Team PI Objectives (3-5 SMART objectives)"
    - "Sprint 1 backlog: 5-10 prioritized US"
    - "WSJF criteria per feature"
    - "Declared team risks (ROAM)"
  duree_estimee: "15 min"
  execution: "can be parallelized per team"
```

### STEP-04 — SCRUM-MASTER

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-SCRUM-MASTER"
  role: "Sprint planning and team capacity"
  input:
    - "PI Objectives and sprint backlog (STEP-03)"
    - "Team's historical velocity"
    - "Sprint availability and time off"
  output_attendu:
    - "Single Sprint Goal per team (1 coherent objective)"
    - "Validated sprint plan — Developers' forecast (committed US + story points)"
    - "Sprint Backlog self-organized by the Developers (allocation adjusted at the Daily; the SM facilitates, does not assign — Scrum Guide 2020)"
    - "Sprint 1 impediments listed"
    - "Definition of Done restated"
  duree_estimee: "10 min"
  execution: "sequential after STEP-03"
```

### STEP-05 — QA-AGILE

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-QA-AGILE"
  role: "Sprint test plan and acceptance criteria"
  input:
    - "US committed in the sprint (STEP-04)"
    - "Available functional acceptance criteria"
    - "Available test environments"
  output_attendu:
    - "Gherkin scenarios for the critical US"
    - "Sprint test plan (nominal + error + boundary)"
    - "Regression strategy (automation vs manual)"
  duree_estimee: "10 min"
  execution: "parallel possible with STEP-04"
```

### STEP-06 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "PI dashboard and executive-committee reporting"
  input:
    - "PI Objectives (STEP-03) + Program Board (STEP-02)"
    - "PI budget allocated and consumed"
    - "Previous-PI metrics (PI Predictability)"
  output_attendu:
    - "PI dashboard: objectives / capacity / progress / risks"
    - "Executive-committee note (1 page): PI status, risks, required decisions"
    - "Sprint EVM (CPI, SPI if applicable)"
    - "RAG status per critical feature"
  duree_estimee: "10 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-002 CHECKLIST
──────────────────────────────────────────────────────
□ PI Vision board (1 page)
□ Top 10 WSJF-prioritized features + Lean Business Case
□ Program Board with visual dependencies
□ ROAM risks documented
□ Team PI Objectives (SMART)
□ Sprint 1 backlog committed + story points
□ Validated sprint plan (capacity, allocation)
□ Gherkin scenarios for critical US
□ PI dashboard: budget / progress / risks
□ Executive-committee note (1 page)
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-002 from workflows/WF-002-delivery-safe.md.

ART context:
- ART name: [to fill in]
- Number of teams: [to fill in]
- PI duration: [to fill in]
- Constraints: [to fill in]

Launch STEP-01 with AGENT-PRODUCT-MANAGER-SAFE.
```
