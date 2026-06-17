# WF-002 — Use Case UC-01 — Delivery SAFe PI-01 · Insurance AI

> Workflow: `WF-002-delivery-safe.md`
> Sector: Insurance · Fictional client: Prévalistest Assurances
> Source brief: `../briefs/WF-002-brief-assurance-pi01.md`
> Continues from: `WF-001-uc01-sinistres-assurance-ia.md` (scoping → delivery)
> Simulated execution time: ~90 min · Model: Opus 4.7 · 6 orchestrated agents

---

## Client brief (workflow input)

```
ART          : AI Claims ART — Prévalistest Assurances
SECTOR       : P&C insurance (Auto, Home)
TEAMS        : 2 squads — Alpha (AI Filing & UX) · Beta (Compliance & Back-office)
PI           : PI-01 · 10 weeks · 4 sprints + IP Sprint · ~80 SP
FEATURES     : FEAT-A AI journey · FEAT-B Upload · FEAT-C Notification ·
               FEAT-D AI Act compliance · FEAT-E AS/400 Enabler
DEPENDENCIES : AS/400 REST API (legacy) · NLP vendor · DPO validation
CONSTRAINTS  : AI Act from the MVP · MVP end of S3 · budget €150k
LANGUAGE     : French
```

---

## STEP-01 — PRODUCT-MANAGER-SAFE · Program Vision

### WSJF prioritization (official SAFe POPM 6 method)

> **Relative** rating, **smallest = 1 per column**, independent columns, Fibonacci (1·2·3·5·8·13·20).

| Rank | Feature | BV | TC | RR\|OE | CoD | Size | WSJF |
|------|---------|----|----|-------|-----|------|------|
| #1 | FEAT-D AI Act compliance | 8 | 13 | 8 | 29 | 5 | **5.8** |
| #2 | FEAT-C Status notification | 3 | 1 | 1 | 5 | 1 | **5.0** |
| #3 | FEAT-B Document upload | 5 | 3 | 3 | 11 | 3 | **3.7** |
| #4 | FEAT-E AS/400 Enabler | 1 | 8 | 13 | 22 | 8 | **2.8** |
| #5 | FEAT-A AI claim-filing journey | 13 | 5 | 5 | 23 | 13 | **1.8** |

- **FEAT-D #1**: small job + legal criticality + strong RR.
- **FEAT-C #2**: smallest Job Size (1) → *Weighted Shortest Job First* mechanics.
- **FEAT-A #5**: highest value but biggest job → SAFe answer = **split** (not override), done in STEP-03.
- **Dependencies ≠ WSJF**: sequencing is handled on the Program Board (STEP-02).

### PI-01 Vision

```
FOR          P&C policyholders filing a claim
WHO          abandon the web form (67%) for lack of guidance
THE          AI-assisted claim-filing journey
IS AN        AI Act-compliant conversational assistant
THAT         reduces abandonment to <20% and the time to <48h
UNLIKE       the 47-field form with no help
OUR SOLUTION builds AI compliance in from the design stage
```

### Benefit Hypothesis (Feature artifact — LBC reserved for Epics)

- **FEAT-D** — *If* native consent + AI logs, *then* AI Act compliance from the MVP. Measured by: 100% of AI suggestions logged · traceable consent.
- **FEAT-A** — *If* adaptive AI guidance, *then* abandonment <20% and completion >80%. Measured by: completion rate · filing time <10 min.

---

## STEP-02 — RELEASE-TRAIN-ENGINEER · PI Planning

> WSJF gives the value priority; the Program Board arbitrates the actual sequencing via the dependencies.

### Program Board PI-01

```
 PI-01 (10 wks)     S1          S2            S3 ◄MVP      S4           IP Sprint
 ─────────────────────────────────────────────────────────────────────────────────
 Squad ALPHA        Spike NLP   FEAT-A1       FEAT-A1      FEAT-A2      Hardening
 (AI Filing & UX)   + FEAT-A1   Auto no       end + FEAT-B FEAT-C       + buffer
                    kickoff     3rd party     Upload       (Notif)
                       │ (mock)    └──depends─────┘ (data)     │(status)
 Squad BETA         FEAT-D      FEAT-E         FEAT-E        System      I&A
 (Compl & Back-off) Consent +   AS/400         AS/400        Demo +      Workshop
                    AI Act logs integ. (1/2)   integ. (2/2)  exec prep
                  (DPO depend.)    └──delivers data──┘
 ─────────────────────────────────────────────────────────────────────────────────
 MVP (end S3)  = FEAT-D + FEAT-E + FEAT-A1 (Auto no 3rd party) + FEAT-B
 Post-MVP (S4) = FEAT-A2 (with 3rd party) + FEAT-C (notification)
```

