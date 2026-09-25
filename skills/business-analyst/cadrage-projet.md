# Skill — MOA Project Scoping

> Certifications: **PMI-PBA** · **PMP** · **PRINCE2 Practitioner** · **IIBA CBAP** · **TOGAF 10** · ISO 21500
> Agent: AGENT-BUSINESS-ANALYST.md

## Objective

Define the scope, business case, governance and success conditions of a project **before its formal launch** — produce the **initiation** artifacts (scoping note, **PMBOK Project Charter**, **PRINCE2 PID**) that authorize the budget commitment and formally appoint the MOA Project Manager.

## BABOK v3 framework (IIBA 2015)

| BABOK v3 KA | Typical scoping tasks |
|---|---|
| **#9 Strategy Analysis** | T9.1 Analyze Current State · T9.2 Define Future State · T9.4 Define Change Strategy |
| **#2 BA Planning & Monitoring** | T2.1 Plan BA Approach · T2.3 Plan BA Governance |
| **#10 Stakeholder Engagement** | Stakeholder identification (cf. Mendelow Power/Interest) |

## Project Charter (PMBOK 7) — Founding document signed by the Sponsor

**To be distinguished from a simple scoping note**: the Charter is the **formal authorization** signed by the Sponsor before any budget commitment — it appoints the MOA Project Manager and grants their authority.

```
1. Identification
   - Project name, code, version, date

2. Justification / Business Case (cf. dedicated section)
   - Business problem + quantified expected benefits
   - Total estimated investment + target ROI + payback period

3. SMART objectives
   - 3-5 Specific Measurable Achievable Realistic Time-bound objectives

4. Scope (Scope Statement)
   - In scope · Out of scope · Assumptions · Constraints

5. Major deliverables with acceptance criteria

6. Macro milestones (Go/No-Go gates, max 5-10)

7. Governance (cf. reporting-moa)
   - COPIL: composition, frequency, decision scope
   - COTECH, CCB (Change Control Board), Risk Committee

8. Macro RACI (key actors × phases)

9. Overall budget + PRINCE2 tolerances
   - Time ±X%, Cost ±Y%, Scope MoSCoW

10. Top 5 risks + risk appetite

11. External project assumptions & dependencies

12. Authorization
    - Sponsor + MOA Project Manager + Leadership signatures
```

## Scoping note — Structure (upstream deliverable of the Charter)

```
1. Context and stakes (current situation, problem, strategic drivers)
2. Scope (in scope / out of scope / IS boundaries)
3. Stakeholders (Sponsor, MOA, MOE, users, simplified RACI)
4. Expected deliverables (with macro success criteria)
5. Macro schedule (key milestones, envisaged Go/No-Go)
6. Estimated budget (envelope, main cost items)
7. Risks and assumptions (Top 5 risks + mitigation, working assumptions)
8. Success conditions (project KPIs + business KPIs)
9. Decision requested (launch validation, trade-offs)
```

## Business Case — Quantified method (PRINCE2 Business Case Theme)

### Typical structure
```
1. Reasons / Drivers (Why now?)
2. Business options (Do nothing / Do minimum / Do something)
3. Expected Benefits — quantified in € or measurable units
   - Hard benefits: revenue, savings, productivity, time-to-market
   - Soft benefits: customer satisfaction (NPS), employee engagement (eNPS), compliance, image
4. Expected Dis-benefits — accepted costs or negative impacts
5. Timescale — timelines, macro milestones
6. Costs — CAPEX + project OPEX + post-go-live RUN
7. Investment Appraisal — ROI, NPV (Net Present Value), Payback Period, IRR
8. Major Risks — top business-case risks (cf. risk management)
```

### Key financial calculations

| Indicator | Formula | Decision |
|---|---|---|
| **ROI** | (Benefits - Costs) / Costs × 100% | ≥ 20% over 3 years: favorable |
| **NPV** (Net Present Value) | Σ discounted cash flows - initial investment | NPV > 0: value-creating project |
| **Payback Period** | Investment / average annual benefit | < 24-36 months depending on sector |
| **IRR** (Internal Rate of Return) | Rate that zeroes out NPV | > company cost of capital (WACC) |

## Feasibility study — 5 dimensions (extended TELOS)

