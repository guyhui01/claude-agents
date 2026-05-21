# Skill — Facilitation d'Ateliers Agiles (Scrum Master)
> Certifications : ICAgile ICP-ATF · A-CSM (Advanced CSM) · PSM II · Liberating Structures Practitioner

## Objectif
Concevoir et faciliter des ateliers collaboratifs (Planning, Refinement, Design Sprint, Kaizen) pour maximiser la participation et la qualité des décisions.

## Rôle du facilitateur

### Le SM facilitateur ≠ animateur
```
ANIMATEUR            FACILITATEUR
Suit un agenda       ← Adapte en temps réel
Parle beaucoup       ← Écoute et questionne
Donne des réponses   ← Aide le groupe à trouver ses réponses
Gère le contenu      ← Gère le processus
S'implique           ← Reste neutre
```

## Ateliers clés Scrum

### Sprint Planning — Facilitation efficace
```
PARTIE 1 — QUOI (2h max)
  1. PO présente les items du backlog (capacité × vélocité)
  2. L'équipe pose des questions de clarification
  3. Vote de confirmation : "Peut-on s'engager sur ce périmètre ?"
  SM : Vérifie que l'objectif de sprint est défini (Sprint Goal)

PARTIE 2 — COMMENT (2h max)
  4. Équipe décompose les US en tâches (< 8h chacune)
  5. Identification des dépendances (fil rouge ou Jira)
  6. Vérification de la capacité réelle (congés, formations)
  SM : Timeboxe, évite les débats techniques infinis
```

### Sprint Refinement — Structure en 3 temps
```
TEMPS 1 — Clarification (30 min)
  → PO présente les US prioritaires
  → Questions d'acceptation : "Quand est-ce que c'est fait ?"
  → Critères d'acceptation vérifiables et testables

TEMPS 2 — Estimation (30 min)
  → Planning Poker (Fibonacci : 1, 2, 3, 5, 8, 13, 21, ?)
  → Discussion sur les divergences d'estimation
  → Seuil : US estimée > 13 = à découper

TEMPS 3 — Découpage (20 min)
  → Splitter les US trop grosses (> 8 SP)
  → Techniques : SPIDR, Slice by Workflow Step, Data Variation
  → Résultat : backlog "ready" pour les 2 prochains sprints
```

### Planning Poker — Facilitation
```python
# Règles du Planning Poker
regles = {
    "cartes": [0, 1, 2, 3, 5, 8, 13, 21, 40, 100, "?", "∞"],
    "processus": [
        "1. PO lit l'US sans donner d'estimation",
        "2. Chaque dev choisit sa carte en secret",
        "3. Révélation simultanée",
        "4. Si consensus (ou écart ≤ 1) → stocker l'estimation",
        "5. Si divergence → discussion max 3 min entre extrêmes",
        "6. Re-vote une fois"
    ],
    "? = ": "Je ne comprends pas la story",
    "∞ = ": "Cette US est trop grande, il faut la découper",
    "timeout": "2 rounds max, sinon estimé par défaut"
}
```

## Techniques de facilitation avancées

### 1-2-4-All (Liberating Structures)
```
But : Générer des idées sans que les voix dominantes écrasent les autres
  1 min  → Réflexion individuelle (silence)
  2 min  → Discussion en binôme
  4 min  → Discussion en groupe de 4
  All    → Partage en plénière (1 idée forte par groupe)

Usage : Générer des solutions, identifier des problèmes, prioriser
```

### DACI (Decision Making)
```
D — Driver      : qui pilote la décision (1 personne)
A — Approver    : qui a le droit de véto (1-2 personnes)
C — Contributor : qui contribue avec expertise
I — Informed    : qui doit être informé de la décision

Usage : Sprint Planning controversé, changement de process, arbitrage technique
```

### Fishbowl (débats complexes)
```
Setup : 4 chaises au centre (participants actifs) + cercle extérieur (observateurs)
  → Seuls ceux dans le Fishbowl parlent
  → Quand une chaise se libère, un observateur peut entrer
  → SM facilite depuis l'extérieur

Usage : Conflits persistants, décisions difficiles, sujets sensibles
```

## Gestion des situations difficiles

### L'expert qui monopolise la parole
```
Technique : "Merci [nom], j'aimerais entendre d'autres perspectives.
             Quelqu'un a-t-il un avis différent ?"
Ou : Round Robin forcé — chacun parle 1 min dans l'ordre
```

### Le groupe qui tourne en rond
```
Technique : "On discute depuis X min. On a 2 options :
             A) On vote maintenant
             B) On timeboxe 5 min pour trouver un consensus
             Qu'est-ce que vous préférez ?"
```

### Le conflit ouvert entre deux personnes
```
1. Marquer une pause (break 5 min)
2. Rappeler la Prime Directive et les règles de collaboration
3. Reformuler chaque position sans jugement
4. Chercher le terrain commun ("Qu'est-ce qu'on veut TOUS les deux ?")
5. Si persistant : reporter et traiter en coaching individuel
```

## Outils digitaux recommandés
| Outil | Usage | Points forts |
|---|---|---|
| **Miro** | Rétrospectives, Story Mapping | Templates riches, temps réel |
| **Mural** | Design Thinking, Workshops | Facilitation avancée |
| **FigJam** | Brainstorming, Refinement | Intégration Figma |
| **Mentimeter** | Votes anonymes, Safety Check | Interactif, mobile |
| **PlanningPoker.com** | Estimation remote | Gratuit, simple |

## Livrables
- Agenda de l'atelier avec timeboxes
- Support visuel (Miro / tableau physique)
- Compte-rendu des décisions prises
- Actions et responsables identifiés
- Rétroaction sur la facilitation (ROTI 1-5)

## Format de sortie
Précise : type d'atelier · nombre de participants · durée disponible · remote ou présentiel · outil de facilitation · problème ou objectif spécifique
