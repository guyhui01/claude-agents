# Skill — AI Ethics Governance

> Certifications: AI Act Compliance Expert · CAP IABAC · Certified DPO CNIL
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **OECD AI Principles** (2019, upd. 2024) · **UNESCO Recommendation on the Ethics of AI** (2021) · **EU HLEG Ethics Guidelines for Trustworthy AI** (2019) + **ALTAI** (2020) · **NIST AI RMF 1.0** (2023) + GenAI Profile (2024) · **ISO/IEC 42001:2023** (AIMS) · ISO/IEC 23894:2023 · ISO/IEC 24028:2020 · AI Act EU 2024/1689

## Objective

Set up an **AI ethics governance framework** aligned with the organization's values, the **AI Act** requirements (art. 50 transparency, art. 14 human oversight), and the **recognized international frameworks** (OECD, UNESCO, EU HLEG, NIST). Produce the operable deliverables: AI policy, governance committee, ethical impact assessment, Model Cards.

## Frameworks mobilized

| Framework | Status | Contribution to governance |
|---|---|---|
| **OECD AI Principles** (2019, upd. 2024) | 1st intergovernmental standard | 5 value principles + GenAI 2024 integration (safety, IP, information integrity) |
| **UNESCO Recommendation on the Ethics of AI** (2021) | 194 member states | 4 founding values + **Ethical Impact Assessment (EIA)** + Policy Action Areas |
| **EU HLEG — Ethics Guidelines for Trustworthy AI** (2019) | EU soft law, basis of the AI Act | 4 imperatives → **7 key requirements** + **ALTAI** assessment list (2020) |
| **NIST AI RMF 1.0** (2023) | US reference framework | 4 functions **GOVERN / MAP / MEASURE / MANAGE** (Govern cross-cutting) + GenAI Profile (2024) |
| **ISO/IEC 42001:2023** | Certifiable standard (AIMS) | Auditable AI management system (PDCA) |
| **AI Act EU 2024/1689** | Binding regulation | Legal obligations (art. 5 prohibited, art. 6+Annex III high-risk, art. 50 transparency) |

## The 7 ethical principles — framework anchoring

The principles below **converge** across OECD, UNESCO, and EU HLEG. Each principle is tied to its official source (not a generic "consensus").

| # | Principle | Official source |
|---|---|---|
| 1 | **Transparency & Explainability** — AI decisions understandable by affected individuals | OECD principle 3 · HLEG requirement 4 · AI Act art. 50 |
| 2 | **Fairness & Non-discrimination** — no discrimination on protected criteria | OECD principle 2 · HLEG requirement 5 · UNESCO (diversity & inclusion) |
| 3 | **Robustness & Safety** — reliability, resistance to attacks | OECD principle 4 · HLEG requirement 2 · NIST MANAGE |
| 4 | **Privacy & Data Governance** — minimization, individuals' rights | HLEG requirement 3 · GDPR · ISO/IEC 27701 |
| 5 | **Responsibility & Accountability** — a human accountable for the decisions | OECD principle 5 · HLEG requirement 7 · NIST GOVERN |
| 6 | **Human oversight & agency** — the human stays in control | HLEG requirement 1 · AI Act art. 14 · UNESCO (human oversight) |
| 7 | **Societal well-being & environmental sustainability** — societal impact + carbon footprint | OECD principle 1 · HLEG requirement 6 · UNESCO (environment & ecosystems) |

> **Convergence of frameworks**: OECD = 5 value principles · EU HLEG = 7 requirements (from 4 imperatives: human autonomy, prevention of harm, fairness, explicability) · UNESCO = 4 founding values (human rights & dignity · just societies · diversity & inclusion · environment) · NIST = 4 operational functions. The 7-principle grid above is their operable synthesis.

## AI governance structure (anchored in NIST GOVERN + ISO/IEC 42001)

The NIST AI RMF **GOVERN** function (cross-cutting to the other 3) and the **ISO/IEC 42001:2023** management system ground the committee below.

