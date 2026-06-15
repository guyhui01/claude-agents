# Skill — MOA Project Steering (V-model & Hybrid Project Management)

> Certifications: **PMI-PBA** · **PMP** (Project Management Professional) · **PRINCE2 Practitioner** · **IIBA CBAP** · **ISO 21500 Lead Project Manager** · **AgilePM** (DSDM)
> Agent: AGENT-BUSINESS-ANALYST.md

## Objective

Steer an MOA project end to end (V-model or hybrid) per the international normative standards (**PMBOK 7**, **PRINCE2**, **ISO 21500/21502**) and French ones (**AFNOR FD X50-115**) — from the project charter through closure and lessons-learned capitalization. Covers the steering aspects **not covered** by the pure BA (analysis): WBS, schedule, milestones, project RACI, tolerances, progress tracking, closure.

## BABOK v3 framework (IIBA 2015) — Knowledge Areas leveraged

| BABOK v3 KA | Typical MOA project-steering tasks |
|---|---|
| **#2 Business Analysis Planning & Monitoring** | T2.1 Plan BA Approach · T2.5 Plan Stakeholder Engagement · T2.6 Plan Governance Approach |
| **#9 Strategy Analysis** | T9.4 Define Change Strategy · T9.3 Assess Risks |
| **Business Architecture perspective** | Linking project steering ↔ enterprise capabilities |

## PMBOK Guide 7th Edition (PMI 2021) — 12 Principles + 8 Performance Domains

### 12 Principles (Project Management Standard)
1. Stewardship — diligence, respect, integrity
2. Team — collaborative environment
3. Stakeholders — effective engagement
4. Value — focus on delivered value
5. Systems Thinking — systemic view
6. Leadership — demonstrate leadership
7. Tailoring — adapt to the context
8. Quality — process + deliverable quality
9. Complexity — navigate complexity
10. Risk — optimize risk responses
11. Adaptability/Resiliency — adapt and bounce back
12. Change — embrace change

### 8 Performance Domains
**Stakeholders · Team · Development Approach & Lifecycle · Planning · Project Work · Delivery · Measurement · Uncertainty**

## PRINCE2 7th Edition (PeopleCert/Axelos, September 2023) — 7 Principles × 7 Themes × 7 Processes

### 7 Principles
Continued business justification · Learn from experience · Defined roles and responsibilities · Manage by stages · **Manage by exception** · Focus on products · Tailor to suit the environment

### 7 Themes
**Business Case · Organization · Quality · Plans · Risk · Change · Progress**

### 7 sequenced Processes
1. Starting Up a Project (SU) — Pre-project
2. Initiating a Project (IP) — Charter + PID
3. Directing a Project (DP) — Cross-cutting strategic steering
4. Controlling a Stage (CS) — Managing a stage
5. Managing Product Delivery (MP) — Steering the MOE team
6. Managing a Stage Boundary (SB) — Transition between stages (Go/No-Go)
7. Closing a Project (CP) — Formal closure

## Project Charter (PMBOK) — Founding document

**Document signed by the Sponsor before formal launch** — officially authorizes the project and appoints the MOA Project Manager.

```
1. Identification
   - Project name, code, version
   - Sponsor (Accountable)
   - MOA Project Manager (Responsible)
   - Signature date

2. Justification / Business Case
   - Business problem addressed
   - Quantified expected benefits (revenue, savings, compliance, NPS)
   - Total estimated investment
   - Target ROI + payback period

3. SMART objectives
   - 3-5 Specific Measurable Achievable Realistic Time-bound objectives

4. Scope
   - In scope: functional scope + populations + geographies + timeline
   - Out of scope: explicit exclusions
   - Assumptions + constraints

5. Major deliverables
   - List of key deliverables with acceptance criteria

6. Macro milestones (5-10 max)
   - Kick-off · Charter signed · End of spec · End of build · UAT · Go-live · Closure

7. Governance
   - COPIL: frequency, composition, decision scope
   - COTECH: frequency, composition
   - Project team: macro RACI

8. Overall budget
   - Overall envelope (CAPEX + project OPEX)
   - PRINCE2 tolerances: Time (±X%) · Cost (±Y%) · Scope (Must vs Should vs Could)

9. Top 5 risks + risk appetite
   - Cf. skill gestion-risques.md

10. Authorization
    - Sponsor + MOA Project Manager + Leadership signatures
```

## WBS — Work Breakdown Structure (PMI Practice Standard 2nd ed)

A **hierarchical, deliverable-centered** breakdown of the project scope into estimable **work packages** (8-80h each).

