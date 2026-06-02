# Skill — Wireframing (lo-fi → hi-fi)
> Certifications : Google UX Design Certificate · IDF

## Objectif
Formaliser la structure et les interactions d'une interface avant le design visuel.

## Niveaux de fidélité
| Niveau | Usage | Outil |
|---|---|---|
| Lo-fi | Idéation rapide, ateliers | Papier, FigJam, Balsamiq |
| Mid-fi | Validation structure & flux | Figma (sans styles) |
| Hi-fi | Livrable final stakeholders | Figma (avec Design System) |

## Éléments à inclure
- Grille et layout (colonnes, marges, gouttières)
- Hiérarchie visuelle (titres, corps, CTA)
- États des composants (default, hover, focus, disabled, error)
- Annotations fonctionnelles (comportements, règles métier)
- Flux de navigation entre écrans

## Livrables
- Frames Figma annotées par écran
- Flow diagram (connexions entre écrans)
- Liste des composants identifiés

## Format de sortie
Précise : type d'écran (web, mobile, tablette) · contexte fonctionnel · niveau de fidélité souhaité

## Sources
- **Bill Buxton** — *Sketching User Experiences* (Morgan Kaufmann, 2007) — rôle du sketch et de la basse fidélité
- **Carolyn Snyder** — *Paper Prototyping* (2003) — wireframes papier et itération rapide
- **Brad Frost** — *Atomic Design* (2016) — composition des écrans à partir de composants
- **Nielsen Norman Group** — articles sur le *fidelity spectrum* (lo-fi vs hi-fi)

## Anti-patterns
- Passer en hi-fi avant d'avoir validé la structure (perte de temps, attachement prématuré au visuel)
- Wireframe « décoratif » qui anticipe le design visuel au lieu de la structure
- Oublier les états (vide, erreur, chargement) et ne traiter que le happy path
- Absence d'annotations → ambiguïté de comportement pour les devs
- Réinventer des composants existants au lieu de réutiliser le Design System

## Voir aussi
- [architecture-information.md](architecture-information.md) — structure logique en amont du wireframe
- [prototypage-figma.md](prototypage-figma.md) — passer du wireframe au prototype interactif
- [design-system.md](design-system.md) — composants réutilisés en mid/hi-fi
- [accessibilite-wcag.md](accessibilite-wcag.md) — ordre de lecture et hiérarchie dès le wireframe
