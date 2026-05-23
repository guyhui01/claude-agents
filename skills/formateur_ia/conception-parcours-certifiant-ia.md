# Skill — Conception d'un Parcours Certifiant IA

> Certifications : CPTD · CPTM · CAP IABAC · Anthropic Claude Code in Action (2026) · DeepLearning.AI AI For Everyone · SAFe6 Agilist

## Objectif

Concevoir, structurer et déployer un parcours de certification IA pour des équipes ou des individus : sélection de la certification adaptée au profil, construction du plan de préparation, ressources d'entraînement, jalons d'évaluation et accompagnement jusqu'à l'examen.

## Catalogue des certifications IA 2026

### Certifications Anthropic

```
CERTIFICATION                  NIVEAU    DURÉE PREP    CIBLE
─────────────────────────────  ────────  ────────────  ─────────────────────────
Claude 101                     Débutant  2-4h          Tous utilisateurs Claude
Claude Code 101                Interméd. 4-8h          Développeurs, PO
Claude Code in Action          Expert    20-40h        Architectes IA, dev senior
```

### Certifications IA généralistes

```
CERTIFICATION                  NIVEAU    DURÉE PREP    CIBLE
─────────────────────────────  ────────  ────────────  ─────────────────────────
CAP IABAC                      Interméd. 20-30h        Consultants, PM, PO
AI Fundamentals (Google)       Débutant  4-8h          Tous métiers
AI Essentials (Google)         Débutant  2-4h          Tous métiers
AI For Everyone (DeepLearning) Débutant  6h MOOC       Non-techniques
AWS AI Practitioner (AIF-C01)  Interméd. 30-40h        IT / Architectes
Azure AI-102                   Expert    40-60h        Architectes Azure IA
```

### Certifications IA spécialisées

```
CERTIFICATION                  NIVEAU    DURÉE PREP    CIBLE
─────────────────────────────  ────────  ────────────  ─────────────────────────
ISTQB® AI Testing              Interméd. 20-30h        QA / Testeurs
SAFe AI / SAFe POPM            Expert    20-40h        PO / PM SAFe
CDMP (Data Management)         Expert    60-80h        Data Scientists
MLOps (DataTalks)              Interméd. 40-60h        MLOps Engineers
Prompt Engineering (Anthropic) Interméd. 10-20h        PO, consultants, dev
```

## Processus de conception du parcours

### ÉTAPE 1 — Analyse des besoins et sélection de la certification

```yaml
analyse:
  questions_cles:
    - "Quel est l'objectif professionnel ? (promotion, montée en compétences, crédibilité client)"
    - "Quel est le niveau IA actuel ? (auto-évaluation 1-5)"
    - "Combien de temps disponible par semaine ? (heures/semaine)"
    - "Quelle est la deadline souhaitée ?"
    - "Y a-t-il un budget formation ? (certification payante ou gratuite)"
  
  matrice_selection:
    non_technique_peu_de_temps: "Claude 101 → AI Essentials Google → CAP IABAC"
    po_pm_agile: "Claude Code 101 → CAP IABAC → SAFe POPM"
    dev_cloud: "Claude Code in Action → AWS AIF-C01 → Azure AI-102"
    qa_testeur: "ISTQB AI Testing → Claude Code 101"
    data_scientist: "CDMP → AWS MLS-C01 → MLOps DataTalks"
    consultant_ia: "CAP IABAC → Claude Code in Action → Anthropic Prompt Eng."
```

### ÉTAPE 2 — Plan de préparation personnalisé

```
MODÈLE DE PLAN 8 SEMAINES (CAP IABAC — exemple)
────────────────────────────────────────────────────────────────
S1 : Fondamentaux IA (ML, DL, GenAI) — 4h/sem → ressources DeepLearning.AI
S2 : LLMs et prompt engineering — 4h/sem → docs Anthropic + exercices
S3 : Cas d'usage métier et ROI IA — 4h/sem → articles + mise en pratique
S4 : Gouvernance, éthique, AI Act — 3h/sem → IABAC study guide
S5 : MLOps et déploiement (bases) — 4h/sem → cours DataTalks
S6 : Révisions générales + QCM entraînement — 5h/sem → banque de questions
S7 : Mock exam × 2 + correction — 6h/sem → simulation examen
S8 : Révision ciblée des lacunes + examen — selon résultats S7
────────────────────────────────────────────────────────────────
```

