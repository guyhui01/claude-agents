# Skill — Cadre économique SAFe (Economic Framework)

> Certification : SAFe LPM · SAFe POPM 6
> Agent : AGENT-PO-SAFE.md

## Objectif
Appliquer le cadre économique SAFe pour prendre des décisions de priorisation basées sur la valeur économique, le coût du délai et le flux de valeur.

## Les 4 mécanismes économiques SAFe

### 1. Comprendre les économies du système (System Economics)
```
REVENUS                COÛTS
────────────────       ──────────────────
+ Features livrées    - Coût de développement
+ Time to market      - Coût de coordination
+ Satisfaction client - Coût de la dette tech
+ Nouvelles lignes    - Coût du délai (CoD)
```

**Principe clé :** la décision optimale maximise les revenus ET minimise les coûts, incluant le coût du délai.

### 2. Cost of Delay (CoD) — Coût du délai

Le CoD est **la valeur perdue chaque semaine** qu'on ne livre pas une feature ou un epic.

```
Profils de CoD typiques :

a) Standard (linéaire)
   Valeur │ ████████████████████
          │ ████████████████████
          └─────────────────────► Temps
   → Coût constant par semaine de retard

b) Fixed Date (deadline critique)
   Valeur │                 ████
          │            ██████  
          └─────────────────────► Temps
   → Valeur nulle après la deadline (ex: lancement concurrent)

c) Intangible (urgence progressive)
   Valeur │ ████████████████████
          │ ██████
          └─────────────────────► Temps
   → Urgence augmente avec le temps (conformité réglementaire)
```

### 3. WSJF — Priorisation économique

```
WSJF = CoD / Durée du travail (Job Size)

CoD = Business Value + Time Criticality + Risk Reduction/Opportunity Enablement

Exemple de scoring (Fibonacci-like : 1, 2, 3, 5, 8, 13, 20) :

Feature      BV  TC  RR/OE  CoD  Size  WSJF
──────────────────────────────────────────────
Feature A     8   5    3     16    5    3,2
Feature B     5   8    8     21    3    7,0  ← Priorité #1
Feature C     3   2    2      7    1    7,0  ← Priorité #2 (ex-aequo)
Feature D    13   1    1     15    8    1,9
```

### 4. Decentralized Decision-Making (délégation des décisions)

**Principe :** décider au niveau le plus bas possible, le plus proche de l'information.

```
DÉCISIONS CENTRALISÉES (Portfolio)
  → Investissements > seuil défini
  → Changements d'architecture majeurs
  → Nouveaux Value Streams

DÉCISIONS DÉCENTRALISÉES (ART / Équipe)
  → Priorisation features dans le PI
  → Choix techniques
  → Scope d'une US
  → Trade-offs sprint
```

**Règle d'or :** si la décision peut être prise localement sans coordination, la déléguer.

## Lean Portfolio Management — Budgets Agiles

### CapEx vs OpEx en contexte Agile
```
Modèle Traditionnel          Modèle Lean-Agile
────────────────────         ──────────────────────
Budget projet (CapEx)    →   Budget Value Stream (OpEx)
Projet à durée fixe      →   Financement continu ART
Justification par projet →   OKR + métriques flux
Réallocation annuelle    →   Ajustement PI par PI
```

### Guardrails (garde-fous) du Portfolio
- Allocation % Value Streams définie (ex: 60% core / 30% growth / 10% explore)
- Seuil d'approbation Lean Business Case (ex: > 500K€ → comité)
- Réserve stratégique (ex: 20% capacité non allouée)

## Application pratique — Réunion de priorisation économique

### Ordre du jour (90 min)
1. Revue du portfolio Kanban (20 min)
2. Calcul WSJF des nouvelles features/epics (30 min)
3. Décisions de priorisation (20 min)
4. Ajustement budgets si nécessaire (20 min)

### Visualisation du flux économique
```
Investment     Value Stream   Time to Market   Business Outcome
(Coût)    →    (Travail)  →   (Délai)      →   (ROI)
[€€€]          [Features]    [Semaines]        [€€€€€]
```
