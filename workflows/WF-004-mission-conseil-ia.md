# WF-004 — AI Consulting Engagement

> Engagement signed → maturity audit → strategy → training plan → executive deliverables  
> Certifications mobilized: PMP · PROSCI · SIC (SCIP) · CFA · CAP IABAC · TOGAF 10

---

## Identity card

```yaml
id: "WF-004"
nom: "Mission Conseil IA"
domaine: "Management & Consulting"
declencheur: "Signing of an AI consulting engagement / receipt of a client RFP"
resultat_final: "Maturity audit report + strategic roadmap + training plan + executive summary"
duree_estimee: "60-90 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "High-value strategic workflow: maturity audit, ROI, 12-24 month roadmap, ADKAR, training plan, and executive summary. Requires deep strategic reasoning and multi-source synthesis ability. Opus 4.8 recommended for the quality of CAC40 client deliverables."
modele_alternatif: "claude-sonnet-5"  # for short diagnostic-only engagements (no roadmap or full report)
agents_core:
  - CONSULTANT-IA        # AI maturity diagnostic, recommendations
  - FINANCIAL-ANALYST    # transformation ROI, recommendation business cases
  - CDO-DIRECTEUR-IA     # long-term data strategy and AI governance
  - CHANGE-MANAGER       # adoption plan and change management
  - FORMATEUR-IA         # training plan and upskilling
  - REDACTEUR-IA         # executive summary and client deliverables
agents_optionnels:
  - JURIDIQUE-IA         # if GDPR / AI Act compliance is to be audited
  - VEILLE-STRATEGIQUE   # if a competitive benchmark is required
  - CHEF-PROJET-IA       # if engagement with a client PMO
statut: "disponible"
version: "1.1"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | CONSULTANT-IA | AI maturity audit, diagnostic, recommendations | AI maturity report (1-10) |
| 2 | FINANCIAL-ANALYST | Transformation ROI, recommendation business cases | ROI costing per lever |
| 3 | CDO-DIRECTEUR-IA | 12-24 month strategic AI roadmap, governance | Roadmap + AI OKRs |
| 4 | CHANGE-MANAGER | Adoption plan and organizational support | ADKAR plan per population |
| 5 | FORMATEUR-IA | AI team training plan | Prioritized training program |
| 6 | REDACTEUR-IA | Executive summary + final client report | Client deliverables (1-pager + report) |
| opt | JURIDIQUE-IA | GDPR / AI Act compliance audit | Compliance report |
| opt | VEILLE-STRATEGIQUE | AI competitive benchmark for the client's sector | Competitive radar |

---

## Contextual parameters

```
ENGAGEMENT CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Client             : [Name / Sector / Size]
Engagement scope   : [Audit / Strategy / Training / Support / Full]
Engagement duration: [e.g. 3 days / 2 weeks / 3 months]
Stakeholders       : [CIO / CDO / executive committee / CEO / Operational teams]
Client AI maturity : [Beginner / Experimenter / Advanced — estimate]
Priority stakes    : [Productivity / Compliance / ROI / Competitiveness / HR]
Constraints        : [GDPR, AI Act, budgets, internal resistance]
Expected deliverables: [Report / Roadmap / Executive-committee presentation / Training]
```

---

## BPMN flow diagram

```
(START — RFP received / engagement signed)
        │
        ▼
[STEP-01 — CONSULTANT-IA]
  AI maturity audit (6-dimension grid),
  strengths / weaknesses diagnostic,
  opportunities and risks
        │
        ▼
═══════════════════════════════════
  PARALLEL FORK
═══════════════════════════════════
  ├── [STEP-02A — FINANCIAL-ANALYST]
  │    ROI per lever, business cases
  │
  └── [STEP-02B — VEILLE-STRATEGIQUE] (optional)
       Sector competitive benchmark
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
[STEP-03 — CDO-DIRECTEUR-IA]
  12-24 month strategic AI roadmap,
  governance, OKR, talent
        │
        ▼
[STEP-04 — CHANGE-MANAGER]
  Adoption and support plan,
  ADKAR per population,
  resistance strategy
        │
        ▼
[STEP-05 — FORMATEUR-IA]
  Prioritized training plan,
  tracks per profile,
  training quick wins
        │
        ▼
<GATEWAY — GDPR / AI Act compliance required?>
  ├── YES ──▶ [STEP-06 — JURIDIQUE-IA]
  │            Compliance audit + recommendations
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-07 — REDACTEUR-IA]
  Executive summary (1 page),
  full client report,
  executive-committee presentation
        │
        ▼
