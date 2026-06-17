# Output — WF-002 — Delivery SAFe PI-01 · Prévalistest Assurances

> Source brief: `../briefs/WF-002-brief-assurance-pi01.md`
> Execution date: 2026-05-27
> Model used: claude-opus-4-7
> Agents activated: ORCHESTRATEUR-WORKFLOW · PRODUCT-MANAGER-SAFE · RELEASE-TRAIN-ENGINEER
> Run status: STEP-01 ✅ · STEP-02 ✅ · STEP-03 to STEP-06 upcoming

---

## STEP-01 — PRODUCT-MANAGER-SAFE · Program Vision

### WSJF recompute — official SAFe method (POPM 6)

Each column estimated **independently**, the smallest Feature = **1**, Fibonacci spread (1·2·3·5·8·13·20).

**Column 1 — User-Business Value (BV)**

| Feature | Score | Relative justification |
|---------|-------|------------------------|
| FEAT-E AS/400 | 1 | No direct user value (technical plumbing) |
| FEAT-C Notification | 3 | UX comfort, reduces support calls |
| FEAT-B Upload | 5 | Complete cases — real operational value |
| FEAT-D Compliance | 8 | Unblocks the commercial launch + avoids penalties |
| FEAT-A AI journey | 13 | Core of the value proposition (abandonment 67%→<20%) |

**Column 2 — Time Criticality (TC)**

| Feature | Score | Relative justification |
|---------|-------|------------------------|
| FEAT-C Notification | 1 | Deferrable post-MVP, slow decay |
| FEAT-B Upload | 3 | MVP-needed, some flexibility |
| FEAT-A AI journey | 5 | Targets MVP S6, but persistent value |
| FEAT-E AS/400 | 8 | On the critical path (blocks FEAT-A) |
| FEAT-D Compliance | 13 | Fixed-date legal gate — no launch without it |

**Column 3 — Risk Reduction / Opportunity Enablement (RR|OE)**

| Feature | Score | Relative justification |
|---------|-------|------------------------|
| FEAT-C Notification | 1 | Minimal risk reduction |
| FEAT-B Upload | 3 | Reduces incomplete-case risk |
| FEAT-A AI journey | 5 | Validates the product hypothesis, opens the channel |
| FEAT-D Compliance | 8 | Reduces legal risk (CNIL/AI Act penalties) |
| FEAT-E AS/400 | 13 | De-risks the PI's #1 risk + enables the MVP |

**Column 4 — Job Size (relative duration proxy)**

| Feature | Score | Relative justification |
|---------|-------|------------------------|
| FEAT-C Notification | 1 | Smallest — email/push + status API |
| FEAT-B Upload | 3 | Upload + compression + validation |
| FEAT-D Compliance | 5 | Consent modal + audit logs |
| FEAT-E AS/400 | 8 | Legacy integration + unknowns |
| FEAT-A AI journey | 13 | Biggest — AI engine + NLP + full UX |

### Consolidated WSJF table

```
WSJF = (BV + TC + RR|OE) / Job Size
```

| Rank | Feature | BV | TC | RR\|OE | CoD | Size | WSJF |
|------|---------|----|----|-------|-----|------|------|
| #1 | FEAT-D AI Act compliance | 8 | 13 | 8 | 29 | 5 | **5.8** |
| #2 | FEAT-C Status notification | 3 | 1 | 1 | 5 | 1 | **5.0** |
| #3 | FEAT-B Document upload | 5 | 3 | 3 | 11 | 3 | **3.7** |
| #4 | FEAT-E AS/400 Enabler | 1 | 8 | 13 | 22 | 8 | **2.8** |
| #5 | FEAT-A AI claim-filing journey | 13 | 5 | 5 | 23 | 13 | **1.8** |

### Reading (SAFe-compliant, no override)

- **FEAT-D #1** — small job + legal criticality + strong RR. Consistent.
- **FEAT-C #2** — low CoD but smallest Job Size (1) → *Weighted Shortest Job First* mechanics. Exact result, not corrected.
- **FEAT-A #5** — highest value but biggest job → SAFe answer = **split** (not override). Split done by PO-SAFE in STEP-03.
- **Dependencies ≠ WSJF** — sequencing handled on the Program Board (STEP-02).

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

### Benefit Hypothesis (Feature artifact — not LBC, reserved for Epics)

- **FEAT-D** — *If* native consent + AI logs, *then* AI Act compliance from the MVP. Measured by: 100% of AI suggestions logged · traceable consent.
- **FEAT-A** — *If* adaptive AI guidance, *then* abandonment <20% and completion >80%. Measured by: completion rate · filing time <10 min.

