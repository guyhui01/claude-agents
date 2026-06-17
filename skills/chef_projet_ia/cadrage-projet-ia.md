# Skill — AI Project Scoping
> Certifications: PMP (PMI 2026), PRINCE2 Practitioner, SAFe Product Owner/Product Manager, Anthropic Certified AI Professional 2026
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **PMBOK 7** (PMI 2021) · **PRINCE2 7** (PeopleCert/Axelos 2023) · **SMART** (Doran 1981) · **JTBD** (Christensen 2016) · **Mendelow matrix** (1991) · RACI · GDPR / AI Act 2024/1689 coupling

## Objective
Produce a complete, shared AI project charter — precise scope, mapped stakeholders, measurable acceptance criteria — to align all parties from kickoff.

## AI Project Charter — Full Template

### 1. Context & Business Problem

```
BUSINESS PROBLEM (job-to-be-done format)
────────────────────────────────────────
When [situation context]
We want [desired action/outcome]
So that [measurable business benefit]

Example:
When a sales rep receives an inbound lead,
we want to automatically score its propensity to convert
so that we prioritize sales actions and increase the conversion rate by 15%.
```

### 2. Stakeholder Matrix

| Stakeholder | Project role | Interest | Influence | Key expectations | Engagement mode |
|----------------|-------------|---------|-----------|---------------|----------------|
| CIO | Sponsor | High | High | ROI, security, GDPR compliance | Monthly Steering Committee |
| Chief Sales Officer | Primary client | High | High | Improved conversion rate | Bi-weekly demo |
| Data Science team | Delivery (build side) | High | Medium | Data access, ML env | Daily standup |
| DPO | Critical stakeholder | High | High | Compliance, data minimization | Sprint review |
| End users | Beneficiaries | Medium | Low | Simple tool, time savings | UX tests Sprint 3 |
| Legal counsel | Stakeholders | Low | Medium | AI vendor contracts | Ad hoc |

### 3. Scope — In / Out / Assumptions

```
IN SCOPE
✓ Propensity scoring model on existing leads (CRM)
✓ REST API integration with Salesforce
✓ Model performance monitoring dashboard
✓ User training (2 sessions)
✓ Technical and functional documentation

OUT OF SCOPE
✗ Salesforce CRM overhaul
✗ Product recommendation model (Phase 2)
✗ Integration with third-party marketing tools
✗ Model maintenance after 6 months (separate MSP contract)

ASSUMPTIONS
~ CRM data is available from 2022 (36 months)
~ The current conversion rate is 12% (measurable baseline)
~ The team has 2 Data Scientists available at 80%
~ The AWS cloud infrastructure is already in place
~ Budget approved at €180,000 incl. tax
```

### 4. SMART Acceptance Criteria

```yaml
# acceptance_criteria.yaml
acceptance_criteria:
  model_performance:
    - id: AC-01
      description: "AUC-ROC >= 0.85 on the holdout test set"
      measure: "sklearn.metrics.roc_auc_score"
      threshold: 0.85
      blocking: true

    - id: AC-02
      description: "Precision >= 0.75 for the 'Hot leads' segment (score > 0.8)"
      measure: "sklearn.metrics.precision_score"
      threshold: 0.75
      blocking: true

    - id: AC-03
      description: "API inference latency P99 <= 200ms"
      measure: "99th percentile of response times"
      threshold_ms: 200
      blocking: true

  business_impact:
    - id: AC-04
      description: "Conversion rate on 'Hot'-scored leads >= 20% (vs 12% baseline)"
      measure: "conversion rate 3 months post-deployment"
      threshold: 0.20
      blocking: false  # Measurable 3 months after go-live

  compliance:
    - id: AC-05
      description: "DPO has approved the DPIA (Data Protection Impact Assessment)"
      measure: "signed document"
      blocking: true

    - id: AC-06
      description: "Explainability: top 3 features available for each score"
      measure: "SHAP values exposed in the API"
      blocking: true

  operational:
    - id: AC-07
      description: "API availability >= 99.5% over a 30-day window"
      measure: "SLO monitoring"
      blocking: true

    - id: AC-08
      description: "Technical and user documentation delivered"
      measure: "review by executive management + CIO"
      blocking: true
```

