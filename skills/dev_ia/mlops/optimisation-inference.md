# Skill — Optimisation de l'Inférence LLM
> Certifications : Databricks Certified ML Professional · NVIDIA Deep Learning

## Objectif
Réduire la latence et le coût d'inférence des LLM sans dégradation significative de la qualité.

## Techniques de quantization

### INT8 / INT4 (GPTQ, AWQ, GGUF)
```python
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
import torch

# Quantization 4-bit (BitsAndBytes)
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True  # QLoRA
)
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.1-8B", quantization_config=bnb_config)
```

| Format | Réduction mémoire | Perte qualité | Vitesse |
|---|---|---|---|
| FP16 | 50% vs FP32 | Nulle | +2x |
| INT8 | 75% vs FP32 | ~1% | +2-3x |
| INT4 (NF4) | 87.5% vs FP32 | ~2-3% | +3-4x |
| GGUF Q4_K_M | 87.5% vs FP32 | ~3-5% | +4-6x (CPU) |

## ONNX — Portabilité et optimisation
```python
from optimum.onnxruntime import ORTModelForCausalLM
from transformers import AutoTokenizer

# Convertir et optimiser avec ONNX Runtime
model = ORTModelForCausalLM.from_pretrained("gpt2", export=True)
tokenizer = AutoTokenizer.from_pretrained("gpt2")

# 2-3x plus rapide sur CPU que PyTorch natif
inputs = tokenizer("Bonjour", return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=50)
```

## Techniques de batching

### Continuous Batching (vLLM)
- Traiter plusieurs requêtes simultanément sans attendre la fin de toutes
- Throughput multiplié par 5-10x vs batching naïf
- Activé par défaut dans vLLM

### Spéculative Decoding
- Un petit modèle "draft" génère plusieurs tokens
- Le grand modèle vérifie en une passe
- 2-3x plus rapide sans perte de qualité

## Prompt Caching (Anthropic)
```python
# Cacher les 1024+ premiers tokens du prompt
messages = [{
    "role": "user",
    "content": [
        {"type": "text", "text": very_long_context, "cache_control": {"type": "ephemeral"}},
        {"type": "text", "text": user_question}
    ]
}]
# Économie : jusqu'à 90% du coût sur les appels répétés avec le même contexte
```

## KV Cache Management
- Augmenter `--max-num-seqs` pour plus de requêtes concurrentes
- `--gpu-memory-utilization 0.9` pour maximiser le KV cache
- Eviction policies : LRU pour les longues conversations

## Livrables
- Benchmark before/after (latence p50/p95, coût/requête, qualité)
- Configuration optimale recommandée
- Rapport trade-off qualité/performance/coût

## Format de sortie
Précise : modèle · GPU disponible (VRAM) · contrainte latence · volume · budget
