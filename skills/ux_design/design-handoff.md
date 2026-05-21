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
