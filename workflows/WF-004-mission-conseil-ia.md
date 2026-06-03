# WF-004 — Mission Conseil IA

> Signature mission → audit maturité → stratégie → plan formation → livrables executive  
> Certifications mobilisées : PMP · PROSCI · SIC (SCIP) · CFA · CAP IABAC · TOGAF 10

---

## Carte d'identité

```yaml
id: "WF-004"
nom: "Mission Conseil IA"
domaine: "Management & Conseil"
declencheur: "Signature d'une mission conseil IA / réception d'un RFP client"
resultat_final: "Rapport audit maturité + roadmap stratégique + plan formation + synthèse executive"
duree_estimee: "60-90 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Workflow stratégique à haute valeur : audit maturité, ROI, roadmap 12-24 mois, ADKAR, plan formation et synthèse executive. Requiert un raisonnement stratégique profond et une capacité de synthèse multi-sources. Opus 4.8 recommandé pour la qualité des livrables clients CAC40."
modele_alternatif: "claude-sonnet-4-6"  # pour des missions courtes de diagnostic seul (sans roadmap ni rapport complet)
agents_core:
  - CONSULTANT-IA        # diagnostic maturité IA, recommandations
  - FINANCIAL-ANALYST    # ROI transformation, business case recommandations
  - CDO-DIRECTEUR-IA     # stratégie data et gouvernance IA long terme
  - CHANGE-MANAGER       # plan d'adoption et accompagnement au changement
  - FORMATEUR-IA         # plan de formation et montée en compétences
  - REDACTEUR-IA         # synthèse executive et livrables clients
agents_optionnels:
  - JURIDIQUE-IA         # si conformité RGPD / AI Act à auditer
  - VEILLE-STRATEGIQUE   # si benchmark concurrentiel requis
  - CHEF-PROJET-IA       # si mission avec PMO client
statut: "disponible"
version: "1.1"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | CONSULTANT-IA | Audit maturité IA, diagnostic, recommandations | Rapport maturité IA (1-10) |
| 2 | FINANCIAL-ANALYST | ROI transformation, business cases recommandations | Chiffrage ROI par levier |
| 3 | CDO-DIRECTEUR-IA | Roadmap stratégique IA 12-24 mois, gouvernance | Roadmap + OKR IA |
| 4 | CHANGE-MANAGER | Plan adoption et accompagnement organisationnel | Plan ADKAR par population |
| 5 | FORMATEUR-IA | Plan de formation équipes IA | Programme formation priorisé |
| 6 | REDACTEUR-IA | Synthèse executive + rapport client final | Livrables clients (1-page + rapport) |
| opt | JURIDIQUE-IA | Audit conformité RGPD / AI Act | Rapport conformité |
| opt | VEILLE-STRATEGIQUE | Benchmark concurrentiel IA secteur client | Radar concurrentiel |

---

## Paramètres contextuels

```
CONTEXTE MISSION (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Client             : [Nom / Secteur / Taille]
Périmètre mission  : [Audit / Stratégie / Formation / Accompagnement / Full]
Durée mission      : [ex. 3 jours / 2 semaines / 3 mois]
Interlocuteurs     : [DSI / CDO / CODIR / DG / Équipes opérationnelles]
Maturité IA client : [Débutant / Expérimentateur / Avancé — estimation]
Enjeux prioritaires: [Productivité / Conformité / ROI / Compétitivité / RH]
Contraintes        : [RGPD, AI Act, budgets, résistances internes]
Livrables attendus : [Rapport / Roadmap / Présentation CODIR / Formation]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — RFP reçu / mission signée)
        │
        ▼
[STEP-01 — CONSULTANT-IA]
  Audit maturité IA (grille 6 dimensions),
  diagnostic forces / faiblesses,
  opportunités et risques
        │
        ▼
═══════════════════════════════════
  FORK PARALLÈLE
═══════════════════════════════════
  ├── [STEP-02A — FINANCIAL-ANALYST]
  │    ROI par levier, business cases
  │
  └── [STEP-02B — VEILLE-STRATEGIQUE] (optionnel)
       Benchmark concurrentiel secteur
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
[STEP-03 — CDO-DIRECTEUR-IA]
  Roadmap stratégique IA 12-24 mois,
  gouvernance, OKR, talents
        │
        ▼
[STEP-04 — CHANGE-MANAGER]
  Plan d'adoption et accompagnement,
  ADKAR par population,
  stratégie résistances
        │
        ▼
[STEP-05 — FORMATEUR-IA]
  Plan de formation priorisé,
  parcours par profil,
  quick wins formation
        │
        ▼
<GATEWAY — Conformité RGPD / AI Act requise ?>
  ├── OUI ──▶ [STEP-06 — JURIDIQUE-IA]
  │            Audit conformité + recommandations
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-07 — REDACTEUR-IA]
  Synthèse executive (1 page),
  rapport client complet,
  présentation CODIR
        │
        ▼
