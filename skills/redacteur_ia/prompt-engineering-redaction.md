# Skill — Prompt Engineering pour la Rédaction IA
> Certifications : Anthropic Claude Code in Action · HubSpot Content Marketing

## Objectif
Maîtriser l'art du prompt engineering appliqué à la production de contenu écrit pour maximiser la qualité et réduire les itérations.

## Anatomie d'un prompt de rédaction efficace
```
[RÔLE]      → "Tu es un [expert en...] qui [contexte]"
[CONTEXTE]  → Audience, canal, objectif, contraintes
[TÂCHE]     → Action précise à accomplir
[FORMAT]    → Structure attendue, longueur, ton
[EXEMPLES]  → Modèles de référence si pertinents
[CONTRAINTES] → Ce à éviter, limites, style guide
```

## Techniques de prompting avancées

### Few-shot (exemples dans le prompt)
```
"Voici 2 exemples du ton que je veux :
Exemple 1 : [texte de référence]
Exemple 2 : [texte de référence]
Maintenant écris [nouvelle tâche] avec ce même ton."
```

### Chain of Thought pour le contenu
```
"Avant d'écrire, réfléchis à :
1. Quel est le problème principal du lecteur ?
2. Quel est l'insight contre-intuitif ?
3. Quelle preuve ou exemple rend ça crédible ?
Ensuite écris le post LinkedIn de 10 lignes."
```

### Persona Prompting
```
"Tu es [David Ogilvy / Seth Godin / Ann Handley].
Comment écrirais-tu une landing page pour [produit]
à destination de [audience] ?"
```

## Bibliothèque de méta-prompts réutilisables

### Amélioration d'un texte existant
```
"Améliore ce texte : [texte].
Objectifs :
- Plus percutant en gardant le même sens
- Réduire à [X mots]
- Renforcer le CTA final
- Supprimer les redondances"
```

### Génération de variantes A/B
```
"Génère 3 variantes de [titre / objet / CTA]
pour un test A/B.
Chaque variante doit utiliser une formule différente :
V1 : chiffre, V2 : question, V3 : bénéfice direct."
```

### Déclinaison multi-canal
```
"Adapte ce contenu [source : article / brief] pour :
1. Post LinkedIn (10 lignes, ton expert)
2. Tweet / X (280 caractères, incisif)
3. Email (150 mots, personnel)
4. Résumé SEO meta description (155 caractères)"
```

## Erreurs fréquentes de prompting rédaction
| Erreur | Symptôme | Correction |
|---|---|---|
| Prompt trop vague | Texte générique, sans personnalité | Préciser audience + ton + objectif |
| Pas de contrainte de longueur | Texte trop long ou trop court | Toujours spécifier le nombre de mots |
| Oublier le CTA | Texte sans appel à l'action | Inclure "terminer par un CTA [action]" |
| Ignorer le canal | Ton inadapté (trop formel pour LinkedIn) | Préciser le canal et ses codes |

## Livrables
- Bibliothèque de prompts par type de contenu
- Guide prompt engineering rédaction (1 page)
- Templates réutilisables (Notion / fichier)
- Formation "Prompter pour la rédaction" (1h)

## Format de sortie
Précise : type de contenu · audience · canal · objectif · exemples de référence (style souhaité) · contraintes
