# Skill — Format Transformation & Renditions
> Certifications: Cloudinary Media Developer Expert · Adobe AEM Assets Specialist · Adobe Certified Professional Creative Cloud

## Objective
Manage automatic asset format transformation and rendition generation: format conversion (JPEG, WebP, AVIF, TIFF, SVG, MP4, WebM), smart resizing, weight/quality optimization, color-profile management and per-channel technical-spec normalization.

## Key formats and use cases

```
FORMAT       TYPE       PROS                             LIMITATIONS              IDEAL USE CASE
──────────   ────────   ──────────────────────────────   ──────────────────────   ─────────────────────────
JPEG         Raster     Universal · Compressed           Lossy · No alpha         Packshots · Web photos
WebP         Raster     30% lighter than JPEG · Alpha    Old-browser support      Modern web (priority)
AVIF         Raster     50% lighter than JPEG · HDR      Still limited support    Cutting-edge web
PNG          Raster     Lossless · Alpha                 Heavy                    Logos on bg · Icons
SVG          Vector     Scalable · Light                 Complex for photos       Logos · Icons · Pictograms
TIFF         Raster     Lossless · CMYK profile          Very heavy               Print · Master archiving
PDF/X-4      Vector     ISO print standard               Editor required          Finisher files
GIF          Raster     Simple animation                 256 colors · Heavy       Small web animations
MP4 (H.264)  Video      Universal · Good compression     Compressed quality       Web · Social · E-com
WebM (VP9)   Video      30% lighter than MP4             Partial support          Modern web
```

## Rendition configuration (AEM Assets)

```xml
<!-- AEM Assets processing profile — Automatic renditions -->
<processingProfile>
  <rendition name="web.1280.jpeg">
    <format>jpeg</format>
    <quality>85</quality>
    <width>1280</width>
    <colorProfile>sRGB</colorProfile>
  </rendition>
  <rendition name="web.640.webp">
    <format>webp</format>
    <quality>80</quality>
    <width>640</width>
    <colorProfile>sRGB</colorProfile>
  </rendition>
  <rendition name="thumbnail.200.jpeg">
    <format>jpeg</format>
    <quality>70</quality>
    <width>200</width>
    <height>200</height>
    <fit>cover</fit>
  </rendition>
  <rendition name="print.tiff">
    <format>tiff</format>
    <dpi>300</dpi>
    <colorProfile>ISOcoated_v2_eci</colorProfile>
    <compression>lzw</compression>
  </rendition>
</processingProfile>
```

## Smart transformation (Cloudinary)

```python
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name="my-cloud",
    api_key="KEY",
    api_secret="SECRET"
)

def generate_renditions(public_id: str) -> dict:
    """Generate all renditions of an asset via the Cloudinary API"""
    base_url = f"https://res.cloudinary.com/my-cloud/image/upload"

    renditions = {
        "web_desktop":  f"{base_url}/f_auto,q_auto,w_1200/{public_id}",
        "web_mobile":   f"{base_url}/f_webp,q_auto,w_480/{public_id}",
        "social_sq":    f"{base_url}/c_fill,ar_1:1,w_1080,f_jpg/{public_id}",
        "thumbnail":    f"{base_url}/c_fill,w_200,h_200,f_jpg/{public_id}",
        "email":        f"{base_url}/f_jpg,q_70,w_600/{public_id}",
    }

    # Smart crop with face detection (portrait)
    renditions["portrait_smart"] = (
        f"{base_url}/c_fill,g_face,ar_3:4,w_900,f_webp/{public_id}"
    )
    return renditions
```

## Core Web Vitals optimization

```
METRIC            FORMAT RECOMMENDATION                         LCP/CLS IMPACT
───────────────   ────────────────────────────────────────────  ──────────────────────────
LCP (hero image)  WebP/AVIF · preload · lazy=eager             30-40% LCP reduction
CLS (images)      Always set HTML width + height               Eliminates image CLS
Retina images     srcset x2 for HiDPI screens                  Sharpness without bloat
Modern format     <picture> with JPEG fallback                  Universal compatibility
```

## Deliverables
- Per-channel technical specs (format, resolution, weight, color profile)
- Automatic rendition configuration in the DAM (AEM, Cloudinary, Bynder)
- Batch conversion scripts (ImageMagick, FFmpeg, Sharp, Cloudinary API)
- Validated color profiles (sRGB web, CMYK print ISO coated)
- Creative technical guide (master asset delivery specs)
- Performance report (average weight, optimization rate, bandwidth savings)

## Output format
Specify: **DAM used**, **target channels** (web, print, social, e-com…), **asset types** (photos, videos, documents…), **print constraints** (CMYK profile, printer), distribution **CMS or CDN**, **Core Web Vitals** to hit.

## Anti-patterns
- ❌ **Keeping only web renditions** (all WebP, master deleted): impossible to regenerate for print/high quality → always archive the master (TIFF/RAW)
- ❌ **HTML `width`/`height` not set** on images: degrades CLS → explicit dimensions systematically
- ❌ **CMYK profile served to the web** (instead of sRGB): wrong colors in the browser → sRGB web / CMYK ISO coated print
- ❌ **Over-compression** (q < 60): visible artifacts → calibrate quality per channel
- ❌ **No `<picture>` fallback** for AVIF/WebP: broken images on old browsers → `<picture>` tag + JPEG source
- ❌ **Renditions generated on the fly with no CDN cache**: cost and latency → pre-generated renditions + cache

## Sources
- **Core Web Vitals** — web.dev/vitals (Google): LCP < 2.5s, CLS < 0.1, **INP < 200 ms** (INP replaced FID in March 2024)
- **WebP** (Google, ~25-34% lighter than JPEG at equal quality) — developers.google.com/speed/webp · **AVIF** (Alliance for Open Media)
- **Exif 3.0** — CIPA DC-008-2023 · **ICC / ECI** — *ISO Coated v2 (ECI)* profile for print — color.org / eci.org
- **Cloudinary** — cloudinary.com/documentation · **AEM Assets** processing profiles — experienceleague.adobe.com

## See also
- [`distribution-multicanal.md`](distribution-multicanal.md) — distributing renditions per channel/CDN
- [`taxonomie-assets.md`](taxonomie-assets.md) — technical metadata (color profile, dimensions)
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — Core Web Vitals on the CMS side (optimized images)
