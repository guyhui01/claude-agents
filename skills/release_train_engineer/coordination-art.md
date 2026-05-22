# Skill — Coordination de l'Agile Release Train (ART)
> Certifications : SAFe RTE (Scaled Agile), SAFe 6 Agilist (Scaled Agile)

## Objectif
Assurer la coordination quotidienne et hebdomadaire de l'ART — cadence de synchronisation, ART Sync, gestion des dépendances inter-équipes, communication Programme — pour maintenir l'alignement entre toutes les équipes du train.

## Cadence de l'ART — Calendrier récurrent

```
QUOTIDIEN
────────────────────────────────────────────────────────
Scrum of Scrums (SoS) : 15 min, Scrum Masters + RTE
  → Impediments inter-équipes, dépendances bloquantes

HEBDOMADAIRE
────────────────────────────────────────────────────────
PO Sync : 30 min, Product Owners + Product Manager
  → Synchronisation backlogs, priorisation, blocages PO

ART Sync : 30-60 min, RTE + Scrum Masters + POs
  → État des dépendances, risques, décisions Programme

TOUTES LES 2 SEMAINES (fin sprint)
────────────────────────────────────────────────────────
System Demo : 1-2h, toutes équipes + stakeholders
  → Démo intégrée de l'incrément

TOUTES LES 10-12 SEMAINES (fin PI)
────────────────────────────────────────────────────────
Inspect & Adapt : 4h, toute l'ART
  → Rétrospective PI + Problem-Solving Workshop
```

## ART Sync — Template agenda

```
ART SYNC — Sprint [N] — [DATE]
Durée : 45 min | Animateur : RTE

1. ÉTAT DES DÉPENDANCES (15 min)
   → Tour de table : dépendances en retard ?
   → Mise à jour Program Board

2. RISQUES ET IMPEDIMENTS (15 min)
   → Nouveaux risques identifiés ?
   → Impediments nécessitant escalade ?

3. INDICATEURS ART (10 min)
   → Velocity cumulée vs engagement PI
   → Features complétées vs planifiées

4. DÉCISIONS ET ACTIONS (5 min)
   → Décisions prises aujourd'hui
   → Actions assignées avec propriétaires
```

## Tableau de bord ART — Suivi Sprint

```yaml
art_dashboard:
  pi: "PI-12"
  sprint: 3
  date: "2026-05-22"
  
  equipes:
    - nom: "Équipe Alpha"
      velocity_cible: 42
      velocity_reelle: 38
      features_engagement: ["F1", "F2"]
      features_completees: ["F1"]
      impediments: 1
      
    - nom: "Équipe Beta"
      velocity_cible: 38
      velocity_reelle: 40
      features_engagement: ["F3", "F4"]
      features_completees: ["F3", "F4"]
      impediments: 0
      
  dependances:
    - from: "Équipe Alpha"
      to: "Équipe Beta"
      feature: "F2"
      statut: "en_risque"
      echeance: "Sprint 4"
      action: "Réunion technique J+2"
      
  risques_art:
    - id: "R-03"
      description: "API externe non disponible Sprint 3"
      proprietaire: "Équipe Alpha"
      statut: "mitigé"
```

## Rôle RTE dans les cérémonies

| Cérémonie | Rôle RTE | Fréquence |
|---|---|---|
| Scrum of Scrums | Observateur / facilitateur si escalade | Quotidien |
| PO Sync | Facilitateur optionnel, décisions Programme | Hebdo |
| ART Sync | Facilitateur principal | Hebdo |
| System Demo | Organisateur, introduit + conclut | Fin sprint |
| Inspect & Adapt | Facilitateur principal (full day) | Fin PI |
| PI Planning | Facilitateur principal (2 jours) | Début PI |

## Livrables
- Calendrier ART complet (agenda récurrent)
- Tableau de bord ART mis à jour (YAML / Jira)
- Compte-rendu ART Sync
- Program Board à jour

## Format de sortie
Précise : nombre d'équipes dans l'ART, outils (Jira, Miro, Teams), sprint en cours, impediments actuels.
