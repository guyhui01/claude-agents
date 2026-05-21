# Skill — Centre d'Excellence IA (CoE IA)

> Certifications : AWS Certified AI Practitioner 2026, Google Cloud Professional ML Engineer, Microsoft AI-102 Azure AI Engineer, Anthropic Prompt Engineering Certification 2026

## Objectif

Concevoir et opérationnaliser un Centre d'Excellence IA (CoE IA) : définir sa structure organisationnelle, ses rôles, ses missions, ses modes de gouvernance et les indicateurs de performance associés.

## Modèles organisationnels du CoE IA

### Les 4 archétypes de CoE

| Modèle | Description | Adapté pour | Risques |
|--------|-------------|-------------|---------|
| **Centralisé** | Équipe centrale produit et déploie tous les use cases | PME, démarrage | Goulot d'étranglement |
| **Fédéré** | Équipe centrale + relais dans chaque BU | Grands groupes | Coordination complexe |
| **Hybride (Hub & Spoke)** | CoE central (standards, plateformes) + équipes IA décentralisées | ETI matures | Gouvernance critique |
| **Virtuel** | Communauté de pratique sans équipe dédiée | Début de transformation | Manque de ressources |

### Structure Hub & Spoke recommandée (2026)

```
                    ┌─────────────────────┐
                    │   CoE IA Central    │
                    │  (Hub — Standards)  │
                    └────────┬────────────┘
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
    ┌──────┴──────┐   ┌──────┴──────┐   ┌──────┴──────┐
    │  BU Finance │   │  BU Marketing│   │  BU Ops     │
    │  (Spoke)    │   │  (Spoke)     │   │  (Spoke)    │
    │ 1 IA Lead   │   │ 1 IA Lead    │   │ 1 IA Lead   │
    └─────────────┘   └─────────────┘   └─────────────┘
```

## Rôles et responsabilités du CoE IA

### Organigramme type (ETI 1000-5000 collaborateurs)

```yaml
CoE_IA_Équipe_Centrale:
  Head_of_AI / Chief AI Officer:
    missions: ["Vision IA", "CODIR reporting", "Partenariats stratégiques"]
    profil: "Ex-CDO ou VP Engineering + expertise IA"

  AI_Strategy_Lead:
    missions: ["Roadmap use cases", "ROI tracking", "Prioritisation"]
    profil: "MBA + 5 ans Data/IA"

  ML_Platform_Engineer (x2):
    missions: ["MLOps platform", "Feature store", "LLMOps infra"]
    profil: "Senior MLOps, Kubernetes, Kubeflow/MLflow"

  AI_Ethics_Officer:
    missions: ["Responsible AI framework", "Biais algorithmiques", "Conformité EU AI Act"]
    profil: "Juriste + Data Scientist ou philosophe tech"

  AI_Enablement_Lead:
    missions: ["Formation équipes", "Communauté de pratique", "Documentation"]
    profil: "Formateur IA + Data Scientist"

  Data_Scientists (x3):
    missions: ["Développement modèles", "Proof of concept", "Research"]
    profil: "PhD ou Bac+5 ML, Python, PyTorch/TensorFlow"
```

### Missions du CoE par catégorie

| Catégorie | Missions | Indicateurs |
|-----------|---------|-------------|
| **Standards & Gouvernance** | Définir politiques IA, EU AI Act compliance, framework éthique | Taux de conformité, nb policies publiées |
| **Plateforme & Tooling** | Gérer ML platform, LLMOps, feature store, model registry | Uptime plateforme, time-to-deploy |
| **Delivery & Use cases** | Accélérer projets IA des BU, revue de code, best practices | Nb use cases en prod, NPS équipes |
| **Enablement & Culture** | Formation, communauté, Prompt Engineering Guild | Nb certifiés, score culture data |
| **Innovation & Veille** | Research, POC technologies émergentes, publications | Nb POC lancés, papers lus/partagés |

## Gouvernance du CoE IA

### Processus de validation des use cases IA

```
Demande BU
    ↓
[Screening 48h] — CoE vérifie faisabilité + données disponibles
    ↓
[Scoring use case] — Impact, faisabilité, risque, alignement stratégique
    ↓ Score ≥ 3.5/5
[Lancement POC] — 4-8 semaines, budget plafonné 50 k€
    ↓ POC validé
[Passage en production] — MLOps pipeline, monitoring, SLA
    ↓
[Mesure ROI] — T+3 mois, T+6 mois, T+12 mois
```

### Tableau de bord CoE IA — KPIs

| KPI | Définition | Cible 2026 | Fréquence |
|-----|-----------|-----------|-----------|
| Use cases en production | Nb modèles/apps IA live | > 10 | Mensuel |
| Time-to-deploy | POC → Prod (semaines) | < 8 semaines | Par projet |
| Valeur générée (€) | ROI cumulé use cases | > 5 M€ | Trimestriel |
| NPS équipes métier | Satisfaction des BU | > 7/10 | Semestriel |
| Taux de réutilisation | Features/modèles réutilisés | > 40% | Trimestriel |
| Score EU AI Act | Conformité réglementaire | 100% systèmes critiques | Trimestriel |
| Membres communauté IA | Guild + certifiés IA | > 150 | Mensuel |

## Livrables

- Charte du CoE IA (mission, vision, valeurs, périmètre)
- Organigramme détaillé avec fiches de poste
- Processus de gestion du portefeuille use cases IA
- Tableau de bord CoE IA (Power BI / Looker template)
- Framework de gouvernance responsable (EU AI Act checklist)
- Plan d'animation de la communauté IA (Guild, newsletters, hackathons)
- Budget annuel CoE IA (masse salariale + plateforme + formation)

## Format de sortie

Précise : **taille de l'organisation** (collaborateurs), **secteur** (contraintes réglementaires EU AI Act niveau), **modèle souhaité** (centralisé / fédéré / hub-spoke / virtuel), **use cases IA existants**, **équipe data actuelle**, **budget disponible**, **interlocuteur sponsor** (CDO / DSI / DG).
