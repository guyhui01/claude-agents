# Skill — E-learning & Rapid Learning

> Certifications : Articulate Storyline 360 Certified Developer 2026, Adobe Captivate Specialist, xAPI / SCORM Expert (ADL), LMS Administration (Moodle, TalentLMS, 360Learning), Qualiopi Numérique

## Objectif

Produire des modules e-learning et rapid learning de qualité professionnelle pour les formations Data-IA, en maîtrisant les outils auteurs, les standards SCORM/xAPI et la configuration LMS.

## Comparatif des outils auteurs 2026

### Tableau de décision

| Outil | Type | Interactivité | Courbe apprentissage | Prix/an | Idéal pour |
|-------|------|--------------|---------------------|---------|-----------|
| **Articulate Storyline 360** | Desktop | Très haute | Élevée | 1 500 €/user | Scénarios complexes, simulations |
| **Articulate Rise 360** | Web | Moyenne | Faible | Inclus 360 | Rapid learning, mobile-first |
| **Adobe Captivate 2024** | Desktop | Très haute | Très élevée | 480 €/user | VR, simulations techniques |
| **iSpring Suite** | PowerPoint | Haute | Faible | 770 €/user | Migration PPT rapide |
| **H5P** | Web open-source | Moyenne | Moyenne | Gratuit | LMS Moodle, budget limité |
| **Genially** | Web | Moyenne | Faible | 150 €/user | Infographies interactives |
| **Synthesia** | IA vidéo | Faible | Très faible | 960 €/user | Vidéos pédagogiques IA avatar |

## Articulate Storyline 360 — Workflow professionnel

### Structure d'un module e-learning IA (exemple : "Fondamentaux du Prompt Engineering")

```
STORYBOARD → STORYLINE → PUBLICATION

Durée production estimée (1 module 30 min) :
  Storyboard        : 4h
  Développement SL  : 12h
  Révision client   : 2h
  Corrections       : 3h
  Tests & publication : 2h
  TOTAL             : ~23h/module
```

### Template de slide Storyline pour exercice de prompt

```
Slide Type : Freeform Pick Many (interactif)

Titre : "Identifiez les éléments d'un prompt efficace"

Consigne : "Cliquez sur les composants présents dans ce prompt :"

Prompt affiché :
┌────────────────────────────────────────────────┐
│ "Tu es un expert en marketing B2B avec 10 ans  │
│ d'expérience. Rédige un email de prospection   │
│ pour une PME industrielle intéressée par nos   │
│ services de maintenance prédictive. Ton = pro  │
│ et concis. Maximum 150 mots."                  │
└────────────────────────────────────────────────┘

Zones cliquables (hotspots) :
  [Rôle] → Feedack : "Correct ! 'expert en marketing B2B'"
  [Contexte] → Feedback : "Correct ! 'PME industrielle...'"
  [Tâche] → Feedback : "Correct ! 'Rédige un email'"
  [Contrainte] → Feedback : "Correct ! 'Maximum 150 mots'"
  [Ton] → Feedback : "Correct ! 'pro et concis'"

Couche résultats :
  → Score 5/5 : "Parfait ! Vous maîtrisez la structure RTCT"
  → Score 3-4/5 : "Bien ! Revoir la vidéo sur les contraintes"
  → Score < 3/5 : "Recommencer avec l'aide de la fiche mémo"
```

## Standards SCORM et xAPI

### Comparatif SCORM vs xAPI (Tin Can)

| Critère | SCORM 1.2 | SCORM 2004 | xAPI |
|---------|-----------|-----------|------|
| Trackage | Basique (score, statut) | Amélioré | Complet (toute action) |
| Hors-ligne | Non | Non | Oui |
| Mobile | Limité | Limité | Natif |
| LRS requis | Non (LMS) | Non (LMS) | Oui |
| Flexibilité | Faible | Moyenne | Totale |
| Adoption 2026 | Décroissante | Standard | En hausse |

### Exemple statement xAPI pour formation IA

