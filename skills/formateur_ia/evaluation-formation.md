# Skill — Évaluation de la Formation IA

> Certifications : Kirkpatrick Certified Evaluator 2026, ATD CPLP (Learning & Performance), Qualiopi Évaluation, Data Analytics for L&D (LinkedIn Learning Certificate)

## Objectif

Concevoir et déployer un dispositif d'évaluation complet des formations Data-IA couvrant les 4 niveaux du modèle Kirkpatrick, le design des assessments et le calcul du ROI de la formation.

## Modèle Kirkpatrick — Les 4 niveaux

### Vue d'ensemble et méthodes

| Niveau | Nom | Question clé | Méthodes | Timing |
|--------|-----|-------------|---------|--------|
| **L1 — Réaction** | Satisfaction | "La formation a-t-elle plu ?" | Questionnaire à chaud, NPS | Fin de session |
| **L2 — Apprentissage** | Connaissance | "Ont-ils appris ?" | Quiz, simulation, évaluation de compétences | Pendant + fin |
| **L3 — Comportement** | Transfert | "Appliquent-ils ?" | Observations, 360°, manager feedback | J+30, J+60 |
| **L4 — Résultats** | Impact | "Quelle valeur générée ?" | KPIs business, ROI | T+3 mois, T+6 mois |

### Principe des Niveaux Ciblés

```
Règle 80-20 de Kirkpatrick :
  80% des formations → évaluer L1 + L2
  15% des formations → évaluer L1 + L2 + L3
   5% des formations → évaluer L1 + L2 + L3 + L4

Recommandation pour formations IA stratégiques :
→ Programme "Prompt Engineering managers" → L1+L2+L3
→ Transformation data-driven CODIR → L1+L2+L3+L4
→ Sensibilisation IA générale → L1+L2 suffisant
```

## Niveau 1 — Évaluation de la réaction

### Questionnaire de satisfaction (format NPS + Likert)

```
ÉVALUATION DE FORMATION — À compléter avant de partir
Formation : ______________________ Date : ___________

1. Sur une échelle de 0 à 10, dans quelle mesure 
   recommanderiez-vous cette formation à un collègue ?
   [ 0 ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ] [ 8 ] [ 9 ] [ 10 ]

2. Évaluez les éléments suivants (1=Insuffisant, 5=Excellent) :
   Contenu de la formation         : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Qualité des exercices pratiques : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Compétence du formateur         : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Applicabilité dans mon travail  : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
   Rythme et organisation          : [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

3. Qu'avez-vous appris de plus utile ?
   ___________________________________________________

4. Que manquait-il / améliorer ?
   ___________________________________________________

5. Première action que vous allez mettre en oeuvre dès demain :
   ___________________________________________________
```

**Interprétation NPS formation :**
- Score ≥ 50 : Excellent
- 30-50 : Bon
- 10-29 : À améliorer
- < 10 : Revoir le dispositif

## Niveau 2 — Évaluation de l'apprentissage

### Design d'assessments par type de compétence IA

| Compétence | Type d'évaluation | Exemple de critères |
|-----------|------------------|---------------------|
| Connaissances conceptuelles | QCM, vrai/faux | > 70% de réponses correctes |
| Rédaction de prompts | Grille de notation | Structure RTCT complète, clarté, résultat |
| Analyse de réponses IA | Étude de cas | Identification d'hallucinations, biais |
| Éthique et risques IA | Scenario judgment | Décision éthique justifiée |
| Création d'un agent IA | Projet pratique | Agent fonctionnel + documentation |

### Grille d'évaluation d'un prompt (Bloom L3-L4)

```
GRILLE D'ÉVALUATION — MODULE PROMPT ENGINEERING

Critère 1 : Clarté de la tâche demandée           /5
Critère 2 : Contexte fourni (rôle, situation)     /5
Critère 3 : Contraintes explicites (format, longueur) /5
Critère 4 : Pertinence du résultat obtenu         /5
Critère 5 : Capacité à itérer / améliorer         /5
TOTAL                                             /25

Seuil de validation : 17/25 (68%)
Feedback personnalisé fourni sous 48h
```

## Niveau 3 — Évaluation du transfert comportemental

### Plan de suivi à J+30 / J+60

```yaml
Évaluation_L3_Prompt_Engineering:

  J+14_check_in:
    méthode: "Email de suivi automatique (3 questions)"
    questions:
      - "Avez-vous utilisé les techniques vues en formation ? (O/N)"
      - "Combien de fois cette semaine ?"
      - "Principal obstacle à l'application ?"
    responsable: "Formateur + RH"

  J+30_manager_feedback:
    méthode: "Questionnaire manager (5 min)"
    questions:
      - "Avez-vous observé un changement de comportement ?"
      - "Votre collaborateur utilise-t-il des outils IA ?"
      - "Exemple concret observé ?"
    responsable: "Manager N+1"

  J+60_observation:
    méthode: "Revue de librairie de prompts créée"
    critères: ["Nb prompts créés", "Qualité", "Réutilisation équipe"]
    responsable: "Formateur + manager"

Taux_transfert_cible: 60% des apprenants appliquent J+30
```

## Niveau 4 — ROI de la formation

### Formule de calcul ROI (Philips)

```
ROI (%) = [(Bénéfice net de la formation) / (Coût total)] × 100

Exemple — Formation Prompt Engineering (50 participants managers) :

COÛTS TOTAUX :
  Conception & développement           :  25 000 €
  Animation (2 jours × 5 sessions)     :  20 000 €
  LMS + licences outils                :   5 000 €
  Temps apprenants (2 jours × 50 × 450€):  45 000 €
  TOTAL COÛTS                          :  95 000 €

BÉNÉFICES MESURÉS à T+3 mois :
  Gain productivité (1h/semaine × 50 pers × 45 sem × 55 €) : 123 750 €
  Réduction sous-traitance contenu IA                      :  30 000 €
  Accélération 3 projets IA (time-to-value)                :  50 000 €
  TOTAL BÉNÉFICES                                          : 203 750 €

ROI = [(203 750 - 95 000) / 95 000] × 100 = 114%

Interprétation : Pour 1 € investi, 2,14 € de valeur générée
Payback : 1,5 mois après fin formation
```

## Tableau de bord L&D pour formations IA

| KPI | Calcul | Cible | Fréquence |
|-----|--------|-------|-----------|
| NPS formation | Promoteurs - Détracteurs | > 40 | Par session |
| Score quiz moyen | Moy. résultats évaluations | > 75% | Par session |
| Taux de complétion | % modules complétés | > 85% | Hebdomadaire |
| Taux de transfert L3 | % appliquant à J+30 | > 60% | Par cohorte |
| ROI formation | Bénéfice net / Coût | > 100% | Semestriel |
| Time-to-competency | Délai acquisition compétence | Benchmark | Par parcours |

## Livrables

- Plan d'évaluation Kirkpatrick complet (L1 à L4)
- Questionnaire de satisfaction (L1) + guide d'analyse
- Assessments pédagogiques (L2) avec grilles de notation
- Plan de suivi comportemental (L3) avec templates
- Rapport ROI de la formation (L4) avec modèle de calcul
- Tableau de bord L&D mensuel (Power BI / Google Data Studio)

## Format de sortie

Précise : **nom et thème de la formation**, **public** (profil, nb apprenants), **niveaux Kirkpatrick à évaluer** (L1 à L4), **KPIs business** disponibles pour L4, **outils de collecte** (SurveyMonkey / Typeform / LMS natif), **délai de suivi** post-formation, **sponsor RH ou manager** impliqué dans L3.
