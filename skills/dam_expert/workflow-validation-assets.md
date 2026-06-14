# Skill — Asset Validation Workflows & Lifecycle
> Certifications: Bynder Certified Partner · Adobe Certified Expert AEM Assets Specialist · Canto Certified Professional

## Objective
Define and implement digital asset validation workflows: review circuit, approval, versioning and full lifecycle management — to ensure that only quality, compliant, rights-valid assets are distributed across channels.

## DAM asset lifecycle

```
STATUS            DESCRIPTION                              ACTOR                    TRANSITIONS
───────────────   ──────────────────────────────────────   ──────────────────────   ─────────────────────────
Upload            Raw asset received (agency, studio)      System / Contributor     → In Review (auto)
In Review         Awaiting technical validation            DAM Manager              → Approved / Rejected
Rejected          Asset refused (quality, rights, brief)   DAM Manager              → Archive (or re-upload)
Approved          Validated, ready to use                  DAM Manager              → Published / Expired
Published         Live on the authorized channels          System (auto)            → Expired (expiry date)
Expired           Rights expired or campaign ended         System (auto)            → Archived / Deleted
Archived          Long-term retention (not visible)        DAM Admin                → Deleted (after purge policy)
Deleted           Permanently removed                      DAM Admin                → (irreversible)
```

## Validation workflow — Criteria per step

```
VALIDATION STEP         CONTROL CRITERIA                              OWNER
─────────────────────   ───────────────────────────────────────────   ──────────────────
Technical compliance    Resolution ≥ channel threshold · Accepted fmt DAM Manager (auto)
                        Weight ≤ limit · Correct color profile
Brief compliance        Asset matches the approved creative brief     Art Director
Rights and licenses     Copyright identified · Territory rights OK    Legal / DAM Manager
                        Expiry date filled in
GDPR (if people)        Signed image-rights authorization             Legal
                        Identified minors → automatic block
Brand compliance        Brand guidelines respected (logo, colors)     Brand Manager
Metadata                Tags ≥ 5 · Title filled · Channel defined     DAM Manager
```

## Versioning policy

```
RULE                                     IMPLEMENTATION
──────────────────────────────────────   ─────────────────────────────────────────────────────
Every change = a new version             No file overwrite — auto increment (v1, v2…)
Keep major versions                      v1, v2, v3 kept indefinitely
Purge intermediate versions              Minor versions (v1.1, v1.2) → purge after 6 months
Active version = current version         Only the latest approved version is distributed
Restore possible                         Any validated version can be reactivated if needed
Full audit trail                         Date, author, action logged on each version
```

## Validation SLA

```
ASSET TYPE               TARGET TIME    MAX TIME     ESCALATION IF EXCEEDED
──────────────────────   ────────────   ─────────    ─────────────────────────────
Product photo (packshot) 24h            48h          DAM Manager notification
Product video            48h            72h          AD + Manager notification
Urgent campaign asset    4h             8h           Direct call to the DAM lead
Legal document           48h            5 days       Escalation to the legal team
External partner asset   3 days         5 days       Partner notification
```

## Deliverables
- Validation workflow diagram (BPMN, statuses, transitions, actors)
- Per-step control criteria (validation grid)
- Versioning policy (rules, purge, restore)
- Validation SLA per asset type
- Workflow configuration in the DAM (Bynder Workflow, AEM Workflow, Canto)
- Monthly workflow performance report (lead times, rejection rate, backlog)

## Output format
Specify: **DAM used**, **asset types** involved, **actors involved** (teams, agencies, legal), **deadline constraints** (campaigns, launches), **volume** (# uploads/week), **special cases** (minors, public figures, music rights).

## Anti-patterns
- ❌ **Workflow without an SLA**: validations drag on, unmanageable backlog → target + max time + escalation per asset type
- ❌ **No automatic block of identified minors**: GDPR risk (art. 9) and image rights → blocking check
- ❌ **File overwrite** instead of a new version: loss of history and audit trail → incremental versioning
- ❌ **"Rights and licenses" step skipped** to go faster: distribution of assets without valid rights → non-bypassable blocking gate
- ❌ **Too many validation steps** (over-process): bottleneck → calibrate the circuit to the asset's stakes
- ❌ **Purely declarative validation** (no objective criteria): subjective decisions → explicit control grid per step

## Sources
- **BPMN 2.0.2** — OMG (Object Management Group, 2013) — validation workflow modeling — omg.org/spec/BPMN
- **GDPR** — Regulation (EU) 2016/679, art. 9 (minors, sensitive data) · **French Civil Code** art. 9 (image rights) — cf. `gestion-droits-licences.md`
- **EU AI Act** — Regulation (EU) 2024/1689, art. 50 (transparency for AI content in the validation circuit)
- **Bynder Workflow / AEM Assets Workflow / Canto** — vendor documentation — developer.bynder.com · experienceleague.adobe.com

## See also
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — rights/GDPR control in the validation circuit
- [`taxonomie-assets.md`](taxonomie-assets.md) — required metadata checked at validation
- [`naming-convention.md`](naming-convention.md) — naming compliance at ingestion
- [`gouvernance-dam.md`](gouvernance-dam.md) — lifecycle and purge policy
