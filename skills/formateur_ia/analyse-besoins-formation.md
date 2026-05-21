# Skill — Analyse des Besoins de Formation (TNA)

> Certifications : ATD CPLP (Certified Professional in Learning & Performance) 2026, Qualiopi Référentiel Qualité Formation, CNAM Ingénierie de Formation, HEC Executive Education Design

## Objectif

Conduire une Training Needs Analysis (TNA) rigoureuse pour identifier les écarts de compétences IA, concevoir les personas apprenants et prioriser les actions de formation Data-IA.

## Méthode TNA — 5 étapes

### Vue d'ensemble du processus

```
Étape 1          Étape 2          Étape 3          Étape 4          Étape 5
Contexte    →    Collecte    →    Analyse     →    Personas    →    Plan
stratégique      données          écarts           apprenants       formation
(1 semaine)      (2 semaines)     (1 semaine)      (1 semaine)      (1 semaine)
```

### Étape 1 — Alignement stratégique

```yaml
Questions_à_poser_aux_sponsors:
  - "Quels sont les objectifs business liés à la formation IA ?"
  - "Quelles décisions ou comportements doivent changer ?"
  - "Quelle est la population cible (nb, fonctions, niveaux) ?"
  - "Quel est le budget et l'horizon temporel ?"
  - "Comment le succès sera-t-il mesuré (Kirkpatrick L3-L4) ?"

Sources_d_information:
  - Stratégie Data-IA de l'entreprise
  - GPEC / GEPP existante
  - Entretiens CODIR (30 min × 3-5 décideurs)
  - Résultats évaluations de performance N-1
```

### Étape 2 — Collecte de données

#### Méthodes d'enquête

| Méthode | Public | Nb | Durée | Livrable |
|---------|--------|-----|-------|---------|
| Entretiens semi-directifs | Managers + experts | 10-15 | 45 min | Verbatims codés |
| Questionnaire en ligne | Collaborateurs | 50-500 | 15 min | Données quantitatives |
| Focus groups | Équipes représentatives | 3-5 groupes × 8 | 90 min | Insights qualitatifs |
| Observation terrain | Utilisateurs clés | 5-10 | 2h | Comportements réels |
| Analyse documentaire | RH + managers | — | — | GPEC, fiches de poste |

#### Template questionnaire TNA IA (extrait)

```
QUESTIONNAIRE — BESOINS DE FORMATION IA 2026
(Format Likert 1-5 + questions ouvertes)

SECTION A — Auto-évaluation compétences IA actuelles
Q1. Je sais expliquer ce qu'est un modèle de langage (LLM) à un collègue.
    [ ] 1-Pas du tout  [ ] 2  [ ] 3  [ ] 4  [ ] 5-Totalement

Q2. J'utilise des outils IA génératifs (ChatGPT, Claude, Copilot) dans mon travail.
    [ ] Jamais  [ ] Rarement  [ ] Parfois  [ ] Souvent  [ ] Quotidiennement

Q3. Je suis capable d'évaluer la fiabilité d'une réponse générée par une IA.
    [ ] 1-Pas du tout  [ ] 2  [ ] 3  [ ] 4  [ ] 5-Totalement

SECTION B — Besoins perçus
Q4. Pour quelles tâches professionnelles souhaiteriez-vous être formé(e) à l'IA ?
    (texte libre — 3 réponses max)

Q5. Quel format de formation vous convient le mieux ?
    [ ] Présentiel (journée)  [ ] E-learning (30 min/module)
    [ ] Blended  [ ] Coaching individuel  [ ] Ateliers pratiques

SECTION C — Freins et facteurs de succès
Q6. Quel est votre principal frein à l'adoption de l'IA ? (1 réponse)
    [ ] Manque de temps  [ ] Peur de se tromper  [ ] Pas de cas d'usage clair
    [ ] Questions éthiques  [ ] Compétences techniques insuffisantes
```

### Étape 3 — Analyse des écarts (Gap Analysis)

