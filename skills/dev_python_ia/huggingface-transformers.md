# Skill — Hugging Face Transformers
> Certifications: Hugging Face NLP Course · DeepLearning.AI

## Objective
Use the Hugging Face ecosystem for inference, fine-tuning, and model deployment.

## Inference pipeline (the fastest path)
```python
from transformers import pipeline

# Text generation
generator = pipeline("text-generation", model="meta-llama/Llama-3.1-8B-Instruct", device="cuda")
result = generator("Explain RAG in 3 sentences:", max_new_tokens=200)

# Classification
classifier = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-sentiment")

# Summarization
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
```

## Tokenizer & Model (fine-grained control)
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

# Load a public dataset
ds = load_dataset("squad", split="train[:1000]")

# Create a custom dataset
data = {"input": [...], "output": [...]}
custom_ds = Dataset.from_dict(data)
```

## Key models for 2026
| Category | Recommended models |
|---|---|
| General-purpose LLM | Llama 3.3 70B · Mistral Large · Qwen 2.5 72B |
| Small / edge LLM | Phi-3.5 · Gemma 2 9B · Llama 3.2 3B |
| Embedding | bge-m3 · e5-mistral-7b · text-embedding-3-large |
| Code | DeepSeek-Coder-V2 · Qwen2.5-Coder |
| Vision | LLaVA · InternVL2 · Qwen2-VL |

## Deliverables
- Working inference script
- Configured and tested pipeline
- Performance benchmark (latency, quality)

## Output format
Specify: NLP task · desired model or model to recommend · available GPU · RAM/VRAM constraints