(END — Client deliverables handed over)
```

---

## Detailed steps

### STEP-01 — CONSULTANT-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CONSULTANT-IA"
  role: "AI maturity audit and diagnostic"
  input:
    - "Client context: sector, size, stakes"
    - "Available information: interviews, docs, existing use cases"
    - "Engagement objectives"
  output_attendu:
    - "Overall AI maturity score (1-10) and per dimension"
      # Dimensions: strategy / data / technology / skills / governance / culture
    - "Strengths, weaknesses, opportunities, risks (AI SWOT)"
    - "Top 5 priority AI use cases with value/effort scoring"
    - "Sector benchmark (if data available)"
    - "Key recommendations (3-5 priority actions)"
  condition_passage: "Diagnostic validated by the user before the roadmap"
  duree_estimee: "20 min"
  execution: "sequential — opens the workflow"
```

### STEP-02 — FINANCIAL-ANALYST

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Transformation ROI and business cases"
  input:
    - "Top 5 AI use cases (STEP-01)"
    - "Impacted headcount and current process costs"
    - "Available AI budget and return horizon"
  output_attendu:
    - "Business case per use case: investment / gain / ROI / payback"
    - "Financial prioritization of the recommendations"
    - "Overall transformation ROI summary table"
    - "Financial scenarios (optimistic / realistic / conservative)"
  duree_estimee: "15 min"
  execution: "parallel with STEP-02B if benchmark required"
```

### STEP-03 — CDO-DIRECTEUR-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-CDO-DIRECTEUR-IA"
  role: "Strategic AI roadmap and governance"
  input:
    - "Maturity diagnostic (STEP-01)"
    - "Financial prioritization (STEP-02)"
    - "Client organizational and strategic context"
  output_attendu:
    - "12-24 month AI roadmap (Now / Next / Later)"
    - "AI OKRs per period"
    - "AI governance framework (roles, bodies, processes)"
    - "AI talent recruitment / upskilling plan"
    - "Target data architecture (if applicable)"
  duree_estimee: "15 min"
  execution: "sequential after STEP-02"
```

### STEP-04 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Adoption plan and change management"
  input:
    - "AI roadmap (STEP-03)"
    - "Impacted populations and maturity levels"
    - "Anticipated resistance"
  output_attendu:
    - "ADKAR assessment per population (executive committee / managers / operational)"
    - "12-month communication plan"
    - "Resistance management strategy"
    - "AI champions network (identification + activation)"
    - "Adoption KPIs with measurable milestones"
  duree_estimee: "10 min"
  execution: "sequential after STEP-03"
```

### STEP-05 — FORMATEUR-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-FORMATEUR-IA"
  role: "AI training plan and upskilling"
  input:
    - "AI roadmap (STEP-03)"
    - "Profiles to train (executive committee / managers / users / tech)"
    - "Available training budget"
  output_attendu:
    - "Training catalog: tracks per profile (4 levels)"
    - "Recommended format: in-person / e-learning / workshop"
    - "Training quick wins (2-4 weeks)"
    - "Acquired-skills evaluation plan"
  duree_estimee: "10 min"
  execution: "sequential after STEP-04"
```

### STEP-07 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-07"
  agent: "AGENT-REDACTEUR-IA"
  role: "Writing of the final client deliverables"
  input:
    - "All outputs from STEP-01 to STEP-06"
    - "Tone and format expected by the client"
    - "Confidentiality constraints"
  output_attendu:
    - "Executive summary (1 page): context / stakes / recommendations / ROI"
    - "Full consulting report (15-30 pages)"
    - "Executive-committee presentation (10-15 slides)"
    - "Technical appendices if applicable"
  duree_estimee: "15 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-004 CHECKLIST
──────────────────────────────────────────────────────
□ AI maturity audit report (score + SWOT + top 5 use cases)
□ ROI business cases per priority lever
□ 12-24 month strategic AI roadmap (Now/Next/Later)
□ AI governance framework (roles + bodies)
□ ADKAR plan per population + resistance strategy
□ Training plan per profile (4 levels)
□ [optional] GDPR / AI Act compliance report
□ Executive summary (1 page)
□ Full consulting report (15-30 pages)
□ Executive-committee presentation (10-15 slides)
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-004 from workflows/WF-004-mission-conseil-ia.md.

Engagement context:
- Client: [to fill in]
- Scope: [to fill in]
- Stakeholders: [to fill in]
- Expected deliverables: [to fill in]

Launch STEP-01 with AGENT-CONSULTANT-IA.
```
