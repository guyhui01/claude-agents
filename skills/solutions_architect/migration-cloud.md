# Skill — Stratégie de Migration Cloud

> Certifications : AWS Solutions Architect Professional (SAP-C02), Google Professional Cloud Architect, AZ-305, TOGAF 10

## Objectif

Définir et piloter la stratégie de migration d'un SI vers le cloud : évaluation des workloads, choix de la stratégie (6R), planning par vagues, gestion des risques et pilotage financier FinOps.

## Les 6R de la migration cloud (framework AWS)

```
STRATÉGIE     NOM              DESCRIPTION                            EFFORT   ROI
────────────  ───────────────  ─────────────────────────────────────  ───────  ─────
Retire        Abandon          Décommissionner les apps non utilisées  Faible   Élevé
Retain        Garder           Maintenir on-prem (legacy, régul.)      Nul      Nul
Rehost        Lift & Shift     Migrer sans modification (VM → VM)      Faible   Moyen
Replatform    Lift & Tinker    Optimisations mineures (DB → RDS)       Moyen    Bon
Repurchase    SaaS             Remplacer par un SaaS (CRM → Salesforce) Moyen   Bon
Refactor      Re-architect     Réécrire pour cloud-native (microsvcs)  Élevé    Très élevé
```

## Processus de migration en 4 phases

### Phase 1 — Discovery & Assessment (4-8 semaines)

```yaml
activites:
  - Inventaire complet du SI (applications, serveurs, BDD, dépendances)
  - Analyse de dépendances inter-applicatives (dependency mapping)
  - Qualification workload par workload (criticité, complexité, data sensible)
  - Scoring migration readiness (Migration Readiness Assessment — MRA)
  - Estimation TCO on-prem vs cloud (3-5 ans)

livrables:
  - Portfolio applicatif avec scoring 6R
  - Cartographie des dépendances
  - Business case migration
```

### Phase 2 — Design & Pilot (4-6 semaines)

```yaml
activites:
  - Choix du modèle cloud (public / privé / hybride / multi-cloud)
  - Landing Zone design (réseau, sécurité, gouvernance, IAM)
  - POC sur 1-2 workloads représentatifs
  - Plan de migration par vagues (Wave Planning)
  - Définition du modèle opérationnel cible (Cloud Operating Model)

livrables:
  - Architecture Landing Zone (IaC Terraform)
  - Plan de migration vague 1 validé
  - Résultats POC
```

### Phase 3 — Migration par vagues

```
VAGUE 1 — QUICK WINS (Mois 1-3)
  → Applications non critiques, faible complexité
  → Stratégie : Rehost (Lift & Shift)
  → Objectif : 20-30% des workloads, montée en compétences équipe

VAGUE 2 — CORE BUSINESS (Mois 4-8)
  → Applications métier importantes, connectivité validée
  → Stratégie : Rehost + Replatform (DB managées, containers)
  → Objectif : 50% supplémentaires, optimisations FinOps

VAGUE 3 — TRANSFORMATION (Mois 9-18)
  → Applications critiques, modernisation progressive
  → Stratégie : Refactor / Re-architect (cloud-native)
  → Objectif : Derniers 30%, performance maximale
```

### Phase 4 — Optimisation & Run

```yaml
activites:
  - Décommissionnement data center on-prem
  - Optimisation FinOps (Reserved Instances, Spot, rightsizing)
  - Mise en place observabilité cloud-native
  - Formation équipes opérations cloud
  - Revue architecture continue (Well-Architected Review)

livrables:
  - Rapport FinOps mensuel
  - Architecture Well-Architected validée
  - Runbook opérations cloud
```

## Grille TCO cloud vs on-prem

```
COÛT              ON-PREM          CLOUD
──────────────    ─────────────    ────────────────────
Infrastructure    Capex élevé      Opex (pay-as-you-go)
Maintenance       Élevé (équipe)   Inclus dans le service
Scalabilité       Limitée, lente   Instantanée, élastique
Résilience        Coûteuse         Native (multi-AZ)
Sécurité physique À votre charge   Provider (certifié)
Obsolescence      Cycle 3-5 ans    Continue, invisible
```

## Livrables

- Business case migration (TCO 3-5 ans : on-prem vs cloud)
- Portfolio applicatif avec stratégie 6R par workload
- Architecture Landing Zone (Terraform IaC)
- Plan de migration par vagues (Wave Plan)
- Tableau de bord FinOps (coûts par service / équipe / projet)

## Format de sortie

Précise : **taille du SI** (nb d'applications, serveurs), **cloud provider cible** (AWS / GCP / Azure / multi-cloud), **contraintes** (souveraineté, HDS, SecNumCloud, RGPD), **délai et budget migration**, **niveau de maturité cloud** de l'équipe (1-5).
