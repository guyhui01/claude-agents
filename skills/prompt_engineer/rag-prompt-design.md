# Skill — Conception de Prompts pour Systèmes RAG
> Certifications : Anthropic Claude Code in Action (2026), AWS Certified AI Practitioner (Amazon)

## Objectif
Concevoir des prompts efficaces pour les architectures RAG (Retrieval-Augmented Generation) — injection du contexte récupéré, instructions de sourçage, gestion des cas sans réponse — pour maximiser la pertinence et la fiabilité des réponses.

## Architecture RAG — Rappel

```
QUERY UTILISATEUR
      │
      ▼
[RETRIEVAL] → Documents pertinents récupérés (top-K)
      │
      ▼
[AUGMENTATION] → Documents injectés dans le prompt
      │
      ▼
[GENERATION] → LLM répond en s'appuyant sur les documents
```

## Template prompt RAG — Standard

```
Tu es [RÔLE]. Tu réponds aux questions en te basant UNIQUEMENT
sur les documents fournis ci-dessous.

RÈGLES STRICTES :
- Réponds uniquement à partir des documents fournis
- Si la réponse n'est pas dans les documents, dis-le clairement
- Cite le document source pour chaque information clé
- Ne jamais inventer ou extrapoler au-delà des documents

DOCUMENTS DE RÉFÉRENCE :
──────────────────────────────────────────────────────────────
[DOC 1 — Source : {nom_fichier} — Date : {date}]
{contenu_document_1}

[DOC 2 — Source : {nom_fichier} — Date : {date}]
{contenu_document_2}
──────────────────────────────────────────────────────────────

QUESTION : {question_utilisateur}

RÉPONSE (avec sources) :
```

## Gestion des cas limites RAG

### Cas 1 — Aucune réponse dans les documents
```
Si les documents ne contiennent pas d'information suffisante :
1. Indique clairement : "Je n'ai pas trouvé d'information sur ce sujet
   dans les documents fournis."
2. Propose ce qui est disponible : "Voici ce que je sais sur un sujet proche..."
3. Suggère : "Pour une réponse complète, consultez [source suggérée]"

NE JAMAIS inventer une réponse plausible sans base documentaire.
```

### Cas 2 — Informations contradictoires entre documents
```
Si les documents présentent des informations contradictoires :
1. Signale la contradiction : "Attention, les sources diffèrent sur ce point :"
2. Présente chaque version avec sa source
3. Ne tranche pas arbitrairement
```

## Optimisation RAG — Prompts de chunking

```python
# Prompt pour améliorer la qualité des chunks au moment de l'indexation
CHUNKING_PROMPT = """
Tu vas découper ce document en passages autonomes pour une base RAG.
Chaque passage doit :
- Être auto-suffisant (compréhensible sans contexte externe)
- Contenir 150-300 tokens
- Commencer par une phrase-contexte si le sujet change
- Préserver les tableaux et listes intacts

Document à découper :
{document}
"""
```

## Métriques de qualité RAG

| Métrique | Description | Outil |
|---|---|---|
| Faithfulness | Réponse fidèle aux documents | RAGAs |
| Answer Relevancy | Réponse pertinente par rapport à la question | RAGAs |
| Context Precision | Documents récupérés réellement utiles | RAGAs |
| Context Recall | Documents pertinents non manqués | RAGAs |

## Livrables
- Template prompt RAG standard
- Variantes pour cas limites (no answer, contradictions)
- Prompt de chunking optimisé
- Plan d'évaluation RAG (métriques)

## Format de sortie
Précise : domaine de la base RAG, type de documents, longueur des chunks, cas limites fréquents.
