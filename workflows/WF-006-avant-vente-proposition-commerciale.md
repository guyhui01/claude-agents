# WF-006 — Pre-sales / Commercial proposal

> RFP received → qualification → scoping → architecture → schedule → costing → commercial proposal
> Certifications mobilized: PMP · CBAP · TOGAF 10 · CFA · CAP IABAC · Anthropic Claude Code in Action

---

## Identity card

```yaml
id: "WF-006"
nom: "Avant-vente / Proposition commerciale"
domaine: "Management & Consulting"
declencheur: "RFP / tender / request for proposal received from a prospect"
resultat_final: "Complete technical-commercial proposal: scope, architecture, schedule, person-day costing, price, prospect ROI"
duree_estimee: "75-120 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Strategic workflow with high commercial stakes: GO/NO-GO qualification, target architecture, person-day costing, pricing, prospect ROI. The quality of the reasoning and of the multi-dimensional synthesis drives the commercial win rate. Opus 4.8 recommended for proposals aimed at CAC40 / GAFA / unicorn clients."
modele_alternatif: "claude-sonnet-4-6"  # for simple quote requests (short fixed price, framed scope, < 20 person-days)
agents_core:
  - CONSULTANT-IA        # client-need qualification + GO/NO-GO grid
  - BUSINESS-ANALYST     # functional scoping, target use cases, requirements
  - AI-ARCHITECT         # target technical architecture, stack, trade-offs
  - CHEF-PROJET-IA       # schedule, work packaging, resources, milestones
  - FINANCIAL-ANALYST    # person-day costing, price, prospect ROI, margin
  - REDACTEUR-IA         # writing of the final commercial proposal
agents_optionnels:
  - JURIDIQUE-IA         # if AI Act / GDPR contractual clauses are to be included
  - VEILLE-STRATEGIQUE   # if competitive positioning is required
  - PROMPT-ENGINEER      # if an LLM PoC / prompt-engineering is to be costed in the proposal
statut: "disponible"
version: "1.0"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | CONSULTANT-IA | Need qualification + GO/NO-GO decision | Qualification sheet + verdict |
| 2 | BUSINESS-ANALYST | Functional scoping and requirements | Scoping note + use cases |
| 3 | AI-ARCHITECT | Target technical architecture and stack | Architecture diagram + trade-offs |
| 4 | CHEF-PROJET-IA | Schedule, work packaging and resources | Macro-schedule + WBS |
| 5 | FINANCIAL-ANALYST | Person-day costing, price, prospect ROI | Costing grid + price table |
| 6 | REDACTEUR-IA | Writing of the final commercial proposal | Proposal PDF + executive summary |
| opt | JURIDIQUE-IA | AI Act / GDPR contractual clauses | Legal appendix |
| opt | VEILLE-STRATEGIQUE | Competitive positioning | Shortlisted-competitor benchmark |
| opt | PROMPT-ENGINEER | LLM PoC / prompt-engineering costing | PoC estimate + technical deliverables |

---

## Contextual parameters

```
PRE-SALES CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Prospect            : [Name / Sector / Size / AI maturity]
Request type        : [Formal RFP / Direct solicitation / Referral / Competition]
Requested scope     : [Scoping / PoC / Build / AMS / Consulting engagement / Full]
Indicative budget   : [Estimated range / Not disclosed]
Response deadline    : [RFP deadline — ISO 8601]
Competition         : [Firms competing / Sole source]
Decision-makers     : [CIO / CDO / Business / Procurement]
Selection criteria  : [Price / Expertise / Reference / Deadline / CSR]
Constraints         : [On-premise / Sovereign cloud / SecNumCloud / HDS]
Proposal format     : [PDF / Oral presentation / Demo / Written Q&A]
Known risks         : [Aggressive competition, floor price, hidden requirements]
```

---

## BPMN flow diagram

```
(START — RFP received / qualified opportunity)
        │
        ▼
[STEP-01 — CONSULTANT-IA]
  Need qualification,
  BANT grid (Budget/Authority/Need/Timeline),
  reasoned GO/NO-GO decision
        │
        ▼
