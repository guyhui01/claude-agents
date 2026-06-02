# Skill — A/B Testing & Tests Multivariés
> Certifications : IDF · Google UX Design Certificate

## Objectif
Comparer deux versions d'une interface pour déterminer laquelle performe le mieux sur une métrique cible.

## Types de tests
- **A/B test** : 2 versions, 1 variable modifiée
- **A/B/n test** : n versions simultanées
- **Test multivarié** : plusieurs variables combinées (nécessite fort trafic)
- **Split URL** : 2 pages distinctes comparées

## Étapes
1. Définir l'hypothèse (si je change X, alors Y augmentera de Z%)
2. Choisir la métrique principale (CTR, conversion, temps sur tâche)
3. Calculer la taille d'échantillon (significance 95%, power 80%)
4. Lancer le test (durée min : 2 semaines / 1 cycle business)
5. Analyser les résultats (p-value, intervalle de confiance)
6. Décider : déployer A, déployer B, ou relancer

## Outils
VWO · Optimizely · AB Tasty · Statsig · GrowthBook (open-source) — *Google Optimize fermé le 30/09/2023*

## Livrables
- Brief de test (hypothèse, variantes, métriques, durée)
- Rapport de résultats (statistiques + recommandation)

## Format de sortie
Précise : élément à tester · métrique cible · trafic mensuel disponible · outil utilisé

## Sources
- **Ron Kohavi, Diane Tang & Ya Xu** — *Trustworthy Online Controlled Experiments* (Cambridge University Press, 2020) — référence de l'expérimentation en ligne
- **Jacob Cohen** — *Statistical Power Analysis for the Behavioral Sciences* (2e éd., 1988) — origine de la puissance statistique 80 % (seuil conventionnel)
- **Ronald A. Fisher** — *The Design of Experiments* (1935) — seuil de signification p < 0,05
- Documentation produit : Optimizely Stats Engine, VWO SmartStats (inférence séquentielle vs test fixe)

## Anti-patterns
- **Peeking** : arrêter le test dès qu'un résultat « gagne » avant la taille d'échantillon calculée → faux positifs
- Lancer un test multivarié sans le trafic suffisant (combinatoire = dilution de la puissance)
- Conclure sur une métrique proxy (CTR) sans vérifier la métrique business (conversion, rétention)
- Ignorer la saisonnalité : test < 1 cycle business complet (jours ouvrés vs week-end)
- **HARKing** : formuler l'hypothèse *après* avoir vu les données

## Voir aussi
- [metriques-ux.md](metriques-ux.md) — définir la métrique cible et son baseline
- [tests-utilisateurs.md](tests-utilisateurs.md) — complément qualitatif au quantitatif A/B
- [audit-ux-heuristiques.md](audit-ux-heuristiques.md) — générer les hypothèses à tester
- [`../growth_ia/experimentation-ab-testing.md`](../growth_ia/experimentation-ab-testing.md) — expérimentation côté acquisition/activation