| Dimension | Key questions | Deliverable |
|---|---|---|
| **Technical** | Technologies available? Internal skills? Viable target architecture? | POC / technical Spike |
| **Economic / Financial** | ROI? Budget available? Funding source? | Business Case + NPV |
| **Legal / Regulatory** | GDPR, AI Act, sector-specific (DORA, NIS2, MDR), licenses | Legal analysis + DPIA |
| **Operational / Organizational** | Change absorption capacity? Resource availability? | Impact analysis + capacity planning |
| **Time / Schedule** | Realistic timeline? Market window? External dependencies? | Macro schedule + critical path analysis |
| **Environmental / CSR** *(optional)* | Project carbon footprint? CSRD compliance? | Environmental assessment |

## Eisenhower matrix applied to scope framing

```
Important + Urgent       → Phase 1 (MVP) — Must (MoSCoW)
Important + Not urgent   → Phase 2-3 — Should / Could
Not important + Urgent   → Deprioritize or delegate — Could
Not important + Not urgent → Out of scope — Won't (this time)
```

## WBS level 2 — Initial breakdown phases × work packages

At this scoping stage, you produce the **macro WBS** (2 levels max) — the detailed WBS (3-4 levels, 8-80h work packages) comes during the project initiation phase (cf. [pilotage-projet.md](pilotage-projet.md)).

```
Project (Level 0)
├── Phase 1 — Scoping & Initiation (Level 1)
│   ├── WP 1.1 — Feasibility studies
│   ├── WP 1.2 — Business case
│   └── WP 1.3 — Project charter
├── Phase 2 — Specification
├── Phase 3 — Design
├── Phase 4 — Build
├── Phase 5 — UAT & Go-live
└── Phase 6 — Closure
```

## Build / Buy / SaaS / Lease decision tree (TOGAF + Gartner)

| Criterion | Build (custom) | Buy (COTS on-prem) | SaaS (cloud) | Lease (open source + integration) |
|---|:---:|:---:|:---:|:---:|
| Initial CAPEX cost | High | Medium-High | Low | Medium |
| 5-year TCO | Variable, often high | Medium | High (subscription) | Low-Medium |
| Time-to-market | Long (12-24 months) | Medium (6-12 months) | Fast (1-3 months) | Medium (3-9 months) |
| Business differentiation | Strong | Weak | Weak | Medium |
| Data sovereignty | Total | Strong | Variable (cf. location) | Strong |
| Vendor dependency | Low (internal) | Medium (vendor) | Strong (lock-in) | Low (open source) |
| Dominant decision criterion | Strong competitive differentiation | Standard business + specific need | Standardized business, time-to-market need | Mix of flexibility + sovereignty |

## Sector-specific worked example — **Public sector** transformation scoping (administration)

**Anonymized context**: European public agency (~15,000 staff, 28 regional sites). Scoping of the **"Démat'Services 2025"** program — digitalization of 32 citizen-facing administrative procedures (12M requests/year).

**Validated project charter**:
- Sponsor: Director General + Transformation Program Director
- MOA Project Manager: 1 program director + 4 stream MOA Project Managers
- Overall budget: **€18M** (CAPEX €11M + project OPEX €7M over 30 months)
- PRINCE2 tolerances: Time ±10% phase / ±5% overall · Cost ±5% phase / ±3% overall · Scope Must intangible (32 target procedures)

**Business Case**:
- Benefits at T+36 months (after full go-live):
  - Paper-handling savings: €4.2M/year (65% reduction in paper volumes)
  - Staff productivity: 380 FTE refocused on value-added tasks
  - Citizen processing times: 21 days → **5 days** weighted average (-76%)
  - Citizen satisfaction (annual barometer): 5.8/10 → target **7.5/10**
  - GDPR + ANSSI General Security Framework compliance: 100%
- Investment: €18M project + €2M/year RUN
- 5-year ROI: **+€34M net** · Payback 28 months · NPV (4% rate): +€12M

**Feasibility study (extended TELOS)**:
- Technical: ✅ (SecNumCloud cloud available, staff trained in digital)
- Economic: ✅ (funding via Plan France Relance + ministry AI Plan)
- Legal: ✅ under conditions (mandatory DPIA, ANSSI RGS, RGAA 4.1 accessibility, RGESN eco-design framework)
- Operational: 🟡 (strong change management required, union social dialogue, training 8,500 staff)
- Time: ✅ (30 months, aligned with the political term)

**Eisenhower matrix** → Phase 1 MVP: the 8 highest-volume procedures (60% of the 12M requests) · Phase 2: 16 additional procedures · Phase 3: 8 niche procedures · Out of scope (future V2): inter-agency interoperability.

