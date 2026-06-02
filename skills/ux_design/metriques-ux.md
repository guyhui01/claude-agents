# Skill — Métriques UX (SUS, HEART, NPS, CUQ)
> Certifications : NN/g UX-C · UXQB CPUX-UT

## Objectif
Mesurer et suivre la qualité de l'expérience utilisateur de façon quantitative.

## Frameworks de métriques

### SUS — System Usability Scale (Brooke, 1986/1996)
- 10 questions, échelle de Likert 1-5
- Score /100 : ≈ 68 = moyenne de référence · > 80 = très bon (seuils d'après Sauro & Bangor)
- Utilisé en post-test utilisateur

### HEART (Google — Rodden et al., 2010)
| Dimension | Exemple de métrique |
|---|---|
| Happiness | SUS, NPS, satisfaction rating |
| Engagement | Sessions/jour, features utilisées |
| Adoption | Nouveaux utilisateurs, activation |
| Retention | Taux de retour à J7, J30 |
| Task Success | Taux de complétion, temps sur tâche |

### NPS — Net Promoter Score (Reichheld, 2003)
- "Recommanderiez-vous ce produit ?" (0-10)
- NPS = % Promoteurs (9-10) − % Détracteurs (0-6)
- > 50 souvent qualifié d'« excellent » — *ordre de grandeur, à relativiser fortement selon le secteur et la géographie*

### CUQ — Chatbot Usability Questionnaire (Holmes et al., 2019)
- Spécifique aux interfaces conversationnelles IA
- 16 items couvrant naturalité, efficacité, satisfaction

## Livrables
- Tableau de bord métriques (Notion / Confluence)
- Questionnaire SUS ou HEART configuré
- Rapport tendance (baseline → mesure → évolution)

## Format de sortie
Précise : type de produit · phase du projet · métriques déjà collectées

## Sources
- **John Brooke** — *SUS: A "quick and dirty" usability scale* (créé 1986, publié 1996)
- **Jeff Sauro & James R. Lewis** — *Quantifying the User Experience* (2e éd. 2016) — seuils et normalisation SUS
- **Kerry Rodden, Hilary Hutchinson & Xin Fu (Google)** — *Measuring the User Experience on a Large Scale: HEART* (CHI 2010)
- **Fred Reichheld** — *The One Number You Need to Grow* (HBR, 2003) — Net Promoter Score
- **Samuel Holmes et al.** — *Usability testing of a healthcare chatbot: CUQ* (British HCI, 2019)

## Anti-patterns
- Suivre une métrique sans baseline ni objectif → chiffre non interprétable
- Confondre satisfaction déclarée (NPS/SUS) et comportement réel (task success, rétention)
- Comparer un NPS entre secteurs/pays sans tenir compte des biais culturels
- Mesurer le SUS sur < 5 participants et en tirer une conclusion ferme
- « Vanity metrics » : suivre le nombre de sessions sans le relier à la valeur utilisateur

## Voir aussi
- [tests-utilisateurs.md](tests-utilisateurs.md) — collecte du SUS en post-test
- [ab-testing.md](ab-testing.md) — métriques comparées entre variantes
- [audit-ux-heuristiques.md](audit-ux-heuristiques.md) — diagnostic qualitatif complémentaire
- [`../growth_ia/product-analytics.md`](../growth_ia/product-analytics.md) — métriques produit (engagement, rétention) côté growth