### Business Owners communication

> PI-01 first secures AI Act compliance (FEAT-D) — small effort, major legal stake. The structuring risk remains the AS/400 integration (Enabler FEAT-E), handled before the AI journey. The core Feature (FEAT-A) will be split to deliver an incremental Auto MVP from S6.

---

## STEP-02 — RELEASE-TRAIN-ENGINEER · PI Planning facilitation

### Sequencing principle

WSJF gives the value priority; the Program Board arbitrates the actual sequencing via the dependencies:
- FEAT-A depends on FEAT-E (AS/400 case data) → Enabler early despite WSJF #4
- FEAT-C depends on the filing flow → pushed to S4 despite WSJF #2
- FEAT-D depends on the DPO → external dependency to remove before S1

### Program Board PI-01

```
 PI-01 (10 wks)     S1          S2            S3 ◄MVP      S4           IP Sprint
                    (wk 1-2)    (wk 3-4)      (wk 5-6)     (wk 7-8)     (wk 9-10)
 ─────────────────────────────────────────────────────────────────────────────────
 Squad ALPHA        Spike NLP   FEAT-A1       FEAT-A1      FEAT-A2      Hardening
 (AI Filing & UX)   + FEAT-A1   Auto no       end + FEAT-B FEAT-C       + buffer
                    kickoff     3rd party     Upload       (Notif)      regression
                       │           │             ▲            ▲
                       │ (mock)    └──depends────┘            │
                       ▼                          (data)      │(status)
 Squad BETA         FEAT-D      FEAT-E         FEAT-E        System      I&A
 (Compl & Back-off) Consent +   AS/400         AS/400        Demo +      Workshop
                    AI Act logs integ. (1/2)   integ. (2/2)  exec prep
                       ▲           │              │
                  (DPO depend.)    └──delivers data──┘
 ─────────────────────────────────────────────────────────────────────────────────
 MVP (end S3)  = FEAT-D + FEAT-E + FEAT-A1 (Auto no 3rd party) + FEAT-B
 Post-MVP (S4) = FEAT-A2 (with 3rd party) + FEAT-C (notification)
```

> FEAT-A split → A1 (Auto no third party) / A2 (with third party + report) set for planning; formalized by PO-SAFE in STEP-03.

### Capacity vs load

| Squad | PI capacity (4 sprints) | Planned load | Margin |
|-------|------------------------|------------------|-------|
| Alpha | ~40 SP | A1+A2 (13) + B (5) + C (5) = 23 SP | ~17 SP (spikes + NLP uncertainty) |
| Beta | ~40 SP | D (8) + E (~8) = 16 SP | ~24 SP (AS/400 integration = large unknown) |

> Wide margin: PI-01 with no historical velocity + AS/400 risk → prudent commitment (first-PI SAFe uncertainty management).

### ROAM risks

| ID | Risk | Category | Action |
|----|--------|-----------|--------|
| R1 | AS/400 REST API unspecified / unavailable | O Owned | Legacy IT lead · weekly review · **PI risk #1** |
| R2 | NLP vendor contract unsigned | M Mitigated | Business-rules fallback + S1 spike · procurement escalation |
| R3 | DPO consent validation before S1 | O Owned | Beta PO secures the DPO sign-off before PI Planning |
| R4 | No historical velocity (PI-01) | A Accepted | Conservative commitment + documented IP buffer |
| R5 | Adaptive AI journey complexity (FEAT-A) | M Mitigated | A1/A2 split + NLP spike S1 |

### PI Planning agenda (2 days — SAFe format)

```
DAY 1
08:30 Business Vision (Prévalistest Business Owners)
09:00 Product Vision + Architecture (PM-SAFE + AI-Architect: AS/400, NLP)
10:00 WSJF Features presentation per squad (Alpha PO / Beta PO)
11:00 Squad breakouts — Iteration planning
17:00 Draft Plan Review
18:00 Management Review & Problem Solving (focus R1 AS/400)

DAY 2
08:30 Post-Management-Review adjustments
10:00 Final Plan Review
11:00 ROAM risks (review of the 5 risks)
12:00 Confidence vote
12:30 PI Objectives signed (→ produced in STEP-03)
```

### ART impediments to remove

1. AS/400 API specification not confirmed → escalate to Legacy IT Lead (blocks FEAT-E hence FEAT-A)
2. NLP contract pending procurement → escalate to procurement before S1
3. DPO availability for consent validation → book a pre-PI slot

