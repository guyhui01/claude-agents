# Skill Contre-Expert — Audit de Conformité Méthode

> **Référence :** SAFe 6 · Scrum Guide 2020 · ISTQB CTFL/CTAL · PMI PMBOK 7 · ISO 9001:2015

---

## Objectif

Vérifier qu'un livrable, un workflow ou une pratique respecte **strictement** les textes officiels des méthodes certifiantes. Produire un rapport d'audit structuré avec constat, référence et recommandation pour chaque écart détecté.

---

## Checklists de conformité

### Scrum Guide 2020

| Élément | Conformité attendue | Déviation fréquente |
|---|---|---|
| Sprint Goal | **1 seul** par Sprint, formulé par l'équipe | Plusieurs Sprint Goals ou objectifs trop vagues |
| Daily Scrum | Plan pour les **24h suivantes**, animé par les Developers | SM qui anime et dirige (viole l'auto-organisation) |
| Sprint Review | Inspection du **Increment** avec les parties prenantes | Simple démo sans feedback ni adaptation |
| Sprint Retrospective | Amélioration du **processus** de l'équipe | Actions d'amélioration non intégrées au Sprint suivant |
| Backlog Refinement | Continue, **≤ 10%** de la capacité du Sprint | Session unique en bloc en début de Sprint |
| Product Goal | **1 seul** Product Goal à la fois | Product Goal inexistant ou multiple |
| Developers auto-gérés | Les Developers s'organisent seuls | SM ou PO assignent les tâches aux développeurs |

### SAFe 6

| Élément | Conformité attendue | Déviation fréquente |
|---|---|---|
| WSJF | Cotation **relative et indépendante par colonne** (plus petit = 1) | Scores absolus ou hérités du backlog précédent |
| MoSCoW | Réservé aux **User Stories** uniquement | Appliqué aux Epics ou Features |
| PI Objectives | **Committed** vs **Uncommitted** distincts et explicites | Tous les PI Objectives marqués committed |
| Feature DoD | Benefit Hypothesis à **niveau Feature** | LBC (Lean Business Case) appliqué aux Features |
| Epic Lean Business Case | Réservé aux **Épics** (investissement > un PI) | LBC utilisé pour des Features ou Stories |
| Iteration Goal | Aligné sur le **PI Objective** de l'ART | Iteration Goals déconnectés du PI Planning |
| ART Sync | Cadencé tous les **2 sprints** minimum | PO Sync et Scrum of Scrums confondus ou absents |

### ISTQB (CTFL / CTAL-TM)

| Élément | Conformité attendue | Déviation fréquente |
|---|---|---|
| Critères d'entrée | Définis **avant** le début de la phase de test | Absents ou définis pendant les tests |
| Critères de sortie | Métriques **mesurables et datées** (% couverture, nb anomalies ouvertes) | "Tous les tests passent" sans seuil défini |
| Niveaux de test | Pyramide : unitaires > intégration > système > acceptation | Tests système en lieu et place des tests unitaires |
| Sévérité vs Priorité | **Distincts** — sévérité = impact technique, priorité = urgence métier | Sévérité et priorité confondus dans le même champ |
| Traçabilité | Exigence ↔ cas de test ↔ résultat | Cas de tests non rattachés aux exigences |

### PMI PMBOK 7 (Performance Domains)

| Domaine | Conformité attendue | Déviation fréquente |
|---|---|---|
| Stakeholders | Engagement continu, pas seulement en kick-off | Parties prenantes consultées uniquement au démarrage |
| Team | Auto-gestion et responsabilisation | Micro-management par le chef de projet |
| Planning | **Adaptatif** — révision régulière du plan | Plan initial figé sans révision |
| Delivery | Valeur livrable **à chaque itération** | Valeur uniquement en fin de projet |
| Measurement | Métriques **orientées résultats** (outcomes), pas seulement activités (outputs) | Reporting d'activités sans lien avec la valeur produite |

---

## Format de sortie — Rapport d'audit

```
RAPPORT D'AUDIT DE CONFORMITÉ MÉTHODE
======================================
Livrable audité : [nom du livrable]
Date : [JJ/MM/AAAA]
Référentiel(s) : [SAFe 6 / Scrum Guide 2020 / ISTQB CTFL / PMI PMBOK 7]

SYNTHÈSE : ☐ Conforme  ☐ Non-conforme  ☐ Partiellement conforme
Nombre d'écarts détectés : [N]

ÉCARTS DÉTECTÉS :
-----------------
Écart #1
  Constat     : [description précise de la déviation]
  Référence   : [texte officiel · section · page]
  Impact      : [risque si non corrigé]
  Recommandation : [action corrective concrète]

[Répéter pour chaque écart]

POINTS CONFORMES :
------------------
- [élément vérifié conforme · référence]

VERDICT FINAL : ☐ Promouvoir  ☐ Corriger avant promotion  ☐ Rejeter
```

---

## Règle anti-théâtre

Ne jamais cocher "Conforme" sans avoir vérifié chaque item de la checklist applicable. Un audit superficiel est pire qu'une absence d'audit — il donne une fausse assurance de qualité.
