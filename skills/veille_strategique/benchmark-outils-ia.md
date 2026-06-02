# Skill — Benchmark et Évaluation d'Outils IA
> Certifications : Anthropic Claude Code in Action (2026), SIC (SCIP — Strategic Consortium of Intelligence Professionals), PMI-PBA (PMI)

## Objectif
Évaluer et comparer des outils IA sur des critères objectifs — performance, coût, conformité, ergonomie — pour recommander les solutions les plus adaptées aux projets de Guy HUIBONHOA et à ses clients.

## Grille d'évaluation universelle — Outils IA

| Critère | Poids | Description |
|---|---|---|
| Qualité outputs | 25% | Précision, pertinence, créativité des réponses |
| Coût / usage | 20% | TTC, modèle de pricing, coût à l'usage réel |
| Conformité RGPD | 20% | Localisation données, DPA disponible, SOC2 |
| Intégration / API | 15% | API disponible, qualité SDK, documentation |
| Ergonomie / UX | 10% | Facilité d'utilisation, courbe d'apprentissage |
| Communauté / Support | 10% | Docs, forum, réactivité support |

## Benchmark LLM — Trame (à renseigner à chaque édition)

> ⚠️ **Ne jamais figer pricing, contexte ni scores** : ces valeurs changent en semaines (cycle veille IA). Renseigner depuis les **pages de pricing officielles** et les **leaderboards publics** (LMArena / Chatbot Arena ; *Open LLM Leaderboard archivé depuis juin 2024* → ne plus l'utiliser comme source vive ; Papers With Code ; Artificial Analysis). Comparer par **tier** (frontier / standard / éco) plutôt que par chiffre brut.

| Critère | Modèle A (frontier) | Modèle B | Modèle C | Modèle D (éco/open) |
|---|---|---|---|---|
| Qualité raisonnement | [⭐ via leaderboard daté] | … | … | … |
| Coût / MTok input | [pricing officiel] | … | … | … |
| Contexte max | [doc éditeur] | … | … | … |
| RGPD / EU (hébergement, DPA) | [à vérifier] | … | … | … |
| API qualité (SDK, docs) | … | … | … | … |
| Multimodal | … | … | … | … |

> **Ancrage de référence (à actualiser)** : famille Anthropic au moment de rédaction — Claude **Opus 4.8** (raisonnement/agents), **Sonnet 4.6** (haut volume/vision), **Haiku 4.5** (rapide/éco). Pour les autres éditeurs, citer la version + sa date de sortie (éviter d'étiqueter un modèle ancien comme « 2026 »).

## Benchmark Workflow / Automation

> Prix et notes ci-dessous = repères indicatifs à vérifier sur les sites éditeurs (les plans évoluent).

| Outil | Usage | Force | Limite | Prix | Note |
|---|---|---|---|---|---|
| n8n | Workflow no-code | Visual, self-hosted | Complexe | Free/Cloud | ⭐⭐⭐⭐ |
| Make | Automation | 1500+ intégrations | Coût à l'opération | 9€/mois+ | ⭐⭐⭐⭐ |
| Zapier | Automation simple | Facile | Cher, limité | 20€/mois+ | ⭐⭐⭐ |
| LangChain | Dev agents | Flexible, Python | Complexité dev | Open source | ⭐⭐⭐ |
| Claude Code | Dev + agents | IA native, Claude | Payant | Usage | ⭐⭐⭐⭐⭐ |

## Fiche de test — Template rapide

```markdown
# BENCHMARK [OUTIL] — [DATE]
Testeur : Guy HUIBONHOA

## Cas de test
1. [Test cas nominal — description + résultat]
2. [Test cas limite — description + résultat]
3. [Test cas d'usage réel — description + résultat]

## Scores
Qualité     : [X/5] — [commentaire]
Coût        : [X/5] — [tarif réel]
RGPD        : [X/5] — [données localisées où ?]
Intégration : [X/5] — [API REST/SDK disponible ?]
Ergonomie   : [X/5] — [courbe d'apprentissage]

## Verdict
[RECOMMANDÉ / CONDITIONNEL / DÉCONSEILLÉ]
Cas d'usage optimal : [description]
Alternative à considérer : [autre outil]
```

## Livrables
- Grille d'évaluation complète par outil
- Tableau comparatif multi-outils
- Fiche de test standardisée
- Recommandation motivée avec cas d'usage optimal

## Format de sortie
Précise : catégorie d'outils (LLM / workflow / RAG / agents), cas d'usage prioritaire, contraintes (budget, RGPD, intégrations requises).

## Anti-patterns
- ❌ **Scores « X/5 » fabriqués** sans protocole de test ni date — préférer un renvoi aux leaderboards datés et un verdict qualifié.
- ❌ **Pricing/contexte figés** dans le skill : table vouée à l'obsolescence → renseigner à chaque édition depuis les sources officielles.
- ❌ **Comparer des modèles de tiers différents** (frontier vs éco) sans le préciser : fausse le verdict coût/qualité.
- ❌ **Ignorer la conformité** (hébergement EU, DPA, SOC2) face au seul critère performance.

## Voir aussi
- [`veille-ia-llm.md`](veille-ia-llm.md) — suivi des sorties de modèles
- [`synthese-periodique.md`](synthese-periodique.md) — diffusion du benchmark
- `AGENT-CONSULTANT-IA.md` (`benchmark-solutions-ia`) — méthode RFI/RFP/POC/TCO en mission
- `AGENT-FINANCIAL-ANALYST.md` — analyse financière TCO/ROI (frontière)

## Sources
- **Méthodes d'évaluation marché** : Gartner Magic Quadrant + Hype Cycle (1995) · Forrester Wave · IDC MarketScape · ISO/IEC 25010:2023 (qualité logicielle)
- **Leaderboards publics** : LMArena / Chatbot Arena · Papers With Code · Artificial Analysis · *Open LLM Leaderboard (HuggingFace) — archivé juin 2024, ne plus utiliser comme source vive*
- **Pricing & specs** : pages officielles des éditeurs (anthropic.com, openai.com, ai.google.dev, mistral.ai)
- **Modèles Anthropic au moment de rédaction** : Opus 4.8 / Sonnet 4.6 / Haiku 4.5 (à actualiser)