### ROAM risks

| ID | Risk | Category | Action |
|----|--------|-----------|--------|
| R1 | AS/400 REST API unspecified / unavailable | O Owned | Legacy IT lead · **PI risk #1** |
| R2 | NLP vendor contract unsigned | M Mitigated | Rules fallback + S1 spike |
| R3 | DPO consent validation before S1 | O Owned | Beta PO secures the sign-off |
| R4 | No historical velocity (PI-01) | A Accepted | Conservative commitment + IP buffer |
| R5 | Adaptive AI journey complexity | M Mitigated | A1/A2 split + NLP spike |

### Confidence vote

```
Squad Alpha 3.8 · Squad Beta 3.75 → ART AVERAGE: 3.8 (target ≥ 3.5) ✅
```

---

## STEP-03 — PO-SAFE · PI Objectives & Sprint 1 Backlog

### Official FEAT-A split (SPIDR — Rules + Spike)

```
FEAT-A "AI-guided claim-filing journey" (13 — too big for 1 sprint)
   ├── Enabler Spike: adaptive NLP engine vs rules fallback
   ├── Slice A1 — Auto WITHOUT third party (simple rule)   → MVP S3
   └── Slice A2 — Auto WITH third party + report (complex rule) → S4
```

### PI Objectives per squad (committed / uncommitted)

| Squad | # | Objective (SMART) | BV | Status | Feature |
|-------|---|------------------|----|--------|---------|
| Alpha | A1 | Auto journey **without third party** for the S3 MVP | 9 | Committed | FEAT-A1 |
| Alpha | A2 | Mobile document upload | 7 | Committed | FEAT-B |
| Alpha | A3 | Journey **with third party** + report | 6 | Uncommitted | FEAT-A2 |
| Alpha | A4 | Status notifications | 5 | Uncommitted | FEAT-C |
| Beta | B1 | AI consent + AI Act logs **from S1** | 10 | Committed | FEAT-D |
| Beta | B2 | AS/400 integration (case data) | 8 | Committed | FEAT-E |
| Beta | B3 | System Demo + executive-committee note | 4 | Uncommitted | — |

> Uncommitted = outside PI Predictability (managing the AS/400 uncertainty).

### Sprint 1 Backlog

| Squad | US | Title | Type | SP |
|-------|----|-------|------|----|
| Beta | US-B01 | AI consent screen | Story | 3 |
| Beta | US-B02 | Automatic logging of AI suggestions | Enabler Compliance | 3 |
| Beta | US-B03 | AS/400 REST API spike (3d) | Enabler Exploration | 3 |
| Alpha | US-A01 | Adaptive NLP vs rules spike (3d) | Enabler Exploration | 3 |
| Alpha | US-A02 | Claim-type selection | Story | 3 |
| Alpha | US-A03 | Auto question journey no third party (mock) | Story | 5 |

---

## STEP-04 — SCRUM-MASTER · Sprint Planning S1

> Stance: the SM **facilitates** and **coaches self-organization** — decisions produced by the Developers (Scrum Guide 2020).

### Sprint Goals (one per Scrum Team)

| Squad | Sprint Goal S1 |
|-------|----------------|
| Alpha | Deliver the first steps of the guided Auto-no-third-party journey (type selection + questions in mock) |
| Beta | Deliver a demonstrable AI Act compliance foundation (consent + traceable logs) |

### Capacity (Developers' forecast)

| Squad | Devs | Estimated capacity | S1 Forecast |
|-------|------|------------------|-------------|
| Alpha | 3 | ~12 SP | 11 SP (incl. 1 spike 3d) |
| Beta | 2 | ~10 SP | 9 SP (incl. 1 spike 3d) |

> Sprint Backlog self-selected by the Developers, allocation adjusted at the Daily Scrum.

