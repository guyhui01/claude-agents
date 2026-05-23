# WF-008 — Audit conformité IA Act / RGPD

> Système IA à auditer → cartographie obligations → revue architecture → sécurité → données → gouvernance → rapport + plan de remédiation
> Certifications mobilisées : CIPP/E · DPO · ISO 42001 · ISO 27001 · CISSP · CDMP · TOGAF 10 · PROSCI

---

## Carte d'identité

```yaml
id: "WF-008"
nom: "Audit conformité IA Act / RGPD"
domaine: "Conformité & Gouvernance"
declencheur: "Demande d'audit conformité d'un système IA (production ou projet) — pression réglementaire, contrôle CNIL/AI Office, due diligence M&A"
resultat_final: "Rapport d'audit conformité + cartographie risques + plan de remédiation priorisé + gouvernance cible"
duree_estimee: "90-150 min"
modele_recommande: "claude-opus-4-7"
modele_raison: "Workflow réglementaire à très haut enjeu : qualification du tier de risque AI Act, analyse RGPD multi-articles, threat modeling, gouvernance IA. Erreur de qualification = exposition à sanctions (jusqu'à 7% du CA mondial sous AI Act). Opus 4.7 indispensable pour la fiabilité du raisonnement juridico-technique multi-référentiels."
modele_alternatif: "claude-sonnet-4-6"  # uniquement pour des pré-audits express (système IA de risque limité, périmètre < 1 cas d'usage)
agents_core:
  - JURIDIQUE-IA           # cartographie obligations AI Act / RGPD / NIS2
  - AI-ARCHITECT           # revue architecture (transparence, explicabilité, monitoring)
  - SECURITE-IA            # threat modeling, robustesse adversariale, mesures techniques
  - DATA-ENGINEER          # data lineage, qualité données, biais d'entraînement
  - CDO-DIRECTEUR-IA       # gouvernance IA cible, comité éthique, instances
  - CHANGE-MANAGER         # plan de déploiement gouvernance + sensibilisation équipes
  - REDACTEUR-IA           # rapport audit final + plan remédiation priorisé
agents_optionnels:
  - CONSULTANT-IA          # si volet stratégique / impact business à évaluer
  - FINANCIAL-ANALYST      # si chiffrage du coût de remédiation requis
  - DATA-SCIENTIST         # si audit modèle (biais, fairness, drift) approfondi requis
statut: "disponible"
version: "1.0"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | JURIDIQUE-IA | Cartographie obligations applicables | Matrice obligations AI Act + RGPD + NIS2 |
| 2 | AI-ARCHITECT | Revue architecture IA (transparence, monitoring) | Rapport conformité architecture |
| 3 | SECURITE-IA | Threat modeling + mesures techniques | Rapport sécurité IA + plan de contrôles |
| 4 | DATA-ENGINEER | Data lineage + qualité données + biais | Rapport données + plan correction |
| 5 | CDO-DIRECTEUR-IA | Gouvernance IA cible + instances | Cadre gouvernance + RACI |
| 6 | CHANGE-MANAGER | Plan déploiement gouvernance + sensibilisation | Plan ADKAR conformité IA |
| 7 | REDACTEUR-IA | Rapport audit final + plan remédiation | Rapport audit + plan priorisé |
| opt | DATA-SCIENTIST | Audit modèle (biais, fairness, drift) | Rapport audit modèle ML |
| opt | FINANCIAL-ANALYST | Chiffrage coût remédiation | Business case mise en conformité |

---

## Paramètres contextuels

```
CONTEXTE AUDIT CONFORMITÉ (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Client              : [Nom / Secteur / Taille / Implantations géographiques]
Système IA audité   : [Nom / Cas d'usage / Statut prod ou projet]
Origine de l'audit  : [Préventif / Contrôle CNIL ou AI Office / Due diligence M&A / Sinistre]
Tier AI Act suspecté: [Inacceptable / Haut risque / Risque limité / Risque minimal — à confirmer STEP-01]
Données traitées    : [Personnelles oui/non / Sensibles oui/non / Catégories Art. 9 RGPD]
Volumétrie          : [Nb utilisateurs concernés / Volume données entraînement]
Géographie          : [UE seul / UE + transferts hors UE / Hors UE avec impact UE]
Modèle IA           : [LLM externe / Modèle propriétaire / Modèle fine-tuné / GenAI / ML classique]
Référentiels visés  : [AI Act seul / + RGPD / + NIS2 / + ISO 42001 / + sectoriels (HDS, DORA, etc.)]
Délai de mise en conformité : [Urgence / 3-6 mois / 12 mois]
Livrables attendus  : [Rapport audit / Plan remédiation / Présentation COMEX / Dépôt CNIL]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Demande d'audit conformité IA)
        │
        ▼
[STEP-01 — JURIDIQUE-IA]
  Cartographie obligations applicables :
  qualification tier AI Act,
  articles RGPD impactés,
  obligations NIS2 / sectorielles
        │
        ▼
<GATEWAY — Tier AI Act = "Inacceptable" ?>
  ├── OUI ──▶ [ARRÊT IMMÉDIAT — Recommandation cessation]
  │            Rapport spécifique + alternatives
  │            (FIN anticipée)
  └── NON ──▶ poursuite audit
        │
        ▼
═══════════════════════════════════
  FORK PARALLÈLE
═══════════════════════════════════
  ├── [STEP-02 — AI-ARCHITECT]
  │    Revue architecture :
  │    transparence, explicabilité,
  │    monitoring, logs, traçabilité
  │
  ├── [STEP-03 — SECURITE-IA]
  │    Threat modeling IA,
  │    robustesse adversariale,
  │    mesures techniques OWASP LLM Top 10
  │
  └── [STEP-04 — DATA-ENGINEER]
       Data lineage,
       qualité données entraînement,
       biais et représentativité
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
<GATEWAY — Audit modèle ML approfondi requis ?>
  ├── OUI ──▶ [STEP-04B — DATA-SCIENTIST]
  │            Audit modèle : fairness,
  │            drift, performance par sous-groupe
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-05 — CDO-DIRECTEUR-IA]
  Gouvernance IA cible,
  comité éthique IA,
  RACI conformité,
  référent AI Act / DPO
        │
        ▼
[STEP-06 — CHANGE-MANAGER]
  Plan ADKAR conformité IA,
  sensibilisation équipes,
  formation référents,
  communication interne
        │
        ▼
<GATEWAY — Chiffrage coût remédiation requis ?>
  ├── OUI ──▶ [STEP-06B — FINANCIAL-ANALYST]
  │            Business case mise en conformité
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-07 — REDACTEUR-IA]
  Rapport audit conformité complet,
  plan de remédiation priorisé,
  synthèse executive COMEX,
  notes spécifiques régulateurs
        │
        ▼
