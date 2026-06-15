# Skill — WCAG 2.2 / RGAA Accessibility
> Certifications: IAAP CPACC · IAAP WAS

## Objective
Ensure that interfaces are usable by everyone, including people with disabilities.

## Standards
- **WCAG 2.2** (W3C, Recommendation of October 5, 2023; adopted as ISO/IEC 40500:2025): 4 principles — Perceivable, Operable, Understandable, Robust. *WCAG 3.0 remains at the Working Draft stage, non-normative.*
- **RGAA 4.1.2** (2021): the French implementation, mandatory for public services
- **European Accessibility Act** (EU Directive 2019/882): requirements applicable since June 28, 2025 to many private products/services (e-commerce, banking, transport)
- Levels: A (minimum) · AA (legal target standard) · AAA (optimal)

## Key criteria to check
- Color contrast: ratio ≥ 4.5:1 (normal text), ≥ 3:1 (large text)
- Full keyboard navigation (Tab, Shift+Tab, Enter, Esc)
- Text alternatives (images, icons, charts)
- Semantic HTML structure (headings, landmarks, lists)
- Accessible forms (labels, errors, visible focus)
- Video captions and audio transcripts

## Deliverables
- WCAG audit report per criterion (compliant / non-compliant / NA)
- Estimated overall accessibility level
- Prioritized remediation plan

## Tools
Axe DevTools · WAVE · Contrast Checker · NVDA · VoiceOver

## Output format
Specify: interface type · target level (AA/AAA) · legal context (public sector?)

## Sources
- **W3C / WAI** — *Web Content Accessibility Guidelines (WCAG) 2.2* (Recommendation, October 5, 2023) — [w3.org/TR/WCAG22](https://www.w3.org/TR/WCAG22/)
- **DINUM** — *RGAA 4.1.2* (Référentiel général d'amélioration de l'accessibilité, 2021)
- **European Union** — *Directive (EU) 2019/882* (European Accessibility Act, applicable since 2025-06-28)
- **ISO/IEC 40500:2025** — adoption of WCAG 2.2 as an international standard
- **IAAP** — *CPACC* (Core Competencies) and *WAS* (Web Accessibility Specialist) certifications

## Anti-patterns
- Aiming for AAA everywhere: AAA is not required globally (W3C), AA is the legal target
- Relying solely on an automated checker (Axe/WAVE cover ~30-40% of criteria) without manual testing or a screen reader
- Contrast validated on text but forgotten on UI components and icons (SC 1.4.11)
- "Accessibility" handled at the end of the project rather than from the design stage (remediation cost × high)
- Confusing technical compliance with real usability by people with disabilities

## See also
- [design-system.md](design-system.md) — components accessible by default (focus states, token contrasts)
- [design-handoff.md](design-handoff.md) — accessibility annotations passed to the devs
- [wireframing.md](wireframing.md) — semantic structure and reading order from the wireframe stage
- [`../redacteur_ia/ux-writing.md`](../redacteur_ia/ux-writing.md) — accessible labels, error messages and microcopy
