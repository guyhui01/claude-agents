# Skill — Gestion des Droits d'Usage et Licences Assets
> Certifications : Henry Stewart DAM Practitioner · Bynder Certified Partner · Widen Certified DAM Specialist
> Référentiels juridiques : **RGPD UE 2016/679** (art. 6, 9, 13-14, 17, 35) · **Code de la propriété intellectuelle FR** (CPI art. L121-1 droit moral, L131-3 droits patrimoniaux) · **Code civil FR art. 9** (droit à l'image / vie privée) · **AI Act UE 2024/1689** art. 50 (transparence GenAI) · CNIL — *Guide droit à l'image* (cnil.fr) · Creative Commons (creativecommons.org/licenses)

## Objectif
Gérer les droits d'usage des assets digitaux conformément au cadre légal **français et européen** : identification des types de licences, définition des restrictions (territoire, canal, durée, résolution), intégration des alertes d'expiration et **conformité RGPD + Code civil art. 9** pour les assets avec personnes identifiables.

## Types de licences et leurs contraintes

```
TYPE DE LICENCE         DESCRIPTION                              RESTRICTIONS TYPIQUES
──────────────────────  ──────────────────────────────────────   ─────────────────────────────────────────
Owned (Production)      Assets produits en interne               Aucune (usage illimité)
Royalty-Free (RF)       Paiement unique, usage étendu            Parfois limitation de tirage ou géo
Rights-Managed (RM)     Paiement par usage (canal, taille, tir.) Canal · résolution · territoire · durée
Creative Commons        Licence ouverte avec conditions          Attribution · NC · ND · SA selon variante
Editorial uniquement    Usage journalistique / pédagogique only  Pas usage commercial
Droits d'auteur photo   Cession partielle ou totale             Durée · territoire · supports définis
Droits musicaux (sync)  Vidéo avec musique sous licence          Durée · territoire · canal
Droit à l'image         Usage de l'identité d'une personne       Durée · territoire · support · contexte
```

## Matrice droits × canaux × territoires

```
ASSET             LICENCE    WEB FR  PRINT EU  SOCIAL WW  MARKETPLACE  OUTDOOR FR  EXPIRY
───────────────   ─────────  ──────  ────────  ─────────  ───────────  ──────────  ──────────
photo_model_01    RM         ✅       ✅          ❌          ❌            ✅           2027-03-31
logo_partenaire   RF         ✅       ✅          ✅           ✅            ✅           Illimité
video_promo_fr    Owned      ✅       N/A         ✅ (FR)      ❌            N/A         Illimité
photo_lieu_NYC    Editorial  ❌       ❌           ❌           ❌            ❌           N/A
musique_spot_v2   Sync       ✅       N/A         ✅           N/A           N/A         2026-12-31
photo_enfant      RM+Droit   ✅       ✅           ❌           ❌            ❌           2026-06-30
```

## Politique d'alerte d'expiration

```
DÉLAI AVANT EXPIRATION   ALERTE                             DESTINATAIRES
──────────────────────   ────────────────────────────────   ────────────────────────────────
90 jours                 Notification préventive e-mail     DAM Manager + Chef de produit
30 jours                 Alerte urgente e-mail + dashboard  DAM Manager + Juriste + Marketing
7 jours                  Alerte critique — restriction pub. DAM Manager + Direction Marketing
0 jour (expiry)          Asset automatiquement restreint    Notification équipes canal
Expiré depuis 30j        Archivage automatique              Rapport mensuel purge
```

## RGPD + Droit à l'image — Cadre légal et contrôles techniques

### Sources légales applicables

| Texte | Articles | Portée |
|---|---|---|
| **RGPD UE 2016/679** | Art. 6 (bases légales) · Art. 9 (données sensibles dont image biométrique) · Art. 13-14 (information personnes) · Art. 17 (droit à l'oubli) · Art. 35 (DPIA si traitement à grande échelle) | Traitement images = données personnelles dès identification |
| **Code civil FR** | **Art. 9** (droit au respect de la vie privée — fondement du droit à l'image) | Toute personne dispose d'un droit exclusif sur son image, opposable même si captée dans lieu public |
| **Code de la propriété intellectuelle FR** | Art. L121-1 (droit moral — incessible, perpétuel) · Art. L131-3 (cession droits patrimoniaux — écrit obligatoire avec étendue/durée/territoire) | Photographe = auteur de l'œuvre, distinct du modèle |
| **AI Act UE 2024/1689** | Art. 50 (transparence images GenAI / deepfakes) | Mention obligatoire si contenu généré ou modifié significativement par IA |
| **Loi pour une République numérique 2016** | Art. 63 (droit à l'oubli) | Renforce art. 17 RGPD sur retrait images |
| **CNIL — Guide droit à l'image** | cnil.fr/fr/le-droit-a-limage | Doctrine appliquée (contrôles et sanctions) |

### Distinction Model Release (USA) vs Droit à l'image (France/UE)

| Aspect | Model Release (USA) | Droit à l'image (France/UE) |
|---|---|---|
| **Fondement légal** | Common law + contrats états | Code civil art. 9 + RGPD |
| **Cession** | Possible large + perpétuelle | **Pas de cession totale** (art. L131-3 CPI : écrit + étendue/durée/territoire spécifiques) |
| **Retrait consentement** | Difficile post-signature | **Possible à tout moment** (art. 17 RGPD + art. 63 Loi République numérique) |
| **Mineurs** | Parental consent | **Autorisation des 2 parents obligatoire** + intérêt de l'enfant (CNIL 2024) |
| **Personnalité publique** | Limites moins strictes | Droit à l'image conservé hors actualité (Cass. civ. 1ère, 13 nov. 2003) |

### Contrôles techniques DAM (mapping légal)

| Règle légale | Source | Contrôle DAM | Sanction non-conformité |
|---|---|---|---|
| Autorisation écrite obligatoire (cession droits) | CPI art. L131-3 + Code civ. art. 9 | Flag `droit_image_signed = true` + lien doc signé | Blocage publication + RGPD 4% CA mondial |
| Mineurs : autorisation **des 2 parents** | Art. 372 Code civ. + CNIL 2024 | Flag `minor = true` → validation juriste obligatoire | Blocage absolu + alerte DPO + risque pénal |
| Personne publique : limite à l'actualité | Cass. civ. 1ère 2003 | Flag `public_figure = true` + contexte usage | Vérification juriste + risque dommages-intérêts |
| **Droit à l'oubli** (suppression sur demande) | RGPD art. 17 + Loi 2016 art. 63 | Workflow suppression DAM **72h** (RGPD art. 12) + propagation CDN | Plainte CNIL + sanction administrative |
| Conservation autorisation 5 ans | Code civ. art. 2224 (prescription civile) | Audit trail accessible 5 ans + sauvegarde |Litige sans preuve = perte du procès |
| Mention IA si modification significative | AI Act art. 50 | Flag `ai_generated = true` + mention publication | Sanction AI Act 7% CA mondial (entrée 2026) |

### Workflow droit à l'oubli (RGPD art. 17 — 72h max)

```
J0    Demande retrait reçue (email DPO / formulaire RGPD)
        ├→ Identification asset(s) concerné(s) dans DAM
        └→ Vérification légitimité demande (art. 17.1 RGPD)
J+24h Notification équipe DAM + flag "deletion_requested" sur assets
J+48h Retrait actif :
        ├→ Suppression DAM (asset + métadonnées personnelles)
        ├→ Purge cache CDN (Cloudflare/Akamai purge by URL)
        ├→ Notification équipes ayant téléchargé (révocation usage)
        └→ Communications publiées : retrait OU floutage selon contexte
J+72h Confirmation écrite au demandeur (obligation art. 12 RGPD)
        └→ Audit trail conservé 5 ans (preuve traitement)
```

## Livrables
- Dictionnaire des types de licences (définitions + contraintes par type)
- Matrice droits × canaux × territoires (pour chaque campagne)
- Configuration du module droits dans le DAM (champs, alertes, restrictions)
- Procédure de collecte et archivage des autorisations (droit à l'image, licences)
- Rapport d'audit droits (assets expirants, assets sans droits documentés)
- Procédure de traitement des demandes RGPD (droit à l'oubli sur assets)

## Format de sortie
Précise : **DAM utilisé**, **types d'assets** principaux (photos studio, lifestyle, vidéos…), **marchés géographiques** (territoires), **canaux de distribution** (web, print, social, OOH…), **présence de personnes** (modèles, collaborateurs, personnalités publiques, mineurs).
