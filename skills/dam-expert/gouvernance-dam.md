# Skill — DAM Governance (Policies, Roles, Archiving, Audit)
> Certifications: Henry Stewart DAM Practitioner · ISO/IEC 42001:2023 · CDMP DAMA

## Objective
Set up the DAM governance framework: define usage policies, roles and responsibilities, archiving and purge rules, audit processes — to guarantee the durability, compliance and control of digital assets over the long term.

## The 5 pillars of DAM governance

```
PILLAR              CONTENT                                    ASSOCIATED DELIVERABLE
──────────────────  ─────────────────────────────────────────  ─────────────────────────────────
1. Organization     Roles · Responsibilities · DAM council     RACI · Governance charter · Council
2. Policies         Usage rules · Standards · Lifecycle        DAM Data Policy · Naming convention
3. Quality          Technical standards · Quality control      Validation grid · Scorecard
4. Archiving/Purge  Retention rules · Legal archiving          Archiving policy · Purge schedule
5. Compliance       GDPR · Image rights · Copyright            Rights audit · Compliance report
```

## DAM roles RACI

```
ROLE                 DESCRIPTION                                   KEY RESPONSIBILITIES
───────────────────  ────────────────────────────────────────────  ─────────────────────────────────────────
DAM Admin            Technical DAM administration                  Configuration · Users · Backups
DAM Manager          Day-to-day operational governance              Validation · Rights · Taxonomy · KPIs
Brand Manager        Keeper of brand consistency                   Brand compliance validation
Contributor          Asset upload and enrichment                    Asset submission · Metadata
Internal reader      Asset consultation and download                Search · Download
External reader      Limited access (agency, partner, press)        Portal access · Restricted rights
Legal / DPO          Rights, GDPR, image-rights validation          License validation · Asset GDPR
```

## Archiving and purge policy

```
ASSET CATEGORY              ACTIVE RETENTION   ARCHIVING       FINAL PURGE
──────────────────────────   ────────────────   ─────────────   ──────────────────────
Active campaign asset        Campaign duration  +3 years        +7 years (legal)
Active product asset         Product lifetime   +5 years        +10 years
Discontinued product asset   0 (immediate arch) +7 years        +10 years
Rights-expired asset         0 (restriction)    +1 year         +3 years (audit)
Press kit                    Permanent          Permanent       Never (archived)
High-res master assets       Permanent          Permanent       On leadership decision
Unapproved drafts            30 days            Auto archive    +90 days (auto purge)
Orphan assets (unlinked)     Identification D0  +30 days        +60 days if unclaimed
```

## DAM governance scorecard (monthly)

```
INDICATOR                               TARGET       ALERT         MEASURE
─────────────────────────────────────   ──────────   ──────────    ──────────────────────────────
Assets with no identified owner         ≤ 2%         > 5%          Empty "owner" field
Assets with no rights expiry date       ≤ 5%         > 15%         Empty "expiry_date" field
Untagged assets (< 5 tags)              ≤ 3%         > 10%         Tag count < 5
Unhandled duplicate assets              ≤ 1%         > 3%          MD5/SHA256 hash detection
Average validation time                 ≤ 24h        > 72h         Upload date → approved date
Scheduled purges executed               100%         < 100%        Purge policy run
Inactive users (>90 days)               ≤ 10%        > 20%         Access account audit
```

## Audit trail — Events to log

```
EVENT                        DATA TO KEEP
──────────────────────────   ──────────────────────────────────────────────────────
Asset upload                 Date · User · File name · Hash · Metadata
Metadata change              Date · User · Changed field · Old value
Status change                Date · User · Status before → after
Download                     Date · User · Asset · Channel · IP (if external)
External share               Date · User · Recipient · Validity duration
Deletion / Archiving         Date · User · Reason · Backup confirmed
Rights change                Date · User · Rights type · Territory
```

## Deliverables
- DAM governance charter (policies, roles, guiding principles)
- Complete DAM responsibilities RACI
- Archiving and purge policy (per asset category)
- Monthly governance scorecard (KPIs + alerts)
- Annual audit report (rights, GDPR, quality, orphans compliance)
- DAM continuity plan (backup, recovery, disaster procedure)

## Output format
Specify: **DAM used**, **scope** (brands, BUs, geographies), **legal constraints** (sector, applicable regulation), **volume** (# assets, users), **current governance problems** identified (if auditing the existing setup).

## Anti-patterns
- ❌ **Governance with no council or owner**: nobody settles the trade-offs → DAM council + named RACI
- ❌ **Archiving policy never executed**: the theoretical purge never runs → storage cost and documentary debt → automate the purge schedule
- ❌ **Retention durations not aligned with sector legal obligations**: compliance risk → validate durations with legal/DPO
- ❌ **No audit trail**: impossible to prove who did what → log key events (upload, rights, deletion)
- ❌ **Scorecard with no alert threshold or action**: theoretical governance → every KPI with a target + alert + owner
- ❌ **Confusing DAM Admin (technical) and DAM Manager (governance)**: diluted responsibilities → distinct RACI

## Sources
- **ISO/IEC 42001:2023** — AI Management System (AI governance applied to the augmented DAM) — iso.org
- **DAMA-DMBOK 2** (2017) — *Data Management Body of Knowledge*, data governance (CDMP) — dama.org
- **DAM Maturity Model** — DAM Foundation — damfoundation.org
- **GDPR** — Regulation (EU) 2016/679 (assets with people) · **legal retention** obligations to be specified per sector — eur-lex.europa.eu

## See also
- [`taxonomie-assets.md`](taxonomie-assets.md) — governed standards and controlled vocabularies
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — rights/GDPR compliance of pillar 5
- [`workflow-validation-assets.md`](workflow-validation-assets.md) — lifecycle and versioning
- [`analytics-assets.md`](analytics-assets.md) — KPIs feeding the governance scorecard