### ÉTAPE 3 — Ressources d'apprentissage par certification

```
RESSOURCE TYPE         SOURCES RECOMMANDÉES 2026
─────────────────────  ──────────────────────────────────────────────────────
Cours en ligne         DeepLearning.AI, Coursera, Udemy, LinkedIn Learning
Docs officiels         docs.anthropic.com, cloud.google.com/ai, learn.microsoft.com
Livres de référence    "Designing Machine Learning Systems" (Chip Huyen)
                       "Building LLMs for Production" (Packt)
Communautés            Anthropic Discord, Hugging Face forums, Reddit r/MachineLearning
Banques de questions   ExamTopics, Whizlabs, tutoriaux YouTube certification
Pratique hands-on      Claude.ai, Google AI Studio, AWS SageMaker Studio Lab (gratuit)
```

### ÉTAPE 4 — Jalons et évaluation

```yaml
jalons:
  - semaine: 2
    evaluation: "Quiz de mi-parcours (QCM 20 questions) — objectif > 70%"
    action_si_echec: "Renforcement des fondamentaux, bibliographie ciblée"
  
  - semaine: 5
    evaluation: "Mock exam partiel (50% du périmètre) — objectif > 75%"
    action_si_echec: "Tutoring individuel 2h, reformulation des concepts lacunaires"
  
  - semaine: 7
    evaluation: "Mock exam complet (2h, conditions réelles) — objectif > 80%"
    action_si_echec: "Repousser examen de 2 semaines + plan de rattrapage ciblé"
  
  - semaine_8_plus:
    action: "Passage examen officiel"
    suivi_post: "Débriefing résultat, partage badge LinkedIn, plan de montée en compétences suivant"
```

## Déploiement à l'échelle d'une équipe

### Plan de certification collectif (exemple : équipe 10 PO/PM IA)

```
PHASE 1 — DIAGNOSTIC (semaine 1)
→ Auto-évaluation IA niveau 1-5 par personne
→ Entretien 30 min / personne : objectifs, disponibilité, contraintes
→ Restitution : matrice profils × certifications recommandées

PHASE 2 — PRÉPARATION GROUPÉE (semaines 2-6)
→ Sessions hebdomadaires 1h30 en groupe (présentiel ou visio)
→ Études de cas métier spécifiques à l'entreprise
→ Pair learning : chaque apprenant avancé buddy d'un débutant
→ Slack ou Teams dédié : partage ressources, questions, encouragements

PHASE 3 — EXAMEN ET CÉLÉBRATION (semaines 7-8)
→ Mock exam collectif J-14
→ Passage examen en condition (fenêtre 2 semaines)
→ Célébration des certifications obtenues (CODIR, news interne)
→ Plan de montée en compétences suivant

MÉTRIQUES DE SUIVI
→ Taux de certification (objectif > 80% de l'équipe)
→ Score moyen à l'examen
→ NPS de la formation (satisfaction)
→ Mise en pratique 30 jours après (manager feedback)
```

## Livrables

- Plan de préparation personnalisé (PDF 2-4 pages) par apprenant
- Calendrier de formation avec jalons (format Gantt ou Notion)
- Bibliothèque de ressources classées par certification
- Banque de 50+ questions d'entraînement par certification
- Tableau de bord de suivi collectif (Notion, Confluence ou Google Sheets)
- Kit de communication RH : email annonce, badge LinkedIn, modèle CV

## Format de sortie

Précise : **certification(s) ciblée(s)**, **profil(s) des apprenants**, **délai souhaité**, **budget disponible** (certification payante ou non), **mode** (individuel / collectif), **accompagnement attendu** (plan seul / coaching / animation).
