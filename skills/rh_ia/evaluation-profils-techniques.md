# Skill — Évaluation Profils Techniques IT/IA
> Certifications : PHR (HRCI) · SHRM-CP (SHRM) · ATD CPTD (ATD)

## Objectif
Évaluer objectivement des profils techniques IT/IA via des grilles d'entretien structurées, des cas pratiques et des scorecards, afin de produire une recommandation Go/No-Go documentée pour le client.

## Structure d'entretien structuré (STAR + technique)

```
ENTRETIEN TYPE — 60 minutes
──────────────────────────────────────────────────────
0-5 min    : Accueil, présentation du process
5-20 min   : Parcours et motivations (méthode STAR)
20-45 min  : Évaluation technique (questions + cas pratique)
45-55 min  : Questions comportementales & culture fit
55-60 min  : Questions du candidat + next steps
```

## Grille d'entretien — Développeur IA / LLM

### Compétences techniques (45 min)

```
NIVEAU 1 — Fondamentaux (tous profils IA)
──────────────────────────────────────────────────────
Q : Expliquez la différence entre fine-tuning et RAG. Dans quel cas choisiriez-vous l'un ou l'autre ?
Réponse attendue : fine-tuning = adapter le modèle, RAG = enrichir le contexte. RAG préféré si données évoluent souvent, fine-tuning si comportement spécifique stable requis.
Score : 0 (hors sujet) · 1 (partiel) · 2 (correct) · 3 (maîtrise + nuances)

Q : Comment gérez-vous la gestion des tokens et les coûts d'inférence en production ?
Réponse attendue : prompt caching, chunking intelligent, modèle adapté à la complexité, monitoring des coûts (Langfuse, etc.)
Score : 0-3

NIVEAU 2 — Architecture & Production
──────────────────────────────────────────────────────
Q : Décrivez une architecture RAG que vous avez construite en production. Quels problèmes avez-vous rencontrés ?
Réponse attendue : vector DB (Pinecone, Qdrant, pgvector), chunking strategy, embedding model, reranking, hallucination mitigation
Score : 0-3

Q : Comment testez-vous et évaluez-vous un pipeline LLM ?
Réponse attendue : evals (RAGAS, LangSmith), golden dataset, métriques (faithfulness, relevancy), A/B testing prompts
Score : 0-3

NIVEAU 3 — Leadership & Design (seniors)
──────────────────────────────────────────────────────
Q : Comment choisissez-vous entre les LLM du marché pour un use case donné ? (Frontier 2026 : Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, Grok 3…)
Réponse attendue :

  FRONTIER — Raisonnement complexe, agents, code avancé
  · Claude Opus 4.7 (avr. 2026) : #1 SWE-bench Pro (64,3%) · #1 LM Arena (1504 Elo)
    mode "max effort" · vision HR 3x · raisonnement adaptatif → tâches critiques
  · GPT-5.5 (avr. 2026) : #1 classement général · SWE-bench Pro 58,6%
    → génération de code, agents complexes, raisonnement multi-étapes
  · Gemini 3.1 Pro : leader génération texte · fort sur LM Arena
    → multimodal, intégration Google Workspace, contexte long

  PRODUCTION — Équilibre qualité/coût
  · Claude Sonnet 4.6 : frontier-class · 1M tokens contexte · meilleur ratio
    qualité/prix Anthropic → production, RAG, assistants métier
  · GPT-4o / o4-mini : multimodal mature · forte communauté d'intégrations
  · Gemini 2.5 Flash : latence faible · coût réduit · Google Cloud natif

  RÉACTIF / TEMPS RÉEL
  · Grok 3 (xAI) : connecté en temps réel à X · fort sur actualité
    → veille, analyse marché live, environnements réactifs

  SOUVERAINETÉ / ON-PREMISE
  · Mistral Large 2 : déployable on-premise · RGPD FR/EU · Mistral AI Paris
  · LLaMA 3.3 405B (Meta) : open-source · self-hosted · coût infra uniquement

  Critères clés du choix : coût/token · latence · context window ·
  benchmark sur tâche spécifique (evals) · contraintes souveraineté data ·
  disponibilité API régionale (EU)

Score : 0-3 (0 = cite 1 modèle sans critère · 2 = tier + critères · 3 = grille multicritère
         avec benchmarks + justification use case + contraintes RGPD)
```

### Questions comportementales STAR

```
AUTONOMIE & OWNERSHIP
Q : Décrivez une situation où vous avez dû prendre une décision technique importante sans votre manager.
Attendu : STAR complet — Situation claire, action proactive, résultat mesuré

COLLABORATION
Q : Racontez un désaccord technique avec un collègue. Comment l'avez-vous résolu ?
Attendu : écoute, compromis technique, focus sur l'objectif produit

LEARNING AGILITY
Q : Quelle technologie IA avez-vous apprise seul(e) ces 6 derniers mois ? Comment ?
Attendu : curiosité, auto-formation, application concrète
```

## Scorecard — Évaluation complète

| Dimension | Poids | Score (0-3) | Score pondéré |
|---|---|---|---|
| Maîtrise technique (fondamentaux) | 25% | | |
| Expérience production & architecture | 25% | | |
| Qualité du code / bonnes pratiques | 15% | | |
| Compétences communication | 15% | | |
| Autonomie & ownership | 10% | | |
| Adéquation culture client | 10% | | |
| **Total** | 100% | | **/3** |

```
INTERPRÉTATION
──────────────────────────────────────────────────────
≥ 2.5 / 3   → Recommandation forte — à présenter en priorité
2.0 - 2.4   → Recommandation conditionnelle — à valider avec client
1.5 - 1.9   → Profil en développement — mission junior seulement
< 1.5       → Non retenu — CVthèque avec date de relance +6 mois
```

## Cas pratique — Exemples par profil

```
DÉVELOPPEUR IA (45 min — asynchrone ou live)
──────────────────────────────────────────────────────
"Vous devez construire un mini-assistant RAG sur une base documentaire
de 500 PDF. Décrivez votre architecture, choisissez votre stack, estimez
les coûts d'inférence pour 1 000 requêtes/jour, et identifiez les 3
principaux risques."
Attendu : pipeline complet, justification des choix, sens du coût

PRODUCT OWNER IA (30 min — discussion)
──────────────────────────────────────────────────────
"Un CODIR vous demande d'identifier 3 cas d'usage IA prioritaires pour
une DSI bancaire de 200 personnes. Comment vous y prenez-vous ?"
Attendu : méthode (valeur/effort, maturité IA), stakeholders, critères

CONSULTANT IA (45 min — mise en situation)
──────────────────────────────────────────────────────
"Votre client (retail, 5 000 employés) veut déployer un ChatBot RH
intelligent. Faites un diagnostic rapide et proposez une roadmap 6 mois."
Attendu : audit maturité, architecture, change management, budget
```

## Livrables
- Grille d'entretien personnalisée par profil et niveau
- Scorecard complétée avec commentaires par dimension
- Recommandation Go/No-Go documentée (1 page)
- Compte-rendu d'entretien structuré pour le client

## Format de sortie
Précise : intitulé du poste, niveau requis (junior/confirmé/senior/lead), stack technique clé, type de mission (produit / conseil / ESN), secteur client.
