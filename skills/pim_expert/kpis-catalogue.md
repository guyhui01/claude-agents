# Skill — Product Catalog KPIs & Steering
> Certifications: Akeneo Certified Product Manager · CDMP · inriver Certified Professional

## Objective
Define and steer the product catalog's key performance indicators: quality, time-to-market, syndication, quality SLAs — to make the catalog actionable, prioritize enrichment and justify PIM investment to leadership.

## Catalog KPI framework (4 axes)

```
AXIS 1 — DATA QUALITY
  □ Overall completeness rate         % of required attributes filled / total expected
  □ Completeness rate per channel     Channel-specific completeness e-com / print / marketplace
  □ Accuracy rate                     % of data consistent with the ERP source
  □ Duplicate rate                    % of duplicated SKUs detected / total catalog
  □ Average quality score             Weighted average of the 5 dimensions (cf. scoring-qualite)

AXIS 2 — OPERATIONAL PERFORMANCE
  □ Time-to-market (TTM)              Lead time ERP creation → channel publishing (in days)
  □ Validation rejection rate         % of records rejected in validation / submitted
  □ Enrichment backlog                # of records blocked > 7 days in enrichment
  □ Average translation lead time     Lead time extraction → complete locale import

AXIS 3 — SYNDICATION & DISTRIBUTION
  □ Channel coverage rate             % of active SKUs syndicated per channel / total active
  □ Sync error rate                   % of API / push / export errors per channel
  □ Sync lead time                    Time between PIM change and channel update
  □ Marketplace rejection rate        % of records rejected by Amazon/FNAC / submitted

AXIS 4 — BUSINESS IMPACT
  □ Conversion rate (e-com)           Change after record-quality improvement
  □ Product return rate               Correlation with product-description quality
  □ Enrichment productivity           # of records enriched / day / FTE
  □ Onboarding cost                   Average € cost to integrate 1 new supplier
```

## Leadership dashboard — Template

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  PRODUCT CATALOG — Q2 2026 Reporting                                           │
├─────────────────────────────┬──────────────┬────────────┬──────────────────────┤
│  INDICATOR                  │  VALUE       │  TARGET    │  TREND               │
├─────────────────────────────┼──────────────┼────────────┼──────────────────────┤
│  Overall completeness       │  91.3%       │  ≥ 95%     │  ▲ +2.1% vs Q1       │
│  Average time-to-market     │  4.2 days    │  ≤ 3 days  │  ▼ -0.8d vs Q1      │
│  E-commerce coverage        │  98.7%       │  100%      │  → stable            │
│  Marketplace sync errors    │  1.2%        │  ≤ 0.5%    │  ▲ improvement req.  │
│  Average quality score      │  87/100      │  ≥ 90      │  ▲ +3 pts vs Q1      │
│  Critical backlog           │  23 records  │  ≤ 10      │  ▼ alert             │
│  Return rate tied to desc.  │  2.1%        │  ≤ 1.5%    │  ▼ to watch         │
├─────────────────────────────┴──────────────┴────────────┴──────────────────────┤
│  🎯 Q3 ACTIONS: Enrich missing DE (450 SKUs) · Fix FNAC sync                   │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Quality SLA per product type

```
PRODUCT TYPE            TTM TARGET    PUB. COMPLETENESS  ANNUAL REVIEW
──────────────────────  ────────────  ───────────────  ─────────────────
Flagship product (A)    ≤ 2 days      100%             Half-yearly
Standard product (B)    ≤ 5 days      100%             Yearly
Long-tail product       ≤ 10 days     ≥ 80%            On demand
Seasonal product        ≤ 3 days      100%             Each season
New supplier            ≤ 15 days     ≥ 70% (phase 1)  Quarterly
```

## Deliverables
- Catalog KPI framework (indicator dictionary, formulas, sources)
- Catalog dashboard (Power BI / native PIM / Metabase)
- Monthly leadership reporting (1 page, 4 axes, trends + actions)
- Quality SLA per product type and channel
- Automatic alerts (thresholds, recipients, frequency)
- Quarterly improvement plan (catalog OKRs)

## Output format
Specify: **PIM used**, **channels to cover** in the KPIs, **available BI tool** (Power BI, Tableau, native PIM…), **reporting frequency** (weekly / monthly / quarterly leadership), **recipient profiles** (Data Stewards, leadership, marketing).

## Anti-patterns
- ❌ **KPIs with no target or alert threshold**: contemplative reporting → every indicator with a target + action
- ❌ **Overall completeness without per-channel breakdown**: hides the gaps (e-com 96% / print 85%) → always break down
- ❌ **No business-impact KPI** (conversion, returns): vanity metrics disconnected from value → link quality ↔ business
- ❌ **Leadership reporting > 1 page**: the decision-maker is overwhelmed → 1-page Minto synthesis (cf. reporting rule)
- ❌ **Uniform SLAs for all products**: over-invests the long tail, under-invests flagship products → differentiated A/B/C SLAs
- ❌ **Frozen KPIs with no review**: stale indicators → quarterly improvement plan (OKR)

## Sources
- **Akeneo PIM** (Serenity) — native completeness/KPIs — help.akeneo.com
- **DAMA-DMBOK 2** (2017) · **ISO 8000** — data quality dimensions (completeness, accuracy, consistency, uniqueness, timeliness) — dama.org / iso.org
- **OKR** — Doerr J., *Measure What Matters* (2018) — quarterly improvement plan
- **Minto Pyramid** (1987) — structure of the 1-page leadership report

## See also
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — quality score feeding axis 1
- [`enrichissement-produit.md`](enrichissement-produit.md) — operational KPIs (TTM, backlog)
- [`syndication-canaux.md`](syndication-canaux.md) — coverage and sync errors
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — governance scorecard
