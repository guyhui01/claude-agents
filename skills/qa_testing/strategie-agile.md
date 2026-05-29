# Skill QA Agile — Stratégie de Tests Agile (Shift-Left)

> Certification : CTFL-AT · CTAL-ATT
> Agent : AGENT-QA-AGILE.md
> Méthodologie : Agile

## Principe Shift-Left ISTQB
Intégrer la qualité le plus tôt possible dans le cycle, dès la rédaction des User Stories.

## Quadrant de tests Agile (Brian Marick)

```
               CRITIQUE LE PRODUIT
        ┌──────────────────────────────┐
        │  Q4 : Tests de performance   │ ← Outils
        │  Tests de sécurité           │
        │  Tests de charge             │
TECH    ├──────────────────────────────┤  MÉTIER
        │  Q3 : Tests exploratoires    │
        │  Tests d'acceptance UAT      │
        │  Tests scénarios utilisateur │
        ├──────────────────────────────┤
        │  Q1 : Tests unitaires (TDD)  │ ← Automatisés
        │  Tests de composants         │
        │  Q2 : Tests fonctionnels     │ ← Manuels + Auto
        │  Tests d'acceptance (BDD)    │
        └──────────────────────────────┘
               SOUTIENT L'ÉQUIPE
```

## Stratégie par phase Scrum

| Phase | Activité QA | Qui |
|---|---|---|
| **Refinement** | Revue US, critères d'acceptance, risques | PO + QA |
| **Sprint Planning** | Estimation tests, DoD qualité | QA + Équipe |
| **Sprint (J1-J3)** | Rédaction cas de test, scénarios BDD | QA |
| **Sprint (J4-J8)** | Tests en parallèle du dev, feedback rapide | QA + DEV |
| **Sprint (J9-J10)** | Validation finale, DOD check | QA + PO |
| **Review** | Démo sur environnement stable | QA valide le build |

## Checklist stratégie Agile
- [ ] QA impliqué dès le Refinement
- [ ] Critères d'acceptance = base des cas de test
- [ ] Tests automatisés pour la régression
- [ ] Tests exploratoires pour les nouveautés
- [ ] DoD inclut les critères qualité
- [ ] Feedback DEV ↔ QA < 24h dans le sprint
