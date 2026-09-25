# Skill — MOA Reporting & Project Governance

> Certifications: **IIBA CBAP** · **PMI-PBA** · **PRINCE2 Practitioner** · ISO 21500
> Agent: AGENT-BUSINESS-ANALYST.md

## Objective

Produce **actionable reporting** and structure the **full committee governance** (COMEX → COSTRAT → COPIL → COTECH → CCB → CDP) to steer an MOA project/program with **traced escalation** and **documented decisions** — relying on RAG (Red-Amber-Green) indicators, project OKRs and multi-level dashboards.

## BABOK v3 framework (IIBA 2015)

| BABOK v3 KA | Typical reporting/governance tasks |
|---|---|
| **#2 BA Planning & Monitoring** | T2.5 Plan Stakeholder Engagement · T2.6 Plan Governance Approach · T2.7 Identify BA Performance Improvements |
| **#10 Stakeholder Engagement** | Targeted communication per Mendelow quadrant (cf. analyse-impact) |
| **#6 Solution Evaluation** | T6.1 Measure Solution Performance · T6.2 Analyze Performance Measures |

## Full committee governance — Project/program governance pyramid

```
                    ┌──────────────────────┐
                    │  COMEX (Exec. Comm.)  │  Enterprise strategic
                    │  Quarterly frequency  │  Program > €5M or strategic
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  COSTRAT (Strategic  │  Program strategic
                    │   Committee)         │  Quarterly frequency
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  COPIL (Steering     │  Project steering
                    │   Committee)         │  Monthly (sometimes biweekly)
                    └──────────┬───────────┘
                               │
              ┌────────────────┼─────────────────┐
              │                │                 │
       ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼─────┐
       │  COTECH     │  │  CCB (Change│  │  CDP       │
       │  (Technical │  │  Control    │  │  (Project  │
       │   Committee)│  │   Board)    │  │  Committee)│
       │  Biweekly   │  │  Weekly     │  │  Weekly    │
       └─────────────┘  └─────────────┘  └────────────┘
```

| Body | Frequency | Typical composition | Decision scope |
|---|---|---|---|
| **COMEX** | Quarterly | DG/CEO + Executive Leadership + executive Sponsor | Strategic program validation, trade-offs > €1M, portfolio alignment |
| **COSTRAT** | Quarterly | Sponsor + business DG + IT Director + Program Director + Regulator if applicable | Program strategic direction, business case, major milestones, sponsor exceptions |
| **COPIL** | Monthly (biweekly for fast projects) | Sponsor + MOA PM + MOE PM + Business + IT + PMO | RAG project steering, milestones, budget, PRINCE2 exceptions, scope trade-offs |
| **COTECH** | Biweekly | MOA PM + MOE PM + Architects + Tech leads + CISO | Technical decisions, architecture, dependencies, technical debt |
| **CCB** (Change Control Board) | Weekly or ad hoc | MOA PM + Sponsor + BA + Architect + business representative | Change Requests: Approved / Rejected / Deferred / Need More Info |
| **CDP** (Project Committee) | Weekly | Extended project team (MOA PM, BA, MOE, business reference users) | Weekly operational tracking, blockers, action plan |

## Pyramidal escalation — Automatic triggers

| Trigger | Target level | Escalation lead time |
|---|---|---|
| New 🔴 risk identified | COPIL (next) | < 7 days |
| PRINCE2 tolerance exceeded (Time/Cost) | COPIL → COSTRAT | Immediate (exception report) |
| Must change request (CCB) | COPIL or COSTRAT per impact | < 14 days |
| Major regulator / audit reservation | COSTRAT | < 48h |
| Overall program tolerance exceeded | COSTRAT → COMEX | Next quarter |
| Critical resource blocker | CDP → COPIL → COSTRAT | Per blocker age (3/7/14d) |

## MOA reporting types

| Format | Frequency | Audience | Presentation length |
|---|---|---|---|
| **MOA Daily Standup** | Daily | Project team | 15 min |
| **Weekly CDP point** | Weekly | Team + PM | 30 min |
| **Progress report** | Biweekly | MOA PM → MOE PM → PMO | 1-page PDF |
| **CCB minutes** | Weekly | CCB members + Confluence archive | 15 min |
| **COPIL dashboard** | Monthly | Sponsors + business leadership + IT | 30-45 min, 5-8 slides |
| **Gate review (Go/No-Go)** | End of phase | Steering committee / COSTRAT | 1h, 10-15 slides |
| **COSTRAT reporting** | Quarterly | Executive Leadership + executive Sponsor | 30 min, 5 executive slides |
| **COMEX reporting** | Quarterly | Enterprise COMEX | 10-15 min, 1-3 slides |

## COPIL dashboard — 5-slide structure (standard template)

