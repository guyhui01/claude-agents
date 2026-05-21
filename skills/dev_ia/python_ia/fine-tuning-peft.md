# Skill — Fine-tuning & PEFT (LoRA, QLoRA)
> Certifications : Hugging Face NLP Course · DeepLearning.AI · Azure DP-100

## Objectif
Spécialiser un LLM sur un domaine ou une tâche précise avec un minimum de ressources.

## Quand fine-tuner vs. prompting ?
| Approche | Quand l'utiliser |
|---|---|
| Prompt Engineering | Tâche générique, résultats acceptables |
| RAG | Connaissance récente ou volumineuse |
| Fine-tuning | Style très spécifique, format strict, domaine technique pointu |
| Fine-tuning + RAG | Combo optimal pour expert sectoriel |

## PEFT — Parameter Efficient Fine-Tuning

### LoRA (Low-Rank Adaptation)
- Entraîne seulement des matrices de rang réduit (r=8 à 64)
- Réduit les paramètres entraînables de 99%
- Résultat = adaptateur léger (quelques Mo) appliqué au modèle de base

### QLoRA (Quantized LoRA)
- LoRA + quantification du modèle de base en 4-bit (NF4)
- Fine-tune un modèle 70B sur une seule GPU 48GB
- Légèrement moins performant que LoRA full-precision

## Implémentation avec TRL + PEFT
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

## Format de dataset pour instruction tuning
```json
{"messages": [
    {"role": "system", "content": "Tu es un expert PO Agile."},
    {"role": "user", "content": "Rédige une User Story pour..."},
    {"role": "assistant", "content": "En tant que..."}
]}
```

## Livrables
- Adaptateur LoRA/QLoRA entraîné
- Rapport d'évaluation (loss curves, métriques tâche)
- Script d'inférence avec adaptateur chargé
- Recommandation : fine-tuning utile ou prompting suffisant ?

## Format de sortie
Précise : modèle de base · tâche · taille dataset · GPU disponible · budget compute
