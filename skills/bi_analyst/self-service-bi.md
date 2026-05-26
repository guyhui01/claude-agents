# Skill — Self-Service BI (Formation, Templates, Documentation)
> Certifications : PL-300 Microsoft · Tableau Certified Data Analyst · Google Data Analytics

## Objectif
Mettre en place une culture self-service BI : former les utilisateurs, créer des templates réutilisables, documenter les données — pour réduire la dépendance à l'équipe BI tout en maintenant la gouvernance.

## Modèle de maturité Self-Service BI

```
NIVEAU 0 — BI Centralisée (IT/BI fait tout)
  Tout rapport = ticket à l'équipe BI
  Délai : 2 semaines par rapport
  Risque : goulot d'étranglement, frustration métier

NIVEAU 1 — Consultation (accès en lecture)
  Les utilisateurs consultent des rapports prédéfinis
  Pas de création → mais filtres, drill-down autorisés
  Idéal pour : managers CODIR, opérationnels non-techniques

NIVEAU 2 — Exploration guidée (self-service supervisé)
  Utilisateurs créent leurs propres vues depuis des datasets certifiés
  Templates fournis + formation de base
  Idéal pour : analystes métier, contrôleurs de gestion

NIVEAU 3 — Self-Service complet (data-driven teams)
  Équipes créent leurs propres modèles et datasets
  Gouvernance par certification (pas par restriction)
  Idéal pour : équipes data-driven matures
```

## Plan de formation — Self-Service BI

```
MODULE 1 — Découverte (2h) — Tous les utilisateurs
  □ Pourquoi la donnée ? Charte data & gouvernance
  □ Accéder aux rapports certifiés (Power BI Service / Tableau Server)
  □ Filtres et interactions : slicer, drill-down, drill-through
  □ Exporter (Excel, PDF, PNG)
  □ S'abonner à un rapport (email récurrent)
  □ Signaler une anomalie ou demander un nouveau rapport

MODULE 2 — Exploration (4h) — Analystes métier
  □ Comprendre le modèle de données (catalogue de KPIs)
  □ Créer une vue personnalisée depuis un dataset certifié
  □ Utiliser les champs calculés simples
  □ Créer un rapport simple (3-5 visuels)
  □ Partager et publier dans le bon workspace

MODULE 3 — Avancé (8h) — Référents BI métier
  □ DAX basique (mesures simples, YTD, comparaison N-1)
  □ Gestion des relations entre tables
  □ Design dashboard (best practices visuels)
  □ Refresh et alertes
  □ Processus de certification d'un nouveau dataset
```

## Templates réutilisables — Structure

```
TEMPLATES POWER BI FOURNIS AUX ÉQUIPES :

template-suivi-performance.pbit
  Pages : KPI Summary / Tendances / Détail / Export
  Slicers : Période / Région / Segment
  → À connecter à son dataset métier, changer les couleurs

template-analyse-cohorte.pbit
  Pages : Cohortes d'acquisition / Rétention / Revenus cohorte
  → Pour analyser la fidélisation clients

template-budget-vs-realise.pbit
  Pages : Budget Global / Variance / Prévision
  → Pour les contrôleurs de gestion

template-operationnel.pbit
  Pages : Tableau de bord temps réel / Alertes / Actions
  → Pour les managers opérationnels
```

## Documentation des données — Fiche dataset

```markdown
## Dataset : Finance — Revenus & Commandes ✅ Certifié

**Propriétaire** : Équipe BI Finance (contact : bi-finance@entreprise.fr)
**Dernière mise à jour** : 2026-05-26 | **Fraîcheur** : J-1 (refresh 6h00)
**Certifié par** : DAF le 2026-03-01

### Ce que vous pouvez analyser
- Chiffre d'affaires net, brut, par canal, par région
- Évolution temporelle (jour, semaine, mois, trimestre, année)
- Comparaison budget vs réalisé
- Analyse clients (acquisition, rétention, panier moyen)

### Ce que ce dataset ne couvre PAS
- Données de stock → voir dataset "Logistique"
- Coûts et marges → voir dataset "Finance Contrôle de Gestion"
- Données RH → voir dataset "RH & Talent"

### Glossaire
| Terme | Définition |
|-------|-----------|
| CA Net | Chiffre d'affaires après remises et retours, HT |
| Commande confirmée | Statut "confirmed" ou "shipped" ou "delivered" |
| Panier moyen | CA Net / Nombre de commandes |

### Comment l'utiliser
1. Power BI Service → Workspace "Finance" → Dataset "Revenus & Commandes"
2. Créer un nouveau rapport → "Se connecter à un dataset publié"
3. Sélectionner ce dataset → Commencer l'exploration
```

## Livrables
- Plan de formation self-service (modules, durée, public cible)
- Supports de formation (slides + vidéos tutoriels)
- Bibliothèque de templates (.pbit / .twbx)
- Documentation datasets (fiches par domaine)
- FAQ et guide de dépannage
- Tableau de bord adoption (nb utilisateurs actifs, rapports créés)

## Format de sortie
Précise : **outil BI** (Power BI, Tableau, Looker…), **profils utilisateurs** (managers non-tech, analystes, équipes data), **niveau actuel** (aucune culture BI ou self-service partiel), **contraintes** (temps de formation, budget, gouvernance stricte), **objectif** (réduire tickets BI ou accélérer les analyses).
