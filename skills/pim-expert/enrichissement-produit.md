# Skill — Product Enrichment Workflows
> Certifications: Akeneo Certified Product Manager · inriver Certified Professional · Salsify Certified

## Objective
Design and run product-record enrichment workflows: define the steps, contributor roles, quality rules and gate criteria — to reach a target completeness rate and reduce time-to-market for references.

## Product record lifecycle

```
STATUS              DESCRIPTION                           ACTOR               GATE CRITERION
──────────────────  ────────────────────────────────────  ──────────────────  ─────────────────────────────
Draft               Record created (ERP technical data)   System / Import     SKU + family assigned
In Enrichment       Marketing data being entered          Content team        Short description ≥ 50 chars
In Review           Awaiting validation                   Product Manager     Completeness ≥ 80%
Approved            Validated, ready to publish            Product Lead        Completeness = 100% (target channel)
Published           Live on the channels                  Auto-publishing     Launch date reached
Archived            Obsolete, withdrawn from sale          Product Manager     EOL confirmed
```

## Responsibility matrix (RACI)

```
ENRICHMENT TASK                  | Content | Product | DAM  | Quality | System
─────────────────────────────────┼─────────┼─────────┼──────┼─────────┼────────
Record creation (ERP import)     |    I    |    I    |  I   |    I    |   R
Technical data entry             |    R    |    A    |  I   |    C    |   I
Marketing description writing    |    R    |    C    |  I   |    I    |   I
Asset association (DAM → PIM)     |    R    |    I    |  A   |    I    |   I
Translation (i18n)               |    R    |    I    |  I   |    C    |   I
Quality validation               |    I    |    A    |  I   |    R    |   I
E-commerce channel publishing    |    I    |    A    |  I   |    I    |   R
Product archiving                |    I    |    R    |  I   |    I    |   A
```

## Quality rule configuration (Akeneo)

```yaml
# Sample completeness rules per channel
completeness_rules:
  channel: ecommerce
  locale: fr_FR
  required_attributes:
    - sku
    - product_name
    - short_description
    - long_description
    - main_image
    - public_price
    - weight
    - dimension_l
  threshold_publication: 100%   # Blocks publishing if < 100%
  threshold_alert: 80%          # Alerts the team if < 80%

  channel: print
  locale: fr_FR
  required_attributes:
    - sku
    - product_name
    - main_image_hd
    - technical_specs
  threshold_publication: 100%
```

## Enrichment workflow KPIs

```
INDICATOR                      TARGET        ALERT          FORMULA
─────────────────────────────  ────────────  ─────────────  ─────────────────────────────────
Average completeness rate      ≥ 90%         < 80%          Filled attributes / Required attributes
Time-to-market (creation→pub)  ≤ 5 days      > 10 days      Publish date - Record creation date
Validation rejection rate      ≤ 5%          > 15%          Rejected records / Submitted records
Enrichment backlog             ≤ 50 records  > 200 records  Records in "In Enrichment" > 7d
Import error rate              ≤ 1%          > 5%           Error rows / Imported rows
```

## Deliverables
- Enrichment workflow diagram (BPMN with statuses, transitions, actors)
- RACI matrix of enrichment responsibilities
- Completeness rule configuration per channel and locale
- Enrichment SLA (lead times per product type)
- Editor guide (how to fill each attribute, examples, best practices)
- Quality tracking dashboard (real-time KPIs)

## Output format
Specify: **PIM used**, **number of references** to enrich per week, **number of channels** and **locales**, **available team** (number of enrichers, localizers), **deadline constraint** (target time-to-market).

## Anti-patterns
- ❌ **Publishing below the completeness threshold** (< 100% channel): incomplete records go live → strict per-channel publishing block
- ❌ **RACI conflating R and A**: no clear validation owner → a single A per task
- ❌ **Identical completeness rules for all channels**: print and e-commerce don't have the same needs → completeness scoped per channel/locale
- ❌ **Enrichment without an SLA**: unmanageable backlog → target lead time per product type
- ❌ **Duplicated descriptions across products**: SEO penalty and quality perception → unique content (cf. `pim-augmente-ia.md`)
- ❌ **Workflow without an objective gate criterion**: transitions by gut feeling → measurable thresholds (e.g. completeness ≥ 80% for "In Review")

## Sources
- **Akeneo PIM** (Serenity SaaS — Enterprise/Growth, monthly releases 2025) — per channel/locale *completeness* concept — help.akeneo.com
- **BPMN 2.0.2** — OMG (2013) — enrichment workflow modeling — omg.org/spec/BPMN
- **DAMA-DMBOK 2** (2017) — product data quality and lifecycle — dama.org

## See also
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — attribute structure driving completeness
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — measuring enriched-record quality
- [`kpis-catalogue.md`](kpis-catalogue.md) — driving time-to-market and completeness
- [`localisation-i18n.md`](localisation-i18n.md) — multilingual enrichment
- [`pim-augmente-ia.md`](pim-augmente-ia.md) — accelerating enrichment with AI
