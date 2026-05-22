# Skill — Benchmark et Évaluation d'Outils IA
> Certifications : Anthropic Claude Code in Action (2026), SCIP CI (SCIP), PMI-PBA (PMI)

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

## Benchmark LLM — Assistants IA 2026

| Critère | Claude Sonnet 4.6 | GPT-4o | Gemini 1.5 Pro | Mistral Large |
|---|---|---|---|---|
| Qualité raisonnement | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Coût / MTok input | 3$ | 5$ | 3.5$ | 4$ |
| Contexte max | 200K | 128K | 1M | 128K |
| RGPD / EU | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| API qualité | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Multimodal | ✅ | ✅ | ✅ | ⚠ Limité |
| **Score global** | **4.5/5** | **4.0/5** | **3.8/5** | **3.5/5** |

## Benchmark Workflow / Automation

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
