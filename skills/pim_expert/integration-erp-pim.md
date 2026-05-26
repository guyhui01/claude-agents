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
