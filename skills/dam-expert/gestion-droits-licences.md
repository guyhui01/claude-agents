# Skill — Asset Usage Rights and License Management
> Certifications: Henry Stewart DAM Practitioner · Bynder Certified Partner · Widen Certified DAM Specialist
> Legal frameworks: **EU GDPR 2016/679** (art. 6, 9, 13-14, 17, 35) · **French Intellectual Property Code** (CPI art. L121-1 moral rights, L131-3 economic rights) · **French Civil Code art. 9** (image rights / privacy) · **EU AI Act 2024/1689** art. 50 (GenAI transparency) · CNIL — *Image rights guide* (cnil.fr) · Creative Commons (creativecommons.org/licenses)

## Objective
Manage digital asset usage rights in compliance with the **French and European** legal framework: identify license types, define restrictions (territory, channel, duration, resolution), build in expiration alerts and **GDPR + French Civil Code art. 9 compliance** for assets featuring identifiable people.

## License types and their constraints

```
LICENSE TYPE            DESCRIPTION                              TYPICAL RESTRICTIONS
──────────────────────  ──────────────────────────────────────   ─────────────────────────────────────────
Owned (Production)      Assets produced in-house                 None (unlimited use)
Royalty-Free (RF)       One-time payment, broad use              Sometimes print-run or geo limits
Rights-Managed (RM)     Pay per use (channel, size, print run)   Channel · resolution · territory · duration
Creative Commons        Open license with conditions             Attribution · NC · ND · SA per variant
Editorial only          Journalistic / educational use only      No commercial use
Photo copyright         Partial or full assignment               Defined duration · territory · media
Music rights (sync)     Video with licensed music                Duration · territory · channel
Image rights            Use of a person's identity               Duration · territory · medium · context
```

## Rights × channels × territories matrix

```
ASSET             LICENSE    WEB FR  PRINT EU  SOCIAL WW  MARKETPLACE  OUTDOOR FR  EXPIRY
───────────────   ─────────  ──────  ────────  ─────────  ───────────  ──────────  ──────────
photo_model_01    RM         ✅       ✅          ❌          ❌            ✅           2027-03-31
logo_partner      RF         ✅       ✅          ✅           ✅            ✅           Unlimited
video_promo_fr    Owned      ✅       N/A         ✅ (FR)      ❌            N/A         Unlimited
photo_location_NYC Editorial ❌       ❌           ❌           ❌            ❌           N/A
music_spot_v2     Sync       ✅       N/A         ✅           N/A           N/A         2026-12-31
photo_child       RM+Rights  ✅       ✅           ❌           ❌            ❌           2026-06-30
```

## Expiration alert policy

```
TIME BEFORE EXPIRY       ALERT                              RECIPIENTS
──────────────────────   ────────────────────────────────   ────────────────────────────────
90 days                  Preventive email notification      DAM Manager + Product Manager
30 days                  Urgent email alert + dashboard      DAM Manager + Legal + Marketing
7 days                   Critical alert — publishing limit  DAM Manager + Marketing Leadership
0 days (expiry)          Asset automatically restricted     Channel team notification
Expired for 30d          Automatic archiving                Monthly purge report
```

## GDPR + Image rights — Legal framework and technical controls

### Applicable legal sources

| Text | Articles | Scope |
|---|---|---|
| **EU GDPR 2016/679** | Art. 6 (legal bases) · Art. 9 (sensitive data incl. biometric image) · Art. 13-14 (informing individuals) · Art. 17 (right to erasure) · Art. 35 (DPIA for large-scale processing) | Processing images = personal data once identifiable |
| **French Civil Code** | **Art. 9** (right to privacy — basis of image rights) | Everyone has an exclusive right to their image, enforceable even when captured in a public place |
| **French Intellectual Property Code** | Art. L121-1 (moral right — inalienable, perpetual) · Art. L131-3 (assignment of economic rights — written form required with scope/duration/territory) | The photographer is the author of the work, distinct from the model |
| **EU AI Act 2024/1689** | Art. 50 (transparency for GenAI images / deepfakes) | Mandatory disclosure if content is significantly AI-generated or modified |
| **French Digital Republic Act 2016** | Art. 63 (right to erasure) | Reinforces GDPR art. 17 on image removal |
| **CNIL — Image rights guide** | cnil.fr/fr/le-droit-a-limage | Applied doctrine (controls and sanctions) |

### Model Release (USA) vs Image rights (France/EU) distinction

| Aspect | Model Release (USA) | Image rights (France/EU) |
|---|---|---|
| **Legal basis** | Common law + state contracts | French Civil Code art. 9 + GDPR |
| **Assignment** | Can be broad + perpetual | **No full assignment** (CPI art. L131-3: written + specific scope/duration/territory) |
| **Consent withdrawal** | Difficult post-signature | **Possible at any time** (GDPR art. 17 + Digital Republic Act art. 63) |
| **Minors** | Parental consent | **Both parents' authorization required** + the child's best interest (CNIL 2024) |
| **Public figure** | Less strict limits | Image rights retained outside of news context (Cass. civ. 1ère, Nov 13, 2003) |

### DAM technical controls (legal mapping)

| Legal rule | Source | DAM control | Non-compliance penalty |
|---|---|---|---|
| Written authorization required (rights assignment) | CPI art. L131-3 + Civil Code art. 9 | Flag `image_rights_signed = true` + signed-doc link | Publishing block + GDPR 4% global revenue |
| Minors: authorization from **both parents** | Civil Code art. 372 + CNIL 2024 | Flag `minor = true` → mandatory legal validation | Absolute block + DPO alert + criminal risk |
| Public figure: limited to news context | Cass. civ. 1ère 2003 | Flag `public_figure = true` + usage context | Legal review + damages risk |
| **Right to erasure** (deletion on request) | GDPR art. 17 + 2016 Act art. 63 | DAM deletion workflow **72h** (GDPR art. 12) + CDN propagation | CNIL complaint + administrative penalty |
| Keep authorization 5 years | Civil Code art. 2224 (civil limitation) | Audit trail accessible 5 years + backup | Dispute without proof = lose the case |
| AI disclosure if significant modification | AI Act art. 50 | Flag `ai_generated = true` + publication notice | AI Act penalty 7% global revenue (in force 2026) |

### Right-to-erasure workflow (GDPR art. 17 — 72h max)

```
D0    Erasure request received (DPO email / GDPR form)
        ├→ Identify the asset(s) concerned in the DAM
        └→ Verify request legitimacy (GDPR art. 17.1)
D+24h Notify the DAM team + flag "deletion_requested" on the assets
D+48h Active removal:
        ├→ DAM deletion (asset + personal metadata)
        ├→ CDN cache purge (Cloudflare/Akamai purge by URL)
        ├→ Notify teams that downloaded it (usage revocation)
        └→ Published communications: removal OR blurring per context
D+72h Written confirmation to the requester (GDPR art. 12 obligation)
        └→ Audit trail kept 5 years (proof of processing)
```

## Deliverables
- License-type dictionary (definitions + constraints per type)
- Rights × channels × territories matrix (for each campaign)
- Rights module configuration in the DAM (fields, alerts, restrictions)
- Authorization collection and archiving procedure (image rights, licenses)
- Rights audit report (expiring assets, assets with no documented rights)
- GDPR request handling procedure (right to erasure on assets)

## Output format
Specify: **DAM used**, main **asset types** (studio photos, lifestyle, videos…), **geographic markets** (territories), **distribution channels** (web, print, social, OOH…), **presence of people** (models, employees, public figures, minors).
