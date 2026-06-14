# Skill — Multichannel Digital Asset Distribution
> Certifications: Cloudinary Media Developer Expert · Bynder Certified Partner · Adobe AEM Assets Specialist

## Objective
Distribute digital assets across all distribution channels (web, social, print, email, e-commerce, outdoor) by automatically adapting formats, resolutions and color profiles to each channel's requirements — while maintaining usage-rights traceability.

## Distribution matrix per channel

```
CHANNEL             TARGET FORMAT   RESOLUTION    COLOR PROFILE    MAX WEIGHT   NOTES
──────────────────  ─────────────   ──────────    ──────────────   ─────────    ─────────────────────────
Website (desktop)   WebP / JPEG     72-96 dpi     sRGB             < 200 KB     Lazy loading · srcset
Website (mobile)    WebP            72 dpi        sRGB             < 100 KB     Portrait format preferred
E-commerce          JPEG / PNG      96 dpi        sRGB             < 500 KB     White bg 2000×2000 min
Social Instagram    JPEG            72 dpi        sRGB             < 8 MB       1:1 / 4:5 / 16:9 per post
Social LinkedIn     JPEG / PNG      72 dpi        sRGB             < 5 MB       1200×627 recommended
Email               JPEG / GIF      72 dpi        sRGB             < 100 KB     ALT text required
Print magazine      TIFF / PDF/X-4  300 dpi       CMYK (ISO coated) Unlimited   Offset-validated CMYK profile
POS / Display       TIFF / EPS      150-300 dpi   CMYK / Pantone   Unlimited    Format specified by printer
Web video           MP4 H.264       72 dpi        sRGB             < 50 MB      720p or 1080p per channel
OOH / Outdoor       High-res TIFF   300+ dpi      CMYK Pantone     Unlimited    Final size in cm × resolution
```

## Distribution architecture (Cloudinary CDN)

```
DAM (master asset — full resolution)
          │
          ▼
  Cloudinary Transformation URL API
          │
          ├─→ web_desktop     : f_auto,q_auto,w_1200
          ├─→ web_mobile      : f_webp,q_auto,w_480
          ├─→ social_square   : c_fill,ar_1:1,w_1080
          ├─→ email           : f_jpg,q_70,w_600
          ├─→ thumb           : c_fill,w_200,h_200
          └─→ print_hd        : f_tiff,dpr_3.0 (via download)

# Example Cloudinary URL with dynamic transformations
https://res.cloudinary.com/[cloud]/image/upload/
  f_auto,q_auto,w_1200,dpr_auto/
  [public_id].webp
```

## Automatic distribution workflow (Bynder)

```
TRIGGER                  AUTOMATIC ACTION                          TARGET CHANNEL
──────────────────────   ─────────────────────────────────────────  ──────────────────────────
Asset status → Approved  Generate per-channel renditions            All configured channels
Rendition generated      CDN push (Cloudinary / Akamai / AWS CF)    Web · Mobile · Email
Asset linked to the PIM  Notify PIM → SKU association               E-commerce (via PIM)
Campaign publishing       Send assets to the press agency            Print · Outdoor
Expiry date D-7          Scheduled unpublish across all channels    All channels
```

## Deliverables
- Distribution matrix (channel × format × resolution × rights)
- Automatic rendition configuration in the DAM
- CDN integration (Cloudinary, Akamai, AWS CloudFront) — scripts and URLs
- Distribution workflow (triggers, actions, channels)
- Per-channel distribution guide (technical specs for creatives)
- Distribution dashboard (assets distributed per channel, errors, coverage)

## Output format
Specify: **DAM used**, priority **distribution channels**, available **CDN** (Cloudinary, Akamai…), target **CMS** (AEM, Drupal, Contentful…), **print constraints** (printer, format, CMYK profile), **volume** (# assets distributed/week).

## Anti-patterns
- ❌ **Serving the full-resolution master on every channel**: catastrophic weight and performance → channel-adapted renditions
- ❌ **CMYK profile served to the web**: wrong colors in the browser → sRGB for web, CMYK reserved for print
- ❌ **No unpublishing at the `expiry_date`**: illegal distribution after rights expire → automatic multichannel deactivation
- ❌ **Distribution without a CDN cache**: cost and latency on every request → CDN + pre-generated renditions
- ❌ **Print specs not validated by the printer** (random profile/format): finisher rejection → CMYK profile + dimensions validated upfront
- ❌ **Missing ALT text** (email/web): degraded accessibility and deliverability → ALT required

## Sources
- **Core Web Vitals** — web.dev/vitals (Google): weight/perf budget per channel
- **Color profiles** — sRGB IEC 61966-2-1 (web) · *ISO Coated v2 (ECI)* (offset print) — color.org / eci.org
- **Cloudinary** — cloudinary.com/documentation · **Bynder** — developer.bynder.com · **Akamai / AWS CloudFront** — CDN
- **Social channel specs** — official platform recommendations (Instagram, LinkedIn) — re-check (they evolve)

## See also
- [`transformation-formats.md`](transformation-formats.md) — generating per-channel renditions
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — rights per territory/channel, unpublishing
- [`integration-dam-cms.md`](integration-dam-cms.md) — distributing assets to the CMS
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — impact of assets on web performance
