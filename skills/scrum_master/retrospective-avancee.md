# Skill — Rétrospective Avancée (Scrum Master)
> Certifications : PSM II · A-CSM (Advanced CSM) · ICAgile ICP-ATF · SAFe SASM

## Objectif
Faciliter des rétrospectives de sprint efficaces et variées qui génèrent des améliorations concrètes, mesurables et durables au sein de l'équipe.

## Structure de la rétrospective (5 étapes)
```
1. SET THE STAGE      → Créer la sécurité psychologique (5 min)
2. GATHER DATA        → Collecter les faits et ressentis (15 min)
3. GENERATE INSIGHTS  → Identifier les causes racines (15 min)
4. DECIDE WHAT TO DO  → Prioriser et planifier les actions (15 min)
5. CLOSE              → Célébrer et engager (5 min)
```

## Formats de rétrospective (rotation recommandée)

### 1. Start / Stop / Continue (baseline)
```
Questions :
  START  : Qu'est-ce qu'on devrait commencer à faire ?
  STOP   : Qu'est-ce qu'on devrait arrêter de faire ?
  CONTINUE: Qu'est-ce qui fonctionne bien et mérite d'être conservé ?

Usage : Sprint 1-2, équipes débutantes, retour aux fondamentaux
```

### 2. 4Ls (Liked / Learned / Lacked / Longed For)
```
LIKED    : Ce qu'on a apprécié dans ce sprint
LEARNED  : Ce qu'on a appris (technique, process, organisation)
LACKED   : Ce qui manquait pour mieux travailler
LONGED FOR: Ce qu'on aurait souhaité avoir ou faire

Usage : Sprints de découverte, nouvelles fonctionnalités, montée en compétences
```

### 3. Sailboat (Innovation Games)
```
Visuel : Un voilier avec :
  🌬️ WIND   → Ce qui nous propulse (forces, succès)
  ⚓ ANCHOR  → Ce qui nous ralentit (obstacles, dette)
  🪨 ROCKS   → Risques à venir (menaces, dépendances)
  🏝️ ISLAND  → Notre objectif / destination

Usage : Mi-release, vision long terme, équipes sous pression
```

### 4. Fishbone (Ishikawa) — Analyse causale
```
Pour un problème identifié, explorer les 5M :
  MÉTHODES    → Les processus en cause ?
  MACHINES    → Les outils / technologies ?
  MATIÈRES    → Les inputs (specs, données) ?
  MAIN-D'OEUVRE → Compétences, charge, RH ?
  MILIEU      → Environnement, contexte organisationnel ?

Usage : Problème récurrent, bug critique, qualité dégradée
```

### 5. Timeline + Feelings (rétrospective longue durée)
```
1. Dessiner une ligne de temps du sprint (ou trimestre)
2. Placer les événements clés (déploiement, incident, réunion)
3. Annoter avec les ressentis de l'équipe (émoticônes / couleurs)
4. Identifier les corrélations événement ↔ ressenti

Usage : Release rétrospective, post-mortem, rétro trimestrielle
```

## Facilitation : techniques avancées

### Silence divergent (Brainwriting)
```
1. Chaque membre écrit ses idées en SILENCE (3-5 min)
2. Post-its individuels, pas de discussion pendant l'écriture
3. Regroupement collectif et clustering thématique
→ Évite le groupthink et les voix dominantes
```

### Dot Voting (priorisation)
```
Chaque participant reçoit N points (N = nombre d'items / 3)
→ Vote sur les actions les plus impactantes
→ Limite les discussions infinies
→ Décision visible et objective
```

### SMART Action Items
```
Chaque action issue de la rétro DOIT être :
  Specific   → Quelle tâche précisément ?
  Measurable → Comment saurons-nous que c'est fait ?
  Assignable → Qui est responsable (une seule personne) ?
  Realistic  → Faisable dans le prochain sprint ?
  Time-bound → Deadline dans le sprint ou backlog ?

Anti-pattern : "Améliorer la communication" → trop vague, non mesurable
Bon exemple   : "Alice crée un channel Slack #incidents avant le Sprint 5"
```

## Métriques de santé de la rétrospective
| Indicateur | Vert | Orange | Rouge |
|---|---|---|---|
| Participation | 100% de l'équipe | 80% | < 70% |
| Actions générées | 2-3 actions claires | 4-5 | 0 ou > 8 |
| Actions complétées (sprint suivant) | > 80% | 50-80% | < 50% |
| Durée | 90 min (sprint 2 sem.) | 120 min | > 150 min |
| Safety Check (1-5) | ≥ 4 | 3 | ≤ 2 |

## Safety Check (Prime Directive)
```
Avant chaque rétro (ou en clôture) :
"Indépendamment de ce qu'on va découvrir, on suppose
 que chacun a fait de son mieux avec ce qu'il savait,
 ses compétences et les moyens disponibles."
                              — Norm Kerth, Project Retrospectives

Vote anonyme 1-5 sur la sécurité psychologique :
  5 = Je peux tout dire librement
  1 = Je préfère me taire
→ Si moyenne < 3 : adapter le format, traiter le problème d'abord
```

## Anti-patterns à éviter
```
❌ Rétro = séance de plaintes sans action
❌ Le SM parle plus qu'il ne facilite
❌ Les mêmes actions reviennent sprint après sprint
❌ Rétro annulée "parce qu'on manque de temps"
❌ Actions collectives sans responsable individuel
❌ Décisions prises par le manager présent, pas l'équipe
```

## Livrables
- Compte-rendu de rétro (actions SMART + responsables)
- Tableau de suivi des actions (Jira / Confluence / Miro)
- Health Check de l'équipe (trimestriel)
- Backlog d'amélioration continue (team improvement backlog)

## Format de sortie
Précise : vélocité actuelle · problème récurrent identifié · format de rétro souhaité · durée disponible · outil de facilitation (Miro, Mural, physique)
