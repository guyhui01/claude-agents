# Skill — AI Maturity Diagnostic

> Certifications: **CAP IABAC** · **Google Cloud Digital Leader** · **Azure AI-900** · **NIST AI RMF 1.0 Architect** (Certified Information Security) · **ISO/IEC 42001:2023 Lead Implementer** (PECB) · MIT Sloan AI Strategy Executive Education · Wharton AI for Business Executive Program
> Agent: AGENT-CONSULTANT-IA.md

## Objective

Rigorously assess an organization's **AI maturity level** through **triangulation of 3+ normative frameworks** (Gartner AI Maturity · MIT Sloan/BCG · Cap Gemini Digital Mastery), coupled with **normative governance** (NIST AI RMF 1.0 · ISO/IEC 42001:2023 AIMS · EU AI Act 2024/1689) and benchmarked against the **real sector** (McKinsey State of AI · Stanford HAI AI Index · Gartner Hype Cycle), in order to **prioritize** AI investments and define a realistic **quantified roadmap**.

## Frameworks mobilized (4 categories)

| Category | Normative frameworks |
|---|---|
| **AI maturity models** | Gartner AI Maturity Model · MIT Sloan/BCG · Cap Gemini Digital Mastery · Microsoft AI Maturity · IBM AI Ladder · CMMI for AI |
| **Normative governance** | NIST AI RMF 1.0 (2023) · ISO/IEC 42001:2023 AIMS · ISO/IEC 23894:2023 · EU AI Act 2024/1689 · OECD AI Principles 2019/2024 |
| **Market benchmarks** | McKinsey State of AI (annual) · Stanford HAI AI Index (annual) · Gartner Hype Cycle for AI (annual) · PWC AI Predictions · Deloitte State of AI |
| **Skills & Data** | DAMA-DMBOK 2 (2017) · EDM Council DCAM · Coursera/MIT AI for Business · Wharton/INSEAD AI Strategy |

## Gartner AI Maturity Model (2019+) — 5 levels

| Level | Name | Key characteristics |
|:---:|---|---|
| **1** | **Awareness** | Strategic AI discussions, no concrete investment |
| **2** | **Active** | Isolated PoCs and pilot projects, business experiments, no governance |
| **3** | **Operational** | At least one AI project in production, emerging governance, dedicated data team |
| **4** | **Systemic** | Every new digital project embeds AI, MLOps platform, mature governance |
| **5** | **Transformational** | AI at the heart of the business strategy, measured competitive advantage, AI-first culture |

**Field observations (Gartner Hype Cycle for AI, annual reports)**: most organizations sit at level 1 (Awareness) or 2 (Active). Level 5 (Transformational) remains rare. For a precise quantified positioning, refer to the annual Gartner CIO report + McKinsey/Stanford AI Index sector benchmarks.

**Typical measure**: organization positioning × sector benchmark × 18-36 month target ambition.

## MIT Sloan / BCG AI Maturity — 4 cohorts (*Artificial Intelligence in Business Gets Real*, 2018)

Joint MIT Sloan Management Review + Boston Consulting Group study of 3,000+ organizations across 28 industries — segmentation into **4 cohorts** by AI understanding and adoption:

| Cohort | % (2018) | Differentiating characteristics |
|---|:---:|---|
| ⭐ **Pioneers** | ~18% | Organizations that **understand AND have adopted** AI — market leaders, AI embedded in strategy |
| **Investigators** | ~33% | Understand AI but do not deploy beyond the pilot phase |
| **Experimenters** | ~16% | Pilot/adopt AI without deep understanding |
| **Passives** | ~34% | No significant adoption or understanding |

**Pioneers differentiators (vs Passives, MIT SMR/BCG 2018 study)**:
- Documented, business-aligned strategic AI approach
- Mature data/AI platforms (MLOps, data catalog, governance)
- AI ROI measured via business KPIs
- Institutionalized "Test and Learn" culture
- Hybrid Business + Data Science skills strongly valued
- Leadership commitment (executive AI sponsor)

