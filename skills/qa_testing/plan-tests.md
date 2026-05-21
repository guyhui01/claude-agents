# Skill QA Cycle V — Plan de Tests (Master Test Plan IEEE 829)

## Structure IEEE 829

```
1. Identifiant du plan
2. Introduction et objectifs
3. Éléments testés (test items)
4. Fonctionnalités à tester
5. Fonctionnalités hors périmètre
6. Approche / stratégie
7. Critères de pass/fail
8. Critères de suspension et reprise
9. Livrables de test
10. Tâches de test
11. Besoins en environnement
12. Responsabilités
13. Planning et estimation
14. Risques et contingences
15. Approbation
```

## Template Master Test Plan

```
MASTER TEST PLAN — [Projet] — v[X.X] — [Date]
Auteur : [Guy HUIBONHOA]  |  Statut : ☐ Brouillon ☐ Validé

1. INTRODUCTION
   Objectif : [...]
   Référence SFG/SFD : [doc v X.X]

2. PÉRIMÈTRE
   In scope : [liste des fonctionnalités]
   Out of scope : [liste]

3. APPROCHE
   Niveaux : Unitaire → Intégration → Système → UAT
   Priorité : [MoSCoW appliqué aux cas de test]

4. CRITÈRES DE PASS/FAIL
   Pass : Résultat obtenu = Résultat attendu
   Fail : Tout écart documenté comme anomalie

5. SUSPENSION
   Suspendre si : > [X] anomalies bloquantes ouvertes
   Reprendre si : anomalies bloquantes corrigées et re-testées

6. LIVRABLES
   - Cas de test : [date]
   - Rapport exécution J1 : [date]
   - Rapport final : [date]

7. PLANNING
   | Phase | Début | Fin | Charge (j/h) | Responsable |
   |---|---|---|---|---|
   | Rédaction cas de test | [date] | [date] | [X j] | [nom] |
   | Exécution recette | [date] | [date] | [X j] | [nom] |
   | Rapport final | [date] | [date] | [X j] | [nom] |

8. RISQUES
   | Risque | Impact | Mitigation |
   |---|---|---|
   | Env. instable | Blocage tests | Prévoir env. de secours |
   | Données manquantes | Tests incomplets | Préparer jeux de données |

9. APPROBATION
   Chef de projet : [nom] — Date : [...]
   MOA : [nom] — Date : [...]
```