(FIN — Livrables clients remis)
```

---

## Étapes détaillées

### STEP-01 — CONSULTANT-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-CONSULTANT-IA"
  role: "Audit de maturité IA et diagnostic"
  input:
    - "Contexte client : secteur, taille, enjeux"
    - "Informations disponibles : entretiens, docs, cas d'usage existants"
    - "Objectifs de la mission"
  output_attendu:
    - "Score maturité IA global (1-10) et par dimension"
      # Dimensions : stratégie / data / technologie / compétences / gouvernance / culture
    - "Forces, faiblesses, opportunités, risques (SWOT IA)"
    - "Top 5 cas d'usage IA prioritaires avec scoring valeur/effort"
    - "Benchmark sectoriel (si données disponibles)"
    - "Recommandations clés (3-5 actions prioritaires)"
  condition_passage: "Diagnostic validé par l'utilisateur avant roadmap"
  duree_estimee: "20 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02 — FINANCIAL-ANALYST

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "ROI transformation et business cases"
  input:
    - "Top 5 cas d'usage IA (STEP-01)"
    - "Effectifs impactés et coûts actuels des processus"
    - "Budget IA disponible et horizon de retour"
  output_attendu:
    - "Business case par cas d'usage : investissement / gain / ROI / payback"
    - "Priorisation financière des recommandations"
    - "Tableau synthèse ROI global transformation"
    - "Scénarios financiers (optimiste / réaliste / conservateur)"
  duree_estimee: "15 min"
  execution: "parallèle avec STEP-02B si benchmark requis"
```

### STEP-03 — CDO-DIRECTEUR-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-CDO-DIRECTEUR-IA"
  role: "Roadmap stratégique IA et gouvernance"
  input:
    - "Diagnostic maturité (STEP-01)"
    - "Priorisation financière (STEP-02)"
    - "Contexte organisationnel et stratégique client"
  output_attendu:
    - "Roadmap IA 12-24 mois (Now / Next / Later)"
    - "OKR IA par période"
    - "Cadre de gouvernance IA (rôles, instances, processus)"
    - "Plan de recrutement / montée en compétences talents IA"
    - "Architecture data cible (si applicable)"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-02"
```

### STEP-04 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Plan d'adoption et accompagnement au changement"
  input:
    - "Roadmap IA (STEP-03)"
    - "Populations impactées et niveaux de maturité"
    - "Résistances anticipées"
  output_attendu:
    - "Assessment ADKAR par population (CODIR / managers / opérationnels)"
    - "Plan de communication sur 12 mois"
    - "Stratégie de gestion des résistances"
    - "Réseau de champions IA (identification + activation)"
    - "KPIs d'adoption avec jalons mesurables"
  duree_estimee: "10 min"
  execution: "séquentielle après STEP-03"
```

### STEP-05 — FORMATEUR-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-FORMATEUR-IA"
  role: "Plan de formation et montée en compétences IA"
  input:
    - "Roadmap IA (STEP-03)"
    - "Profils à former (CODIR / managers / utilisateurs / tech)"
    - "Budget formation disponible"
  output_attendu:
    - "Catalogue formation : parcours par profil (4 niveaux)"
    - "Format recommandé : présentiel / e-learning / workshop"
    - "Quick wins formation (2-4 semaines)"
    - "Plan d'évaluation des compétences acquises"
  duree_estimee: "10 min"
  execution: "séquentielle après STEP-04"
```

### STEP-07 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-07"
  agent: "AGENT-REDACTEUR-IA"
  role: "Rédaction des livrables clients finaux"
  input:
    - "Tous les outputs des STEP-01 à STEP-06"
    - "Ton et format attendus par le client"
    - "Contraintes de confidentialité"
  output_attendu:
    - "Synthèse executive (1 page) : contexte / enjeux / recommandations / ROI"
    - "Rapport conseil complet (15-30 pages)"
    - "Présentation CODIR (10-15 slides)"
    - "Annexes techniques si applicable"
  duree_estimee: "15 min"
  execution: "séquentielle — clôture le workflow"
```

---

## Livrables finaux

```
CHECKLIST WF-004
──────────────────────────────────────────────────────
□ Rapport d'audit maturité IA (score + SWOT + top 5 cas d'usage)
□ Business cases ROI par levier prioritaire
□ Roadmap stratégique IA 12-24 mois (Now/Next/Later)
□ Cadre de gouvernance IA (rôles + instances)
□ Plan ADKAR par population + stratégie résistances
□ Plan de formation par profil (4 niveaux)
□ [optionnel] Rapport conformité RGPD / AI Act
□ Synthèse executive (1 page)
□ Rapport conseil complet (15-30 pages)
□ Présentation CODIR (10-15 slides)
```

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-004 depuis workflows/WF-004-mission-conseil-ia.md.

Contexte mission :
- Client : [à renseigner]
- Périmètre : [à renseigner]
- Interlocuteurs : [à renseigner]
- Livrables attendus : [à renseigner]

Lance STEP-01 avec AGENT-CONSULTANT-IA.
```
