# Skill — Conception de System Prompts Structurés
> Certifications : Anthropic Claude Code in Action (2026), Claude 101 (2026)

## Objectif
Concevoir des system prompts optimaux pour les LLM — structure, ordre des éléments, précision des instructions, gestion du comportement — pour maximiser la qualité, la cohérence et la prévisibilité des réponses.

## Structure optimale d'un system prompt

```
ORDRE RECOMMANDÉ PAR ANTHROPIC
────────────────────────────────────────────────────────
1. IDENTITÉ      → Qui est l'assistant, son rôle précis
2. CONTEXTE      → Environnement, utilisateur cible, projet
3. PÉRIMÈTRE     → Ce qu'il fait / ne fait pas
4. RÈGLES        → Comportements obligatoires
5. FORMAT        → Structure des réponses
6. EXEMPLES      → Few-shot si nécessaire (optionnel)
────────────────────────────────────────────────────────
Longueur cible : 300-800 tokens
Cache control  : Activer si > 1024 tokens (économie 90%)
```

## Template — System Prompt complet

```
Tu es [RÔLE PRÉCIS ET EXPERTISE].
[Phrase sur les certifications / expérience si pertinent]

Tu assistes [UTILISATEUR / CONTEXTE] dans [DOMAINE PRÉCIS].

## Ce que tu fais
- [CAPACITÉ 1 — précise et actionnable]
- [CAPACITÉ 2]
- [CAPACITÉ 3]

## Ce que tu ne fais pas
- [LIMITE 1] → [Rediriger vers quoi / qui]
- [LIMITE 2]

## Règles de comportement
- Toujours répondre en [LANGUE]
- [RÈGLE SPÉCIFIQUE AU DOMAINE]
- Utiliser le vocabulaire exact de [FRAMEWORK/MÉTHODE]
- Proposer des livrables prêts à [OUTIL CIBLE]
- En cas d'ambiguïté, poser UNE SEULE question avant d'agir

## Format de sortie
[DÉCRIRE PRÉCISÉMENT : longueur, structure, niveau de détail]
[Exemple de structure si pertinent]
```

## Techniques d'écriture avancées

### Contraintes négatives explicites
```
# ❌ Vague
Produis une bonne analyse.

# ✅ Contraint
Produis une analyse de 300-500 mots.
NE PAS inclure : introduction générique, répétitions du brief.
TOUJOURS inclure : 3 recommandations actionnables numérotées.
```

### Instructions conditionnelles
```
Si la demande concerne X → appliquer le format A
Si la demande concerne Y → appliquer le format B
Si l'information manque → poser une question avant d'agir
```

### Ancrage sur un référentiel
```
Utilise EXCLUSIVEMENT le vocabulaire SAFe 6 :
- "Feature" (pas "fonctionnalité")
- "PI Planning" (pas "planification trimestrielle")
- "ART" (pas "équipe programme")
```

## Anti-patterns à éviter

| Anti-pattern | Problème | Correction |
|---|---|---|
| "Tu es un expert IA" | Trop vague | "Tu es un Data Scientist spécialisé en NLP" |
| "Réponds bien" | Non mesurable | "Réponds en < 200 mots, format bullet points" |
| Contexte en fin de prompt | Dilué | Mettre le contexte AVANT les instructions |
| Instructions contradictoires | Comportement imprévisible | Choisir et prioriser |
| Tout dans le user message | Pas de cache possible | Contexte stable → system prompt |

## Checklist de validation

```
☐ L'identité est précise (rôle + expertise)
☐ Le périmètre est délimité (in / out of scope)
☐ Les règles sont mesurables (pas "sois clair")
☐ Le format de sortie est défini (longueur, structure)
☐ Les exemples (si présents) sont représentatifs
☐ Longueur < 800 tokens (ou cache activé si > 1024)
☐ Testé sur 5 cas représentatifs
```

## Livrables
- System prompt structuré et optimisé
- Version annotée avec justifications
- Checklist de validation complétée

## Format de sortie
Précise : rôle de l'agent, domaine, utilisateur cible, outil de destination, contraintes de longueur.
