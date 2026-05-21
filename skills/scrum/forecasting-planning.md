# Skill — Forecasting et planification avancée produit

> Certification : PSPO II · PSPO III
> Agent : AGENT-PO-SCRUM.md

## Objectif
Produire des prévisions de livraison fiables et transparentes en utilisant des données empiriques (vélocité, throughput) plutôt que des estimations déterministes.

## Approches de forecasting

### 1. Forecasting par vélocité (Story Points)
```
Formule : Nb de sprints = Total SP backlog / Vélocité moyenne

Exemple :
- Backlog restant : 120 SP
- Vélocité moyenne S1-S4 : 32 SP (±5)
- Prévision : 3,75 sprints → 4 sprints (fourchette : 3,5 à 5)
```

**Bonnes pratiques :**
- Utiliser la vélocité des 3-5 derniers sprints (pas la moyenne totale)
- Toujours communiquer une fourchette, jamais une date exacte
- Inclure un buffer de 15-20% pour les imprévus

### 2. Forecasting par Throughput (sans estimation)
```
Throughput = Nombre de US livrées / sprint (sans SP)

Exemple : 8, 6, 9, 7, 8 US/sprint → médiane = 8
Backlog : 40 US → 5 sprints (fourchette : 4,5 à 6,5)
```

**Avantage :** élimine le débat sur les estimations, plus stable.

### 3. Monte Carlo Simulation (forecasting probabiliste)
- Outil : actionableagile.com ou Nave
- Input : données de throughput des 30-60 derniers jours
- Output : probabilité (ex. 85% de livrer avant le 15 juin)
- Recommandé pour les prévisions > 3 mois

## Planification par horizon (3 niveaux)

| Horizon | Outil | Précision | Usage |
|---|---|---|---|
| **Sprint** (2 sem.) | Sprint Planning + vélocité | 90% | Engagement équipe |
| **Trimestre** (PI) | Roadmap + story mapping | 70% | Stakeholders internes |
| **Annuel** | Now/Next/Later + OKR | 50% | Comité de direction |

## Now / Next / Later — Roadmap sans dates
```
NOW (Sprint en cours)          NEXT (1-3 mois)          LATER (3-12 mois)
───────────────────────────────────────────────────────────────────────
[Fonctionnalité A - livraison  [Fonctionnalité C - haute  [Thème stratégique X]
 confirmée]                     priorité]                 [Thème stratégique Y]
[Fonctionnalité B - livraison  [Fonctionnalité D - haute  [Exploration Z]
 confirmée]                     priorité]
```

## Communication des prévisions aux stakeholders

### Template de communication
```
PRÉVISION DE LIVRAISON — [Date de mise à jour]

Périmètre : [Feature / Epic concernée]
Scope restant : [X US / Y SP]

Scénario optimiste  : Sprint [N] — [Date] — probabilité 30%
Scénario nominal    : Sprint [N+1] — [Date] — probabilité 60%
Scénario pessimiste : Sprint [N+2] — [Date] — probabilité 90%

Hypothèses : [vélocité stable, pas de changement scope majeur]
Risques identifiés : [liste]
```

## Anti-patterns
- ❌ Promettre une date fixe sans buffer
- ❌ Utiliser la vélocité comme objectif de performance
- ❌ Communiquer une seule date sans fourchette
- ❌ Ignorer la dette technique dans les prévisions
- ❌ Planifier à 100% de la capacité (laisser 20% pour imprévus)
