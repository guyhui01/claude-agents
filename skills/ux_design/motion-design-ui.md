# Skill — Motion Design UI & Micro-interactions
> Certifications: IDF · Figma Professional Certification

## Objective
Design animations and transitions that improve readability, feedback and perceived experience.

## Motion Design principles
- **Easing**: ease-in, ease-out, ease-in-out, spring (natural vs mechanical)
- **Duration**: micro (100-200ms), standard (200-400ms), complex (400-600ms) — orders of magnitude consistent with the *Material Design motion guidelines* and the Doherty threshold (perceived responsiveness ~400ms)
- **12 Disney principles** (Thomas & Johnston, *The Illusion of Life*, 1981) adapted to UI: squash & stretch, anticipation, follow through…
- **Accessibility**: respect `prefers-reduced-motion` (WCAG 2.3.3) — offer an animation-free alternative
- **Continuity**: objects persist and transform, they don't appear out of nowhere

## Types of micro-interactions
- Action feedback (button press, like, toggle)
- Transitions between screens (slide, fade, shared element)
- Loading states (skeleton, spinner, progress)
- Form validation (success, error, in progress)
- Animated onboarding & empty states

## Tools
Figma Smart Animate · Framer · Lottie (After Effects → JSON) · CSS transitions

## Deliverables
- Animation specifications (duration, easing, trigger)
- Animated Figma prototype or Lottie export
- Reference table of the project's durations and easings

## Output format
Specify: interaction type · context (web, mobile) · technical constraint (CSS only, Lottie, Framer)

## Sources
- **Frank Thomas & Ollie Johnston** — *The Illusion of Life: Disney Animation* (1981) — 12 animation principles
- **Walter R. Doherty & Ahrvind J. Thadhani (IBM)** — *The Economic Value of Rapid Response Time* (1982) — Doherty threshold (~400ms)
- **Google** — *Material Design — Motion* (durations, easing, shared transitions)
- **W3C** — *WCAG 2.2 — SC 2.3.3 Animation from Interactions* — `prefers-reduced-motion`
- **Val Head** — *Designing Interface Animation* (Rosenfeld Media, 2016)

## Anti-patterns
- Animations that are too long (> 600ms) which slow perception and frustrate
- Ignoring `prefers-reduced-motion` → risk of discomfort (vestibular disorders)
- Decorative motion with no function (neither feedback, orientation, nor continuity)
- Systematic linear easing → "mechanical", unnatural feel
- Durations defined case by case without motion tokens → inconsistency across the product

## See also
- [design-system.md](design-system.md) — standardized motion tokens (durations, easing)
- [design-handoff.md](design-handoff.md) — precisely specify the animations to the devs
- [accessibilite-wcag.md](accessibilite-wcag.md) — accessible animation (reduced motion)
- [prototypage-figma.md](prototypage-figma.md) — prototype the motion (Smart Animate)
