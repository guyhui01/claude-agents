# Skill — Directive NIS2 & Cybersécurité des Systèmes IA
> Certifications : CISSP · CISM · AI Act Compliance Expert · ISO 27001 Lead Implementer

## Objectif
Mettre en conformité les organisations avec la Directive NIS2 (Network and Information Security), en vigueur depuis octobre 2024, pour les systèmes IA critiques.

## NIS2 — Contexte et périmètre

### Organisations concernées (France 2026)
```
Entités Essentielles (EE) — secteurs critiques :
  → Énergie (électricité, gaz, pétrole, hydrogène)
  → Transport (aérien, ferroviaire, maritime, routier)
  → Banques et infrastructures financières
  → Santé et pharmacie
  → Eau (distribution, traitement)
  → Infrastructure numérique (cloud, datacenters, DNS)
  → Administration publique
  → Espace

Entités Importantes (EI) — secteurs importants :
  → Services postaux
  → Gestion des déchets
  → Industrie manufacturière critique
  → Alimentation
  → Chimie
  → Recherche
  → Fournisseurs de services numériques (marketplaces, moteurs de recherche)

Seuil : > 250 employés OU > 50M€ CA (EE) | > 50 employés (EI)
```

### IA et NIS2 — zones de croisement
```
Systèmes IA concernés par NIS2 :
  → LLMs hébergés dans des datacenters critiques
  → IA de détection d'anomalies pour les OT/SCADA
  → Algorithmes de trading automatique (finance)
  → IA médicale (diagnostic, dosage, monitoring)
  → IA de gestion du réseau électrique / transport
  → Supply chain IA (fournisseurs tiers)
```

## Obligations NIS2 applicables aux systèmes IA

### Gouvernance (Art. 20)
```
Obligations :
  ✓ L'organe de direction approuve les mesures de sécurité
  ✓ Formation obligatoire des dirigeants sur la cybersécurité
  ✓ Responsabilité personnelle des dirigeants (sanctions)

Pour les systèmes IA :
  → Politique de sécurité IA approuvée au CODIR
  → Formation CDO / DSI sur les risques NIS2 × IA
  → Responsable de la sécurité des systèmes IA nommé
```

### Mesures de gestion des risques (Art. 21)
```
10 domaines de mesures (transposés aux systèmes IA) :

1. Politiques d'analyse des risques IA
   → Threat modeling des systèmes IA
   → Évaluation des fournisseurs IA (SaaS, open source)

2. Gestion des incidents IA
   → Détection des incidents (SOC IA actif)
   → Procédures de réponse aux incidents IA

3. Continuité d'activité
   → PCA/PRA pour les systèmes IA critiques
   → Gestion des sauvegardes des modèles et données

4. Sécurité de la chaîne d'approvisionnement
   → Audit des fournisseurs IA (OpenAI, AWS Bedrock, Azure AI)
   → SBOM (Software Bill of Materials) pour les modèles

5. Sécurité des systèmes (acquisition, développement, maintenance)
   → DevSecOps intégré dans le pipeline IA
   → Tests de sécurité pré-déploiement

6. Évaluation de l'efficacité des mesures
   → Audits annuels NIS2 × IA
   → Métriques de sécurité (DORA, MTTR)

7. Formation à la cybersécurité IA
   → Programme obligatoire pour les équipes data/IA

8. Cryptographie et chiffrement
   → Chiffrement des modèles, données et communications

9. Gestion des accès (IAM)
   → Zero Trust Architecture pour les systèmes IA

10. Authentification multi-facteurs
    → MFA obligatoire pour l'accès aux modèles de production
```

### Notification d'incidents (Art. 23)
```
Délais de notification à l'ANSSI (France) :

  Alerte précoce : 24 heures après connaissance
    → L'incident est-il significatif ?
    → Soupçon d'acte malveillant ?

  Notification : 72 heures
    → Évaluation initiale (gravité, impact, indicateurs)

  Rapport intermédiaire : sur demande de l'ANSSI

  Rapport final : 1 mois après notification initiale
    → Description détaillée
    → Type de menace / cause racine
    → Mesures correctives

  Incident significatif pour les systèmes IA :
    → Interruption de service > seuil (selon secteur)
    → Compromission de modèle en production
    → Exfiltration de données via le système IA
    → Manipulation du système IA affectant un service critique
```

## Sanctions NIS2
```
Entités Essentielles : jusqu'à 10M€ ou 2% du CA mondial
Entités Importantes  : jusqu'à 7M€ ou 1,4% du CA mondial
Responsabilité personnelle des dirigeants si manquement grave
```

## Livrables
- Cartographie des systèmes IA dans le périmètre NIS2
- Rapport de gap analysis NIS2 × IA
- Plan de mise en conformité priorisé
- Procédures de notification d'incidents (ANSSI)
- Programme de formation NIS2 × IA

## Format de sortie
Précise : secteur (EE ou EI) · systèmes IA concernés · maturité sécurité actuelle · incidents passés · délai de mise en conformité · interlocuteur ANSSI