(FIN — Rapport conformité livré)
```

---

## Étapes détaillées

### STEP-01 — JURIDIQUE-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-JURIDIQUE-IA"
  role: "Cartographie des obligations réglementaires applicables"
  input:
    - "Description du système IA audité (cas d'usage, modèle, données)"
    - "Géographie d'opération et populations concernées"
    - "Référentiels visés par l'audit (AI Act / RGPD / NIS2 / sectoriels)"
  output_attendu:
    - "Qualification du tier AI Act (Inacceptable / Haut risque / Risque limité / Minimal)"
    - "Matrice des obligations AI Act applicables par tier"
    - "Articles RGPD impactés (Art. 5, 6, 9, 22, 25, 32, 35 notamment)"
    - "Obligations NIS2 si entité essentielle/importante"
    - "Obligations sectorielles applicables (HDS, DORA, MiCA, EHDS, etc.)"
    - "Synthèse des sanctions encourues en cas de non-conformité"
  condition_passage: "Tier AI Act validé par l'utilisateur avant audit technique"
  duree_estimee: "20 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02 — AI-ARCHITECT

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-AI-ARCHITECT"
  role: "Revue conformité de l'architecture IA"
  input:
    - "Matrice obligations AI Act (STEP-01)"
    - "Schéma d'architecture actuel du système IA"
    - "Logs, monitoring, mécanismes de traçabilité existants"
  output_attendu:
    - "Audit transparence : information utilisateur, watermarking GenAI (Art. 50)"
    - "Audit explicabilité : capacité à justifier les décisions"
    - "Audit monitoring : drift detection, performance continue (Art. 15)"
    - "Audit traçabilité : logs décisions, conservation, intégrité (Art. 12)"
    - "Audit supervision humaine : human-in-the-loop, kill switch (Art. 14)"
    - "Gaps architecture vs. exigences AI Act + recommandations techniques"
  duree_estimee: "20 min"
  execution: "parallèle avec STEP-03 et STEP-04"
```

