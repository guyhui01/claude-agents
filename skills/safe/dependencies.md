# Skill SAFe — Dépendances Inter-équipes

## Program Board
```
           | Iter 1 | Iter 2 | Iter 3 | Iter 4 | IP |
Équipe A   | F-01   | F-02   |        | F-05   |    |
           |        |   ←────────────────┘            |
Équipe B   |        | F-03   | F-04   |        |    |
```
← = dépendance (fil rouge sur le board physique)

## Template suivi des dépendances
```
| ID  | Feature source | Équipe source | Feature cible | Équipe cible | Sprint besoin | Statut |
|-----|---------------|--------------|--------------|-------------|---------------|--------|
| D01 | API Auth v2   | Équipe Infra | Login SSO    | Équipe Front | Sprint 2      | 🟡     |
```
🟢 Résolu | 🟡 En cours | 🔴 Bloqué | ⚪ À confirmer

## Règles de gestion
- Identifier toutes les dépendances dès le PI Planning
- Matérialiser par des fils rouges sur le Program Board
- PO Sync hebdomadaire pour suivre l'avancement
- Escalader au RTE tout blocage non résolu sous 48h
- Documenter dans Jira (type de lien : "is blocked by")
