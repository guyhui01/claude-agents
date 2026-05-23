# Skill — Gestion du Product Backlog

> Certification : PSPO I · PSPO II
> Agent : AGENT-PO-SCRUM.md

## Objectif

Maintenir un Product Backlog **vivant, ordonné, juste assez détaillé**, qui sert de source unique de vérité entre PO, équipe et stakeholders — sans devenir une accumulation de tickets périmés.

> 🔗 Pour la **priorisation** (MoSCoW, RICE, Kano…) : voir `priorisation-techniques.md`
> 🔗 Pour le **découpage par parcours utilisateur** : voir `story-mapping.md`

## Structure hiérarchique

```
Vision Produit
   └── Product Goal (Sprint Goal cumulé sur 1-3 mois)
         └── Epics (gros morceaux fonctionnels, 2-3 mois)
               └── Features (lots cohérents livrables, 2-4 sprints)
                     └── User Stories (livrables en 1 sprint)
                           └── Tâches techniques (heures-jour)
```

### Règles de profondeur

| Horizon | Niveau de détail attendu |
|---|---|
| **Sprint en cours** | US complètes, DoR validée, AC écrits, estimées |
| **Sprint N+1** | US identifiées, DoR à valider en refinement |
| **2-3 mois** | Features décomposées, US esquissées |
| **> 3 mois** | Epics uniquement, intentions de valeur |

> 💡 **Anti-pattern** : avoir 200 US détaillées dans le backlog → 80% deviendront obsolètes.

## Definition of Ready (DoR) — checklist d'entrée sprint

Une User Story est prête à entrer en sprint si :

- [ ] **I**ndépendante (ou dépendances explicitées et résolues)
- [ ] **N**égociable (pas un contrat figé, la conversation reste ouverte)
- [ ] **V**aluable (valeur métier ou utilisateur claire)
- [ ] **E**stimable (l'équipe peut donner un ordre de grandeur)
- [ ] **S**mall (livrable dans le sprint, max 1/3 de la capacité équipe)
- [ ] **T**estable (critères d'acceptation rédigés et compréhensibles)
- [ ] Maquette UX disponible si pertinent
- [ ] Dépendances techniques / API identifiées
- [ ] Données nécessaires accessibles (jeu de test)

## Estimation — Rôle du PO

Le PO **n'estime pas** : il clarifie l'US, répond aux questions de l'équipe pendant l'atelier et veille à ce que la DoR soit valide pour permettre l'estimation. L'équipe Dev estime collectivement, le Scrum Master facilite.

**Méthode de référence : Planning Poker (Fibonacci 1, 2, 3, 5, 8, 13, 21, ?, ∞).**

> 🔗 Détails facilitation + alternatives (T-shirt, #NoEstimates, Affinity, Magic Estimation, Bucket System) + adaptation SAFe + outils remote : voir `skills/scrum_master/planning-poker.md`

## Backlog Refinement (Grooming)

### Cadence et format

| Paramètre | Recommandation |
|---|---|
| Fréquence | 1× par sprint (milieu) — voire 2× pour équipe junior |
| Durée max | 10% du sprint (1h pour sprint 2 semaines) |
| Participants | PO + équipe complète + Scrum Master |
| Préparation PO | 30 min en amont pour proposer les US à raffiner |

### Ordre du jour type (1h)

1. **Tour d'horizon backlog** (5 min) — état des prochains sprints
2. **Clarification US prioritaires** (30 min) — questions équipe → PO
3. **Estimation Planning Poker** (15 min) — sur 3-5 US
4. **Identification dépendances/risques** (5 min)
5. **Validation DoR** (5 min) — quelles US passent en "Ready"

### Sortie attendue

À l'issue du refinement : **2 sprints d'avance** avec DoR validée pour le PO.

## Checklist santé du backlog (revue mensuelle)

- [ ] **Ordonné** par priorité (1 seul ordre, pas de "tous Must-Have")
- [ ] **2 sprints d'avance** avec DoR validée
- [ ] **US obsolètes archivées** (statut "Rejected" avec raison)
- [ ] **Dépendances inter-équipes tracées** (custom field ou label)
- [ ] **Estimations à jour** (pas de US de plus de 3 mois sans re-challenge)
- [ ] **Epics liés à Product Goals** (traçabilité valeur)
- [ ] **Ratio dette tech / valeur** : 15-20% capacité réservée à la dette
- [ ] **Dernière revue documentée** : [date]

## Template Roadmap trimestrielle

```
TRIMESTRE Q[X] — Product Goal : [objectif mesurable]

Sprint N      | [Feature 1]       | [Feature 2]      | [Dette]
Sprint N+1    | [Feature 3]       | [Feature 4]      | [Spike R&D]
Sprint N+2    | [Feature 5]       | [Polish R1]      | [Dette]
Sprint N+3    | RELEASE 1 stabilisée — démo CODIR

KPIs cibles (Outcome) :
  - [Métrique 1] : [baseline] → [cible]
  - [Métrique 2] : [baseline] → [cible]

Hypothèses validées en fin de trimestre :
  - [Hypothèse 1] : oui / non / partiellement
  - [Hypothèse 2] : oui / non / partiellement
```

## Outils de gestion recommandés

| Contexte | Outil |
|---|---|
| Équipe < 10, simple | Linear, Notion, Trello |
| Mid-market, Scrum classique | Jira Cloud, Azure DevOps |
| SAFe Programme | Jira Align, Targetprocess |
| Story Map visuel persistant | Avion, StoriesOnBoard, Miro |

## Anti-patterns

- ❌ Backlog = poubelle de toutes les idées → ne sera jamais nettoyé
- ❌ PO seul gestionnaire → manque de visibilité équipe
- ❌ US détaillées 6 mois à l'avance → obsolescence garantie
- ❌ Pas de DoR → planning poker impossible, sprint chaotique
- ❌ Refinement annulé pour "manque de temps" → dette de clarification cumulative
- ❌ Plus de 50% du backlog à priorité "Haute" → la priorisation n'a pas eu lieu

## Livrables

- Backlog ordonné et raffiné dans l'outil (Jira / Linear / Notion)
- Compte-rendu de refinement (US discutées, décisions, points ouverts)
- Roadmap trimestrielle visuelle (1 page CODIR-ready)
- Note de santé backlog (mensuelle, 1 page) avec KPIs et actions

## Format de sortie

Préciser : **outil cible** (Jira / Linear / Notion / autre), **horizon** (sprint en cours / trimestre / semestre), **niveau de détail** (Epics seuls / Features / US complètes), **livrable attendu** (backlog import, roadmap visuelle, note de santé).
