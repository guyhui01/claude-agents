# Skill — Cartographie du SI
> Certifications : TOGAF 10 · IIBA CBAP

## Objectif
Documenter et analyser le système d'information existant pour identifier les impacts des projets et guider les décisions d'urbanisme.

## Niveaux de cartographie (urbanisme SI)
```
Niveau Métier   → Processus, acteurs, données métier
Niveau Applicatif → Applications, flux, interfaces
Niveau Technique  → Serveurs, réseaux, hébergement
```

## Cartographie applicative — Éléments
- **Inventaire des applications** : nom, éditeur, version, criticité, propriétaire
- **Flux d'échanges** : qui envoie quoi à qui (API, batch, fichier, message)
- **Données échangées** : nature, fréquence, volume, format (JSON, XML, CSV)
- **Dépendances** : relations entre applications (upstream / downstream)

## Matrice d'échanges (flux)
| Source | Destination | Données | Protocole | Fréquence | Criticité |
|---|---|---|---|---|---|
| CRM | ERP | Commandes client | API REST | Temps réel | Critique |
| ERP | BI | Données ventes | Batch CSV | Quotidien | Standard |

## Analyse d'impact SI (pour un projet)
1. Identifier les applications **directement impactées** (modification)
2. Identifier les applications **indirectement impactées** (flux entrants/sortants)
3. Évaluer le **niveau d'impact** : majeur / mineur / surveillance
4. Lister les **tests d'intégration** à prévoir

## Schéma directeur SI
- Vision cible à 3-5 ans
- Feuille de route des évolutions applicatives
- Identification des projets de rationalisation (décommissionnements)
- Alignement sur la stratégie business

## Livrables
- Cartographie applicative (draw.io / Archimate / PowerPoint)
- Matrice des flux d'échanges
- Analyse d'impact pour le projet
- Recommandations d'urbanisme SI

## Format de sortie
Précise : périmètre SI (domaine métier) · profondeur souhaitée (macro / détaillée) · objectif (impact project, schéma directeur)