### Confidence vote (simulated)

```
Squad Alpha : 4 · 4 · 3 · 4 · 4      → avg 3.8
Squad Beta  : 4 · 3 · 4 · 4          → avg 3.75
─────────────────────────────────────────────────
ART AVERAGE : 3.8  (target ≥ 3.5) ✅
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

**Squad ALPHA — AI Filing & UX**

| # | Objective (SMART) | Target BV | Status | Features |
|---|------------------|----------|--------|----------|
| A1 | Deliver the Auto journey **without third party** for the S3 MVP | 9 | Committed | FEAT-A1 |
| A2 | Integrate mobile document upload | 7 | Committed | FEAT-B |
| A3 | Extend to the journey **with third party** + report | 6 | Uncommitted | FEAT-A2 |
| A4 | Enable status notifications | 5 | Uncommitted | FEAT-C |

**Squad BETA — Compliance & Back-office**

| # | Objective (SMART) | Target BV | Status | Features |
|---|------------------|----------|--------|----------|
| B1 | Deliver AI consent + AI Act logs **from S1** | 10 | Committed | FEAT-D |
| B2 | Establish the AS/400 integration (case data) | 8 | Committed | FEAT-E |
| B3 | Prepare System Demo + executive-committee note | 4 | Uncommitted | — |

> Uncommitted = outside PI Predictability (AS/400 uncertainty management).

### Sprint 1 Backlog

**Squad BETA**

| US | Title | Type | SP |
|----|-------|------|----|
| US-B01 | AI consent screen before guidance | Story | 3 |
| US-B02 | Automatic logging of AI suggestions | Enabler Compliance | 3 |
| US-B03 | Spike: AS/400 REST API available? (3d) | Enabler Exploration | 3 |

**Squad ALPHA**

| US | Title | Type | SP |
|----|-------|------|----|
| US-A01 | Spike: adaptive NLP vs rules fallback (3d) | Enabler Exploration | 3 |
| US-A02 | Select the claim type (Auto/Home) | Story | 3 |
| US-A03 | Guided question journey — Auto no third party (mock) | Story | 5 |

> S1 load: Beta 9 SP · Alpha 11 SP · Enabler ratio ≈ 45% (initial S1 de-risking).

### Acceptance Criteria Gherkin (priority US)

```gherkin
# US-B01 — AI consent screen (FEAT-D · WSJF #1)
AC1 — Consent before any AI suggestion
  GIVEN a policyholder accesses the guided claim-filing journey
  WHEN the AI module is about to be activated
  THEN a consent screen is shown BEFORE any suggestion
  AND  two options: "Accept" / "File without AI"

# US-A02 — Claim-type selection (FEAT-A1)
AC1 — Type selection
  GIVEN a policyholder logged into their account
  WHEN they access the claim filing
  THEN they can choose "Auto" or "Home"
  AND  the matching journey is loaded
