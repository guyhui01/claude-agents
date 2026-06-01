# Skill — PIM Augmenté par l'IA (Enrichissement & Classification Automatiques)
> Certifications : Anthropic Claude Code in Action · Akeneo Certified Developer · ISO/IEC 42001:2023

## Objectif
Enrichir automatiquement le catalogue produit par l'IA générative : génération de descriptions marketing, classification automatique dans la taxonomie, traduction assistée, auto-tagging et détection d'anomalies — pour accélérer le time-to-market et réduire les coûts d'enrichissement manuel.

## Cas d'usage IA dans le PIM

```
CAS D'USAGE                         TECHNIQUE IA                 EFFET ATTENDU (à mesurer par POC)
──────────────────────────────────  ───────────────────────────  ────────────────────────────────
Génération descriptions produit     LLM (Claude, GPT-4o)         Réduit le temps de 1ʳᵉ rédaction
Traduction assistée (post-édition)  MT (DeepL) + LLM correction  Réduit le coût vs traduction humaine
Classification automatique          ML classifieur (BERT, Claude) Pré-classement soumis à seuil
Auto-tagging attributs              Vision AI + LLM              Extraction d'attributs depuis l'image
Détection doublons                  Similarité embeddings         Pré-détection des doublons à valider
Génération bullet points            LLM structuré                Format Amazon/marketplace auto
Rédaction alt-text images           Vision LLM (Claude Sonnet)   Accessibilité + SEO automatisés
Vérification cohérence données      LLM as judge                 Détection incohérences ERP/PIM
```

> ⚠️ **Pas de % de gain fabriqué.** McKinsey (*The economic potential of generative AI*, 2023) situe le marketing/contenu **parmi les 4 fonctions à plus fort potentiel GenAI**, mais les gains réels (temps, précision, recall) **dépendent du catalogue, de la langue et de la qualité des données source** : les mesurer sur un **POC** avant tout engagement chiffré devant un client (cf. règle : aucun chiffre non sourcé).

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

## Gouvernance IA dans le PIM (ISO/IEC 42001 + NIST AI RMF + AI Act)

```
RISQUE                         CONTRÔLE RECOMMANDÉ
─────────────────────────────  ────────────────────────────────────────────────
Hallucination (specs fausses)  Vérification LLM as judge + relecture humaine avant publication
Biais de classification        Audit régulier précision/recall par famille (NIST AI RMF : Measure)
RGPD (données personnelles)    Audit des données transmises au LLM (pas de PII) + base légale
Transparence (AI Act art. 50)  Contenu produit généré par IA → marquage/traçabilité (applicable 2 août 2026)
Traçabilité                    Flag "généré par IA" sur chaque attribut enrichi (provenance)
Refus publication si IA seul   Validation humaine obligatoire (human-in-the-loop) avant publication
```

- **ISO/IEC 42001:2023** (AIMS) : système de management de l'IA — politique, rôles, cycle de vie des modèles d'enrichissement.
- **NIST AI RMF 1.0** : fonctions *Govern / Map / Measure / Manage* appliquées à la qualité d'enrichissement (mesure continue précision/recall).
- **AI Act UE (art. 50)** : à partir du **2 août 2026**, obligation de transparence sur les contenus générés par IA — pertinent pour les descriptions/visuels produit publiés. La validation humaine reste le garde-fou principal (l'IA **propose**, l'humain **dispose**).

## Livrables
- Architecture du pipeline d'enrichissement IA (schéma flux)
- Prompts optimisés par famille produit et canal cible
- Script d'enrichissement automatique (Python + SDK Anthropic)
- Règles de gouvernance IA (seuils de confiance, validation humaine)
- Rapport de performance IA (précision classification, BLEU score traductions)
- Guide opérateur (comment superviser et corriger les enrichissements IA)

## Format de sortie
Précise : **PIM cible** (Akeneo, Pimcore…), **volume de fiches** à enrichir, **cas d'usage prioritaire** (descriptions, classification, traduction…), **langues cibles**, **niveau de validation humaine** souhaité (full auto vs validation obligatoire), **contraintes RGPD** sur les données produit.

## Anti-patterns
- ❌ **Promettre un % de gain non mesuré** (« 80 % du temps ») devant un client : non vérifiable → fourchette issue d'un POC sur le catalogue réel
- ❌ **Publication full-auto sans validation humaine** : hallucinations de specs en ligne → human-in-the-loop, surtout sous le seuil de confiance
- ❌ **Seuil d'auto-attribution unique** pour toutes les familles : précision variable → seuils calibrés par famille
- ❌ **Transmettre des données personnelles au LLM** (avis, contacts) sans contrôle : risque RGPD → filtrage PII en amont
- ❌ **Pas de marquage des contenus générés par IA** : non-conformité AI Act art. 50 (2 août 2026) → flag de provenance
- ❌ **Mesurer la traduction au seul BLEU** : métrique partielle → compléter par chrF/COMET + relecture native
- ❌ **Descriptions IA dupliquées** entre produits proches : pénalité SEO → variation contrôlée par prompt

## Sources
- **McKinsey** — *The Economic Potential of Generative AI* (juin 2023) : marketing/contenu parmi les 4 fonctions à plus fort potentiel — mckinsey.com
- **ISO/IEC 42001:2023** (AIMS) · **NIST AI RMF 1.0** (jan. 2023) — gouvernance et mesure des systèmes IA — iso.org / nist.gov
- **AI Act UE** — Règlement (UE) 2024/1689, **art. 50** transparence des contenus générés par IA (applicable 2 août 2026) — artificialintelligenceact.eu
- **Anthropic Claude** (modèle `claude-sonnet-4-6`, vision + texte) — docs.anthropic.com · **BLEU** (Papineni 2002) / chrF / COMET — évaluation MT

## Voir aussi
- [`enrichissement-produit.md`](enrichissement-produit.md) — workflow d'enrichissement accéléré par l'IA
- [`localisation-i18n.md`](localisation-i18n.md) — traduction assistée (post-édition)
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — mesure de la qualité des contenus générés
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — gouvernance data + IA
- [`../dam_expert/dam-augmente-ia.md`](../dam_expert/dam-augmente-ia.md) — pendant DAM (auto-tagging, vision)
- [`../juridique_ia/gouvernance-ethique-ia.md`](../juridique_ia/gouvernance-ethique-ia.md) — cadre éthique et AI Act
