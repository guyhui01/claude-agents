# Skill — Multisite Digital Rebranding
> Certifications: Adobe AEM Sites Business Practitioner · TOGAF 10 Foundation · Acquia Certified Site Builder

## Objective
Lead a digital rebranding on a multisite CMS platform: new visual identity, template migration, content updates, international coordination — while ensuring service continuity and brand consistency.

## Phases of a digital rebranding

```
PHASE 1 — SCOPING & AUDIT (weeks 1-2)
  □ Asset inventory (current logos, colors, typography)
  □ Map of impacted sites/languages/markets
  □ Dependency analysis (design system, shared components)
  □ Constraint identification (legal, contractual, market deadlines)

PHASE 2 — NEW DESIGN SYSTEM (weeks 3-6)
  □ New design tokens (colors, typography, spacing)
  □ Atomic component redesign (buttons, forms, navigation)
  □ Page templates (homepage, product page, article, landing)
  □ Figma / Storybook documentation (components + usage)

PHASE 3 — CMS DEVELOPMENT (weeks 5-10)
  □ Update the CMS theme/skin (CSS variables, tokens)
  □ Redesign AEM or Drupal templates/components
  □ Migrate assets (logos, icons) into the DAM
  □ Visual regression tests (Percy, Chromatic)

PHASE 4 — CONTENT MIGRATION (weeks 8-12)
  □ Bulk replacement script (logos, brand mentions)
  □ Update SEO metadata (Open Graph, favicons)
  □ Per-market validation (local review + legal)
  □ Progressive publication (by market, by channel)

PHASE 5 — CUTOVER & POST-LAUNCH (weeks 12-14)
  □ Coordinated go-live (DNS, CDN flush, cache purge)
  □ 500/404 error monitoring (Datadog, New Relic)
  □ Post-launch SEO monitoring (GSC, rankings)
  □ Internal communication (brand guide shared with teams)
```

## Design Tokens — CSS structure

```css
/* tokens/brand.css — New design system */
:root {
  /* Primary colors */
  --color-primary-500:    #0066CC;
  --color-primary-600:    #0052A3;
  --color-primary-700:    #003D7A;

  /* Neutral colors */
  --color-neutral-50:     #F8FAFC;
  --color-neutral-900:    #1A1A2E;

  /* Typography */
  --font-family-heading:  'Brand Sans', system-ui, sans-serif;
  --font-family-body:     'Brand Text', Georgia, serif;
  --font-size-base:       1rem;
  --line-height-base:     1.6;

  /* Spacing */
  --spacing-4:  0.25rem;
  --spacing-8:  0.5rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;

  /* Border radius */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.08);
}
```

## Bulk migration script (DAM assets)

```python
import re

def rebrand_content(text: str, mapping: dict) -> str:
    """Replace old brand references with the new one."""
    for old, new in mapping.items():
        text = re.sub(re.escape(old), new, text, flags=re.IGNORECASE)
    return text

BRAND_MAPPING = {
    "OldBrand":             "NewBrand",
    "oldbrand.com":         "newbrand.com",
    "OldBrand Group":       "NewBrand Alliance",
    # logos
    "/dam/logos/old-logo.svg": "/dam/logos/new-logo.svg",
}

# Apply to all Drupal nodes
for node in get_all_nodes():
    node['body'] = rebrand_content(node['body'], BRAND_MAPPING)
    node['meta_description'] = rebrand_content(node['meta_description'], BRAND_MAPPING)
    save_node(node)
```

## International multisite coordination

```
MARKET     LANGUAGE  LOCAL TEAM        REQUIRED VALIDATION        GO-LIVE
─────────  ────────  ────────────────  ─────────────────────────  ─────────────
France     FR        Brand team FR     Legal + Management          Week 12
EMEA       EN/DE/ES  Local web teams   Local brand manager        Week 13
APAC       ZH/JA     External agency   Local legal + Brand HQ     Week 14
Americas   EN/PT/ES  Internal team     Americas Brand Director     Week 15
```

## Deliverables
- Rebranding plan (phases, milestones, RACI)
- Updated design tokens and design system (Figma + Storybook)
- Rebranded CMS components (templates, themes)
- Bulk migration scripts (logos, text, metadata)
- Visual regression test report
- Digital brand guide (component usage, do/don't)
- Post-launch dashboard (SEO + performance + errors)

## Output format
Specify: **CMS and version**, **number of sites/markets**, **scope** (visual only or content too), **constraints** (event deadline, legal sign-off), **teams** (centralized or distributed by market), **design stack** (Figma, Storybook, design tokens).

## Anti-patterns
- ❌ **Rebranding without a design system / tokens**: visual inconsistency across sites → centralized design tokens
- ❌ **Naive regex replacement** (global IGNORECASE): false positives and corrupted content → targeted mapping + review
- ❌ **No visual regression tests** (Percy/Chromatic): undetected UI regressions → visual diff in CI
- ❌ **Uncoordinated multi-market go-live**: inconsistent brand in transition → planned cutover window per market
- ❌ **Forgetting favicons / Open Graph / emails / PDFs** in scope: residual brand visible → exhaustive checklist
- ❌ **No CDN/cache purge at go-live**: old branding still served → coordinated flush

## Sources
- **Design Tokens** — W3C Design Tokens Community Group (standard format) — tr.designtokens.org
- **Atomic Design** (Brad Frost, 2016) — atomicdesign.bradfrost.com · **Figma / Storybook** — design system and documentation
- **Visual regression testing** — Percy (BrowserStack) / Chromatic — visual diff tools
- **TOGAF 10** (2022) — multisite trajectory coordination — opengroup.org

## See also
- [`architecture-cms.md`](architecture-cms.md) — the architecture's components and design system
- [`migration-cms.md`](migration-cms.md) — coordination with a possible migration
- [`../dam_expert/brand-portal.md`](../dam_expert/brand-portal.md) — rolling out the new guidelines to teams
- [`../dam_expert/naming-convention.md`](../dam_expert/naming-convention.md) — renaming brand assets
