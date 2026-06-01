# Skill — DAM Augmenté par l'IA (Auto-tagging, Recherche Sémantique, Smart Crop)
> Certifications : Anthropic Claude Code in Action · Cloudinary Media Developer Expert · ISO/IEC 42001:2023

## Objectif
Enrichir le DAM par l'intelligence artificielle : tagging automatique des assets par vision IA, génération d'alt-text et descriptions, recherche sémantique, smart crop et détection de contenu sensible — pour accélérer l'indexation des assets et améliorer leur retrouvabilité.

## Cas d'usage IA dans le DAM

```
CAS D'USAGE                     TECHNIQUE IA                     EFFET ATTENDU (à mesurer par POC)
──────────────────────────────  ───────────────────────────────  ──────────────────────────────────
Auto-tagging photos             Vision AI (Claude, Google Vision) Tags pré-générés soumis à validation
Génération alt-text             Vision LLM (Claude Sonnet)        Accessibilité + SEO automatisés
Classification type d'asset     ML classifieur (type, angle, uso) Tri automatique dans taxonomie
Détection de personnes          Vision AI + RGPD check           Alerte si personnes non autorisées
Smart Crop                      Saliency detection + face detect  Cadrage auto pour chaque format
Recherche sémantique            Embeddings vectoriels             "Femme souriante extérieur" → résultats
Détection de doublons visuels   Perceptual hashing (pHash)       Doublons même si nom/format différent
Détection contenu sensible      Modération IA (NSFW, logos tiers) Blocage automatique avant validation
Génération description produit  Vision LLM sur packshots          Description marketing depuis la photo
```

> ⚠️ **Aucun % de pertinence fabriqué.** La précision de l'auto-tagging dépend du **corpus, du domaine visuel et du vocabulaire contrôlé** : la mesurer sur un POC (précision/recall par type d'asset) avant tout engagement. McKinsey (2023) confirme le fort potentiel GenAI sur les fonctions contenu, sans garantir un taux universel.

## Pipeline d'auto-tagging (Claude Vision)

```python
import anthropic
import base64
from pathlib import Path

client = anthropic.Anthropic()

def auto_tag_asset(image_path: str, asset_context: dict) -> dict:
    """
    Génère automatiquement les tags, alt-text et description d'un asset image
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
                    "text": f"""Analyse cet asset digital pour un DAM professionnel.
Contexte : marque={asset_context.get('brand')}, type={asset_context.get('type')}.

Retourne un JSON structuré :
{{
  "tags": ["liste", "de", "15", "à", "20", "mots-clés", "pertinents"],
  "alt_text": "Description précise de l'image pour accessibilité (max 125 char.)",
  "description": "Description contextuelle pour DAM (2-3 phrases)",
  "asset_type": "packshot|ambiance|lifestyle|portrait|icon|document|other",
  "dominant_colors": ["#HEX1", "#HEX2", "#HEX3"],
  "persons_detected": true|false,
  "sensitive_content": false
}}
Ne jamais inventer d'informations non visibles dans l'image."""
                }
            ],
        }]
    )
    return json.loads(message.content[0].text)
```

## Recherche sémantique (embeddings vectoriels)

```python
# Architecture RAG pour recherche d'assets DAM
# Étape 1 — Indexation (à la création/modification de chaque asset)
def index_asset(asset: dict) -> None:
    text_to_embed = f"{asset['title']} {asset['description']} {' '.join(asset['tags'])}"
    embedding = get_embedding(text_to_embed)  # Via OpenAI Ada / Cohere / Anthropic
    vector_db.upsert(id=asset['id'], vector=embedding, metadata=asset)

# Étape 2 — Recherche sémantique
def semantic_search(query: str, top_k: int = 20) -> list:
    query_embedding = get_embedding(query)
    results = vector_db.query(vector=query_embedding, top_k=top_k)
    return [r.metadata for r in results]

# Requête exemple : "femme souriante en extérieur avec produit"
# → retourne les 20 assets les plus proches sémantiquement
```

## Gouvernance IA dans le DAM (ISO/IEC 42001 + NIST AI RMF + AI Act)

