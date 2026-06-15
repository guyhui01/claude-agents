# Skill — Project & Program Risk Management

> Certifications: **PSPO II** · **PMI-RMP** (Risk Management Professional) · **ISO 31000 Lead Risk Manager** · **COSO ERM Certificate** · **ICAgile ICP-APO**
> Agent: AGENT-PO-SCRUM.md

## Objective

Identify, assess, treat and monitor the risks of a project/program according to the normative frameworks (**ISO 31000:2018**, **PMBOK 7**, **COSO ERM 2017**) — coupled with **agile** practices (SAFe ROAM, Risk Burndown Chart, Risk Adjusted Backlog) and **sector-specific regulatory** requirements (DORA banking, NIS2, AI Act, GDPR) — in order to turn uncertainty into traceable, defensible decisions.

## BABOK v3 framework (IIBA 2015) — Knowledge Areas used

| BABOK v3 KA | Typical risk-management tasks |
|---|---|
| **#9 Strategy Analysis** | T9.3 Assess Risks — identification, analysis, treatment plan |
| **#5 Requirements Analysis & Design Definition** | T5.5 Define Design Options + per-option risk assessment |
| **Agile Perspective** | Risk adjusted backlog, ROAM Board, Risk Burndown Chart |

## ISO 31000:2018 — International normative framework

### 8 Principles (clause 4)

1. Integrated — risk management is part of all activities
2. Structured and comprehensive
3. Customized to the context (internal/external)
4. Inclusive — involves stakeholders
5. Dynamic — anticipates, detects, acknowledges, responds to changes
6. Best available information (historical, current, forward-looking)
7. Human and cultural factors integrated
8. Continual improvement

### Framework (clause 5) — Leadership · Integration · Design · Implementation · Evaluation · Improvement

### 6-step process (clause 6)

```
1. Communication & Consultation (cross-cutting)
2. Scope, Context, Criteria
3. Risk Assessment
   ├─ Risk Identification
   ├─ Risk Analysis (P × I, qualitative/quantitative)
   └─ Risk Evaluation (vs acceptance criteria)
4. Risk Treatment (Avoid · Reduce · Transfer · Accept)
5. Monitoring & Review (cross-cutting)
6. Recording & Reporting (cross-cutting)
```

## PMBOK Guide 7th ed (PMI 2021) — Uncertainty Performance Domain

**8 uncertainty-management principles**: Stewardship · Team · Stakeholders · Value · Systems Thinking · Leadership · Tailoring · Quality · **Complexity · Risk** · Adaptability/Resiliency · Change.

**Typical Risk Categories** (RBS — Risk Breakdown Structure):
- **Technical**: architecture, performance, immature technology, technical debt
- **External**: market, regulatory, suppliers, geopolitical events
- **Organizational**: resources, priorities, cross-project dependencies, sponsor
- **Project Management**: estimation, planning, communication, control
- **Cyber & Data**: security, integrity, confidentiality, GDPR/AI Act
- **Compliance**: sector-specific (DORA, NIS2, MiFID II, Basel IV, IFRS9, FRTB)

## COSO ERM 2017 — Enterprise Risk Management - Integrating with Strategy & Performance

5 components × 20 principles (US enterprise risk governance framework):

| Component | Key principles (excerpt) |
|---|---|
| **Governance & Culture** | Board of directors · risk-aware culture · operating structures · talent attractiveness |
| **Strategy & Objective-Setting** | Business context · risk appetite · alternative strategies · business objectives |
| **Performance** | Identification · severity assessment · prioritization · responses · portfolio view |
| **Review & Revision** | Substantial changes · ERM review · continual improvement |
| **Information, Communication & Reporting** | Risk IS · internal communication · reporting risk + performance + culture |

## SAFe Risk Management — ROAM Board (Inspect & Adapt event, PI Planning)

| ROAM status | Meaning | Action |
|:---:|---|---|
| **R** Resolved | Risk resolved, no follow-up | Archive |
| **O** Owned | Risk taken on by a named member | Action plan + tracking in daily SoS / I&A |
| **A** Accepted | Risk accepted (tolerable impact, mitigation cost > impact) | Traced acceptance + governance decision |
| **M** Mitigated | Mitigation plan underway, risk under control | Monthly tracking + quarterly I&A review |

