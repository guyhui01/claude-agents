# Skill — Model Serving (vLLM · TGI · Ollama · BentoML)
> Certifications : Databricks Certified ML Professional · Google Professional DevOps Engineer

## Objectif
Servir des LLM open source en production avec haute performance et scalabilité.

## vLLM — Production haute performance
```bash
# Démarrer vLLM avec API OpenAI-compatible
docker run --gpus all -p 8000:8000 \
  vllm/vllm-openai:latest \
  --model meta-llama/Llama-3.1-8B-Instruct \
  --max-model-len 8192 \
  --tensor-parallel-size 1 \
  --gpu-memory-utilization 0.85
```

```python
# Utiliser vLLM avec le client OpenAI
from openai import AsyncOpenAI

client = AsyncOpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")
response = await client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[{"role": "user", "content": prompt}]
)
```

**Points forts vLLM :** PagedAttention (meilleure gestion mémoire), continuous batching, ~3-5x plus rapide que Hugging Face naïf.

## TGI (Text Generation Inference — Hugging Face)
```bash
docker run --gpus all -p 8080:80 \
  ghcr.io/huggingface/text-generation-inference:latest \
  --model-id mistralai/Mistral-7B-Instruct-v0.3 \
  --max-total-tokens 4096
```

## Ollama — Dev local et edge
```bash
ollama serve                           # Démarrer le serveur
ollama pull llama3.2:3b                # Télécharger un modèle
ollama run llama3.2:3b "Bonjour !"     # Tester en CLI
```

```python
# API Ollama (OpenAI-compatible)
client = AsyncOpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
```

**Idéal pour :** dev local, edge IA, pas de GPU cloud, démo offline.

## Comparatif
| Solution | Points forts | GPU requis | Cas d'usage |
|---|---|---|---|
| vLLM | Performance maximale, batching | Oui (A100+) | Production haute charge |
| TGI | HuggingFace natif, quantization | Oui | Production mid-range |
| Ollama | Ultra simple, multiplateforme | Optionnel | Dev local, edge |
| BentoML | Multi-modèles, scalable | Optionnel | Production flexible |

## Quantization pour réduire les coûts
```python
# Charger en 4-bit avec vLLM
--quantization awq   # AWQ : meilleur ratio qualité/vitesse
--quantization gptq  # GPTQ : compatible plus de modèles
```

## Livrables
- Service de serving déployé et testé
- Benchmark throughput (requêtes/s, tokens/s)
- Configuration quantization si contrainte GPU
- Endpoint compatible OpenAI (drop-in replacement)

## Format de sortie
Précise : modèle à servir · GPU disponible (VRAM) · charge cible (req/s) · contraintes latence · environnement (dev/prod)