```
RISQUE IA                       CONTRÔLE RECOMMANDÉ
──────────────────────────────  ────────────────────────────────────────────────────────
Faux positifs (tags erronés)    Validation humaine avant publication dans DAM
Biais sur les personnes         Test régulier diversité · Revue humaine si personnes (NIST : Measure)
RGPD (personnes identifiables)  Photos avec visages jamais transmises à un tiers sans base légale
Transparence (AI Act art. 50)   Assets générés/édités par IA → marquage (applicable 2 août 2026)
Droit à l'image (IA gen)        Flag "AI_generated" obligatoire + préfixe aigen_ (cf. naming-convention)
Alt-text inexact (accessib.)    Revue humaine sur assets prioritaires (homepage…)
Hallucination descriptive       LLM as judge avant intégration en DAM
```

- **ISO/IEC 42001:2023** (AIMS) + **NIST AI RMF 1.0** (*Govern/Map/Measure/Manage*) : mesure continue de la précision du tagging et des biais.
- **AI Act UE (art. 50)** : à partir du **2 août 2026**, les visuels **générés ou manipulés par IA** doivent être marqués (label « IA », marquage machine-readable). Couplé au préfixe `aigen_` du nommage et au flag `AI_generated`.
- **Principe** : l'IA **pré-tague et pré-classe**, l'humain **valide** — surtout sur les personnes, les droits et les assets exposés publiquement.

## Livrables
- Architecture du pipeline d'enrichissement IA (schéma flux)
- Scripts d'auto-tagging et de génération d'alt-text (Python + SDK Anthropic)
- Configuration de la recherche sémantique (index vectoriel, API)
- Règles de gouvernance IA DAM (validation humaine, flags IA, RGPD)
- Rapport de performance IA (précision tags, recall recherche, temps traitement)
- Guide opérateur (superviser et corriger les enrichissements IA)

## Format de sortie
Précise : **DAM cible** (Bynder, AEM Assets, Cloudinary…), **types d'assets** à enrichir (photos, vidéos…), **cas d'usage IA prioritaires** (tagging, search, alt-text…), **volumétrie** (nb assets/jour à traiter), **contraintes RGPD** (présence de personnes identifiables), **niveau de validation humaine** souhaité.

## Anti-patterns
- ❌ **Annoncer un taux de pertinence non mesuré** (« 95 % tags ») : non vérifiable → mesurer précision/recall par type d'asset sur un POC
- ❌ **Auto-tagging publié sans validation** : tags erronés et biais → human-in-the-loop, surtout sur les personnes
- ❌ **Transmettre des visages à un service tiers** sans base légale : risque RGPD/droit à l'image → contrôle préalable
- ❌ **Pas de marquage des visuels IA** : non-conformité AI Act art. 50 (2 août 2026) → flag `AI_generated` + préfixe `aigen_`
- ❌ **Recherche sémantique sans réindexation** à chaque modification d'asset : résultats périmés → index vectoriel synchronisé
- ❌ **Smart crop automatique sans contrôle brand** : recadrage coupant un logo/visage → revue sur assets sensibles
- ❌ **Alt-text IA non revu sur les pages clés** : accessibilité dégradée → revue humaine sur homepage et parcours critiques

## Sources
- **McKinsey** — *The Economic Potential of Generative AI* (juin 2023) — potentiel GenAI sur les fonctions contenu — mckinsey.com
- **ISO/IEC 42001:2023** (AIMS) · **NIST AI RMF 1.0** (jan. 2023) — gouvernance et mesure IA — iso.org / nist.gov
- **AI Act UE** — Règlement (UE) 2024/1689, **art. 50** transparence des contenus générés/manipulés par IA (applicable 2 août 2026) — artificialintelligenceact.eu
- **Anthropic Claude** (`claude-sonnet-4-6`, vision) — docs.anthropic.com · **RGPD** (UE 2016/679) + **Code civil art. 9** (droit à l'image) — cf. `gestion-droits-licences.md`

## Voir aussi
- [`taxonomie-assets.md`](taxonomie-assets.md) — vocabulaires contrôlés alimentés par l'auto-tagging
- [`naming-convention.md`](naming-convention.md) — préfixe `aigen_` des assets générés par IA
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — RGPD, droit à l'image, AI Act
- [`analytics-assets.md`](analytics-assets.md) — l'auto-tagging réduit les recherches sans résultat
- [`../pim_expert/pim-augmente-ia.md`](../pim_expert/pim-augmente-ia.md) — pendant PIM (enrichissement, classification)
- [`../juridique_ia/gouvernance-ethique-ia.md`](../juridique_ia/gouvernance-ethique-ia.md) — cadre éthique et AI Act
