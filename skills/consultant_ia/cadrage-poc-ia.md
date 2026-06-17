# Skill — Scoping an AI PoC
> Certifications: CAP IABAC · PMI-ACP · AWS CCP · Anthropic Claude Code in Action

## Objective
Define and scope an AI Proof of Concept so as to **quickly validate or invalidate a value hypothesis** while limiting costs and risks — and avoid the "PoC graveyard" (stacked PoCs, none in production). Gartner predicts that **≥ 30% of generative-AI projects will be abandoned after the PoC by end of 2025**, mainly due to insufficient data quality, inadequate risk controls, uncontrolled costs, or unclear business value (Gartner, July 29, 2024 release). Rigorous scoping directly tackles these four causes.

## Methodological framework
Scoping an AI PoC combines three complementary frameworks:
- **CRISP-DM 1.0** (NCR / SPSS / DaimlerChrysler consortium, 2000) — a 6-phase cycle (business understanding → data understanding → preparation → modeling → evaluation → deployment), iterative and business-goal-oriented. The PoC covers the first 5 phases.
- **Lean Startup** (Eric Ries, *The Lean Startup*, 2011) — *Build-Measure-Learn* logic: a PoC is an **experiment to test a hypothesis**, not a mini-production. You seek *validated learning* at the lowest cost.
- **Google ML Test Score** (Breck, Cai, Nielsen, Salib, Sculley — IEEE Big Data, 2017) — a 28-test rubric on *production-readiness* (data, training, serving, monitoring). Useful to judge whether a successful PoC is truly industrializable.

## PoC ≠ Pilot ≠ MVP
A structuring distinction, often confused (a source of poorly scoped perimeter):
| Stage | Objective | Scope | Question answered |
|---|---|---|---|
| **PoC** | Prove the feasibility + value of a hypothesis | Narrow (1 use case, sample data, outside production) | "**Can** it work?" |
| **Pilot** | Validate in limited real conditions | 1 team / 1 site, real data, controlled environment | "Does it work **for us**?" |
| **MVP** | First value version delivered in production | Minimal but complete scope, real users | "Does it create value **continuously**?" |

> ⚠️ Never sell a PoC as an MVP: the PoC has neither the robustness, the monitoring, nor the security of a production deployment.

## Definition of a successful AI PoC
An AI PoC validates **3 hypotheses**:
1. **Technical feasibility**: the data exists in sufficient quantity/quality, the model reaches the defined performance threshold.
2. **Business value**: the AI genuinely improves the target process (measurable gain vs current baseline).
3. **Acceptability**: users adopt the tool (adoption, NPS, trust).

> A PoC that proves feasibility but not value, or the reverse, is a **disguised failure**: you need all three.

## AI PoC scoping sheet
```
PoC TITLE         : [Descriptive name of the solution]
USE CASE          : [Targeted business process]
PROBLEM SOLVED    : [Quantified pain point — figured baseline]
HYPOTHESIS TESTED : [What the PoC must prove, stated as a falsifiable hypothesis]

SCOPE
  Included        : [What the PoC covers]
  Excluded        : [What is NOT tested — explicit]
  Data            : [Source, volume, quality, usage rights / GDPR]

SUCCESS CRITERIA (defined BEFORE starting)
  Go KPI          : [Validation threshold — SMART]
  No-Go KPI       : [Abandon threshold]

TEAM
  Sponsor         : [Decision-maker accountable for the budget]
  Product Owner   : [Product owner]
  Tech Lead       : [Technical lead]
  Business        : [Functional expert + pilot users]

SCHEDULE
  Duration        : [indicative 4-10 weeks — calibrate to data/complexity]
  Key deliverables: [Intermediate milestones]
  Budget          : [PoC envelope + 30% contingency]

COMPLIANCE        : [AI Act risk tier · GDPR legal basis · sensitive data?]
POST-PoC DECISION : Go / No-Go / Pivot
```

## AI PoC steps (aligned with CRISP-DM)
```
W1-W2 : Business + data understanding — scoping, data audit, figured baseline
W3-W4 : Data preparation + modeling (technical prototype)
W5-W6 : Evaluation + tests with pilot users
W7    : KPI measurement vs Go/No-Go criteria + extrapolated business case
W8    : Go / No-Go / Pivot decision + industrialization recommendation
```
> **Indicative** durations: a PoC on clean, available data fits in 4-6 weeks; a PoC requiring collection/labeling can exceed 10 weeks. Calibrate at scoping time.

