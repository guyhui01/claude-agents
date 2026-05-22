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

---

## Grille de sélection du workflow

```
ÉTAPE 1 — Quel est l'objectif principal ?
  ○ Définir / cadrer un produit ou service   → WF-001
  ○ Planifier / piloter une livraison Agile  → WF-002
  ○ Construire / déployer une app IA         → WF-003
  ○ Conseiller / transformer un client       → WF-004
  ○ Communiquer / développer l'activité      → WF-005

ÉTAPE 2 — Y a-t-il des contraintes spécifiques ?
  ○ Contexte SAFe / multi-équipes            → WF-002 prioritaire
  ○ Données personnelles / RGPD              → Ajouter JURIDIQUE-IA
  ○ Livraison court terme (< 1 semaine)      → Mode parallèle max
  ○ Rapport CODIR requis                     → Ajouter CHEF-PROJET-IA
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
