# Skill — Prompt Engineering Avancé
> Certifications : DeepLearning.AI Prompt Engineering · Anthropic Claude Code

## Objectif
Rédiger des prompts précis et efficaces pour maximiser la qualité des outputs LLM.

## Techniques fondamentales

### Zero-shot
```
Classifie ce texte en positif, négatif ou neutre : "{text}"
```

### Few-shot (exemples dans le prompt)
```
Voici des exemples de classification :
Texte: "Super produit !" → Positif
Texte: "Déçu par la qualité" → Négatif
Texte: "Livraison en 3 jours" → Neutre
Maintenant classifie : "{text}"
```

### Chain of Thought (CoT)
```
Résous ce problème étape par étape :
1. D'abord, identifie les données connues
2. Ensuite, applique la formule
3. Enfin, vérifie le résultat
Problème : {problem}
```

### ReAct (Reason + Act)
```
Pour répondre à cette question, utilise ce format :
Thought: [ton raisonnement]
Action: [outil à utiliser]
Observation: [résultat de l'action]
... (répète si nécessaire)
Final Answer: [réponse finale]
```

### Tree of Thoughts (ToT)
- Générer plusieurs pistes de raisonnement en parallèle
- Évaluer et sélectionner la meilleure
- Idéal pour les problèmes complexes avec exploration

## Bonnes pratiques Anthropic (Claude)
- Utiliser des balises XML pour structurer : `<context>`, `<instructions>`, `<examples>`
- Placer les instructions AVANT le contenu long
- Être spécifique sur le format de sortie attendu
- Utiliser le system prompt pour le persona et les règles globales
- Prompt Caching : placer le contenu statique en début de prompt

## Structure de prompt recommandée
```xml
<system>
Tu es {persona}. {règles de comportement}.
</system>

<context>
{informations contextuelles}
</context>

<instructions>
{tâche précise avec format de sortie attendu}
</instructions>

<examples>
{1-3 exemples si nécessaire}
</examples>

{input utilisateur}
```

## Évaluation des prompts
- A/B test sur 50+ exemples
- Métriques : précision, recall, format compliance, hallucination rate
- Outil : Promptfoo, LangSmith, Humanloop

## Livrables
- Prompt optimisé avec structure XML
- Rapport de comparaison (baseline vs. optimisé)
- Template réutilisable documenté

## Format de sortie
Précise : tâche · LLM cible · format de sortie attendu · contraintes (longueur, style, langue)
