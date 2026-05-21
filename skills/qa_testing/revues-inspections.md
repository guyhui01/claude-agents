# Skill QA Cycle V — Revues & Inspections

## Types de revues (ISTQB)

| Type | Formalisme | Participants | Objectif |
|---|---|---|---|
| **Revue informelle** | Faible | 1-2 pairs | Détection rapide d'erreurs |
| **Walkthrough** | Moyen | Auteur + équipe | Compréhension partagée |
| **Revue technique** | Élevé | Pairs techniques | Évaluation technique |
| **Inspection** | Très élevé | Équipe + modérateur | Détection formelle de défauts |

## Processus d'inspection (IEEE 1028)

```
1. Planning → Sélection du document, constitution de l'équipe
2. Présentation → L'auteur présente le document
3. Préparation individuelle → Chaque relecteur annote
4. Réunion d'inspection → Discussion et enregistrement des défauts
5. Correction → L'auteur corrige les défauts identifiés
6. Suivi → Vérification des corrections
```

## Template liste de contrôle (Checklist de revue SFD)

```
REVUE — [Document] — v[X.X] — [Date]
Relecteur : [nom]  |  Auteur : [nom]

COMPLÉTUDE :
☐ Tous les cas nominaux documentés
☐ Cas alternatifs et d'erreur présents
☐ Règles de gestion numérotées et complètes
☐ Interfaces SI identifiées

CLARTÉ :
☐ Langage non ambigu
☐ Termes du glossaire utilisés
☐ Exemples fournis pour les règles complexes

TESTABILITÉ :
☐ Chaque exigence est vérifiable
☐ Critères d'acceptance mesurables
☐ Données de test identifiables

Défauts relevés :
| # | Localisation | Description | Sévérité | Type |
|---|---|---|---|---|
| 1 | [section X] | [description] | Majeur | Manquant |
```