### Slide 1 — Executive summary (1 recap slide)
- **Overall RAG indicator**: 🟢 Green · 🟡 Amber · 🔴 Red
- 3 key points for the period + 3 requested decisions
- Trend (vs previous COPIL)

### Slide 2 — Schedule progress
- Milestones completed vs planned (% progress per phase)
- Upcoming milestones M+1 / M+2 / M+3
- Updated critical path (cf. [pilotage-projet.md](pilotage-projet.md))
- Time tolerance consumed (vs PRINCE2 ±10%)

### Slide 3 — Budget & resources
- Budget consumed vs budgeted per phase + overall
- ETC (Estimate To Complete) + EAC (Estimate At Completion)
- Cost tolerance consumed (vs PRINCE2 ±5%)
- Team load (FTE used / planned)

### Slide 4 — Risks & quality
- Top 5 active risks (P × I, owner, trend)
- Defects detected per phase (blocking / major / minor)
- Quality tolerance consumed
- New 🔴 rising risks

### Slide 5 — Requested decisions + Change Requests
- CR Approved / Rejected / Deferred this month
- COPIL trade-offs expected (options + MOA PM recommendation)
- Interim Lessons Learned

## Project OKRs — Coupling Objectives + Key Results

**Inspired by OKRs (John Doerr 2018, *Measure What Matters*)** applied to project steering.

### Project OKR structure
```
Objective (qualitative, motivating, ambitious)
  ↓
Key Result 1 (quantitative, measurable, ambitious)
Key Result 2
Key Result 3
```

### Regulatory-compliance project OKR example
- **Objective**: Reach regulator compliance by the deadline with confidence
- **KR1**: 100% of the 47 critical services documented and tested (TLPT) by 2025-01-17
- **KR2**: 0 major reservation at the ACPR/EBA audit
- **KR3**: critical-service RTO < 4h (DORA requirement)

### Coupling project KPIs ↔ business-case KPIs
- **Project KPIs**: progress, budget, quality, risks (MOA PM steering)
- **Business-case benefit KPIs**: ROI, NPS, productivity, compliance (Sponsor validation → COSTRAT)
- **COPIL reporting**: project KPIs dominant
- **COSTRAT reporting**: benefit KPIs dominant

## Key MOA indicators (standardized KPIs)

### Coverage & Quality
- **Requirements coverage rate**: % of requirements tested and validated
- **Acceptance success rate**: % of test cases OK / total
- **Defect density**: number of defects / KLOC or / test case
- **Open blocking defects**: number (target 0 for go-live GO)
- **DRE** (Defect Removal Efficiency): defects detected pre-prod / total defects — target ≥ 95%

### Progress & Performance
- **% physical progress**: validated deliverables / planned deliverables
- **% value progress**: EVM Earned Value / Budget At Completion (cf. pilotage-projet)
- **SPI** (Schedule Performance Index) = EV / PV — ≥ 1 OK
- **CPI** (Cost Performance Index) = EV / AC — ≥ 1 OK
- **Agile velocity** (if hybrid): story points / sprint

### Engagement & Satisfaction
- **Stakeholder project NPS**: internal Net Promoter Score after a committee
- **Workshop user satisfaction**: 1-5 score after a workshop
- **Committee attendance rate**: actual attendance / invitations
- **Project team eNPS**: team employee engagement

## RAG color code (Red-Amber-Green) — Strict definition

| Status | Objective criteria | Expected action |
|:---:|---|---|
| 🟢 **Green** | Within Time/Cost/Quality/Risk tolerances + 0 new 🔴 risk + Sponsor satisfied | Continue, no trade-off |
| 🟡 **Amber** | 1 tolerance consumed > 70% OR 1-2 🔴 risks under control OR drift starting | Action plan + close tracking + weekly reporting |
| 🔴 **Red** | Tolerance exceeded OR active 🔴 risk without mitigation OR major sponsor dissatisfaction | Immediate exception report + COSTRAT escalation + sponsor decision < 7 days |

**Anti-pattern**: a "subjective" RAG set Green to reassure the Sponsor while tolerances are exceeded → major loss of trust if discovered late. Always a **quantitative RAG** based on thresholds defined in the Charter.

## Gate review (Go/No-Go) — 10-slide structure

1. **Recap of phase objectives** (Charter + Gate criteria)
2. **Produced deliverables** (vs planned, with validation proof)
3. **Go/No-Go Gate criteria**: ✅ / ❌ / 🟡 per criterion
4. **Consolidated progress** (schedule, budget, quality)
5. **Residual risks** at phase exit + transition to the next phase
6. **Phase Lessons Learned** (to capitalize on)
7. **Team load** mobilized resources + next-phase resource plan
8. **Phase budget consumed** + next-phase budget review
9. **Go/No-Go recommendation** + any conditions
10. **COSTRAT decision** + signatories + minutes

