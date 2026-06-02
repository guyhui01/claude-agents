# Skill — Audit UX & Heuristiques Nielsen
> Certifications : NN/g UX-C

## Objectif
Évaluer une interface existante sans utilisateurs, à partir des 10 heuristiques de Nielsen Norman Group.

## Les 10 heuristiques de Nielsen
1. Visibilité du statut du système
2. Correspondance entre le système et le monde réel
3. Contrôle utilisateur et liberté
4. Cohérence et standards
5. Prévention des erreurs
6. Reconnaissance plutôt que rappel
7. Flexibilité et efficacité d'utilisation
8. Esthétique et design minimaliste
9. Aide à la reconnaissance, au diagnostic et à la récupération d'erreur
10. Aide et documentation

## Méthode d'audit
1. Définir le périmètre (parcours ou écrans ciblés)
2. Évaluer chaque écran par rapport aux 10 heuristiques
3. Noter la sévérité de chaque problème (0 à 4)
4. Consolider et prioriser les recommandations

## Échelle de sévérité
| Score | Niveau | Action |
|---|---|---|
| 0 | Pas un problème | — |
| 1 | Cosmétique | Si temps disponible |
| 2 | Mineur | Faible priorité |
| 3 | Majeur | Haute priorité |
| 4 | Catastrophique | À corriger immédiatement |

## Livrables
- Grille d'audit par écran × heuristique
- Rapport priorisé avec captures annotées
- Backlog de recommandations (format Jira-ready)

## Format de sortie
Précise : URL ou fichier Figma à auditer · périmètre (tout le produit ou un parcours) · contexte métier

## Sources
- **Jakob Nielsen & Rolf Molich** — *Heuristic Evaluation of User Interfaces* (CHI 1990) — origine de la méthode
- **Jakob Nielsen** — *10 Usability Heuristics for User Interface Design* (NN/g, 1994 ; article révisé en 2020, principes inchangés)
- **Jakob Nielsen** — *Severity Ratings for Usability Problems* (NN/g, 1995) — échelle de sévérité 0-4
- **Rolf Molich** — études *CUE (Comparative Usability Evaluation)* — sur la variabilité inter-évaluateurs

## Anti-patterns
- Audit par un seul évaluateur : Nielsen recommande 3 à 5 experts (un seul ne détecte que ~35 % des problèmes)
- Confondre l'évaluation heuristique (par experts) avec un test utilisateur (avec de vrais usagers)
- Lister des problèmes sans sévérité ni recommandation actionnable
- Biais d'expertise : juger « beau » au lieu d'évaluer contre les 10 heuristiques
- Auditer hors contexte métier/parcours réel → faux positifs

## Voir aussi
- [tests-utilisateurs.md](tests-utilisateurs.md) — compléter l'audit expert par l'observation d'usagers
- [metriques-ux.md](metriques-ux.md) — quantifier les problèmes détectés (SUS, taux de succès)
- [ab-testing.md](ab-testing.md) — transformer les recommandations en hypothèses testables
- [`../redacteur_ia/ux-writing.md`](../redacteur_ia/ux-writing.md) — corriger les problèmes de microcopy relevés
