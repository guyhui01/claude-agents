# Skill — Vector DB (Pinecone · Qdrant · pgvector · ChromaDB)
> Certifications : DeepLearning.AI RAG · AWS MLS-C01

## Objectif
Choisir, configurer et requêter une base de données vectorielle pour les pipelines RAG et agents.

## Comparatif des solutions

| Solution | Type | Points forts | Idéal pour |
|---|---|---|---|
| **pgvector** | Extension PostgreSQL | Intégration SQL, pas de nouvelle infra | Projets avec PostgreSQL existant |
| **Qdrant** | Open source (Rust) | Très performant, filtres avancés, payload | Production self-hosted ou cloud |
| **Pinecone** | SaaS managé | Zéro infra, scalable automatiquement | Démarrage rapide, SaaS |
| **Weaviate** | Open source | Multimodal, GraphQL, modules intégrés | Recherche multimodale |
| **ChromaDB** | Open source (Python) | Ultra simple, parfait pour prototypage | Dev local, notebooks |

## Qdrant — Exemple complet
```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

client = QdrantClient(url="http://localhost:6333")

# Créer une collection
client.create_collection("documents",
    vectors_config=VectorParams(size=3072, distance=Distance.COSINE))

# Indexer des vecteurs
points = [PointStruct(id=i, vector=embed(chunk), payload={"text": chunk, "source": doc})
          for i, (chunk, doc) in enumerate(chunks)]
client.upsert("documents", points=points)

# Recherche avec filtre
results = client.search("documents", query_vector=embed(query), limit=5,
    query_filter=Filter(must=[FieldCondition(key="source", match=MatchValue(value="report.pdf"))]))
```

## pgvector — Exemple
```python
# SQL avec pgvector
CREATE EXTENSION vector;
CREATE TABLE embeddings (id SERIAL PRIMARY KEY, content TEXT, embedding vector(3072));
SELECT content FROM embeddings ORDER BY embedding <=> $1 LIMIT 5;  -- cosine similarity
```

## Stratégies d'indexation
- **HNSW** : index de graphe, ultra-rapide (recommandé production)
- **IVF** : partitionnement, bon compromis mémoire/vitesse
- **Flat** : force brute, exact mais lent sur grands volumes

## Livrables
- Vector DB configurée et opérationnelle
- Script d'ingestion et de recherche
- Benchmark latence de recherche (p50, p95, p99)

## Format de sortie
Précise : volume de documents · dimension des embeddings · filtres nécessaires · contrainte infra (cloud/self-hosted)
