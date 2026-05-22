# Skill — PyTorch & Deep Learning
> Certifications : DeepLearning.AI Deep Learning Specialization · Fast.ai

## Objectif
Implémenter, entraîner et évaluer des modèles de deep learning avec PyTorch.

## Tensors & opérations de base
```python
import torch

x = torch.tensor([[1.0, 2.0], [3.0, 4.0]], dtype=torch.float32)
x = x.to("cuda")  # GPU
x.shape, x.dtype, x.device

# Opérations
y = torch.matmul(x, x.T)
z = torch.nn.functional.softmax(x, dim=-1)
```

## Boucle d'entraînement standard
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

## Architectures clés
- **Transformer** : attention heads, positional encoding, encoder/decoder
- **MLP** : couches linéaires + activation (GELU, SiLU)
- **CNN** : convolutions pour vision
- **RNN / LSTM** : séquences (remplacé par transformers en NLP)

## Techniques d'optimisation mémoire
- **Mixed Precision** : `torch.autocast("cuda", dtype=torch.bfloat16)`
- **Gradient Checkpointing** : réduire la VRAM au coût de calcul
- **Batch Accumulation** : simuler de grands batches sur petite GPU

## Livrables
- Modèle PyTorch fonctionnel (forward pass + training loop)
- Courbes de loss (train / validation)
- Rapport d'évaluation sur test set

## Format de sortie
Précise : tâche (classification, génération, régression) · architecture souhaitée · GPU disponible · dataset
