# Skill — Chain-of-Thought et Raisonnement Guidé (CoT / ReAct)
> Certifications : Anthropic Claude Code in Action (2026), Google Cloud Professional ML Engineer (Google)

## Objectif
Implémenter les techniques de raisonnement guidé — Chain-of-Thought, Tree-of-Thought, ReAct — pour améliorer la qualité et la fiabilité des réponses LLM sur des tâches complexes nécessitant plusieurs étapes de réflexion.

## Chain-of-Thought (CoT) — Patterns

### CoT zéro-shot
```
# Forcer le raisonnement sans exemple
Résous le problème suivant en raisonnant étape par étape
avant de donner ta réponse finale.

PROBLÈME : [PROBLÈME]

Montre ton raisonnement, puis conclus avec "RÉPONSE FINALE : [réponse]"
```

### CoT few-shot
```
Voici comment résoudre ce type de problème :

EXEMPLE 1 :
Problème : Calculer le WSJF d'une feature.
Raisonnement :
  1. Identifier la Valeur Business (BV = 8)
  2. Identifier le Time Criticality (TC = 6)
  3. Identifier le RR/OE (= 5)
  4. Calculer le Cost of Delay : BV + TC + RR/OE = 19
  5. Identifier la taille (Job Size = 3)
  6. WSJF = 19 / 3 = 6.3
Réponse finale : WSJF = 6.3

MAINTENANT : [TON PROBLÈME]
```

### ReAct (Reason + Act)
```
Tu as accès aux outils suivants : [LISTE DES TOOLS]

Pour répondre à la question, utilise ce format :
Pensée : [Que dois-je faire pour résoudre ça ?]
Action : [quel outil utiliser] avec [paramètres]
Observation : [résultat de l'action]
... (répéter si nécessaire)
Pensée finale : [Synthèse]
Réponse : [Réponse finale]

QUESTION : [QUESTION]
```

## Tree-of-Thought (ToT) — Exploration multiple
```
Pour répondre à cette question complexe, explore 3 approches différentes,
évalue chacune, puis sélectionne la meilleure.

QUESTION : [QUESTION]

APPROCHE 1 : [titre]
Raisonnement : [...]
Avantages / Limites : [...]
Score : [1-10]

APPROCHE 2 : [titre]
Raisonnement : [...]
Avantages / Limites : [...]
Score : [1-10]

APPROCHE 3 : [titre]
Raisonnement : [...]
Avantages / Limites : [...]
Score : [1-10]

SÉLECTION : [Approche retenue + justification]
RÉPONSE FINALE : [...]
```

## Quand utiliser quelle technique

| Technique | Quand l'utiliser | Exemple |
|---|---|---|
| CoT zéro-shot | Problème mathématique ou logique | Calcul ROI, WSJF |
| CoT few-shot | Format de sortie précis requis | Rédaction US, critères d'acceptation |
| ReAct | Tâches avec outils / actions | Agents avec tool use |
| ToT | Décisions complexes multi-critères | Choix d'architecture, stratégie |

## Livrables
- Prompts CoT / ReAct / ToT prêts à l'emploi
- Guide de sélection de la technique selon le cas
- Exemples few-shot adaptés au domaine

## Format de sortie
Précise : type de tâche (calcul / décision / rédaction), complexité, outils disponibles (si ReAct).
