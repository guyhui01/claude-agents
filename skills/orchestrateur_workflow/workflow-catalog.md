# Skill — Gestion du Catalogue de Workflows
> Certifications : TOGAF 10 (The Open Group), SAFe LPM (Scaled Agile), PMP (PMI), ITIL 4 Foundation (Axelos)

## Objectif
Référencer, documenter et maintenir le catalogue des workflows agentiques disponibles — pour permettre la sélection rapide du bon workflow selon le contexte client et la réutilisation des patterns éprouvés.

## Catalogue des Workflows — État actuel

### WF-001 — Cadrage Produit IA
```yaml
id: "WF-001"
nom: "Cadrage Produit IA"
domaine: "Agile & Produit"
duree_estimee: "45-90 min"
modele_recommande: "Sonnet 4.6"
certifications: ["PSPO1", "SAFe 6", "PMI-ACP"]
contexte_usage: "Brief client → backlog priorisé + critères d'acceptation"
agents:
  - BUSINESS-ANALYST
  - PO-SCRUM
  - UX-DESIGNER
  - QA-AGILE
livrables:
  - "Carte des besoins métier"
  - "Backlog initial (8-15 US)"
  - "Critères d'acceptation (Gherkin)"
  - "Wireframes clés (si besoin UX)"
statut: "disponible"
```

### WF-002 — Delivery Agile SAFe
```yaml
id: "WF-002"
nom: "Delivery Agile SAFe"
domaine: "Agile & Produit"
duree_estimee: "60-120 min"
modele_recommande: "Sonnet 4.6"
certifications: ["SAFe6 POPM", "SAFe6 Agilist", "SAFe LPM"]
contexte_usage: "PI Planning → sprint backlog → reporting avancement"
agents:
  - PO-SAFE
  - SCRUM-MASTER
  - QA-AGILE
  - CHEF-PROJET-IA
livrables:
  - "PI Objectives"
  - "Program Backlog priorisé (WSJF)"
  - "Plan de sprint"
  - "Reporting CODIR"
statut: "disponible"
```

### WF-003 — Lancement App IA
```yaml
id: "WF-003"
nom: "Lancement Application IA"
domaine: "Dev & Technique"
duree_estimee: "90-180 min"
modele_recommande: "Sonnet 4.6"
certifications: ["AWS SA", "TOGAF 10", "PMP"]
contexte_usage: "Idée → architecture → code → déploiement → audit sécurité"
agents:
  - AI-ARCHITECT
  - DEV-PYTHON-IA
  - DEVOPS-CLOUD
  - SECURITE-IA
livrables:
  - "Architecture système (diagramme)"
  - "Code source documenté"
  - "Pipeline CI/CD"
  - "Rapport audit sécurité"
statut: "disponible"
```

### WF-004 — Mission Conseil IA
```yaml
id: "WF-004"
nom: "Mission Conseil IA"
domaine: "Management & Conseil"
duree_estimee: "60-90 min"
modele_recommande: "Sonnet 4.6"
certifications: ["PMP", "PROSCI", "CAP IABAC"]
contexte_usage: "Audit maturité IA → stratégie → plan formation → livrables"
agents:
  - CONSULTANT-IA
  - CDO-DIRECTEUR-IA
  - FORMATEUR-IA
  - REDACTEUR-IA
livrables:
  - "Rapport d'audit maturité IA"
  - "Roadmap stratégique IA (12-24 mois)"
  - "Plan de formation équipes"
  - "Synthèse executive (1 page)"
statut: "disponible"
```

### WF-005 — Veille & Growth
```yaml
id: "WF-005"
nom: "Veille Stratégique & Growth"
domaine: "Management & Conseil"
duree_estimee: "30-60 min"
modele_recommande: "Sonnet 4.6"
certifications: ["PMI-ACP", "SAFe LPM"]
contexte_usage: "Veille IA/tech → contenu thought-leadership → vérification contractuelle"
agents:
  - GROWTH-IA
  - REDACTEUR-IA
  - JURIDIQUE-IA
livrables:
  - "Synthèse veille IA (hebdo / mensuelle)"
  - "Articles / posts LinkedIn"
  - "Vérification conformité contractuelle"
statut: "disponible"
```

