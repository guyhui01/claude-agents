# Skill — Deep Learning & Neural Networks
> Certifications: DeepLearning.AI Deep Learning Specialization · IBM Data Science · Azure DP-100

## Objective
Design, train and deploy deep learning models for high-complexity tasks (vision, NLP, time series).

## Fundamental architectures 2026

### Computer vision
| Task | Architecture | Framework |
|---|---|---|
| Image classification | ResNet50, EfficientNet, ViT | PyTorch / Keras |
| Object detection | YOLOv10, RT-DETR | Ultralytics / PyTorch |
| Segmentation | SAM 2 (Segment Anything) | Meta / PyTorch |
| Image generation | Stable Diffusion 3, DALL-E 3 | Diffusers / API |

### NLP & LLMs
| Task | Architecture | Framework |
|---|---|---|
| Text classification | BERT, RoBERTa, CamemBERT | HuggingFace |
| Text generation | GPT-4o, Claude Sonnet 5, Mistral | API / vLLM |
| RAG | Embeddings + Vector DB | LangChain / LlamaIndex |
| Fine-tuning | LoRA / QLoRA | PEFT / Unsloth |

## Standard PyTorch pipeline
```python
import torch
import torch.nn as nn
from torch.utils.data import DataLoader

# Custom dataset
class CustomDataset(torch.utils.data.Dataset):
    def __init__(self, X, y):
        self.X = torch.FloatTensor(X)
        self.y = torch.LongTensor(y)
    def __len__(self): return len(self.X)
    def __getitem__(self, idx): return self.X[idx], self.y[idx]

# Model
class MLP(nn.Module):
    def __init__(self, input_dim, hidden_dim, num_classes):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(hidden_dim, num_classes)
        )
    def forward(self, x): return self.net(x)

# Training loop
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = MLP(128, 256, 10).to(device)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()
```

## Transfer Learning (2026 best practice)
```python
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# Load a pre-trained model
model_name = "camembert-base"  # For French
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=2
)

# Fine-tuning with the Trainer API
from transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    evaluation_strategy='epoch',
    load_best_model_at_end=True
)
```

## Training best practices
- **Mixed precision**: `torch.cuda.amp.autocast()` → 2x faster on GPU
- **Gradient clipping**: avoid gradient explosion (`max_norm=1.0`)
- **Learning rate scheduler**: cosine annealing or reduce on plateau
- **Early stopping**: stop if val_loss stops decreasing after N epochs
- **Experiment tracking**: MLflow or Weights & Biases for each run

## Deliverables
- Trained model (PyTorch .pt or HuggingFace)
- Experimentation notebook with metrics
- Performance report (loss/accuracy curves)
- ONNX-exported model for deployment

## Output format
Specify: data type (image, text, audio, time series) · task · available dataset · GPU constraints · target inference latency
