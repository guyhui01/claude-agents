# Skill — Architecture RAG (Retrieval-Augmented Generation)
> Certifications : AWS MLS-C01 · Google Professional ML Engineer · DeepLearning.AI RAG

## Objectif
Concevoir et optimiser un pipeline RAG pour ancrer les réponses LLM dans des données fiables.

## Pipeline RAG standard
```
Documents → Chunking → Embedding → Vector Store
                                        ↓
Query → Embedding → Retrieval → Reranking → LLM → Réponse
```

## Étapes détaillées

### 1. Ingestion
- Formats supportés : PDF, DOCX, HTML, Markdown, JSON, CSV
- Extraction : LlamaParse, Unstructured, PDFPlumber
- Nettoyage : suppression headers/footers, normalisation

### 2. Chunking (découpage)
| Stratégie | Taille | Idéal pour |
|---|---|---|
| Fixed size | 512-1024 tokens | Documents homogènes |
| Recursive | Variable | Texte structuré |
| Semantic | Variable | Précision maximale |
| Parent-child | Hiérarchique | Context riche + précision |

### 3. Embedding
- **OpenAI** text-embedding-3-large (3072 dim) — qualité maximale
- **Cohere** embed-v3 — multilingue excellent
- **HuggingFace** bge-m3 — open source, multilingue

### 4. Vector Store
- pgvector (PostgreSQL) · Qdrant · Pinecone · Weaviate

### 5. Retrieval
- **Similarity search** : cosine similarity de base
- **Hybrid search** : vectoriel + BM25 (keyword) → meilleure précision
- **MMR** (Maximal Marginal Relevance) : diversité des résultats

### 6. Reranking (optionnel mais recommandé)
- Cohere Rerank · CrossEncoder (HuggingFace)
- Améliore la précision de 10-30%

### Advanced RAG patterns
- **HyDE** (Hypothetical Document Embeddings) : générer un doc hypothétique avant d'embedder la query
- **RAG Fusion** : multi-query + fusion des résultats
- **Self-RAG** : l'agent décide s'il a besoin de retrieval
- **CRAG** (Corrective RAG) : évaluation de la pertinence des chunks récupérés

## Métriques de qualité RAG
Context Precision · Context Recall · Faithfulness · Answer Relevance (via RAGAs)

## Livrables
- Diagramme du pipeline RAG
- Choix justifiés (chunking, embedding, vector DB, reranking)
- Rapport RAGAs (métriques de qualité)
- Recommandations d'optimisation

## Format de sortie
Précise : type de documents · volume (nb docs, taille moy.) · langue · contraintes latence · LLM cible
