# Skill — Modélisation Archimate 3

> Certifications : ArchiMate 3 Foundation & Practitioner (The Open Group), TOGAF 10 Practitioner

## Objectif

Créer des modèles Archimate 3 lisibles et exploitables : notation correcte des éléments, viewpoints adaptés aux audiences, cohérence inter-couches et export vers les outils standard.

## Les 3 couches Archimate (simplifié)

```
COUCHE         ÉLÉMENTS CLÉS                    COULEUR STANDARD
─────────────  ──────────────────────────────   ─────────────────
Business       Rôle, Acteur, Processus, Fonction Jaune
Application    Composant, Service, Interface     Bleu clair
Technology     Nœud, Artefact, Réseau, Device    Vert
```

## Viewpoints par audience

```
AUDIENCE         VIEWPOINT RECOMMANDÉ           ÉLÉMENTS INCLUS
───────────────  ────────────────────────────   ──────────────────────────────────────
CODIR / Sponsor  Organisation viewpoint          Acteurs, Rôles, Collaborations
Métier / MOA     Business Process viewpoint      Processus, Événements, Services métier
Architectes      Application viewpoint           Composants, Interfaces, Flux
DevOps / Infra   Infrastructure viewpoint        Nœuds, Devices, Artefacts, Réseaux
Full architecture Layered viewpoint              Toutes les couches + relations
```

## Relations Archimate essentielles

```
RELATION         NOTATION          SIGNIFICATION
──────────────   ───────────────   ──────────────────────────────────────
Serving          ──(→               "A fournit un service à B"
Realization      ───◁               "A implémente B"
Assignment       ──●                "A est assigné à B (rôle → acteur)"
Composition      ──◆                "A est composé de B"
Aggregation      ──◇                "A agrège B"
Triggering       ──►                "A déclenche B"
Association      ───                "Relation générique entre A et B"
Access           ─ ─►               "A accède à B (données)"
```

## Template Archimate — Diagramme d'intégration

```
[Archimate 3 — Application Cooperation Viewpoint]

Business Layer :
  [Processus Commande] ──serving──▶ [Service Gestion Commandes]

Application Layer :
  [OMS (Order Management)] ──serving──▶ [API REST /orders]
  [API REST /orders] ──serving──▶ [CRM Salesforce]
  [OMS] ──access──▶ [BDD Commandes (PostgreSQL)]

Technology Layer :
  [AWS ECS] ──assignment──▶ [OMS]
  [AWS RDS] ──assignment──▶ [BDD Commandes (PostgreSQL)]
  [AWS API Gateway] ──assignment──▶ [API REST /orders]
```

## Outils de modélisation Archimate

```
OUTIL           TYPE          AVANTAGES                   LIMITES
─────────────   ───────────   ─────────────────────────   ────────────────────────
Archi (EA)      Desktop free  Standard ArchiMate complet  Pas de collaboration
Enterprise      Enterprise    Collaboration, reporting     Très coûteux
Architect
Sparx EA        Enterprise    Complet, UML + Archimate    Courbe d'apprentissage
draw.io         Gratuit       Simple, intégré Confluence   Pas de validation modèle
LeanIX          SaaS          Collaboration, auto-disco    Licence onéreuse
```

## Bonnes pratiques Archimate

```
✅ À FAIRE
  → Nommer les éléments avec des noms métier, pas techniques
  → Limiter à 15-20 éléments par diagramme (lisibilité)
  → Utiliser les viewpoints standard avant de créer des vues custom
  → Documenter chaque élément (description, owner, version)
  → Assurer la cohérence entre les vues (un élément = un ID)

❌ À ÉVITER
  → Créer des éléments sans les connecter
  → Mélanger les niveaux d'abstraction dans un même diagramme
  → Utiliser "Association" pour tout (paresse de notation)
  → Dupliquer les éléments entre modèles (perte de cohérence)
```

## Livrables

- Modèle Archimate complet (.archimate / export XML)
- Viewpoints par audience (Business, Application, Infrastructure, Layered)
- Dictionnaire des éléments (glossaire Archimate du SI)
- Guide de lecture pour les non-experts (1 page)

## Format de sortie

Précise : **viewpoint souhaité** (Business / Application / Infrastructure / Layered), **outil disponible** (Archi / draw.io / Enterprise Architect / autre), **périmètre** (domaine / SI), **audience cible** (CODIR / Architectes / DevOps).
