# WF-010 — Project Post-mortem / Lessons Learned

> Project closed (or major incident) → collection → analysis → lessons-learned report → improvement plan
> Certifications mobilized: PMP · PRINCE2 · PROSCI · ISTQB · Anthropic Claude Code in Action

---

## Identity card

```yaml
id: "WF-010"
nom: "Post-mortem Projet / REX"
domaine: "Management & Consulting"
declencheur: "Project closeout, end of PI, or major production incident"
resultat_final: "Complete lessons-learned report + prioritized improvement plan + learning capitalization"
duree_estimee: "45-75 min"
modele_recommande: "claude-sonnet-5"
modele_raison: "Documentary and analytical workflow: fact collection, root-cause analysis, report writing. Sonnet 5 produces professional-quality lessons-learned reports."
modele_alternatif: "claude-opus-4-8"  # if a high-stakes post-mortem (critical incident, dispute, executive board)
agents_core:
  - CHEF-PROJET-IA    # lessons-learned facilitation, timeline, root-cause analysis, improvement plan
  - QA-AGILE          # deliverables quality analysis, test coverage, technical debt
  - CHANGE-MANAGER    # human review, team dynamics, resistance management
  - REDACTEUR-IA      # final lessons-learned report, executive summary, capitalization memo
agents_optionnels:
  - CONSULTANT-IA     # if lessons learned with strategic stakes or CAC40 client
  - SECURITE-IA       # if a security incident or LLM flaw to analyze
  - DATA-SCIENTIST    # if ML/AI project with model drift or metrics to analyze
  - AUDIT-METHODO-IA  # independent challenge of root causes + improvement-plan validation gate (high-stakes / disputed REX)
statut: "disponible"
version: "1.0"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | CHEF-PROJET-IA | Lessons-learned facilitation, timeline, root-cause analysis | Timeline + 5 Whys + improvement plan |
| 2 | QA-AGILE | Deliverables and test-process quality review | Quality report + technical debt |
| 3 | CHANGE-MANAGER | Human review, team, adoption, resistance | HR review + team recommendations |
| 4 | REDACTEUR-IA | Final lessons-learned report + capitalization memo | Lessons-learned report + executive summary |
| opt | CONSULTANT-IA | Strategic angle and business impact | Actual vs forecast ROI analysis |
| opt | SECURITE-IA | AI security incident analysis | Security report + fixes |
| opt | AUDIT-METHODO-IA | Independent challenge of the root-cause analysis and gate on the improvement plan | Counter-analysis + bias report + validation gate |

---

## Contextual parameters

```
POST-MORTEM CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Project / Incident   : [Name + start/end dates]
Closeout type        : [Success / Partial failure / Incident / End of SAFe PI]
Project duration     : [< 3 months / 3-12 months / > 12 months]
Team involved        : [Size / Distribution / Remote or on-site]
Client stakes        : [Budget overrun / Deadline / Quality / Scope]
Available data       : [KPIs, metrics, meeting minutes, logged incidents]
Report audience      : [Internal team / Steering committee / Executive committee / Client / Public]
Expected format      : [Detailed report / 1-page summary / Presentation]
HR sensitivities     : [Team tensions to manage / Social context]
```

---

## BPMN flow diagram

```
(START — Project closeout / end of PI / major incident)
        │
        ▼
[STEP-01 — CHEF-PROJET-IA]
  Building the project timeline,
  root-cause analysis (5 Whys, Ishikawa),
  identifying planned vs actual gaps
        │
        ▼
═══════════════════════════════════
  PARALLEL FORK
═══════════════════════════════════
  ├── [STEP-02 — QA-AGILE]
  │    Deliverables quality review:
  │    test coverage, bugs,
  │    technical debt, DoD
  │
  ├── [STEP-03 — CHANGE-MANAGER]
  │    Human review:
  │    team dynamics, adoption,
  │    resistance, friction points
  │
  └── [STEP-04 — CONSULTANT-IA] (optional)
       Actual ROI vs objectives,
       measured business impact
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
<GATEWAY — AI security incident involved?>
  ├── YES ──▶ [STEP-05 — SECURITE-IA]
  │            Incident analysis + fixes
  └── NO ───▶ (bypass)
        │
        ▼
<GATEWAY — High-stakes / disputed post-mortem? (critical incident, dispute, exec board, HR tensions)>
  ├── YES ──▶ [STEP-05B — AUDIT-METHODO-IA]
  │            Independent challenge: red-team the 5 Whys,
  │            attribution / self-serving / hindsight bias,
  │            validation gate on the improvement plan
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-06 — REDACTEUR-IA]
  Complete lessons-learned report,
  1-page executive summary,
  capitalization memo (best practices + pitfalls),
  formalized improvement plan
        │
        ▼