#### Modèle de gap analysis par famille de compétences IA

| Domaine | Niveau requis (cible) | Niveau actuel (médiane) | Écart | Priorité |
|---------|----------------------|------------------------|-------|---------|
| Comprendre l'IA (fondamentaux) | 3/5 | 1.8/5 | -1.2 | HAUTE |
| Prompt Engineering | 3/5 | 1.2/5 | -1.8 | CRITIQUE |
| Éthique IA & biais | 3/5 | 1.5/5 | -1.5 | HAUTE |
| Analyse de données (Excel/BI) | 4/5 | 2.8/5 | -1.2 | MOYENNE |
| Gestion de projets data | 3/5 | 2.2/5 | -0.8 | BASSE |

### Étape 4 — Personas apprenants

```yaml
Persona_1:
  nom: "Marie, Directrice Marketing 45 ans"
  contexte: "Pilote une équipe de 8, budget 5M€/an"
  niveau_IA: "Curieuse mais débutante — utilise ChatGPT personnellement"
  besoins: ["Cas d'usage IA marketing concrets", "ROI rapide", "Déléguer à l'équipe"]
  freins: ["Pas assez de temps", "Peur de l'hallucination"]
  format_idéal: "Demi-journée présentiel + toolkit pratique"
  KPI_succès: "Lancer 2 initiatives IA dans son équipe sous 3 mois"

Persona_2:
  nom: "Thomas, Data Analyst 28 ans"
  contexte: "Expert Excel/SQL, explore Python depuis 6 mois"
  niveau_IA: "Intermédiaire — utilise GitHub Copilot + ChatGPT API"
  besoins: ["MLOps foundations", "Prompt engineering avancé", "LangChain"]
  freins: ["Syndrome imposteur vis-à-vis des Data Scientists"]
  format_idéal: "Parcours e-learning 4 semaines + projet fil rouge"
  KPI_succès: "Déployer un pipeline RAG en autonomie"

Persona_3:
  nom: "Rémi, Directeur Financier 52 ans"
  contexte: "Décideur, peu technique, sceptique mais curieux"
  niveau_IA: "Débutant — n'utilise pas d'IA pro"
  besoins: ["Vocabulaire IA pour dialoguer avec la DSI", "ROI et risques"]
  freins: ["Manque de confiance dans les données IA"]
  format_idéal: "Executive briefing 3h + memo personnalisé"
  KPI_succès: "Valider budget IA au prochain CODIR"
```

### Étape 5 — Plan de formation priorisé

| Formation | Public | Urgence | Format | Durée | Budget estimé |
|-----------|--------|---------|--------|-------|---------------|
| IA pour tous (sensibilisation) | Tous collaborateurs | CRITIQUE | E-learning | 3h | 30 k€ |
| Prompt Engineering pratique | Managers + fonctionnels | HAUTE | Présentiel | 1 jour | 50 k€ |
| Data Literacy niveau 1 | Toutes équipes | HAUTE | Blended | 5h | 40 k€ |
| IA pour développeurs | Tech team | MOYENNE | Bootcamp | 3 jours | 25 k€ |
| AI Leadership | CODIR + Directeurs | HAUTE | Executive | 3h | 15 k€ |

## Livrables

- Rapport TNA complet (contexte, méthode, résultats, recommandations)
- Questionnaire TNA adapté au contexte (Google Forms / Typeform)
- Carte des écarts de compétences (heat map par population)
- Fiches personas apprenants (3-5 personas détaillés)
- Plan de formation priorisé avec budget et planning
- Présentation de restitution sponsor (15 slides)

## Format de sortie

Précise : **secteur et taille de l'organisation**, **population cible** (nb, fonctions, niveaux hiérarchiques), **objectifs business** de la formation, **contraintes** (budget, délai, présentiel/distanciel), **outils IA actuellement utilisés** dans l'organisation, **TNA déjà réalisée ou à initier**.