### AI Committee (AI Board)
```
Recommended composition:
  → Chair: CDO or Head of AI
  → DPO (Data Protection Officer)
  → CISO (Security)
  → Head of Legal / Compliance
  → Business representatives (2-3 concerned departments)
  → Data Scientist lead
  → User / employee representative

Missions:
  → Approve AI use cases before deployment (GOVERN gate)
  → Approve DPIAs (GDPR art. 35) and AI Act compliance audits
  → Arbitrate ethical dilemmas (reference: the 7 principles above)
  → Track AI incidents and corrective actions (NIST MANAGE)
  → Annual report to the executive committee / Board of Directors (ISO 42001 management review)

Cadence: monthly review (1h) + extraordinary committee in case of an incident.
(Frequency to calibrate against the volume of use cases — organizational convention, not normative.)
```

### Organization's AI policy
```
Recommended structure:
  1. AI values and principles (aligned OECD / UNESCO / HLEG)
  2. Permitted / prohibited use cases (see AI Act art. 5 for the prohibited ones)
  3. AI project validation process (committee gate)
  4. Roles and responsibilities (RACI)
  5. Mandatory user training (AI Act art. 4 — AI literacy)
  6. Incident / drift reporting procedure
  7. Review and update (annual or significant change)
```

## Ethical Impact Assessment

Anchored in the **UNESCO EIA (2021)** and the HLEG **ALTAI** assessment list (2020). Complementary — not a substitute — to the GDPR DPIA (art. 35) and the AI Act conformity assessment.

### Assessment grid (score /100)
| Dimension | Weight | Key question | Anchoring |
|---|---|---|---|
| Transparency | 20% | Does the user know they are interacting with an AI? | HLEG #4 · AI Act art. 50 |
| Fairness | 20% | Have biases been tested and mitigated? | HLEG #5 |
| Human oversight | 20% | Can a human control / correct? | HLEG #1 · AI Act art. 14 |
| Privacy | 20% | DPIA carried out? Data minimized? | HLEG #3 · GDPR art. 35 |
| Accountability | 20% | Who is accountable in case of error? | HLEG #7 · NIST GOVERN |

```
Score ≥ 80: Deployment authorized
Score 60-79: Deployment with additional measures
Score < 60: Project revision required
```
> The thresholds above are an **internal management convention** (to be validated by the AI committee), not a regulatory standard — to be documented in the AI policy.

## Model Cards & transparency reports

Reference **Model Cards** format: Mitchell et al., *Model Cards for Model Reporting* (FAT\* 2019). Coupled with *Datasheets for Datasets* (Gebru et al., 2021) for data documentation.

```yaml
# Model Card — after Mitchell et al. (2019)
model_name: Churn Predictor v2.1
model_type: XGBoost Classifier
training_date: 2026-03-15
training_data:
  description: CRM data 2022-2025 (500K customers)
  sensitive_attributes: age, region (NOT gender, ethnicity)
intended_use:
  - primary: Customer retention campaigns
  - out_of_scope: Individual employee evaluation, credit scoring
performance:
  overall_auc: 0.923
  by_group:                       # fairness evaluation by subgroup
    age_18_35: 0.901
    age_35_55: 0.934
    age_55_plus: 0.908
  fairness_metric: equalized_odds gap = 3.3%   # target threshold defined and justified by the organization
limitations: Model may underperform for customers with <6 months history
ethical_considerations: Campaigns must include opt-out. No automated action > €500.
contact: data-ethics@organisation.example
```
> **Fairness metrics**: choose and document the metric (demographic parity, *equalized odds*, *equal opportunity*) and its target threshold — there is no single universal threshold; the threshold must be justified against the context and the risk (see UNESCO EIA).

## Sector example — insurance (claims scoring, AI Act high-risk)

**Anonymized context**: European mid-market insurer, auto claims-scoring model (pricing segmentation). Use potentially **high-risk** (impact on access to an essential service).

