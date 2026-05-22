# Skill — Optimisation des Coûts et Performance des Prompts
> Certifications : Anthropic Claude Code in Action (2026), Claude Code 101 (2026), AWS Certified AI Practitioner (Amazon)

## Objectif
Réduire les coûts et améliorer la performance des prompts LLM — prompt caching, compression de contexte, sélection du modèle, réduction des tokens — sans dégrader la qualité des outputs.

## Leviers d'optimisation

```
LEVIER 1 — PROMPT CACHING (économie jusqu'à 90%)
  Mettre le contenu stable (system prompt, docs longs) en cache
  Déclenchement : > 1024 tokens en cache (Claude)
  TTL : 5 minutes (Anthropic)

LEVIER 2 — SÉLECTION DU MODÈLE
  Opus 4.7   : tâches complexes / nuancées / critiques
  Sonnet 4.6 : équilibre qualité / coût (80% des cas)
  Haiku 4.5  : tâches simples / répétitives / haute volumétrie

LEVIER 3 — RÉDUCTION DES TOKENS
  Supprimer le contexte non pertinent
  Résumer les historiques longs
  Utiliser des formats compacts (YAML > JSON > Markdown long)

LEVIER 4 — BATCH PROCESSING
  Regrouper les requêtes non urgentes
  Anthropic Message Batches API : -50% coût

LEVIER 5 — STREAMING
  Réduire la latence perçue
  Pas d'économie de tokens mais meilleure UX
```

## Implémentation Prompt Caching (Claude)

```typescript
// Activer le cache sur le system prompt long
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 4096,
  system: [
    {
      type: "text",
      // Contenu long (> 1024 tokens) — mis en cache 5 min
      text: longSystemPrompt,
      cache_control: { type: "ephemeral" },
    },
  ],
  messages: [{ role: "user", content: userMessage }],
});

// Métriques cache
console.log("Tokens input    :", response.usage.input_tokens);
console.log("Tokens en cache :", response.usage.cache_read_input_tokens);
console.log("Tokens écrits   :", response.usage.cache_creation_input_tokens);

// Calcul économies
const savings = response.usage.cache_read_input_tokens * 0.9; // 90% moins cher
```

## Matrice de sélection du modèle

| Type de tâche | Modèle recommandé | Justification |
|---|---|---|
| Orchestration workflow complexe | Opus 4.7 | Raisonnement multi-étapes |
| Rédaction US / features | Sonnet 4.6 | Qualité suffisante, rapide |
| Extraction / classification | Haiku 4.5 | Tâche simple, volume élevé |
| Analyse code complexe | Opus 4.7 | Nuance et précision |
| Résumé de documents | Sonnet 4.6 | Bon équilibre |
| Validation de format | Haiku 4.5 | Règles explicites, rapide |

## Compression de contexte

```python
COMPRESSION_PROMPT = """
Résume la conversation ci-dessous en conservant UNIQUEMENT :
- Les décisions prises (format : "DÉCISION : ...")
- Les informations factuelles clés (noms, dates, chiffres)
- Le contexte pour la prochaine action

Maximum 200 tokens. Supprime : salutations, répétitions,
explications de processus déjà connus.

CONVERSATION :
{conversation_history}
"""
```

## Calculateur de coûts

```python
# Tarifs Claude Sonnet 4.6 (indicatifs — vérifier anthropic.com)
PRICE_INPUT  = 3.0   # $/MTok
PRICE_CACHE_READ  = 0.3   # $/MTok (90% moins cher)
PRICE_CACHE_WRITE = 3.75  # $/MTok (+25% première écriture)
PRICE_OUTPUT = 15.0  # $/MTok

def estimate_cost(input_tokens, cache_read, cache_write, output_tokens):
    cost = (
        (input_tokens / 1_000_000) * PRICE_INPUT +
        (cache_read / 1_000_000) * PRICE_CACHE_READ +
        (cache_write / 1_000_000) * PRICE_CACHE_WRITE +
        (output_tokens / 1_000_000) * PRICE_OUTPUT
    )
    return round(cost, 4)
```

## Livrables
- Implémentation prompt caching opérationnelle
- Matrice de sélection modèle documentée
- Script de compression de contexte
- Calculateur de coûts adapté

## Format de sortie
Précise : volume de requêtes (mensuel), longueur du system prompt, type de tâche, budget cible.
