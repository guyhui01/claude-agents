# Skill SAFe — Priorisation WSJF

> Certification : SAFe POPM 6 · SAFe LPM
> Agents : AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Formule

```
WSJF = CoD (Cost of Delay) / Job Size
CoD  = Business Value + Time Criticality + RR/OE
```

## Échelle Fibonacci modifiée

```
1 — 2 — 3 — 5 — 8 — 13 — 20
```

## Composantes

| Composante | Question |
|---|---|
| **BV** Business Value | Quelle valeur pour le client / le business ? |
| **TC** Time Criticality | Y a-t-il une deadline ou contrainte marché ? La valeur décroît-elle dans le temps ? |
| **RR/OE** Risk Reduction / Opportunity Enablement | Réduit un risque ou ouvre une opportunité future ? |
| **Size** Job Size | Taille / durée relative pour livrer ? |

## Méthode de cotation officielle (à respecter strictement)

1. **Estimation relative** — on ne note jamais dans l'absolu : on compare les items entre eux.
2. **Plus petit = 1 par colonne** — dans chaque colonne (BV, TC, RR/OE, Size), l'item le plus petit reçoit **1**, les autres sont cotés relativement à lui sur l'échelle Fibonacci.
3. **Colonnes indépendantes** — chaque colonne est estimée séparément. Le rang d'un item en BV n'influence pas son rang en TC, RR/OE ou Size.
4. **Forcer la différenciation** — étaler les valeurs sur l'échelle, éviter les ex-aequo (sinon la priorisation ne tranche pas).
5. **Recalculer** à chaque PI Planning / évolution des estimations.

> ⚠️ Anti-pattern : noter sur une échelle 1-10 linéaire, ou réutiliser un score global hérité d'un autre niveau (Épic → Feature). Toujours recotiser au niveau concerné.

## Tableau de calcul (exemple conforme)

> Chaque colonne a bien son plus petit item = 1, sur des features différentes (colonnes indépendantes).

```
| Feature   | BV | TC | RR/OE | CoD | Size | WSJF |
|-----------|----|----|-------|-----|------|------|
| Feature A |  8 |  5 |   5   |  18 |   8  |  2.3 |
| Feature B |  3 |  2 |   1   |   6 |   1  |  6.0 |
| Feature C |  1 |  8 |   8   |  17 |   5  |  3.4 |
| Feature D |  5 |  1 |   3   |   9 |   3  |  3.0 |
```

- Plus petit par colonne : BV → C (1) · TC → D (1) · RR/OE → B (1) · Size → B (1)
- Classement WSJF : **B (6.0) > C (3.4) > D (3.0) > A (2.3)**
- Lecture : B remonte car c'est le plus petit job (mécanique *Weighted Shortest Job First*) ; A descend car c'est le plus gros (à splitter plutôt qu'à override).

## Règles d'usage

1. Cotation **relative** et **par colonne indépendante** (plus petit = 1).
2. Consensus avec Business Owners et ART.
3. Recalculer à chaque PI Planning.
4. WSJF élevé ≠ toujours exécuté en premier → le **séquencement** intègre les **dépendances** (Program Board), distinctes de la priorité de valeur.
5. Une Feature à forte valeur mais gros Job Size (WSJF bas) se **splitte** — on ne contourne pas le WSJF.

## Atelier WSJF (45 min)

```
10 min : Présenter les features
15 min : Voter BV, TC, RR/OE (cartes) — colonne par colonne, plus petit = 1
10 min : Voter le Job Size — plus petit = 1
10 min : Calculer et valider le classement
```
