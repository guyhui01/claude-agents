# Skill — Gestion des Impediments et Dépendances à l'Échelle ART
> Certifications : SAFe RTE (Scaled Agile), SAFe SPC (Scaled Agile), PMP (PMI)

## Objectif
Identifier, qualifier, escalader et résoudre les impediments et dépendances qui bloquent la livraison de l'ART — en distinguant ce qui relève du niveau équipe vs du niveau ART vs du management.

## Taxonomie des impediments ART

```
NIVEAU 1 — ÉQUIPE (Scrum Master résout)
  Ex : Outil de build cassé, membre absent
  Délai de résolution : < 1 sprint

NIVEAU 2 — ART (RTE résout)
  Ex : Dépendance inter-équipes bloquante, architecture commune
  Délai de résolution : < 2 sprints

NIVEAU 3 — MANAGEMENT (RTE escalade)
  Ex : Budget manquant, ressource externe bloquée, décision CODIR
  Délai de résolution : Steering Committee
```

## Registre ROAM des risques et impediments

```yaml
roam_log:
  pi: "PI-12"
  
  impediments:
    - id: "IMP-07"
      description: "API partenaire non disponible en environnement de recette"
      equipe: "Équipe Alpha"
      niveau: "ART"
      proprietaire: "RTE + Tech Lead"
      date_identification: "2026-05-15"
      statut: "en_cours"
      actions:
        - "Contact partenaire J+1 — [Prénom]"
        - "Workaround mock API si non résolu J+5"
      echeance: "2026-05-22"
      
  dependances:
    - id: "DEP-03"
      description: "Équipe Beta dépend de la Feature F2 de l'Équipe Alpha (Sprint 4)"
      equipe_producteur: "Équipe Alpha"
      equipe_consommateur: "Équipe Beta"
      statut: "en_risque"
      feature: "F2"
      echeance: "Sprint 4"
      mitigation: "Réunion technique Alpha+Beta J+2"

  risques_roam:
    - id: "R-05"
      description: "Retard livraison infra Cloud (Sprint 3)"
      categorisation: "Mitigé"  # Résolu / Accepté / Mitigé / Évité
      proprietaire: "DevOps Lead"
      action: "Plan B infra on-premise en parallèle"
```

## Process d'escalade RTE

```
DÉTECTION IMPEDIMENT
        │
        ▼
SCRUM MASTER évalue → Niveau équipe ?
    ├── OUI → SM résout en < 1 sprint
    └── NON → Escalade au RTE via SoS
                    │
                    ▼
             RTE évalue → Niveau ART ?
                 ├── OUI → RTE coordonne la résolution
                 │          (ART Sync, parties impliquées)
                 └── NON → Escalade Management
                             (Sponsor, CODIR, Budget)
```

## Livrables
- Registre ROAM mis à jour (YAML / Jira)
- Compte-rendu des escalades
- Plan de résolution par impediment
- Rapport impediments pour l'I&A

## Format de sortie
Précise : impediments identifiés, équipes concernées, niveau (équipe / ART / management), délai de résolution souhaité.
