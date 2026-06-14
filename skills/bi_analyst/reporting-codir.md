# Skill — Leadership / Executive Reporting
> Certifications: PL-300 Microsoft · Tableau Certified Data Analyst · Google Data Analytics Professional

## Objective
Produce impactful executive reports for leadership: visual summary of strategic KPIs, data storytelling, analytical commentary — turning raw data into decision-grade insights.

## Principles of executive reporting

```
RULE                            CONCRETE APPLICATION
──────────────────────────────  ────────────────────────────────────────────────────────
1 message = 1 slide / page      The title states the conclusion ("Revenue up 8% vs PY")
                                Not: "Revenue trend" (neutral, says nothing)

Context before detail           Start with the summary (1-page Executive Summary)
                                Detail available in appendix / drill-down

Comparison mandatory            Never a figure alone → vs target / vs PY / vs budget
                                "€3.2M" is meaningless without a reference

Clear visual signals            ▲ green = ahead   ▼ red = behind   → gray = stable
                                Traffic lights for KPIs (RAG status)

Analytical commentary           "Why?" before "What?"
(not descriptive)               ❌ "Revenue dropped 5%"
                                ✅ "The 5% revenue drop is driven by ending the Black Friday promo
                                    (-3pts) and the closure of the DE market (-2pts)"
```

## Typical structure of a monthly leadership report

```
PAGE 1 — EXECUTIVE SUMMARY (5 min read max)
  ┌─────────────────────────────────────────────────────────────────┐
  │  TITLE: May 2026 performance — strategic summary               │
  │                                                                   │
  │  ▲ Net Revenue: €3.8M (+12% vs PY) ✅ Target met                │
  │  ▼ Gross margin: 42% (-2pts vs PY) ⚠️ Below target (44%)       │
  │  ▲ Customer NPS: 67 (+5pts vs March) ✅                          │
  │  → Churn rate: 2.1% (stable)                                    │
  │                                                                   │
  │  HIGHLIGHTS:                                                     │
  │  • Strong Enterprise-segment growth (+28%) driven by 3 deals    │
  │  • Margin pressure from logistics costs (+15%)                  │
  │  • Feature X launch — 34% adoption in 4 weeks                   │
  └─────────────────────────────────────────────────────────────────┘

PAGE 2 — REVENUE
  • Monthly revenue trend line (12-month rolling + target)
  • Revenue split by segment (Enterprise / Mid-market / SMB)
  • Top 10 customers (new + expansions)

PAGE 3 — MARGIN & PROFITABILITY
  • Gross margin evolution (waterfall bridge: price, mix, costs)
  • Simplified P&L (Revenue → EBITDA)
  • Budget vs Actual (variance + explanation)

PAGE 4 — CUSTOMERS & NPS
  • NPS evolution (top positive / negative verbatims)
  • Acquisition funnel (Leads → Qualified → Won)
  • Churn and retention

PAGE 5 — ACTION PLAN
  • Decisions to make (1 line = 1 decision)
  • Actions in progress (owner + deadline)
  • Watch items for the coming month
```

## Recommended charts by case

```
NEED                            RECOMMENDED CHART            AVOID
──────────────────────────────  ─────────────────────────    ─────────────────────────
Evolution over time             Line chart                   Grouped bars if > 3 series
Comparison across categories    Horizontal bars              Pie if > 5 categories
Market share / composition      100% stacked bar             3D pie (always)
Contribution to a change        Waterfall / Bridge           Table alone
Distribution                    Histogram / Box plot         Bars if many categories
Correlation                     Scatter plot                 Bars
Geographic                      Choropleth map               Table alone if < 5 regions
KPI vs target                   Gauge / Bullet chart         Round gauge (imprecise)
```

## Waterfall Chart — Bridge analysis

```
RECIPE FOR A REVENUE BRIDGE:

Revenue PY  €3,500K    (starting base)
+ Volume    + €450K    (+12.9% units sold)
+ Mix       + €120K    (premiumization)
- Price     - €80K     (SMB pricing pressure)
+ New       + €210K    (3 new Enterprise accounts)
- Churn     - €400K    (loss of Mega Corp in March)
            ─────────
Revenue CY  €3,800K    (+8.6% vs PY)
```

## Deliverables
- Monthly leadership report (PDF format + live Power BI)
- Reusable template (structure + visual identity)
- Written analytical commentary (not descriptive)
- Mobile version (Power BI mobile layout)
- Monthly archive (history on SharePoint / OneLake)

## Output format
Specify: **frequency** (monthly, weekly, quarterly), **audience** (leadership, CEO, investors…), **priority KPIs**, **delivery format** (live Power BI, exported PDF, PowerPoint, email), **available data** (sources, freshness), **constraints** (confidentiality, RLS).
