# Skill — ERP → PIM Integration (Inbound data flows)
> Certifications: SAP MDG Associate · Akeneo Certified Developer · Pimcore Certified Developer

## Objective
Design and implement inbound data flows from the ERP to the PIM: mapping of technical data (reference, family, units, base price), transformation rules and sync orchestration — guaranteeing consistency between the ERP master repository and the PIM catalog.

## ERP → PIM architecture principle

```
ERP (master source)                PIM (enrichment)
────────────────────────────────   ────────────────────────────────────
Material master (MMR/MAT)       →  Product records (skeleton)
Material families / groups      →  PIM families + attribute groups
Base sales price                →  Price attribute (read-only)
Standard units of measure       →  Technical attributes (weight, dim.)
Material status (active / EOL)  →  PIM status (draft / archived)
Certifications, standards       →  Certification attributes
Customs codes (HS Code)         →  Regulatory attribute
```

## Integration patterns

```
PATTERN              DESCRIPTION                               USE CASE
───────────────────  ────────────────────────────────────────  ────────────────────────────────
Daily batch          ERP export → file → PIM import           PIM without an API, low volume
REST API pull        PIM polls the ERP at fixed intervals      ERP exposes an API
REST API push        ERP notifies the PIM on each change       Real-time required (material creation)
Message Queue        ERP events → queue → PIM consumer         High volume, decoupling
Dedicated ETL        Middleware (Talend, MuleSoft, Azure Data)  Complex transformations, multi-source
```

## SAP ERP → Akeneo data mapping

```
SAP FIELD (MM60/MAT)           AKENEO ATTRIBUTE          TRANSFORMATION
─────────────────────────────  ────────────────────────  ─────────────────────────────────────
MATNR (material ref)           sku                       Uppercase, trim
MAKTX (40-char label)          product_name.fr_FR        Title case
MATKL (material group)         pim_family                Mapping table (MATKL → Akeneo family)
MEINS (base unit)              base_unit                 UOM conversion → readable label
NTGEW (net weight)             weight                    NTGEW + GEWEI → value + Metric unit
BRGEW (gross weight)           gross_weight              Same
LAENG × BREIT × HOEHE          dimension_l/w/h           Conversion per GROES unit
MTPOS (item category)          product_type              Mapping: NORM→standard, KMAT→configurable
LVORM (logical deletion)       status                    true → archived, false → keep status
BISMT (old material number)    former_reference          Raw text
EAN11 (EAN code)               ean                       Check-digit verification
```

## Akeneo API import script (Python)

```python
import requests, json

AKENEO_URL = "https://my-pim.akeneo.com/api/rest/v1"
TOKEN = "Bearer <token>"

def upsert_product(sku: str, attributes: dict) -> dict:
    """Create or update a product via the Akeneo API"""
    payload = {
        "identifier": sku,
        "family": attributes.get("pim_family"),
        "values": {
            "product_name": [{"locale": "fr_FR", "scope": None, "data": attributes["name"]}],
            "ean":          [{"locale": None, "scope": None, "data": attributes["ean"]}],
            "weight": [{
                "locale": None, "scope": None,
                "data": {"amount": attributes["weight"], "unit": "KILOGRAM"}
            }],
        }
    }
    headers = {"Authorization": TOKEN, "Content-Type": "application/json"}
    url = f"{AKENEO_URL}/products/{sku}"
    response = requests.patch(url, headers=headers, json=payload)
    response.raise_for_status()
    return response.json() if response.text else {"status": "updated"}
```

## Deliverables
- ERP → PIM integration architecture diagram (flows, frequencies, volumes)
- Full ERP field → PIM attribute mapping (correspondence table)
- Transformation and exception-handling rules
- Middleware scripts or configuration (ETL, API, queue)
- Test plan (pilot data, delta validation, UAT)
- Operational documentation (incident runbook, manual replay)

## Output format
Specify: **source ERP** (SAP S/4HANA, Oracle, Dynamics…), **target PIM** (Akeneo, Pimcore…), **volume** (materials, movements/day), **desired pattern** (batch/API/queue), **acceptable sync lag**, **existing intermediate systems** (middleware, ESB, iPaaS).

## Anti-patterns
- ❌ **ERP and PIM both "master" of the same field**: unresolved conflicts → define the source of truth per attribute (cf. `gouvernance-donnees-produit.md`)
- ❌ **Sync with no delta handling**: full re-import on every run → costly and risky → process only changes (timestamp/event)
- ❌ **EAN imported without GS1 check-digit verification**: false identifiers propagated → validate on entry
- ❌ **Hardcoded mapping** (no MATKL → family table): not maintainable → externalized correspondence table
- ❌ **No incident runbook / manual replay**: silent blockages → operational procedure + monitoring
- ❌ **Price or stock written into the PIM** while ERP/WMS are master: inconsistencies → read-only on the PIM side

## Sources
- **Akeneo REST API** (v1, `/api/rest/v1`) — help.akeneo.com / api.akeneo.com
- **GS1 General Specifications v24.0** (2024) — GTIN/EAN-13, check digit — gs1.org
- **SAP S/4HANA** (IDoc, MM tables) — help.sap.com · **Talend / MuleSoft / Azure Data Factory** — ETL/iPaaS middleware
- **DAMA-DMBOK 2** (2017) — data integration and lineage — dama.org

## See also
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — sources of truth (MDM) ERP/PIM/DAM
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — normalization and quality control on entry
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — target model for ERP attributes
- [`migration-pim.md`](migration-pim.md) — initial repository load
