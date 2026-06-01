# Skill — Brand Portal & Portail de Marque
> Certifications : Bynder Certified Partner · Brandfolder Certified Partner · Adobe AEM Assets Specialist

## Objectif
Déployer un portail de marque (brand portal) permettant aux équipes internes, agences et partenaires externes d'accéder aux assets approuvés, aux guidelines de marque et aux kits de presse — avec des accès granulaires, des droits contrôlés et un self-service sécurisé.

## Architecture fonctionnelle du brand portal

```
BRAND PORTAL
├── 🎨 Guidelines de marque
│   ├── Identité visuelle (logos, couleurs Pantone/HEX, typographies)
│   ├── Tone of voice et règles éditoriales
│   ├── Exemples d'usage correcte / incorrect
│   └── Charte graphique interactive (avec téléchargements)
│
├── 📁 Assets approuvés
│   ├── Logos (tous formats, fonds blanc / transparent / couleur)
│   ├── Photos produits (packshots, ambiances, lifestyle)
│   ├── Vidéos (films de marque, spots, tutoriels)
│   ├── Templates (PowerPoint, Word, InDesign, Figma)
│   └── Icons et pictogrammes
│
├── 📰 Kit de presse
│   ├── Communiqués de presse (par date)
│   ├── Biographies dirigeants + photos haute résolution
│   ├── Chiffres clés et infographies
│   └── Contacts presse
│
└── 🔗 Accès partenaires
    ├── Revendeurs (assets produits + PLV)
    ├── Agences (briefs, assets campagnes en cours)
    └── Médias (kit presse uniquement)
```

## Matrice des accès utilisateurs

```
PROFIL                  ASSETS PRODUITS   GUIDELINES   KIT PRESSE   CAMPAGNES   TEMPLATES
──────────────────────  ────────────────  ───────────  ───────────  ──────────  ─────────
Équipe interne          ✅ Tous            ✅            ✅            ✅           ✅
Agence créa mandatée    ✅ Campagne seule  ✅            ❌            ✅ (brief)   ✅
Revendeur partenaire    ✅ Produits seuls  ✅            ❌            ❌           ✅ (PLV)
Journaliste / Presse    ❌                 ✅            ✅            ❌           ❌
Public (non connecté)   ❌                 ✅ (partiel)  ✅ (partiel)  ❌           ❌
```

## Configuration Bynder Brand Portal — Checklist

```
SECTION CONFIGURATION                    PARAMÈTRES CLÉS
──────────────────────────────────────   ─────────────────────────────────────────────────────
Identité du portail                      Logo marque · Couleurs brand · Favicon · Domaine custom
Collections publiques                    Groupes d'assets visibles sans connexion
Collections privées                      Restriction par profil utilisateur (ACL)
Filtres de recherche                     Tags · Type · Canal · Campagne · Date
Téléchargement conditionnel              Droits requis pour télécharger vs prévisualiser
Conversion à la volée                    Formats proposés au téléchargement (JPEG, PNG, SVG…)
Partage externe (share link)             URL temporaire + expiry + password optionnel
Analytics                                Qui télécharge quoi, quand, depuis quel pays
Watermark preview                        Filigrane sur les previews d'assets sous droits
```

## Template de kit de presse — Structure recommandée

```
KIT DE PRESSE — [Marque] — [Trimestre/Événement]
├── 01_Communiqué_[sujet]_[date].pdf
├── 02_Biographies/
│   ├── Bio_PDG_[nom]_FR.pdf
│   ├── Photo_PDG_[nom]_HD.jpg       (min 2000px, fond neutre)
│   └── ...
├── 03_Chiffres_cles_[année].pdf
├── 04_Logos/
│   ├── Logo_[Marque]_RVB_fond_blanc.png
│   ├── Logo_[Marque]_CMJN.eps
│   └── Logo_[Marque]_vecteur.svg
├── 05_Visuels_produits/               (max 10 photos HD)
└── 06_Contacts_presse.pdf
```

## Livrables
- Architecture fonctionnelle du brand portal (structure, profils, accès)
- Configuration complète du portail (charte, accès, filtres, téléchargements)
- Kit de presse structuré et mis à jour
- Matrice des droits d'accès par profil utilisateur
- Guide d'utilisation du portail (pour partenaires et agences)
- Analytics mensuel (top assets téléchargés, utilisateurs actifs, zones géo)

## Format de sortie
Précise : **DAM utilisé** (Bynder, Brandfolder, AEM Assets…), **profils utilisateurs** (interne, agences, partenaires, presse), **marques** à couvrir, **types d'assets** prioritaires (logos, produits, presse…), **contraintes de branding** (domaine custom, SSO entreprise), **volume** d'utilisateurs externes estimé.

## Anti-patterns
- ❌ **Pas de watermark sur les previews sous droits** : fuite d'assets non libérés → filigrane systématique sur preview RM/non approuvés
- ❌ **Accès uniforme sans ACL par profil** : la presse ou un revendeur accède aux campagnes confidentielles → matrice d'accès granulaire
- ❌ **Kit de presse non maintenu** : logos/chiffres obsolètes diffusés → date de péremption + revue trimestrielle
- ❌ **SSO vague / comptes partagés** : traçabilité perdue → SSO normalisé (SAML 2.0 ou OpenID Connect)
- ❌ **Share links permanents** : URLs publiques incontrôlées → liens à expiration + mot de passe optionnel
- ❌ **Guidelines séparées des assets** : l'utilisateur télécharge sans connaître l'usage correct → charte intégrée au portail

## Sources
- **Bynder Brand Portal** — bynder.com · **Brandfolder** (Smartsheet) — brandfolder.com · **AEM Assets Brand Portal** — experienceleague.adobe.com
- **SSO** — SAML 2.0 (OASIS) / OpenID Connect (OpenID Foundation) — pour l'accès partenaires/agences
- **Creative Commons 4.0** (2013) — si licences ouvertes proposées au téléchargement — creativecommons.org/licenses

## Voir aussi
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — droits conditionnant le téléchargement (watermark, RM/RF)
- [`gouvernance-dam.md`](gouvernance-dam.md) — gouvernance des accès et profils
- [`workflow-validation-assets.md`](workflow-validation-assets.md) — seuls les assets « approved » alimentent le portail
- [`distribution-multicanal.md`](distribution-multicanal.md) — conversion à la volée au téléchargement
