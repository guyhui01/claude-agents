# Skill — Veille IA et LLM
> Certifications : Anthropic Claude Code in Action (2026), SIC (SCIP — Strategic Consortium of Intelligence Professionals)

## Objectif
Surveiller en continu l'écosystème IA et LLM — nouveaux modèles, outils, frameworks, tendances des labs (Anthropic, OpenAI, Google, Meta) — pour anticiper les évolutions et alimenter les décisions stratégiques et commerciales.

## Sources de veille IA — Catalogue

```
SOURCES PRIMAIRES (annonces officielles)
────────────────────────────────────────────────────────────
Anthropic  : anthropic.com/news · X @AnthropicAI
OpenAI     : openai.com/blog · X @OpenAI
Google AI  : blog.google/technology/ai · X @GoogleDeepMind
Meta AI    : ai.meta.com/blog
Mistral AI : mistral.ai/news

SOURCES SECONDAIRES (analyses et synthèses)
────────────────────────────────────────────────────────────
The Batch (deeplearning.ai)    : Newsletter hebdo Andrew Ng
AI Breakfast (Ben's Bites)     : Newsletter quotidienne
Import AI (Jack Clark)         : Analyse technique profonde
Stratechery                    : Analyse stratégique et business
The Information                : Enquêtes exclusives tech

SOURCES TECHNIQUES
────────────────────────────────────────────────────────────
ArXiv cs.AI/cs.CL              : Papers de recherche
Papers With Code               : Benchmarks et SOTA
Hugging Face Hub               : Modèles open source
GitHub Trending (AI)           : Frameworks émergents
LMArena / Chatbot Arena        : Classement par votes (leaderboard vivant)
⚠ Open LLM Leaderboard (HF)    : ARCHIVÉ depuis juin 2024 — historique seul

COMMUNAUTÉS
────────────────────────────────────────────────────────────
Reddit r/MachineLearning
Twitter/X : Listes IA (LeCun, Karpathy, Altman, Pichai)
LinkedIn : #GenAI #LLM #ArtificialIntelligence
```

## Tableau de veille LLM — Template mensuel

> ⚠️ **Renseigner à chaque édition** avec la version courante de chaque éditeur et sa **date de sortie réelle** (ne pas étiqueter un modèle ancien à la date de veille). Croiser avec les leaderboards vivants (LMArena). Raisonner par **tier** : *frontier* (raisonnement/agents), *standard* (haut volume/vision), *éco/open* (coût, local).

| Modèle | Éditeur | Sortie | Contexte | Tier | Pertinence |
|---|---|---|---|---|---|
| Claude Opus 4.8 | Anthropic | [AAAA-MM] | [doc] | frontier | ⭐⭐⭐ |
| Claude Sonnet 4.6 | Anthropic | [AAAA-MM] | [doc] | standard | ⭐⭐⭐ |
| [version courante] | OpenAI | [AAAA-MM] | [doc] | … | … |
| [version courante] | Google | [AAAA-MM] | [doc] | … | … |
| [version open] | Meta / Mistral | [AAAA-MM] | [doc] | éco/open | … |

> *Ancrage Anthropic au moment de rédaction (à actualiser)* : Opus 4.8 · Sonnet 4.6 · Haiku 4.5.

## Synthèse mensuelle IA — Template

```markdown
# VEILLE IA — [MOIS ANNÉE]
Préparée par : Guy HUIBONHOA | Source : Anthropic, OpenAI, ArXiv

## 🔥 LES 3 FAITS MARQUANTS DU MOIS
1. **[FAIT 1]** — [Description courte + lien]
   → Impact pour nos projets : [implication concrète]

2. **[FAIT 2]** — [Description courte]
   → Impact : [implication]

3. **[FAIT 3]** — [Description courte]
   → Impact : [implication]

## 📊 ÉVOLUTION DES BENCHMARKS LLM
| Modèle | MMLU | HumanEval | Tendance |
|---|---|---|---|
| [Modèle A] | [score] | [score] | ↑ |

## 💡 TENDANCES À SURVEILLER
- [Tendance 1 : ex. Montée des agents IA multi-modaux]
- [Tendance 2 : ex. Réglementation IA Act — calendrier]

## 🚀 OPPORTUNITÉS IDENTIFIÉES
- [Opportunité pour les missions de Guy]

## ⚠ RISQUES / SIGNAUX D'ALERTE
- [Risque business ou technique]
```

## Livrables
- Synthèse mensuelle IA (Markdown / LinkedIn post)
- Tableau comparatif LLM mis à jour
- Alertes sur les évolutions critiques
- Recommandations actionnables pour les projets en cours

## Format de sortie
Précise : périmètre de veille (modèles / outils / réglementation), fréquence souhaitée, format de diffusion (note interne / LinkedIn / newsletter).

## Anti-patterns
- ❌ **Table de modèles figée** avec dates/contextes datés du jour de veille → obsolète en semaines ; renseigner depuis la doc éditeur.
- ❌ **Scores de benchmark recopiés sans date ni source** (cf. Open LLM Leaderboard archivé) — toujours dater et lier.
- ❌ **Veille = collecte sans tri** : sans hiérarchisation (faits / tendances / signaux faibles), le flux noie le signal.
- ❌ **Synthèse sans recommandation** : chaque veille se clôt par 2-3 actions concrètes.

## Voir aussi
- [`benchmark-outils-ia.md`](benchmark-outils-ia.md) — évaluation comparative outillée
- [`analyse-tendances.md`](analyse-tendances.md) — mise en perspective macro (Hype Cycle)
- [`synthese-periodique.md`](synthese-periodique.md) — format de diffusion
- `AGENT-PROMPT-ENGINEER.md` — exploitation des nouveautés modèles
- `AGENT-JURIDIQUE-IA.md` (`veille-reglementaire`) — volet AI Act / RGPD

## Sources
- **Sources primaires labs** : anthropic.com/news · openai.com/blog · blog.google/technology/ai · ai.meta.com/blog · mistral.ai/news
- **Leaderboards** : LMArena / Chatbot Arena · Papers With Code · Artificial Analysis · *Open LLM Leaderboard (HF) — archivé juin 2024*
- **Analyses** : The Batch (deeplearning.ai) · Import AI (Jack Clark) · Stratechery
- **Recherche** : ArXiv cs.AI / cs.CL · Hugging Face Hub
