# Skill SAFe — Priorisation WSJF

## Formule
```
WSJF = CoD (Cost of Delay) / Durée du Job
CoD  = Business Value + Time Criticality + RR/OE
```

## Échelle Fibonacci modifiée
1 — 2 — 3 — 5 — 8 — 13 — 20

## Composantes
| Composante | Question |
|---|---|
| **BV** Business Value | Quelle valeur pour le client / le business ? |
| **TC** Time Criticality | Y a-t-il une deadline ou contrainte marché ? |
| **RR/OE** Risk Reduction / Opportunity Enablement | Réduit un risque ou ouvre une opportunité ? |
| **Size** Taille du Job | Combien de sprints pour livrer ? |

## Tableau de calcul
```
| Feature   | BV | TC | RR/OE | CoD | Size | WSJF | Priorité |
|-----------|----|----|-------|-----|------|------|----------|
| Feature A |  8 |  5 |   3   |  16 |   3  |  5.3 |    1     |
| Feature B |  3 |  2 |   1   |   6 |   1  |  6.0 |    2     |
| Feature C | 13 |  8 |   5   |  26 |   8  | 3.25 |    3     |
```

## Règles
1. Cotation **relative** : comparer les features entre elles
2. Définir une feature "moyenne" à 5 pour calibrer l'équipe
3. Consensus avec Business Owners et ART
4. Recalculer à chaque PI Planning
5. WSJF élevé ≠ toujours prioritaire → vérifier dépendances

## Atelier WSJF (45 min)
```
10 min : Présenter les features
15 min : Voter BV, TC, RR/OE (cartes)
10 min : Voter la taille
10 min : Calculer et valider le classement
```
