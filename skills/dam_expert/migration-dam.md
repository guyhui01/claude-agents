# Skill — DAM Migration (Inventory, Taxonomy Mapping, Media ETL)
> Certifications: Henry Stewart DAM Practitioner · Bynder Certified Partner · Widen Certified DAM Specialist

## Objective
Run a DAM or asset migration to a new system: inventory existing assets, quality audit, taxonomy mapping, media extraction and transformation, metadata migration and UAT — guaranteeing asset integrity, rights preservation and access continuity.

## 6-phase DAM migration plan

```
PHASE 1 — INVENTORY & AUDIT (D-120 to D-90)
  □ Extract a full inventory (asset list, metadata, rights, size)
  □ Hash deduplication (MD5/SHA256) — identify exact duplicates
  □ Technical quality assessment (resolution, format, color profile, weight)
  □ Rights audit (assets with no expiry, no license, no credit)
  □ Identify orphan assets (not referenced in CMS/PIM)
  □ Volume estimation: # assets, total size (GB/TB), # metadata

PHASE 2 — TARGET DESIGN (D-90 to D-60)
  □ New taxonomy architecture (cf. taxonomie-assets skill)
  □ Source → target metadata mapping (fields, standards, vocabularies)
  □ Migration strategy (all-at-once vs phased by brand or type)
  □ Decision on orphan assets and rights-less assets (migrate/archive/delete)
  □ Cut-over plan (migration window, double run if needed)

PHASE 3 — MEDIA ETL DEVELOPMENT (D-60 to D-20)
  □ Extraction scripts (legacy DAM API or direct storage export)
  □ Metadata transformation scripts (normalization, enrichment)
  □ Format conversion if needed (e.g. TIFF master → keep + generate WebP)
  □ Load scripts (new DAM API, with normalized metadata)
  □ Pilot tests (10% of assets, 1 brand or 1 type)

PHASE 4 — UAT (D-20 to D-5)
  □ Full migration in a UAT environment
  □ Taxonomy validation (tree, vocabularies, search)
  □ Metadata validation (completeness, accuracy, rights)
  □ Business-team UAT (AD, Brand, Marketing, Press)
  □ Integration tests (CMS, PIM — assets still accessible)
  □ Migrated audit-trail check (if legally required)

PHASE 5 — CUT-OVER (D0)
  □ Freeze the legacy DAM (read-only + export)
  □ Delta migration (assets created/modified during UAT)
  □ Activate the new DAM (DNS, configurations, user access)
  □ Switch the connectors (CMS, PIM, CDN) to the new DAM
  □ Smoke tests (upload, download, search, renditions, rights)

PHASE 6 — POST-MIGRATION (D+7 to D+30)
  □ Anomaly monitoring (missing assets, rights errors, 404s)
  □ Team training (new interfaces, new searches)
  □ Decommission the legacy DAM (after the warranty period)
  □ Archive the legacy DAM (storage snapshot)
  □ Migration review (metrics, incidents, lessons learned)
```

## Metadata mapping — Template

```
SOURCE METADATA (old DAM)         TARGET FIELD (new DAM)       TRANSFORMATION
───────────────────────────────   ──────────────────────────   ──────────────────────────────
asset_name                        dc:title                     Remove extension + trim
asset_desc                        dc:description               HTML → plain text if needed
keywords (comma-separated)        dc:subject (array)           Split "," → Array of tags
copyright                         xmpRights:UsageTerms         Rights mapping → license type
photographer                      photoshop:Credit             Trim + name formatting
expiry_date (DD/MM/YYYY)          dam:expiry_date (ISO 8601)   Normalized date format
brand_tag (string)                dam:brand (vocabulary)       Controlled-vocabulary mapping
channel (1=web, 2=print)          dam:channel (array)          Numeric → labels mapping
status (0/1/2)                    dam:status (workflow)        0→draft, 1→approved, 2→archived
```

## Migration script (Python + API)

```python
import requests, hashlib, json
from pathlib import Path

def migrate_asset(asset: dict, source_api: str, target_api: str) -> dict:
    """Migrate an asset with its metadata from one DAM to another"""

    # 1. Download from the source DAM
    response = requests.get(
        f"{source_api}/assets/{asset['id']}/download",
        headers={"Authorization": f"Bearer {SOURCE_TOKEN}"}
    )
    file_content = response.content
    file_hash = hashlib.sha256(file_content).hexdigest()

    # 2. Metadata transformation
    metadata_target = {
        "title":       asset.get("name", "").replace(Path(asset["name"]).suffix, ""),
        "description": asset.get("description", ""),
        "tags":        asset.get("keywords", "").split(","),
        "rights":      map_license(asset.get("copyright", "")),
        "expiry":      normalize_date(asset.get("expiry_date")),
        "hash":        file_hash,  # For future deduplication
    }

    # 3. Upload to the target DAM
    upload = requests.post(
        f"{target_api}/assets",
        headers={"Authorization": f"Bearer {TARGET_TOKEN}"},
        files={"file": (asset["name"], file_content)},
        data={"metadata": json.dumps(metadata_target)}
    )
    return upload.json()
```

## Deliverables
- Legacy DAM inventory and audit report (volume, quality, rights)
- Source → target taxonomy mapping (tree + metadata)
- Media ETL scripts (extraction + transformation + load)
- Cut-over plan and rollback procedure
- UAT report (migrated assets, errors, validated metadata)
- Post-migration review (final metrics, residual items, lessons learned)

## Output format
Specify: **source DAM** (name, version, API available?), **target DAM**, **volume** (# assets, total size in GB), **integrations to reconnect** (CMS, PIM, CDN), **availability constraints** (can asset access be suspended?), **time** available for the migration.

## Anti-patterns
- ❌ **Migration without hash deduplication** (MD5/SHA256): legacy duplicates are carried over as-is → deduplicate in phase 1
- ❌ **Cut-over without freeze + delta migration**: assets created/modified during UAT are lost → read-only freeze + D0 delta
- ❌ **Mass-migrating rights-less / orphan assets**: you import legal and documentary debt → decide migrate/archive/delete in phase 2
- ❌ **Not keeping the master** (TIFF/RAW) by migrating only renditions: irreversible quality loss for print → migrate the master + regenerate
- ❌ **No rollback plan**: no way back if the cut-over fails → rollback procedure tested in UAT
- ❌ **Approximate rights mapping** (`copyright` free text → license): wrong licenses in the target → legally validated correspondence table

## Sources
- **IPTC Photo Metadata Standard 2025.1** (Oct. 2025) — target metadata — iptc.org/standards/photo-metadata
- **XMP** — ISO 16684-1:2019 (Adobe) · **Dublin Core** — ISO 15836-1:2017 (DCMI) — metadata mapping standards
- **Bynder API** — developer.bynder.com · **Widen** — widen.com — source/target APIs
- **DAMA-DMBOK 2** (2017) — data migration governance

## See also
- [`taxonomie-assets.md`](taxonomie-assets.md) — target migration schema
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — handling rights-less assets
- [`gouvernance-dam.md`](gouvernance-dam.md) — legacy archiving/purge policy
- [`transformation-formats.md`](transformation-formats.md) — format conversion during the ETL
- [`../cms_digital/migration-cms.md`](../cms_digital/migration-cms.md) — coordinated CMS migration (referenced assets)
