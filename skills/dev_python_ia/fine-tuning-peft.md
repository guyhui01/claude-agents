# Skill — Fine-tuning & PEFT (LoRA, QLoRA)
> Certifications: Hugging Face NLP Course · DeepLearning.AI · Azure DP-100

## Objective
Specialize an LLM for a domain or a precise task with minimal resources.

## When to fine-tune vs. prompt?
| Approach | When to use it |
|---|---|
| Prompt Engineering | Generic task, acceptable results |
| RAG | Recent or large knowledge |
| Fine-tuning | Very specific style, strict format, highly technical domain |
| Fine-tuning + RAG | Optimal combo for a domain expert |

## PEFT — Parameter Efficient Fine-Tuning

### LoRA (Low-Rank Adaptation)
- Trains only low-rank matrices (r=8 to 64)
- Cuts trainable parameters by 99%
- Result = lightweight adapter (a few MB) applied to the base model

### QLoRA (Quantized LoRA)
- LoRA + 4-bit quantization of the base model (NF4)
- Fine-tunes a 70B model on a single 48GB GPU
- Slightly less performant than full-precision LoRA

## Implementation with TRL + PEFT
```python
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer, SFTConfig

# QLoRA config
bnb_config = BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16)

model = AutoModelForCausalLM.from_pretrained(base_model, quantization_config=bnb_config)

lora_config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05, task_type="CAUSAL_LM")

model = get_peft_model(model, lora_config)

trainer = SFTTrainer(model=model, train_dataset=dataset,
    args=SFTConfig(output_dir="./output", num_train_epochs=3, per_device_train_batch_size=4))
trainer.train()
```

## Dataset format for instruction tuning
```json
{"messages": [
    {"role": "system", "content": "You are an expert Agile PO."},
    {"role": "user", "content": "Write a User Story for..."},
    {"role": "assistant", "content": "As a..."}
]}
```

## Deliverables
- Trained LoRA/QLoRA adapter
- Evaluation report (loss curves, task metrics)
- Inference script with the adapter loaded
- Recommendation: is fine-tuning worth it, or is prompting enough?

## Output format
Specify: base model · task · dataset size · available GPU · compute budget
