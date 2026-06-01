# Skill — Validation et Contrôle Qualité des Outputs Inter-Agents
> Certifications : PMP (PMI), PMI-ACP (PMI), ITIL 4 Foundation (Axelos), SAFe 6 Agilist (Scaled Agile)

## Objectif
Évaluer la qualité et la conformité de chaque output produit par un agent avant de le transmettre à l'étape suivante — pour éviter la propagation d'erreurs dans le workflow et garantir des livrables finaux exploitables.

## Grille de validation universelle

```
VALIDATION OUTPUT — [AGENT] — [ÉTAPE]
─────────────────────────────────────────────────────────
DIMENSION 1 — COMPLÉTUDE
  ☐ Tous les éléments attendus sont présents
  ☐ Le volume correspond aux critères (ex. 8 US, 5 risques)
  ☐ Aucune section manquante

DIMENSION 2 — FORMAT
  ☐ Le format demandé est respecté (Markdown / YAML / Tableau)
  ☐ La structure est conforme au template
  ☐ Le vocabulaire métier correct est utilisé

DIMENSION 3 — QUALITÉ CONTENU
  ☐ L'output répond à la mission définie pour l'étape
  ☐ Pas de contradiction avec le contexte global du workflow
  ☐ L'output est directement utilisable (prêt à copier-coller)

DIMENSION 4 — COHÉRENCE INTER-ÉTAPES
  ☐ L'output est cohérent avec les outputs des étapes précédentes
  ☐ Les références croisées sont correctes (ex. IDs, noms, périmètre)
  ☐ Pas de régression par rapport aux décisions prises

SCORE : [X/12 critères remplis]
STATUT : ✅ Validé / ⚠ À retravailler / ❌ Rejeté
```

---

## Critères de validation par agent

### PO-SCRUM — User Stories
```yaml
criteres_validation_us:
  - "Format INVEST respecté (Indépendante, Négociable, Valeur, Estimable, Small, Testable)"
  - "Chaque US a un titre, une description 'En tant que...', un critère d'acceptation"
  - "Critères d'acceptation au format Gherkin (Given / When / Then)"
  - "Estimation en points ou T-shirt sizing présente"
  - "Priorité définie (MoSCoW ou WSJF)"
  - "US < 1 sprint (pas d'epic déguisée)"
```

### PO-SAFE — Features
```yaml
criteres_validation_features:
  - "Format SAFe : Titre + Benefit Hypothesis + Acceptance Criteria"
  - "Benefit Hypothesis mesurable (KPI cible)"
  - "Taille estimée en story points (8-13 US max par feature)"
  - "Niveau ART précisé (Team / Program)"
  - "Dépendances inter-équipes identifiées"
  - "WSJF calculé"
```

### AI-ARCHITECT — Architecture
```yaml
criteres_validation_architecture:
  - "Diagramme d'architecture présent (composants, flux, APIs)"
  - "Choix technologiques justifiés"
  - "Sécurité by design mentionnée (authentification, chiffrement)"
  - "Scalabilité et performance adressées"
  - "Contraintes RGPD / IA Act prises en compte"
  - "Coût infrastructure estimé"
```

### QA-AGILE — Plan de test
```yaml
criteres_validation_qa:
  - "Cas de test couvrent tous les critères d'acceptation"
  - "Tests de régression identifiés"
  - "Environnements de test définis"
  - "Niveaux de test précisés (unitaire / intégration / E2E)"
  - "DoD définie et validée avec l'équipe"
  - "Critères de go/no-go pour la mise en production"
```

### CHEF-PROJET-IA — Reporting
```yaml
criteres_validation_reporting:
  - "Format 1 page respecté"
  - "RAG status (Rouge / Amber / Vert) pour chaque axe"
  - "EVM calculé (si applicable)"
  - "Risques top 3 avec mitigation"
  - "Prochaines décisions à prendre identifiées"
  - "Date de la prochaine revue précisée"
```

---

## Template de Validation Formelle

```yaml
validation:
  id: "VAL-WF001-STEP02"
  workflow_id: "WF-001"
  etape: "STEP-02 — PO-SCRUM"
  agent: "PO-SCRUM"
  timestamp: "2026-05-22T10:30:00"
  
  resultats:
    complétude:
      score: 3/4
      details: "7 US sur 8 attendues — 1 manquante"
      
    format:
      score: 4/4
      details: "Format INVEST respecté, Gherkin présent"
      
    qualite_contenu:
      score: 3/4
      details: "Estimations absentes sur 2 US"
      
    coherence:
      score: 4/4
      details: "Cohérent avec le cadrage BUSINESS-ANALYST"
  
  score_global: "14/16"
  statut: "à_retravailler"
  
  actions_requises:
    - "Compléter la 8ème User Story manquante"
    - "Ajouter les estimations sur US-04 et US-07"
  
  validé_par: "Orchestrateur"
  validation_utilisateur_requise: false
```

---

## Seuils de décision

```
SCORE   STATUT          ACTION
─────────────────────────────────────────────────────
100%    ✅ Validé        Passer à l'étape suivante
87-99%  ⚠ Mineur        Corriger en place, ne pas relancer
75-86%  ⚠ Majeur        Relancer l'agent avec instructions précises
< 75%   ❌ Rejeté        Relancer + enrichir le contexte (max 2 fois)
2 échecs → Escalader à l'utilisateur
```

## Livrables
- Grille de validation remplie pour chaque output
- Score et statut documentés
- Actions correctives documentées si besoin
- Historique des validations du workflow

## Format de sortie
Précise : agent évalué, étape du workflow, output à valider (coller le contenu), critères d'acceptation attendus.

## Anti-patterns
- ❌ **Validation subjective** (« ça semble bon ») sans critères objectifs : non reproductible → grille + seuils explicites
- ❌ **Pas de gate bloquant** : un output invalide passe en aval → blocage tant que le seuil n'est pas atteint
- ❌ **Valider le format sans le fond** : JSON valide mais contenu faux → contrôle sémantique (cf. règles métier)
- ❌ **LLM-as-judge non calibré** : juge complaisant → critères précis + cas de référence (golden set)
- ❌ **Pas de boucle de correction** : on rejette sans réinjecter → evaluator-optimizer (cf. `error-recovery.md`)

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, déc. 2024) — pattern **evaluator-optimizer**
- **INVEST** (Bill Wake, 2003) / **Gherkin** (Cucumber) — critères pour les outputs PO/QA · **DoD** (Scrum Guide 2020)

## Voir aussi
- [`error-recovery.md`](error-recovery.md) — reprise sur output invalide
- [`workflow-monitoring.md`](workflow-monitoring.md) — taux de rejet en métrique
- [`prompt-engineering-orchestration.md`](prompt-engineering-orchestration.md) — prompt de validation structuré
- [`../critique_conformite/gate-validation-livrable.md`](../critique_conformite/gate-validation-livrable.md) — gate DoD avant promotion
