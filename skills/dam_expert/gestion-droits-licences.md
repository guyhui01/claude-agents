# Skill — Gestion des Droits d'Usage et Licences Assets
> Certifications : Henry Stewart DAM Practitioner · Bynder Certified Partner · Widen Certified DAM Specialist

## Objectif
Gérer les droits d'usage des assets digitaux : identification des types de licences, définition des restrictions (territoire, canal, durée, résolution), intégration des alertes d'expiration et conformité RGPD pour les assets avec personnes identifiables.

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

## RGPD — Assets avec personnes identifiables

```
RÈGLE                              CONTRÔLE TECHNIQUE                SANCTION SI NON-CONFORME
─────────────────────────────────  ────────────────────────────────  ────────────────────────────────────
Autorisation signée obligatoire    Flag "droit_image_signed = true"  Blocage publication automatique
Mineurs : autorisation parentale   Flag "minor = true" → validation  Blocage absolu + alerte DPO
Personne publique : usage limité   Flag "public_figure = true"       Vérification juriste obligatoire
Suppression sur demande (droit RI) Workflow suppression RGPD          72h pour traitement de la demande
Conservation autorisation          Lien vers document signé en DAM   Audit trail accessible 5 ans
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
