# Skill — Product Data Onboarding & Import
> Certifications: Akeneo Certified Developer · SAP MDG Associate · DAMA DMBOK2

## Objective
Industrialize the onboarding of new product data: source data collection (ERP, suppliers, spreadsheets), normalization, deduplication, quality control and loading into the PIM — to reduce integration lead time and guarantee quality from entry.

## Typical onboarding sources

```
SOURCE              FORMAT             FREQUENCY     EXPECTED QUALITY    PROCESSING
──────────────────  ─────────────────  ────────────  ──────────────────  ──────────────────────────
ERP (SAP/Oracle)    API / IDoc / CSV   Daily         High                Direct mapping + validation
Supplier Excel      XLSX               On demand     Variable            Normalization + cleaning
Supplier XML        GS1 / ETIM         On demand     Medium              Parsing + schema mapping
DSV import          CSV / TSV          Weekly        High                Format check + loading
Acquisition / Merge DB dump            One-off       Low                 Audit + dedup + migration
Competitor scraping Web                One-off       Low                 Reference enrichment
Content agency      JSON / CSV         Monthly       High                Validation + enrichment
```

## 5-step onboarding process

```
STEP 1 — COLLECTION & RECEPTION
  □ Receive the source file (SFTP, portal, API)
  □ Format validation (UTF-8 encoding, separator, headers)
  □ Quarantine if the format is invalid → notify sender

STEP 2 — NORMALIZATION
  □ Cleaning: remove whitespace, special characters, BOM
  □ Standardization: units (g→kg, in→cm), dates (ISO 8601), booleans
  □ Map source columns → PIM attributes (mapping dictionary)
  □ Handle missing values (default value or rejection)

STEP 3 — QUALITY CONTROL
  □ EAN/GTIN validation (GS1 check digit)
  □ SKU uniqueness check (no duplicate with the existing catalog)
  □ Required-value check (sku, family, name, ean)
  □ Inconsistency detection (weight = 0, negative price, description = title)
  □ Anomaly report (list of error rows + reason)

STEP 4 — PIM IMPORT
  □ Import to staging (pre-production environment)
  □ Visual sample validation (10 random records)
  □ Post-import completeness score computation
  □ Import to production if validation passes

STEP 5 — NOTIFICATION & TRACKING
  □ Import report (# rows processed, created, updated, errors)
  □ Notify the product team (import complete, actions to take)
  □ Update the onboarding dashboard (KPIs)
```

## EAN-13 validation script (Python)

```python
def validate_ean13(ean: str) -> bool:
    """Validate an EAN-13 code by check-digit verification"""
    if not ean or len(ean) != 13 or not ean.isdigit():
        return False
    total = sum(
        int(ean[i]) * (1 if i % 2 == 0 else 3)
        for i in range(12)
    )
    check_digit = (10 - (total % 10)) % 10
    return check_digit == int(ean[12])

# Anomaly report (example)
def check_row(row: dict) -> list[str]:
    errors = []
    if not row.get('sku'):           errors.append("Missing SKU")
    if not validate_ean13(row.get('ean', '')): errors.append("Invalid EAN")
    if not row.get('pim_family'):    errors.append("Missing family")
    if float(row.get('weight', 0)) <= 0: errors.append("Weight zero or negative")
    return errors
```

## Deliverables
- Source → PIM mapping dictionary (per source type)
- Normalization and quality-control scripts
- Onboarding report template (errors, statistics, actions)
- Documented onboarding procedure (SOP — Standard Operating Procedure)
- Onboarding tracking dashboard (volumes, error rate, lead times)
- Contributor guide (standardized Excel template for suppliers)

## Output format
Specify: **onboarding sources** (ERP, suppliers, agencies…), **formats received** (Excel, CSV, XML, API…), **volume** (# references/month), **target PIM** (Akeneo, Pimcore…), **acceptable processing time** (real-time, daily, weekly).

## Anti-patterns
- ❌ **No quarantine on invalid format**: polluted data loaded en masse → reject + notify sender at step 1
- ❌ **EAN/GTIN not validated** (GS1 check digit): false identifiers in the catalog → blocking validation
- ❌ **Direct import to production without staging**: irreversible pollution → pre-prod + validated sample
- ❌ **Missing values silently replaced** by defaults: invisible false data → reject or flag explicitly
- ❌ **No anomaly report sent back to the sender**: the same errors recur → supplier feedback loop
- ❌ **Onboarding without a standardized supplier template**: each source in its own format → enforced template (cf. `portail-fournisseurs.md`)

## Sources
- **GS1 General Specifications v24.0** (2024) — EAN-13/GTIN, check-digit algorithm — gs1.org
- **ETIM 10.0** (Dec. 2024) — classification of technical supplier files — etim-international.com
- **ISO 8601** (dates) · **ISO 80000** (units) — normalization at step 2 — iso.org
- **DAMA-DMBOK 2** (2017) — data quality at ingestion — dama.org

## See also
- [`integration-erp-pim.md`](integration-erp-pim.md) — ERP flow (structured source)
- [`portail-fournisseurs.md`](portail-fournisseurs.md) — normalized collection from suppliers
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — quality rules and deduplication
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — target model for the mapping
