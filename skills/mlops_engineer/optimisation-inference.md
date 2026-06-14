# Skill — LLM Inference Optimization
> Certifications: Databricks Certified ML Professional · NVIDIA Deep Learning

## Objective
Reduce LLM inference latency and cost without significant quality degradation.

## Quantization techniques

### INT8 / INT4 (GPTQ, AWQ, GGUF)
```python
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
import torch

# 4-bit quantization (BitsAndBytes)
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True  # QLoRA
)
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.1-8B", quantization_config=bnb_config)
```

| Format | Memory reduction | Quality loss | Speed |
|---|---|---|---|
| FP16 | 50% vs FP32 | None | +2x |
| INT8 | 75% vs FP32 | ~1% | +2-3x |
| INT4 (NF4) | 87.5% vs FP32 | ~2-3% | +3-4x |
| GGUF Q4_K_M | 87.5% vs FP32 | ~3-5% | +4-6x (CPU) |

## ONNX — Portability and optimization
```python
from optimum.onnxruntime import ORTModelForCausalLM
from transformers import AutoTokenizer

# Convert and optimize with ONNX Runtime
model = ORTModelForCausalLM.from_pretrained("gpt2", export=True)
tokenizer = AutoTokenizer.from_pretrained("gpt2")

# 2-3x faster on CPU than native PyTorch
inputs = tokenizer("Hello", return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=50)
```

## Batching techniques

### Continuous Batching (vLLM)
- Process several requests simultaneously without waiting for all to finish
- Throughput multiplied by 5-10x vs naive batching
- Enabled by default in vLLM

### Speculative Decoding
- A small "draft" model generates several tokens
- The large model verifies in a single pass
- 2-3x faster with no quality loss

## Prompt Caching (Anthropic)
```python
# Cache the first 1024+ tokens of the prompt
messages = [{
    "role": "user",
    "content": [
        {"type": "text", "text": very_long_context, "cache_control": {"type": "ephemeral"}},
        {"type": "text", "text": user_question}
    ]
}]
# Savings: up to 90% of the cost on repeated calls with the same context
```

## KV Cache Management
- Increase `--max-num-seqs` for more concurrent requests
- `--gpu-memory-utilization 0.9` to maximize the KV cache
- Eviction policies: LRU for long conversations

## Deliverables
- Before/after benchmark (p50/p95 latency, cost/request, quality)
- Recommended optimal configuration
- Quality/performance/cost trade-off report

## Output format
Specify: model · available GPU (VRAM) · latency constraint · volume · budget