(END — Lessons learned validated and archived)
```

---

## Detailed steps

### STEP-01 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Lessons-learned facilitation and root-cause analysis"
  input:
    - "Project data: initial vs actual schedule, budget, scope"
    - "Delivery KPIs and metrics"
    - "Materialized incidents and risks"
  output_attendu:
    - "Annotated project timeline (key milestones, slippages, corrections)"
    - "Planned vs actual gaps (schedule, budget, scope, quality)"
    - "Root-cause analysis: 5 Whys on the 3 main problems"
    - "What worked well (to replicate)"
    - "Prioritized improvement plan (5-10 concrete actions)"
  duree_estimee: "20 min"
  execution: "sequential — opens the workflow"
```

### STEP-02 — QA-AGILE

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-QA-AGILE"
  role: "Deliverables and test-process quality review"
  input:
    - "Quality metrics: bugs, test coverage, non-conformities"
    - "Client UAT results"
    - "Estimated technical debt"
  output_attendu:
    - "Deliverables quality review (functional vs. technical)"
    - "Test coverage analysis (unit, integration, E2E)"
    - "Top 5 critical bugs and their origin"
    - "Estimate of technical debt left behind"
    - "QA process recommendations for the next project"
  duree_estimee: "15 min"
  execution: "parallel with STEP-03 and STEP-04"
```

### STEP-03 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Human review and team dynamics"
  input:
    - "Team composition and evolution over the project duration"
    - "Observed friction points and conflicts"
    - "End-user adoption level"
  output_attendu:
    - "Team dynamics review (cohesion, communication, leadership)"
    - "User adoption analysis (rate, resistance, champions)"
    - "Friction points between teams or with the client"
    - "HR and organizational recommendations"
    - "Recognition of individual contributions (template format)"
  duree_estimee: "15 min"
  execution: "parallel with STEP-02 and STEP-04"
```

### STEP-05B — AUDIT-METHODO-IA (optional)

```yaml
etape:
  id: "STEP-05B"
  agent: "AGENT-AUDIT-METHODO-IA"
  role: "Independent challenge of the analysis and gate on the improvement plan"
  input:
    - "Root-cause analysis and improvement plan (STEP-01)"
    - "Quality, human and ROI reviews (STEP-02 to STEP-05)"
    - "Post-mortem stakes and HR sensitivities"
  output_attendu:
    - "Red-team of the 5 Whys: stopping too early, single-cause bias, confusing symptom and cause"
    - "Cognitive-bias report: attribution, self-serving, hindsight, scapegoating"
    - "Blind spots and unasked questions (counter-thesis, Devil's Advocate)"
    - "Validation gate on the improvement plan: actionable, measurable, owned actions (SMART)"
    - "Verdict: plan validated / returned with documented reservations — never validated by default"
  condition_passage: "Improvement plan validated, or returned with documented reservations, before the final report"
  duree_estimee: "15 min"
  execution: "conditional — after the JOIN, before STEP-06, if the post-mortem is high-stakes/disputed"
```

### STEP-06 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-REDACTEUR-IA"
  role: "Final lessons-learned report and capitalization"
  input:
    - "All outputs STEP-01 to STEP-05B"
    - "Report audience (team / steering committee / client / public)"
    - "Expected format"
  output_attendu:
    - "Complete lessons-learned report (10-20 pages): timeline, analysis, review, plan"
    - "1-page executive summary (facts + lessons + actions)"
    - "Capitalization memo: top 5 best practices + top 5 pitfalls to avoid"
    - "Steering-committee/executive-committee presentation (10 slides) if required"
    - "Documentary archives: everything archived in the project repository"
  duree_estimee: "15 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-010 CHECKLIST
──────────────────────────────────────────────────────
□ Annotated project timeline + planned vs actual gaps
□ Root-cause analysis (5 Whys × 3 problems)
□ What worked well (to replicate)
□ Deliverables quality review + technical debt
□ Human review (team, adoption, friction)
□ [optional] Actual vs objectives ROI
□ [optional] AI security incident report
□ [optional] Independent challenge + bias report + validated improvement plan (high-stakes REX)
□ Prioritized improvement plan (5-10 actions)
□ Complete lessons-learned report (10-20 pages)
□ 1-page executive summary
□ Capitalization memo best practices / pitfalls
□ Steering-committee/executive-committee presentation if required
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-010 from workflows/WF-010-post-mortem-projet.md.

Post-mortem context:
- Project / Incident: [to fill in]
- Closeout type: [Success / Partial failure / Incident / End of PI]
- Report audience: [Team / Steering committee / Client]
- Available data: [KPIs, metrics, incidents]

Launch STEP-01 with AGENT-CHEF-PROJET-IA.
```
