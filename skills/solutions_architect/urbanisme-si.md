# Skill — Urbanisme du SI et Cartographie Applicative

> Certifications : TOGAF 10 Foundation & Practitioner, CITA-A (IASA), ArchiMate 3 Practitioner

## Objectif

Cartographier le SI existant, identifier les redondances et les gaps, définir le plan d'urbanisme cible et produire les vues architecturales nécessaires aux décisions d'investissement.

## Modèle d'urbanisme — Les 3 vues

```
VUE MÉTIER (Quoi ?)          VUE FONCTIONNELLE (Comment ?)     VUE TECHNIQUE (Avec quoi ?)
────────────────────         ──────────────────────────────    ──────────────────────────────
Processus métier             Applications et modules           Infrastructure et plateformes
Domaines fonctionnels        Flux et échanges de données       Réseaux et sécurité
Acteurs et rôles             Interfaces et APIs                Cloud et data centers
Événements métier            Règles de gestion                 Outils DevOps et monitoring
```

## Cartographie applicative — Template

```
RÉFÉRENTIEL APPLICATIF
──────────────────────────────────────────────────────────────────────
| Application | Domaine  | Criticité | Techno    | Obsolescence | Strat. |
|-------------|----------|-----------|-----------|--------------|--------|
| SAP ERP     | Finance  | Critique  | ABAP/Java | 2028         | Retain |
| CRM Salesf. | Vente    | Majeur    | SaaS      | N/A          | Retain |
| App legacy  | RH       | Secondaire| .NET 4.0  | Immédiate    | Retire |
| API Gateway | Transv.  | Critique  | Kong      | 2027         | Retain |
| DWH         | Data     | Majeur    | Oracle    | 2026         | Refactor|
```

## Niveaux de maturité urbanisme (scoring 1-5)

```
NIVEAU   DESCRIPTION
───────  ───────────────────────────────────────────────────────────────────
1        Pas de cartographie formelle — SI opaque, décisions empiriques
2        Inventaire applicatif basique (Excel) — pas de vues architecturales
3        Cartographie formalisée (Archimate/BPMN) — vues disponibles mais non maintenues
4        Urbanisme géré activement — revue annuelle, principes respectés
5        Urbanisme intégré aux décisions IT — ARB actif, conformité mesurée
```

## Plan d'urbanisme SI — Structure

```
1. DIAGNOSTIC AS-IS
   → Inventaire des applications (nom, domaine, techno, âge, coût)
   → Cartographie des flux et intégrations
   → Identification des redondances fonctionnelles
   → Zones de fragilité et dette technique estimée

2. VISION TO-BE
   → Domaines fonctionnels cibles (alignement sur le business model)
   → Applications cibles et plates-formes
   → Intégrations cibles (API-first, EDA)
   → Schéma directeur SI (horizon 3-5 ans)

3. ROADMAP DE TRANSFORMATION
   → Rationalisation (applications à décommissionner)
   → Modernisation (applications à refactoriser)
   → Innovation (nouvelles capacités à construire)
   → Priorisation ROI × risque × valeur métier
```

## Livrables

- Référentiel applicatif (cartographie complète avec scoring)
- Vue As-Is du SI (Archimate ou schéma structuré)
- Vue To-Be du SI cible
- Schéma directeur SI (roadmap 3-5 ans)
- Note de synthèse pour CODIR (1 page)

## Format de sortie

Précise : **périmètre** (domaine métier ou SI complet), **nombre d'applications estimé**, **profondeur souhaitée** (inventaire / cartographie complète / schéma directeur), **audience** (DSI / CODIR / équipes IT).
