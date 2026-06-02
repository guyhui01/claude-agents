# Skill — Tests Utilisateurs
> Certifications : UXQB CPUX-UT · NN/g UX-C

## Objectif
Évaluer l'utilisabilité d'une interface en observant de vrais utilisateurs accomplir des tâches.

## Types de tests
| Type | Modéré | Non modéré | Exploratoire |
|---|---|---|---|
| Présence | Facilitateur présent | Outil automatisé | Libre |
| Outils | Teams, Lookback | Maze, UserTesting | Session libre |
| Participants | 5-8 | 20-30 | 3-5 |
| Délai | 1 semaine | 48h | 2h |

> **Règle des « 5 utilisateurs »** (Nielsen & Landauer 1993 ; Nielsen 2000) : 5 participants révèlent l'essentiel des problèmes en test **qualitatif itératif**. À nuancer : la couverture réelle varie fortement selon les cas, et les études CUE de Rolf Molich montrent une faible concordance entre équipes. Augmenter l'échantillon pour une audience hétérogène ou un test quantitatif/sommatif.

## Structure d'une session modérée
1. Accueil & consentement (5 min)
2. Questions de contexte (5 min)
3. Scénarios de tâches — think-aloud (30 min)
4. Questionnaire post-test : SUS (5 min)
5. Debriefing ouvert (5 min)

## Rédaction des scénarios de tâche
- Réalistes et contextualisés (pas d'indices sur l'UI)
- Mesurables : succès / échec / abandon
- Exemple : "Vous venez de recevoir une commande. Trouvez et annulez-la."

## Livrables
- Guide du facilitateur + scénarios de tâche
- Grille d'observation (tâche × participant)
- Rapport de synthèse : taux de succès, SUS, verbatims clés, recommandations priorisées

## Format de sortie
Précise : prototype ou produit live · nombre de participants · délai · méthode souhaitée

## Sources
- **Jakob Nielsen & Thomas K. Landauer** — *A Mathematical Model of the Finding of Usability Problems* (CHI 1993) ; Nielsen, *Why You Only Need to Test with 5 Users* (NN/g, 2000)
- **Rolf Molich** — études *CUE (Comparative Usability Evaluation)* — variabilité inter-équipes
- **K. Anders Ericsson & Herbert Simon** — *Protocol Analysis* (1984) — fondement du think-aloud
- **John Brooke** — *System Usability Scale* (1986/1996) — questionnaire post-test
- **Steve Krug** — *Rocket Surgery Made Easy* (2009) — tests d'utilisabilité allégés

## Anti-patterns
- Poser des questions orientées ou aider le participant pendant la tâche (biais de l'animateur)
- Présenter la règle des 5 users comme une vérité statistique universelle
- Tester sans scénario réaliste (tâches qui soufflent la solution)
- Confondre opinions déclarées et comportement observé
- Aucun consentement / RGPD pour l'enregistrement des sessions

## Voir aussi
- [metriques-ux.md](metriques-ux.md) — SUS et taux de succès collectés en test
- [user-research.md](user-research.md) — recherche amont (générative) vs test (évaluative)
- [prototypage-figma.md](prototypage-figma.md) — support testé
- [audit-ux-heuristiques.md](audit-ux-heuristiques.md) — évaluation experte complémentaire
