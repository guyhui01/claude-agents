# Skill — Conception de Parcours de Formation IA

> Certifications : ATD Instructional Design, CPTD 2026, Learning & Development Professional (SHRM), Articulate Storyline 360 Certified, Qualiopi Ingénierie Pédagogique

## Objectif

Concevoir des parcours de formation Data-IA engageants et efficaces en appliquant les modèles ADDIE et SAM, la taxonomie de Bloom, les principes du learning path design et du microlearning.

## Modèles de design pédagogique

### ADDIE vs SAM — Comparaison

| Phase | ADDIE (Séquentiel) | SAM (Itératif) |
|-------|-------------------|----------------|
| Analyse | Analyse des besoins | Preparation phase |
| Design | Conception globale | Iterative Design |
| Develop | Développement contenu | Iterative Development |
| Implement | Déploiement | Implementation |
| Evaluate | Évaluation finale | Continuous evaluation |
| **Idéal pour** | Projets stables, conformité | Projets agiles, innovation |
| **Durée type** | 3-6 mois | 4-8 semaines (MVP) |

### Application SAM au Design de Formation IA

```
Sprint 1 (2 semaines) — Prototype minimum
  → Objectifs pédagogiques (Bloom)
  → Story board de 2 modules pilotes
  → Test avec 5 apprenants représentatifs
  → Feedback loop → ajustements

Sprint 2 (2 semaines) — Alpha version
  → Développement 30% du contenu
  → Test e-learning 15 apprenants
  → Ajustements pédagogiques

Sprint 3 (2 semaines) — Beta version
  → Contenu complet développé
  → Pilote 20-30 apprenants
  → Mesure Kirkpatrick L1+L2

Sprint 4 (1 semaine) — Release
  → Déploiement LMS
  → Communication apprenants
  → Plan suivi Kirkpatrick L3
```

## Taxonomie de Bloom appliquée à l'IA

### Les 6 niveaux pour les formations IA

| Niveau Bloom | Verbes d'action | Objectif IA exemple | Évaluation |
|-------------|----------------|---------------------|-----------|
| 1 — Mémoriser | Définir, lister, nommer | "Définir ce qu'est un token en LLM" | QCM |
| 2 — Comprendre | Expliquer, illustrer | "Expliquer le fonctionnement du RAG" | Question ouverte |
| 3 — Appliquer | Utiliser, démontrer | "Utiliser Claude pour rédiger un email" | Exercice pratique |
| 4 — Analyser | Comparer, distinguer | "Comparer 2 prompts et identifier le meilleur" | Étude de cas |
| 5 — Évaluer | Juger, argumenter | "Évaluer les risques d'un système IA" | Débat/Simulation |
| 6 — Créer | Concevoir, produire | "Concevoir un agent IA pour son métier" | Projet fil rouge |

**Règle d'or : 30% niveaux 1-2, 40% niveaux 3-4, 30% niveaux 5-6**

## Learning Path Design

### Architecture d'un parcours "Prompt Engineering" (exemple)

```
PARCOURS PROMPT ENGINEERING — 12h total
(Public : Managers et fonctionnels, niveau débutant)

┌────────────────────────────────────────────────────────────┐
│  MODULE 0 — Pré-requis (1h, e-learning auto-rythme)        │
│  "Comment fonctionne une IA générative ?"                  │
│  → Bloom L1-L2 | Format : vidéo 20 min + quiz             │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 1 — Fondamentaux du prompt (2h, blended)           │
│  "Structure d'un bon prompt : rôle, contexte, tâche"       │
│  → Bloom L2-L3 | Format : vidéo + TP guidé 30 prompts     │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 2 — Techniques avancées (3h, présentiel)           │
│  "Chain-of-thought, few-shot, structured output"           │
│  → Bloom L3-L4 | Format : atelier 6 exercices en binôme   │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 3 — Cas d'usage métier (4h, présentiel)            │
│  "Prompt engineering pour [RH / Finance / Marketing]"      │
│  → Bloom L4-L5 | Format : simulation + peer review        │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│  MODULE 4 — Projet fil rouge (2h, mentoré)                 │
│  "Créer une librairie de prompts pour son équipe"          │
│  → Bloom L5-L6 | Format : coaching 1-to-1 + livrable      │
└────────────────────────────────────────────────────────────┘
```

