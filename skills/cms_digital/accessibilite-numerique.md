# Skill — Digital Accessibility (RGAA 4.1 / WCAG 2.2)
> Certifications: WCAG 2.2 / RGAA 4.1 — Digital accessibility (W3C / DINUM 2024)

## Objective
Audit and bring a CMS platform into compliance with RGAA 4.1 (legal requirement in France) and WCAG 2.2: identify non-conformities, prioritize fixes, and produce the Accessibility Statement.

## WCAG / RGAA levels

```
LEVEL   DESCRIPTION                         OBLIGATION
──────  ──────────────────────────────────  ─────────────────────────────────
A       Absolute minimum (25 RGAA criteria) Mandatory (FR public services)
AA      Recommended level (50 criteria)     Mandatory (full RGAA 4.1)
AAA     Optimal level (13 extra criteria)   Recommended, not mandatory
```

## The 4 POUR principles (WCAG 2.2)

```
PERCEIVABLE    Content is accessible to all senses
  • Text alternatives for images (alt)
  • Captions and transcripts for media
  • Adaptability: content readable without layout
  • Distinguishable: sufficient contrast, no text-in-image

OPERABLE       The interface is keyboard-operable and without time limits
  • Keyboard: all features keyboard-accessible
  • Enough time: no blocking time limit
  • Seizures: no content flashing > 3 times/second
  • Navigation: consistent landmarks and titles

UNDERSTANDABLE Content and interface are intelligible
  • Readable: declared language, definitions of rare terms
  • Predictable: consistent navigation, no change on focus
  • Input assistance: labels, clear error messages

ROBUST         Compatible with assistive technologies
  • Parsing: valid HTML, correct ARIA
  • Compatibility: screen readers (NVDA, VoiceOver, JAWS)
```

## Priority RGAA criteria (P1 — High impact)

```
CRITERION  TITLE                                          QUICK TEST
─────────  ─────────────────────────────────────────────  ─────────────────────────────
1.1        Text alternative for informative image          Inspect the alt attribute
3.3        Normal-text contrast ≥ 4.5:1                    Contrast Analyser tool
4.1        Video transcript / captions                     Check captions are present
6.1        Explicit link labels out of context             List all the "click here"
7.1        Keyboard-accessible scripts                      Tab + Enter on every CTA
8.2        Valid HTML code (W3C validator)                  Run the W3C validator
9.1        Consistent heading hierarchy (single H1)         Inspect the Hn structure
10.4       Text zoom 200% without info loss                Browser zoom to 200%
11.1       Labels associated with form fields               Inspect label/for or aria-label
12.8       Logical tab order                                Tab keyboard pass-through
```

## Essential ARIA patterns

```html
<!-- Main navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Modal / Dialog -->
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Modal title</h2>
  <p id="dialog-desc">Content description</p>
  <button aria-label="Close the modal">×</button>
</div>

<!-- Loading button -->
<button aria-busy="true" aria-label="Loading">
  <span aria-hidden="true">⏳</span> Send
</button>

<!-- Skip link (RGAA mandatory) -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

## Audit tools

```
TOOL                TYPE          USE
──────────────────  ────────────  ─────────────────────────────────────────
axe DevTools        Extension     Automatic audit in Chrome DevTools
WAVE               Extension     In-page error visualization
Colour Contrast     Online        Contrast ratio checks
NVDA + Firefox      Screen reader Manual audit (Windows)
VoiceOver + Safari  Screen reader Manual audit (macOS / iOS)
Accessibility Tree  DevTools      Accessibility tree inspection
Pa11y               CLI / CI      Automation in the CI/CD pipeline
```

## Accessibility Statement — Structure

```
ACCESSIBILITY STATEMENT
────────────────────────────────────────────
Organization         : [Organization name]
Site URL             : [https://...]
Conformance status   : [Fully / Partially / Non-conformant]
Audit results        : [Conformance rate: X%]
Non-conformities     : [List of criteria not met]
Exemptions           : [Exempt content with justification]
Alternatives         : [Accessibility phone number / email]
Last updated         : [YYYY-MM-DD]
```

## Deliverables
- RGAA 4.1 audit report (criteria grid, conformance rate)
- axe DevTools + WAVE report (exports)
- Prioritized fix plan (P1 → P3 by impact/effort)
- Accessibility Statement (DINUM-compliant)
- Accessible contribution guide (for CMS editors)
- Automated Pa11y tests integrated into CI/CD

## Output format
Specify: **URL or component to audit**, **CMS** (AEM, Drupal, WordPress…), **target level** (A, AA, AAA), **constraints** (public service → RGAA legal requirement, compliance deadline), **assistive technologies** to account for.

## Anti-patterns
- ❌ **Automated audit alone** (axe/WAVE) without manual screen-reader testing: ~30% of criteria aren't automatically detectable → manual NVDA/VoiceOver audit is mandatory
- ❌ **Redundant `alt` or alt on decorative images**: noise for the screen reader → `alt=""` for decorative
- ❌ **Contrast < 4.5:1** (normal text): unreadable → check at design time, not after
- ❌ **Overused ARIA** (roles redundant with native HTML): "No ARIA is better than bad ARIA" → prefer semantic HTML
- ❌ **No Accessibility Statement**: legal non-compliance (FR public services) → publish the DINUM statement
- ❌ **Accessibility handled at the end of the project**: high rework cost → build it in from the design stage (a11y by design)

## Sources
- **WCAG 2.2** — W3C Recommendation (Oct. 2023) — w3.org/TR/WCAG22
- **RGAA 4.1** — DINUM (French standard, aligned with WCAG, law n° 2005-102 / 2019 decree obligation) — accessibilite.numerique.gouv.fr
- **WAI-ARIA 1.2** — W3C — w3.org/TR/wai-aria
- **EN 301 549** — European accessibility standard (EU public sector) — etsi.org

## See also
- [`performance-web.md`](performance-web.md) — performance and accessibility (shared Lighthouse audit)
- [`seo-technique-cms.md`](seo-technique-cms.md) — a11y/SEO overlap (Hn structure, alt, language)
- [`gouvernance-editoriale.md`](gouvernance-editoriale.md) — accessible contribution on the editor side
- [`architecture-cms.md`](architecture-cms.md) — accessibility from the component design stage
