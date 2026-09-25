# Skill — Responsive Design & Mobile-first
> Certifications: Google UX Design Certificate · IDF

## Objective
Design interfaces that adapt to every screen, starting from mobile as the reference.

## Breakpoints — common conventions
> ⚠️ There is **no normative standard** for breakpoints. The values below are widespread conventions (close to Material / Tailwind / Bootstrap); ideally set them against the product's real audience data rather than named devices.

| Name | Width | Usage |
|---|---|---|
| Mobile S | 320px | Small smartphones |
| Mobile L | 390px | Standard smartphone |
| Tablet | 768px | Tablet portrait |
| Desktop | 1280px | Laptop |
| Wide | 1440px+ | Large screens |

## Mobile-first principles
- Design for 320-390px first
- Progressive enhancement toward desktop
- Touch targets: min 44x44px (Apple HIG) / 48x48dp (Material)
- Touch gestures: tap, swipe, pinch, long press
- Priority content visible without scrolling (above the fold)

## Key adaptations mobile → desktop
- Navigation: bottom bar → sidebar or top nav
- Grid: 4 columns → 8 → 12
- Typography: increase sizes on desktop
- Interactions: hover states on desktop only

## Deliverables
- Figma frames per breakpoint (mobile + tablet + desktop)
- Grid documented per breakpoint
- Annotated responsive behaviors

## Output format
Specify: target breakpoints · context (native app or web) · existing Design System?

## Sources
- **Luke Wroblewski** — *Mobile First* (A Book Apart, 2011) — origin of the mobile-first approach
- **Ethan Marcotte** — *Responsive Web Design* (A List Apart, 2010; A Book Apart, 2011) — founder of responsive
- **Apple** — *Human Interface Guidelines* — 44×44 pt touch target
- **Google** — *Material Design — Accessibility* — 48×48 dp touch target
- **W3C** — *WCAG 2.2 — SC 2.5.8 Target Size (Minimum)* — 24×24 px target size (AA)

## Anti-patterns
- Breakpoints set on specific phone models rather than on content/audience
- "Desktop-first" degraded to mobile → sloppy mobile (the opposite of mobile-first)
- Touch targets too small or too close together (below the 44px/48dp threshold)
- Critical functions behind a `hover` (inaccessible on touch)
- Hiding content on mobile instead of prioritizing it (content parity)

## See also
- [wireframing.md](wireframing.md) — structure each breakpoint
- [design-system.md](design-system.md) — responsive grids and tokens
- [accessibilite-wcag.md](accessibilite-wcag.md) — target sizes and zoom (SC 1.4.10 / 2.5.8)
- [prototypage-figma.md](prototypage-figma.md) — test the responsive layout on a real device
