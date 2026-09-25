# Skill — Interactive Prototyping in Figma
> Certifications: Figma Professional Certification

## Objective
Create high-fidelity interactive prototypes to test and validate user journeys.

## Figma techniques
- **Connections**: links between frames (navigate, overlay, swap)
- **Smart Animate**: smooth transitions between states
- **Variables & Conditions**: dynamic prototypes with logic
- **Interactive Components**: components with interactive states
- **Prototype flows**: multiple journeys from a single file

## Best practices
- Name all frames clearly (screen/state)
- Define a starting point per flow
- Use overlays for modals and tooltips
- Test on a real device via Figma Mirror

## Deliverables
- Figma prototype link (view only)
- Flows annotated per user journey
- Test guide for the testers

## Output format
Specify: journey to prototype · target device · expected level of interaction (clickable / animated / conditional)

## Sources
- **Figma** — official *Prototyping* documentation (Smart Animate, Variables, Interactive Components, Dev Mode)
- **Carolyn Snyder** — *Paper Prototyping* (Morgan Kaufmann, 2003) — fundamentals of iterative prototyping
- **Todd Zaki Warfel** — *Prototyping: A Practitioner's Guide* (Rosenfeld Media, 2009) — fidelity spectrum
- **Nielsen Norman Group** — articles on prototype fidelity and prototype testing

## Anti-patterns
- Jumping straight to hi-fi: over-investing in a journey not validated in lo-fi
- Polished "demo" prototype that is not testable (no starting point, incomplete flows)
- Missing error / empty / loading states → biased test on the happy path only
- Confusing a prototype (simulation) with the product (Figma variables don't replace real back-end logic)
- Not testing on a real device (touch sizes, gestures) before the user test

## See also
- [wireframing.md](wireframing.md) — lo-fi step upstream of the hi-fi prototype
- [tests-utilisateurs.md](tests-utilisateurs.md) — test the prototype with real users
- [design-system.md](design-system.md) — components reused in the prototype
- [motion-design-ui.md](motion-design-ui.md) — animate the transitions (Smart Animate)
