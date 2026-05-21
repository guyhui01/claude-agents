# Skill — Program Backlog Management (ART)
> Certifications : SAFe POPM 6

## Objectif
Gérer le backlog au niveau Programme (ART) : alimenter, prioriser et maintenir les Features prêtes pour le PI Planning.

## Structure du Program Backlog
```
Portfolio Epics
  └── Program Epics → Features (Program Backlog)
        └── User Stories (Team Backlog)
```

## Rôle du PO/PM sur le Program Backlog
- **Product Manager** : responsable du Program Backlog (Features et au-dessus)
- **Product Owner** : responsable du Team Backlog (User Stories)
- En pratique (contexte PME / PO senior) : souvent les deux rôles

## Critères d'une Feature ready pour le PI Planning
- [ ] Énoncé : "En tant que [utilisateur], je veux [capability] afin de [bénéfice business]"
- [ ] Benefit Hypothesis rédigée
- [ ] Acceptance Criteria (Feature AC) définis
- [ ] WSJF calculé et documenté
- [ ] Dépendances identifiées (inter-équipes, inter-ARTs)
- [ ] Estimée en Story Points (capacité équipe)
- [ ] Enables Epics ou PI Objectives identifiés

## Priorisation du Program Backlog
1. WSJF (Weighted Shortest Job First) — score automatique
2. Alignement sur les PI Objectives
3. Dépendances et risques
4. Capacité ART (nombre d'équipes × vélocité)

## Cérémonie : Pre-PI Planning (Product Management sync)
- Préparer et prioriser le Program Backlog
- Aligner avec le Business Owners sur les priorités
- Identifier les Features candidates pour le prochain PI

## Livrables
- Program Backlog priorisé (Jira / Rally / Azure DevOps)
- Features rédigées et estimées
- Rapport de capacité ART vs. backlog

## Format de sortie
Précise : nombre d'équipes dans l'ART · durée du PI · outil de gestion backlog · niveau de maturité SAFe