```

### Team risks (ROAM)

| Squad | Risk | Category | Action |
|-------|--------|-----------|--------|
| Beta | AS/400 API (spike US-B03) conditions FEAT-E | O Owned | S1 spike result = go/no-go |
| Alpha | NLP undecided (spike US-A01) | M Mitigated | Rules fallback if spike negative |

---

## STEP-04 — SCRUM-MASTER · Sprint Planning S1

> Stance: the SM **facilitates** and **coaches self-organization** — decisions produced by the Developers (Scrum Guide 2020).

### Sprint Goals (one per Scrum Team)

| Squad | Sprint Goal S1 (single) |
|-------|-------------------------|
| Alpha | Deliver the first steps of the guided Auto-no-third-party journey (type selection + questions in mock) |
| Beta | Deliver a demonstrable AI Act compliance foundation (consent + traceable logs) |

### Capacity (Developers' forecast)

> Focus factor ~80% = team convention (not a Scrum rule), to recalibrate after S1 velocity.

| Squad | Devs | Estimated capacity | S1 Forecast |
|-------|------|------------------|-------------|
| Alpha | 3 | ~12 SP | 11 SP (incl. 1 spike 3d) |
| Beta | 2 | ~10 SP | 9 SP (incl. 1 spike 3d) |

### Sprint Backlog (self-selected by the Developers, adjusted at the Daily)

**Alpha**: US-A01 NLP Spike (Enabler Exploration) · US-A02 Type selection (3) · US-A03 Mock journey (5)
**Beta**: US-B01 Consent (3) · US-B02 AI logs (Enabler Compliance, 3) · US-B03 AS/400 Spike (Enabler Exploration)

### Sprint impediments (no duplication with the PI ROAM)

| # | Operational impediment | SM action | ROAM ref. |
|---|-------------------------|-----------|-----------|
| I1 | AS/400 access/credentials for the spike | Escalate to Legacy IT Lead | instance of R1 |
| I2 | NLP sandbox API key | Escalate to Procurement | instance of R2 |
| I3 | DPO slot (consent wording) | Facilitate with Beta PO | — |
| I4 | Shared Alpha/Beta PO — availability | Coach refinement delegation | — |

### Definition of Done (reminder)

```
☐ Code reviewed + merged · ☐ Gherkin AC passing · ☐ AI Act logs + consent verified
☐ No critical security/GDPR defect · ☐ Demonstrable increment (System Demo)
☐ Spikes: decision note (no production code)
```

---

## STEP-05 — QA-AGILE · Sprint 1 Tests (shift-left, BDD)

> Tested scope = delivery stories only. Spikes US-A01/US-B03 excluded (Exploration Enablers).

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

### Sprint 1 test plan (in-sprint)

| US | Type | Mode | Priority |
|----|------|------|----------|
| US-B01 Consent | Acceptance (ATDD) + exploratory | Auto + manual | High (legal gate) |
| US-B02 AI logs | Compliance + integration | Auto | High (AI Act) |
| US-A02 Type selection | Acceptance | Auto | Medium |
| US-A03 Mock journey | Acceptance + exploratory | Auto + manual | Medium |

### Automation & regression strategy (ISTQB pyramid)

- E2E/Acceptance: Gherkin → Cucumber/Behave (critical journeys US-B01, US-A03)
- Integration: US-B02 logs + AS/400 connector (mock in S1)
- Unit: business logic (journey rules, consent validation)
- Regression: automated Gherkin suite in CI/CD from S1 (foundation)
- Manual/exploratory: adaptive AI questions (emergent behavior)
- Real AS/400 integration tests: conditioned on the US-B03 spike

---

## STEP-06 — CHEF-PROJET-IA · PI Dashboard & Executive-Committee Note

### Dashboard PI-01

```
PI status    : PLANNED · Confidence vote 3.8/5
Objectives   : 4 Committed + 3 Uncommitted
ART capacity : ~80 SP · Sprint 1 committed ~20 SP
Progress     : 0% (S1 not started — T0)
MVP target   : end of Sprint 3 (week 6)
Risks        : 5 ROAM · incl. R1 AS/400 (critical)
```

### EVM — Baseline (CPI/SPI N/A at T0, PMI-compliant)

| Element | Value |
|---------|--------|
| BAC | €150k |
| PV (curve) | S1≈30k · S2≈60k · S3≈95k (MVP) · S4≈130k · IP≈150k |
| EV / AC | 0 (no execution) |
| CPI = EV/AC | N/A — computable from end of S1 |
| SPI = EV/PV | N/A — computable from end of S1 |

> PMI-compliant: no performance index without actuals. CPI/SPI measured at each System Demo.

### RAG status per Feature

| Feature | RAG | Justification |
|---------|-----|---------------|
| FEAT-D Compliance | 🟢 | Clear scope, legal gate |
| FEAT-B Upload | 🟢 | Standard |
| FEAT-C Notification | 🟢 | Post-MVP, simple |
| FEAT-E AS/400 | 🟠 | Legacy dependency unconfirmed (R1) |
| FEAT-A AI journey | 🟠 | NLP undecided + large split (R5) |

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

## Evaluation

| Criterion | Score /5 | Comment |
|---------|---------|-------------|
| Deliverables completeness | 5 | 6 steps produced (STEP-01 to 06), all expected artifacts |
| SAFe / Agile quality | 5 | Compliant with the certifications, verified step by step after fixing the foundations |
| Reusability | 5 | WF-002 fixed (task #5) + wsjf.md source of truth corrected |
| Promoted to a use case? | **yes** | Promoted on 2026-05-27 → `../use_cases/WF-002-uc01-assurance-pi01.md` |

---

> **Full WF-002 run**: STEP-01 → STEP-06 · 6 orchestrated agents · model Opus 4.7 · 2026-05-27
> **Compliance**: WSJF recomputed at Feature level (official method) · single Sprint Goals · SM self-organization · EVM baseline with no fabricated CPI/SPI · Benefit Hypothesis (not LBC) at Feature level
> **Promotion decision**: ✅ promoted to `use_cases/WF-002-uc01-assurance-pi01.md` on 2026-05-27 (post-run batch #1-#5 completed, compliance verified step by step)