<GATEWAY — GO on the proposal?>
  ├── NO ───▶ (END — Documented NO-BID decision)
  └── YES ──▶ continue
        │
        ▼
[STEP-02 — BUSINESS-ANALYST]
  Functional scoping,
  target use cases,
  functional & non-functional requirements
        │
        ▼
═══════════════════════════════════
  PARALLEL FORK
═══════════════════════════════════
  ├── [STEP-03A — AI-ARCHITECT]
  │    Target architecture, stack,
  │    make vs. buy trade-offs
  │
  └── [STEP-03B — VEILLE-STRATEGIQUE] (optional)
       Competitive positioning,
       market-price benchmark
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
[STEP-04 — CHEF-PROJET-IA]
  Macro-schedule, work packaging,
  WBS, resources, milestones,
  assumptions & constraints
        │
        ▼
[STEP-05 — FINANCIAL-ANALYST]
  Person-day costing per profile,
  price grid,
  prospect ROI,
  commercial scenarios
        │
        ▼
<GATEWAY — AI Act / GDPR contractual clauses?>
  ├── YES ──▶ [STEP-06 — JURIDIQUE-IA]
  │            Compliance contractual appendix
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-07 — REDACTEUR-IA]
  Final commercial proposal,
  1-page executive summary,
  pitch deck if oral
        │
        ▼
(END — Proposal sent to the prospect)
```

---

## Detailed steps

### STEP-01 — CONSULTANT-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CONSULTANT-IA"
  role: "Need qualification and GO/NO-GO decision"
  input:
    - "RFP / requirements / commercial brief"
    - "Prospect context: sector, size, AI maturity, history"
    - "Available internal capabilities (skills, resources, timeline)"
  output_attendu:
    - "BANT qualification sheet (Budget / Authority / Need / Timeline)"
    - "Opportunity scoring (win probability 0-100%)"
    - "Mapping of commercial and technical risks"
    - "Identification of the sponsor and the client's decision path"
    - "Reasoned verdict: GO / NO-GO / conditional GO"
  condition_passage: "GO validated by the user before scoping"
  duree_estimee: "15 min"
  execution: "sequential — opens the workflow"
```

### STEP-02 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Functional scoping and requirements"
  input:
    - "RFP and qualification sheet (STEP-01)"
    - "Targeted business use cases"
    - "Regulatory and organizational constraints"
  output_attendu:
    - "Scoping note: clearly bounded IN / OUT scope"
    - "Mapping of the priority use cases"
    - "Structured functional requirements (MoSCoW)"
    - "Non-functional requirements (performance, security, scalability)"
    - "List of assumptions and uncertainty areas to clear"
  duree_estimee: "15 min"
  execution: "sequential after STEP-01"
```

### STEP-03A — AI-ARCHITECT

```yaml
etape:
  id: "STEP-03A"
  agent: "AGENT-AI-ARCHITECT"
  role: "Target technical architecture"
  input:
    - "Scoping note and requirements (STEP-02)"
    - "Prospect infra constraints (cloud, on-premise, SecNumCloud, HDS)"
    - "Prospect's existing IS (to integrate)"
  output_attendu:
    - "Target architecture diagram (Mermaid or structured text)"
    - "Recommended stack: LLM, RAG, agents, MCP, observability"
    - "Make vs. buy trade-offs per component"
    - "Monthly operating-cost estimate (LLM tokens, infra)"
    - "Architecture risks and mitigation plan"
  duree_estimee: "20 min"
  execution: "parallel with STEP-03B if benchmark required"
```

### STEP-03B — VEILLE-STRATEGIQUE (optional)

```yaml
etape:
  id: "STEP-03B"
  agent: "AGENT-VEILLE-STRATEGIQUE"
  role: "Competitive positioning"
  input:
    - "List of identified competing firms (STEP-01)"
    - "Prospect's industry"
    - "Reference market price for this type of engagement"
  output_attendu:
    - "Competitor benchmark: strengths / weaknesses / price positioning"
    - "Differentiators to highlight in the proposal"
    - "Anti-competition arguments per firm"
    - "Pricing recommendation positioned vs. the market"
  duree_estimee: "15 min"
  execution: "parallel with STEP-03A if enabled"
