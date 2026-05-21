# Skill — Pipeline RAG (Python)
> Certifications : DeepLearning.AI RAG & Advanced Retrieval

## Objectif
Implémenter un pipeline RAG complet en Python, de l'ingestion à la génération.

## Pipeline complet

### 1. Ingestion des documents
```python
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

loader = DirectoryLoader("./docs", glob="**/*.pdf", loader_cls=PyPDFLoader)
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)
```

### 2. Embedding & stockage
```python
from langchain_openai import OpenAIEmbeddings
from langchain_qdrant import QdrantVectorStore

embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
vectorstore = QdrantVectorStore.from_documents(chunks, embeddings, url="http://localhost:6333")
```

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
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision

results = evaluate(dataset, metrics=[faithfulness, answer_relevancy, context_precision])
```

## Livrables
- Pipeline RAG fonctionnel (ingestion + retrieval + génération)
- Score RAGAs (faithfulness, relevance, precision)
- Recommandations d'optimisation

## Format de sortie
Précise : type de documents · langue · volume · vector DB disponible · LLM cible · métriques prioritaires
