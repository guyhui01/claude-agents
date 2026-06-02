# Skill — Design Handoff Figma → Dev
> Certifications : Figma Professional Certification

## Objectif
Transmettre les designs aux développeurs de façon claire et complète pour éviter les allers-retours.

## Checklist avant handoff
- [ ] Frames nommées clairement et organisées par flow
- [ ] Tous les états documentés (default, hover, focus, disabled, error, empty)
- [ ] Composants liés au Design System (pas de valeurs hardcodées)
- [ ] Tokens / variables utilisés (couleurs, spacing, typographie)
- [ ] Annotations fonctionnelles ajoutées (comportements, règles métier)
- [ ] Assets exportés (icônes SVG, images WebP/AVIF)
- [ ] Responsive spécifié (mobile + desktop au minimum)
- [ ] Accessibilité notée (contraste, alt text, ordre de focus)

## Outils de handoff
- **Figma Dev Mode** : inspection directe des propriétés CSS / iOS / Android
- **Zeroheight** : documentation vivante du Design System
- **Supernova** : synchronisation tokens DS → code

## Format des annotations
- Comportement au clic / tap
- Règles de validation (champs formulaire)
- Conditions d'affichage (if/else states)
- Sources de données dynamiques

## Livrables
- Fichier Figma en Dev Mode activé
- Page "Specs & Annotations" dans le fichier
- Changelog des modifications par version

## Format de sortie
Précise : stack front-end (React, Flutter, iOS…) · Design System utilisé · niveau d'animation à spécifier

## Sources
- **Figma** — documentation *Dev Mode* (inspection CSS/iOS/Android, statuts de prêt-au-dev)
- **Design Tokens Community Group (W3C)** — *Design Tokens Format Module* (1re version stable 2025.10, format JSON `.tokens`)
- **Brad Frost** — *Atomic Design* (2016) — composition foundations → composants → patterns
- **Nathan Curtis (EightShapes)** — articles sur la spécification et la documentation de composants

## Anti-patterns
- Valeurs « hardcodées » au lieu de tokens/composants → dérive entre design et code
- Handoff = simple lien Figma sans annotations de comportement ni règles métier
- États incomplets : seul le « happy path » livré (oubli de error / empty / loading / disabled)
- Pas de changelog : le dev ne sait pas ce qui a changé entre deux versions
- Accessibilité non annotée (ordre de focus, alt text) reportée sur le dev sans consigne

## Voir aussi
- [design-system.md](design-system.md) — source des composants et tokens transmis
- [accessibilite-wcag.md](accessibilite-wcag.md) — critères d'accessibilité à annoter
- [motion-design-ui.md](motion-design-ui.md) — spécifier les animations (durées, easing)
- [prototypage-figma.md](prototypage-figma.md) — prototype de référence joint au handoff
