# Skill — Design System
> Certifications: Figma Professional Certification · IDF

## Objective
Build a library of reusable, consistent components to speed up production and guarantee consistency.

## Structure of a Design System
> Organization inspired by **Atomic Design** (Brad Frost, 2016): atoms → molecules → organisms → templates → pages.

- **Foundations**: colors, typography, spacing, grids, iconography, elevation
- **Tokens**: Figma variables (color, size, radius, shadow) — synced with the code
- **Components**: buttons, inputs, cards, modals, navigation, forms…
- **Patterns**: component combinations (page header, empty state, error state)
- **Documentation**: usage, do/don't, accessibility per component

## Maturity levels
| Level | Description |
|---|---|
| Level 1 | Color palette + typography |
| Level 2 | Base components + tokens |
| Level 3 | Full Design System + documentation |
| Level 4 | DS synced with code (Storybook, Zeroheight) |

## Deliverables
- Structured Figma file (foundations + components)
- Documented variables / tokens
- Documentation page per component

## Output format
Specify: product context · front-end tech stack · target maturity level

## Sources
- **Brad Frost** — *Atomic Design* (2016) — [atomicdesign.bradfrost.com](https://atomicdesign.bradfrost.com/)
- **Alla Kholmatova** — *Design Systems* (Smashing Magazine, 2017) — functional vs perceptual components
- **Design Tokens Community Group (W3C)** — *Design Tokens Format Module* (2025.10) — token interoperability
- **Google** — *Material Design 3* ("Material You", 2021; Material 3 Expressive, 2025) — example of a large-scale DS
- **Nathan Curtis (EightShapes)** — Design System governance and versioning

## Anti-patterns
- Building an exhaustive DS before any product use (over-engineering) instead of iterating on real needs
- Tokens not synced design ↔ code → two sources of truth
- Missing or frozen documentation: components drift and lose the teams' trust
- No governance (who approves a new component? what versioning?)
- Components not accessible by default (contrast, focus, states) → debt pushed onto every product

## See also
- [design-handoff.md](design-handoff.md) — pass tokens and components to the devs
- [accessibilite-wcag.md](accessibilite-wcag.md) — native component accessibility
- [motion-design-ui.md](motion-design-ui.md) — motion tokens (durations, easing)
- [wireframing.md](wireframing.md) — wireframes fed by the DS components
