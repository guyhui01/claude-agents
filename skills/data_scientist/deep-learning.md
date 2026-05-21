# Skill — Deep Learning & Réseaux de Neurones
> Certifications : DeepLearning.AI Deep Learning Specialization · IBM Data Science · Azure DP-100

## Objectif
Concevoir, entraîner et déployer des modèles de deep learning pour les tâches à haute complexité (vision, NLP, séries temporelles).

## Architectures fondamentales 2026

### Vision par ordinateur
| Tâche | Architecture | Framework |
|---|---|---|
| Classification image | ResNet50, EfficientNet, ViT | PyTorch / Keras |
| Détection d'objets | YOLOv10, RT-DETR | Ultralytics / PyTorch |
| Segmentation | SAM 2 (Segment Anything) | Meta / PyTorch |
| Génération d'images | Stable Diffusion 3, DALL-E 3 | Diffusers / API |

### NLP & LLMs
| Tâche | Architecture | Framework |
|---|---|---|
| Classification texte | BERT, RoBERTa, CamemBERT | HuggingFace |
| Génération texte | GPT-4o, Claude 3.5, Mistral | API / vLLM |
| RAG | Embeddings + Vector DB | LangChain / LlamaIndex |
| Fine-tuning | LoRA / QLoRA | PEFT / Unsloth |

## Pipeline PyTorch standard
```python
import torch
import torch.nn as nn
from torch.utils.data import DataLoader

# Dataset custom
class CustomDataset(torch.utils.data.Dataset):
    def __init__(self, X, y):
        self.X = torch.FloatTensor(X)
        self.y = torch.LongTensor(y)
    def __len__(self): return len(self.X)
    def __getitem__(self, idx): return self.X[idx], self.y[idx]

# Modèle
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

## Transfer Learning (meilleure pratique 2026)
```python
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# Charger un modèle pré-entraîné
model_name = "camembert-base"  # Pour le français
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=2
)

# Fine-tuning avec Trainer API
from transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    evaluation_strategy='epoch',
    load_best_model_at_end=True
)
```

## Bonnes pratiques d'entraînement
- **Mixed precision** : `torch.cuda.amp.autocast()` → 2x plus rapide sur GPU
- **Gradient clipping** : éviter l'explosion des gradients (`max_norm=1.0`)
- **Learning rate scheduler** : cosine annealing ou reduce on plateau
- **Early stopping** : arrêt si val_loss ne descend plus après N epochs
- **Experiment tracking** : MLflow ou Weights & Biases pour chaque run

## Livrables
- Modèle entraîné (PyTorch .pt ou HuggingFace)
- Notebook d'expérimentation avec métriques
- Rapport de performance (courbes loss/accuracy)
- Modèle exporté ONNX pour déploiement

## Format de sortie
Précise : type de données (image, texte, audio, time series) · tâche · dataset disponible · contraintes GPU · latence cible en inférence
