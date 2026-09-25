# Skill — Self-Service BI (Training, Templates, Documentation)
> Certifications: PL-300 Microsoft · Tableau Certified Data Analyst · Google Data Analytics

## Objective
Establish a self-service BI culture: train users, create reusable templates, document the data — to reduce dependence on the BI team while maintaining governance.

## Self-Service BI maturity model

```
LEVEL 0 — Centralized BI (IT/BI does everything)
  Every report = a ticket to the BI team
  Lead time: 2 weeks per report
  Risk: bottleneck, business frustration

LEVEL 1 — Consumption (read access)
  Users consult predefined reports
  No creation → but filters, drill-down allowed
  Ideal for: leadership managers, non-technical operations

LEVEL 2 — Guided exploration (supervised self-service)
  Users build their own views from certified datasets
  Templates provided + basic training
  Ideal for: business analysts, financial controllers

LEVEL 3 — Full self-service (data-driven teams)
  Teams build their own models and datasets
  Governance by certification (not by restriction)
  Ideal for: mature data-driven teams
```

## Training plan — Self-Service BI

```
MODULE 1 — Discovery (2h) — All users
  □ Why data? Data charter & governance
  □ Access certified reports (Power BI Service / Tableau Server)
  □ Filters and interactions: slicer, drill-down, drill-through
  □ Export (Excel, PDF, PNG)
  □ Subscribe to a report (recurring email)
  □ Report an anomaly or request a new report

MODULE 2 — Exploration (4h) — Business analysts
  □ Understand the data model (KPI catalog)
  □ Create a custom view from a certified dataset
  □ Use simple calculated fields
  □ Build a simple report (3-5 visuals)
  □ Share and publish to the right workspace

MODULE 3 — Advanced (8h) — Business BI champions
  □ Basic DAX (simple measures, YTD, PY comparison)
  □ Managing relationships between tables
  □ Dashboard design (visual best practices)
  □ Refresh and alerts
  □ New-dataset certification process
```

## Reusable templates — Structure

```
POWER BI TEMPLATES PROVIDED TO TEAMS:

template-performance-tracking.pbit
  Pages: KPI Summary / Trends / Detail / Export
  Slicers: Period / Region / Segment
  → Connect to your business dataset, change the colors

template-cohort-analysis.pbit
  Pages: Acquisition cohorts / Retention / Cohort revenue
  → To analyze customer retention

template-budget-vs-actual.pbit
  Pages: Global Budget / Variance / Forecast
  → For financial controllers

template-operational.pbit
  Pages: Real-time dashboard / Alerts / Actions
  → For operational managers
```

## Data documentation — Dataset sheet

```markdown
## Dataset: Finance — Revenue & Orders ✅ Certified

**Owner**: Finance BI team (contact: bi-finance@company.com)
**Last updated**: 2026-05-26 | **Freshness**: D-1 (refresh 6:00 a.m.)
**Certified by**: CFO on 2026-03-01

### What you can analyze
- Net, gross revenue, by channel, by region
- Time evolution (day, week, month, quarter, year)
- Budget vs actual comparison
- Customer analysis (acquisition, retention, average order value)

### What this dataset does NOT cover
- Inventory data → see the "Logistics" dataset
- Costs and margins → see the "Finance Controlling" dataset
- HR data → see the "HR & Talent" dataset

### Glossary
| Term | Definition |
|------|-----------|
| Net Revenue | Revenue after discounts and returns, excl. tax |
| Confirmed order | Status "confirmed" or "shipped" or "delivered" |
| Average order value | Net Revenue / Number of orders |

### How to use it
1. Power BI Service → "Finance" workspace → "Revenue & Orders" dataset
2. Create a new report → "Connect to a published dataset"
3. Select this dataset → Start exploring
```

## Deliverables
- Self-service training plan (modules, duration, target audience)
- Training materials (slides + tutorial videos)
- Template library (.pbit / .twbx)
- Dataset documentation (sheets per domain)
- FAQ and troubleshooting guide
- Adoption dashboard (active users, reports created)

## Output format
Specify: **BI tool** (Power BI, Tableau, Looker…), **user profiles** (non-tech managers, analysts, data teams), **current level** (no BI culture or partial self-service), **constraints** (training time, budget, strict governance), **goal** (reduce BI tickets or speed up analyses).