**COPIL decision**: GO program with 3 conditions (DPIA validated beforehand by the CNIL, training plan for 8,500 staff budgeted, formalized union support arrangement).

## 6 project-scoping anti-patterns

- ❌ **Scoping note without a quantified business case** ("it's strategic") → no budget-commitment authority, COMEX trade-off impossible
- ❌ **Missing project charter** (jumping straight to the management plan) → MOA Project Manager not formally empowered, scope creep guaranteed
- ❌ **In scope defined, out of scope missing** → scope ambiguity, additional requests untraced
- ❌ **Feasibility limited to the technical dimension** (partial TELOS: economic + legal + operational + time ignored) → risks discovered mid-project
- ❌ **Top 5 risks without P×I rating or owner** → triggers no concrete action
- ❌ **No PRINCE2 tolerances defined** → impossible to manage by exception, sponsor flooded with operational matters

## Tools

- **Scoping note / Charter / Business Case**: Word + Confluence + Notion · ProjectLibre (free) · Smartsheet
- **Macro WBS**: MindManager · XMind · Lucidchart · Miro · draw.io
- **Technical feasibility POC**: Notion · Confluence · GitHub (POC repository) · Postman (API tests)
- **Financial business case**: Excel + PMI templates · Smartsheet Financial Templates · Power BI dashboards
- **Build/Buy/SaaS evaluation**: Gartner Decision Tools · Forrester TEI (Total Economic Impact) calculator
- **DPIA / Compliance**: CNIL PIA software (free) · OneTrust · Vanta

## Deliverables

- **Sponsor-validated scoping note** (upstream deliverable before the Charter)
- **Signed PMBOK project charter** or **PRINCE2 PID** (formal authorization)
- **Quantified Business Case** (ROI, NPV, Payback, IRR)
- **TELOS feasibility study** (5 documented dimensions)
- **MoSCoW scope** (Must / Should / Could / Won't)
- **Macro WBS level 2** (phases × work packages)
- **Top 5 risks + mitigation plan**
- **Build/Buy/SaaS decision tree** documented if relevant
- **DPIA + regulatory compliance analysis** (if sensitive data processing)

## Output format

For each scoping engagement, specify:
- **Project type**: IS/digital · organizational transformation · regulatory · AI · cross-cutting
- **Client context**: organization size · sector · project maturity · existing governance
- **Known constraints**: budget cap · hard deadline · regulation · resource availability
- **Expected decision**: COMEX Go/No-Go · budget trade-off · scope validation · Build/Buy/SaaS choice
- **Formality level**: startup/scale-up (lightweight scoping) · mid-cap (scoping note + business case) · large group / public sector (PMBOK Charter + PRINCE2 PID + DPIA + formalized COPIL)

## Sources

- **PMBOK Guide, 7th Edition** — PMI (2021) — Project Charter, Business Case
- **PRINCE2 7th Edition** — PeopleCert/Axelos (September 2023, replaces 6th edition) — Business Case Theme, SU Process (Starting Up a Project)
- **ISO 21500:2021** — Project, programme and portfolio management — Context and concepts
- **BABOK Guide v3** — IIBA (2015) — KA #9 Strategy Analysis, KA #2 Planning & Monitoring
- **AFNOR FD X50-115:2001** — Project management — General presentation
- **Cooper R.G.** — *Winning at New Products: Creating Value Through Innovation* (Basic Books, 5th ed. 2017) — Stage-Gate
- **Eisenhower Matrix** — Eisenhower D.D. (1954) — Important/Urgent prioritization
- **TOGAF Standard 10th Edition** — The Open Group (2022) — Phase A Architecture Vision

## See also

- [pilotage-projet.md](pilotage-projet.md) — downstream project steering (detailed WBS, Gantt/CPM, tolerances, closure, lessons learned)
- [elicitation-besoins.md](elicitation-besoins.md) — upstream elicitation before the scoping note
- [cartographie-si.md](cartographie-si.md) — IS assessment leveraged for technical feasibility
- [analyse-impact.md](analyse-impact.md) — organizational impact analysis + change management
- [reporting-moa.md](reporting-moa.md) — project governance, COPIL, escalation
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — project Risk Register (ISO 31000, COSO ERM)
- [`../scrum/business-model-canvas.md`](../scrum/business-model-canvas.md) — Business Model Canvas for an agile business case
