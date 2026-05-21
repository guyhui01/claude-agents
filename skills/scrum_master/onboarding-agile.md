# Skill — Onboarding Agile (Scrum Master)
> Certifications : PSM I · CSM (Certified Scrum Master) · ICAgile ICP-ATF · SAFe Scrum Master

## Objectif
Concevoir et déployer un programme d'onboarding Agile qui intègre rapidement les nouveaux membres d'équipe dans la culture Scrum, les pratiques et les outils.

## Onboarding en 3 phases

### Phase 1 — Avant le premier jour (J-7 à J-1)
```
CHECKLIST PRÉ-ONBOARDING :
  ☐ Accès outils créés (Jira, Confluence, GitHub, Slack)
  ☐ Invitation aux cérémonies Scrum du premier sprint
  ☐ Buddy désigné parmi les membres de l'équipe
  ☐ Kit de bienvenue envoyé (liens, guides, glossaire)
  ☐ Premier 1-on-1 SM/Nouveau planifié à J+1

KIT DE BIENVENUE (contenu) :
  → Vision produit (Product Vision Board)
  → Architecture Scrum de l'équipe (qui fait quoi)
  → Backlog en cours + Sprint Goal actuel
  → Working Agreement de l'équipe
  → Glossaire métier (si domaine spécialisé)
  → Liens outils et accès
```

### Phase 2 — Semaine 1 : Découverte
```
J+1 (1h) : 1-on-1 SM → accueil, questions, attentes mutuelles
J+1 (2h) : Tour de l'équipe (présentation + rôles + contexte produit)
J+2      : Shadow des cérémonies (observer sans participer activement)
J+3      : Deep-dive Jira/Confluence avec le Buddy
J+4      : 1ère contribution (ticket simple, en pair avec le Buddy)
J+5      : Rétro d'onboarding (feedback de la semaine 1)

Objectif semaine 1 : Comprendre sans la pression de produire
```

### Phase 3 — Semaines 2-4 : Intégration progressive
```
Semaine 2 : Participer activement aux cérémonies
            Contribuer à 2-3 US simples
            Rencontrer les stakeholders clés

Semaine 3 : Autonomie sur les US assignées
            Prendre la parole au Daily
            Proposer 1 idée en rétro

Semaine 4 : Pleine intégration dans la vélocité de l'équipe
            Évaluation 30 jours (SM + PO + Buddy)
            Plan de développement personnel
```

## Programme d'onboarding Agile

### Formation initiale (2h en J+2)
```
MODULE 1 — Fondamentaux Scrum (45 min)
  → Les 3 piliers : Transparence, Inspection, Adaptation
  → Les 5 valeurs Scrum : Courage, Focus, Commitment, Respect, Openness
  → Les 3 rôles : SM, PO, Developers
  → Les 5 événements : Sprint, Planning, Daily, Review, Rétro

MODULE 2 — Notre façon de travailler (45 min)
  → Workflow de l'équipe (de "To Do" à "Done")
  → Definition of Ready et Definition of Done
  → Règles de nommage des branches Git
  → Processus de review de code (PR, checklist)

MODULE 3 — Outils (30 min)
  → Jira : colonnes, filtres, sprint board
  → Confluence : structure de l'espace équipe
  → Slack : channels et étiquette
  → GitHub/GitLab : workflow branches
```

### Working Agreement (document fondateur)
```markdown
# Accord de collaboration — Équipe [Nom]
Validé le : [Date] | Révisé à chaque rétro trimestrielle

## Comment nous travaillons
- Core hours : 9h-17h (présence garantie pour la collaboration)
- Daily : 9h30 — 15 min max, debout, pas de résolution de problèmes en séance
- Pull Requests : review sous 4h pendant core hours
- Tickets Jira : mis à jour à la fin de chaque journée

## Communication
- Questions techniques : #tech channel (pas de DM privés par défaut)
- Urgences : @channel si bloquant depuis > 2h
- Décisions importantes : documentées dans Confluence, pas seulement Slack

## Réunions
- Toute réunion > 30 min : agenda envoyé 24h à l'avance
- Règle des deux pieds : tu peux partir si tu n'apportes pas de valeur
- Pas de réunion entre 12h et 14h (plage protégée)

## Qualité
- Pas de merge sans review d'un pair
- Coverage minimum : 80% (testé en CI)
- Bug en prod = post-mortem systématique (blame-free)
```

## Plan 30-60-90 jours

### Template individuel
```
30 JOURS — Comprendre
  ☐ Connaître les membres de l'équipe et leurs expertises
  ☐ Comprendre le produit et les utilisateurs finaux
  ☐ Maîtriser les outils et le workflow
  ☐ Livrer 3-5 US simples en autonomie
  KPI : onboarding score > 7/10 (auto-évaluation)

60 JOURS — Contribuer
  ☐ Contribuer à la vélocité à 70% d'un senior
  ☐ Faire au moins 1 review de code par jour
  ☐ Proposer une amélioration en rétro
  ☐ Maîtriser le domaine métier de l'équipe
  KPI : satisfaction Buddy + SM > 7/10

90 JOURS — Performer
  ☐ Vélocité individuelle équivalente aux pairs
  ☐ Capable d'animer le Daily en l'absence du SM
  ☐ Contribuer au Refinement (questions, découpage)
  ☐ Identifier et lever ses propres impediments
  KPI : intégration complète dans la rétro 90 jours
```

## Métriques d'onboarding
| Indicateur | Cible |
|---|---|
| Time-to-first-commit | < 3 jours |
| Time-to-first-US-livree | < 7 jours |
| Satisfaction à 30 jours (1-10) | ≥ 7 |
| Satisfaction à 90 jours (1-10) | ≥ 8 |
| Turnover pendant période d'essai | 0% |

## Livrables
- Kit de bienvenue personnalisé
- Programme d'onboarding structuré (3 phases)
- Working Agreement de l'équipe
- Plan 30-60-90 jours individuel
- Évaluation d'intégration (30 et 90 jours)

## Format de sortie
Précise : taille de l'équipe · domaine métier · outils en place · niveau de maturité Agile de l'équipe · type de profil intégré (tech, product, QA...)
