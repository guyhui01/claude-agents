# Skill — Pipeline RAG (Python)
> Certifications : DeepLearning.AI RAG & Advanced Retrieval

## Objectif
Implémenter un pipeline RAG complet en Python, de l'ingestion à la génération.

## Pipeline complet

### 1. Ingestion des documents
```python
# LangChain v0.2+ : le text_splitter est dans un package séparé
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

loader = DirectoryLoader("./docs", glob="**/*.pdf", loader_cls=PyPDFLoader)
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ". ", " ", ""],  # ordre de priorité
)
chunks = splitter.split_documents(docs)
```

### 2. Embedding & stockage
```python
# Option A : Voyage AI (recommandé en 2026 — meilleur ratio qualité/coût pour le français)
from langchain_voyageai import VoyageAIEmbeddings
embeddings = VoyageAIEmbeddings(model="voyage-3-large", batch_size=128)

# Option B : OpenAI (alternative grand public)
# from langchain_openai import OpenAIEmbeddings
# embeddings = OpenAIEmbeddings(model="text-embedding-3-large")

from langchain_qdrant import QdrantVectorStore
vectorstore = QdrantVectorStore.from_documents(chunks, embeddings, url="http://localhost:6333")
```

> ℹ️ Pour utiliser Claude (Anthropic) comme générateur, les embeddings doivent venir d'un autre provider — Anthropic ne fournit pas d'API d'embeddings native. Voyage AI est leur partenaire officiel recommandé.

### 3. Retrieval avec reranking
```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain_cohere import CohereRerank

base_retriever = vectorstore.as_retriever(search_kwargs={"k": 10})
reranker = CohereRerank(model="rerank-multilingual-v3.0", top_n=4)
retriever = ContextualCompressionRetriever(base_compressor=reranker, base_retriever=base_retriever)
```

### 4. Génération avec sources
```python
from langchain_core.runnables import RunnablePassthrough

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)
```

## Optimisations avancées
- **Hybrid search** : BM25 + vectoriel via EnsembleRetriever
- **Parent-child chunking** : récupérer le parent pour plus de contexte
- **HyDE** : générer un doc hypothétique avant d'embedder la query
- **Multi-query** : générer plusieurs variantes de la query pour plus de recall

## Évaluation avec RAGAs

```python
from datasets import Dataset
from ragas import evaluate
from ragas.metrics import (
    faithfulness,           # le LLM hallucine-t-il par rapport au contexte ?
    answer_relevancy,       # la réponse est-elle pertinente vs la question ?
    context_precision,      # les chunks récupérés sont-ils utiles ?
    context_recall,         # le retrieval a-t-il trouvé toute l'info nécessaire ?
)

# Dataset d'évaluation = liste de questions avec ground truth (à curer manuellement)
eval_data = {
    "question": ["Quelle est la politique de retour ?", "Quel est le délai SLA ?"],
    "answer": [rag_chain.invoke(q) for q in questions],            # généré par le RAG
    "contexts": [[doc.page_content for doc in retriever.invoke(q)] for q in questions],
    "ground_truth": ["30 jours sans condition", "4h ouvrées"],     # référence humaine
}
dataset = Dataset.from_dict(eval_data)

results = evaluate(
    dataset,
    metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
)
print(results)
# {'faithfulness': 0.92, 'answer_relevancy': 0.87, 'context_precision': 0.81, 'context_recall': 0.76}
```

**Seuils de production recommandés** : faithfulness ≥ 0.90 (anti-hallucination), context_recall ≥ 0.80 (couverture). En dessous → revoir le chunking ou le reranking.

## Livrables
- Pipeline RAG fonctionnel (ingestion + retrieval + génération)
- Score RAGAs (faithfulness, relevance, precision)
- Recommandations d'optimisation

## Format de sortie
Précise : type de documents · langue · volume · vector DB disponible · LLM cible · métriques prioritaires