```json
{
  "actor": {
    "name": "Marie Dupont",
    "mbox": "mailto:marie.dupont@entreprise.fr"
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/completed",
    "display": {"fr-FR": "a complété"}
  },
  "object": {
    "id": "https://formation.ia/modules/prompt-engineering/module-2",
    "definition": {
      "name": {"fr-FR": "Techniques avancées de prompting"},
      "type": "http://adlnet.gov/expapi/activities/module"
    }
  },
  "result": {
    "score": {"scaled": 0.87, "raw": 87, "max": 100},
    "completion": true,
    "duration": "PT18M32S"
  },
  "context": {
    "platform": "360Learning",
    "language": "fr-FR"
  }
}
```

## Vidéo pédagogique IA avec Synthesia

### Workflow de production (30 min de vidéo)

```
Étape 1 — Script (4h)
  → Écriture avec structure : accroche 30 sec + contenu + CTA
  → 150 mots ≈ 1 min de vidéo
  → Intégrer des pauses pour les exercices

Étape 2 — Synthesia (2h)
  → Choix avatar (recommandé : avatar neutre et diversifié)
  → Import script → génération IA
  → Ajout slides, annotations, sous-titres auto
  → Voix : française, ton conversationnel

Étape 3 — Post-production (2h)
  → Ajout écran de titre (Canva)
  → Découpage en chapitres (< 5 min/segment)
  → Export MP4 + upload LMS
  → Génération sous-titres SRT (accessibilité)

Coût estimé : 80 €/module vidéo (Synthesia Business Plan)
```

## Configuration LMS pour formation IA

### Checklist déploiement 360Learning (exemple)

```yaml
Configuration_parcours_IA:
  Paramètres_généraux:
    durée_accès: "90 jours"
    langue: "Français"
    certificat: true
    score_validation: 70

  Séquençage:
    mode: "Libre ou conditionnel selon module"
    prérequis: "Module 0 obligatoire avant Module 1"
    rappels_auto: ["J+3", "J+7", "J+14 si non commencé"]

  Gamification:
    points_par_quiz: 10
    badge_completion: "Badge Prompt Engineer Niveau 1"
    leaderboard: true

  Analytics:
    exports: ["Taux completion", "Scores quiz", "Temps passé"]
    alertes: "Notifier formateur si completion < 30% à J+14"
    rapport_auto: "Hebdomadaire → RH"
```

## Livrables

- Module e-learning complet (Storyline 360 ou Rise — fichier source)
- Storyboard interactif (Word ou Notion)
- Package SCORM 2004 ou xAPI prêt à l'import LMS
- Vidéos pédagogiques (MP4 + sous-titres SRT)
- Guide d'administration LMS (configuration + analytics)
- Charte graphique e-learning (couleurs, polices, icônes)

## Format de sortie

Précise : **outil auteur disponible** (Storyline / Rise / Captivate / iSpring), **LMS cible** (Moodle / 360Learning / Docebo / autre), **standard requis** (SCORM 1.2 / SCORM 2004 / xAPI), **durée du module**, **niveau d'interactivité** (lecture passive / quiz / simulation / scénario branché), **public** et **thème IA**.

## Sources
- **Richard Mayer** — *Multimedia Learning* (2001) — principes multimédia (cohérence, segmentation, redondance)
- **John Sweller** — *Cognitive Load Theory* (1988)
- **ADL Initiative** — standards *SCORM* (1.2 / 2004) et *xAPI* (Experience API / Tin Can)
- **Michael Allen & Richard Sites** — *Leaving ADDIE for SAM* (2012) — production itérative

## Anti-patterns
- « Page-turner » : slides/PDF linéaires sans interaction ni feedback
- Violer les principes de Mayer (narration audio + texte écran redondants)
- Module trop long (> 15-20 min) sans segmentation
- Choisir xAPI/SCORM sans vérifier la compatibilité du LMS cible
- Vidéo IA (Synthesia) générée sans script pédagogique structuré

## Voir aussi
- [conception-parcours.md](conception-parcours.md) — design pédagogique amont (ADDIE/SAM, Bloom)
- [animation-formation.md](animation-formation.md) — articulation présentiel / distanciel
- [evaluation-formation.md](evaluation-formation.md) — quiz et complétion suivis dans le LMS
- [data-literacy.md](data-literacy.md) — exemple de programme multi-niveaux à médiatiser
