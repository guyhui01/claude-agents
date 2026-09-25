# Skill — Product Catalog Modeling
> Certifications: Akeneo Certified Product Manager · Pimcore Certified Developer · DAMA DMBOK2

## Objective
Design the product catalog's data model: category taxonomy, product families, attribute groups, variant and unit-of-measure management — guaranteeing scalability, consistency and long-term maintainability.

## PIM data model structure

```
CATALOG
├── Categories (hierarchical taxonomy)
│   ├── Level 1: Universe (e.g. Electronics)
│   ├── Level 2: Family (e.g. Smartphones)
│   └── Level 3: Sub-family (e.g. Android 5G)
│
├── Product families (attribute structure)
│   ├── Common attributes (all products)
│   ├── Family-specific attributes
│   └── Attribute groups (editor display)
│
├── Products
│   ├── Simple product (1 SKU)
│   ├── Configurable product (with variants)
│   └── Bundle product (combination of SKUs)
│
└── Variants (variation axes)
    ├── Axis 1: Color
    ├── Axis 2: Size
    └── Axis 3: Capacity
```

## Attribute types and best practices

```
TYPE             USE                            EXAMPLE                   PITFALL TO AVOID
───────────────  ─────────────────────────────  ────────────────────────  ───────────────────────────
Text             Short untranslated label       EAN code, SKU reference   No translation needed
TextArea         Long description               Marketing description     Don't confuse with RTE
RichText         Formatted content             Technical specs           Import/export complexity
Number           Numeric value                  Weight, price, dimensions Specify the units
Boolean          Yes/No                         Organic-certified product? Don't use it for state
Select           Closed single-value list       Main color                Don't exceed 200 options
MultiSelect      Closed multi-value list        Product certifications    Combinatorial explosion
Date             ISO 8601 date                  Launch date               Timezone to normalize
Asset            Link to DAM                    Packshot photo, video     No binary in the PIM
Metric           Value + unit                   500 ml, 2.5 kg            Always define a default unit
```

## Modeling template — family sheet

```
FAMILY: [NAME]
──────────────────────────────────────────────────────────────────────
Variant axes: [Color] × [Size]
Publishing channels: [E-commerce] [Print] [B2B Portal]
Locales: [fr_FR] [en_GB] [de_DE]

ATTRIBUTE GROUP: Identification
  □ sku                   Text        Required     Not scoped
  □ ean                   Text        Required     Not scoped
  □ product_name          Text        Required     Scoped (channel + locale)
  □ brand                 Select      Required     Not scoped

ATTRIBUTE GROUP: Description
  □ short_description     TextArea    Optional     Scoped (locale)
  □ long_description      RichText    Optional     Scoped (locale)
  □ key_points            MultiSelect Optional     Scoped (locale)

ATTRIBUTE GROUP: Technical specs
  □ weight                Metric      Required     Not scoped
  □ dimension_l           Metric      Required     Not scoped
  □ material              MultiSelect Optional     Not scoped
  □ certifications        MultiSelect Optional     Not scoped

ATTRIBUTE GROUP: Media
  □ main_image            Asset       Required     Scoped (channel)
  □ secondary_images      Asset[]     Optional     Scoped (channel)
  □ product_video         Asset       Optional     Scoped (channel)
```

## Deliverables
- Product data dictionary (all attributes, types, constraints, cardinalities)
- Validated category taxonomy (up to L+3 levels)
- Family × attribute × channel × locale matrix
- Naming rules and conventions (family codes, groups)
- Modeling documentation (for data teams and editors)

## Output format
Specify: **sector** (retail, industry, B2B…), estimated **number of references**, target **distribution channels**, **locales** and **target PIM** (Akeneo, Pimcore, Salsify, inriver…).

## Anti-patterns
- ❌ **Taxonomy too deep** (> L+3 levels): heavy maintenance, unreadable navigation → favor breadth + attributes
- ❌ **"Home-grown" categories ignoring a standard** (GS1 GPC, ETIM): no interoperability for marketplace syndication → map to GPC/ETIM
- ❌ **`Number` without a unit** instead of `Metric`: ambiguity (2.5 = kg? L?) → `Metric` type + default unit
- ❌ **`Select` > 200 options** or unmanaged MultiSelect: combinatorial explosion → revisit the model
- ❌ **Binary stored in the PIM** (image in the database): degraded performance and governance → `Asset` type pointing to the DAM
- ❌ **No variant management** (color/size axes): explosion of independent SKUs → configurable products

## Sources
- **GS1 General Specifications v24.0** (2024) — GPC (Global Product Classification, 4 levels: Segment/Family/Class/Brick) · GTIN/GLN — gs1.org/standards/gpc
- **ETIM 10.0** (ETIM International, Dec. 2024 — 5,640 classes) — classification of technical products — etim-international.com
- **Schema.org Product** — product vocabulary for web/SEO — schema.org/Product
- **ISO 80000** — quantities and units (`Metric` attributes) · **ISO 8601** — dates · **DAMA-DMBOK 2** (2017) — dama.org

## See also
- [`enrichissement-produit.md`](enrichissement-produit.md) — model enrichment workflow
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — golden record and sources of truth
- [`syndication-canaux.md`](syndication-canaux.md) — GS1/Schema.org mapping for distribution
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — feeding the model from the sources