**SAFe rule**: any risk not ROAM-broken by the end of PI Planning **blocks the team's commitment** to the next PI.

## ISO 31010:2019 — Top 10 risk-assessment techniques

| Technique | Type | Preferred use |
|---|---|---|
| **Brainstorming** | Qualitative | Broad identification, BA/team workshops |
| **Delphi method** | Qualitative | Anonymized expert opinions, iterative consensus |
| **SWIFT** (Structured What-If Technique) | Qualitative | Systematic scenario identification |
| **Bowtie Analysis** | Qualitative/Visual | Causes (left) × Central event × Consequences (right) + barriers |
| **FMEA** (Failure Mode & Effect Analysis, IEC 60812) | Quantitative | Industry, product engineering, RPN = Severity × Occurrence × Detection |
| **HAZOP** (Hazard and Operability Study) | Qualitative | Chemical/pharma/energy industrial processes |
| **RCA Five Whys** (Toyota) | Qualitative | Post-incident root-cause search |
| **Fault Tree Analysis** | Quantitative | Top-down boolean-logic decomposition |
| **Event Tree Analysis** | Quantitative | Post-event sequence analysis |
| **Monte Carlo Simulation** | Quantitative | Cost/schedule quantification, probabilistic distribution |

## Probability × Impact matrix (5×5 Heat Map)

```
Impact / Probability    Very low   Low       Medium    High      Very high
                          (1)       (2)       (3)       (4)        (5)
Catastrophic   (5)        5 🟡     10 🟡    15 🔴     20 🔴     25 🔴
Major          (4)        4 🟢      8 🟡    12 🟡     16 🔴     20 🔴
Moderate       (3)        3 🟢      6 🟢     9 🟡     12 🟡     15 🔴
Minor          (2)        2 🟢      4 🟢     6 🟢      8 🟡     10 🟡
Negligible     (1)        1 🟢      2 🟢     3 🟢      4 🟢      5 🟡

🟢 1-6 Low (Accept/Monitor) | 🟡 7-12 Medium (Reduce/Transfer) | 🔴 13-25 High (Immediate reduce / Exec escalation)
```

**Quantitative definitions** (to calibrate per project):
- Probability: Very low < 10% · Low 10-30% · Medium 30-50% · High 50-70% · Very high > 70%
- Financial impact (CIB banking): Negligible < €100k · Minor €100k-1M · Moderate €1-10M · Major €10-100M · Catastrophic > €100M

**Risk Appetite**: overall threshold set by the executive committee, approved by the Board of Directors. **Risk Tolerance**: operational thresholds per category. **Risk Capacity**: absolute maximum absorbable without threatening viability.

## Enriched Risk Register — 13-column template

| ID | Category (RBS) | Cause | Event (Risk) | Consequence | Prob (1-5) | Impact (1-5) | Score | Owner (RACI) | Treatment strategy | Mitigation (preventive) | Contingency (reactive) | Trigger / Status |
|:---:|---|---|---|---|:---:|:---:|:---:|---|:---:|---|---|---|
| R001 | Cyber | Open AWS S3 configuration | Customer PII data leak | CNIL fine + loss of trust | 3 | 5 | 15 🔴 | CISO | Reduce | Cloud Security Posture audit + bucket policies + Terraform IaC | CSIRT incident plan + 72h CNIL notification | ScoutSuite alert |
| R002 | DORA compliance | Non-EU cloud supplier dependency | DORA art. 28 non-compliance | ACPR fine up to 1% of revenue | 4 | 4 | 16 🔴 | Compliance IT Dept. | Reduce | Sovereign cloud migration + contractual clauses | Documented 90-day reversibility plan | DORA audit T-3 months |

## Risk Quantification — EMV + Monte Carlo + Risk Burndown

### Expected Monetary Value (EMV)
**EMV = Probability × Financial impact**
Example: 3-month delivery delay risk, P = 40%, Impact = €2M penalties → EMV = €800k (recommended provision).

### Monte Carlo Simulation
- **Inputs**: probabilistic distribution of each uncertainty variable (task duration, cost, productivity)
- **Process**: 10,000 iterations minimum, recompute end date / total cost
- **Outputs**: cumulative-probability S-curve, P50/P80/P95 percentiles
- **Decision**: commit at P80 (secured), provision = P95 - P50
- **Tools**: @Risk (Palisade) · Crystal Ball (Oracle) · ModelRisk · Risk Solver