## 8 reporting & governance anti-patterns

- ❌ **Subjective RAG without thresholds** (Green to reassure) → loss of Sponsor trust if discovered late
- ❌ **Single COPIL governance for everything** (no COSTRAT, no CCB) → sponsor flooded with operational matters, technical decisions poorly arbitrated
- ❌ **No formalized pyramidal escalation** → 🔴 risks handled in COPIL instead of escalating to COSTRAT
- ❌ **Static reporting without analysis** (raw figures with no PM interpretation) → the Sponsor has to decode, committee time wasted
- ❌ **Untraced COPIL decisions** → later conflicts over what was agreed, no Change Log
- ❌ **OKRs confused with KPIs** → OKRs = quarterly ambitions, KPIs = continuous measures, don't mix them
- ❌ **Nonexistent CCB minutes** → no Change Log, silent scope creep
- ❌ **COMEX reporting = enlarged COPIL reporting** → drowning the COMEX in detail instead of strategic decisions

## Tools

- **Governance & Minutes**: Confluence · Notion · MS Loop · SharePoint
- **COPIL dashboards**: PowerPoint · Google Slides · Confluence Roadmaps · Smartsheet Dashboards
- **Automated reporting**: Power BI · Tableau · Looker · Domo · Qlik Sense
- **Project reporting**: MS Project Online · Smartsheet · Asana Goals · ServiceNow PPM · Planview
- **OKRs**: Ally.io (Microsoft Viva Goals) · Perdoo · Gtmhub (Quantive) · Atlassian Jira Align
- **Change Log (CCB)**: Jira (custom Change Request workflow) · ServiceNow Change Management · Confluence Change Log
- **Multi-level dashboards**: ThoughtSpot · Sisense · Power BI (Premium for a large audience)

## Deliverables

- **Project governance charter** (committee structure + committee RACI + frequency + standard agenda)
- **Monthly COPIL dashboard** (5-slide PowerPoint + live Confluence/Power BI dashboard)
- **Weekly progress report** (1-page PDF) for PMO + stream
- **Weekly CCB minutes** + up-to-date Change Log (Excel/Jira)
- **Gate review** (10 slides + signed COSTRAT sign-off)
- **Quarterly COSTRAT reporting** (5 executive slides, benefit KPIs)
- **Quarterly COMEX reporting** (1-3 program slides, portfolio alignment)
- **Quarterly project OKRs** documented and traced
- **Archived PRINCE2 Exception Reports** (Time/Cost/Scope/Quality escalation)

## Output format

For each reporting engagement, specify:
- **Reporting type**: COPIL · COSTRAT · COMEX · CCB · CDP · Gate review
- **Target frequency**: daily · weekly · biweekly · monthly · quarterly · ad hoc
- **Audience**: team / management / sponsor / DG / COMEX / regulator
- **Available indicators**: EVM (SPI/CPI) · quality ratios · NPS / eNPS · OKR progress
- **Presentation tool**: PowerPoint · Confluence · Power BI · Smartsheet · combined
- **Formality level**: lightweight startup · structured mid-cap · large group / public sector protocol

## Sources

- **PMBOK Guide, 7th Edition** — PMI (2021) — Measurement Performance Domain, Earned Value Management
- **PRINCE2 7th Edition** — PeopleCert/Axelos (September 2023, replaces 6th edition) — Progress Theme, DP Process (Directing a Project)
- **BABOK Guide v3** — IIBA (2015) — KA #2 Planning & Monitoring + KA #6 Solution Evaluation + KA #10 Stakeholder Engagement
- **ISO 21500:2021** — Project, programme and portfolio management — Performance reporting
- **Doerr J.** — *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs* (Portfolio Penguin, 2018)
- **Mendelow A.** — *Stakeholder Power-Interest Grid* (1991) — for audience-targeted communication
- **Kerzner H.** — *Project Management Metrics, KPIs, and Dashboards* (Wiley, 4th ed. 2022)

## See also

- [pilotage-projet.md](pilotage-projet.md) — downstream project steering (WBS, Gantt, tolerances, EVM)
- [cadrage-projet.md](cadrage-projet.md) — upstream project charter, defines the initial governance
- [analyse-impact.md](analyse-impact.md) — Mendelow Stakeholder Impact Matrix for communication targeting
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — project Risk Register, COSTRAT escalation
- [`../scrum/reporting-kpi.md`](../scrum/reporting-kpi.md) — agile reporting equivalent (PO Scrum)
- [`../scrum/po-backlog.md`](../scrum/po-backlog.md) — agile backlog view for hybrid reporting
