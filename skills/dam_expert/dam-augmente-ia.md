# Skill — AI-Augmented DAM (Auto-tagging, Semantic Search, Smart Crop)
> Certifications: Anthropic Claude Code in Action · Cloudinary Media Developer Expert · ISO/IEC 42001:2023

## Objective
Enrich the DAM with artificial intelligence: automatic asset tagging via vision AI, alt-text and description generation, semantic search, smart crop and sensitive-content detection — to speed up asset indexing and improve findability.

## AI use cases in the DAM

```
USE CASE                        AI TECHNIQUE                     EXPECTED EFFECT (to measure via POC)
──────────────────────────────  ───────────────────────────────  ──────────────────────────────────
Photo auto-tagging              Vision AI (Claude, Google Vision) Pre-generated tags submitted for validation
Alt-text generation             Vision LLM (Claude Sonnet)        Automated accessibility + SEO
Asset-type classification       ML classifier (type, angle, use)  Automatic sorting in the taxonomy
People detection                Vision AI + GDPR check            Alert if unauthorized people
Smart Crop                      Saliency detection + face detect  Auto framing for each format
Semantic search                 Vector embeddings                 "smiling woman outdoors" → results
Visual duplicate detection      Perceptual hashing (pHash)        Duplicates even with different name/format
Sensitive-content detection     AI moderation (NSFW, third-party logos) Auto block before validation
Product description generation  Vision LLM on packshots           Marketing description from the photo
```

> ⚠️ **No fabricated relevance %.** Auto-tagging accuracy depends on the **corpus, visual domain and controlled vocabulary**: measure it on a POC (precision/recall per asset type) before any commitment. McKinsey (2023) confirms the strong GenAI potential on content functions, without guaranteeing a universal rate.

## Auto-tagging pipeline (Claude Vision)

```python
import anthropic
import base64
from pathlib import Path

client = anthropic.Anthropic()

def auto_tag_asset(image_path: str, asset_context: dict) -> dict:
    """
    Automatically generate the tags, alt-text and description of an image asset
    """
    with open(image_path, "rb") as f:
        image_data = base64.standard_b64encode(f.read()).decode("utf-8")

    ext_to_media = {".jpg": "image/jpeg", ".png": "image/png",
                    ".webp": "image/webp", ".gif": "image/gif"}
    media_type = ext_to_media.get(Path(image_path).suffix.lower(), "image/jpeg")

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": media_type, "data": image_data},
                },
                {
                    "type": "text",
                    "text": f"""Analyze this digital asset for a professional DAM.
Context: brand={asset_context.get('brand')}, type={asset_context.get('type')}.

Return a structured JSON:
{{
  "tags": ["list", "of", "15", "to", "20", "relevant", "keywords"],
  "alt_text": "Precise image description for accessibility (max 125 chars)",
  "description": "Contextual description for the DAM (2-3 sentences)",
  "asset_type": "packshot|mood|lifestyle|portrait|icon|document|other",
  "dominant_colors": ["#HEX1", "#HEX2", "#HEX3"],
  "persons_detected": true|false,
  "sensitive_content": false
}}
Never invent information not visible in the image."""
                }
            ],
        }]
    )
    return json.loads(message.content[0].text)
```

## Semantic search (vector embeddings)

```python
# RAG architecture for DAM asset search
# Step 1 — Indexing (on each asset creation/update)
def index_asset(asset: dict) -> None:
    text_to_embed = f"{asset['title']} {asset['description']} {' '.join(asset['tags'])}"
    embedding = get_embedding(text_to_embed)  # Via OpenAI Ada / Cohere / Anthropic
    vector_db.upsert(id=asset['id'], vector=embedding, metadata=asset)

# Step 2 — Semantic search
def semantic_search(query: str, top_k: int = 20) -> list:
    query_embedding = get_embedding(query)
    results = vector_db.query(vector=query_embedding, top_k=top_k)
    return [r.metadata for r in results]

# Example query: "smiling woman outdoors with a product"
# → returns the 20 semantically closest assets
```

## AI governance in the DAM (ISO/IEC 42001 + NIST AI RMF + AI Act)