- **AI committee scoping**: AI Act classification → art. 6 + Annex III review; GDPR DPIA art. 35 triggered.
- **EIA**: initial score 64/100 → **fairness 12/20** (performance gap across age brackets not tested), **transparency 12/20** (no information to the insured). **Conditional** deployment.
- **Corrective measures**: subgroup fairness test (Model Card), transparency notice to the insured (AI Act art. 50), human oversight on any refusal (art. 14), complaint opt-out.
- **Reassessment**: EIA 84/100 → deployment authorized, committee review at 6 months.

## Anti-patterns

- ❌ **"Ethics-washing"**: a principles charter displayed with no validation gate or measure (non-operable principles)
- ❌ **Confusing ethics and legal compliance**: passing the AI Act ≠ being ethical (the EIA goes beyond the legal minimum)
- ❌ **AI committee with no blocking power**: advisory opinion only → projects go through anyway
- ❌ **Arbitrary, undocumented fairness/score thresholds**: announcing "gap < 5%" without defining the metric or justifying the threshold
- ❌ **Missing or unmaintained Model Card**: model deployed without documentation of its limits and biases
- ❌ **Cosmetic human oversight** (*rubber-stamping*): the human approves with no real power to contest (violates AI Act art. 14)
- ❌ **Unsourced ethical principles**: invoking an "international consensus" with no framework (OECD/UNESCO/HLEG)
- ❌ **Forgetting sustainability**: not measuring the training/inference carbon footprint (OECD principle 1, UNESCO environment)

## Deliverables

- **Organization's AI policy** (official document, aligned OECD/UNESCO/HLEG)
- **AI use charter** (for employees)
- **Ethical assessment grid (EIA)** (template, anchored in UNESCO + ALTAI)
- **Model Cards** (per model, Mitchell et al. 2019 format) + dataset Datasheets
- **Annual AI governance report** (ISO 42001 management review)
- **"AI Ethics" training** (2h, all levels — AI Act art. 4 AI literacy)

## Output format

Specify: organization size and industry · current ethics maturity (NIST GOVERN) · past AI incidents · sector constraints (health, finance, HR, insurance) · AI Act classification of the use cases · audience (executive committee, teams, users).

## Sources

- **OECD** — *Recommendation of the Council on Artificial Intelligence* / AI Principles (OECD/LEGAL/0449, 2019, updated 2024) — oecd.ai/en/ai-principles
- **UNESCO** — *Recommendation on the Ethics of Artificial Intelligence* (adopted Nov. 2021, 194 member states) — unesco.org/en/artificial-intelligence/recommendation-ethics
- **EU High-Level Expert Group on AI** — *Ethics Guidelines for Trustworthy AI* (April 8, 2019) + *Assessment List for Trustworthy AI (ALTAI)* (2020) — digital-strategy.ec.europa.eu
- **NIST** — *AI Risk Management Framework 1.0* (NIST AI 100-1, Jan. 2023) + *Generative AI Profile* (NIST AI 600-1, July 2024) — nist.gov/itl/ai-risk-management-framework
- **ISO/IEC 42001:2023** (AI Management System) · **ISO/IEC 23894:2023** (AI risk management) · **ISO/IEC 24028:2020** (trustworthiness in AI) — iso.org
- **Mitchell M. et al.** — *Model Cards for Model Reporting* (ACM FAT\* 2019) · **Gebru T. et al.** — *Datasheets for Datasets* (Comm. ACM 2021)
- **AI Act** — Regulation EU 2024/1689 (art. 4 AI literacy, art. 5 prohibited, art. 6 + Annex III high-risk, art. 14 human oversight, art. 50 transparency)

## See also

- [`ai-act-conformite.md`](ai-act-conformite.md) — AI Act risk classification, obligations by tier
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — GDPR DPIA art. 35 (complementary to the ethics EIA)
- [`audit-conformite-ia.md`](audit-conformite-ia.md) — compliance audit (checks the application of this governance)
- [`politique-ia-entreprise.md`](politique-ia-entreprise.md) — AI policy and GenAI charter (deliverable of this governance)
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — IP & AI (complementary legal dimension)
- [`../data_scientist/ethique-ia-biais.md`](../data_scientist/ethique-ia-biais.md) — technical bias measurement (data-science coupling)
