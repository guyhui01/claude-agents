# Skill — Programme Data Literacy

> Certifications : Data Literacy Certified Educator (Data Literacy Project / Qlik) 2026, CDMP Associate (DAMA), Tableau Desktop Specialist, Google Data Analytics Professional Certificate

## Objectif

Concevoir et déployer un programme Data Literacy sur 4 niveaux couvrant les compétences données par rôle, avec les outils pédagogiques associés et un dispositif de certification interne.

## Architecture du programme Data Literacy (4 niveaux)

### Modèle de progression

```
NIVEAU 4 — DATA STORYTELLER         ████████████ Expert
  Créer et communiquer des insights  (Directeurs, CDO, Heads of)

NIVEAU 3 — DATA PRACTITIONER        █████████    Avancé
  Analyser et modéliser              (Analystes, Data Stewards, POs)

NIVEAU 2 — DATA USER                ██████       Intermédiaire
  Lire et interpréter les données    (Managers, Chefs de projet)

NIVEAU 1 — DATA AWARE               ███          Fondamentaux
  Comprendre les bases               (Tous collaborateurs)
```

### Tableau des compétences par niveau

| Compétence | N1 Aware | N2 User | N3 Practitioner | N4 Storyteller |
|-----------|---------|---------|-----------------|----------------|
| Lire un graphique simple | X | X | X | X |
| Comprendre moyenne/médiane | X | X | X | X |
| Interpréter un tableau croisé | | X | X | X |
| Identifier les biais dans un graphique | | X | X | X |
| Créer un dashboard BI | | | X | X |
| Réaliser une analyse de corrélation | | | X | X |
| Faire du SQL de base | | | X | X |
| Concevoir un storytelling de données | | | | X |
| Évaluer la qualité des données | | | X | X |
| Comprendre les concepts ML de base | | | X | X |

## Niveau 1 — Data Aware (Tous collaborateurs)

### Programme (3h — e-learning auto-rythme)

```
MODULE 1.1 — Les données dans ma vie pro (45 min)
  Contenu :
  - Qu'est-ce qu'une donnée ? (structurée, non structurée)
  - Où vivent les données de mon entreprise ?
  - La chaîne de valeur de la donnée (collecte → décision)
  Exercice : Carte mentale "mes sources de données quotidiennes"

MODULE 1.2 — Lire des graphiques sans se tromper (60 min)
  Contenu :
  - Les 6 types de graphiques et leurs usages
  - Pièges visuels : axes tronqués, proportions faussées
  - Choisir le bon graphique pour son message
  Exercice : "Trouvez l'erreur" — 10 graphiques à analyser

MODULE 1.3 — Statistiques du quotidien (45 min)
  Contenu :
  - Moyenne, médiane, mode : quand utiliser lequel ?
  - Corrélation ≠ causalité (exemples amusants)
  - Comprendre un pourcentage, un taux de croissance
  Exercice : "Fake or real ?" — 5 stats à démystifier

MODULE 1.4 — RGPD et données personnelles (30 min)
  Contenu :
  - Qu'est-ce qu'une donnée personnelle ?
  - Mes droits et devoirs en entreprise
  - Les 5 règles d'or (quiz final)
  Quiz de validation : 10 questions (seuil : 70%)
```

## Niveau 2 — Data User (Managers et chefs de projet)

### Programme (2 jours — format blended)

```
JOUR 1 — E-learning préparatoire (3h auto-rythme)
  + Présentiel 4h (ou distanciel synchrone)

  Matin présentiel :
  - Lire et challenger un tableau de bord (Power BI / Tableau)
  - Questions clés à poser à son équipe analytics
  - Identifier une anomalie dans un rapport

  Après-midi présentiel :
  - Atelier : "Mon dashboard stratégique" (Power BI guided)
  - Cas pratique : analyser les performances d'une BU
  - Exercice : formuler une question analytique précise

JOUR 2 — Workshop "Décision data-driven" (4h présentiel)
  - Du gut feeling à la data-backed decision
  - Cognitive biases et antidotes data
  - Simulation : prendre une décision d'investissement
    avec données imparfaites
```

## Niveau 3 — Data Practitioner (Analystes, Data Stewards, POs)

### Programme (5 jours — bootcamp ou parcours 6 semaines)

```
BLOC A — Excel/SQL pour l'analyse (2 jours)
  Excel avancé : tableaux croisés, XLOOKUP, Power Query
  SQL fondamentaux : SELECT, JOIN, GROUP BY, window functions
  Exercice fil rouge : analyser un dataset commercial (CSV → insights)

BLOC B — Visualisation & Storytelling (1 jour)
  Power BI / Tableau : modèle de données, DAX basics, dashboards
  Principes de dataviz (Tufte, Cairo)
  Exercice : transformer un tableau Excel en dashboard exécutif

BLOC C — Qualité & Gouvernance des données (1 jour)
  Dimensions de qualité (DAMA : complétude, exactitude, cohérence)
  Profiling de données (Python pandas ou Great Expectations)
  Rôle du Data Steward : cas pratiques

BLOC D — Introduction au Machine Learning (1 jour)
  Comprendre sans coder : classification, régression, clustering
  Cas d'usage métier (churn, recommandation, fraude)
  Évaluation d'un modèle : précision, rappel, AUC (sans maths)
```

