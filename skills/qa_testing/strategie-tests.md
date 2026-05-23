# Skill QA Cycle V — Stratégie de Tests

> **Méthodologie :** Cycle en V

## Définition ISTQB
La stratégie de tests définit l'approche générale : niveaux de tests, types de tests, critères d'entrée/sortie, outils et responsabilités.

## Niveaux de tests (Cycle en V)

```
Besoins métier     ←→   Tests d'acceptance (UAT)
Spécifications     ←→   Tests système
Architecture       ←→   Tests d'intégration
Conception détail  ←→   Tests unitaires
             CODE
```

## Types de tests à couvrir

| Type | Objectif |
|---|---|
| Fonctionnel | Vérifier les comportements attendus |
| Non-fonctionnel | Performance, sécurité, compatibilité |
| Structurel (boîte blanche) | Couverture du code |
| Régression | Non-dégradation de l'existant |
| Confirmation (re-test) | Vérification correction anomalie |

## Template Stratégie de Tests

```
STRATÉGIE DE TESTS — [Projet] — v[X.X] — [Date]
Auteur : [Guy HUIBONHOA]  |  Validé par : [nom]

1. CONTEXTE
   Projet : [description]
   Périmètre testé : [in scope]
   Hors périmètre : [out of scope]

2. OBJECTIFS QUALITÉ
   - [objectif 1 — ex: 0 anomalie bloquante en UAT]
   - [objectif 2 — ex: couverture fonctionnelle > 90%]

3. NIVEAUX DE TESTS
   ☐ Tests unitaires — Responsable : [DEV]
   ☐ Tests intégration — Responsable : [QA / DEV]
   ☐ Tests système — Responsable : [QA]
   ☐ Tests UAT — Responsable : [MOA / Métier]

4. TYPES DE TESTS
   ☐ Fonctionnels   ☐ Régression   ☐ Performance
   ☐ Sécurité       ☐ Compatibilité ☐ Accessibilité

5. CRITÈRES D'ENTRÉE (début des tests)
   - Spécifications fonctionnelles validées
   - Environnement de test stable
   - Données de test préparées
   - Build livré et déployé

6. CRITÈRES DE SORTIE (fin des tests)
   - 0 anomalie bloquante ouverte
   - < [X] anomalies majeures
   - Couverture des cas de test > [X]%
   - Rapport de tests validé par le chef de projet

7. OUTILS
   - Gestion des tests : [HP ALM / Jira+Xray / TestRail]
   - Automatisation : [outil]
   - Gestion des anomalies : [Jira / Mantis]

8. LIVRABLES QA
   - Plan de tests
   - Cas de test
   - Rapport d'exécution
   - Rapport de recette finale
```
