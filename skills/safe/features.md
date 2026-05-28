# Skill SAFe — Rédaction Features

> Certification : SAFe POPM 6
> Agents : AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Format Feature SAFe
```
Titre : [Verbe] + [Capacité] + [Contexte]

Énoncé (Feature Statement) :
[Action] — [Résultat mesurable] — [Critère de succès]

Benefit Hypothesis :
Si nous livrons [cette feature],
Alors [bénéfice attendu utilisateur / business],
Ce que nous mesurerons par [KPI / métrique].

Acceptance Criteria :
1. [Critère observable et vérifiable]
2. [Critère observable et vérifiable]
3. [Critère observable et vérifiable]
```

## Exemple
```
Titre : Mettre en place le tableau de bord de suivi des commandes B2B

Énoncé :
Permettre aux clients B2B de consulter leurs commandes en temps réel
— réduire les appels support de 30%
— accessible en moins de 2 clics.

Benefit Hypothesis :
Si nous livrons ce tableau de bord,
Alors les clients B2B auront une autonomie complète sur le suivi,
Ce que nous mesurerons par : taux d'appels support (cible : -30%).

Acceptance Criteria :
1. Filtres par statut, date et référence disponibles
2. Statut mis à jour en temps réel (< 5 min)
3. Export CSV disponible sur toutes les vues
```

## Découpage Feature → User Stories
```
Feature : [Titre]
├── US-01 : [...]
├── US-02 : [...]
├── US-03 : [...]
└── US-04 : [...]
```

## T-Shirt Sizing
| Taille | Story Points | Durée |
|---|---|---|
| XS | 1-2 | < 1 sprint |
| S | 3-5 | 1 sprint |
| M | 8-13 | 1-2 sprints |
| L | 20-30 | 2-3 sprints |
| XL | 40+ | À découper obligatoirement |

## DOR Feature SAFe
- [ ] Énoncé au format Action/Résultat/Critère
- [ ] Benefit Hypothesis avec KPI mesurable
- [ ] Minimum 3 Acceptance Criteria
- [ ] Découpée en User Stories (max 8)
- [ ] Estimée en T-Shirt Sizing
- [ ] Dépendances identifiées
- [ ] Priorisée par WSJF
- [ ] Validée par Business Owner