```
Project (Level 0)
├── Phase 1 (Level 1)
│   ├── WP 1.1
│   │   ├── Work Package 1.1.1 (8-80h)
│   │   ├── Work Package 1.1.2
│   │   └── Work Package 1.1.3
│   └── WP 1.2
├── Phase 2
│   ├── WP 2.1
│   └── WP 2.2
└── Phase 3 (Closure)
```

**100% rule**: the sum of a parent's Work Packages = 100% of the parent's scope (no more, no less). No duplicate, no gap.

**WBS Dictionary**: for each Work Package — description, deliverables, acceptance criteria, owner, estimated duration, estimated cost, dependencies.

## Scheduling — Complementary methods

### Gantt chart (Henry Gantt 1910s)
Chronological visualization of tasks × duration × dependencies. Tools: MS Project, Primavera, Smartsheet, GanttPRO, ProjectLibre.

### PERT / CPM (Program Evaluation Review Technique 1958 / Critical Path Method)
Identify the **critical path**: the task sequence whose delay directly impacts the end date.
- Compute Early Start / Early Finish / Late Start / Late Finish per task
- Float / free slack per task
- Tasks on the critical path = zero slack

### Critical Chain Project Management (Eli Goldratt 1997)
TOC (Theory of Constraints) optimization — project/feeding buffers pooled at the end of the chain rather than per task, eliminating the student syndrome + Parkinson's law.

### Three-point estimation (PERT)
**Expected duration = (Optimistic + 4×Most Likely + Pessimistic) / 6** — reduces the single-estimator optimism bias.

## Milestones & Gates (Stage-Gate Process, Cooper 1986)

A phase = a set of Work Packages delivering milestone value. **Gate = formal Go/No-Go** before moving to the next phase (committee validation).

| V-model phase type | Milestone deliverable | Go Gate criteria |
|---|---|---|
| **G0 — Scoping** | Signed project charter + business case | Sponsor + allocated budget |
| **G1 — Specification** | FRS + FRD validated by MOA | Requirements coverage + testability |
| **G2 — Design** | MOE DTS + UI mockups | Architecture validated + feasibility confirmed |
| **G3 — Build** | Iterative delivery + unit tests | DoD met |
| **G4 — UAT** | Acceptance report + go-live GO | 0 blocking defect + tolerances met |
| **G5 — Go-live** | Successful production rollout | Operational monitoring OK |
| **G6 — Closure** | Closure report + lessons learned | Sponsor satisfied + capitalization |

## Detailed project RACI — Comprehensive matrix

| Project activity | Sponsor | MOA PM | BA | MOE | Business | IT | Regulator |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Project charter validation | A | R | C | I | C | I | I |
| Needs elicitation | I | A | R | C | C | I | I |
| FRS/FRD writing | I | A | R | C | C | I | I |
| Technical design | I | A | C | R | I | C | I |
| Build | I | A | C | R | I | C | I |
| MOA UAT | I | A | R | I | C | I | I |
| Go-live validation | A | R | C | C | C | C | I |
| Regulatory compliance | I | A | C | I | I | C | R |

**R**esponsible (does it) · **A**ccountable (answers for it — only 1 A per row) · **C**onsulted (opinion before action) · **I**nformed (receives info after action)

## Management by exception (PRINCE2)

### Concept: Tolerances per dimension

**The sponsor only steers the exceptions** (tolerance overruns) — not the project's day-to-day.

| Dimension | Typical tolerance | Escalation trigger |
|---|:---:|---|
| Time | ±10% per phase | Overrun → exception report → sponsor decision |
| Cost | ±5% on the phase budget | Overrun → exception report → sponsor decision |
| Scope | MoSCoW: Must = intangible · Should/Could negotiable | Must change request → CCB → sponsor trade-off |
| Quality | Acceptance criteria per deliverable | Defects > threshold → quality review → sponsor decision |
| Risks | Score > defined threshold (cf. gestion-risques) | New 🔴 risk → CCB |
| Benefits | Reduction > business-case threshold | Business-case revision → sponsor decision |

### Benefits of management by exception
- Sponsor not flooded with operational matters
- MOA PM empowered within their tolerance envelope
- Structured, traced escalation
- 40-60% reduction in steering meetings

## Project closure & Lessons Learned (PRINCE2 CP / PMBOK Close Project)