### WF-006 — Avant-vente / Proposition commerciale
```yaml
id: "WF-006"
nom: "Avant-vente / Proposition commerciale"
domaine: "Management & Conseil"
duree_estimee: "75-120 min"
modele_recommande: "Opus 4.7"
modele_raison: "Workflow stratégique à fort enjeu commercial (qualification GO/NO-GO, architecture cible, chiffrage J/H, pricing, ROI prospect) — Opus 4.7 recommandé pour clients CAC40/GAFA/licornes"
certifications: ["PMP", "CBAP", "TOGAF 10", "CFA", "CAP IABAC"]
contexte_usage: "RFP reçu → qualification → cadrage → architecture → planning → chiffrage → proposition commerciale"
agents:
  - CONSULTANT-IA
  - BUSINESS-ANALYST
  - AI-ARCHITECT
  - CHEF-PROJET-IA
  - FINANCIAL-ANALYST
  - REDACTEUR-IA
livrables:
  - "Grille GO/NO-GO qualifiée"
  - "Cadrage fonctionnel + cas d'usage"
  - "Architecture cible (diagramme)"
  - "Planning + lotissement J/H"
  - "Chiffrage + pricing + ROI prospect"
  - "Proposition technico-commerciale complète"
statut: "disponible"
```

### WF-007 — Onboarding Mission Client J1-J5
```yaml
id: "WF-007"
nom: "Onboarding Mission Client J1-J5"
domaine: "Management & Conseil"
duree_estimee: "45-75 min"
modele_recommande: "Sonnet 4.6"
certifications: ["PMP", "CBAP", "PROSCI"]
contexte_usage: "Mission signée → contexte client → plan de démarrage → livrables J1 → cadrage J5"
agents:
  - CHEF-PROJET-IA
  - BUSINESS-ANALYST
  - CHANGE-MANAGER
  - REDACTEUR-IA
livrables:
  - "Plan de démarrage validé (J1-J5)"
  - "Cartographie SI + processus client"
  - "Kit J1 remis (fiche client, présentation, plan)"
  - "Cadrage J5 complété"
  - "Compte rendu J1"
statut: "disponible"
```

### WF-008 — Audit conformité IA Act / RGPD
```yaml
id: "WF-008"
nom: "Audit conformité IA Act / RGPD"
domaine: "Conformité & Gouvernance"
duree_estimee: "90-150 min"
modele_recommande: "Opus 4.7"
modele_raison: "Workflow réglementaire à très haut enjeu (qualification tier de risque AI Act, analyse RGPD multi-articles, threat modeling, gouvernance IA) — erreur de qualification = exposition à sanctions jusqu'à 7% CA mondial sous AI Act"
certifications: ["CIPP/E", "DPO", "ISO 42001", "ISO 27001", "CISSP", "CDMP", "TOGAF 10"]
contexte_usage: "Système IA à auditer → cartographie obligations → revue architecture → sécurité → données → gouvernance → rapport + plan remédiation"
agents:
  - JURIDIQUE-IA
  - AI-ARCHITECT
  - SECURITE-IA
  - DATA-ENGINEER
  - CDO-DIRECTEUR-IA
  - CHANGE-MANAGER
  - REDACTEUR-IA
livrables:
  - "Cartographie obligations AI Act / RGPD / NIS2"
  - "Rapport audit conformité"
  - "Cartographie des risques"
  - "Plan de remédiation priorisé"
  - "Gouvernance IA cible (comité éthique, instances)"
statut: "disponible"
```

