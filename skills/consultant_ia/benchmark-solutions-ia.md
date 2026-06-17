# Skill — AI Solution Benchmark

> Certifications: **AWS Cloud Practitioner (CLF-C02)** · **Google Cloud Digital Leader** · **Azure Fundamentals (AZ-900)** · CAP IABAC · Gartner Subscriptions (Peer Insights/Magic Quadrant) · Forrester Decisions
> Agent: AGENT-CONSULTANT-IA.md

## Objective

Rigorously select the **best AI solution** (LLM/MLOps/business platform) for a client context, relying on the **4 main analyst frameworks** (Gartner Magic Quadrant, Forrester Wave, IDC MarketScape, G2 Grid), the **peer reviews** (Gartner Peer Insights, Capterra, TrustRadius), the **Forrester TEI** (Total Economic Impact) economic method, a structured **RFI→RFP→POC** method, and the **3-5 year TCO** — to produce a reasoned, traceable recommendation that is defensible to the strategy committee.

## Frameworks mobilized (4 categories)

| Category | Frameworks |
|---|---|
| **Analyst frameworks** | Gartner Magic Quadrant + Critical Capabilities · Forrester Wave · IDC MarketScape · G2 Grid · Constellation ShortList |
| **Peer reviews** | Gartner Peer Insights · Capterra · TrustRadius · GetApp · Software Advice |
| **Economic methods** | Forrester TEI (Total Economic Impact) · 3-5 year TCO · ROI / NPV / Payback / IRR (see cadrage-projet) |
| **Procurement & quality** | Kraljic Matrix (1983) · ISO/IEC 25010:2023 Quality Model · ITIL 4 Service Value Chain · RFI/RFP/POC |

## Gartner Magic Quadrant — Official methodology

Evaluation on **2 axes** (Ability to Execute × Completeness of Vision) — **4 quadrants**:

```
                  HIGH ABILITY TO EXECUTE
                          │
        CHALLENGERS       │       LEADERS
        (Execute well     │       (Execute well
         today without a  │        + clear vision of
         strong vision of │        the coming market)
         the future       │
         market)          │
                          │
   LOW ─────────────────────────── HIGH
   COMPLETENESS OF VISION │       COMPLETENESS OF VISION
                          │
        NICHE PLAYERS     │       VISIONARIES
        (Precise segment  │       (Understand where the
         focus OR weakly  │        market is going but
         differentiated)  │        do not execute
                          │        well yet)
                          │
                  LOW ABILITY TO EXECUTE
```

**Gartner Critical Capabilities complement**: detailed scoring of the **critical capabilities** per target use case (e.g. "Data Science Platforms - Use Case: Automated Machine Learning"). Combining MQ (positioning) + CC (capabilities) = complete coverage.

**Recent verified example**: Magic Quadrant for Data Science and Machine Learning Platforms 2025 — Leaders: Databricks, AWS, Microsoft, Google, Dataiku, Altair, DataRobot + IBM (moved from Challenger to Leader). *Source: official Gartner 2025 reports.*

## Forrester Wave — Official methodology (2024 update)

⚠️ **Forrester removed the "Challengers" category in 2024**. Current categories: **3 segments** (Leaders / Strong Performers / Contenders).

| Category | Official Forrester definition |
|---|---|
| **Leaders** | Highest scores across all criteria, strong offerings, robust strategy, significant market presence |
| **Strong Performers** | Solid offerings and strategy but gaps vs Leaders; viable for specific needs or unique strengths |
| **Contenders** | Credible products and strategy but behind Strong Performers and Leaders |

**3 evaluation dimensions** (a methodological differentiator vs Gartner MQ, which has 2):
1. **Current offering** — the product's current capabilities (generally available, not roadmap)
2. **Strategy** — credibility and differentiation of the future direction
3. **Customer feedback** — real customer evaluation (introduced to rebalance the "vendor stories" bias)

## IDC MarketScape — Official methodology

**4 categories** on 2 axes (Capabilities × Strategies 3-5 years):