## Go / No-Go criteria
| Dimension | Go criterion | No-Go criterion |
|---|---|---|
| Performance | Target metric reached (threshold defined in W1) | Below the business-acceptable threshold |
| Data | Sufficient volume + quality, clear usage rights | Insufficient data / major bias / GDPR non-compliant |
| Users | NPS > 0, pilot adoption > 60% | Rejection by users |
| Value (ROI) | Extrapolated business case validated (credible payback) | Insufficient economic gain |
| Industrialization | Acceptable ML Test Score (data, monitoring feasible) | Prohibitive technical debt |
| Compliance | Controlled AI Act risk | Blocking regulatory risk |

## Worked example — Specialized omnichannel retail (anonymized)
**Context**: specialized retail mid-market company, ~120 stores in France, ~2,800 employees. Pain point: frequent shelf stockouts + simultaneous overstock on other SKUs (replenishment driven by a manual moving average).
- **Use case**: demand forecasting to optimize store replenishment.
- **Hypothesis tested**: a forecasting model reduces the forecast error (MAPE) by at least 20% vs the current baseline.
- **PoC scope**: 8 pilot stores, 1 product category, 24-month sales history (outside production).
- **Duration**: ~10 weeks *(indicative)*. **Budget**: ~€80K *(indicative, to be calibrated)*.
- **Go KPI**: MAPE −20% vs baseline · planner adoption > 60% · extrapolated payback < 18 months.
- **Result**: MAPE −27% on the tested category, 70% adoption, but heterogeneous data quality across stores → **decision: Go with pivot** (industrialization on 3 reliable-data categories, data clean-up plan for the others).

> The figures above are **illustrative**: to be recalibrated to each context (volumes, data maturity, day rate, scope).

## Anti-patterns
- **PoC too broad**: several processes/teams at once → reduce to 1 use case, 1 team.
- **Vague or after-the-fact success criteria** → SMART KPIs **before** starting, otherwise the PoC is uninterpretable.
- **"Data quality last"**: ignoring data quality → data audit from W1 (Gartner's #1 abandonment cause).
- **PoC graveyard**: chaining PoCs with no industrialization criterion → formalized Go/No-Go decision + ML Test Score.
- **Change management forgotten**: no users involved → rejection on arrival; involve the pilots from W3.
- **PoC sold as an MVP**: confusing feasibility and production-readiness → robustness/security/monitoring absent.
- **Underestimated budget**: no contingency → plan for +30%.

## Deliverables
- PoC scoping sheet (1 page)
- PoC project plan (schedule + milestones + budget)
- Figured baseline of the current process
- Go / No-Go / Pivot results report (with measurement vs criteria)
- Industrialization recommendation (coupled with ML Test Score)

## Output format
Specify: use case · available data (source, volume, quality, rights) · team · budget · timeframe · main success criterion · AI Act risk tier.

## Sources
- **CRISP-DM 1.0** — *Cross-Industry Standard Process for Data Mining*, NCR / SPSS / DaimlerChrysler consortium (1996 design, 1999 draft, version 1.0 published 2000)
- **Ries E.** — *The Lean Startup*, Crown Business (2011) — Build-Measure-Learn loop, validated learning
- **Breck E., Cai S., Nielsen E., Salib M., Sculley D.** — *The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction*, Proceedings of IEEE Big Data (2017) — 28 tests, Google
- **Gartner** — *Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025* (release, July 29, 2024)
- **Gartner** — *Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027* (release, June 25, 2025)
- **EU AI Act** — Regulation (EU) 2024/1689 of June 13, 2024 (risk-tier classification from scoping onward)

## See also
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — upstream AI maturity diagnostic (use-case selection)
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — business case and extrapolated ROI post-PoC
- [feuille-route-ia.md](feuille-route-ia.md) — integration of the validated use case into the AI roadmap
- [benchmark-solutions-ia.md](benchmark-solutions-ia.md) — choosing the solution/model for the prototype
- [`../chef_projet_ia/cadrage-projet-ia.md`](../chef_projet_ia/cadrage-projet-ia.md) — project scoping (charter, business case) if industrialized
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — risk register (AI Risk Register, NIST AI RMF)
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — AI Act risk classification of the use case
