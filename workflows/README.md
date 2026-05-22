# Workflows Agentiques — Catalogue

> 5 workflows prêts à l'emploi orchestrant les 31 agents du catalogue  
> Auteur : [guyhui01](https://github.com/guyhui01) · Basé sur AGENT-ORCHESTRATEUR-WORKFLOW.md

---

## Sélection rapide

```
Quel est ton objectif principal ?

  Définir / cadrer un produit ou service    → WF-001
  Planifier / piloter une livraison SAFe    → WF-002
  Construire / déployer une application IA  → WF-003
  Conseiller / transformer un client        → WF-004
  Veiller / communiquer / développer l'activité → WF-005
```

---

## Vue d'ensemble des 5 workflows

| ID | Nom | Domaine | Agents | Durée |
|---|---|---|---|---|
| [WF-001](WF-001-cadrage-produit-ia.md) | Cadrage Produit IA | Agile & Produit | 4-6 | 45-90 min |
| [WF-002](WF-002-delivery-safe.md) | Delivery Agile SAFe | Agile & Produit | 6 | 60-120 min |
| [WF-003](WF-003-lancement-app-ia.md) | Lancement Application IA | Dev & Technique | 5-6 | 90-180 min |
| [WF-004](WF-004-mission-conseil-ia.md) | Mission Conseil IA | Management & Conseil | 6 | 60-90 min |
| [WF-005](WF-005-veille-growth.md) | Veille Stratégique & Growth | Management & Conseil | 3-4 | 30-60 min |

---

## Démarrage rapide

```
# Dans Claude Code, charge l'orchestrateur puis lance un workflow :
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte ce rôle.
Ensuite, lis le fichier workflows/WF-001-cadrage-produit-ia.md
et lance le workflow avec le contexte suivant : [décrire le contexte client]
```

---

## Contraintes transversales

| Contrainte | Agent à ajouter systématiquement |
|---|---|
| Données personnelles / RGPD | + AGENT-JURIDIQUE-IA |
| Livrable CODIR requis | + AGENT-CHEF-PROJET-IA |
| Contexte SAFe / multi-équipes | WF-002 prioritaire |
| Transformation organisationnelle | + AGENT-CHANGE-MANAGER |
| Business case requis | + AGENT-FINANCIAL-ANALYST |

---

## Structure d'un workflow

Chaque fichier de workflow contient :
- Carte d'identité YAML
- Diagramme de flux BPMN (ASCII)
- Paramètres contextuels à renseigner
- Fiches étapes par agent (YAML)
- Livrables finaux avec checklist
- Commande de démarrage rapide Claude Code
