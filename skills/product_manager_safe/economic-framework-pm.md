# Skill — Cadre Économique SAFe (WSJF, Lean Business Case, ROI)
> Certifications : SAFe LPM (Scaled Agile), SAFe POPM 6 (Scaled Agile), SAFe SPC (Scaled Agile)

## Objectif
Appliquer le cadre économique SAFe au niveau Programme — calculer le WSJF des Features, monter un Lean Business Case pour les Epics, et piloter le ROI des investments produit — pour prendre des décisions de priorisation fondées sur la valeur économique.

## WSJF au niveau Programme (Features)

```
WSJF = Cost of Delay / Job Size

Cost of Delay = Business Value + Time Criticality + Risk Reduction/Opportunity Enablement

ÉCHELLE DE NOTATION (Fibonacci modifié : 1, 2, 3, 5, 8, 13, 20)
────────────────────────────────────────────────────────────────────
Business Value (BV)    : Valeur directe pour le client / business
Time Criticality (TC)  : Urgence temporelle (fenêtre d'opportunité)
RR/OE                  : Réduction de risque ou activation d'opportunité
Job Size               : Effort estimé (story points ou T-shirt sizing)
```

## Tableau WSJF — Template Features

| ID | Feature | BV | TC | RR/OE | CoD | Size | WSJF | Priorité |
|---|---|---|---|---|---|---|---|---|
| F-01 | Scoring CVs IA | 10 | 8 | 5 | 23 | 5 | **4.6** | 🥇 1 |
| F-02 | Dashboard RH | 8 | 6 | 3 | 17 | 3 | **5.7** | 🥇 1 (petit!) |
| F-03 | API SIRH | 7 | 4 | 8 | 19 | 8 | **2.4** | 🥉 3 |
| F-04 | Mobile App | 6 | 3 | 2 | 11 | 13 | **0.8** | ❌ Déprioritisé |

## Lean Business Case — Template Epic

```yaml
lean_business_case:
  epic: "EPIC-01 — Module Formation IA"
  version: "v1.0"
  date: "2026-05-22"
  owner: "Product Manager — [NOM]"
  
  contexte_probleme: |
    Les équipes RH manquent de compétences sur les outils IA déployés.
    Le taux d'adoption stagne à 42% (cible 80%).
    Coût de l'inaction : -38% de productivité attendue non réalisée.
    
  solution_proposee: |
    Module de formation intégré au produit : micro-learning in-app,
    coaching IA personnalisé, certifications internes.
    
  impacts_business:
    - "Augmenter le taux d'adoption de 42% à 80% en 2 PI"
    - "Réduire les coûts de formation externes de 30%"
    - "Améliorer le CSAT utilisateurs de 3.4 à 4.2/5"
    
  estimation_cout:
    developpement: "8 Features — ~80 story points — PI-14 à PI-15"
    budget_infrastructure: "15 000 € / an (LMS cloud)"
    
  estimation_valeur:
    gain_productivite: "180 000 € / an (38% adoption gap × coût RH)"
    reduction_formation: "25 000 € / an"
    roi_annuel: "205 000 €"
    payback_period: "8 mois"
    
  go_no_go: "GO — ROI positif à 8 mois, aligné sur OKR KR2"
  
  hypotheses_cles:
    - "Le module in-app est adopté à 75% dans les 3 premiers mois"
    - "Les utilisateurs consacrent 20 min/semaine à la formation"
```

## Livrables
- Tableau WSJF Features complet
- Lean Business Case Epic (YAML / PowerPoint)
- Analyse ROI avec payback period
- Recommandation go / no-go documentée

## Format de sortie
Précise : liste des features / epics à évaluer, données de coût disponibles, contraintes budgétaires, horizon de retour sur investissement attendu.
