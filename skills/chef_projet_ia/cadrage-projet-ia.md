# Skill — Cadrage de Projet IA
> Certifications : PMP (PMI 2026), PRINCE2 Practitioner, SAFe Product Owner/Product Manager, Anthropic Certified AI Professional 2026

## Objectif
Produire une charte de projet IA complète et partagée — périmètre précis, parties prenantes mappées, critères d'acceptation mesurables — pour aligner toutes les parties dès le kick-off.

## Charte de Projet IA — Template Complet

### 1. Contexte & Problème Métier

```
PROBLÈME MÉTIER (format job-to-be-done)
────────────────────────────────────────
Quand [contexte situation]
Nous voulons [action/résultat souhaité]
Afin de [bénéfice business mesurable]

Exemple :
Quand un conseiller commercial reçoit un lead entrant,
nous voulons scorer automatiquement sa propension à convertir
afin de prioriser les actions commerciales et augmenter le taux de conversion de 15%.
```

### 2. Matrice des Parties Prenantes

| Partie Prenante | Rôle Projet | Intérêt | Influence | Attentes clés | Mode engagement |
|----------------|-------------|---------|-----------|---------------|----------------|
| DSI | Sponsor | Haut | Haut | ROI, sécurité, conformité RGPD | Steering Committee mensuel |
| DG Commerciale | Client principal | Haut | Haut | Amélioration taux conversion | Démo bi-hebdo |
| Équipe Data Science | Maîtrise d'oeuvre | Haut | Moyen | Accès données, env ML | Daily standup |
| DPO | Partie prenante critique | Haut | Haut | Conformité, minimisation données | Revue sprint |
| Utilisateurs finaux | Bénéficiaires | Moyen | Faible | Outil simple, gain temps | UX tests Sprint 3 |
| Juristes | Parties prenantes | Faible | Moyen | Contrats fournisseurs IA | Ponctuel |

### 3. Périmètre — Inclus / Exclus / Hypothèses

```
DANS LE PÉRIMÈTRE (In Scope)
✓ Modèle de scoring de propension sur leads existants (CRM)
✓ API REST d'intégration avec Salesforce
✓ Dashboard de monitoring des performances du modèle
✓ Formation utilisateurs (2 sessions)
✓ Documentation technique et fonctionnelle

HORS PÉRIMÈTRE (Out of Scope)
✗ Refonte du CRM Salesforce
✗ Modèle de recommandation produit (Phase 2)
✗ Intégration avec les outils marketing tiers
✗ Maintenance du modèle après 6 mois (contrat MSP séparé)

HYPOTHÈSES
~ Les données CRM sont disponibles depuis 2022 (36 mois)
~ Le taux de conversion actuel est de 12% (baseline mesurable)
~ L'équipe dispose de 2 Data Scientists disponibles à 80%
~ L'infrastructure cloud AWS est déjà en place
~ Budget validé à 180 000€ TTC
```

### 4. Critères d'Acceptation SMART

```yaml
# acceptance_criteria.yaml
criteres_acceptation:
  performance_modele:
    - id: AC-01
      description: "AUC-ROC >= 0.85 sur le jeu de test holdout"
      mesure: "sklearn.metrics.roc_auc_score"
      seuil: 0.85
      bloquant: true

    - id: AC-02
      description: "Precision >= 0.75 pour le segment 'Hot leads' (score > 0.8)"
      mesure: "sklearn.metrics.precision_score"
      seuil: 0.75
      bloquant: true

    - id: AC-03
      description: "Latence d'inférence API P99 <= 200ms"
      mesure: "percentile 99 des temps de réponse"
      seuil_ms: 200
      bloquant: true

  impact_metier:
    - id: AC-04
      description: "Taux de conversion sur leads scorés 'Hot' >= 20% (vs 12% baseline)"
      mesure: "taux conversion 3 mois post-déploiement"
      seuil: 0.20
      bloquant: false  # Mesurable 3 mois après go-live

  conformite:
    - id: AC-05
      description: "DPO a validé l'AIPD (Analyse d'Impact Vie Privée)"
      mesure: "document signé"
      bloquant: true

    - id: AC-06
      description: "Explicabilité : top 3 features disponibles pour chaque score"
      mesure: "SHAP values exposées dans l'API"
      bloquant: true

  operationnel:
    - id: AC-07
      description: "Disponibilité API >= 99.5% sur une fenêtre de 30 jours"
      mesure: "SLO monitoring"
      bloquant: true

    - id: AC-08
      description: "Documentation technique et utilisateur livrée"
      mesure: "revue DG + DSI"
      bloquant: true
```

### 5. Gouvernance & Prise de Décision

```
INSTANCES DE GOUVERNANCE
─────────────────────────────────────────────────────────
Steering Committee     Mensuel   DSI, DG Commerciale, PM
Revue de Sprint        Bi-hebdo  Toutes parties prenantes
Daily Standup          Quotidien Équipe projet
Comité Éthique IA      Sprint 2  DPO, Juriste, PM, DS Lead
Risk Review            Mensuel   PM, Tech Lead, DPO

MATRICE RACI DÉCISIONS CLÉS
─────────────────────────────────────────────────────────
Choix du modèle ML       R: Data Scientist  A: DSI
Go/No-Go mise en prod    R: PM              A: Sponsor
Changement de périmètre  R: PM              A: Steering
Budget supplémentaire    R: Sponsor         A: DG

R=Responsible A=Accountable C=Consulted I=Informed
```

### 6. Contraintes & Risques Majeurs

| # | Contrainte/Risque | Probabilité | Impact | Mitigation |
|---|-----------------|-------------|--------|------------|
| R1 | Qualité données CRM insuffisante | Haute | Critique | Audit data dès Sprint 1 |
| R2 | Conformité RGPD — délai DPO | Moyenne | Critique | Lancer AIPD en parallèle |
| R3 | Départ Data Scientist clé | Faible | Élevé | Documentation continue |
| R4 | Performance modèle < seuil | Moyenne | Élevé | Feature engineering Sprint 2 |
| R5 | Budget dépassé | Faible | Moyen | Suivi EVM hebdomadaire |

## Livrables
- Charte de projet signée (toutes parties prenantes)
- Matrice des parties prenantes avec plan d'engagement
- Backlog initial priorisé (au moins 20 user stories)
- Critères d'acceptation formalisés en YAML versionné
- Planning de gouvernance (calendrier des instances)
- AIPD / registre de traitement IA (si données personnelles)

## Format de sortie
Précise : secteur d'activité, cas d'usage IA (NLP, ML, computer vision, LLM), volume de données disponibles, contraintes réglementaires (RGPD, IA Act), budget indicatif, durée projet, équipe (taille, expertise), systèmes existants à intégrer.
