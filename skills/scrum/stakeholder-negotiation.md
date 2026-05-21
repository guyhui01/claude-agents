# Skill — Négociation et engagement avancé des stakeholders

> Certification : PSPO II · PSPO III · ICAgile ICP-APO
> Agent : AGENT-PO-SCRUM.md

## Objectif
Gérer les situations complexes de stakeholders : conflits de priorités, pression de scope, demandes contradictoires, résistance au changement.

## Techniques de négociation PO

### 1. Trade-off Sliders (compromis explicites)
Présenter visuellement les curseurs de décision :
```
SCOPE    [─────────────────────●─] Flexible
DÉLAI    [●─────────────────────] Fixe
QUALITÉ  [─────────────●────────] Importante
COÛT     [─────────────────●────] Maîtrisé
```
Forcer le stakeholder à choisir ce qui est négociable.

### 2. Le "Oui, et..." au lieu du "Non"
```
❌ "Non, ce n'est pas possible en Sprint 3."

✅ "Oui, on peut livrer ça, et pour le faire :
    Option A : on retire [fonctionnalité X] du sprint 3
    Option B : on réduit le scope à [version minimum]
    Option C : on planifie en Sprint 4
    Laquelle préférez-vous ?"
```

### 3. Matrice Stakeholders — Gestion par quadrant

| | Faible influence | Haute influence |
|---|---|---|
| **Faible intérêt** | Informer (newsletter) | Satisfaire sans surcharger |
| **Fort intérêt** | Consulter régulièrement | Gérer activement (core stakeholders) |

### 4. Technique de l'ancrage
Pour les négociations de délai ou scope :
- Partir d'une fourchette haute (scope réduit, délai plus long)
- Laisser le stakeholder "négocier" vers le bas
- Résultat : ils s'approprient la décision

### 5. Gestion des demandes hors sprint (scope creep)
```
Process en 3 étapes :
1. Accuser réception : "C'est noté, c'est important."
2. Évaluer : "Ça représente [X SP]. Pour l'intégrer maintenant, on retire quoi ?"
3. Décider ensemble : stakeholder choisit le trade-off — PO documente
```

## Situations conflictuelles courantes

### Conflit entre deux stakeholders de même niveau
1. Ne pas arbitrer seul — organiser une réunion tripartite
2. Utiliser les OKR / objectifs business comme arbitre objectif
3. Proposer une décision par données (prototype, A/B test)
4. Escalader au Product Manager / Sponsor si blocage persiste

### Pression de deadline non négociable
```
Framework "Scope Flexible" :
1. Confirmer la date comme contrainte fixe
2. Lister les fonctionnalités Must Have / Should Have / Could Have
3. Livrer Must Have en premier, négocier le reste
4. Documenter les Could Have pour le sprint suivant
```

### Stakeholder qui court-circuite l'équipe
- Rappeler le processus : "Toutes les demandes passent par le backlog."
- Proposer un canal dédié (Slack, meeting mensuel)
- Impliquer le Scrum Master si le comportement persiste

## Templates de communication

### Email de refus bienveillant
```
Objet : [Demande X] — Analyse et proposition

Bonjour [Prénom],

J'ai bien pris en compte votre demande concernant [sujet].
Après analyse, l'intégrer en Sprint [N] impacterait [fonctionnalité Y].

Voici 3 options :
• Option 1 : [description] — impact [délai/scope]
• Option 2 : [description] — impact [délai/scope]
• Option 3 : Planification en Sprint [N+1] — aucun impact

Pouvez-vous me confirmer votre préférence avant [date] ?

Cordialement,
[Signature]
```