### Template d'objectif pédagogique (format SMART-Bloom)

```
À l'issue du module [X], l'apprenant sera capable de :
VERBE_BLOOM (niveau [1-6]) + CONTENU + CONDITION + CRITÈRE_SUCCÈS

Exemple :
"Rédiger (Bloom 3 — Appliquer) un prompt structuré pour une tâche
de synthèse de documents, en utilisant les techniques de rôle et
chain-of-thought vues en module 2, avec un taux de pertinence
évalué ≥ 4/5 par le formateur."
```

## Microlearning — Principes et formats

### Les 7 formats microlearning IA

| Format | Durée | Outil | Cas d'usage |
|--------|-------|-------|-------------|
| Video nugget | 3-5 min | Loom, Synthesia | Concept à expliquer |
| Interactive quiz | 5-10 min | Kahoot, Quizlet | Vérification compréhension |
| Scenario branché | 10-15 min | Articulate Storyline | Prise de décision |
| Infographie interactive | 5 min | Canva, Genially | Synthèse visuelle |
| Podcast épisode | 10-15 min | Anchor, Buzzsprout | Trajet / déplacement |
| Flashcards | 5 min | Anki, Brainscape | Mémorisation glossaire IA |
| Challenge pratique | 15 min | — | Application immédiate |

### Repères pratiques 3-5-10 pour le microlearning
> Heuristiques de terrain (non normatives). L'espacement des rappels s'appuie sur l'**effet d'espacement** et la courbe de l'oubli (Ebbinghaus, 1885), pas sur un intervalle fixe.

```
~3 minutes pour une vidéo de concept (format court, charge cognitive maîtrisée)
rappels espacés et croissants (J+1, J+3, J+7…) plutôt qu'un rappel unique
~10% du temps de formation consacré au microlearning de renforcement
```

## Livrables

- Cahier des charges pédagogique (objectifs, population, contraintes)
- Plan pédagogique détaillé du parcours (structure, séquençage)
- Storyboard de 2 modules représentatifs
- Matrice Bloom par module (objectifs × niveaux)
- Fiche de design d'un microlearning (template réutilisable)
- Planning de développement (phases SAM avec jalons)

## Format de sortie

Précise : **titre et thème de la formation**, **public cible** (profil, niveau actuel, effectif), **durée totale** disponible, **format souhaité** (présentiel / e-learning / blended), **outils disponibles** (LMS, authoring), **niveau Bloom visé** (application ou création), **contraintes budget et délai**.

## Sources
- **Benjamin Bloom (dir.)** — *Taxonomy of Educational Objectives* (1956) ; révision **Anderson & Krathwohl** (2001) — verbes opérationnels, « Créer » au sommet
- **Florida State University / US Army** — modèle **ADDIE** (1975)
- **Michael Allen & Richard Sites** — *Leaving ADDIE for SAM* (2012)
- **John Sweller** — *Cognitive Load Theory* (1988) — charge cognitive et segmentation
- **Hermann Ebbinghaus** — *Über das Gedächtnis* (1885) — courbe de l'oubli / effet d'espacement

## Anti-patterns
- Objectifs pédagogiques sans verbe Bloom mesurable (« sensibiliser à… »)
- ADDIE en cascade rigide là où l'itératif (SAM) serait adapté
- Microlearning = saucissonnage de slides, sans objectif par grain
- Présenter « 3-5-10 » ou un intervalle fixe comme une règle scientifique
- Surcharge cognitive : trop de concepts nouveaux par module (Sweller)

## Voir aussi
- [analyse-besoins-formation.md](analyse-besoins-formation.md) — écarts de compétences en entrée
- [evaluation-formation.md](evaluation-formation.md) — aligner objectifs Bloom et évaluation
- [elearning-rapid-learning.md](elearning-rapid-learning.md) — produire les grains microlearning
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — exemple de contenu technique à structurer
