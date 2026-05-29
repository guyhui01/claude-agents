# Skill QA Agile — Pyramide d'Automatisation

> Certification : CT-TAE · CTAL-ATT
> Agent : AGENT-QA-AGILE.md
> Méthodologie : Agile

## La pyramide de tests (Mike Cohn)

```
           ╱─────────────╲
          ╱   E2E / UI    ╲   ← Peu, lents, coûteux
         ╱─────────────────╲    (Selenium, Playwright, Cypress)
        ╱   Intégration     ╲  ← Moyennement nombreux
       ╱─────────────────────╲   (Postman, RestAssured, API tests)
      ╱   Unitaires (TDD)     ╲ ← Nombreux, rapides, peu coûteux
     ╱─────────────────────────╲  (JUnit, Jest, pytest...)
```

## Règles de la pyramide
- **Unitaires** : 70% des tests automatisés — rapides, isolés, maintenables
- **Intégration** : 20% — vérifient les contrats entre composants
- **E2E / UI** : 10% — parcours critiques uniquement (pas tout automatiser)

## Stratégie d'automatisation par type

| Type | Quoi automatiser | Outil suggéré |
|---|---|---|
| Unitaires | Logique métier, calculs, règles | JUnit / Jest / pytest |
| API / Intégration | Contrats REST, flux de données | Postman / RestAssured |
| UI E2E | Parcours critiques (login, checkout) | Playwright / Cypress |
| Régression | Tous les cas stables et répétitifs | CI/CD pipeline |
| Performance | Scénarios de charge récurrents | k6 / Gatling |

## Critères de sélection pour l'automatisation
```
Automatiser si :
☐ Le test est exécuté > 3 fois par sprint
☐ Le test est stable (pas de changement fréquent)
☐ Le test est déterministe (résultat prévisible)
☐ Le ROI est positif (gain temps > coût création)

Ne pas automatiser si :
☐ La fonctionnalité change souvent
☐ Le test est exploratoire par nature
☐ Le test concerne l'ergonomie / l'UX
☐ C'est un test one-shot
```

## Pipeline CI/CD et tests

```
Commit DEV
  → Tests unitaires (< 5 min) ──── ❌ Fail = blocage immédiat
  → Tests intégration (< 15 min) ── ❌ Fail = blocage build
  → Tests E2E smoke (< 10 min) ──── ❌ Fail = blocage déploiement recette
  → Tests régression complets (nuit) ← résultat disponible le lendemain
```