### Closure activities (Process CP — Closing a Project, PRINCE2)
1. **Operational transition**: handover to the business + IT Run + support team
2. **Closure report**: signed by Sponsor + Business + IT + MOA PM
3. **Final budget review**: consumed vs budgeted, explained variance
4. **Benefits assessment (initial)**: T0 measurement of the business-case KPIs
5. **Benefits Realization Plan**: measurements at T+6, T+12, T+24 months
6. **Lessons Learned Workshop** (project retrospective)
7. **Documentation archiving**: durable project repository

### Lessons Learned — Structured methods
- **4L's** (Liked / Learned / Lacked / Longed for)
- **Start-Stop-Continue** (3 simple columns)
- **KALM** (Keep / Add / Less / More)
- **5 Whys** on major incidents
- **Knowledge Café** or **World Café** for large projects

### Organizational capitalization
- Project knowledge base (PMO or Knowledge Management)
- WBS / Gantt / Charter templates enriched by field feedback
- Benchmark metrics (effort/deliverable, duration/phase, cost/work unit)
- Cross-project sharing: MOA PM community of practice

## Sector-specific worked example — European multi-country insurance group

**Anonymized context**: European insurance group present in 12 countries (P&C + Health + Life), ~45,000 employees, €30B premiums/year, ~22M policyholders. **IFRS 17 + enhanced Solvency II reporting compliance** program — 24-month duration, €28M budget.

**Validated project charter**:
- Sponsor: Group CFO + Actuarial Director
- MOA Project Manager: 1 program director + 4 stream MOA PMs (Life, Health, P&C, Reinsurance)
- 5 Gate milestones: G0 scoping (M0) · G1 spec (M5) · G2 design (M10) · G3 build (M16) · G4 UAT (M21) · G5 go-live (M24) · G6 closure (M26)

**WBS — 4 levels, 312 Work Packages**:
- Level 1: 5 phases (scoping, spec, design, build, UAT+go-live)
- Level 2: 18 work packages (1 per stream × 6 workstreams: data, actuarial calculations, accounting, reporting, IT, change)
- Level 3: 67 sub-packages
- Level 4: 312 work packages estimated at 8-80h each

**Critical-path schedule (CPM)**:
- Critical duration: 624 working days over 24 months
- 47 tasks on the critical path (15% of the total)
- Goldratt buffers: 8-week project buffer at program end + 3 feeding buffers on sub-paths

**PRINCE2 tolerances defined in the charter**:
| Dimension | Tolerance | COPIL escalation threshold |
|---|:---:|---|
| Time | ±5% per phase | 5% phase overrun → exception report |
| Cost | ±3% phase, ±5% overall | Overrun → sponsor decision |
| Scope | Must = intangible (IFRS 17 calculations), Should/Could negotiable | Weekly CCB |
| Quality | 0 blocking defect in UAT + ≤ 3 major | Otherwise NO-GO go-live |

**Management by exception**:
- Monthly COPIL (vs weekly initially planned, -60% sponsor time saved)
- Formal exception reports: 7 over 24 months (vs 50+ classic steering points)
- Traced decisions: 3 Must changes approved (EIOPA regulator), 4 accepted phase deferrals

**Closure & measured benefits**:
- IFRS 17 compliance: **100%** by 2024-01-01 (deadline met)
- Solvency II reporting compliance: **100%** Qx 2024
- Quarterly accounting-close time reduction: 45 days → **18 days** (-60%)
- Budget consumed: €26.8M vs €28M budgeted (**-4.3%**, within tolerance)
- Timeline: 24 months met (1 phase deferred by 3 weeks, absorbed by the Goldratt project buffer)
- Lessons Learned Workshop: 14 lessons captured (8 methodological + 6 technical)
- Benefits assessment at T+12: ROI reached 87% of the business-case targets

## 8 MOA project-steering anti-patterns