### Definition of Done

```
☐ Code reviewed + merged · ☐ Gherkin AC passing · ☐ AI Act logs + consent verified
☐ No critical security/GDPR defect · ☐ Demonstrable increment (System Demo)
☐ Spikes: decision note (no production code)
```

---

## STEP-05 — QA-AGILE · Sprint 1 Tests (shift-left, BDD)

> Tested scope = delivery stories only (spikes excluded).

### BDD/Gherkin scenarios (nominal + error + boundary)

```gherkin
# US-B01 — AI consent screen (FEAT-D)
Nominal: consent granted → AI guidance + timestamped event
Alternative: refusal → standard form, no data sent to AI
Boundary: closed without a choice → no consent, AI inactive

# US-B02 — AI suggestion logging (Enabler Compliance)
Nominal: log {timestamp, hash, type, model, version} on each suggestion
Boundary: consent refused → no AI log

# US-A03 — Auto journey no third party (FEAT-A1)
Nominal: "No" to third party → third-party fields hidden, progress OK
Error: required answer missing → blocked + message
```

### Automation & regression strategy (ISTQB pyramid)

- E2E/Acceptance: Gherkin → Cucumber/Behave (critical journeys)
- Integration: logs + AS/400 connector (mock in S1)
- Unit: business logic (journey rules, consent validation)
- Regression: automated Gherkin suite in CI/CD from S1
- Manual/exploratory: adaptive AI questions (emergent behavior)

---

## STEP-06 — CHEF-PROJET-IA · PI Dashboard & Executive-Committee Note

### EVM — Baseline (CPI/SPI N/A at T0, PMI-compliant)

| Element | Value |
|---------|--------|
| BAC | €150k |
| PV (curve) | S1≈30k · S2≈60k · S3≈95k (MVP) · S4≈130k · IP≈150k |
| CPI / SPI | N/A at T0 — no actuals · computed from the S1 System Demo |

### Executive-committee note (1 page)

```
STATUS   : PI-01 planned. ART vote 3.8/5. Auto MVP targeted S6. AI Act compliance from S1.
RISKS    : R1 AS/400 (blocks FEAT-A) · R2 NLP contract · R3 DPO validation
EXEC-COMMITTEE DECISIONS:
  1. Unblock AS/400 API access/spec (legacy IT) — URGENT
  2. Validate and sign the NLP contract
  3. Confirm the PI-01 budget (€150k)
  4. Arbitrate the fallback scope if AS/400 slips > S2
MVP KPIs : abandonment <20% · time <48h · completion >80%
NEXT MILESTONE : S1 System Demo → first CPI/SPI computation
```

---

## WF-002 final deliverables — Checklist

```
✅ PI-01 Vision + Top 5 WSJF-prioritized Features (official method)
✅ Benefit Hypothesis of the major Features
✅ Program Board with cross dependencies + 5 ROAM risks
✅ ART confidence vote (3.8/5)
✅ PI Objectives per squad (4 committed / 3 uncommitted)
✅ FEAT-A split (SPIDR) + Sprint 1 backlog (labeled Enablers)
✅ Gherkin scenarios (nominal/error/boundary) + test strategy
✅ PI dashboard + EVM baseline + executive-committee note (required decisions)
```

---

## Execution summary

| Indicator | Value |
|-----------|--------|
| Simulated duration | ~90 min |
| Orchestrated agents | 6 (PM-SAFE · RTE · PO-SAFE · SM · QA-AGILE · CHEF-PROJET-IA) |
| Model | Opus 4.7 (dense workflow, SAFe orchestration) |
| Prioritized features | 5 (official WSJF method) |
| PI Objectives | 7 (4 committed · 3 uncommitted) |
| Sprint 1 Backlog | 6 US (2 spikes · 1 compliance · 3 stories) |
| Compliance | Feature-level relative WSJF · single Sprint Goals · SM self-organization · EVM with no fabricated CPI/SPI · Benefit Hypothesis (not LBC) |
| Key value demonstrated | WF-001 scoping → full PI delivery · AI Act compliance WSJF-prioritized from S1 · uncertainty management (AS/400, NLP) built in |

---

*Fictional use case · WF-002 v1.1 · Generated with Claude Code · 2026-05-27*
