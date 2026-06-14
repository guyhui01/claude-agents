# Skill — Multichannel Product Catalog Syndication
> Certifications: Akeneo Certified Developer · Salsify Certified · inriver Certified Professional

## Objective
Syndicate the product catalog across all distribution channels: e-commerce, marketplaces, print, B2B portals and partners — adapting data and formats to each channel's specific requirements.

## Channel map and their requirements

```
CHANNEL             FORMAT         SPECIFIC CONSTRAINTS                 SYNC FREQUENCY
──────────────────  ─────────────  ───────────────────────────────────  ──────────────
Own e-com site      REST/JSON API  Real-time stock · Promo prices       Real-time / Push
Amazon Vendor       SP-API + ASIN  80-char title limit · GTIN           Daily
Amazon Seller       SP-API         Amazon categories · Bullet points    Daily
FNAC Marketplace    FNAC API       EAN required · FNAC categories       Daily
Cdiscount           Cdiscount API  EAN + GTIN · Technical sheets         Daily
Google Shopping     Google Feed    Unique ID · GTIN · Tax-incl. price   Daily / Feed
Print catalog       InDesign XML   300 DPI image resolution · CMYK      On demand
B2B Portal          Custom API     Negotiated prices · Customer ref      Real-time
EDI Retailers       EANCOM/EDIFACT GS1 standard · GTIN14                Weekly
```

## Syndication architecture (Akeneo Channel)

```yaml
# Akeneo channel configuration — e-commerce example
channels:
  ecommerce_fr:
    locales: [fr_FR]
    currencies: [EUR]
    completeness: 100%
    attribute_filters:
      - product_name
      - short_description
      - long_description
      - public_price
      - main_image
      - secondary_images
      - ean
      - weight
      - dimension_l

  amazon_fr:
    locales: [fr_FR]
    currencies: [EUR]
    completeness: 100%
    attribute_filters:
      - product_name        # max 80 characters
      - bullet_points       # 5 Amazon bullets
      - long_description    # max 2000 characters
      - public_price
      - ean
      - asin                # Amazon identifier
      - brand
      - amazon_category
```

## Syndication flow — Sequence

```
PIM
 │
 ├─→ Transformation (channel rules)
 │     ├── Attribute filtering (per-channel whitelist)
 │     ├── Value formatting (truncation, encoding)
 │     ├── Channel enrichment (Amazon bullet points…)
 │     └── DAM asset association (rendition URLs)
 │
 ├─→ Pre-push validation
 │     ├── 100% completeness check
 │     ├── EAN/GTIN format check
 │     └── Field length validation
 │
 └─→ Publishing
       ├── API push (e-com, marketplaces)
       ├── File export (print, EDI)
       └── Webhook (third-party system notification)
```

## Amazon Bullet Points mapping — Template

```
AMAZON BULLET POINTS FORMAT (5 × max 255 chars)
────────────────────────────────────────────────
• [Main benefit] — [Key feature] (e.g. Maximum performance — Latest-gen 5nm processor)
• [Advantage] — [Proof] (e.g. 48h battery — Certified by an independent lab)
• [Compatibility] (e.g. Compatible with iOS 16+, Android 13+, Windows 11)
• [Certification / Label] (e.g. CE certified, RoHS compliant, 2-year EU warranty)
• [In the box] (e.g. Included: USB-C cable, 65W charger, protective case)
```

## Deliverables
- Channel map (channel × attributes × formats × frequency matrix)
- PIM channel configuration (locales, currencies, attribute filters)
- Per-channel transformation rules (truncation, formatting, enrichment)
- Connector scripts (REST API, EDI, Google Feed)
- Go-live plan (channel rollout order)
- Sync monitoring dashboard (errors, volumes, latency)

## Output format
Specify: **target channels** (prioritized list), **PIM used**, **number of references** to syndicate, **expected frequencies**, **third-party systems** to connect (e-com, ERP, DAM), **legal constraints** (tax-included price required, regulatory labeling...).

## Anti-patterns
- ❌ **Pushing without validating channel constraints** (Amazon title > 80 chars, bullets > 255 chars): mass rejection → per-channel pre-push validation
- ❌ **Missing GTIN** on a marketplace: product not listable (Amazon/Google require it) → GTIN mandatory in the channel filter
- ❌ **Syndicating below the channel's 100% completeness threshold**: partial records published → completeness block
- ❌ **Push with no error handling / retry**: silent desync → retry queue + monitoring
- ❌ **Same data for all channels** (no adaptation): marketplace non-compliance → per-channel transformation rules
- ❌ **Tax-excluded price published where tax-included is required** (EU B2C): non-compliance → per-channel legal check

## Sources
- **GS1 General Specifications v24.0** (2024) — GTIN, **GTIN-14** (case/EDI), GLN — gs1.org
- **Amazon SP-API** (Selling Partner API) — developer-docs.amazon.com · **Google Merchant Center** (Shopping feed, Google Product Category) — support.google.com/merchants
- **EANCOM / UN/EDIFACT** — standardized EDI messages (UN/CEFACT) — unece.org/cefact
- **Schema.org Product** — web/SEO product markup — schema.org/Product

## See also
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — syndicated attributes and classification (GS1/ETIM)
- [`enrichissement-produit.md`](enrichissement-produit.md) — per-channel completeness prior to syndication
- [`kpis-catalogue.md`](kpis-catalogue.md) — sync tracking and channel coverage
- [`../dam_expert/distribution-multicanal.md`](../dam_expert/distribution-multicanal.md) — distribution of assets linked to records
