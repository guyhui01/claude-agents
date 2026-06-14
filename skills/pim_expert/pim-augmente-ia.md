# Skill — AI-Augmented PIM (Automatic Enrichment & Classification)
> Certifications: Anthropic Claude Code in Action · Akeneo Certified Developer · ISO/IEC 42001:2023

## Objective
Automatically enrich the product catalog with generative AI: marketing description generation, automatic taxonomy classification, assisted translation, auto-tagging and anomaly detection — to speed up time-to-market and cut manual enrichment costs.

## AI use cases in the PIM

```
USE CASE                            AI TECHNIQUE                 EXPECTED EFFECT (to measure via POC)
──────────────────────────────────  ───────────────────────────  ────────────────────────────────
Product description generation      LLM (Claude, GPT-4o)         Cuts first-draft writing time
Assisted translation (post-editing) MT (DeepL) + LLM correction  Cuts cost vs human translation
Automatic classification            ML classifier (BERT, Claude) Pre-classification gated by threshold
Attribute auto-tagging              Vision AI + LLM              Extract attributes from the image
Duplicate detection                 Embedding similarity          Pre-detect duplicates to validate
Bullet-point generation             Structured LLM               Auto Amazon/marketplace format
Image alt-text writing              Vision LLM (Claude Sonnet)   Automated accessibility + SEO
Data consistency checking           LLM as judge                 Detect ERP/PIM inconsistencies
```

> ⚠️ **No fabricated % gains.** McKinsey (*The economic potential of generative AI*, 2023) places marketing/content **among the 4 functions with the highest GenAI potential**, but real gains (time, precision, recall) **depend on the catalog, language and source data quality**: measure them on a **POC** before any quantified commitment to a client (cf. rule: no unsourced figures).

## Product description generation prompt (Claude)

```python
import anthropic

client = anthropic.Anthropic()

def generate_product_description(product: dict, channel: str = "ecommerce") -> dict:
    """
    Generate a complete marketing description from the product's technical data
    """
    prompt = f"""You are a product copywriting expert for the {channel} channel.

Generate a professional product description in English from this technical data:
- Name: {product['name']}
- Family: {product['family']}
- Specs: {product['specs']}
- Brand: {product['brand']}
- Target channel: {channel}

JSON output format:
{{
  "short_description": "1 punchy sentence, max 160 characters, benefit first",
  "long_description": "3-4 sentences, product storytelling, benefits + key features",
  "bullet_points": ["5 bullet points in the advantage — feature format"]
}}

Rules: no unverifiable superlatives (best, revolutionary), no needless capitals,
professional factual tone, include certifications if present."""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}]
    )
    return json.loads(message.content[0].text)
```

## Automatic classification pipeline

```
INBOUND DATA (ERP technical attributes)
          │
          ▼
  Text embeddings (Claude / text-embedding)
          │
          ▼
  Classifier (similarity search over the families catalog)
          │
          ├──── Score ≥ 0.90 → Automatic assignment ✅
          │
          ├──── Score 0.70-0.89 → Suggestion submitted for validation ⚠️
          │
          └──── Score < 0.70 → Routed to a Data Steward ❌
```

## AI governance in the PIM (ISO/IEC 42001 + NIST AI RMF + AI Act)

```
RISK                           RECOMMENDED CONTROL
─────────────────────────────  ────────────────────────────────────────────────
Hallucination (false specs)    LLM-as-judge check + human review before publishing
Classification bias            Regular precision/recall audit per family (NIST AI RMF: Measure)
GDPR (personal data)           Audit data sent to the LLM (no PII) + legal basis
Transparency (AI Act art. 50)  AI-generated product content → marking/traceability (applicable Aug 2, 2026)
Traceability                   "AI-generated" flag on each enriched attribute (provenance)
No AI-only publishing          Mandatory human validation (human-in-the-loop) before publishing
```

- **ISO/IEC 42001:2023** (AIMS): AI management system — policy, roles, lifecycle of the enrichment models.
- **NIST AI RMF 1.0**: *Govern / Map / Measure / Manage* functions applied to enrichment quality (continuous precision/recall measurement).
- **EU AI Act (art. 50)**: from **August 2, 2026**, a transparency obligation on AI-generated content — relevant for published product descriptions/visuals. Human validation remains the main safeguard (AI **proposes**, the human **decides**).

## Deliverables
- AI enrichment pipeline architecture (flow diagram)
- Optimized prompts per product family and target channel
- Automatic enrichment script (Python + Anthropic SDK)
- AI governance rules (confidence thresholds, human validation)
- AI performance report (classification precision, translation BLEU score)
- Operator guide (how to supervise and correct AI enrichments)

## Output format
Specify: **target PIM** (Akeneo, Pimcore…), **volume of records** to enrich, **priority use case** (descriptions, classification, translation…), **target languages**, **desired human-validation level** (full auto vs mandatory validation), **GDPR constraints** on the product data.

## Anti-patterns
- ❌ **Promising an unmeasured % gain** ("80% of the time") to a client: unverifiable → a range from a POC on the real catalog
- ❌ **Full-auto publishing without human validation**: spec hallucinations go live → human-in-the-loop, especially below the confidence threshold
- ❌ **A single auto-assignment threshold** for all families: variable precision → thresholds calibrated per family
- ❌ **Sending personal data to the LLM** (reviews, contacts) without control: GDPR risk → upstream PII filtering
- ❌ **No marking of AI-generated content**: AI Act art. 50 non-compliance (Aug 2, 2026) → provenance flag
- ❌ **Measuring translation by BLEU alone**: a partial metric → complement with chrF/COMET + native review
- ❌ **Duplicated AI descriptions** across similar products: SEO penalty → controlled variation via the prompt

## Sources
- **McKinsey** — *The Economic Potential of Generative AI* (June 2023): marketing/content among the 4 highest-potential functions — mckinsey.com
- **ISO/IEC 42001:2023** (AIMS) · **NIST AI RMF 1.0** (Jan. 2023) — governance and measurement of AI systems — iso.org / nist.gov
- **EU AI Act** — Regulation (EU) 2024/1689, **art. 50** transparency for AI-generated content (applicable Aug 2, 2026) — artificialintelligenceact.eu
- **Anthropic Claude** (model `claude-sonnet-4-6`, vision + text) — docs.anthropic.com · **BLEU** (Papineni 2002) / chrF / COMET — MT evaluation

## See also
- [`enrichissement-produit.md`](enrichissement-produit.md) — enrichment workflow accelerated by AI
- [`localisation-i18n.md`](localisation-i18n.md) — assisted translation (post-editing)
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — measuring generated-content quality
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — data + AI governance
- [`../dam_expert/dam-augmente-ia.md`](../dam_expert/dam-augmente-ia.md) — DAM counterpart (auto-tagging, vision)
- [`../juridique_ia/gouvernance-ethique-ia.md`](../juridique_ia/gouvernance-ethique-ia.md) — ethical framework and AI Act
