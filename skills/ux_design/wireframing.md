# Skill — Wireframing (lo-fi → hi-fi)
> Certifications: Google UX Design Certificate · IDF

## Objective
Formalize the structure and interactions of an interface before the visual design.

## Fidelity levels
| Level | Usage | Tool |
|---|---|---|
| Lo-fi | Quick ideation, workshops | Paper, FigJam, Balsamiq |
| Mid-fi | Structure & flow validation | Figma (no styles) |
| Hi-fi | Final stakeholder deliverable | Figma (with Design System) |

## Elements to include
- Grid and layout (columns, margins, gutters)
- Visual hierarchy (headings, body, CTA)
- Component states (default, hover, focus, disabled, error)
- Functional annotations (behaviors, business rules)
- Navigation flow between screens

## Deliverables
- Annotated Figma frames per screen
- Flow diagram (connections between screens)
- List of identified components

## Output format
Specify: screen type (web, mobile, tablet) · functional context · desired fidelity level

## Sources
- **Bill Buxton** — *Sketching User Experiences* (Morgan Kaufmann, 2007) — role of sketching and low fidelity
- **Carolyn Snyder** — *Paper Prototyping* (2003) — paper wireframes and rapid iteration
- **Brad Frost** — *Atomic Design* (2016) — composing screens from components
- **Nielsen Norman Group** — articles on the *fidelity spectrum* (lo-fi vs hi-fi)

## Anti-patterns
- Jumping to hi-fi before validating the structure (waste of time, premature attachment to visuals)
- "Decorative" wireframe that anticipates the visual design instead of the structure
- Forgetting states (empty, error, loading) and handling only the happy path
- No annotations → behavioral ambiguity for the devs
- Reinventing existing components instead of reusing the Design System

## See also
- [architecture-information.md](architecture-information.md) — logical structure upstream of the wireframe
- [prototypage-figma.md](prototypage-figma.md) — move from wireframe to interactive prototype
- [design-system.md](design-system.md) — components reused in mid/hi-fi
- [accessibilite-wcag.md](accessibilite-wcag.md) — reading order and hierarchy from the wireframe stage
