# Skill — Design Handoff Figma → Dev
> Certifications: Figma Professional Certification

## Objective
Hand designs over to developers clearly and completely to avoid back-and-forth.

## Pre-handoff checklist
- [ ] Frames clearly named and organized by flow
- [ ] All states documented (default, hover, focus, disabled, error, empty)
- [ ] Components linked to the Design System (no hardcoded values)
- [ ] Tokens / variables used (colors, spacing, typography)
- [ ] Functional annotations added (behaviors, business rules)
- [ ] Assets exported (SVG icons, WebP/AVIF images)
- [ ] Responsive specified (mobile + desktop at a minimum)
- [ ] Accessibility noted (contrast, alt text, focus order)

## Handoff tools
- **Figma Dev Mode**: direct inspection of CSS / iOS / Android properties
- **Zeroheight**: living Design System documentation
- **Supernova**: token sync DS → code

## Annotation format
- Click / tap behavior
- Validation rules (form fields)
- Display conditions (if/else states)
- Dynamic data sources

## Deliverables
- Figma file with Dev Mode enabled
- "Specs & Annotations" page in the file
- Changelog of changes per version

## Output format
Specify: front-end stack (React, Flutter, iOS…) · Design System used · level of animation to specify

## Sources
- **Figma** — *Dev Mode* documentation (CSS/iOS/Android inspection, ready-for-dev statuses)
- **Design Tokens Community Group (W3C)** — *Design Tokens Format Module* (first stable version 2025.10, JSON `.tokens` format)
- **Brad Frost** — *Atomic Design* (2016) — composition foundations → components → patterns
- **Nathan Curtis (EightShapes)** — articles on component specification and documentation

## Anti-patterns
- "Hardcoded" values instead of tokens/components → drift between design and code
- Handoff = just a Figma link without behavior annotations or business rules
- Incomplete states: only the "happy path" delivered (forgetting error / empty / loading / disabled)
- No changelog: the dev doesn't know what changed between two versions
- Accessibility not annotated (focus order, alt text) pushed onto the dev without guidance

## See also
- [design-system.md](design-system.md) — source of the components and tokens handed over
- [accessibilite-wcag.md](accessibilite-wcag.md) — accessibility criteria to annotate
- [motion-design-ui.md](motion-design-ui.md) — specify the animations (durations, easing)
- [prototypage-figma.md](prototypage-figma.md) — reference prototype attached to the handoff
