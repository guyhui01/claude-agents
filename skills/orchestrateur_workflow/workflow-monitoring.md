# Skill — Monitoring, Métriques et Reporting d'Exécution
> Certifications : ITIL 4 Foundation (Axelos), PMP (PMI), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google)

## Objectif
Suivre en temps réel l'exécution d'un workflow agentique — statut des étapes, qualité des outputs, performance des agents — et produire un reporting synthétique pour permettre une prise de décision rapide.

## Dashboard de monitoring — Template

```
WORKFLOW : [NOM] — ID : [WF-00X]
DATE     : [DATE] — DURÉE : [X min]
STATUT   : 🟢 En cours / 🟡 En attente / 🔴 En erreur / ✅ Complété
─────────────────────────────────────────────────────────────────

PROGRESSION
───────────────────────────────────────────────
STEP-01 [BUSINESS-ANALYST]   ✅ Complété     8 min
STEP-02 [PO-SCRUM]           ✅ Complété    12 min
STEP-03 [UX-DESIGNER]        🔄 En cours    -- min  (ETA: 15 min)
STEP-04 [QA-AGILE]           ⏸ En attente   -- min
STEP-05 [CHEF-PROJET-IA]     ⏸ En attente   -- min

AVANCEMENT GLOBAL : 2/5 étapes complétées (40%)

QUALITÉ OUTPUTS
───────────────────────────────────────────────
STEP-01 : 16/16 ✅  STEP-02 : 14/16 ⚠ (estimations manquantes)

ALERTES
───────────────────────────────────────────────
⚠ STEP-02 : 2 US sans estimation — correction en cours
```

---

## Métriques de performance

```yaml
metriques_workflow:
  id: "WF-001"
  date_debut: "2026-05-22T09:30:00"
  date_fin: "2026-05-22T10:45:00"
  
  performance_globale:
    duree_totale_min: 75
    duree_estimee_min: 90
    ecart_planning: "-20%"
    taux_completion: "100%"
    score_qualite_global: "91%"
  
  performance_par_etape:
    - etape: "STEP-01 — BUSINESS-ANALYST"
      duree_min: 8
      score_qualite: "100%"
      tentatives: 1
      statut: "complété"
      
    - etape: "STEP-02 — PO-SCRUM"
      duree_min: 18
      score_qualite: "88%"
      tentatives: 2
      statut: "complété"
      note: "Relance nécessaire pour ajouter estimations"
      
    - etape: "STEP-03 — UX-DESIGNER"
      duree_min: 22
      score_qualite: "100%"
      tentatives: 1
      statut: "complété"
      
  erreurs:
    total: 1
    resolues: 1
    escaladees: 0
    
  livrables_produits:
    - "Carte des besoins métier (8 éléments)"
    - "10 User Stories format INVEST"
    - "Wireframes 3 écrans clés"
    - "Plan de test (15 cas)"
    - "Reporting CODIR 1 page"
```

---

## Rapport d'exécution — Format 1 page

```
RAPPORT D'EXÉCUTION — WORKFLOW [NOM]
Date : [DATE] | Durée : [X min] | Modèle : Claude Sonnet 4.6
══════════════════════════════════════════════════════════════

RÉSULTAT  : ✅ Complété avec succès
QUALITÉ   : 91% (score global)
PLANNING  : -15 min vs estimation (meilleure perf)

LIVRABLES PRODUITS
─────────────────────────────────────
✅ Carte des besoins métier
✅ 10 User Stories (format INVEST)
✅ Critères d'acceptation (Gherkin)
✅ Wireframes 3 écrans clés
✅ Plan de test (15 cas)
✅ Reporting CODIR 1 page

AGENTS UTILISÉS
─────────────────────────────────────
BUSINESS-ANALYST  : 1 tentative — 100% qualité
PO-SCRUM          : 2 tentatives — 88% qualité
UX-DESIGNER       : 1 tentative — 100% qualité
QA-AGILE          : 1 tentative — 96% qualité
CHEF-PROJET-IA    : 1 tentative — 100% qualité

INCIDENTS
─────────────────────────────────────
⚠ 1 incident mineur : PO-SCRUM — estimations manquantes
  Résolution : relance avec instructions précises (2 min)

RECOMMANDATIONS
─────────────────────────────────────
→ Ajouter dans le template PO-SCRUM : rappel estimations obligatoires
→ Prochaine exécution estimée : 60 min (pattern appris)
```

---

## KPIs de suivi du catalogue de workflows

```yaml
kpis_catalogue:
  periode: "2026-05 (mensuel)"
  
  workflows_executes:
    WF-001: 8 executions
    WF-002: 3 executions
    WF-003: 2 executions
    WF-004: 5 executions
    WF-005: 12 executions
  
  qualite_moyenne:
    WF-001: "93%"
    WF-002: "89%"
    WF-003: "95%"
    WF-004: "91%"
    WF-005: "97%"
  
  agents_les_plus_utilises:
    1: "REDACTEUR-IA (18 appels)"
    2: "BUSINESS-ANALYST (15 appels)"
    3: "PO-SCRUM (13 appels)"
    4: "CHEF-PROJET-IA (11 appels)"
    5: "QA-AGILE (9 appels)"
  
  taux_erreur_par_agent:
    PO-SCRUM: "15%"
    DEV-PYTHON-IA: "8%"
    CONSULTANT-IA: "5%"
    REDACTEUR-IA: "2%"
  
  ameliorations_identifiees:
    - "PO-SCRUM : ajouter rappel estimations dans template"
    - "DEV-PYTHON-IA : enrichir contexte architecture en amont"
```

---

## Alertes et notifications

```
NIVEAUX D'ALERTE
──────────────────────────────────────────────────────────────
🟢 INFO    : Étape complétée avec succès
🟡 WARNING : Output à retravailler (score 75-99%)
🔴 ERROR   : Output rejeté ou agent bloqué (score < 75%)
🚨 CRITICAL: Workflow bloqué, escalade utilisateur requise
```

## Livrables
- Dashboard de monitoring en temps réel
- Rapport d'exécution post-workflow (1 page)
- Métriques de performance YAML
- KPIs mensuels du catalogue
- Recommandations d'amélioration

## Format de sortie
Précise : workflow concerné, étapes à monitorer, métriques prioritaires, format de reporting souhaité.
