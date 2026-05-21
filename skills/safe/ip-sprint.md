# Skill — Innovation and Planning (IP) Sprint SAFe

> Certification : SAFe POPM 6 · SAFe Agilist
> Agent : AGENT-PO-SAFE.md

## Objectif
Piloter l'IP Sprint (dernière itération du PI) pour garantir la stabilisation, l'innovation et la préparation du PI suivant.

## Rôle du PI dans le PI

L'IP Sprint est la **5e itération** du PI (après 4 iterations de delivery).

```
PI = Iteration 1 + Iteration 2 + Iteration 3 + Iteration 4 + IP Sprint
                                                                ↑
                                               [Stabilisation + Innovation + Planning]
```

## Les 3 objectifs de l'IP Sprint

### 1. Stabilisation et qualité
- Résolution des bugs critiques non résolus en Iteration 4
- Tests de régression end-to-end
- Documentation technique mise à jour
- Performance testing (charge, sécurité)
- Validation finale des PI Objectives (atteints / partiellement / non atteints)

### 2. Innovation (Hackathon / Spike)
- Temps dédié à l'exploration libre (20-30% de l'IP Sprint)
- Formats : Hackathon (2-3 jours), Innovation Day, Spikes techniques
- Règle : les équipes choisissent eux-mêmes leurs sujets
- Output : prototypes, POC, améliorations tooling, veille tech

### 3. Préparation du PI suivant
- Inspect & Adapt (I&A) workshop — voir skill inspect-adapt.md
- PI Planning preparation :
  - Raffinage du Program Backlog (top 10 features prêtes)
  - Mise à jour de la Roadmap
  - Identification des dépendances cross-équipes
  - Capacité des équipes pour le prochain PI estimée

## Planning de l'IP Sprint (exemple sur 2 semaines)

```
JOUR 1-2 : Stabilisation
  → Correction bugs bloquants
  → Tests de régression
  → Mise à jour documentation

JOUR 3-4 : Hackathon / Innovation
  → Préparation sujets (J3 matin)
  → Développement libre (J3 après-midi + J4)
  → Démo interne (J4 fin de journée)

JOUR 5-7 : Inspect & Adapt
  → Mesure PI Objectives (J5)
  → Problem-Solving Workshop (J5-J6)
  → Actions d'amélioration documentées (J6)

JOUR 8-9 : Préparation PI Planning
  → Raffinement Program Backlog (J8)
  → Capacité équipes calculée (J8)
  → Pré-PI Planning (PM + Architects) (J9)

JOUR 10 : Clôture IP Sprint
  → System Demo finale (si pas faite en Iteration 4)
  → Rétrospective IP Sprint
  → Derniers ajustements backlog
```

## PI Objectives — Bilan IP Sprint

### Template de synthèse PI
```
PI [Numéro] — Bilan — [Date]

OBJECTIFS BUSINESS
  [OBJ-1] [Description]     → Atteint ✅ / Partiel ⚠️ / Non atteint ❌
  [OBJ-2] [Description]     → [statut]
  [OBJ-3] [Description]     → [statut]

VÉLOCITÉ RÉALISÉE
  Iteration 1 : [N] SP
  Iteration 2 : [N] SP
  Iteration 3 : [N] SP
  Iteration 4 : [N] SP
  IP Sprint   : [N] SP (stabilisation)
  TOTAL PI    : [N] SP / [N] planifiés ([%])

FEATURES LIVRÉES
  [FEAT-001] [Titre]         ✅ Livré
  [FEAT-002] [Titre]         ⚠️ Partiel (80%)
  [FEAT-003] [Titre]         ❌ Reporté → PI+1

PREDICTABILITY MEASURE
  Planned PI Objectives : [N]
  Achieved              : [N]
  Predictability        : [N/N × 100] %
  (Cible SAFe : > 80%)
```

## Métriques IP Sprint

| Métrique | Cible | Mesure |
|---|---|---|
| PI Predictability | > 80% | Objectifs atteints / planifiés |
| Bug critical résolus | 100% | Nb bugs P1 → 0 |
| Hackathon participation | > 80% équipe | % membres participants |
| Program Backlog prêt | Top 10 features DoR | Nb features prêtes |
