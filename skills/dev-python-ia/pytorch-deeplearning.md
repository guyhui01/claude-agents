# Skill — PyTorch & Deep Learning
> Certifications: DeepLearning.AI Deep Learning Specialization · Fast.ai

## Objective
Implement, train, and evaluate deep learning models with PyTorch.

## Tensors & basic operations
```python
import torch

x = torch.tensor([[1.0, 2.0], [3.0, 4.0]], dtype=torch.float32)
x = x.to("cuda")  # GPU
x.shape, x.dtype, x.device

# Operations
y = torch.matmul(x, x.T)
z = torch.nn.functional.softmax(x, dim=-1)
```

## Standard training loop
```python
model = MyModel().to("cuda")
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4, weight_decay=0.01)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)

for epoch in range(num_epochs):
    model.train()
    for batch in dataloader:
        optimizer.zero_grad()
        outputs = model(batch["input_ids"].to("cuda"))
        loss = criterion(outputs, batch["labels"].to("cuda"))
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        optimizer.step()
        scheduler.step()
```

## Key architectures
- **Transformer**: attention heads, positional encoding, encoder/decoder
- **MLP**: linear layers + activation (GELU, SiLU)
- **CNN**: convolutions for vision
- **RNN / LSTM**: sequences (superseded by transformers in NLP)

## Full mini-Transformer (sequence classification)

```python
import math
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

class PositionalEncoding(nn.Module):
    """Sinusoidal positional encoding (Vaswani et al. 2017)."""
    def __init__(self, d_model: int, max_len: int = 512):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1).float()
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * -(math.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        self.register_buffer("pe", pe.unsqueeze(0))  # (1, max_len, d_model)

    def forward(self, x):
        return x + self.pe[:, : x.size(1)]

class MiniTransformer(nn.Module):
    """Transformer encoder + classification head."""
    def __init__(self, vocab_size: int, d_model: int = 128, nhead: int = 4,
                 num_layers: int = 2, num_classes: int = 2, max_len: int = 256):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.pos_enc = PositionalEncoding(d_model, max_len)
        encoder_layer = nn.TransformerEncoderLayer(
            d_model=d_model, nhead=nhead, dim_feedforward=4 * d_model,
            dropout=0.1, activation="gelu", batch_first=True,
        )
        self.encoder = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
        self.classifier = nn.Linear(d_model, num_classes)

    def forward(self, input_ids: torch.Tensor, attention_mask: torch.Tensor | None = None):
        x = self.embedding(input_ids)            # (B, L, d_model)
        x = self.pos_enc(x)
        key_padding_mask = ~attention_mask.bool() if attention_mask is not None else None
        x = self.encoder(x, src_key_padding_mask=key_padding_mask)
        cls = x.mean(dim=1)                       # mean pooling
        return self.classifier(cls)               # (B, num_classes)

# Minimal DataLoader to demonstrate the full flow
class ToyTextDataset(Dataset):
    def __init__(self, n: int = 256, vocab_size: int = 1000, max_len: int = 32):
        self.input_ids = torch.randint(0, vocab_size, (n, max_len))
        self.labels = torch.randint(0, 2, (n,))
    def __len__(self): return len(self.labels)
    def __getitem__(self, idx):
        return {"input_ids": self.input_ids[idx], "labels": self.labels[idx]}

# Full training loop with validation
device = "cuda" if torch.cuda.is_available() else "cpu"
train_ds, val_ds = ToyTextDataset(2048), ToyTextDataset(256)
train_loader = DataLoader(train_ds, batch_size=32, shuffle=True)
val_loader = DataLoader(val_ds, batch_size=32)

model = MiniTransformer(vocab_size=1000, num_classes=2).to(device)
optimizer = torch.optim.AdamW(model.parameters(), lr=3e-4, weight_decay=0.01)
criterion = nn.CrossEntropyLoss()

for epoch in range(5):
    # --- train ---
    model.train()
    train_loss = 0
    for batch in train_loader:
        optimizer.zero_grad()
        logits = model(batch["input_ids"].to(device))
        loss = criterion(logits, batch["labels"].to(device))
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        optimizer.step()
        train_loss += loss.item()
    # --- validation ---
    model.eval()
    correct = total = 0
    with torch.no_grad():
        for batch in val_loader:
            logits = model(batch["input_ids"].to(device))
            preds = logits.argmax(dim=-1)
            correct += (preds == batch["labels"].to(device)).sum().item()
            total += batch["labels"].size(0)
    print(f"Epoch {epoch}: train_loss={train_loss/len(train_loader):.4f}  val_acc={correct/total:.3f}")
```

## Memory optimization techniques
- **Mixed Precision**: `torch.autocast("cuda", dtype=torch.bfloat16)`
- **Gradient Checkpointing**: reduce VRAM at the cost of compute
- **Batch Accumulation**: simulate large batches on a small GPU

## Deliverables
- Working PyTorch model (forward pass + training loop)
- Loss curves (train / validation)
- Evaluation report on the test set

## Output format
Specify: task (classification, generation, regression) · desired architecture · available GPU · dataset