- ❌ **Missing project charter or signed verbally** → no formal MOA PM authority, scope creep guaranteed
- ❌ **Unmaintained WBS** (frozen after kick-off, never updated) → silent drift, replanning impossible
- ❌ **Milestones without formalized Go/No-Go criteria** → Gates = rubber-stamped formalities, not real stop points
- ❌ **Ambiguous RACI** (two R's on an activity, A not identified, "everyone I") → responsibility conflicts, blocked decisions
- ❌ **Reversed management by exception** (MOA PM escalates everything to the sponsor, sponsor decides everything) → PM not empowered, sponsor flooded
- ❌ **PRINCE2 tolerances not defined** → impossible to identify an "exception", steering by subjective judgment
- ❌ **Project closure skipped** ("we move straight to the next one") → team dispersed without capitalization, lessons learned lost
- ❌ **Lessons Learned not documented or not read** → the same mistakes repeated on subsequent projects — a major hidden cost for the organization

## Tools

- **Gantt + CPM scheduling**: MS Project · Primavera Oracle P6 · Smartsheet · GanttPRO · ProjectLibre (free) · TeamGantt
- **Integrated PM platforms**: Asana · Monday.com · Wrike · ClickUp · Notion (simple projects) · Trello + Power-Ups
- **WBS visualization**: WBS Schedule Pro · MindManager · XMind · Miro
- **EVM budget steering**: MS Project Pro · Deltek Cobra · ServiceNow PPM · Planview
- **Governance / Committees**: Confluence (PID, minutes) · Notion · MS Loop · SharePoint
- **Lessons Learned & Knowledge Mgmt**: Confluence base · Notion · SharePoint Lessons Learned Library · Microsoft Viva Topics
- **Project dashboards**: Power BI · Tableau · Smartsheet Dashboards · MS Project Online

## Deliverables

- **Signed PMBOK project charter** (Project Charter, formal authorization)
- **PRINCE2 PID** (Project Initiation Documentation) — an enriched equivalent of the Charter
- **Hierarchical WBS** + WBS Dictionary per work package
- **Gantt + CPM schedule** with the critical path identified + Goldratt buffers
- **Detailed project RACI** per activity × role (complete matrix)
- **PRINCE2 tolerance charter** (Time/Cost/Scope/Quality/Risk/Benefits)
- **Project Management Plan** (PMBOK)
- **Exception Reports** (PRINCE2) traced
- **Project closure report** signed by Sponsor + Business + IT + MOA PM
- **Lessons Learned Report** (workshop + knowledge-base capitalization)
- **Benefits Realization Plan** (benefit measurements at T+6/+12/+24 months)

## Output format

For each project-steering engagement, specify:
- **Target methodology**: pure V-model (waterfall) · hybrid (waterfall + sprints) · adaptive (agile at scale, SAFe) · PRINCE2 Agile
- **Main standard**: PMBOK 7 · PRINCE2 · ISO 21500/21502 · AFNOR FD X50-115 · mix
- **Project scale**: small (< €200K, < 6 months, 1-5 team members) · medium (€200K-2M, 6-18 months, 5-20 team members) · large program (> €2M, > 18 months, > 20 team members — mandatory methodologies)
- **Expected governance**: COPIL frequency · COTECH frequency · CCB (Change Control Board) · Architecture Committee · Risk Committee

## Sources

- **PMBOK Guide, 7th Edition** — Project Management Institute (PMI 2021) — 12 principles + 8 Performance Domains
- **PRINCE2 7th Edition** — PeopleCert/Axelos (September 2023, replaces 6th edition) — 7 Principles + 7 Themes + 7 Processes
- **ISO 21500:2021** — Project, programme and portfolio management — Context and concepts
- **ISO 21502:2020** — Project, programme and portfolio management — Guidance on project management
- **AFNOR FD X50-115:2001** — Project management — General presentation (French standard)
- **PMI Practice Standard for Work Breakdown Structures, 3rd ed** (2019)
- **Goldratt E.M.** — *Critical Chain* (North River Press, 1997) — Theory of Constraints applied to PM
- **Cooper R.G.** — *Winning at New Products: Accelerating the Process from Idea to Launch* (Addison-Wesley, 1986 — 1st ed., many editions since) — Stage-Gate® trademarked phase-gate decision model
- **PMI Practice Standard for Project Risk Management** (2009)
- **P3M3** — Portfolio, Programme & Project Management Maturity Model (OGC / Axelos 2015)
- **BABOK Guide v3** — IIBA (2015) — KA #2 Planning & Monitoring + KA #9 Strategy Analysis

## See also

- [cadrage-projet.md](cadrage-projet.md) — upstream scoping note, feasibility study, business case
- [gestion-exigences.md](gestion-exigences.md) — requirements ↔ WBS Work Packages traceability
- [analyse-impact.md](analyse-impact.md) — cross-cutting impact analysis + change management
- [recette-moa.md](recette-moa.md) — downstream MOA UAT (Gate G4)
- [reporting-moa.md](reporting-moa.md) — project governance, COPIL, escalation
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — project Risk Register, ISO 31000, ROAM
- [`../scrum/forecasting-planning.md`](../scrum/forecasting-planning.md) — bridge to probabilistic agile planning (Monte Carlo)
- [`../change_manager/strategie-adoption.md`](../change_manager/strategie-adoption.md) — post-go-live adoption steering
