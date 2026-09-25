# Skill — Data-AI Transformation Steering

> Certifications: PMI-ACP (Agile Certified Practitioner), SAFe 6.0 Program Consultant, CDMP Data Management 2026, Change Management Practitioner (Prosci ADKAR)

## Objective

Steer an organization's Data-AI transformation with robust OKRs, a strategic executive-committee dashboard, reporting tailored to decision-making bodies, and tracking of data maturity over time.

## OKR framework for the Data-AI transformation

### OKR architecture across 3 horizons

```
HORIZON 1 — Quarterly (Operational teams)
  O: "Make the customer data pipeline reliable"
    KR1: Pipeline availability rate > 99%
    KR2: Ingestion latency < 30 min for 100% of flows
    KR3: Zero critical data incident unresolved > 24h

HORIZON 2 — Annual (Middle management)
  O: "Deploy 5 AI use cases in production"
    KR1: 5 models in prod with a defined SLA
    KR2: Cumulative ROI > €2M documented
    KR3: Business-team NPS on data tools > 7/10

HORIZON 3 — Multi-year (Leadership / executive committee)
  O: "Become a data-driven company by 2028"
    KR1: 80% of executive-committee decisions backed by data
    KR2: TDMM Data Maturity score ≥ 4/5
    KR3: Certified data literacy for 60% of managers
```

### Data-AI OKR rituals

| Ritual | Frequency | Attendees | Duration | Objective |
|--------|-----------|-------------|-------|---------|
| OKR Weekly | Weekly | Data teams | 30 min | Blockers + progress |
| OKR Review | Monthly | Data managers | 1h | KR scoring, adjustments |
| Steering Committee | Monthly | CDO + business | 1h30 | Priorities + trade-offs |
| Data executive committee | Quarterly | Full executive committee | 45 min | Vision + budget |
| Annual OKR Reset | Annual | Data organization | 2 days | Define new OKRs |

## Strategic executive-committee dashboard

### Executive-committee reporting structure (one-pager format)

```
┌─────────────────────────────────────────────────────────┐
│  DATA-AI DASHBOARD — Q3 2026                            │
├──────────────┬──────────────┬─────────────┬─────────────┤
│  VALUE       │  PLATFORM    │  TEAM       │  RISKS      │
│  GENERATED   │  & DATA      │  & CULTURE  │             │
│              │              │             │             │
│  €5.2M ROI   │  Uptime 99.4%│  18 certs.  │  2 incidents│
│  ↑ +800k vs  │  ↑ vs 98.7%  │  ↑ +5 vs Q2 │  closed     │
│  Q2          │  Q2          │             │  0 open     │
│              │              │             │             │
│  8 use cases │  DQ Score    │  NPS data   │  GDPR: OK   │
│  in prod     │  94.2%       │  teams: 7.8 │  AI Act: In │
│  ↑ +2 vs Q2  │  → stable    │  /10        │  progress   │
└──────────────┴──────────────┴─────────────┴─────────────┘

TOP 3 INITIATIVES OF THE QUARTER
  1. [In progress] Credit-scoring model — Phase 2 (MLOps)
  2. [Delivered]   Data Catalog 100% of critical domains
  3. [Launched]    Data Literacy program 300 managers

ALERTS & REQUIRED DECISIONS
  ! Additional budget required for cloud GPU (+ €80k)
  ! Data Engineer recruitment — 3 candidates shortlisted
```

### Metrics per strategic pillar

| Pillar | KPI | Measure | Frequency | Target |
|--------|-----|--------|-----------|-------|
| **Value** | AI portfolio ROI | Cumulative €M | Quarterly | > €5M/year |
| **Value** | Use cases in production | # | Monthly | +2/quarter |
| **Platform** | Data platform availability | % uptime | Weekly | > 99.5% |
| **Platform** | Data Quality Score | % | Monthly | > 95% |
| **Culture** | Data-team NPS | /10 | Half-yearly | > 7 |
| **Culture** | AI certification rate | % of team | Quarterly | > 80% |
| **Risks** | Open P1/P2 incidents | # | Weekly | 0 P1, < 3 P2 |
| **Risks** | AI Act compliance | % of systems | Quarterly | 100% critical |

## Data Maturity Tracking

### Quarterly tracking model (spider chart)

```python
# Generating the data-maturity radar chart
import plotly.graph_objects as go

dimensions = [
    "Governance", "Architecture", "Quality",
    "Security", "Analytics", "AI/ML", "Culture"
]

scores_q2_2026 = [3.2, 2.8, 3.5, 3.0, 2.5, 2.0, 2.8]
scores_q3_2026 = [3.5, 3.1, 3.7, 3.2, 3.0, 2.5, 3.2]
target_2027    = [4.0, 4.0, 4.5, 4.0, 4.0, 3.5, 4.0]

fig = go.Figure()
fig.add_trace(go.Scatterpolar(r=scores_q2_2026, theta=dimensions, name="Q2 2026"))
fig.add_trace(go.Scatterpolar(r=scores_q3_2026, theta=dimensions, name="Q3 2026"))
fig.add_trace(go.Scatterpolar(r=target_2027, theta=dimensions, name="Target 2027",
                               line=dict(dash='dot')))
fig.update_layout(polar=dict(radialaxis=dict(range=[0, 5])))
fig.show()
```

## Change management (Prosci ADKAR)

| ADKAR phase | Data-AI actions | Indicators |
|-------------|-----------------|-------------|
| **Awareness** | Executive-committee roadshows, data newsletters, CDO videos | % of employees informed |
| **Desire** | Data champions per BU, success stories | # early adopters |
| **Knowledge** | Data literacy training, AI workshops | Completion rate |
| **Ability** | On-the-ground support, AI CoP | # active tool users |
| **Reinforcement** | Recognition, HR integration, team OKRs | Practice retention rate |

## Deliverables

- Data-AI OKR framework (3 horizons, rituals, templates)
- Quarterly executive-committee dashboard (PowerPoint + Power BI)
- Monthly CDO scorecard (50 metrics organized into 5 pillars)
- Quarterly data-maturity radar (with history)
- Change-management plan (ADKAR applied to the data transformation)
- Reporting guide by level (operational / management / executive committee)

## Output format

Specify: **main audience** (executive committee / CDO / teams), **number of domains/BUs**, **OKRs already defined** (or to be created), **available reporting tools** (Power BI / Tableau / Looker), **desired reporting frequency**, **priority transformation stakes** (platform / culture / governance / ROI).
