# Skill — Accessibilité WCAG 2.2 / RGAA
> Certifications : IAAP CPACC · IAAP WAS

## Objectif
Garantir que les interfaces sont utilisables par toutes les personnes, y compris en situation de handicap.

## Référentiels
- **WCAG 2.2** (W3C, Recommandation du 5 octobre 2023 ; reprise en ISO/IEC 40500:2025) : 4 principes — Perceptible, Utilisable, Compréhensible, Robuste. *WCAG 3.0 reste au stade Working Draft, non normatif.*
- **RGAA 4.1.2** (2021) : déclinaison française obligatoire pour les services publics
- **European Accessibility Act** (directive UE 2019/882) : exigences applicables depuis le 28 juin 2025 à de nombreux produits/services privés (e-commerce, banque, transport)
- Niveaux : A (minimum) · AA (standard légal cible) · AAA (optimal)

## Critères clés à vérifier
- Contraste couleurs : ratio ≥ 4.5:1 (texte normal), ≥ 3:1 (grand texte)
- Navigation clavier complète (Tab, Shift+Tab, Entrée, Échap)
- Alternatives textuelles (images, icônes, graphiques)
- Structure sémantique HTML (headings, landmarks, listes)
- Formulaires accessibles (labels, erreurs, focus visible)
- Sous-titres vidéos et transcriptions audio

## Livrables
- Rapport d'audit WCAG par critère (conforme / non conforme / NA)
- Niveau d'accessibilité global estimé
- Plan de correction priorisé

## Outils
Axe DevTools · WAVE · Contrast Checker · NVDA · VoiceOver

## Format de sortie
Précise : type d'interface · niveau cible (AA/AAA) · contexte légal (secteur public ?)

## Sources
- **W3C / WAI** — *Web Content Accessibility Guidelines (WCAG) 2.2* (Recommandation, 5 octobre 2023) — [w3.org/TR/WCAG22](https://www.w3.org/TR/WCAG22/)
- **DINUM** — *RGAA 4.1.2* (Référentiel général d'amélioration de l'accessibilité, 2021)
- **Union européenne** — *Directive (UE) 2019/882* (European Accessibility Act, applicable depuis le 28/06/2025)
- **ISO/IEC 40500:2025** — adoption de WCAG 2.2 comme norme internationale
- **IAAP** — certifications *CPACC* (Core Competencies) et *WAS* (Web Accessibility Specialist)

## Anti-patterns
- Viser AAA partout : AAA n'est pas exigible globalement (W3C), AA est la cible légale
- Se reposer uniquement sur un auditeur automatique (Axe/WAVE couvrent ~30-40 % des critères) sans test manuel ni lecteur d'écran
- Contraste validé sur le texte mais oublié sur les composants UI et icônes (SC 1.4.11)
- « Accessibilité » traitée en fin de projet plutôt que dès le design (coût de correction × élevé)
- Confondre conformité technique et utilisabilité réelle par les personnes handicapées

## Voir aussi
- [design-system.md](design-system.md) — composants accessibles par défaut (états focus, contrastes tokens)
- [design-handoff.md](design-handoff.md) — annotations d'accessibilité transmises aux devs
- [wireframing.md](wireframing.md) — structure sémantique et ordre de lecture dès le wireframe
- [`../redacteur_ia/ux-writing.md`](../redacteur_ia/ux-writing.md) — libellés, messages d'erreur et microcopy accessibles
