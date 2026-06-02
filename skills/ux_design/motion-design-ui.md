# Skill — Motion Design UI & Micro-interactions
> Certifications : IDF · Figma Professional Certification

## Objectif
Concevoir des animations et transitions qui améliorent la lisibilité, le feedback et l'expérience perçue.

## Principes du Motion Design
- **Easing** : ease-in, ease-out, ease-in-out, spring (naturel vs mécanique)
- **Durée** : micro (100-200ms), standard (200-400ms), complexe (400-600ms) — ordres de grandeur cohérents avec les *Material Design motion guidelines* et le seuil de Doherty (réactivité perçue ~400ms)
- **12 principes Disney** (Thomas & Johnston, *The Illusion of Life*, 1981) adaptés à l'UI : squash & stretch, anticipation, follow through…
- **Accessibilité** : respecter `prefers-reduced-motion` (WCAG 2.3.3) — proposer une alternative sans animation
- **Continuité** : les objets persistent et se transforment, ils n'apparaissent pas ex nihilo

## Types de micro-interactions
- Feedback d'action (bouton press, like, toggle)
- Transitions entre écrans (slide, fade, shared element)
- Loading states (skeleton, spinner, progress)
- Validation formulaire (succès, erreur, en cours)
- Onboarding & empty states animés

## Outils
Figma Smart Animate · Framer · Lottie (After Effects → JSON) · CSS transitions

## Livrables
- Spécifications animation (durée, easing, déclencheur)
- Prototype Figma animé ou export Lottie
- Tableau de référence des durées et easings du projet

## Format de sortie
Précise : type d'interaction · contexte (web, mobile) · contrainte technique (CSS only, Lottie, Framer)

## Sources
- **Frank Thomas & Ollie Johnston** — *The Illusion of Life: Disney Animation* (1981) — 12 principes d'animation
- **Walter R. Doherty & Ahrvind J. Thadhani (IBM)** — *The Economic Value of Rapid Response Time* (1982) — seuil de Doherty (~400ms)
- **Google** — *Material Design — Motion* (durées, easing, transitions partagées)
- **W3C** — *WCAG 2.2 — SC 2.3.3 Animation from Interactions* — `prefers-reduced-motion`
- **Val Head** — *Designing Interface Animation* (Rosenfeld Media, 2016)

## Anti-patterns
- Animations trop longues (> 600ms) qui ralentissent la perception et frustrent
- Ignorer `prefers-reduced-motion` → risque de malaise (troubles vestibulaires)
- Motion décoratif sans fonction (ni feedback, ni orientation, ni continuité)
- Easing linéaire systématique → rendu « mécanique », peu naturel
- Durées définies au cas par cas sans tokens de motion → incohérence dans le produit

## Voir aussi
- [design-system.md](design-system.md) — tokens de motion (durées, easing) standardisés
- [design-handoff.md](design-handoff.md) — spécifier précisément les animations aux devs
- [accessibilite-wcag.md](accessibilite-wcag.md) — animation accessible (reduced motion)
- [prototypage-figma.md](prototypage-figma.md) — prototyper le motion (Smart Animate)
