# Skill — NLP & Large Language Models
> Certifications : DeepLearning.AI NLP Specialization · HuggingFace NLP Course · IBM Data Science

## Objectif
Construire des solutions NLP et LLM pour l'extraction d'information, la classification de texte, la génération et l'analyse sémantique.

## Tâches NLP et approches 2026

### Traitement du texte (preprocessing)
```python
import re
from transformers import AutoTokenizer

# Nettoyage basique
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Tokenisation HuggingFace
tokenizer = AutoTokenizer.from_pretrained("camembert-base")
tokens = tokenizer("Bonjour le monde", return_tensors="pt", padding=True)
```

### Classification de texte
```python
from transformers import pipeline

# Zero-shot (sans entraînement)
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
result = classifier(
    "Ce produit est excellent !",
    candidate_labels=["positif", "négatif", "neutre"]
)

# Fine-tuning sur données custom
# → Voir skill deep-learning.md pour le code Trainer API
```

### Extraction d'information (NER)
```python
ner = pipeline("ner", model="Jean-Baptiste/roberta-large-ner-french",
               aggregation_strategy="simple")
entities = ner("Claude Monet a peint à Giverny en Seine-Maritime.")
# → [{'entity_group': 'PER', 'word': 'Claude Monet'}, {'entity_group': 'LOC', 'word': 'Giverny'}]
```

### Embeddings et recherche sémantique
```python
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

model = SentenceTransformer('paraphrase-multilingual-mpnet-base-v2')

# Encoder des documents
docs = ["Document 1...", "Document 2..."]
embeddings = model.encode(docs, normalize_embeddings=True)

# Index FAISS pour recherche rapide
index = faiss.IndexFlatIP(embeddings.shape[1])
index.add(embeddings)

# Recherche similarité
query = model.encode(["Ma requête"], normalize_embeddings=True)
scores, indices = index.search(query, k=5)
```

## Pipeline RAG (Retrieval-Augmented Generation)
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
llm = ChatAnthropic(model="claude-sonnet-4-6")

# 5. Chain RAG
qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
answer = qa_chain.run("Quelle est la politique de remboursement ?")
```

## Évaluation NLP
| Métrique | Tâche | Description |
|---|---|---|
| Accuracy / F1 | Classification | Standard |
| BLEU | Traduction, génération | N-gram overlap |
| ROUGE | Résumé | Recall n-gram |
| BERTScore | Génération | Similarité sémantique |
| RAGAS | RAG | Faithfulness, relevance |

## Livrables
- Pipeline NLP complet (preprocessing → inférence)
- Modèle fine-tuné + évaluation
- API d'inférence (FastAPI)
- Rapport d'évaluation avec métriques

## Format de sortie
Précise : tâche NLP (classification, NER, génération, RAG) · langue · volume de données · contraintes latence · modèle de base préféré