### 5. Governance & Decision-Making

```
GOVERNANCE BODIES
─────────────────────────────────────────────────────────
Steering Committee     Monthly   CIO, Chief Sales Officer, PM
Sprint Review          Bi-weekly All stakeholders
Daily Standup          Daily     Project team
AI Ethics Committee    Sprint 2  DPO, Legal counsel, PM, DS Lead
Risk Review            Monthly   PM, Tech Lead, DPO

RACI MATRIX — KEY DECISIONS
─────────────────────────────────────────────────────────
ML model choice          R: Data Scientist  A: CIO
Go/No-Go to production   R: PM              A: Sponsor
Scope change             R: PM              A: Steering
Additional budget        R: Sponsor         A: Executive mgmt

R=Responsible A=Accountable C=Consulted I=Informed
```

### 6. Major Constraints & Risks

| # | Constraint/Risk | Probability | Impact | Mitigation |
|---|-----------------|-------------|--------|------------|
| R1 | Insufficient CRM data quality | High | Critical | Data audit from Sprint 1 |
| R2 | GDPR compliance — DPO delay | Medium | Critical | Launch DPIA in parallel |
| R3 | Key Data Scientist departure | Low | High | Continuous documentation |
| R4 | Model performance < threshold | Medium | High | Feature engineering Sprint 2 |
| R5 | Budget overrun | Low | Medium | Weekly EVM tracking |

## Deliverables
- Signed project charter (all stakeholders)
- Stakeholder matrix with engagement plan
- Prioritized initial backlog (at least 20 user stories)
- Acceptance criteria formalized in versioned YAML
- Governance schedule (calendar of bodies)
- DPIA / AI processing register (if personal data)

## Output format
Specify: industry, AI use case (NLP, ML, computer vision, LLM), available data volume, regulatory constraints (GDPR, AI Act), indicative budget, project duration, team (size, expertise), existing systems to integrate.

## Anti-patterns
- ❌ **Charter without measurable acceptance criteria**: "improve conversion" instead of a quantified, blocking SMART AC
- ❌ **Stakeholders mapped once then forgotten**: the matrix must be revised at every milestone
- ❌ **Scope without an explicit "out of scope"**: an open door to scope creep
- ❌ **No named sponsor (Accountable)**: Go/No-Go decisions without clear authority
- ❌ **Confusing Responsible and Accountable** in the RACI (only 1 A per decision)
- ❌ **Forgetting the compliance coupling** (GDPR DPIA / AI Act classification) from the scoping of an AI project

## Sources
- **PMBOK 7** — *A Guide to the Project Management Body of Knowledge* (PMI, 7th ed. 2021) — project charter, stakeholders
- **PRINCE2 7** — PeopleCert/Axelos (2023) — *Business Case* and *Organization*
- **Doran G.T.** — **SMART** objectives (*Management Review*, 1981)
- **Christensen C.M.** — *Competing Against Luck* (JTBD, HBR Press 2016)
- **Mendelow A.L.** — power/interest matrix (*Proc. ICIS*, Cambridge MA, 1991)

## See also
- [`gestion-risques-projet.md`](gestion-risques-projet.md) — RAID log (the charter's R1-R5 risks)
- [`planification-hybride.md`](planification-hybride.md) — WBS and schedule derived from the scope
- [`stakeholder-management.md`](stakeholder-management.md) — stakeholder engagement plan
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — budget tracking (BAC derived from scoping)
- [`../business_analyst/cadrage-projet.md`](../business_analyst/cadrage-projet.md) — MOA scoping note (V-model, complementary)
- [`../scrum/product-vision.md`](../scrum/product-vision.md) — upstream product vision