### Risk Burndown Chart (Mike Cohn 2006)
A sprint-by-sprint chart of the total score of active risks (Σ P × I). **Downward trend** = healthy. **Flat or rising** = project alert.

## IIA Three Lines Model (2020) — Risk governance

| Line | Role | Actors |
|:---:|---|---|
| **1st line** | Operational management — owns and manages risks | Business, project teams, PO, DevOps |
| **2nd line** | Risk Management & Compliance — framework, methodology, oversight | Risk Department, Compliance, CISO, Legal |
| **3rd line** | Internal Audit — independent assurance | General Inspection, Internal Audit, IT Audit |

2020 evolution: dropping the term "Defense" (defensive connotation) in favor of "Lines" — a collaborative model rather than a siloed one.

## Risk Adjusted Backlog — Integration into agile events

| Event | Risk-management action |
|---|---|
| **Daily Standup** | Quick mention of active blocking risks |
| **Backlog Refinement** | Risk tagging on impacted stories + acceptance criteria including fallback |
| **Sprint Planning** | High-risk stories planned early in the sprint (fail fast) |
| **Sprint Review** | Demo includes demonstration of risk controls (security, perf, compliance) |
| **Sprint Retrospective** | Quarterly review of the Risk Register, add newly emerged risks |
| **SAFe PI Planning** | Mandatory ROAM Board (day 2) before commitment |
| **SAFe Inspect & Adapt** | Quarterly ROAM review + ART/Solution Train escalation |

## Regulatory compliance risks — Sector mapping

| Regulation | Scope | Deadline | Associated risk |
|---|---|---|---|
| **DORA** (EU 2022/2554) | Banking / Finance — ICT risk + third-party risk | **Jan 17, 2025** | Fine up to 1% of revenue, RTO of critical services, ICT supplier register |
| **NIS2** (EU 2022/2555) | Essential/important entities (energy, health, transport, water...) | Oct 17, 2024 | Fine up to €10M or 2% of revenue, 24h incident reporting |
| **EU AI Act** (Reg. 2024/1689) | High-risk AI systems | Application 2025-2027 | Fines up to €35M or 7% of revenue |
| **GDPR** (EU 2016/679) | Personal data | In force | Fine up to €20M or 4% of revenue, mandatory DPIA |
| **Basel IV / FRTB** | International banks | 2025-2028 | Capital requirements + market risk |
| **IFRS 9** | Bank accounting | In force | Expected-loss provisioning (ECL) |
| **MiFID II** | EU financial markets | In force | Best execution, transaction reporting |

## Worked sector example — European corporate and investment bank (CIB)

**Anonymized context**: European corporate and investment bank (CIB), 8 countries, ~25,000 employees, NBI revenue ~€10B/year. **DORA compliance** program (deadline Jan 17, 2025), steered by the Operational Risk department + General Inspection + Compliance IT department. Duration: 18 months.

**Identified scope**:
- **47 critical ICT services** (Critical or Important Functions under DORA art. 28): trading platforms (12) · post-trade & settlement (8) · payments (6) · collateral management (4) · KYC/AML (5) · regulatory reporting (7) · risk datawarehouse (5)
- **35 critical ICT suppliers** identified (third-party risk register DORA art. 28-30)
- **312 risks** recorded in the group Risk Register (RBS, 6 categories)

**Risk Register — Top 10 scored risks (excerpt)**:

| ID | Category | Risk | P | I | Score | EMV | Strategy |
|:---:|---|---|:---:|:---:|:---:|---|:---:|
| R001 | DORA compliance | Non-compliance with art. 28 third-party register by 17/01/2025 | 4 | 5 | 20 🔴 | €80M | Reduce |
| R002 | Cyber | Ransomware paralyzing trading platforms (RTO > 4h) | 3 | 5 | 15 🔴 | €45M | Reduce |
| R003 | Cyber | Supply chain compromise (third-party SaaS) | 4 | 4 | 16 🔴 | €32M | Reduce + Transfer |
| R004 | AI model | Corporate credit-scoring model bias (GDPR art. 22 + AI Act) | 3 | 4 | 12 🟡 | €12M | Reduce |
| R005 | Basel IV compliance | Delayed FRTB capital-calculation implementation | 3 | 5 | 15 🔴 | €35M | Reduce |
| R006 | Operational | Loss of T2S settlement service continuity (ECB) | 2 | 5 | 10 🟡 | €18M | Reduce + Transfer (insurance) |
| R007 | External | Non-EU cloud dependency (sovereignty) | 4 | 4 | 16 🔴 | €28M | Reduce (migration) |
| R008 | Project | Program delay (initial estimate 12 months → 18 months) | 4 | 3 | 12 🟡 | €4.5M | Reduce (planning) |
| R009 | Cyber | Internal fraud (rogue trader) | 2 | 5 | 10 🟡 | €22M | Transfer + Detect |
| R010 | IFRS9 compliance | Undocumented post-crisis ECL calibration | 3 | 3 | 9 🟡 | €5M | Reduce |

