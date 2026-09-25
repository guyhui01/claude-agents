# Skill — Product Catalog Quality Scoring
> Certifications: Akeneo Certified Product Manager · CDMP · inriver Certified Professional

## Objective
Design and run a catalog quality scoring system: define the business rules, compute the per-channel completeness score, tracking dashboards and alert mechanisms — to drive enrichment with data and guarantee the publishing of complete, compliant records.

## Product quality score dimensions

```
DIMENSION          DESCRIPTION                               WEIGHT   INDICATORS
─────────────────  ───────────────────────────────────────   ───────  ──────────────────────────────
Completeness       Required attributes filled                40%      % of required attributes / total
Accuracy           Data consistency vs ERP source            25%      % of detected discrepancies
Richness           Optional attributes enriched              15%      % of optional attributes / total
Media              Associated assets (images, videos)        10%      # of media / # expected
Localization       Complete translations per locale          10%      % complete locales / target locales
─────────────────────────────────────────────────────────────────────────────────────────────────────
OVERALL SCORE      Weighted sum                              100%     ≥ 90 = Excellent · 75-89 = Good
```

## Scoring business rules (Akeneo examples)

```yaml
quality_rules:
  # Rule 1 — Title too short
  - rule: title_too_short
    condition: length(product_name) < 20
    penalty: -15
    message: "Product name too short (< 20 characters)"

  # Rule 2 — Description lacks richness
  - rule: description_not_rich
    condition: length(long_description) < 150
    penalty: -10
    message: "Long description insufficient (< 150 characters)"

  # Rule 3 — Invalid EAN
  - rule: invalid_ean
    condition: not valid_ean13(ean)
    penalty: -20
    message: "Invalid EAN (incorrect check digit)"

  # Rule 4 — No main image
  - rule: missing_main_image
    condition: main_image IS NULL
    penalty: -30
    message: "Main image missing — publishing blocked"

  # Rule 5 — Inconsistent price
  - rule: negative_price
    condition: public_price <= 0
    penalty: -25
    message: "Public price zero or negative"
```

## Quality dashboard — Recommended structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  PRODUCT CATALOG SCORECARD — Week 21 / 2026                         │
├──────────────────┬──────────────────┬──────────────────────────────┤
│ Overall score    │ 87.3 / 100       │ ▲ +2.1 vs previous week       │
├──────────────────┼──────────────────┼──────────────────────────────┤
│ Completeness     │ 91%              │ E-com channel: 96% / print 85%│
│ Accuracy         │ 98.5%            │ 12 ERP discrepancies detected │
│ Richness         │ 78%              │ 340 records without long desc.│
│ Media            │ 82%              │ 210 records without 2nd image │
│ Localization     │ 73%              │ DE missing on 450 records     │
├──────────────────┼──────────────────┼──────────────────────────────┤
│ Critical backlog │ 48 records < 60  │ ⚠️ Enrich before D+3         │
│ Published OK     │ 12,450 records   │ 95% of the active catalog     │
└──────────────────┴──────────────────┴──────────────────────────────┘
```

## Deliverables
- Quality scoring grid (dimensions, weights, calculation formulas)
- Business rules catalog (with penalties and alert messages)
- Per-channel completeness score configuration in the PIM
- Quality dashboard (Power BI / Grafana / native PIM)
- Weekly quality report (top anomalies, trends, actions)
- Quality improvement plan (prioritized enrichment roadmap)

## Output format
Specify: **PIM used**, **channels to score** (e-com, print, marketplace…), **target locales**, **publishing threshold** (100% required or some tolerance?), **available BI tools** for the dashboard.

## Anti-patterns
- ❌ **Arbitrary weights and penalties** not calibrated on real cases (why -15 vs -20?): unrepresentative score → calibrate on history
- ❌ **Score with no blocking publishing threshold**: mediocre records go live → completeness/score gate
- ❌ **Measuring completeness without accuracy** (consistency vs ERP): false sense of quality → include accuracy
- ❌ **Dashboard with no prioritized backlog**: a contemplative score → tie each anomaly to an enrichment action
- ❌ **Identical dimensions/weights for all channels**: not relevant (print ≠ marketplace) → scoped scoring
- ❌ **Scoring without validating the EAN** (GS1 check digit): false identifiers not detected → blocking EAN rule

## Sources
- **Akeneo PIM** (Serenity) — native per channel/locale completeness score — help.akeneo.com
- **DAMA-DMBOK 2** (2017) · **ISO 8000** — 5 quality dimensions (completeness, accuracy, consistency, uniqueness, timeliness) — dama.org / iso.org
- **GS1 General Specifications v24.0** (2024) — EAN-13/GTIN validation — gs1.org

## See also
- [`kpis-catalogue.md`](kpis-catalogue.md) — quality score as a steering KPI
- [`enrichissement-produit.md`](enrichissement-produit.md) — enrichment actions driven by the score
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — business rules and data quality
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — quality control on entry
