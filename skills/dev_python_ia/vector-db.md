# Skill — Vector DB (Pinecone · Qdrant · pgvector · ChromaDB)
> Certifications: DeepLearning.AI RAG · AWS MLS-C01

## Objective
Choose, configure, and query a vector database for RAG pipelines and agents.

## Solution comparison

| Solution | Type | Strengths | Best for |
|---|---|---|---|
| **pgvector** | PostgreSQL extension | SQL integration, no new infra | Projects with existing PostgreSQL |
| **Qdrant** | Open source (Rust) | Very fast, advanced filters, payload | Self-hosted or cloud production |
| **Pinecone** | Managed SaaS | Zero infra, auto-scaling | Quick start, SaaS |
| **Weaviate** | Open source | Multimodal, GraphQL, built-in modules | Multimodal search |
| **ChromaDB** | Open source (Python) | Ultra simple, perfect for prototyping | Local dev, notebooks |

## Qdrant — Full example
```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

client = QdrantClient(url="http://localhost:6333")

# Create a collection
client.create_collection("documents",
    vectors_config=VectorParams(size=3072, distance=Distance.COSINE))

# Index vectors
points = [PointStruct(id=i, vector=embed(chunk), payload={"text": chunk, "source": doc})
          for i, (chunk, doc) in enumerate(chunks)]
client.upsert("documents", points=points)

# Search with a filter
results = client.search("documents", query_vector=embed(query), limit=5,
    query_filter=Filter(must=[FieldCondition(key="source", match=MatchValue(value="report.pdf"))]))
```

## pgvector — Example
```python
# SQL with pgvector
CREATE EXTENSION vector;
CREATE TABLE embeddings (id SERIAL PRIMARY KEY, content TEXT, embedding vector(3072));
SELECT content FROM embeddings ORDER BY embedding <=> $1 LIMIT 5;  -- cosine similarity
```

## Indexing strategies
- **HNSW**: graph index, ultra-fast (recommended for production)
- **IVF**: partitioning, good memory/speed trade-off
- **Flat**: brute force, exact but slow on large volumes

## Deliverables
- Configured and operational vector DB
- Ingestion and search script
- Search latency benchmark (p50, p95, p99)

## Output format
Specify: document volume · embedding dimension · required filters · infra constraint (cloud/self-hosted)
