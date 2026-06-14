# Skill — Supplier Portal & External Contribution Onboarding
> Certifications: Akeneo Certified Developer · Contentserv PIM Specialist · inriver Certified Professional

## Objective
Deploy a supplier portal that lets external partners (manufacturers, suppliers, agencies) contribute product data directly: guided onboarding, structured forms, validation workflows and automated integration into the PIM.

## Supplier portal architecture

```
SUPPLIER                       PORTAL                         INTERNAL PIM
─────────────────────────────  ─────────────────────────────  ─────────────────────────────
Login (SSO / username)         Secure authentication
Catalog selection              Access to their references only
Product record entry           Family-guided form
Asset upload                   Upload interface → DAM         PIM ↔ DAM association
Submit for validation       →  Validation workflow         →  Internal Data Steward review
Reject/accept notification  ←  Email / notification        ←  Data Steward decision
Automatic publishing                                        →  "Published" status
```

## Supplier contribution workflow

```
SUPPLIER STATUS        INTERNAL PIM STATUS         ACTOR                 POSSIBLE ACTION
─────────────────────  ──────────────────────────  ────────────────────  ─────────────────────
Draft (in progress)    —                           Supplier              Edit, save
Submitted              Awaiting Review             Supplier              View (read-only)
Under review           In Review                   Data Steward          Approve / Reject
Rejected               —                           Data Steward + Suppl. Comment required
Info requested         —                           Data Steward          Targeted question
Approved               Approved → Published        Data Steward          Auto-publishing
```

## Access and security rules

```
RULE                           RATIONALE                              IMPLEMENTATION
─────────────────────────────  ─────────────────────────────────────  ─────────────────────────────
One supplier = their products  No leakage between suppliers           ACL per supplier code
Non-editable EAN field         ERP master identifier (immutable)      Read-only attribute in portal
Price not visible              Commercial confidentiality             Price attribute masking
Full audit trail               Traceability of changes                Log date + user + changed value
Account expiration             Auto-deactivation at contract end      Supplier account expiry date
```

## Rejection email template (Data Steward → Supplier)

```
Subject: [PIM Portal] Revision required — Reference [SKU]

Hello [Supplier first name],

Your product record [SKU] — [Product name] has been reviewed
and needs the following corrections before publishing:

❌ Main image: insufficient resolution (required: 2000×2000 px, provided: 800×600 px)
❌ Long description: too short (required: ≥ 150 characters, provided: 42 characters)
⚠️ Weight: value inconsistent with the supplied technical sheet (2.3 kg declared vs 1.8 kg on doc)

Please correct these points and resubmit.
Correction deadline: [Date + 5 business days]

Product Data Team
```

## Deliverables
- Functional architecture of the supplier portal
- Entry forms per product family (fields, rules, contextual help)
- Validation workflow (BPMN diagram, SLA per step)
- Access and security rules (ACL, audit trail)
- Supplier onboarding guide (how to use the portal)
- Contribution tracking dashboard (KPIs: validation rate, average lead time, top suppliers)

## Output format
Specify: **PIM used** (Akeneo Supplier Data Manager, Contentserv, custom solution…), **number of suppliers** involved, **product families** to cover, **volume** of records/year, **required integrations** (DAM for assets, ERP for reference creation).

## Anti-patterns
- ❌ **Vague SSO or shared accounts** between suppliers: lost traceability → standardized SSO (SAML 2.0 / OpenID Connect), 1 account = 1 contributor
- ❌ **No ACL per supplier code**: one supplier sees/edits another's products → strict partitioning
- ❌ **EAN editable by the supplier** while the ERP is master: repository corruption → read-only attribute
- ❌ **No audit trail**: impossible to trace who contributed what → log date/user/value
- ❌ **Form with no contextual help or template**: poor-quality contributions → guided fields + rules + examples
- ❌ **GDPR of supplier contacts ignored**: unframed personal data → legal basis + retention period

## Sources
- **Akeneo Supplier Data Manager** — native supplier collection — akeneo.com
- **SSO** — SAML 2.0 (OASIS) / OpenID Connect (OpenID Foundation) — partner authentication
- **BPMN 2.0.2** — OMG (2013) — contribution validation workflow — omg.org/spec/BPMN
- **GS1 General Specifications v24.0** (2024) — EAN/GTIN as master identifier · **GDPR** (EU) 2016/679 — supplier contact data

## See also
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — normalization of received contributions
- [`enrichissement-produit.md`](enrichissement-produit.md) — internal validation circuit
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — Data Stewards and quality rules
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — families/attributes exposed to suppliers
