# Skill — Brand Portal
> Certifications: Bynder Certified Partner · Brandfolder Certified Partner · Adobe AEM Assets Specialist

## Objective
Deploy a brand portal that lets internal teams, agencies and external partners access approved assets, brand guidelines and press kits — with granular access, controlled rights and secure self-service.

## Brand portal functional architecture

```
BRAND PORTAL
├── 🎨 Brand guidelines
│   ├── Visual identity (logos, Pantone/HEX colors, typefaces)
│   ├── Tone of voice and editorial rules
│   ├── Correct / incorrect usage examples
│   └── Interactive brand guidelines (with downloads)
│
├── 📁 Approved assets
│   ├── Logos (all formats, white / transparent / color background)
│   ├── Product photos (packshots, mood, lifestyle)
│   ├── Videos (brand films, spots, tutorials)
│   ├── Templates (PowerPoint, Word, InDesign, Figma)
│   └── Icons and pictograms
│
├── 📰 Press kit
│   ├── Press releases (by date)
│   ├── Executive bios + high-resolution photos
│   ├── Key figures and infographics
│   └── Press contacts
│
└── 🔗 Partner access
    ├── Resellers (product assets + POS)
    ├── Agencies (briefs, current campaign assets)
    └── Media (press kit only)
```

## User access matrix

```
PROFILE                 PRODUCT ASSETS    GUIDELINES   PRESS KIT    CAMPAIGNS   TEMPLATES
──────────────────────  ────────────────  ───────────  ───────────  ──────────  ─────────
Internal team           ✅ All             ✅            ✅            ✅           ✅
Appointed creative agcy  ✅ Campaign only   ✅            ❌            ✅ (brief)   ✅
Partner reseller        ✅ Products only   ✅            ❌            ❌           ✅ (POS)
Journalist / Press      ❌                 ✅            ✅            ❌           ❌
Public (not logged in)  ❌                 ✅ (partial)  ✅ (partial)  ❌           ❌
```

## Bynder Brand Portal configuration — Checklist

```
CONFIGURATION SECTION                    KEY SETTINGS
──────────────────────────────────────   ─────────────────────────────────────────────────────
Portal identity                          Brand logo · Brand colors · Favicon · Custom domain
Public collections                       Asset groups visible without login
Private collections                      Per-profile restriction (ACL)
Search filters                           Tags · Type · Channel · Campaign · Date
Conditional download                     Rights required to download vs preview
On-the-fly conversion                    Formats offered for download (JPEG, PNG, SVG…)
External sharing (share link)            Temporary URL + expiry + optional password
Analytics                                Who downloads what, when, from which country
Watermark preview                        Watermark on previews of rights-managed assets
```

## Press kit template — Recommended structure

```
PRESS KIT — [Brand] — [Quarter/Event]
├── 01_Release_[topic]_[date].pdf
├── 02_Bios/
│   ├── Bio_CEO_[name]_EN.pdf
│   ├── Photo_CEO_[name]_HD.jpg       (min 2000px, neutral background)
│   └── ...
├── 03_Key_figures_[year].pdf
├── 04_Logos/
│   ├── Logo_[Brand]_RGB_white_bg.png
│   ├── Logo_[Brand]_CMYK.eps
│   └── Logo_[Brand]_vector.svg
├── 05_Product_visuals/               (max 10 HD photos)
└── 06_Press_contacts.pdf
```

## Deliverables
- Brand portal functional architecture (structure, profiles, access)
- Full portal configuration (branding, access, filters, downloads)
- Structured, up-to-date press kit
- Access-rights matrix per user profile
- Portal usage guide (for partners and agencies)
- Monthly analytics (top downloaded assets, active users, geo regions)

## Output format
Specify: **DAM used** (Bynder, Brandfolder, AEM Assets…), **user profiles** (internal, agencies, partners, press), **brands** to cover, priority **asset types** (logos, products, press…), **branding constraints** (custom domain, enterprise SSO), estimated external-user **volume**.

## Anti-patterns
- ❌ **No watermark on rights-managed previews**: leakage of uncleared assets → systematic watermark on RM/unapproved previews
- ❌ **Uniform access with no per-profile ACL**: press or a reseller reaches confidential campaigns → granular access matrix
- ❌ **Unmaintained press kit**: outdated logos/figures distributed → expiry date + quarterly review
- ❌ **Vague SSO / shared accounts**: lost traceability → standardized SSO (SAML 2.0 or OpenID Connect)
- ❌ **Permanent share links**: uncontrolled public URLs → expiring links + optional password
- ❌ **Guidelines separated from assets**: the user downloads without knowing the correct usage → guidelines embedded in the portal

## Sources
- **Bynder Brand Portal** — bynder.com · **Brandfolder** (Smartsheet) — brandfolder.com · **AEM Assets Brand Portal** — experienceleague.adobe.com
- **SSO** — SAML 2.0 (OASIS) / OpenID Connect (OpenID Foundation) — for partner/agency access
- **Creative Commons 4.0** (2013) — if open licenses are offered for download — creativecommons.org/licenses

## See also
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — rights gating downloads (watermark, RM/RF)
- [`gouvernance-dam.md`](gouvernance-dam.md) — access and profile governance
- [`workflow-validation-assets.md`](workflow-validation-assets.md) — only "approved" assets feed the portal
- [`distribution-multicanal.md`](distribution-multicanal.md) — on-the-fly conversion at download
