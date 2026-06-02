# Skill — Design System
> Certifications : Figma Professional Certification · IDF

## Objectif
Construire une bibliothèque de composants réutilisables et cohérents pour accélérer la production et garantir la consistance.

## Structure d'un Design System
> Organisation inspirée de l'**Atomic Design** (Brad Frost, 2016) : atomes → molécules → organismes → templates → pages.

- **Foundations** : couleurs, typographie, spacing, grilles, iconographie, élévation
- **Tokens** : variables Figma (couleur, taille, radius, shadow) — sync avec le code
- **Composants** : boutons, inputs, cartes, modales, navigation, formulaires…
- **Patterns** : combinaisons de composants (page header, empty state, error state)
- **Documentation** : usage, do/don't, accessibilité par composant

## Niveaux de maturité
| Niveau | Description |
|---|---|
| Level 1 | Palette couleurs + typographie |
| Level 2 | Composants de base + tokens |
| Level 3 | Design System complet + documentation |
| Level 4 | DS synchronisé code (Storybook, Zeroheight) |

## Livrables
- Fichier Figma structuré (foundations + components)
- Variables / tokens documentés
- Page documentation par composant

## Format de sortie
Précise : contexte produit · stack technique front-end · niveau de maturité cible

## Sources
- **Brad Frost** — *Atomic Design* (2016) — [atomicdesign.bradfrost.com](https://atomicdesign.bradfrost.com/)
- **Alla Kholmatova** — *Design Systems* (Smashing Magazine, 2017) — composants fonctionnels vs perceptuels
- **Design Tokens Community Group (W3C)** — *Design Tokens Format Module* (2025.10) — interopérabilité des tokens
- **Google** — *Material Design 3* (« Material You », 2021 ; Material 3 Expressive, 2025) — exemple de DS à grande échelle
- **Nathan Curtis (EightShapes)** — gouvernance et versioning de Design Systems

## Anti-patterns
- Construire un DS exhaustif avant tout usage produit (over-engineering) au lieu d'itérer sur les besoins réels
- Tokens non synchronisés design ↔ code → double source de vérité
- Documentation absente ou figée : les composants dérivent et perdent la confiance des équipes
- Pas de gouvernance (qui valide un nouveau composant ? quel versioning ?)
- Composants non accessibles par défaut (contraste, focus, états) → dette reportée sur chaque produit

## Voir aussi
- [design-handoff.md](design-handoff.md) — transmettre tokens et composants aux devs
- [accessibilite-wcag.md](accessibilite-wcag.md) — accessibilité native des composants
- [motion-design-ui.md](motion-design-ui.md) — tokens de motion (durées, easing)
- [wireframing.md](wireframing.md) — wireframes alimentés par les composants du DS
