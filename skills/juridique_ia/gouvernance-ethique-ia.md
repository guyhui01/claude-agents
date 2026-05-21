# Skill — Gouvernance Éthique de l'IA
> Certifications : AI Act Compliance Expert · CAP IABAC · DPO Certifié CNIL

## Objectif
Mettre en place un cadre de gouvernance éthique de l'IA aligné sur les valeurs de l'organisation, les exigences de l'AI Act et les standards internationaux.

## Principes éthiques IA (consensus international 2026)
```
1. Transparence & Explicabilité
   → Les décisions IA doivent être compréhensibles pour les personnes affectées

2. Équité & Non-discrimination
   → L'IA ne doit pas discriminer sur base de critères protégés

3. Robustesse & Sécurité
   → Les systèmes IA doivent être fiables et résistants aux attaques

4. Vie privée & Protection des données
   → Minimisation, pseudonymisation, droits des personnes

5. Responsabilité & Imputabilité
   → Toujours un humain responsable des décisions IA

6. Bien-être humain & Société
   → L'IA doit contribuer positivement à la société

7. Durabilité environnementale
   → Empreinte carbone des modèles à mesurer et réduire
```

## Structure de gouvernance IA

### Comité IA (AI Board)
```
Composition recommandée :
  → Président : CDO ou Directeur IA
  → DPO (Data Protection Officer)
  → RSSI (Sécurité)
  → Responsable Juridique / Conformité
  → Représentants métiers (2-3 directions concernées)
  → Data Scientist lead
  → Représentant des utilisateurs / employés

Missions :
  → Valider les cas d'usage IA avant déploiement
  → Approuver les DPIA et audits de conformité AI Act
  → Arbitrer sur les dilemmes éthiques
  → Suivre les incidents IA et les actions correctives
  → Rapport annuel au CODIR / Conseil d'Administration

Réunion : mensuelle (1h) + comité extraordinaire si incident
```

### Politique IA de l'organisation
```
Structure recommandée :
  1. Valeurs et principes IA de l'organisation
  2. Cas d'usage autorisés / interdits
  3. Processus de validation des projets IA
  4. Rôles et responsabilités
  5. Formation obligatoire pour les utilisateurs d'IA
  6. Procédure de signalement des incidents / dérives
  7. Revue et mise à jour (annuelle)
```

## Évaluation éthique pré-déploiement (Ethical Impact Assessment)

### Grille d'évaluation (score /100)
| Dimension | Poids | Questions clés |
|---|---|---|
| Transparence | 20% | L'utilisateur sait-il qu'il interagit avec une IA ? |
| Équité | 20% | Les biais ont-ils été testés et mitigés ? |
| Supervision humaine | 20% | Un humain peut-il contrôler / corriger ? |
| Vie privée | 20% | DPIA réalisée ? Données minimisées ? |
| Imputabilité | 20% | Qui est responsable en cas d'erreur ? |

```
Score ≥ 80 : Déploiement autorisé
Score 60-79 : Déploiement avec mesures complémentaires
Score < 60 : Révision du projet requise
```

## Model Cards & IA Transparency Reports
```yaml
# Model Card — template (Google / Hugging Face standard)
model_name: Churn Predictor v2.1
model_type: XGBoost Classifier
training_date: 2026-03-15
training_data:
  description: CRM data 2022-2025 (500K customers)
  sensitive_attributes: age, region (NOT gender, ethnicity)
intended_use:
  - primary: Customer retention campaigns
  - out_of_scope: Individual employee evaluation, credit scoring
performance:
  overall_auc: 0.923
  by_group:
    age_18_35: 0.901
    age_35_55: 0.934
    age_55_plus: 0.908
  fairness_gap: 3.3% (below 5% threshold)
limitations: Model may underperform for customers with <6 months history
ethical_considerations: Campaigns must include opt-out. No automated action > €500.
contact: data-ethics@company.com
```

## Livrables
- Politique IA de l'organisation (document officiel)
- Charte d'utilisation de l'IA (pour les employés)
- Grille d'évaluation éthique (template Excel)
- Rapport annuel de gouvernance IA
- Formation "Éthique IA" (2h, tous niveaux)

## Format de sortie
Précise : taille et secteur de l'organisation · maturité éthique actuelle · incidents IA passés · contraintes sectorielles (santé, finance, RH) · audience (CODIR, équipes, utilisateurs)
