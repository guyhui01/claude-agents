# Skill — Responsive Design & Mobile-first
> Certifications : Google UX Design Certificate · IDF

## Objectif
Concevoir des interfaces qui s'adaptent à tous les écrans en partant du mobile comme référence.

## Breakpoints — conventions courantes
> ⚠️ Il n'existe **aucun standard normatif** de breakpoints. Les valeurs ci-dessous sont des conventions répandues (proches de Material / Tailwind / Bootstrap) ; les caler idéalement sur les données d'audience réelles du produit plutôt que sur des devices nommés.

| Nom | Largeur | Usage |
|---|---|---|
| Mobile S | 320px | Petits smartphones |
| Mobile L | 390px | Smartphone standard |
| Tablet | 768px | Tablette portrait |
| Desktop | 1280px | Laptop |
| Wide | 1440px+ | Grands écrans |

## Principes Mobile-first
- Concevoir pour 320-390px en premier
- Progressive enhancement vers desktop
- Touch targets : min 44x44px (Apple HIG) / 48x48dp (Material)
- Gestes tactiles : tap, swipe, pinch, long press
- Contenu prioritaire visible sans scroll (above the fold)

## Adaptations clés mobile → desktop
- Navigation : bottom bar → sidebar ou top nav
- Grille : 4 colonnes → 8 → 12
- Typographie : augmenter les tailles sur desktop
- Interactions : hover states sur desktop uniquement

## Livrables
- Frames Figma par breakpoint (mobile + tablet + desktop)
- Grille documentée par breakpoint
- Comportements responsives annotés

## Format de sortie
Précise : breakpoints cibles · contexte (app native ou web) · Design System existant ?

## Sources
- **Luke Wroblewski** — *Mobile First* (A Book Apart, 2011) — origine de l'approche mobile-first
- **Ethan Marcotte** — *Responsive Web Design* (A List Apart, 2010 ; A Book Apart, 2011) — fondateur du responsive
- **Apple** — *Human Interface Guidelines* — cible tactile 44×44 pt
- **Google** — *Material Design — Accessibility* — cible tactile 48×48 dp
- **W3C** — *WCAG 2.2 — SC 2.5.8 Target Size (Minimum)* — taille de cible 24×24 px (AA)

## Anti-patterns
- Breakpoints calés sur des modèles de téléphone précis plutôt que sur le contenu/l'audience
- « Desktop-first » dégradé vers mobile → mobile bâclé (l'inverse de mobile-first)
- Cibles tactiles trop petites ou trop rapprochées (sous le seuil 44px/48dp)
- Fonctions critiques derrière un `hover` (inaccessible au tactile)
- Cacher du contenu sur mobile au lieu de le hiérarchiser (parité de contenu)

## Voir aussi
- [wireframing.md](wireframing.md) — structurer chaque breakpoint
- [design-system.md](design-system.md) — grilles et tokens responsives
- [accessibilite-wcag.md](accessibilite-wcag.md) — tailles de cible et zoom (SC 1.4.10 / 2.5.8)
- [prototypage-figma.md](prototypage-figma.md) — tester le responsive sur device réel