```

### STEP-04 — CHEF-PROJET-IA

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-CHEF-PROJET-IA"
  role: "Schedule, work packaging and resources"
  input:
    - "Target architecture (STEP-03A)"
    - "MoSCoW requirements (STEP-02)"
    - "Prospect deadline and resource availability"
  output_attendu:
    - "Detailed WBS (Work Breakdown Structure) per work package"
    - "Macro Gantt schedule with key milestones"
    - "Person-day estimate per package and per profile (PO, AI Architect, Dev, Data, MLOps)"
    - "Resource workload plan over the project duration"
    - "Assumptions, dependencies, calendar constraints"
  duree_estimee: "15 min"
  execution: "sequential after STEP-03 JOIN"
```

### STEP-05 — FINANCIAL-ANALYST

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Costing and commercial pricing"
  input:
    - "Person-day estimate per profile (STEP-04)"
    - "Day rate per profile (internal reference)"
    - "Margin target and commercial strategy (penetration / premium price)"
    - "Market-price benchmark (STEP-03B if enabled)"
  output_attendu:
    - "Detailed costing grid (person-days × day rate per profile)"
    - "Proposed selling price + computed margin"
    - "Commercial scenarios: fixed price / time-and-materials / outcome / hybrid"
    - "Estimated prospect ROI (business gain vs. engagement cost)"
    - "Financial terms: billing arrangements, payment schedule"
  duree_estimee: "15 min"
  execution: "sequential after STEP-04"
```

### STEP-06 — JURIDIQUE-IA (optional)

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-JURIDIQUE-IA"
  role: "AI Act / GDPR compliance contractual appendix"
  input:
    - "Target architecture and data processed (STEP-03A)"
    - "Use cases and applicable AI Act tier"
    - "Prospect contractual constraints (GDPR, processing, intellectual property)"
  output_attendu:
    - "Contractual appendix with AI Act clauses (risk tier, transparency, monitoring)"
    - "GDPR clauses: DPA, processing, transfers outside the EU"
    - "Intellectual-property clauses (fine-tuned models, prompts, data)"
    - "Service-level commitments (SLA) and liability"
  duree_estimee: "15 min"
  execution: "conditional — if AI Act / GDPR clauses are required"
```

### STEP-07 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-07"
  agent: "AGENT-REDACTEUR-IA"
  role: "Writing of the final commercial proposal"
  input:
    - "All outputs from STEP-01 to STEP-06"
    - "Brand guidelines and proposal template (internal reference)"
    - "Tone and level of formality expected by the prospect"
  output_attendu:
    - "1-page executive summary (context / value / price / schedule)"
    - "Complete commercial proposal (20-40 pages)"
    - "Pitch deck (10-15 slides) if an oral defense is planned"
    - "Anticipated Q&A and prepared answers"
    - "Appendices: similar references, consultant CVs, methodology"
  duree_estimee: "20 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-006 CHECKLIST
──────────────────────────────────────────────────────
□ BANT qualification sheet + GO/NO-GO verdict
□ Scoping note with IN / OUT scope
□ Priority use cases + MoSCoW requirements
□ Target architecture diagram + recommended stack
□ [optional] Competitive benchmark + price positioning
□ WBS + macro-schedule + person-day estimate per profile
□ Costing grid + selling price + prospect ROI
□ Commercial scenarios (fixed price / T&M / hybrid)
□ [optional] AI Act / GDPR contractual appendix
□ 1-page executive summary
□ Complete commercial proposal (20-40 pages)
□ Pitch deck if oral defense
□ Anticipated Q&A
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-006 from workflows/WF-006-avant-vente-proposition-commerciale.md.

Pre-sales context:
- Prospect: [to fill in]
- Request type: [RFP / Solicitation / Referral]
- Scope: [to fill in]
- Indicative budget: [to fill in]
- Response deadline: [to fill in]
- Decision-makers: [to fill in]

Launch STEP-01 with AGENT-CONSULTANT-IA.
```
