# Skill — AI Roadmap
> Certifications: CAP IABAC · Azure AI-900 · PMI-ACP

## Objective
Build a **realistic, prioritized, sequenced** AI roadmap, aligned with business objectives, the organization's data maturity, and the regulatory milestones (AI Act). A good roadmap explicitly arbitrates between fast value (quick wins) and structuring initiatives, and makes the "why now" of each wave visible.

## Methodological framework
- **McKinsey — Three Horizons of Growth** (Baghai, Coley, White, *The Alchemy of Growth*, 1999) — allocate effort simultaneously across 3 horizons (core / emerging / options), classically in an indicative **70-20-10** ratio. Adapted here to the AI cadence (AI moves faster than the original corporate strategy).
- **Prioritization**: a **Value × Complexity × Data maturity** matrix, complemented by a scoring method:
  - **WSJF** (Weighted Shortest Job First, SAFe — after D. Reinertsen, *Principles of Product Development Flow*, 2009): `WSJF = Cost of delay / Job duration`, where cost of delay = business value + time criticality + risk reduction/opportunity enablement.
  - **RICE** (Intercom, 2016): `(Reach × Impact × Confidence) / Effort`.
- **Now-Next-Later** (Janna Bastow / ProdPad) — roadmap format by confidence levels rather than firm dates; useful in an uncertain environment (AI is one).

## AI roadmap structure (3 adapted horizons)
```
Horizon 1 (0-6 months)   : Quick wins — fast value, low complexity, available data
Horizon 2 (6-18 months)  : Structuring initiatives — high value, medium complexity
Horizon 3 (18-36 months) : Transformation — major impact, high complexity and dependencies
```
> Inspired by McKinsey's 3 Horizons, recalibrated to the AI cadence. The golden rule: **fund H1 with real gains that lend credibility to H2 and H3**, without starving long-term innovation.

## AI initiative prioritization matrix
| Initiative | Business Value | Complexity | Data Maturity | Score (WSJF/RICE) | Priority |
|---|---|---|---|---|---|
| (e.g.) Internal HR/IS assistant | High | Low | Good | high | ⭐⭐⭐ |
| (e.g.) Prediction (churn/demand) | High | Medium | Medium | medium | ⭐⭐ |
| (e.g.) Vision / quality control | Medium | High | Low | low | ⭐ |

> Fill the score with **a single consistent method** across the whole portfolio (do not mix WSJF and RICE in the same grid).

## AI use-case selection criteria
- **Business value**: impact on revenue, costs, or satisfaction (quantified).
- **Technical feasibility**: available, quality data, existing models.
- **Organizational maturity**: a team able to carry and operate the use case.
- **Time-to-value**: time to the first measurable results.
- **Risk**: technical, ethical, and **regulatory (AI Act classification)**.

## Integrating the regulatory milestones (AI Act) into the roadmap
The roadmap must carry the compliance deadlines as milestones in their own right:
| Deadline | Obligation | Roadmap implication |
|---|---|---|
| **Feb 2, 2025** | Prohibited practices + AI literacy | Remove/exclude any prohibited use case; awareness plan |
| **Aug 2, 2025** | GPAI obligations (general-purpose models / LLMs) | Document LLM use, compliant providers |
| **Aug 2, 2026** | High-risk systems (Annex III: employment, credit, etc.) | Compliance before production of high-risk use cases |
| **Aug 2, 2027** | Full applicability | Compliance of the existing estate (incl. earlier GPAI) |

## Roadmap format
```
Q1 2026   : [Initiative 1] — Quick win
            [Initiative 2] — Quick win
Q2 2026   : [Initiative 3] — Structuring (launch) + AI Act compliance milestone
Q3-Q4 2026: [Initiative 3] — Structuring (deployment)
2027      : [Initiative 4] — Transformation
```

## Roadmap success KPIs
- Number of use cases **in production** at M+6, M+12, M+24 (vs PoC, to avoid the PoC graveyard).
- Cumulative ROI of delivered AI initiatives.
- User adoption rate.
- AI maturity level reached vs target (coupling with the maturity diagnostic).
- AI Act compliance rate of use cases in production.

## Example — Public sector / local authority (anonymized)
**Context**: local authority (~6,500 staff, ~400,000 residents). Constraints: GDPR, AI Act (some services = high-risk), public procurement, sovereignty/hosting, citizen distrust.
- **H1 (0-6 months)**: search assistant in the internal document base (DMS), pre-answering recurring resident requests — available data, limited risk.
- **H2 (6-18 months)**: optimization of preventive asset maintenance (roads, buildings); anomaly detection on financial flows — AI Act compliance milestone before production.
- **H3 (18-36 months)**: territorial data platform + cross-cutting predictive use cases (mobility, energy).
- **Guardrails**: no social-scoring use (prohibited); reinforced transparency toward residents; AI clauses in public contracts.

> **Illustrative** horizons and scopes: to be recalibrated to the real data maturity and the public-procurement framework.

## Anti-patterns
- **Roadmap = a list of tech toys**: stacking "cool" use cases with no prioritized business value.
- **Everything in Horizon 3**: only transformational projects, no quick win → loss of credibility and budget.
- **Prioritization by intuition**: no shared scoring → opaque political trade-offs.
- **Ignoring data maturity**: an ambitious roadmap on unusable data (the #1 cause of failure).
- **Regulatory compliance bolted on**: AI Act handled after the fact → late-cycle blockage.
- **Roadmap frozen in firm dates** over 36 months: prefer Now-Next-Later beyond H1.

## Deliverables
- Illustrated AI roadmap (PowerPoint / Miro), 3 horizons + compliance milestones
- Scoping sheet per priority initiative (coupled with cadrage-poc)
- Synthetic business case (H1)
- Scored prioritization matrix (WSJF or RICE)
- Associated AI governance plan

## Output format
Specify: maturity diagnostic results · sector · budget · target horizon · regulatory constraints (AI Act risk tier, GDPR) · chosen prioritization method (WSJF / RICE).

## Sources
- **Baghai M., Coley S., White D.** — *The Alchemy of Growth* (1999) — McKinsey Three Horizons of Growth (70-20-10 allocation)
- **Reinertsen D.** — *The Principles of Product Development Flow* (2009) — Cost of Delay, basis of WSJF (SAFe)
- **Scaled Agile (SAFe)** — *Weighted Shortest Job First (WSJF)* — prioritization by cost of delay
- **Intercom** — *RICE scoring model* (Sean McBride, 2016) — Reach × Impact × Confidence / Effort
- **Bastow J. (ProdPad)** — *Now-Next-Later roadmap* — roadmap by confidence levels
- **EU AI Act** — Regulation (EU) 2024/1689 — application timeline: prohibitions Feb 2, 2025, GPAI Aug 2, 2025, high-risk Aug 2, 2026, full applicability Aug 2, 2027

## See also
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — upstream diagnostic feeding the roadmap
- [cadrage-poc-ia.md](cadrage-poc-ia.md) — scoping of each priority initiative
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — business case per initiative (H1)
- [transformation-digitale.md](transformation-digitale.md) — encompassing transformation program
- [presentation-executif.md](presentation-executif.md) — roadmap read-out to the executive committee
- [`../scrum/po-ai-product.md`](../scrum/po-ai-product.md) — AI product breakdown (vision, backlog)
- [`../safe/program-backlog.md`](../safe/program-backlog.md) — WSJF prioritization at the program level
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — operational AI Act compliance