| Category | Definition |
|---|---|
| **Leaders** | Strengths across all strategy AND capability areas |
| **Major Players** | Strengths in the majority of strategy and capability areas |
| **Contenders** | Strengths, but limited in certain areas (geography or specific features) |
| **Participants** | Limited market presence, capabilities/strategies under construction |

**IDC MarketScape specifics**:
- **Bubble size** = the vendor's market share (market-weight information built into the reading)
- **+/–** next to the name = year-over-year growth rate (growth vs market)
- **Capabilities score** = short-term execution (product, go-to-market, business)
- **Strategy score** = alignment of the vendor's strategy with client needs 3-5 years out

## G2 Grid — Peer-based methodology

**4 segments** on 2 axes (Market Presence × Satisfaction) — **quarterly update**:

| Segment | Criteria | Typical profile |
|---|---|---|
| **Leaders** | High Satisfaction + High Market Presence (top-right quadrant) | Top of the market; ~3-4% of products listed/quarter |
| **High Performers** | High Satisfaction + Lower Market Presence (top-left) | Often small or new products, excellent UX, limited brand — scale-up territory |
| **Contenders** | Lower Satisfaction + High Market Presence (bottom-right) | Large, well-known products, mixed reviews — legacy enterprise tools |
| **Niche** | Lower Satisfaction + Lower Market Presence (bottom-left) | Serve specific segments without broad satisfaction or visibility |

**Minimum publication thresholds**: ≥ 6 products in the category, ≥ 10 reviews/product, ≥ 150 total reviews. **Market Presence** computed from employee count, revenue estimates, web presence, social, review volume.

## Constellation ShortList — Analyst-curated alternative

**Constellation Research** publishes analyst-curated ShortLists (annual update, sometimes semi-annual on fast-moving markets) — a **specialized digital-transformation alternative** vs the generalist Gartner. Methodology: analyst-led research + multi-input (early-adopter clients + practitioners + market momentum).