> **Methodological note**: for updated 2024-2025 percentages and quantified Pioneers differentiators, refer to the annual MIT SMR/BCG updates (*Winning With AI* 2019, *Expanding AI's Impact* 2020+, *Achieving Individual and Organizational Value With AI* 2022+ series).

## Cap Gemini Digital Mastery (Westerman, Bonnet, McAfee 2012/2014)

A 2×2 matrix — **Digital Capabilities** (data, AI, platforms, cloud) × **Leadership Capabilities** (vision, governance, change management):

```
                  HIGH LEADERSHIP CAPABILITIES
                              │
   CONSERVATIVES              │           DIGITAL MASTERS
   (Strong leadership,        │           (Strong in both — top
    weak digital execution)   │            performers, +26% revenue)
                              │
   LOW ──────────────────────┼────────────────────── HIGH
   DIGITAL CAPABILITIES       │           DIGITAL CAPABILITIES
                              │
   BEGINNERS                  │           FASHIONISTAS
   (Weak in both — at         │           (Strong digital, no
    risk of disruption)       │            strategic leadership)
                              │
                  LOW LEADERSHIP CAPABILITIES
```

**Study of 400+ global companies** (Capgemini Consulting + MIT Center for Digital Business, 2012-2014): Digital Masters outperform by **+26% average profitability** and **+9% revenue** vs their sector peers. **Conservatives are better positioned** than Fashionistas to become Masters (leadership > tech with no vision).

## Microsoft AI Maturity Model + IBM AI Ladder

**Microsoft (5 levels)**: Foundational → Approaching → Aspirational → Mature → Leading — focused on Azure AI deployment.

**IBM AI Ladder (4 rungs)**: **Collect** (data foundation) → **Organize** (data governance) → **Analyze** (insights) → **Infuse** (AI embedded in processes). A reference for data prioritization before AI.

## Enriched assessment grid — 8 dimensions (vs 6 historically)

| # | Dimension | Indicators assessed | Score /5 | Weight |
|:---:|---|---|:---:|:---:|
| 1 | **AI Strategy & Vision** | Documented AI ambition, leadership alignment, dedicated annual budget, executive sponsor | | 15% |
| 2 | **Data & Infrastructure** | Data quality, cloud/edge, DataOps, data catalog, real-time pipelines | | 15% |
| 3 | **Skills & Talent** | Data scientists, ML engineers, prompt engineers, continuous training, academic partnerships | | 12% |
| 4 | **AI Governance & Ethics** | AI committee, AI policy, bias/transparency, NIST AI RMF, ISO 42001 | | 12% |
| 5 | **Use cases & Business value** | Number of cases in production, measured ROI, business adoption, time-to-value | | 15% |
| 6 | **Technology & MLOps/LLMOps** | Unified MLOps platform, model CI/CD, drift monitoring, model registry | | 11% |
| 7 | **Security & Compliance** *(new)* | NIS2, AI Act classification, GDPR/DPIA, OWASP LLM Top 10, third-party risk | | 10% |
| 8 | **Culture & Change Management** *(new)* | Business adoption, user training, internal communication, resistance management | | 10% |

**Overall weighted score** = Σ (dim. score × weight). Scale 0-5 with interpretation: 0-1.5 Initial · 1.5-2.5 Active · 2.5-3.5 Operational · 3.5-4.5 Systemic · 4.5-5 Transformational.

## NIST AI RMF 1.0 coupling (Jan. 2023) — 4 functions × diagnostic

| NIST function | Diagnostic question | Maturity score |
|---|---|:---:|
| **Govern** | Who is accountable for AI? Which policies? Which culture? | Assesses dim. 1, 4 |
| **Map** | What project context, actors, tolerable risk? AI Act classification? | Assesses dim. 4, 7 |
| **Measure** | How to quantify risks, performance, bias? Metrics dashboard? | Assesses dim. 5, 6 |
| **Manage** | How to treat, monitor, degrade gracefully? Mitigation plan? | Assesses dim. 4, 6, 7 |

**Rule**: any NIST score < 3/5 on **Govern** = block high-risk AI deployment (AI Act art. 6, Annex III) until governance is raised.

## ISO/IEC 42001:2023 AIMS coupling — certifiable AI Management System

A certifiable **AI Management System** framework (equivalent to ISO 27001 for cybersecurity) — **PDCA** cycle (Plan-Do-Check-Act):

| PDCA phase | ISO 42001 requirement | Maturity score |
|---|---|:---:|
| **Plan** | AI policy, AI risk management, AI impact assessment, roles & responsibilities | Dim. 1, 4 |
| **Do** | AI system lifecycle, data management, security controls, third-party AI | Dim. 2, 6, 7 |
| **Check** | AI performance monitoring, internal audit, management review | Dim. 5, 6 |
| **Act** | Continual improvement, nonconformity handling, corrective actions | Dim. 8 |

**ISO 42001 certification**: a gradual goal over 12-24 months — market differentiation (Consulting, banking, health, industry).

## Structured diagnostic method — 4 phases over 4-8 weeks

### Phase 1 — Preparation (week 1)
- Scoping with the Sponsor: scope, objectives, success KPIs, timeline
- Stakeholder identification: CIO, CDO/Head of AI, CHRO, key business units, CISO, DPO, Legal
- Internal kickoff communication

### Phase 2 — Collection (weeks 2-4)
**3-source triangulation**:
- **Qualitative interviews**: 12-25 individual interviews (30-45 min) — leadership, CIO, CDO, business, data scientists, CISO, legal, HR
- **Self-assessment questionnaire**: 60-80 questions across 8 dimensions, Likert scale 1-5, distributed via Typeform/Qualtrics to data/AI teams + business managers (target 100-300 respondents)
- **Documentary review**: IS strategy, org charts, ongoing AI projects, governance, AI provider contracts, AI charter, DPIA, AI registry

### Phase 3 — Analysis (weeks 5-6)
- Rating the 8 dimensions by source triangulation + weighting
- Gartner AI Maturity positioning (1-5)
- MIT Sloan cohort classification (Pioneers/Investigators/Experimenters/Passives)
- Cap Gemini quadrant (Beginners/Conservatives/Fashionistas/Digital Masters)
- NIST AI RMF coupling (Govern/Map/Measure/Manage gaps)
- Sector benchmark (McKinsey + Stanford AI Index + Gartner Hype Cycle)
- Identification of quick wins (< 3 months ROI) vs structural initiatives (12-18 months)

### Phase 4 — Read-out (weeks 7-8)
- Sponsor pre-validation (D-7 of the strategy committee)
- Strategy-committee presentation: 30-45 min, 15-20 slides
- Roadmap prioritization workshop with stakeholders
- 90-day action plan + 18-36 month roadmap

## Self-assessment questionnaire — Typical structure

**60-80 questions** spread across 8 dimensions × 8-10 questions each, Likert scale 1-5:

```
AI Strategy & Vision (8 questions, examples)
  Q1. Our organization has a documented, communicated AI vision
       1 (not at all) ─── 2 ─── 3 ─── 4 ─── 5 (fully agree)
  Q2. An annual AI budget is allocated and tracked
  Q3. An executive sponsor (CEO/executive board) carries the AI strategy
  ...

Data & Infrastructure (8 questions)
  Q9. We have a unified data catalog (with lineage)
  Q10. Our critical data is available in real time
  ...

[8 dimensions × 8-10 questions = 64-80 questions]
```

**Score calculation**: weighted average × dimension weight × interview triangulation.

## Sector benchmark — Cross-referencing market frameworks

| Source | Data extracted | Diagnostic use |
|---|---|---|
| **McKinsey State of AI** annual | % GenAI adoption by sector, average AI ROI, most mature functions | Compare client maturity vs sector average |
| **Stanford HAI AI Index Report** annual | AI adoption by company size, AI VC investments, publications | International benchmark |
| **Gartner Hype Cycle for AI** annual | Tech phases (Innovation Trigger → Plateau of Productivity), tech maturity | Assess technologies being adopted |
| **PWC AI Predictions** annual | Trends, projected ROI, adoption barriers by sector | Strategic roadmap scoping |
| **Deloitte State of AI in the Enterprise** annual | Enterprise maturity by size/sector, measured ROI | MIT Sloan cohort calibration |

**Rule**: benchmark **always by sector** (banking ≠ health ≠ industry ≠ retail) — cross-sector comparison = a major anti-pattern.

## Quantified sector example — European multi-country hospital group

**Anonymized context**: European hospital group present in 4 European countries (mix of public teaching hospitals + private clinics), ~15,000 beds, ~45,000 staff (medical + paramedical + administrative), ~€5B revenue/year. AI maturity diagnostic conducted over **6 weeks** by an external consulting firm + the Medical Innovation Department team.

**Applied method**:
- 22 interviews (CEO, Medical Innovation Director, CIO, CDO, CISO, DPO, 8 department heads, 5 physicians, 3 data scientists, 2 nurse managers)
- 72-question questionnaire distributed to 850 staff (220 respondents — medical 45%, paramedical 35%, admin/support 20%)
- Documentary review: IS strategy, AI charter, 12 ongoing AI projects, DPIA, provider contracts

**8-dimension scoring T0 vs health-sector benchmark**:

| Dimension | Score T0 /5 | Health-sector benchmark | Gap |
|---|:---:|:---:|:---:|
| AI Strategy & Vision | 3.0 | 2.8 | +0.2 ✅ |
| Data & Infrastructure | 2.0 | 2.5 | -0.5 🔴 |
| Skills & Talent | 2.5 | 2.4 | +0.1 ✅ |
| AI Governance & Ethics | 3.5 | 2.6 | +0.9 ⭐ |
| Use cases & Business value | 2.0 | 2.7 | -0.7 🔴 |
| Technology & MLOps/LLMOps | 1.5 | 2.0 | -0.5 🔴 |
| Security & Compliance | 3.8 | 3.2 | +0.6 ⭐ |
| Culture & Change Management | 2.5 | 2.3 | +0.2 ✅ |
| **Overall weighted score** | **2.6/5** | **2.5/5** | +0.1 |

**Cross-classifications**:
- **Gartner**: level **2 "Active"** (isolated PoCs, emerging governance)
- **MIT Sloan cohort**: **Investigators** (understand AI, deployments limited to the pilot stage)
- **Cap Gemini quadrant**: **Conservatives** (strong Leadership Capabilities, weak Digital Capabilities)
- **NIST AI RMF gap**: Govern 3.5/5 ✅, Map 2.8/5 🟡, Measure 1.8/5 🔴, Manage 2.5/5 🟡

**AI use cases identified (existing audit + opportunities)**:
- In production (5): radiology reading support (5 pilot sites), pre-consultation chatbot, operating-room scheduling (1 site), early sepsis detection (ICU unit PoC), ICD-10 coding copilot
- In PoC (7): oncology genomics, readmission prediction, medical scribe, dermatology AI vision, optimized patient pathway, clinical-trial matching research, pharmacy stock optimization
- Recommended (12): see roadmap

**Recommended 18-month roadmap**:

| Phase | Duration | Objective | Investment | Target ROI |
|---|:---:|---|:---:|---|
| **Phase 1 — Foundations + Quick wins** | T0-T+6 | Unified MLOps platform + scaling 3 proven cases (radiology AI, medical scribe, pre-consult chatbot) | €4.5M | Radiologist productivity +25%, physician admin time -30%, patient NPS +8 pts |
| **Phase 2 — Use-case scaling** | T+6-T+12 | Mature MLOps + deployment of 5 new cases (sepsis, readmissions, limited genomics, dermatology, OR optimization) | €5M | Sepsis mortality -15%, readmissions -8%, OR occupancy rate +12% |
| **Phase 3 — Transformational** | T+12-T+18 | Extended precision genomics, AI clinical research, end-to-end AI patient pathway | €2.5M | Cancer time-to-treatment -20%, clinical-trial recruitment x2 |

**Overall budget**: **€12M** over 18 months (CAPEX €7M + OPEX €5M)

**Integrated regulatory compliance**:
- AI Act classification: 8 high-risk cases (Annex III), 4 limited-risk cases — DPIA + technical documentation mandatory
- ISO/IEC 42001: AIMS certification target T+18 months (health-market differentiation)
- NIST AI RMF: coverage of the 4 functions integrated into AI project governance

**Projected gains T+18 months** (post-implementation):
- MIT Sloan cohort: move **Investigators → Pioneers** (exit pilot phase, AI scaled in production)
- Gartner: level 2 → **level 3.5 "Operational/Systemic"**
- Medical staff productivity: +18% (time freed for clinically value-adding tasks)
- Average length-of-stay reduction: -8% (optimized pathway + early detection)
- Hospital mortality: -12% (early sepsis detection + AI-assisted triage)
- Patient NPS: 32 → **52**
- AI program ROI: **22 months** (quality + productivity gains > investment)

## 8 AI maturity-diagnostic anti-patterns

- ❌ **A single, non-triangulated maturity model** (Gartner alone) → consulting-firm bias, no robustness — minimum 3 frameworks (Gartner + MIT Sloan + Cap Gemini)
- ❌ **1-5 scoring with no sector benchmark** → impossible interpretation, "3/5" can mean excellent (health) or weak (tech)
- ❌ **IT-only diagnostic** (forgetting the business, culture, change-management dimensions) → a tech-centric roadmap doomed to adoption failure
- ❌ **No NIST AI RMF + ISO 42001 coupling** → maturity diagnostic with no governance audit, inevitable high-risk deployment blockage
- ❌ **Generic cross-sector benchmark** (banking ≠ health ≠ industry) → distorted comparisons, poorly calibrated action plans
- ❌ **Generic recommendations** ("improve data culture", "invest in MLOps") → not actionable, not quantified, not prioritized
- ❌ **No quick wins (< 3 months)** identified → a demotivating roadmap, loss of project momentum
- ❌ **Diagnostic delivered without Sponsor pre-validation** → rejection at the strategy-committee read-out = 4-8 weeks lost + firm credibility

## Tools

- **Assisted diagnostic platforms**: Gartner Ignition · Forrester Decision Tools · IBM AI Adoption Assessment · Microsoft AI Maturity Assessment · BCG Build · McKinsey QuantumBlack diagnostic
- **Questionnaires & surveys**: Typeform · Qualtrics · SurveyMonkey · MS Forms · Confluence Forms
- **Qualitative interviews**: Notion · Dovetail · NVivo (qualitative analysis) · Otter.ai (transcription)
- **Radar/visualization**: PowerBI · Tableau · Miro (collaborative radar) · Lucidchart · custom D3.js
- **Sector benchmark**: Gartner Subscriptions · Forrester Wave · IDC MarketScape · McKinsey Insights · Stanford AI Index (free)
- **Diagnostic documentation**: Confluence · Notion · SharePoint · GitBook (client reports)
- **AI use-case mapping**: Productboard · Aha! · Notion · Airtable (AI Use Case Registry)

## Deliverables

- **8-dimension AI maturity radar** (T0 + 18-month target visualization)
- **Complete diagnostic report** (40-60 pages): methodology, detailed scoring, sector benchmark, NIST AI RMF/ISO 42001 gaps, recommendations
- **Strategy-committee executive summary** (10-15 slides)
- **Quantified sector benchmark** (positioning vs McKinsey + Stanford AI Index + Gartner)
- **AI use-case mapping** (in production + PoC + recommended × AI Act risk tier × estimated ROI)
- **Identified quick wins** (< 3 months ROI, detailed plan)
- **18-36 month roadmap** quantified (phases × investment × projected ROI × milestones)
- **90-day action plan** (immediate post-read-out)
- **Initial AI Risk Register** (NIST AI RMF coupling)
- **ISO/IEC 42001 compliance plan** (if certification is targeted)

## Output format

For each diagnostic engagement, specify:
- **Client sector**: banking/finance · health · industry · retail · telecom · energy · public · tech scale-up · defense
- **Organization size**: SME (< 250 staff) · mid-market (250-5,000) · large group (5,000-50,000) · multinational (> 50,000)
- **A priori estimated AI maturity**: none (greenfield) · isolated PoCs · limited production · scaling · mature (recalibration)
- **Study budget**: light diagnostic (€15-30K, 3 weeks) · standard (€40-80K, 6 weeks) · in-depth (€100-200K, 8 weeks + transformation plan)
- **Expected delivery time**: 3-8 weeks depending on depth
- **Sponsorship**: CEO · CDO · Head of Innovation · CIO · executive board
- **Applicable sector regulation**: AI Act high-risk (health, recruitment, credit scoring, biometrics, critical infrastructure), DORA (banking), MDR/IVDR (health), ITAR (defense)

## Sources

- **Gartner AI Maturity Model** — Gartner Research (2019+, annual update) — 5 levels Awareness/Active/Operational/Systemic/Transformational
- **Ransbotham S., Kiron D., Gerbert P., Reeves M.** — *Artificial Intelligence in Business Gets Real*, MIT Sloan Management Review in partnership with BCG (September 2018) — 4 cohorts **Pioneers / Investigators / Experimenters / Passives** (later annual series: *Winning With AI* 2019, *Expanding AI's Impact* 2020, *Achieving Individual and Organizational Value With AI* 2022+)
- **Westerman G., Bonnet D., McAfee A.** — *Leading Digital: Turning Technology into Business Transformation* (HBR Press, 2014) + Cap Gemini Digital Mastery (2012, rev. 2017)
- **NIST AI Risk Management Framework 1.0** — National Institute of Standards and Technology (January 2023) — 4 functions Govern/Map/Measure/Manage
- **ISO/IEC 42001:2023** — Information technology — Artificial intelligence — Management system (AIMS) — certifiable
- **ISO/IEC 23894:2023** — Information technology — Artificial intelligence — Guidance on risk management
- **EU AI Act** — Regulation (EU) 2024/1689 of June 13, 2024 — OJ L 2024/1689 (4 risk tiers)
- **OECD AI Principles** — OECD Council Recommendation (2019, 2024 revision)
- **McKinsey State of AI** — McKinsey Global Institute (annual report 2017+, e.g. *The State of AI in 2024: Generative AI's breakout year*)
- **Stanford HAI AI Index Report** — Stanford Human-Centered AI Institute (annual 2017+)
- **Gartner Hype Cycle for AI** — Gartner Research (annual)
- **DAMA-DMBOK 2** — *DAMA Data Management Body of Knowledge*, 2nd edition (DAMA International, Technics Publications, 2017) — data foundations coupling
- **CMMI for Development & AI extensions** — Carnegie Mellon Software Engineering Institute
- **IBM AI Ladder** — IBM Cloud and Cognitive Software whitepapers (2019+)

## See also

- [benchmark-solutions-ia.md](benchmark-solutions-ia.md) — AI provider/solution benchmark (Gartner MQ, Forrester Wave, IDC MarketScape)
- [feuille-route-ia.md](feuille-route-ia.md) — formalizing the AI roadmap post-diagnostic
- [transformation-digitale.md](transformation-digitale.md) — digital-transformation program encompassing AI
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — operational AI Act compliance (4-tier classification)
- [`../juridique_ia/gouvernance-ethique-ia.md`](../juridique_ia/gouvernance-ethique-ia.md) — AI ethics governance, AI committee
- [`../juridique_ia/audit-conformite-ia.md`](../juridique_ia/audit-conformite-ia.md) — AI compliance audit (ISO 42001, NIST AI RMF)
- [`../juridique_ia/politique-ia-entreprise.md`](../juridique_ia/politique-ia-entreprise.md) — enterprise AI policy
- [`../scrum/po-ai-product.md`](../scrum/po-ai-product.md) — AI product vision (PSPO-AI Scrum.org)
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — AI Risk Register NIST AI RMF
