# Skill — Model Serving (vLLM · TGI · Ollama · BentoML)
> Certifications: Databricks Certified ML Professional · Google Professional DevOps Engineer

## Objective
Serve open-source LLMs in production with high performance and scalability.

## vLLM — High-performance production
```bash
# Start vLLM with an OpenAI-compatible API
docker run --gpus all -p 8000:8000 \
  vllm/vllm-openai:latest \
  --model meta-llama/Llama-3.1-8B-Instruct \
  --max-model-len 8192 \
  --tensor-parallel-size 1 \
  --gpu-memory-utilization 0.85
```

```python
# Use vLLM with the OpenAI client
from openai import AsyncOpenAI

client = AsyncOpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")
response = await client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[{"role": "user", "content": prompt}]
)
```

**vLLM strengths:** PagedAttention (better memory management), continuous batching, ~3-5x faster than naive Hugging Face.

## TGI (Text Generation Inference — Hugging Face)
```bash
docker run --gpus all -p 8080:80 \
  ghcr.io/huggingface/text-generation-inference:latest \
  --model-id mistralai/Mistral-7B-Instruct-v0.3 \
  --max-total-tokens 4096
```

## Ollama — Local dev and edge
```bash
ollama serve                           # Start the server
ollama pull llama3.2:3b                # Download a model
ollama run llama3.2:3b "Hello!"        # Test in the CLI
```

```python
# Ollama API (OpenAI-compatible)
client = AsyncOpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
```

**Ideal for:** local dev, edge AI, no cloud GPU, offline demo.

## Comparison
| Solution | Strengths | GPU required | Use case |
|---|---|---|---|
| vLLM | Maximum performance, batching | Yes (A100+) | High-load production |
| TGI | Native HuggingFace, quantization | Yes | Mid-range production |
| Ollama | Ultra simple, cross-platform | Optional | Local dev, edge |
| BentoML | Multi-model, scalable | Optional | Flexible production |

## Quantization to cut costs
```python
# Load in 4-bit with vLLM
--quantization awq   # AWQ: best quality/speed ratio
--quantization gptq  # GPTQ: compatible with more models
```

## Deliverables
- Serving service deployed and tested
- Throughput benchmark (requests/s, tokens/s)
- Quantization configuration if GPU-constrained
- OpenAI-compatible endpoint (drop-in replacement)

## Output format
Specify: model to serve · available GPU (VRAM) · target load (req/s) · latency constraints · environment (dev/prod)
