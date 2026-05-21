# Skill QA Agile — Tests d'Acceptance en Sprint (ATDD)

## ATDD — Acceptance Test Driven Development
Les tests d'acceptance sont écrits AVANT le développement, en collaboration PO + DEV + QA (les "3 amigos").

## Réunion 3 Amigos

```
PARTICIPANTS : PO + DEV (lead) + QA
DURÉE : 30-45 min par US
OBJECTIF : Aligner la compréhension avant de coder

Ordre du jour :
1. PO présente l'US et les critères d'acceptance
2. QA traduit les critères en scénarios de test
3. DEV identifie les contraintes techniques
4. Équipe valide les scénarios ensemble
5. Résultat : scénarios BDD validés = base du dev ET des tests
```

## Flux ATDD dans le sprint

```
Refinement → 3 Amigos → Scénarios BDD écrits
     ↓
Sprint Planning → US sélectionnée
     ↓
DEV code en TDD (tests unitaires)
     ↓
QA teste en parallèle (dès J+1 ou J+2)
     ↓
Feedback immédiat (< 24h)
     ↓
DoD validée → US Done
```

## Template session 3 Amigos

```
3 AMIGOS — US-[XXX] — [Titre] — [Date]
PO : [nom]  |  DEV : [nom]  |  QA : [nom]

US : [rappel]
Critères d'acceptance initiaux : [liste PO]

Scénarios validés collectivement :
1. [Scénario nominal — Gherkin]
2. [Scénario alternatif 1]
3. [Scénario d'erreur]

Questions / clarifications :
- [question] → [réponse]

Estimation impact tests : [X] h
```