### STEP-03 — SECURITE-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-SECURITE-IA"
  role: "Threat modeling et mesures techniques de sécurité"
  input:
    - "Architecture IA et surface d'attaque (STEP-02 en parallèle)"
    - "Données sensibles traitées et impact en cas de fuite"
    - "Référentiels sécurité applicables (ISO 27001, OWASP LLM Top 10, ENISA)"
  output_attendu:
    - "Threat modeling STRIDE adapté IA"
    - "Audit OWASP LLM Top 10 (prompt injection, data leakage, supply chain, etc.)"
    - "Audit robustesse adversariale (evasion, poisoning, extraction)"
    - "Plan de contrôles techniques (Art. 15 robustesse, Art. 9 gestion des risques)"
    - "Audit cybersécurité (chiffrement, IAM, audit logs, BCP)"
    - "Recommandations red teaming et tests de pénétration"
  duree_estimee: "25 min"
  execution: "parallèle avec STEP-02 et STEP-04"
```

### STEP-04 — DATA-ENGINEER

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-DATA-ENGINEER"
  role: "Audit des données d'entraînement et opérationnelles"
  input:
    - "Sources et flux de données (data lineage actuel)"
    - "Datasets d'entraînement / fine-tuning / RAG"
    - "Articles RGPD applicables (STEP-01)"
  output_attendu:
    - "Cartographie data lineage de bout en bout"
    - "Audit qualité données : complétude, pertinence, représentativité (Art. 10 AI Act)"
    - "Audit biais : analyse statistique par sous-groupes protégés"
    - "Audit RGPD données : base légale, minimisation, durées conservation, droits"
    - "Audit transferts hors UE (TIA, BCR, clauses contractuelles)"
    - "Plan de correction données et gouvernance data cible"
  duree_estimee: "20 min"
  execution: "parallèle avec STEP-02 et STEP-03"
```

### STEP-04B — DATA-SCIENTIST (optionnel)

```yaml
etape:
  id: "STEP-04B"
  agent: "AGENT-DATA-SCIENTIST"
  role: "Audit approfondi du modèle ML (biais, fairness, drift)"
  input:
    - "Modèle en production et métriques actuelles"
    - "Datasets d'évaluation et résultats par sous-groupe"
    - "Définition fairness retenue (demographic parity, equalized odds, etc.)"
  output_attendu:
    - "Rapport fairness : métriques par sous-groupe protégé"
    - "Détection drift : data drift + concept drift + model drift"
    - "Performance comparée par sous-population"
    - "Recommandations de mitigation (rééquilibrage, reweighting, post-processing)"
    - "Plan de monitoring continu fairness + drift"
  duree_estimee: "20 min"
  execution: "conditionnelle — si audit modèle ML approfondi requis"
```

### STEP-05 — CDO-DIRECTEUR-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-CDO-DIRECTEUR-IA"
  role: "Gouvernance IA cible et instances"
  input:
    - "Rapports techniques (STEP-02, STEP-03, STEP-04, STEP-04B)"
    - "Obligations gouvernance AI Act (Art. 17 système de management qualité)"
    - "Organisation actuelle du client"
  output_attendu:
    - "Cadre de gouvernance IA cible (ISO 42001 aligné)"
    - "Comité éthique IA : composition, fréquence, mandats"
    - "RACI conformité IA : DPO, CISO, AI Officer, Métier, IT"
    - "Désignation référent AI Act et articulation avec DPO"
    - "Processus d'évaluation conformité avant mise en production (gate)"
    - "Politique IA d'entreprise (charte usage, restrictions, escalade)"
  duree_estimee: "15 min"
  execution: "séquentielle après JOIN technique"
