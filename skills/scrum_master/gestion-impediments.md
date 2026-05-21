# Skill — Gestion des Impediments & Protection de l'Équipe
> Certifications : PSM I/II · CSM · A-CSM · SAFe SSM

## Objectif
Identifier, prioriser et résoudre les obstacles qui bloquent l'équipe, en protégeant sa capacité à atteindre le Sprint Goal.

## Catégories d'impediments
| Catégorie | Exemples | Qui résout |
|---|---|---|
| **Techniques** | Bug bloquant, dette technique, accès refusé | Dev + SM facilite |
| **Processus** | Processus administratif trop long, cycle d'approbation | SM escalade |
| **Organisationnels** | Silo entre équipes, décision en attente de management | SM + management |
| **Humains** | Conflit interpersonnel, absence de compétence | SM + RH |
| **Externes** | Dépendance à un prestataire, API indisponible | SM + PO |

## Processus de gestion des impediments

### Identification
- Daily Scrum : "Quels obstacles bloquent ta progression ?"
- Rétro : items récurrents = impediments systémiques
- 1:1 avec les membres de l'équipe
- Observation directe des interactions

### Priorisation (matrice impact × urgence)
```
                Urgent      Pas urgent
Important   | TRAITER      | PLANIFIER
            | maintenant   | (backlog SM)
Non-import. | DÉLÉGUER     | IGNORER /
            |              | LAISSER TOMBER
```

### Escalade structurée
```
Niveau 1 : SM résout seul (ressources, accès, tools)
  → Délai cible : < 1 jour

Niveau 2 : SM + PO ou Tech Lead
  → Délai cible : < 3 jours

Niveau 3 : SM + Management (Scrum of Scrums, CODIR)
  → Délai cible : < 1 semaine

Niveau 4 : Programme / Portfolio (RTE, PMO, Direction)
  → Délai cible : < 2 semaines
```

## Impediment Backlog (template)
```
| ID | Date | Description | Impact | Escalade | Owner | Status | Date résolution |
|----|------|-------------|--------|----------|-------|--------|-----------------|
| I1 | ... | Accès BDD prod bloqué | Bloque 3 devs | Tech Lead | SM | En cours | - |
```

## Protection de l'équipe — cas fréquents

### Interruptions non planifiées
```
Règle : toute nouvelle demande en cours de sprint → PO décide
Si urgence vraie → annulation de sprint (rare) ou swap d'item
SM role : dire non aux parties prenantes, rediriger vers PO
```

### Scope creep (glissement de périmètre)
```
Symptôme : PBI augmente en complexité pendant le sprint
Action SM :
  1. Identifier avec l'équipe (daily / burndown anormal)
  2. Challenger avec le PO : réduire le scope ou splitter
  3. Si impossible : en informer les stakeholders (sprint review)
```

### Équipe sous-pression management
```
Symptôme : management demande à l'équipe de "faire plus"
Action SM :
  1. Protéger l'espace Scrum (ceremonies, focus time)
  2. Montrer les données de vélocité (la pression n'accélère pas)
  3. Escalader si nécessaire au management sponsor
```

## Livrables
- Impediment Backlog tenu à jour (hebdomadaire)
- Rapport de suivi des escalades
- Rapport de résolution des impediments (mensuel)
- Communication transparente vers les stakeholders

## Format de sortie
Précise : type d'impediment · urgence · impact sur le sprint · niveau d'escalade requis · parties prenantes impliquées
