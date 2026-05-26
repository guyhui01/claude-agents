# Skill — PIM Augmenté par l'IA (Enrichissement & Classification Automatiques)
> Certifications : Anthropic Claude Code in Action · Akeneo Certified Developer · ISO/IEC 42001:2023

## Objectif
Enrichir automatiquement le catalogue produit par l'IA générative : génération de descriptions marketing, classification automatique dans la taxonomie, traduction assistée, auto-tagging et détection d'anomalies — pour accélérer le time-to-market et réduire les coûts d'enrichissement manuel.

## Cas d'usage IA dans le PIM

```
CAS D'USAGE                         TECHNIQUE IA                 GAIN OPÉRATIONNEL
──────────────────────────────────  ───────────────────────────  ────────────────────────────────
Génération descriptions produit     LLM (Claude, GPT-4o)         80% du temps rédaction économisé
Traduction assistée (post-édition)  MT (DeepL) + LLM correction  60% du coût traduction réduit
Classification automatique          ML classifieur (BERT, Claude) 90% de précision sur familles
Auto-tagging attributs              Vision AI + LLM              Enrichissement images → attributs
Détection doublons                  Similarité embeddings         95% de recall sur les doublons
Génération bullet points            LLM structuré                Format Amazon/marketplace auto
Rédaction alt-text images           Vision LLM (Claude Sonnet)   Accessibilité + SEO automatisés
Vérification cohérence données      LLM as judge                 Détection incohérences ERP/PIM
```

## Prompt de génération de description produit (Claude)

```python
import anthropic

client = anthropic.Anthropic()

def generate_product_description(product: dict, channel: str = "ecommerce") -> dict:
    """
    Génère une description marketing complète à partir des données techniques produit
    """
    prompt = f"""Tu es un expert en rédaction produit pour le canal {channel}.

Génère une description produit professionnelle en français à partir de ces données techniques :
- Nom : {product['nom']}
- Famille : {product['famille']}
- Caractéristiques : {product['specs']}
- Marque : {product['marque']}
- Canal cible : {channel}

Format de sortie JSON :
{{
  "description_courte": "1 phrase percutante, max 160 caractères, bénéfice en premier",
  "description_longue": "3-4 phrases, storytelling produit, bénéfices + caractéristiques clés",
  "bullet_points": ["5 bullet points au format avantage — caractéristique"]
}}

Règles : pas de superlatifs non vérifiables (meilleur, révolutionnaire), pas de majuscules inutiles,
ton professionnel et factuel, inclure les certifications si présentes."""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}]
    )
    return json.loads(message.content[0].text)
```

## Pipeline de classification automatique

```
DONNÉES ENTRANTES (attributs techniques ERP)
          │
          ▼
  Embeddings texte (Claude / text-embedding)
          │
          ▼
  Classifieur (similarity search sur catalogue familles)
          │
          ├──── Score ≥ 0.90 → Attribution automatique ✅
          │
          ├──── Score 0.70-0.89 → Suggestion soumise à validation ⚠️
          │
          └──── Score < 0.70 → Routage vers Data Steward ❌
```

## Gouvernance IA dans le PIM (ISO/IEC 42001)

```
RISQUE                         CONTRÔLE RECOMMANDÉ
─────────────────────────────  ────────────────────────────────────────────────
Hallucination (specs fausses)  Vérification LLM as judge avant publication
Biais de classification        Audit régulier précision/recall par famille
RGPD (données personnelles)    Audit des données transmises au LLM (pas de PII)
Traçabilité                    Flag "généré par IA" sur chaque attribut enrichi
Refus publication si IA seul   Validation humaine obligatoire avant publication
```

## Livrables
- Architecture du pipeline d'enrichissement IA (schéma flux)
- Prompts optimisés par famille produit et canal cible
- Script d'enrichissement automatique (Python + SDK Anthropic)
- Règles de gouvernance IA (seuils de confiance, validation humaine)
- Rapport de performance IA (précision classification, BLEU score traductions)
- Guide opérateur (comment superviser et corriger les enrichissements IA)

## Format de sortie
Précise : **PIM cible** (Akeneo, Pimcore…), **volume de fiches** à enrichir, **cas d'usage prioritaire** (descriptions, classification, traduction…), **langues cibles**, **niveau de validation humaine** souhaité (full auto vs validation obligatoire), **contraintes RGPD** sur les données produit.