**When to prefer Constellation ShortList over Gartner MQ?**
- Digital-transformation decisions (Constellation's differentiating focus)
- Early adopters / innovation-driven leaders
- Very recent markets not yet covered by the Gartner MQ

## Peer review platforms — Counterweight to the analyst firm

| Platform | Specificity | Preferred use |
|---|---|---|
| **Gartner Peer Insights** | Verified enterprise reviews (no anonymous), broad coverage | Independent validation vs Gartner MQ (anti-paid-bias) |
| **G2** | Broad B2B SaaS reviews, 100k+ products | Effective user satisfaction, scale-ups |
| **TrustRadius** | Verified enterprise B2B reviews, rich qualitative methodology | Detailed CIO/IT reviews |
| **Capterra** | SMB-focused, large catalog, free reviews | SMEs, first benchmarks |
| **Software Advice** | Comparisons + free recommendations (Capterra sister) | Gartner Group portfolio (vs the enterprise-focused Peer Insights sister) |
| **GetApp** | Filtering by features, integrations | Precise per-feature scoring |

**Anti-pattern**: relying solely on the Gartner MQ (vendor-paid) with no peer-review counterweight → possible bias toward the payers.

## Forrester TEI — Total Economic Impact

Forrester Consulting methodology (20+ years) for the economic evaluation of a technology investment over **3 years** — **4 components**:

| Component | Definition |
|---|---|
| **Cost** | All required spend: licenses, integration, training, RUN, support, migration |
| **Benefits** | Business value delivered by the product (revenue, savings, productivity, time-to-value) |
| **Flexibility** | Future value (reversibility, extension capability, strategic optionality) |
| **Risk** | Adjusted uncertainties (technology, implementation, adoption, vendor) — Monte Carlo risk-adjustment possible |

**4-phase process**:
1. **Research Phase**: stakeholder + analyst interviews — data collection
2. **Composite Organization**: Forrester builds a "typical organization" representative of the interviewees (3-5 companies)
3. **Financial Modeling**: 3-year financial model + best/worst case scenarios
4. **Risk-adjustment**: weighting of uncertainties on Cost and Benefits

**Key weighting**: "Equal weight on the measure of benefits and the measure of costs" — a balanced value ↔ cost analysis.

## Kraljic Matrix (1983) — Procurement strategy applied to AI

Peter Kraljic's model (*Purchasing Must Become Supply Management*, HBR 1983) — purchasing segmentation on 2 axes (Profit Impact × Supply Risk) — applicable to AI sourcing:

| Category | Profit Impact × Supply Risk | AI sourcing strategy |
|---|---|---|
| **Strategic items** | High × High | Critical LLM (Claude/GPT-4o on a regulated case) → long-term strategic partnership + dual-sourcing |
| **Bottleneck items** | Low × High | Mandatory niche solution (e.g. the only sector RAG vendor) → secure availability + hard SLA contracts |
| **Leverage items** | High × Low | Commodity category (Azure AI APIs, AWS Bedrock APIs) → competitive tendering, multi-sourcing |
| **Non-critical items** | Low × Low | Auxiliary tools (internal chatbot, batch translation) → standardization, low price |

**AI application**: classifying each candidate AI solution into these 4 categories drives the RFP strategy, the number of vendors to shortlist, and the contractual clauses (lock-in, exit, SLA, IP).

## ISO/IEC 25010:2023 — Quality Model (Edition 2, November 2023)

**9 characteristics** structuring the benchmark criteria grid (a major update vs Edition 1 from 2011):

| Characteristic | Description |
|---|---|
| **Functional Suitability** | The product's ability to provide functions meeting the needs (Completeness · Correctness · Appropriateness) |
| **Performance Efficiency** | Performance vs resources used (Time behaviour · Resource utilization · Capacity) |
| **Compatibility** | Ability to exchange information with other systems (Co-existence · Interoperability) |
| **Interaction Capability** *(new 2023)* | Broadened usability (Appropriateness recognizability · Learnability · Operability · User error protection · UI aesthetics · Accessibility · **Inclusivity** · **Self-descriptiveness**) |
| **Reliability** | Maintaining performance under given conditions (Faultlessness · Availability · Fault tolerance · Recoverability) |
| **Security** | Information & data protection (Confidentiality · Integrity · Non-repudiation · Accountability · Authenticity · **Resistance** new) |
| **Maintainability** | Effectiveness of modifications (Modularity · Reusability · Analysability · Modifiability · Testability) |
| **Flexibility** *(replaces Portability 2011)* | Adaptability to different contexts (Adaptability · Scalability · Installability · Replaceability) |
| **Safety** *(new 2023)* | Operational safety (Operational constraint · Risk identification · Fail safe · Hazard warning · Safe integration) |

→ Using these 9 characteristics as the **skeleton of the benchmark criteria grid** guarantees exhaustive coverage (vs the 8 characteristics of the obsolete 2011 version).

## Structured 6-step benchmark method (RFI → Shortlist → RFP → POC → TCO → Decision)

```
1. Scoping & weighted criteria
   ├── Must-haves (eliminatory) — Kraljic Strategic/Bottleneck items
   ├── Should-haves (differentiating) — weight 1-5
   └── Nice-to-haves (bonus) — weight < 1

2. Long list & RFI (Request For Information)
   ├── 8-15 candidate solutions (analyst review + peer reviews + word of mouth)
   ├── RFI questionnaire 30-50 questions (capabilities, references, indicative price)
   └── Responses within 2-3 weeks

3. Shortlist — 3-5 solutions maximum (anti decision-paralysis)

4. RFP (Request For Proposal) on the shortlist
   ├── Detailed requirements (use cases, volumes, SLA, compliance)
   ├── Structured technical demos (identical script)
   └── Quantified responses + sector client references

5. Technical POC on 1-2 priority use cases
   ├── Duration 4-8 weeks, controlled scope
   ├── Objective success criteria defined before the POC
   └── Production-like conditions (load, integration, security)

6. Final evaluation + 3-5 year TCO + TEI + Decision
   ├── Weighted grid scored by independent evaluators
   ├── Consolidated TCO over 3-5 years (see TCO section)
   ├── Forrester TEI (Cost + Benefits + Flexibility + Risk)
   └── Reasoned recommendation + ADR (Architecture Decision Record)
```

## 3-5 year TCO — Complete components

| Category | Typical items |
|---|---|
| **Licenses / Subscriptions** | Recurring annual cost per user/usage/feature |
| **Initial integration** | IS connectors, ETL, security, identity (SSO/SCIM), data migration |
| **Training** | IT team + business user training (initial + recurring) |
| **RUN / Support** | Hosting (if on-prem), SRE/Ops, N1/N2/N3 support |
| **Maintenance** | Security patches, version upgrades, technical debt |
| **Compliance** | Audits, certifications (ISO 27001/42001), DPIA, third-party risk DORA |
| **Exit / Reversibility** | Cost of migrating to an alternative at contract end-of-life |

**Analysis target**: 3-year TCO minimum (5 years for core/critical IS). Calculation **per scenario** (Conservative / Probable / Optimistic).

## Quantified sector example — European manufacturing group

**Anonymized context**: European manufacturing group (12 production sites, ~8,500 employees, ~€1.2B revenue). **"Smart Factory 2026"** program — selection of a unified MLOps platform + quality computer vision (3 pilot sites) + predictive maintenance (5 pilot sites). 4-month benchmark engagement.

**Applied Kraljic Matrix scoping**:
- MLOps platform: **Strategic item** (High Impact × High Risk) → 5+ year partnership, dual-sourcing acceptable
- Quality computer vision: **Bottleneck item** (Low Impact × High Risk because industrial niche) → contract securing + moderate lock-in clauses
- Predictive maintenance: **Leverage item** (High Impact × Low Risk because broad competitive offering) → vigorous competitive tendering

**Long list (RFI 12 candidates)**: Databricks · Dataiku · DataRobot · Azure ML · AWS SageMaker · Google Vertex AI · Domino Data Lab · H2O.ai · Snowflake · Iguazio · cnvrg.io · Anaconda Enterprise

**Shortlist of 5 finalists (post-RFI)**: **Databricks · Dataiku · DataRobot · Azure ML · AWS SageMaker** (alignment with Gartner MQ 2025 Leaders Data Science & ML Platforms + Forrester Wave Strong Performers + consistent Gartner Peer Insights/G2 peer reviews).

**Weighted ISO/IEC 25010:2023 grid (excerpt, 28 criteria total)**:

| 25010 characteristic | Weight | Key benchmark criteria |
|---|:---:|---|
| Functional Suitability | 20% | AutoML, NLP, native computer vision, LLM integration, MLOps governance |
| Performance Efficiency | 12% | Inference latency, throughput, auto-scaling, cost per prediction |
| Compatibility | 10% | SAP/industrial PLC connectors, ONNX/PMML formats, multi-cloud |
| Interaction Capability | 8% | Data scientist UI, citizen AI mode, accessibility, docs |
| Reliability | 10% | SLA 99.9%+, MTBF, disaster recovery, RTO/RPO |
| Security | 12% | ISO 27001/42001, SOC 2 Type II, encryption, IAM, audit logs |
| Maintainability | 8% | Model CI/CD, versioning, A/B testing, drift detection |
| Flexibility | 10% | Multi-cloud, on-prem option, horizontal scaling, hybrid edge |
| Safety | 10% | AI Act high-risk OK (manufacturing safety-critical), fail-safe, hazard warning |

**RFP + POC (2 use cases, 6 weeks/finalist on the top 3)**: computer-vision weld-defect detection (case 1) + predictive maintenance on 3 critical lines (case 2). 5 vendors invited, 3 retained for the POC (Databricks, Dataiku, DataRobot).

**5-year comparative TCO (excerpt, probable scenario)**:

| Finalist | Licenses | Integration | Training | RUN | Maintenance | Exit | 5-year TCO |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Databricks | €1.8M | €0.8M | €0.4M | €0.6M | €0.3M | €0.3M | **€4.2M** |
| Dataiku | €1.4M | €1.0M | €0.5M | €0.7M | €0.4M | €0.4M | **€4.4M** |
| DataRobot | €2.1M | €0.7M | €0.3M | €0.5M | €0.3M | €0.3M | **€4.2M** |

**Forrester TEI 3 years (manufacturing composite organization)**:
- Cost: €2.8M
- Benefits: €6.2M (scrap-rate reduction, MTBF gain, productivity, line availability)
- Flexibility: positive (extension to 9 other sites possible)
- Risk: -€0.4M (risk-adjusted Monte Carlo P80)
- **3-year NPV: +€3.0M · Payback: 22 months · 3-year ROI: 107%**

**Traced decision (ADR)**: **Databricks** (Gartner MQ 2025 DSML Leader + weighted-grid score 4.1/5 + successful POC + competitive TCO + Lakehouse architecture differentiation useful for SAP integration + Senseye predictive maintenance via partner integration).

**Complementary solutions retained**: **Cognex** (industrial computer vision, niche Bottleneck leader) + **Senseye** (predictive maintenance, acquired by Siemens, native Databricks integration).

**Projected gains on 3 pilot sites T+18 months**:
- Scrap rate: 3.8% → **2.8%** (-26%)
- Critical-line MTBF: 720h → **970h** (+35%)
- Line availability: 87% → **95%** (+8 pts)
- 5-year investment: **€4.2M** platform + **€2.5M** computer-vision/predictive-maintenance integration = €6.7M
- Consolidated ROI: **22 months**, 3-year NPV +€3.0M, recurring gain ~€2M/year after extended rollout to 9 other sites

## 8 AI solution-benchmark anti-patterns

- ❌ **Benchmark with no criteria weighting** (each evaluator prioritizes differently) → random result, not defensible to the strategy committee
- ❌ **Shortlist > 5 solutions** → analysis paralysis, POC too costly, delayed decision
- ❌ **No technical POC** (purely theoretical decision on a vendor demo) → bad surprise in production
- ❌ **1-year TCO** instead of 3-5 years → masks RUN costs, version upgrades, exit
- ❌ **Confusing Gartner Magic Quadrant and Forrester Wave** (different methodologies: 2 Gartner axes vs 3 Forrester dimensions, 4 Gartner categories vs 3 Forrester since 2024)
- ❌ **Ignoring peer reviews** (Gartner Peer Insights, G2, TrustRadius) as a counterweight to paid consulting firms
- ❌ **No exit / reversibility criteria** in the RFP → vendor lock-in, prohibitive exit cost
- ❌ **Decision without production-conditions testing** (load, IS integration, security, compliance) → a sandbox POC ≠ production reality

## Tools

- **Analyst platforms**: Gartner Subscriptions (Magic Quadrant + Peer Insights + Critical Capabilities + Hype Cycle) · Forrester Decisions · IDC Research · Constellation Research
- **Peer reviews & comparison**: G2 · TrustRadius · Capterra · GetApp · Software Advice · PeerSpot · ProcessUnity (TPRM)
- **RFP/RFI management**: Loopio · RFPIO · QorusDocs · Responsive (formerly RFPIO) · Notion (open-source templates)
- **Weighted grids & scoring**: Excel/Google Sheets templates · Smartsheet · Airtable · DecisionLink
- **TCO/TEI calculators**: Forrester TEI calculator (per partner vendor) · Vendor TCO calculators (Databricks, Snowflake, etc.) · Custom Excel
- **POC tracking**: Confluence (POC documentation) · Notion · Jira (POC tickets/issues)

## Deliverables

- **Structured benchmark framework** (engagement charter + weighted criteria + Kraljic positioning)
- **Long list RFI + Shortlist + RFP** standardized documents
- **Weighted benchmark grid** (ISO/IEC 25010:2023, 9 characteristics)
- **Structured POC results** (use cases, success criteria, measured results)
- **Comparative 3-5 year TCO** (3 scenarios: Conservative/Probable/Optimistic)
- **Forrester TEI** (Cost + Benefits + Flexibility + Risk, 3-year NPV, Payback)
- **Reasoned recommendation** (executive 1-2 pages + technical detail 10-20 pages)
- **ADR** (Architecture Decision Record) signed and traced for future governance
- **Documented reversibility / exit plan** (contractual clauses, migration cost)
- **Decision-making strategy-committee reporting** (5-10 slides) with the final recommendation

## Output format

For each benchmark engagement, specify:
- **Solution category**: LLM/GenAI · MLOps platform · computer vision · predictive maintenance · RPA+AI · NLP · vector DB · specialized MLOps
- **Constraints**: GDPR, AI Act high-risk, sovereignty (SecNumCloud), DORA banking, MDR health, ITAR defense, on-prem mandatory
- **Existing stack**: main cloud, languages, frameworks, identity (Active Directory/Okta)
- **Priority criteria**: performance · cost · time-to-market · differentiation · reversibility · compliance
- **Decision timeframe**: urgent (< 2 months light benchmark) · standard (3-6 months RFP+POC) · strategic (6-9 months full TEI)
- **Benchmark budget**: light (€15-30K desk research + grid) · standard (€40-80K + RFP + 1 POC) · in-depth (€100-200K + 2 POC + full TEI)

## Sources

- **Gartner Magic Quadrant Research Methodology** — Gartner Research (public methodology) — 2 axes, 4 quadrants
- **Forrester Wave™ Methodology** — Forrester Research (2024 update: removal of the Challengers category; 3 current categories)
- **IDC MarketScape Methodology** — International Data Corporation (4 categories Leaders/Major Players/Contenders/Participants)
- **G2 Grid Methodology** — G2 Inc. (quarterly update, 4 segments Leaders/High Performers/Contenders/Niche)
- **Constellation ShortList** — Constellation Research (analyst-curated, annual update, digital-transformation focus)
- **Forrester Total Economic Impact (TEI) Methodology** — Forrester Consulting (20+ year methodology, 4 components Cost/Benefits/Flexibility/Risk over 3 years)
- **Kraljic P.** — *Purchasing Must Become Supply Management*, Harvard Business Review (1983) — 2×2 sourcing portfolio matrix
- **ISO/IEC 25010:2023** — *Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model* (Edition 2, November 2023) — 9 quality characteristics
- **NIST SP 800-145** — *The NIST Definition of Cloud Computing* (2011) — essential cloud definitions for benchmark criteria
- **Gartner Magic Quadrant for Data Science and Machine Learning Platforms 2025** — Leaders: Databricks, AWS, Microsoft, Google, Dataiku, Altair, DataRobot, IBM
- **Gartner Magic Quadrant for Cloud AI Developer Services 2024** — Leaders: Microsoft, Google
- **Gartner Peer Insights** — verified enterprise reviews platform (MQ counterweight)

## See also

- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — prior AI maturity diagnostic (8 dimensions) before the solution benchmark
- [feuille-route-ia.md](feuille-route-ia.md) — AI roadmap, sequencing the benchmarks per initiative
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — quick ROI costing upstream of the in-depth benchmark
- [proposition-commerciale.md](proposition-commerciale.md) — RFP response (vendor side, mirror of the client-side RFI/RFP method)
- [cadrage-poc-ia.md](cadrage-poc-ia.md) — POC scoping within the benchmark method (step 5)
- [transformation-digitale.md](transformation-digitale.md) — transformation program where the benchmarks fit in
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — project Risk Register + ICT Third-Party Risk DORA (benchmark contractual clauses)
- [`../business_analyst/cadrage-projet.md`](../business_analyst/cadrage-projet.md) — Build/Buy/SaaS/Lease tree + Business Case (see benchmark upstream scoping)
- [`../business_analyst/pilotage-projet.md`](../business_analyst/pilotage-projet.md) — steering the implementation program post-benchmark
