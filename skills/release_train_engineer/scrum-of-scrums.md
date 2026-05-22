# Skill — Scrum of Scrums et Synchronisation ART
> Certifications : SAFe RTE (Scaled Agile), PSM I (Scrum.org), SAFe 6 Agilist (Scaled Agile)

## Objectif
Animer le Scrum of Scrums et les mécanismes de synchronisation inter-équipes de l'ART — pour identifier et résoudre rapidement les dépendances bloquantes et maintenir le flux de livraison.

## Scrum of Scrums — Format et agenda

```
SCRUM OF SCRUMS (SoS)
Participants : 1 représentant par équipe (SM ou Tech Lead) + RTE
Fréquence    : Quotidien ou 3x/semaine selon la taille de l'ART
Durée        : 15 min (timeboxé strictement)

QUESTIONS CLÉS (rotation par équipe)
────────────────────────────────────────────────────────────
1. "Qu'avons-nous accompli hier qui impacte les autres équipes ?"
2. "Que prévoyons-nous aujourd'hui qui pourrait impacter d'autres ?"
3. "Y a-t-il des impediments ou dépendances bloquants ?"
4. "Avons-nous besoin d'une réunion de coordination avec une autre équipe ?"

RÈGLES DU SoS
────────────────────────────────────────────────────────────
✓ 15 min strictes — on n'entre pas dans les détails techniques
✓ Les problèmes complexes → réunion séparée post-SoS
✓ Un seul representant par équipe (pas toute l'équipe)
✓ Le RTE capture les dépendances sur le Program Board
```

## ART Sync — Format étendu (hebdo)

```
ART SYNC (45-60 min)
Participants : RTE + tous les SM + POs (si besoin)

ORDRE DU JOUR TYPE
────────────────────────────────────────────────────────────
1. Tour des équipes (15 min)
   Pour chaque équipe : avancement sprint, dépendances, impediments

2. Program Board update (15 min)
   Mise à jour des dépendances, risques, milestones

3. Points d'attention ART (10 min)
   Décisions à prendre, escalades

4. Actions (5 min)
   Propriétaires, délais
```

## Tracker de dépendances inter-équipes

| ID | Fournisseur | Consommateur | Livrable | Sprint prévu | Statut | Action |
|---|---|---|---|---|---|---|
| DEP-01 | Équipe Alpha | Équipe Beta | API Module Auth | Sprint 2 | ✅ Livré | — |
| DEP-02 | Équipe Beta | Équipe Gamma | Schéma BDD V2 | Sprint 3 | ⚠ En risque | Réunion J+1 |
| DEP-03 | Équipe Delta | Équipe Alpha | Bibliothèque UI | Sprint 4 | ✅ OK | — |

## Livrables
- Compte-rendu SoS quotidien
- Program Board à jour
- Tracker de dépendances inter-équipes
- Escalades documentées

## Format de sortie
Précise : équipes de l'ART, dépendances actuelles, impediments en cours, sprint actuel.
