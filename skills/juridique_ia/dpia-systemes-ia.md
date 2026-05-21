# Skill — DPIA (Analyse d'Impact) pour les Systèmes IA
> Certifications : CIPP/E · CIPM · DPO Certifié CNIL · ISO 27701 Lead Implementer

## Objectif
Réaliser les analyses d'impact relatives à la protection des données (DPIA) obligatoires pour les systèmes IA à risque élevé.

## Quand une DPIA est-elle obligatoire ?
```
Art. 35 RGPD + Lignes directrices CNIL :
  Critères déclencheurs (2 critères = DPIA obligatoire) :

  ✓ Évaluation / notation (scoring, profilage)
  ✓ Décision automatisée avec effet légal / significatif
  ✓ Surveillance systématique (monitoring comportemental)
  ✓ Données sensibles (Art. 9) ou données pénales (Art. 10)
  ✓ Données à grande échelle
  ✓ Croisement de datasets (sources multiples)
  ✓ Personnes vulnérables (mineurs, malades, etc.)
  ✓ Utilisation innovante ou nouvelle technologie (IA !)
  ✓ Transfert hors UE avec risque

  Cas systèmes IA → DPIA presque toujours requise
```

## Structure d'une DPIA IA

### Section 1 — Description du traitement
```
1.1 Contexte et objectifs du système IA
    → Finalité(s) du traitement
    → Périmètre fonctionnel et géographique
    → Parties prenantes (responsable, sous-traitants)

1.2 Description des données
    → Types de données (catégories, sensibilité)
    → Source des données (collecte, achat, génération)
    → Volume et fréquence

1.3 Flux de données
    → Collecte → Traitement → Stockage → Suppression
    → Transferts (hors UE : mécanisme de transfert)

1.4 Aspects spécifiques IA
    → Type de modèle (classification, génération, recommandation)
    → Données d'entraînement (source, période, qualité)
    → Décisions prises par le système (automatiques ou assistées)
    → Biais identifiés et mesures de mitigation
```

### Section 2 — Bases légales et nécessité
```
2.1 Base légale (Art. 6 RGPD)
    → [Base choisie] + justification de son applicabilité

2.2 Test de proportionnalité
    → Finalité légitime ?
    → Nécessaire par rapport aux objectifs ?
    → Proportionné aux risques ?
    → Alternatives moins intrusives examinées ?

2.3 Droits des personnes
    → Information (comment ?)
    → Accès (mécanisme ?)
    → Opposition / retrait consentement (comment ?)
    → Portabilité (format, délai)
```

### Section 3 — Identification et évaluation des risques
```
Risques à évaluer :

  Risque 1 : Discrimination et biais
    → Probabilité : [1-4]  Impact : [1-4]  Score : [P×I]
    → Mesures : audit de biais, tests fairness, supervision humaine

  Risque 2 : Fuite de données personnelles
    → Probabilité : ...  Impact : ...
    → Mesures : chiffrement, accès restreint, DLP

  Risque 3 : Décision erronée impactant la personne
    → Probabilité : ...  Impact : ...
    → Mesures : droit de recours, revue humaine, seuil de confiance

  Risque 4 : Opacité / manque d'explicabilité
    → Probabilité : ...  Impact : ...
    → Mesures : XAI (SHAP), décisions explicables Art. 22

  Risque 5 : Réidentification des données pseudonymisées
    → Probabilité : ...  Impact : ...
    → Mesures : k-anonymity, differential privacy
```

### Section 4 — Mesures de mitigation et conclusion
```
Plan d'action :
  | Risque | Mesure | Responsable | Échéance | Statut |
  |--------|--------|-------------|----------|--------|

Avis du DPO :
  → [Favorable / Favorable avec réserves / Défavorable]
  → Consultation CNIL préalable si risque résiduel élevé ?
  → Date de révision de la DPIA (max 3 ans, ou changement significatif)
```

## Livrables
- DPIA complète (document structuré)
- Registre des DPIA de l'organisation
- Plan de mitigation des risques
- Avis du DPO documenté
- Procédure de révision annuelle

## Format de sortie
Précise : système IA décrit · données traitées · finalité · volume de personnes concernées · décisions automatisées (oui/non) · transferts hors UE