**Monte Carlo simulation of the program budget**:
- Inputs: 47 work packages × PERT distribution (optimistic/likely/pessimistic) + uncertainty variables (USD/EUR exchange rate, external-resource availability, emerging regulatory complexity)
- 10,000 iterations on @Risk
- Results: budget P50 = €16.2M · P80 = €18.0M · P95 = €20.5M
- **Governance commitment: €18M** (P80) + contingency provision €2.5M (P95-P50)

**ICT Third-Party Risk Register (DORA art. 28-30)**: 35 critical suppliers assessed on 12 criteria (concentration, substitutability, RTO/RPO, sub-outsourcing, data location, DORA-chain compliance) — 8 suppliers in the red zone → mitigation plan (clause renegotiation, dual-sourcing, 90-day reversibility plan).

**Three Lines Model governance**:
- 1L: 47 critical ICT service owners + 6 DORA Program Managers
- 2L: Operational Risk department + CISO + Compliance + Legal (weekly committee)
- 3L: General Inspection (independent quarterly review)

**Measured gains at T+18 months (post-compliance)**:
- DORA compliance: **100%** of the 47 critical services documented and tested (TLPT, Threat-Led Penetration Testing included)
- Critical-service RTO: **< 2h** weighted average (vs 6h pre-program, DORA target < 4h)
- Reduction of residual 🔴 risks: 32 → **9 risks** (-72%)
- Non-compliant ICT suppliers: 8 → **0** (renegotiation + dual-sourcing + 2 exits)
- Regulator (ACPR) audits: **0 major reservations** on the DORA program (vs 5 reservations expected in the business-as-usual scenario)
- Program ROI: avoiding the maximum ACPR/EBA fine + keeping the European banking passport license

## 8 risk-management anti-patterns

