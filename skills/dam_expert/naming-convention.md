# Skill — Naming Convention & Asset Filenaming Charter
> Certifications: Henry Stewart DAM Practitioner · IPTC Photo Metadata Standard Practitioner · Bynder Certified Partner

## Objective
Define and apply a digital asset naming convention: file naming charter, formatting rules, metadata encoding in the filename and governance — to guarantee findability, cross-system interoperability and unambiguous exchanges with agencies and partners.

## Filenaming fundamentals

```
RULE                              RATIONALE                          IMPLEMENTATION
────────────────────────────────  ────────────────────────────────   ─────────────────────────────────
No spaces in the name             Universal URL/CLI compatibility     Use "_" or "-" as separator
No special characters             OS and CDN compatibility            [A-Za-z0-9_-] only
Lowercase only                    Avoid dupes (img.jpg ≠ IMG)         Strict lowercase convention
Lowercase extension               Consistency                         .jpg not .JPG
No accents / diacritics           Pure ASCII for interoperability     é→e, ü→u, ñ→n
Self-descriptive name             Findable without opening the file   Structured (see below)
Version in the name               Traceability without the DAM        _v1, _v2, _final, _approved
ISO 8601 date if needed           Correct chronological sorting       YYYYMMDD (not DD-MM-YYYY)
```

## Recommended naming structure

```
FORMAT: [brand]_[category]_[subject]_[channel]_[language]_[version].[ext]

EXAMPLES:
  acme_packshot_product-x100_web_fr_v2.jpg
  acme_mood_lifestyle-kitchen_social_en_v1.webp
  acme_logo_primary_all_rgb_approved.svg
  acme_video_install-tutorial_web_fr_v3.mp4
  acme_template_leadership-deck_print_fr_2026q2.pptx
  acme_document_brand-guidelines_all_all_v5.pdf

RULES PER FIELD:
  [brand]    : short brand code (3-6 chars) — e.g. acme, brnd, sg
  [category] : packshot · mood · lifestyle · logo · icon · video · document · template
  [subject]  : descriptive in kebab-case (content keywords)
  [channel]  : web · print · social · email · all (if multichannel)
  [language] : fr · en · de · es · all (if language-neutral)
  [version]  : v1 · v2 · draft · approved · final (never "final_FINAL")
  [ext]      : jpg · webp · png · svg · tiff · pdf · mp4 · pptx
```

## Examples per asset type

```
TYPE              BAD NAME                    GOOD NAME
────────────────  ──────────────────────────  ───────────────────────────────────────────────
Product packshot  IMG_20260315_152340.jpg     acme_packshot_headset-bth500_web_fr_v2.jpg
Color logo        Logo ACME RGB FINAL.png     acme_logo_primary_all_rgb_approved.png
Campaign video    Spring TV spot FINAL.mp4    acme_video_tv-spot-spring_tv_fr_v1.mp4
PPT template      New presentation.pptx       acme_template_client-pitch_print_fr_2026q2.pptx
Team photo        Marketing team photo.jpg    corp_portrait_marketing-team_web_fr_20260501.jpg
Infographic       Figures 2026 infog v3.pdf   acme_document_infog-kpis-2026_print_fr_v3.pdf
UI icon           cart_icon.svg               acme_icon_cart-ui_web_all_v1.svg
```

## Rules for AI-generated assets

```
AI-GENERATED ASSETS — Special convention
  Mandatory prefix: aigen_ (for identification and traceability)
  Format: aigen_[brand]_[category]_[subject]_[channel]_[language]_[date].ext
  Example: aigen_acme_mood_summer-garden_web_fr_20260526.jpg

Reason: clear distinction of AI assets vs "real" photos/videos (compliance, rights, GDPR)
```

## Validation and auto-renaming script

```python
import re, os
from pathlib import Path

ALLOWED_CATEGORIES = {"packshot","mood","lifestyle","logo","icon","video","document","template"}
ALLOWED_CHANNELS   = {"web","print","social","email","tv","all"}
ALLOWED_LANGS      = {"fr","en","de","es","it","all"}

def validate_filename(filename: str) -> tuple[bool, list[str]]:
    """Validate a filename against the naming convention"""
    errors = []
    stem = Path(filename).stem
    parts = stem.split("_")

    if len(parts) < 5:
        errors.append(f"Invalid format: {len(parts)} segments (min 5 required)")
        return False, errors

    brand, category, subject, channel, lang = parts[0], parts[1], parts[2], parts[3], parts[4]

    if not re.match(r'^[a-z0-9]{2,6}$', brand):
        errors.append(f"Invalid brand: '{brand}' (2-6 alphanumeric chars)")
    if category not in ALLOWED_CATEGORIES:
        errors.append(f"Unknown category: '{category}'")
    if channel not in ALLOWED_CHANNELS:
        errors.append(f"Unknown channel: '{channel}'")
    if lang not in ALLOWED_LANGS:
        errors.append(f"Unknown language: '{lang}'")
    if re.search(r'[A-ZÀ-Ü\s@#$%&éèàüñ]', stem):
        errors.append("Name contains uppercase, spaces or special characters")

    return len(errors) == 0, errors
```

## Deliverables
- File naming charter (full convention, rules, examples)
- Glossary of allowed values (categories, channels, languages, brands)
- Validation and auto-renaming script (Python)
- DAM integration guide (validation rule at upload)
- Agency training (how to deliver assets with the right convention)
- Existing-stock audit report (% of assets compliant with the convention)

## Output format
Specify: **brands** involved, **asset types** (photos, videos, documents, templates…), **distribution channels** (for the allowed-value list), active **languages**, **agencies / partners** that deliver assets (training needed?), **target DAM** (validation rules at upload).

## Anti-patterns
- ❌ **Spaces, accents or uppercase** in the name (`Logo ACME FINAL.png`): breaks URLs/CDN and creates duplicates (`img.jpg` ≠ `IMG.jpg`) → strict `[a-z0-9_-]`
- ❌ **Date in `DD-MM-YYYY`** instead of ISO 8601 `YYYYMMDD`: wrong chronological sort → always ISO 8601
- ❌ **Chaotic versioning** (`final_FINAL_v2_def`): ambiguity over the reference version → standardized suffix `v1/v2/approved`
- ❌ **No `aigen_` prefix** on AI-generated assets: traceability and compliance (rights, AI Act transparency) lost
- ❌ **Encoding everything in the name** without filling in the IPTC/XMP metadata: the info disappears on conversion/export → the name complements, doesn't replace, the metadata
- ❌ **Convention not enforced at upload**: a theoretical rule with no automatic validation → immediate drift (cf. validation script)

## Sources
- **IPTC Photo Metadata Standard 2025.1** (Oct. 2025) — encoding descriptive/rights metadata — iptc.org/standards/photo-metadata
- **ISO 8601:2019** — *Date and time format* (YYYYMMDD) — iso.org
- **EU AI Act** — Regulation (EU) 2024/1689, art. 50 (transparency for AI-generated content → justifies the `aigen_` prefix) — eur-lex.europa.eu

## See also
- [`taxonomie-assets.md`](taxonomie-assets.md) — IPTC/XMP metadata complementing the naming
- [`gouvernance-dam.md`](gouvernance-dam.md) — naming governance and quality control
- [`workflow-validation-assets.md`](workflow-validation-assets.md) — naming validation at ingestion
- [`migration-dam.md`](migration-dam.md) — bulk renaming of the legacy stock
