# Skill — Hugging Face Transformers
> Certifications : Hugging Face NLP Course · DeepLearning.AI

## Objectif
Utiliser l'écosystème Hugging Face pour l'inférence, le fine-tuning et le déploiement de modèles.

## Pipeline d'inférence (le plus rapide)
```python
from transformers import pipeline

# Génération de texte
generator = pipeline("text-generation", model="meta-llama/Llama-3.1-8B-Instruct", device="cuda")
result = generator("Explique le RAG en 3 phrases :", max_new_tokens=200)

# Classification
classifier = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-sentiment")

# Résumé
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
```

## Tokenizer & Model (contrôle fin)
```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.3")
model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.3", torch_dtype=torch.bfloat16, device_map="auto")

inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
with torch.no_grad():
    outputs = model.generate(**inputs, max_new_tokens=512, temperature=0.7)
```

## Datasets
```python
from datasets import load_dataset, Dataset

# Charger un dataset public
ds = load_dataset("squad", split="train[:1000]")

# Créer un dataset custom
data = {"input": [...], "output": [...]}
custom_ds = Dataset.from_dict(data)
```

## Modèles clés 2026
| Catégorie | Modèles recommandés |
|---|---|
| LLM généraliste | Llama 3.3 70B · Mistral Large · Qwen 2.5 72B |
| LLM petit/edge | Phi-3.5 · Gemma 2 9B · Llama 3.2 3B |
| Embedding | bge-m3 · e5-mistral-7b · text-embedding-3-large |
| Code | DeepSeek-Coder-V2 · Qwen2.5-Coder |
| Vision | LLaVA · InternVL2 · Qwen2-VL |

## Livrables
- Script d'inférence fonctionnel
- Pipeline configuré et testé
- Benchmark de performance (latence, qualité)

## Format de sortie
Précise : tâche NLP · modèle souhaité ou à recommander · GPU disponible · contraintes RAM/VRAM
