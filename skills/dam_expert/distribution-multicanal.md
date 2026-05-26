# Skill — Distribution Multicanal des Assets Digitaux
> Certifications : Cloudinary Media Developer Expert · Bynder Certified Partner · Adobe AEM Assets Specialist

## Objectif
Distribuer les assets digitaux sur l'ensemble des canaux de diffusion (web, social, print, e-mail, e-commerce, outdoor) en adaptant automatiquement les formats, résolutions et profils colorimétriques aux exigences de chaque canal — tout en maintenant la traçabilité des droits d'usage.

## Matrice de distribution par canal

```
CANAL               FORMAT CIBLE    RÉSOLUTION    PROFIL COULEUR   POIDS MAX    NOTES
──────────────────  ─────────────   ──────────    ──────────────   ─────────    ─────────────────────────
Site web (desktop)  WebP / JPEG     72-96 dpi     sRGB             < 200 KB     Lazy loading · srcset
Site web (mobile)   WebP            72 dpi        sRGB             < 100 KB     Format portrait privilégié
E-commerce          JPEG / PNG      96 dpi        sRGB             < 500 KB     Fond blanc 2000×2000 min
Social Instagram    JPEG            72 dpi        sRGB             < 8 MB       1:1 / 4:5 / 16:9 selon post
Social LinkedIn     JPEG / PNG      72 dpi        sRGB             < 5 MB       1200×627 recommandé
E-mail              JPEG / GIF      72 dpi        sRGB             < 100 KB     ALT text obligatoire
Print magazine      TIFF / PDF/X-4  300 dpi       CMJN (ISO coated) Illimité    Profil CMJN validé offset
PLV / Affichage     TIFF / EPS      150-300 dpi   CMJN / Pantone   Illimité     Format spécifié par imprimeur
Vidéo web           MP4 H.264       72 dpi        sRGB             < 50 MB      720p ou 1080p selon canal
OOH / Outdoor       TIFF haute res  300+ dpi      CMJN Pantone     Illimité     Taille finale en cm × résolution
```

## Architecture de distribution (Cloudinary CDN)

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

# Exemple d'URL Cloudinary avec transformations dynamiques
https://res.cloudinary.com/[cloud]/image/upload/
  f_auto,q_auto,w_1200,dpr_auto/
  [public_id].webp
```

## Workflow de distribution automatique (Bynder)

```
DÉCLENCHEUR              ACTION AUTOMATIQUE                         CANAL CIBLE
──────────────────────   ─────────────────────────────────────────  ──────────────────────────
Asset statut → Approved  Génération des renditions par canal        Tous canaux configurés
Rendition générée        Push CDN (Cloudinary / Akamai / AWS CF)    Web · Mobile · Email
Asset lié au PIM         Notification PIM → association SKU         E-commerce (via PIM)
Publication campagne      Envoi assets vers agence presse            Print · Outdoor
Expiry date J-7          Dépublication planifiée sur tous canaux    Tous canaux
```

## Livrables
- Matrice de distribution (canal × format × résolution × droits)
- Configuration des renditions automatiques dans le DAM
- Intégration CDN (Cloudinary, Akamai, AWS CloudFront) — scripts et URLs
- Workflow de distribution (déclencheurs, actions, canaux)
- Guide de distribution par canal (spécifications techniques pour créatifs)
- Dashboard distribution (assets distribués par canal, erreurs, couverture)

## Format de sortie
Précise : **DAM utilisé**, **canaux de distribution** prioritaires, **CDN disponible** (Cloudinary, Akamai…), **CMS cibles** (AEM, Drupal, Contentful…), **contraintes print** (imprimeur, format, profil CMJN), **volumétrie** (nb assets distribués/semaine).