## Niveau 4 — Data Storyteller (Directeurs, CDO, Heads of)

### Programme (1,5 jour — executive format)

```
MODULE 4.1 — Data Storytelling avancé (4h)
  Narrative Data : la structure héroïque appliquée aux insights
  "So what?" test : transformer un chiffre en décision
  Outil : Flourish, Datawrapper pour visualisations impactantes

MODULE 4.2 — Challenger les analyses de son équipe (2h)
  10 questions à poser à son Data Scientist
  Red flags dans un dashboard (corrélations douteuses, N trop petit)
  Cas pratique : évaluer la fiabilité d'un modèle prédictif

MODULE 4.3 — Présenter des insights au CODIR (2h)
  Structure "Pyramid Principle" pour les recommandations data
  Gestion des objections (incertitude des données, limites)
  Workshop : pitcher un use cases IA au CODIR (simulation)
```

## Certification interne Data Literacy

### Structure du dispositif de certification

```yaml
Certification_Data_Literacy_Interne:
  Niveaux: [N1_Aware, N2_User, N3_Practitioner, N4_Storyteller]

  Épreuves_par_niveau:
    N1:
      - Quiz_en_ligne: "20 questions, 70% requis"
      - Durée: "30 min"
    N2:
      - Quiz_en_ligne: "30 questions, 75% requis"
      - Cas_pratique: "Analyser un dashboard et formuler 3 insights"
    N3:
      - Examen_théorique: "40 questions, 75% requis"
      - Projet_pratique: "Dashboard + analyse SQL + présentation 10 min"
    N4:
      - Soutenance: "Présenter une recommandation data à un jury"
      - Durée: "20 min présentation + 10 min Q&A"

  Badge_numérique:
    plateforme: "Credly"
    validité: "2 ans (recertification requise)"
    visible_sur: "LinkedIn + intranet"

  Reconnaissance_RH:
    N2: "Mentionné dans l'entretien annuel"
    N3: "Bonus formation 500€ + évolution de poste"
    N4: "Accès programme Data Leader + visibilité CODIR"
```

## Outils pédagogiques recommandés par niveau

| Niveau | Exercices | BI Tool | Certification externe complémentaire |
|--------|-----------|---------|--------------------------------------|
| N1 | Kahoot, Google Forms | — | Google Data Literacy Badge |
| N2 | Power BI Service | Power BI | Microsoft DP-900 |
| N3 | SQL Fiddle, Mode Analytics | Tableau / PBI | Google Data Analytics (Coursera) |
| N4 | Flourish, Datawrapper | Tableau | Tableau Desktop Specialist |

## Livrables

- Curriculum complet 4 niveaux (fiches pédagogiques, contenus, exercices)
- Outil d'autodiagnostic Data Literacy (questionnaire de positionnement)
- Learning paths personnalisés par rôle métier (carte des parcours)
- Dispositif de certification interne (épreuves + grilles de notation)
- Tableau de bord programme (taux de certification par niveau/BU)
- Kit communication RH pour lancer le programme

## Format de sortie

Précise : **population totale cible** (nb collaborateurs), **répartition par rôle** (opérationnels / managers / directeurs), **niveau de départ estimé** (1-4), **outil BI en place** (Power BI / Tableau / Looker / autre), **LMS disponible**, **budget programme**, **horizon de déploiement** (6 mois / 12 mois / 18 mois), **sponsor RH ou CDO**.

## Sources
- **DAMA International** — *DMBOK 2* (2017) — socle de gouvernance et culture de la donnée
- **Edward Tufte** — *The Visual Display of Quantitative Information* (1983) — principes de dataviz
- **Alberto Cairo** — *The Functional Art* (2012) / *The Truthful Art* (2016)
- **Barbara Minto** — *The Minto Pyramid Principle* (1987) — structuration du message data
- **Qlik / Data Literacy Project** & Gartner — cadres de littératie data en entreprise

## Anti-patterns
- Confondre data literacy (lire / interpréter / communiquer) et maîtrise d'un outil BI
- Programme uniforme, sans différenciation par rôle et par niveau (1-4)
- Dataviz trompeuses (axes tronqués, camemberts surchargés) — anti-Tufte
- Certifier sans mise en pratique sur des données métier réelles
- Citer « Pyramid Principle » sans l'attribuer à Barbara Minto

## Voir aussi
- [conception-parcours.md](conception-parcours.md) — structurer les 4 niveaux (Bloom)
- [evaluation-formation.md](evaluation-formation.md) — mesurer la montée en littératie
- [`../redacteur_ia/redaction-rapport.md`](../redacteur_ia/redaction-rapport.md) — communiquer les données (Minto)
- [`../business_analyst/reporting-moa.md`](../business_analyst/reporting-moa.md) — restitution data côté MOA
