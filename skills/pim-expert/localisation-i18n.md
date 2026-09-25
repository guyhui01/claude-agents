# Skill — Product Localization and Internationalization (i18n)
> Certifications: Akeneo Certified Product Manager · Contentserv PIM Specialist · inriver Certified Professional

## Objective
Manage product-record localization: content translation, local adaptation (regulations, units, currencies, formatting), translation workflow and multilingual governance — for consistent, compliant international distribution.

## Localization matrix — Dimensions to manage

```
DIMENSION            EXAMPLE FR → DE                    AUTOMATABLE      VALIDATION REQUIRED
───────────────────  ─────────────────────────────────  ───────────────  ────────────────────
Marketing text       Product description, bullet points  Yes (LLM + TM)  Yes (native review)
Technical data       Weight, dimensions (SI units)       Yes (conversion) No (if SI standard)
Price                EUR → EUR (same zone) / CHF / GBP   Yes (rate)       Yes (local pricing)
Regulation           RoHS, CE, FCC, CCC, PSE              No              Yes (legal team)
Packaging text       Legal notices, allergens             No              Yes (legal team)
Media                Localized packaging photos           No              Yes (brand validation)
Units of measure     oz → g, inches → cm (US → EU)        Yes             Yes (rounding to validate)
Launch date          Local promotions calendar            No              Yes (local marketing)
```

## Translation workflow (TMS integration)

```
STEP                ACTOR                     TOOL               GATE CRITERION
──────────────────  ────────────────────────  ─────────────────  ─────────────────────────────
1. Extraction       PIM system                PIM → TMS Export   Validated source text (fr_FR)
2. Pre-translation  Machine Translation (MT)  DeepL / Systran    All content pre-translated
3. Post-editing     Specialized translator    TMS (Phrase, memoQ) BLEU score ≥ 0.7
4. Review           Local native reviewer     TMS                 0 terminology errors
5. Brand validation Local marketing           Validation UI       Brand guidelines respected
6. PIM import       PIM system                TMS → PIM Import    Complete locale ≥ 100%
```

## Internationalization best practices

```
RULE                            RATIONALE                          EXAMPLE
──────────────────────────────  ─────────────────────────────────  ────────────────────────────
Separate scoped and non-scoped  Avoid needless duplication         Weight = non-scoped, desc = scoped
Single source for translation   No circular translation            fr_FR → DE, EN, IT (never DE → EN)
Translation memory (TM)         Consistency and savings            Validated product-term glossary
Freeze source text              Avoid translator round-trips        "Translation Lock" status before export
Localization ≠ Translation      Adapt substance, not just form     "Slim Fit" → "Coupe ajustée" (FR)
Local formats                   Avoid display errors               1.234,56 € (FR) vs £1,234.56 (UK)
```

## Akeneo locale configuration — Template

```yaml
locales:
  - fr_FR:   label: "Français (France)"     enabled: true    fallback: null
  - en_GB:   label: "English (UK)"          enabled: true    fallback: en_US
  - en_US:   label: "English (US)"          enabled: true    fallback: null
  - de_DE:   label: "Deutsch"               enabled: true    fallback: null
  - es_ES:   label: "Español (España)"      enabled: true    fallback: null
  - it_IT:   label: "Italiano"              enabled: true    fallback: null
  - nl_NL:   label: "Nederlands"            enabled: true    fallback: null
  - pt_BR:   label: "Português (Brasil)"    enabled: false   fallback: null

# Scoped attributes (to be localized)
localized_attributes:
  - product_name
  - short_description
  - long_description
  - bullet_points
  - legal_notices

# Non-scoped attributes (single value)
non_localized_attributes:
  - sku
  - ean
  - weight
  - dimension_l
  - main_image
```

## Deliverables
- Localization matrix (target locales × attributes × owners)
- Translation workflow (diagram + TMS integration)
- Per-market terminology glossary (validated terms)
- PIM locale configuration and fallback rules
- Local adaptations guide (regulations, formats, units)
- Translation coverage report per locale and channel

## Output format
Specify: **target markets** (countries, languages), **volume of records** to localize, **existing TMS** (Phrase, memoQ, Crowdin…), **target PIM**, **attributes to localize** vs **non-scoped**, **local regulatory constraints** identified.

## Anti-patterns
- ❌ **Circular translation** (DE → EN instead of a single fr_FR source): cumulative semantic drift → always translate from the master source
- ❌ **MT without human post-editing**: terminology and regulatory errors → post-editing + native review
- ❌ **Localizing = translation only**: ignoring units, formats, currencies, regulations → adapt the substance (cf. matrix)
- ❌ **Legal notices / allergens auto-translated without legal validation**: non-compliance risk → legal-team gate
- ❌ **No source-text freeze** before TMS export: looping translator round-trips → "Translation Lock" status
- ❌ **No translation memory / glossary**: inconsistency and extra cost → TM + glossary validated per market

## Sources
- **Akeneo PIM** (Serenity) — scoped locales, fallback — help.akeneo.com
- **BLEU** — Papineni et al., *BLEU: a Method for Automatic Evaluation of MT* (ACL, 2002); complement with chrF/COMET for modern post-editing
- **ISO 80000** (units) · **ISO 4217** (currencies) · **ISO 639 / ISO 3166** (languages/countries) — local normalization — iso.org
- **Regulatory markings**: CE (EU), RoHS, FCC (US), CCC (China), PSE (Japan) — per-market validation

## See also
- [`enrichissement-produit.md`](enrichissement-produit.md) — translation step in enrichment
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — scoped vs non-scoped attributes
- [`syndication-canaux.md`](syndication-canaux.md) — multilingual distribution per market
- [`pim-augmente-ia.md`](pim-augmente-ia.md) — AI-assisted pre-translation