### WF-009 — Recrutement IT/IA
```yaml
id: "WF-009"
nom: "Recrutement IT/IA"
domaine: "RH & Talent"
duree_estimee: "60-90 min"
modele_recommande: "Sonnet 4.6"
certifications: ["SHRM-CP", "CBAP", "PHR", "CIPD L5", "CAP IABAC"]
contexte_usage: "Besoin identifié → fiche de poste → sourcing → évaluation → sélection → offre"
agents:
  - RH-IA
  - BUSINESS-ANALYST
  - CONSULTANT-IA
  - REDACTEUR-IA
livrables:
  - "Fiche de poste rédigée + checklist anti-biais"
  - "Plan de sourcing multi-canal"
  - "Grille d'évaluation technique + comportementale"
  - "Scoring CV ATS + détection fraude"
  - "Offre d'emploi émise + dossier recrutement"
statut: "disponible"
```

### WF-010 — Post-mortem Projet / REX
```yaml
id: "WF-010"
nom: "Post-mortem Projet / REX"
domaine: "Management & Conseil"
duree_estimee: "45-75 min"
modele_recommande: "Sonnet 4.6"
certifications: ["PMP", "PRINCE2", "PROSCI", "ISTQB"]
contexte_usage: "Projet clôturé ou incident majeur → collecte → analyse causale → rapport REX → plan d'amélioration"
agents:
  - CHEF-PROJET-IA
  - QA-AGILE
  - CHANGE-MANAGER
  - REDACTEUR-IA
livrables:
  - "Timeline projet + faits collectés"
  - "Analyse causale (5 Pourquoi / Ishikawa)"
  - "Rapport REX complet"
  - "Plan d'amélioration priorisé"
  - "Mémo capitalisation des apprentissages"
statut: "disponible"
```

---

## Grille de sélection du workflow

```
ÉTAPE 1 — Quel est l'objectif principal ?
  ○ Définir / cadrer un produit ou service       → WF-001
  ○ Planifier / piloter une livraison Agile      → WF-002
  ○ Construire / déployer une app IA             → WF-003
  ○ Conseiller / transformer un client           → WF-004
  ○ Communiquer / développer l'activité          → WF-005
  ○ Répondre à un RFP / proposition commerciale  → WF-006
  ○ Démarrer une mission client (J1-J5)          → WF-007
  ○ Auditer conformité IA Act / RGPD             → WF-008
  ○ Recruter un profil IT/IA                     → WF-009
  ○ Post-mortem projet ou incident               → WF-010

ÉTAPE 2 — Y a-t-il des contraintes spécifiques ?
  ○ Contexte SAFe / multi-équipes                → WF-002 prioritaire
  ○ Données personnelles / RGPD                  → Ajouter JURIDIQUE-IA ou WF-008
  ○ Livraison court terme (< 1 semaine)          → Mode parallèle max
  ○ Rapport CODIR requis                         → Ajouter CHEF-PROJET-IA
  ○ Client CAC40 / GAFA / licorne                → Modèle Opus 4.7 recommandé
  ○ Incident sécurité / faille LLM               → WF-010 + SECURITE-IA
```

---

## Template de création d'un nouveau workflow

```yaml
id: "WF-00X"
nom: "[NOM DU WORKFLOW]"
domaine: "[Dev & Technique / Agile & Produit / Management & Conseil]"
duree_estimee: "[X-Y min]"
modele_recommande: "Sonnet 4.6"
certifications: []
contexte_usage: "[Déclencheur → résultat final en 1 ligne]"
agents: []
livrables: []
dependances_workflows: []  # Si ce workflow en enchaîne un autre
statut: "brouillon"  # brouillon / disponible / archivé
date_creation: "AAAA-MM-JJ"
version: "1.0"
```

## Livrables
- Fiche workflow complète (YAML)
- Mise à jour du catalogue
- Grille de sélection mise à jour

## Format de sortie
Précise : objectif métier, agents à impliquer, contraintes de délai et contexte client.