```
AI RISK                         RECOMMENDED CONTROL
──────────────────────────────  ────────────────────────────────────────────────────────
False positives (wrong tags)    Human validation before publishing to the DAM
Bias on people                  Regular diversity testing · Human review if people (NIST: Measure)
GDPR (identifiable people)      Photos with faces never sent to a third party without a legal basis
Transparency (AI Act art. 50)   AI-generated/edited assets → marking (applicable Aug 2, 2026)
Image rights (AI gen)           Mandatory "AI_generated" flag + aigen_ prefix (cf. naming-convention)
Inaccurate alt-text (a11y)      Human review on priority assets (homepage…)
Descriptive hallucination       LLM-as-judge before integration into the DAM
```

- **ISO/IEC 42001:2023** (AIMS) + **NIST AI RMF 1.0** (*Govern/Map/Measure/Manage*): continuous measurement of tagging accuracy and bias.
- **EU AI Act (art. 50)**: from **August 2, 2026**, visuals **generated or manipulated by AI** must be marked (an "AI" label, machine-readable marking). Paired with the `aigen_` naming prefix and the `AI_generated` flag.
- **Principle**: AI **pre-tags and pre-classifies**, the human **validates** — especially on people, rights and publicly exposed assets.

## Deliverables
- AI enrichment pipeline architecture (flow diagram)
- Auto-tagging and alt-text generation scripts (Python + Anthropic SDK)
- Semantic search configuration (vector index, API)
- DAM AI governance rules (human validation, AI flags, GDPR)
- AI performance report (tag precision, search recall, processing time)
- Operator guide (supervise and correct AI enrichments)

## Output format
Specify: **target DAM** (Bynder, AEM Assets, Cloudinary…), **asset types** to enrich (photos, videos…), priority **AI use cases** (tagging, search, alt-text…), **volume** (# assets/day to process), **GDPR constraints** (presence of identifiable people), **desired human-validation level**.

## Anti-patterns
- ❌ **Announcing an unmeasured relevance rate** ("95% tags"): unverifiable → measure precision/recall per asset type on a POC
- ❌ **Auto-tagging published without validation**: wrong tags and bias → human-in-the-loop, especially on people
- ❌ **Sending faces to a third-party service** without a legal basis: GDPR/image-rights risk → prior control
- ❌ **No marking of AI visuals**: AI Act art. 50 non-compliance (Aug 2, 2026) → `AI_generated` flag + `aigen_` prefix
- ❌ **Semantic search without re-indexing** on each asset change: stale results → synchronized vector index
- ❌ **Automatic smart crop without brand control**: a crop cutting off a logo/face → review on sensitive assets
- ❌ **AI alt-text not reviewed on key pages**: degraded accessibility → human review on homepage and critical journeys

## Sources
- **McKinsey** — *The Economic Potential of Generative AI* (June 2023) — GenAI potential on content functions — mckinsey.com
- **ISO/IEC 42001:2023** (AIMS) · **NIST AI RMF 1.0** (Jan. 2023) — AI governance and measurement — iso.org / nist.gov
- **EU AI Act** — Regulation (EU) 2024/1689, **art. 50** transparency for AI-generated/manipulated content (applicable Aug 2, 2026) — artificialintelligenceact.eu
- **Anthropic Claude** (`claude-sonnet-4-6`, vision) — docs.anthropic.com · **GDPR** (EU 2016/679) + **French Civil Code art. 9** (image rights) — cf. `gestion-droits-licences.md`

## See also
- [`taxonomie-assets.md`](taxonomie-assets.md) — controlled vocabularies fed by auto-tagging
- [`naming-convention.md`](naming-convention.md) — `aigen_` prefix for AI-generated assets
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — GDPR, image rights, AI Act
- [`analytics-assets.md`](analytics-assets.md) — auto-tagging reduces no-result searches
- [`../pim_expert/pim-augmente-ia.md`](../pim_expert/pim-augmente-ia.md) — PIM counterpart (enrichment, classification)
- [`../juridique_ia/gouvernance-ethique-ia.md`](../juridique_ia/gouvernance-ethique-ia.md) — ethical framework and AI Act
