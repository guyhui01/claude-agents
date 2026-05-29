# Skill — Analyse d'Impact Organisationnel du Changement
> Certifications : PROSCI Change Management (PROSCI), CCMP (ACMP), PMP (PMI)
> Agent : AGENT-CHANGE-MANAGER.md

## Objectif
Cartographier l'ensemble des impacts d'un changement sur l'organisation — populations concernées, processus modifiés, compétences requises — pour cibler précisément les actions d'accompagnement.

## Template — Analyse d'Impact Complet

### 1. Fiche de cadrage du changement

```
NATURE DU CHANGEMENT : [ex. Déploiement outil IA générative pour les équipes RH]
PÉRIMÈTRE            : [services / équipes / sites concernés]
DATE DE GO-LIVE      : [date cible]
SPONSOR              : [nom / fonction]
CHEF DE PROJET       : [nom]
CHANGE MANAGER       : [nom]
```

### 2. Matrice d'impact par population

| Population | Effectif | Impact Process | Impact Outils | Impact Compétences | Niveau Impact |
|---|---|---|---|---|---|
| Managers RH | 12 | Fort — nouveaux workflows IA | Fort — nouvel outil | Fort — prompting, IA | 🔴 Critique |
| Chargés RH | 45 | Moyen — tâches partiellement automatisées | Fort | Moyen | 🟡 Élevé |
| DSI | 8 | Faible — intégration API | Fort — infra | Fort — sécurité IA | 🟡 Élevé |
| Direction | 5 | Faible | Faible | Faible — reporting | 🟢 Faible |

**Niveaux :** 🔴 Critique (résistance forte attendue) · 🟡 Élevé · 🟢 Faible

### 3. Cartographie des processus impactés

```
PROCESSUS ACTUEL                    PROCESSUS CIBLE
────────────────────────────────────────────────────────────
Rédaction offres : 45 min/offre  →  15 min/offre (IA assiste)
Tri CV : 2h/poste                →  30 min/poste (IA pré-filtre)
Compte-rendu entretien : manuel  →  IA transcrit + résume
Reporting RH : hebdo manuel      →  Dashboard automatique temps réel
```

### 4. Analyse des écarts de compétences (skill gap)

| Compétence requise | Niveau actuel | Niveau cible | Écart | Action |
|---|---|---|---|---|
| Prompting LLM | 1/5 | 3/5 | -2 | Formation 4h + e-learning |
| Critique des outputs IA | 1/5 | 4/5 | -3 | Workshop + coaching |
| Gestion des biais IA | 0/5 | 3/5 | -3 | Module RGPD IA |
| Workflow outil | 0/5 | 4/5 | -4 | Formation outil 8h |

### 5. Risques liés au changement

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Résistance managers senior | Haute | Critique | Impliquer dès le cadrage, quick wins |
| Peur de remplacement | Haute | Élevé | Communication claire sur l'augmentation (pas remplacement) |
| Surcharge formation | Moyenne | Moyen | Étaler sur 2 sprints, micro-learning |
| Retour arrière post go-live | Faible | Critique | Champions internes, support 30 jours |

## Livrables
- Matrice d'impact complète (toutes populations)
- Cartographie as-is / to-be des processus
- Analyse des écarts de compétences
- Registre des risques changement avec mitigations

## Format de sortie
Précise : nature du changement, populations concernées, date de go-live, contexte organisationnel.
