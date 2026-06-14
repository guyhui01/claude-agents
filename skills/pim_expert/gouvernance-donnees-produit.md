# Skill — Product Data Governance (MDM & Data Quality)
> Certifications: CDMP · DAMA DMBOK2 · SAP MDG Associate · ISO/IEC 42001:2023

## Objective
Set up a product data governance framework: define the master repository (golden record), quality policies, Data Steward roles, deduplication rules and compliance — to guarantee catalog reliability across all channels and systems.

## The 6 pillars of product data governance

```
PILLAR              DESCRIPTION                                 KEY DELIVERABLES
──────────────────  ──────────────────────────────────────────  ─────────────────────────────────
1. Organization     Roles, responsibilities, data council       RACI · Charter · Governance council
2. Policy           Rules, standards, data lifecycle            Data Policy · Naming conventions
3. Quality          Measurement, correction, error prevention  Quality scorecard · Business rules
4. Architecture     Master data model, sources of truth        MDM Map · Data flows
5. Lifecycle        Creation, enrichment, archiving, purge      Lifecycle workflow · SLA
6. Compliance       GDPR, product regulations, traceability     Audit trail · Data lineage
```

## MDM model — Sources of truth per domain

```
ATTRIBUTE                    MASTER SOURCE    CONSUMING SYSTEM               CONFLICT RULE
───────────────────────────  ───────────────  ─────────────────────────────  ──────────────────────────
SKU reference                ERP (SAP)        PIM · e-com · WMS · BI         ERP = single source (master)
Product name (technical)     ERP              PIM · print · e-com            ERP → PIM (enrichment)
Marketing description        PIM              e-com · CMS · print            PIM = single source
Public price                 ERP / Pricing    e-com · PIM (read-only)        ERP = price master
Weight / Dimensions          ERP              PIM · logistics                ERP = master (certification)
Images / Videos              DAM              PIM (reference) · CMS · e-com  DAM = single source
Available stock              WMS              e-com (real-time)              WMS = real-time master
Product certifications       PIM (manual)     e-com · print · compliance     PIM = certs master
```

## Deduplication rules

```python
# Product deduplication logic (pseudo-code)
def deduplicate_products(candidates):
    """
    Detect duplicates via multi-criteria similarity
    """
    duplicates = []
    for i, prod_a in enumerate(candidates):
        for prod_b in candidates[i+1:]:
            score = 0
            # Exact EAN match → certain duplicate
            if prod_a['ean'] == prod_b['ean']:
                score = 100
            else:
                # Name similarity (Levenshtein)
                score += levenshtein_similarity(prod_a['name'], prod_b['name']) * 40
                # Same brand
                score += (prod_a['brand'] == prod_b['brand']) * 20
                # Same dimensions
                score += (prod_a['weight'] == prod_b['weight']) * 20
                # Same family
                score += (prod_a['family'] == prod_b['family']) * 20
            if score >= 80:
                duplicates.append({'a': prod_a, 'b': prod_b, 'score': score})
    return duplicates
```

## Product data quality scorecard

```
DIMENSION          INDICATOR                           TARGET   WEIGHT
─────────────────  ──────────────────────────────────  ───────  ─────
Completeness       % of required attributes filled     ≥ 95%    30%
Accuracy           % of data validated vs ERP source   ≥ 99%    25%
Consistency        % of cross-system contradictions    ≤ 0.5%   20%
Uniqueness         % of detected duplicates not handled ≤ 0.1%  15%
Timeliness         % of up-to-date records (< 6 months) ≥ 90%   10%
──────────────────────────────────────────────────────────────────────
Overall score      Weighted average                    ≥ 92%
```

## Deliverables
- Product data governance charter
- MDM map (sources of truth, flows, consuming systems)
- Data dictionary with quality rules per attribute
- Quality scorecard (monthly dashboard)
- Deduplication and correction procedures
- Data quality audit report (initial and recurring)

## Output format
Specify: **scope** (number of SKUs, markets), **systems involved** (ERP, PIM, DAM, e-com, WMS), **main quality problems observed**, **current organization** (are there Data Stewards?).

## Anti-patterns
- ❌ **No golden record / defined source of truth** per attribute: unresolved cross-system conflicts → explicit MDM map (ERP master for SKU/price, DAM master for media…)
- ❌ **Deduplication by name alone** (without EAN/GTIN): false positives/negatives → prioritize the GS1 identifier, similarity as a fallback
- ❌ **Scorecard with no responsible Data Steward**: indicators with no action → one owner per quality dimension
- ❌ **Arbitrary deduplication weights** not calibrated on history → tune the weights on real cases
- ❌ **"One-shot" governance** (initial audit with no recurrence): quality degrades → monthly scorecard + review
- ❌ **GDPR ignored** on person-linked data (reviews, contributors) → registry + legal basis

## Sources
- **DAMA-DMBOK 2** (2017) — *Data Management Body of Knowledge* (governance, MDM, data quality) — dama.org
- **ISO 8000** — data quality (master data) · **ISO/IEC 42001:2023** — AI governance (AI-augmented data quality) — iso.org
- **GS1 General Specifications v24.0** (2024) — GTIN/GLN as uniqueness keys — gs1.org
- **GDPR** — Regulation (EU) 2016/679 (person-linked product data) — eur-lex.europa.eu

## See also
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — governed data model
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — operational quality scorecard
- [`integration-erp-pim.md`](integration-erp-pim.md) — ERP → PIM flows (sources of truth)
- [`enrichissement-produit.md`](enrichissement-produit.md) — lifecycle and completeness
