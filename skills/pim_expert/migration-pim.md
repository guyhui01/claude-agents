# Skill — PIM Migration (Audit, Mapping, ETL, UAT)
> Certifications: Akeneo Certified Developer · Pimcore Certified Developer · DAMA DMBOK2

## Objective
Run a product catalog migration to a new PIM: legacy audit, data mapping, ETL script development, functional UAT and cut-over — guaranteeing operational continuity and catalog integrity.

## 6-phase PIM migration plan

```
PHASE 1 — LEGACY AUDIT (D-90 to D-75)
  □ Exhaustive inventory: families, attributes, categories, products, locales, channels
  □ Source data quality assessment (completeness rate, duplicates, inconsistencies)
  □ Integration map (ERP, DAM, e-com, marketplaces, print)
  □ Identification of business customizations (rules, workflows, scripts)
  □ Volume estimation (# SKUs, variants, linked assets, locales)

PHASE 2 — TARGET DESIGN (D-75 to D-45)
  □ Target catalog modeling (new families, attributes, taxonomy)
  □ Source → target mapping (complete correspondence table)
  □ Transformation rules (normalization, conversion, enrichment)
  □ Migration strategy (big bang vs phased by family or channel)
  □ Cut-over plan (cut-over, rollback, double-run if needed)

PHASE 3 — ETL DEVELOPMENT (D-45 to D-15)
  □ Extraction scripts (legacy PIM export: CSV, API, DB dump)
  □ Transformation scripts (normalization, mapping, enrichment)
  □ Load scripts (new PIM API import)
  □ DAM asset handling (re-association or migration if needed)
  □ Tests on pilot data (10% of the catalog)

PHASE 4 — UAT (D-15 to D-5)
  □ Full migration in a staging environment
  □ Exhaustive validation (completeness scores, quality rules, workflows)
  □ Business-team UAT (editors, product managers, marketing)
  □ Integration tests (ERP, DAM, e-com, syndication channels)
  □ Performance validation (import time, API response times)

PHASE 5 — CUT-OVER (D0)
  □ Freeze the legacy PIM (read-only)
  □ Delta migration (data changed during the UAT phase)
  □ Activate the new PIM (cut flows to the old one)
  □ Critical smoke tests (product creation, publishing, API)
  □ Team communication (go-live confirmed)

PHASE 6 — POST-MIGRATION (D+7 to D+30)
  □ Anomaly monitoring (ERP flows, syndication, quality)
  □ Residual data correction
  □ Editorial team training on the new PIM
  □ Gradual decommissioning of the legacy PIM
  □ Migration review (metrics, lessons learned)
```

## Attribute mapping table — Template

```
SOURCE ATTRIBUTE        SRC TYPE    TARGET ATTRIBUTE        TARGET TYPE TRANSFORMATION
──────────────────────  ──────────  ──────────────────────  ──────────  ──────────────────────────
product_ref             VARCHAR     sku                     Text        Uppercase · trim
product_name_fr         TEXT        product_name [fr_FR]    Scoped Text Title case
product_desc_fr         LONGTEXT    long_description [fr]   RichText    HTML → RichText JSON
product_weight          DECIMAL     weight                  Metric      value + "KILOGRAM"
product_ean             VARCHAR(13) ean                     Text        Validate check digit
product_family_code     VARCHAR     pim_family              Family      Joined mapping table
product_image_url       URL         main_image              Asset       Re-upload to DAM + association
product_status          TINYINT     status                  Select      0→archived, 1→active
```

## Deliverables
- Legacy catalog audit report (inventory, quality, risks)
- Complete source → target mapping (data dictionary)
- ETL scripts (extraction + transformation + load)
- Test plan and UAT acceptance book
- Cut-over plan and rollback procedure
- Post go-live migration review

## Output format
Specify: **source PIM** (name, version), **target PIM**, **volume** (SKUs, variants, locales), **integrations to reconnect** (ERP, DAM, e-com), **time available** for the migration, **continuity constraint** (can production be frozen?).

## Anti-patterns
- ❌ **Big bang with no double-run or rollback**: total blockage if the cut-over fails → tested rollback procedure
- ❌ **Migration without freeze + delta**: records changed during UAT are lost → read-only freeze + D0 delta
- ❌ **Migrating without a legacy quality audit**: you import the debt (duplicates, inconsistencies) → clean up in phase 1
- ❌ **Forgotten DAM asset re-association**: broken images in the target → migrate/re-associate DAM links
- ❌ **No post-import completeness-score validation**: degraded records published → UAT on scores + UAT
- ❌ **EAN migrated without re-validating** the check digit → corrupted identifiers propagated

## Sources
- **Akeneo REST API** (`/api/rest/v1`) — target import/load — api.akeneo.com
- **DAMA-DMBOK 2** (2017) — migration governance and lineage — dama.org
- **GS1 General Specifications v24.0** (2024) — EAN/GTIN re-validation — gs1.org

## See also
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — target catalog design
- [`integration-erp-pim.md`](integration-erp-pim.md) — ERP flow reconnection
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — ETL normalization/quality control
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — quality and sources of truth
- [`../dam_expert/migration-dam.md`](../dam_expert/migration-dam.md) — coordinated asset migration
