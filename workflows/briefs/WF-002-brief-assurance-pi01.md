# Brief — WF-002 — Delivery SAFe PI-01 · Prévalistest Assurances

> Workflow: `WF-002-delivery-safe.md`
> Sector: Insurance · Fictional client: Prévalistest Assurances
> Continues from: `workflows/use_cases/WF-001-uc01-sinistres-assurance-ia.md`

---

## Launch command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-002 from workflows/WF-002-delivery-safe.md.

ART CONTEXT
──────────────────────────────────────────────────
ART name           : AI Claims ART — Prévalistest Assurances
Sector             : P&C insurance (Auto, Home)
Number of teams    : 2 Scrum squads
                     - Squad Alpha: AI Claim Filing & UX (3 dev · 1 PO · 1 SM)
                     - Squad Beta : Compliance & Back-office (2 dev · 1 shared PO · 1 SM)
PI duration        : 10 weeks — 4 sprints of 2 weeks + IP Sprint
Current PI number  : PI-01
ART capacity       : ~80 story points / PI (40 SP/squad)
Historical velocity: No history — PI-01 (first delivery)

Features to plan (from the WF-001 scoping):
  - FEAT-A : Guided AI claim-filing journey (EP-01 — WSJF 2.0 — 13 SP)
  - FEAT-B : Document upload and management (EP-02 — WSJF 3.2 — 5 SP)
  - FEAT-C : Case status notification (EP-03 — WSJF 3.3 — 5 SP)
  - FEAT-D : GDPR consent + AI Act log (EP-04 — WSJF 6.8 — 8 SP)
  - FEAT-E : Legacy AS/400 IS integration (Enabler — architecture)

Dependencies       : - Legacy AS/400 IS REST API (to confirm with the legacy IT team)
                     - NLP vendor (adaptive-question engine) — contract to sign
                     - Prévalistest DPO (GDPR consent validation before sprint 1)

Constraints        : - AI Act Article 6: consent + AI logs mandatory from the MVP
                     - MVP delivery: end of Sprint 3 (week 6)
                     - PI-01 budget: €150k (team + cloud infra)
                     - Code freeze prohibited before the Sprint 2 System Demo

Deliverables language : French

Launch STEP-01 with AGENT-PRODUCT-MANAGER-SAFE.
```

---

## Client context

A direct follow-up to the WF-001 scoping. Prévalistest Assurances has validated the initial backlog (10 US · 4 Epics · WSJF computed). The team moves into SAFe delivery mode for PI-01 with 2 squads. The main stake is to deliver AI Act compliance (FEAT-D, WSJF #1) as early as Sprint 1 and the AI claim-filing journey (FEAT-A) for the Sprint 3 MVP.

---

## Test objective

Validate that WF-002 produces:
- A PI Planning consistent with the features from WF-001
- A Program Board with visible AS/400 and NLP dependencies
- SMART PI Objectives per squad
- Executive-committee reporting suited to the regional-mutual context
- ROAM risk management on the legacy-IS dependency

---

## Status

- [x] Brief written
- [ ] Workflow executed
- [ ] Output evaluated
- [ ] Promoted to a use case? [yes/no]
