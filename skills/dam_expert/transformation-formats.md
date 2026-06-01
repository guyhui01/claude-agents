# Skill — Transformation de Formats & Renditions
> Certifications : Cloudinary Media Developer Expert · Adobe AEM Assets Specialist · Adobe Certified Professional Creative Cloud

## Objectif
Gérer la transformation automatique des formats d'assets et la génération des renditions : conversion de formats (JPEG, WebP, AVIF, TIFF, SVG, MP4, WebM), redimensionnement intelligent, optimisation poids/qualité, gestion des profils colorimétriques et normalisation des spécifications techniques par canal.

## Formats clés et cas d'usage

```
FORMAT       TYPE       AVANTAGES                        LIMITATIONS              CAS D'USAGE IDÉAL
──────────   ────────   ──────────────────────────────   ──────────────────────   ─────────────────────────
JPEG         Raster     Universel · Compressé            Avec perte · Pas alpha   Packshots · Photos web
WebP         Raster     30% + léger que JPEG · Alpha     Support ancien navigat.  Web moderne prioritaire
AVIF         Raster     50% + léger que JPEG · HDR       Support encore limité    Web cutting-edge
PNG          Raster     Lossless · Alpha                 Lourd                    Logos sur fond · Icons
SVG          Vectoriel  Scalable · Léger                 Complexité pour photos   Logos · Icônes · Pictog.
TIFF         Raster     Lossless · Profil CMJN           Très lourd               Print · Archivage master
PDF/X-4      Vecteur    Standard print ISO               Éditeur requis           Fichiers façonneurs
GIF          Raster     Animation simple                 256 couleurs · Lourd     Petites animations web
MP4 (H.264)  Vidéo      Universel · Bonne compression    Qualité compressée       Web · Social · E-com
WebM (VP9)   Vidéo      30% + léger que MP4              Support partiel          Web moderne
```

## Configuration des renditions (AEM Assets)

```xml
<!-- Profil de traitement AEM Assets — Renditions automatiques -->
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

## Transformation intelligente (Cloudinary)

```python
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name="mon-cloud",
    api_key="KEY",
    api_secret="SECRET"
)

def generate_renditions(public_id: str) -> dict:
    """Génère toutes les renditions d'un asset via l'API Cloudinary"""
    base_url = f"https://res.cloudinary.com/mon-cloud/image/upload"

    renditions = {
        "web_desktop":  f"{base_url}/f_auto,q_auto,w_1200/{public_id}",
        "web_mobile":   f"{base_url}/f_webp,q_auto,w_480/{public_id}",
        "social_sq":    f"{base_url}/c_fill,ar_1:1,w_1080,f_jpg/{public_id}",
        "thumbnail":    f"{base_url}/c_fill,w_200,h_200,f_jpg/{public_id}",
        "email":        f"{base_url}/f_jpg,q_70,w_600/{public_id}",
    }

    # Smart crop avec détection de visage (portrait)
    renditions["portrait_smart"] = (
        f"{base_url}/c_fill,g_face,ar_3:4,w_900,f_webp/{public_id}"
    )
    return renditions
```

## Optimisation Core Web Vitals

```
MÉTRIQUE          RECOMMANDATION FORMAT                         IMPACT LCP/CLS
───────────────   ────────────────────────────────────────────  ──────────────────────────
LCP (image hero)  WebP/AVIF · preload · lazy=eager             Réduction LCP de 30-40%
CLS (images)      Toujours définir width + height HTML         Élimination CLS images
Images retina     srcset x2 pour HiDPI screens                 Netteté sans surcharge
Format moderne    <picture> avec fallback JPEG                  Compatibilité universelle
```

## Livrables
- Spécifications techniques par canal (format, résolution, poids, profil couleur)
- Configuration des renditions automatiques dans le DAM (AEM, Cloudinary, Bynder)
- Scripts de conversion batch (ImageMagick, FFmpeg, Sharp, Cloudinary API)
- Profils colorimétriques validés (sRGB web, CMJN print ISO coated)
- Guide technique créatifs (spécifications de livraison assets masters)
- Rapport de performance (poids moyen, taux optimisation, gain bande passante)

## Format de sortie
Précise : **DAM utilisé**, **canaux cibles** (web, print, social, e-com…), **types d'assets** (photos, vidéos, documents…), **contraintes print** (profil CMJN, imprimeur), **CMS ou CDN** de distribution, **Core Web Vitals** à atteindre.

## Anti-patterns
- ❌ **Ne conserver que des renditions web** (tout en WebP, master supprimé) : impossible de régénérer en print/haute qualité → toujours archiver le master (TIFF/RAW)
- ❌ **`width`/`height` HTML non définis** sur les images : dégrade le CLS → dimensions explicites systématiques
- ❌ **Profil CMJN servi au web** (au lieu de sRGB) : couleurs fausses en navigateur → sRGB web / CMJN ISO coated print
- ❌ **Sur-compression** (q < 60) : artefacts visibles → calibrer la qualité par canal
- ❌ **Pas de fallback `<picture>`** pour AVIF/WebP : images cassées sur navigateurs anciens → balise `<picture>` + source JPEG
- ❌ **Renditions générées à la volée sans cache CDN** : coût et latence → renditions pré-générées + cache

## Sources
- **Core Web Vitals** — web.dev/vitals (Google) : LCP < 2,5 s, CLS < 0,1, **INP < 200 ms** (INP a remplacé FID en mars 2024)
- **WebP** (Google, ~25-34 % plus léger que JPEG à qualité égale) — developers.google.com/speed/webp · **AVIF** (Alliance for Open Media)
- **Exif 3.0** — CIPA DC-008-2023 · **ICC / ECI** — profil *ISO Coated v2 (ECI)* pour le print — color.org / eci.org
- **Cloudinary** — cloudinary.com/documentation · **AEM Assets** processing profiles — experienceleague.adobe.com

## Voir aussi
- [`distribution-multicanal.md`](distribution-multicanal.md) — diffusion des renditions par canal/CDN
- [`taxonomie-assets.md`](taxonomie-assets.md) — métadonnées techniques (profil couleur, dimensions)
- [`../cms_digital/performance-web.md`](../cms_digital/performance-web.md) — Core Web Vitals côté CMS (images optimisées)
