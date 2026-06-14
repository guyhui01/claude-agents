# Skill — Asset Taxonomy & Metadata Model
> Certifications: Henry Stewart DAM Practitioner · IPTC Photo Metadata Standard · Bynder Certified Partner

## Objective
Design the DAM's classification structure and metadata model: folder taxonomy, metadata schemas (IPTC/XMP/EXIF), controlled vocabularies and tagging rules — to make assets findable, reusable and governed at scale.

## Recommended taxonomy structure

```
DAM /
├── Brands /
│   ├── [Brand A] /
│   │   ├── Visual identity /        # Logos, brand guidelines, palettes, typefaces
│   │   ├── Products /
│   │   │   ├── [Range] /
│   │   │   │   ├── Packshots /      # White-background product shots
│   │   │   │   ├── Lifestyle /      # Lifestyle photos, contextualization
│   │   │   │   └── Videos /         # Product films, tutorials
│   │   │   └── ...
│   │   ├── Campaigns /              # Assets organized by campaign / season
│   │   └── Press /                  # Press kit, releases, bios
│   └── [Brand B] /
├── Corporate /
│   ├── Leadership /                 # Executive photos, org charts
│   ├── Events /                     # Conferences, trade shows, roadshows
│   └── CSR /                        # Reports, ESG infographics
├── Agencies & Partners /            # Assets received from agencies (limited access)
└── Archives /                       # Expired assets (read-only)
```

## Metadata schema — IPTC/XMP standards

```
CATEGORY            IPTC / XMP FIELD                  USE                         REQUIRED
──────────────────  ────────────────────────────────  ──────────────────────────  ─────────────
Identification      dc:title                          Asset title                 Yes
                    dc:description                    Contextual description      Recommended
                    Iptc4xmpCore:SubjectCode          IPTC subject codes          Optional
Rights              xmpRights:UsageTerms              Usage conditions            Yes
                    xmpRights:WebStatement            Rights policy URL           Recommended
                    photoshop:Credit                  Photographer credit         Yes (photos)
                    Iptc4xmpCore:CopyrightNotice      Copyright notice            Yes
Content             dc:subject                        Keywords / tags             Yes (≥ 5)
                    Iptc4xmpExt:PersonInImage         Identified people           Required (GDPR)
                    Iptc4xmpExt:LocationCreated       Shooting location           Recommended
Technical           exif:ImageWidth / ImageLength     Pixel dimensions            Automatic
                    exif:ColorSpace                   sRGB / AdobeRGB / CMYK      Automatic
                    photoshop:DateCreated             Creation date               Yes
Internal            dam:brand                         Associated brand            Yes
                    dam:product_sku                   Linked product SKU (if any) Conditional
                    dam:channel                       Authorized channel(s)       Yes
                    dam:expiry_date                   Rights expiry date          Yes
```

## Controlled vocabularies — Examples

```
FIELD               ALLOWED VALUES (examples)
──────────────────  ──────────────────────────────────────────────────────────────────
dam:asset_type      packshot · lifestyle · mood · icon · logo · video · document
dam:color_mode      RGB · CMYK · Grayscale · LAB
dam:channel         web · print · social · email · marketplace · outdoor
dam:status          draft · awaiting_review · approved · published · expired · archived
dam:territory       FR · EU · WORLD · EXCL_US · EXCL_CHINA
dam:license_type    royalty_free · rights_managed · creative_commons · owned
```

## Deliverables
- Complete taxonomy structure (DAM folder structure)
- Metadata dictionary (fields, types, required/optional, standards)
- Controlled vocabularies (allowed-value lists per field)
- Tagging guide (how to tag assets, examples per type)
- Schema configuration in the target DAM (Bynder, AEM Assets, Cloudinary)
- Legacy metadata migration procedure

## Output format
Specify: **target DAM** (Bynder, AEM Assets, Cloudinary, Canto…), **brands involved**, main **asset types** (photos, videos, documents, icons…), **GDPR constraints** (identifiable people), **integrations** (PIM, CMS), estimated **volume** (# assets).

## Anti-patterns
- ❌ **Taxonomy too deep** (> 3-4 levels): buried, unfindable assets → favor a flat structure + rich metadata
- ❌ **Free-text fields without a controlled vocabulary**: `dam:channel` entered as free text → inconsistent values ("web" / "Web" / "site") → enforce closed lists
- ❌ **`Iptc4xmpExt:PersonInImage` left blank** on photos of identifiable people → GDPR non-compliance (art. 9 if sensitive data)
- ❌ **No `dam:expiry_date`**: assets reused after rights expire → legal risk (cf. `gestion-droits-licences.md`)
- ❌ **Tagging after the fact** (not at upload): the re-tagging backlog becomes unmanageable → blocking required metadata at ingestion
- ❌ **Proprietary metadata only** (internal `dam:*` fields with no IPTC/XMP mapping): loss on cross-system export → always map to a standard

## Sources
- **IPTC Photo Metadata Standard 2025.1** (Oct. 2025 — IPTC Core 1.5 / Extension 1.9, adds AI-generated-content properties) — iptc.org/standards/photo-metadata
- **XMP** — *Extensible Metadata Platform*, ISO 16684-1:2019 (Adobe) — adobe.com/products/xmp
- **Exif 3.0** — CIPA DC-008-2023 (UTF-8 support) — cipa.jp
- **Dublin Core** — DCMI Metadata Terms / ISO 15836-1:2017 — dublincore.org
- **GDPR** — Regulation (EU) 2016/679, art. 9 (biometric/identification data) — eur-lex.europa.eu

## See also
- [`naming-convention.md`](naming-convention.md) — naming convention consistent with the taxonomy
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — rights, expiration, GDPR on assets
- [`gouvernance-dam.md`](gouvernance-dam.md) — governance and archiving policy
- [`migration-dam.md`](migration-dam.md) — migrating legacy metadata to this schema
- [`dam-augmente-ia.md`](dam-augmente-ia.md) — AI auto-tagging feeding the controlled vocabularies
- [`../cms_digital/integration-pim-dam.md`](../cms_digital/integration-pim-dam.md) — exposing assets and metadata to the CMS
