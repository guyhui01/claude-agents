# Skill — Intégration ERP → PIM (Flux de données entrants)
> Certifications : SAP MDG Associate · Akeneo Certified Developer · Pimcore Certified Developer

## Objectif
Concevoir et mettre en œuvre les flux de données entrants de l'ERP vers le PIM : mapping des données techniques (référence, famille, unités, prix de base), règles de transformation et orchestration des synchronisations — en garantissant la cohérence entre le référentiel maître ERP et le catalogue PIM.

## Principe d'architecture ERP → PIM

```
ERP (source maître)                PIM (enrichissement)
────────────────────────────────   ────────────────────────────────────
Référentiel articles (MMR/MAT)  →  Fiches produit (skeleton)
Familles / Groupes articles     →  Familles PIM + groupes d'attributs
Prix de vente de base           →  Attribut prix (lecture seule)
Unités de mesure standards      →  Attributs techniques (poids, dim.)
Statut article (actif / EOL)    →  Statut PIM (draft / archived)
Certifications, normes          →  Attributs certifications
Codes douaniers (HS Code)       →  Attribut réglementaire
```

## Patterns d'intégration

```
PATTERN              DESCRIPTION                               CAS D'USAGE
───────────────────  ────────────────────────────────────────  ────────────────────────────────
Batch quotidien      Export ERP → fichier → import PIM         PIM sans API, faible volumétrie
API REST pull        PIM interroge l'ERP à intervalle fixe     ERP expose une API
API REST push        ERP notifie le PIM à chaque changement    Temps réel requis (création art.)
Message Queue        Events ERP → queue → consumer PIM         Haute volumétrie, découplage
ETL dédié            Middleware (Talend, MuleSoft, Azure Data)  Transformations complexes, multi-src
```

## Mapping données SAP ERP → Akeneo

```
CHAMP SAP (MM60/MAT)           ATTRIBUT AKENEO           TRANSFORMATION
─────────────────────────────  ────────────────────────  ─────────────────────────────────────
MATNR (ref article)            sku                       Uppercase, trim
MAKTX (libellé 40 car.)        nom_produit.fr_FR         Titre de capitalisation
MATKL (groupe marchandises)    famille_pim               Mapping table (MATKL → famille Akeneo)
MEINS (unité de base)          unite_base                Conversion UOM → label lisible
NTGEW (poids net)              poids                     NTGEW + GEWEI → valeur + unité Metric
BRGEW (poids brut)             poids_brut                Idem
LAENG × BREIT × HOEHE          dimensions_l/l/h          Conversion selon GROES unité
MTPOS (type de poste)          type_produit              Mapping : NORM→standard, KMAT→configurable
LVORM (suppression logique)    statut                    true → archived, false → conserve statut
BISMT (ancienne référence)     reference_ancienne        Text brut
EAN11 (code EAN)               ean                       Vérification chiffre de contrôle
```

## Script d'import API Akeneo (Python)

```python
import requests, json

AKENEO_URL = "https://mon-pim.akeneo.com/api/rest/v1"
TOKEN = "Bearer <token>"

def upsert_product(sku: str, attributes: dict) -> dict:
    """Crée ou met à jour un produit via l'API Akeneo"""
    payload = {
        "identifier": sku,
        "family": attributes.get("famille_pim"),
        "values": {
            "nom_produit": [{"locale": "fr_FR", "scope": None, "data": attributes["nom"]}],
            "ean":         [{"locale": None, "scope": None, "data": attributes["ean"]}],
            "poids": [{
                "locale": None, "scope": None,
                "data": {"amount": attributes["poids"], "unit": "KILOGRAM"}
            }],
        }
    }
    headers = {"Authorization": TOKEN, "Content-Type": "application/json"}
    url = f"{AKENEO_URL}/products/{sku}"
    response = requests.patch(url, headers=headers, json=payload)
    response.raise_for_status()
    return response.json() if response.text else {"status": "updated"}
```

## Livrables
- Schéma d'architecture d'intégration ERP → PIM (flux, fréquences, volumes)
- Mapping complet champs ERP → attributs PIM (tableau de correspondance)
- Règles de transformation et de gestion des exceptions
- Scripts ou configuration middleware (ETL, API, queue)
- Plan de test (données pilotes, validation delta, recette)
- Documentation opérationnelle (runbook incidents, relance manuelle)

## Format de sortie
Précise : **ERP source** (SAP S/4HANA, Oracle, Dynamics…), **PIM cible** (Akeneo, Pimcore…), **volumétrie** (articles, mouvements/jour), **pattern souhaité** (batch/API/queue), **délai de synchronisation acceptable**, **systèmes intermédiaires** existants (middleware, ESB, iPaaS).

## Anti-patterns
- ❌ **ERP et PIM tous deux « maîtres » du même champ** : conflits irrésolus → définir la source de vérité par attribut (cf. `gouvernance-donnees-produit.md`)
- ❌ **Synchronisation sans gestion de delta** : ré-import complet à chaque run → coûteux et risqué → ne traiter que les changements (timestamp/event)
- ❌ **EAN importé sans vérification du chiffre de contrôle** GS1 : identifiants faux propagés → valider à l'entrée
- ❌ **Mapping en dur** (pas de table MATKL → famille) : non maintenable → table de correspondance externalisée
- ❌ **Pas de runbook incident / relance manuelle** : blocages silencieux → procédure opérationnelle + monitoring
- ❌ **Prix ou stock écrits dans le PIM** alors que l'ERP/WMS sont maîtres : incohérences → lecture seule côté PIM

## Sources
- **Akeneo REST API** (v1, `/api/rest/v1`) — help.akeneo.com / api.akeneo.com
- **GS1 General Specifications v24.0** (2024) — GTIN/EAN-13, chiffre de contrôle — gs1.org
- **SAP S/4HANA** (IDoc, tables MM) — help.sap.com · **Talend / MuleSoft / Azure Data Factory** — middleware ETL/iPaaS
- **DAMA-DMBOK 2** (2017) — intégration et lineage de données — dama.org

## Voir aussi
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — sources de vérité (MDM) ERP/PIM/DAM
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — normalisation et contrôle qualité à l'entrée
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — modèle cible des attributs ERP
- [`migration-pim.md`](migration-pim.md) — reprise initiale du référentiel
