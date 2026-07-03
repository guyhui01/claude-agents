# WF-007 — Client Engagement Onboarding D1-D5

> Engagement signed → client context → kickoff plan → D1 deliverables → D5 scoping
> Certifications mobilized: PMP · CBAP · PROSCI · Anthropic Claude Code in Action

---

## Identity card

```yaml
id: "WF-007"
nom: "Onboarding Mission Client J1-J5"
domaine: "Management & Consulting"
declencheur: "Start of a new engagement at a client (D1 = first day)"
resultat_final: "Validated kickoff plan + D1 kit delivered + D5 scoping completed + key relationships established"
duree_estimee: "45-75 min"
modele_recommande: "claude-sonnet-5"
modele_raison: "Structured, operational workflow: production of documentary deliverables (plan, D1 kit, client sheet). Sonnet 5 is enough to generate and format these standard contents."
modele_alternatif: "claude-opus-4-8"  # if the engagement is particularly complex (transformation, politically tense context)
agents_core:
  - CHEF-PROJET-IA      # kickoff plan, D1-D5 schedule, stakeholder management
  - BUSINESS-ANALYST    # client IS and process mapping, as-is analysis
  - CHANGE-MANAGER      # integration strategy, team relationships, expectation management
  - REDACTEUR-IA        # kickoff kit, client sheet, D1 report
agents_optionnels:
  - CONSULTANT-IA       # if an AI maturity diagnostic angle from D1
  - JURIDIQUE-IA        # if NDA, contractual clauses to review at kickoff
statut: "disponible"
version: "1.0"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | CHEF-PROJET-IA | D1-D5 kickoff plan, stakeholders | Kickoff plan + provisional RACI |
| 2 | BUSINESS-ANALYST | Client context and existing-IS mapping | Client context sheet + IS diagram |
| 3 | CHANGE-MANAGER | Integration strategy and first relationships | Stakeholder engagement plan |
| 4 | REDACTEUR-IA | D1 kit + D1 report + written deliverables | Kickoff kit + D1 report |
| opt | CONSULTANT-IA | Express AI maturity diagnostic (if applicable) | Client AI maturity grid |
| opt | JURIDIQUE-IA | NDA and contractual-clause review | Kickoff legal note |

---

## Contextual parameters

```
ENGAGEMENT CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Client              : [Name / Sector / Size]
Engagement type     : [Scoping / Build / AMS / Consulting / Training / Audit]
Engagement duration : [Short < 3 months / Medium 3-12 months / Long > 12 months]
D1 stakeholders     : [Sponsors / Direct manager / Team / CHRO]
Engagement location : [On-site / Remote / Hybrid]
D1 access           : [Badge, PC, VPN, tools, accounts — to validate]
Identified stakes   : [Business / Technical / Organizational / Political]
Sensitivities       : [Social context, restructuring, post-incident, etc.]
Expected deliverables: [Kickoff plan / D1 kit / Client sheet / D1 report]
```

---

## BPMN flow diagram

```
(START — Engagement signed / D1 imminent)
        │
        ▼
[STEP-01 — CHEF-PROJET-IA]
  D1-D5 kickoff plan,
  stakeholder mapping,
  provisional RACI,
  D1 logistics checklist
        │
        ▼
═══════════════════════════════════
  PARALLEL FORK
═══════════════════════════════════
  ├── [STEP-02 — BUSINESS-ANALYST]
  │    Client context analysis:
  │    IS mapping, processes,
  │    business stakes, organization
  │
  └── [STEP-03 — CHANGE-MANAGER]
       Integration strategy:
       allies identification,
       expectation management,
       D1-D30 engagement plan
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
<GATEWAY — AI maturity diagnostic required from D1?>
  ├── YES ──▶ [STEP-04 — CONSULTANT-IA]
  │            Express AI maturity grid
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-05 — REDACTEUR-IA]
  Complete kickoff kit,
  D1 report,
  concise client sheet,
  D1 confirmation email
        │
        ▼
(END — D1 kit delivered / engagement launched)
```

---

## Detailed steps

### STEP-01 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Kickoff plan and logistics preparation"
  input:
    - "Signed contract / purchase order"
    - "Engagement brief (scope, duration, deliverables)"
    - "Known stakeholders (names, roles)"
  output_attendu:
    - "D1-D5 kickoff plan (activities per half-day)"
    - "Stakeholder mapping (provisional RACI)"
    - "D1 logistics checklist (access, tools, meetings)"
    - "Questions that must be asked on D1"
    - "Identified kickoff risks (political, technical, HR)"
  duree_estimee: "15 min"
  execution: "sequential — opens the workflow"
```

### STEP-02 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Client context analysis and as-is mapping"
  input:
    - "Available documentation (requirements, org chart, IS diagrams)"
    - "Public information on the client (website, LinkedIn, press)"
    - "Engagement brief (STEP-01)"
  output_attendu:
    - "Client context sheet (sector, stakes, culture, competitors)"
    - "Organizational chart (business + IT)"
    - "Simplified IS mapping (systems in place)"
    - "Client business glossary (key terms and acronyms)"
    - "Grey areas to clarify on D1"
  duree_estimee: "15 min"
  execution: "parallel with STEP-03"
```

### STEP-03 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Integration strategy and engagement plan"
  input:
    - "Identified stakeholders (STEP-01)"
    - "Engagement context and sensitivities (STEP-01)"
    - "Estimated client culture"
  output_attendu:
    - "Map of allies, neutrals, and potential resisters"
    - "D1-D30 engagement plan (who to see, when, why)"
    - "Recommended D1 posture (observer / actor / expert)"
    - "Interpersonal points of attention"
    - "Identified relational quick wins"
  duree_estimee: "10 min"
  execution: "parallel with STEP-02"
```

### STEP-04 — CONSULTANT-IA (optional)

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-CONSULTANT-IA"
  role: "Express AI maturity diagnostic"
  input:
    - "Client context and IS (STEP-02)"
    - "Identified business stakes"
  output_attendu:
    - "Express AI maturity grid (6 dimensions, quick rating)"
    - "Top 3 immediate AI opportunities"
    - "Questions to ask the client to refine from D1"
  duree_estimee: "10 min"
  execution: "conditional — if AI engagement"
```

### STEP-05 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-REDACTEUR-IA"
  role: "Production of the D1 kickoff kit"
  input:
    - "All outputs STEP-01 to STEP-04"
    - "Client documentation guidelines (if available)"
  output_attendu:
    - "D1 kit: kickoff plan + client sheet + key questions"
    - "D1 introduction email (to send to the manager on D-1)"
    - "D1 report template (to complete that evening)"
    - "D5 scoping note (first-days review + adjustments)"
  duree_estimee: "15 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-007 CHECKLIST
──────────────────────────────────────────────────────
□ D1-D5 kickoff plan (activities per half-day)
□ Stakeholder mapping + provisional RACI
□ Client context sheet (sector, org, IS, glossary)
□ Allies map + D1-D30 engagement plan
□ [optional] Express AI maturity grid + top 3 opportunities
□ D1 introduction email
□ D1 logistics checklist (access, tools, meetings)
□ D1 report template (to complete on the evening of D1)
□ D5 scoping note
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-007 from workflows/WF-007-onboarding-mission-j1.md.

Engagement context:
- Client: [to fill in]
- Engagement type: [to fill in]
- Duration: [to fill in]
- D1 stakeholders: [to fill in]
- Specific sensitivities: [to fill in]

Launch STEP-01 with AGENT-CHEF-PROJET-IA.
```