- ❌ **Static Risk Register** filled in at kickoff then never updated → decorative, no operational value
- ❌ **P × I rating with no quantitative definition** ("3" may mean 30% or 50% depending on mood) → no comparability
- ❌ **Mitigation = "monitor"** = no action, just a word in a column — this is acceptance in disguise
- ❌ **No named owner** (diluted "team" responsibility) → nobody acts
- ❌ **Risk accepted without governance approval** (acceptance at PO/PM level doesn't respect the executive-committee risk appetite)
- ❌ **Confusing risk / issue / dependency**: a risk is an uncertain future event · an issue has materialized · a dependency is a fact
- ❌ **Black swan ignored** because probability < 10% (cf. Taleb 2007) — the distribution tail dominates the average impact
- ❌ **ROAM Board ignored after SAFe PI Planning** → unsecured team commitment, risks resurface in the demo

## Tools

- **GRC / Risk Management**: ServiceNow GRC · IBM OpenPages · MetricStream · LogicGate Risk Cloud · Archer (RSA) · Riskonnect · SAP GRC
- **Quantification & Monte Carlo**: @Risk (Palisade) · Oracle Crystal Ball · ModelRisk · Frontline Solver · Python (numpy/scipy) · R (mc2d package)
- **Cybersecurity Risk**: OneTrust · Tenable Lumin · Qualys · Rapid7 InsightVM · CyberStrong (CyberSaint)
- **Third-Party Risk (DORA art. 28-30)**: BitSight · SecurityScorecard · UpGuard · Prevalent · OneTrust TPRM
- **Compliance**: Vanta · Drata · LogicGate · NAVEX Global
- **Agile Risk**: Jira (Risk Register custom fields) · Confluence · Azure DevOps Risk Tracking · LeanKit (ROAM Board)
- **Visualization**: Lucidchart (Bowtie, Fault Tree) · Miro (collaborative Risk Heat Map) · PowerBI Risk Dashboard

## Deliverables

- **Risk Management Plan** (charter): scope, methodology, RACI, review frequency, escalation
- **Risk Register** enriched to 13 columns + SAFe ROAM Board version
- **Risk Breakdown Structure** (RBS) specific to the project
- **Risk Heat Map** updated monthly
- **Risk Burndown Chart** sprint-by-sprint (agile)
- **Monte Carlo simulation report** (budget + schedule, P50/P80/P95)
- **ICT Third-Party Risk Register** (DORA art. 28-30) if in the financial sector
- **Business Continuity Plan (BCP) + Disaster Recovery Plan (DRP)** linked to 🔴 risks
- **Risk-committee reporting** (1L/2L/3L) — standardized template, COSO ERM Component 5

## Output format

For each risk-management engagement, specify:
- **Project type**: IS · regulatory (DORA/NIS2/AI Act) · organizational transformation · AI · multi-dimensional
- **Primary framework**: ISO 31000 · PMBOK 7 · COSO ERM · SAFe ROAM · mix
- **Scale**: project (1-12 months, Risk Register 30-80 rows) · program (12-36 months, 150-300 rows) · enterprise ERM (continuous)
- **Risk appetite**: conservative (banking/health/defense) · balanced (industry/telecom) · aggressive (tech scale-up)
- **Applicable sector regulation**: DORA · NIS2 · AI Act · GDPR · Basel IV · IFRS9 · MiFID II · MDR (health) · ITAR (defense)

## Sources

- **ISO 31000:2018** — Risk management — Guidelines (ISO/TC 262)
- **ISO 31010:2019** — Risk management — Risk assessment techniques
- **ISO/IEC 27005:2022** — Information security, cybersecurity and privacy protection — Guidance on managing information security risks
- **PMBOK Guide, 7th Edition** — Project Management Institute (PMI, 2021) — Uncertainty Performance Domain
- **COSO ERM 2017** — *Enterprise Risk Management — Integrating with Strategy and Performance* (Committee of Sponsoring Organizations of the Treadway Commission)
- **DORA** — Regulation (EU) 2022/2554 of December 14, 2022 on the digital operational resilience of the financial sector — applicable January 17, 2025
- **NIS2** — Directive (EU) 2022/2555 of December 14, 2022 — transposition October 17, 2024
- **NIST AI Risk Management Framework 1.0** — NIST (January 2023)
- **SAFe 6.0 Risk Management** — Scaled Agile Inc. (2023) — ROAM Board
- **IIA Three Lines Model** — The Institute of Internal Auditors (July 2020, revision of the 2013 Three Lines of Defense Model)
- **Snowden D., Boone M.** — *A Leader's Framework for Decision Making* (Cynefin), Harvard Business Review (November 2007)
- **Cohn M.** — *Agile Estimating and Planning* (Prentice Hall, 2006) — Risk Burndown Chart
- **Hubbard D.** — *The Failure of Risk Management: Why It's Broken and How to Fix It* (Wiley, 2009, 2nd ed. 2020)
- **Taleb N.N.** — *The Black Swan: The Impact of the Highly Improbable* (Random House, 2007) — black swan theory

## See also

- [po-ai-product.md](po-ai-product.md) — AI Risk Register (NIST AI RMF) for AI features
- [po-backlog.md](po-backlog.md) — DSDM Risk Adjusted Backlog, integrating risks into refinement
- [dor-dod.md](dor-dod.md) — criteria for including risk in the Definition of Done
- [`../business_analyst/analyse-impact.md`](../business_analyst/analyse-impact.md) — project impact analysis & change management (direct cousin, complementary methods)
- [`../business_analyst/cartographie-si.md`](../business_analyst/cartographie-si.md) — IS risks, application dependencies, impact circles
- [`../safe/inspect-adapt.md`](../safe/inspect-adapt.md) — SAFe I&A event, ROAM Board, Ishikawa PSW
- [`../securite_ia/threat-modeling.md`](../securite_ia/threat-modeling.md) — cyber risks (STRIDE, PASTA, OWASP)
- [`../juridique_ia/nis2-conformite.md`](../juridique_ia/nis2-conformite.md) — NIS2 regulatory compliance risk
