# Skill — NLP & Large Language Models
> Certifications: DeepLearning.AI NLP Specialization · HuggingFace NLP Course · IBM Data Science

## Objective
Build NLP and LLM solutions for information extraction, text classification, generation and semantic analysis.

## NLP tasks and 2026 approaches

### Text preprocessing
```python
import re
from transformers import AutoTokenizer

# Basic cleaning
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# HuggingFace tokenization
tokenizer = AutoTokenizer.from_pretrained("camembert-base")
tokens = tokenizer("Hello world", return_tensors="pt", padding=True)
```

### Text classification
```python
from transformers import pipeline

# Zero-shot (no training)
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
result = classifier(
    "This product is excellent!",
    candidate_labels=["positive", "negative", "neutral"]
)

# Fine-tuning on custom data
# → See skill deep-learning.md for the Trainer API code
```

### Information extraction (NER)
```python
ner = pipeline("ner", model="Jean-Baptiste/roberta-large-ner-french",
               aggregation_strategy="simple")
entities = ner("Claude Monet painted in Giverny.")
# → [{'entity_group': 'PER', 'word': 'Claude Monet'}, {'entity_group': 'LOC', 'word': 'Giverny'}]
```

### Embeddings and semantic search
```python
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

model = SentenceTransformer('paraphrase-multilingual-mpnet-base-v2')

# Encode documents
docs = ["Document 1...", "Document 2..."]
embeddings = model.encode(docs, normalize_embeddings=True)

# FAISS index for fast search
index = faiss.IndexFlatIP(embeddings.shape[1])
index.add(embeddings)

# Similarity search
query = model.encode(["My query"], normalize_embeddings=True)
scores, indices = index.search(query, k=5)
```

## RAG pipeline (Retrieval-Augmented Generation)
```python
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain_anthropic import ChatAnthropic

# 1. Ingestion + chunking
# 2. Embeddings
embeddings = HuggingFaceEmbeddings(model_name="paraphrase-multilingual-mpnet-base-v2")
vectorstore = FAISS.from_texts(chunks, embeddings)

# 3. Retriever
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# 4. LLM
llm = ChatAnthropic(model="claude-sonnet-5")

# 5. RAG chain
qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
answer = qa_chain.run("What is the refund policy?")
```

## NLP evaluation
| Metric | Task | Description |
|---|---|---|
| Accuracy / F1 | Classification | Standard |
| BLEU | Translation, generation | N-gram overlap |
| ROUGE | Summarization | N-gram recall |
| BERTScore | Generation | Semantic similarity |
| RAGAS | RAG | Faithfulness, relevance |

## Deliverables
- Complete NLP pipeline (preprocessing → inference)
- Fine-tuned model + evaluation
- Inference API (FastAPI)
- Evaluation report with metrics

## Output format
Specify: NLP task (classification, NER, generation, RAG) · language · data volume · latency constraints · preferred base model