```

### STEP-06 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Déploiement gouvernance + sensibilisation équipes"
  input:
    - "Cadre de gouvernance cible (STEP-05)"
    - "Populations impactées (Métier, IT, Data, Direction)"
    - "Maturité conformité actuelle du client"
  output_attendu:
    - "Assessment ADKAR conformité IA par population"
    - "Plan de communication interne sur la conformité IA"
    - "Programme de formation : référents AI Act, équipes Data, Métier"
    - "Plan de mobilisation des relais (champions conformité)"
    - "KPIs d'adoption gouvernance avec jalons mesurables"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-05"
```

### STEP-06B — FINANCIAL-ANALYST (optionnel)

```yaml
etape:
  id: "STEP-06B"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Business case de mise en conformité"
  input:
    - "Plan de remédiation technique consolidé (STEP-02 à STEP-04B)"
    - "Plan de gouvernance et change (STEP-05 et STEP-06)"
    - "Sanctions évitées (STEP-01) et coût d'un incident"
  output_attendu:
    - "Chiffrage coût de remédiation par chantier (CAPEX + OPEX)"
    - "Comparaison coût conformité vs. sanctions encourues"
    - "Priorisation économique des chantiers (coût × risque)"
    - "Scénarios de mise en conformité (minimum légal / cible / best-in-class)"
  duree_estimee: "15 min"
  execution: "conditionnelle — si chiffrage requis"
```

### STEP-07 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-07"
  agent: "AGENT-REDACTEUR-IA"
  role: "Rapport d'audit final et plan de remédiation"
  input:
    - "Tous les outputs des STEP-01 à STEP-06B"
    - "Format attendu (rapport interne / dépôt régulateur / présentation COMEX)"
    - "Niveau de confidentialité"
  output_attendu:
    - "Synthèse executive 2 pages (verdict conformité + top 5 risques + investissement)"
    - "Rapport d'audit complet (40-80 pages) structuré par référentiel"
    - "Plan de remédiation priorisé (impact × effort × délai légal)"
    - "Roadmap mise en conformité avec jalons trimestriels"
    - "Présentation COMEX (15-20 slides) si besoin"
    - "Note régulateur si dépôt CNIL / AI Office requis"
  duree_estimee: "25 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-008
──────────────────────────────────────────────────────
□ Qualification tier AI Act + matrice obligations
□ Liste articles RGPD impactés + obligations NIS2
□ Audit architecture (transparence, explicabilité, monitoring, supervision)
□ Threat modeling + audit OWASP LLM Top 10 + robustesse adversariale
□ Audit données (lineage, qualité, biais, RGPD, transferts)
□ [optionnel] Audit modèle (fairness, drift par sous-groupe)
□ Cadre de gouvernance IA cible + RACI conformité
□ Plan ADKAR conformité + programme formation
□ [optionnel] Business case mise en conformité (CAPEX/OPEX)
□ Synthèse executive 2 pages
□ Rapport d'audit complet (40-80 pages)
□ Plan de remédiation priorisé + roadmap jalons
□ Présentation COMEX si requise
□ Note régulateur (CNIL / AI Office) si dépôt
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-008 depuis workflows/WF-008-audit-conformite-ia-act-rgpd.md.

Contexte audit conformité :
- Client : [à renseigner]
- Système IA audité : [à renseigner]
- Origine de l'audit : [Préventif / Contrôle / Due diligence]
- Données traitées : [Personnelles / Sensibles / Catégories Art. 9]
- Modèle IA : [LLM / Propriétaire / Fine-tuné / GenAI]
- Référentiels visés : [AI Act / RGPD / NIS2 / sectoriels]
- Livrables attendus : [Rapport / Plan remédiation / Présentation COMEX]

Lance STEP-01 avec AGENT-JURIDIQUE-IA.
```
