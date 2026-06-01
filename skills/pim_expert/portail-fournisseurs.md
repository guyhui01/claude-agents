# Skill — Portail Fournisseurs & Onboarding Contributions Externes
> Certifications : Akeneo Certified Developer · Contentserv PIM Specialist · inriver Certified Professional

## Objectif
Déployer un portail fournisseurs permettant aux partenaires externes (fabricants, fournisseurs, agences) de contribuer directement aux données produit : onboarding guidé, formulaires structurés, workflows de validation et intégration automatisée dans le PIM.

## Architecture du portail fournisseurs

```
FOURNISSEUR                    PORTAIL                        PIM INTERNE
─────────────────────────────  ─────────────────────────────  ─────────────────────────────
Connexion (SSO / identifiant)  Authentification sécurisée
Sélection catalogue            Accès à ses références uniquement
Saisie fiche produit           Formulaire guidé par famille
Upload assets                  Interface upload → DAM         Association PIM ↔ DAM
Soumission pour validation  →  Workflow de validation      →  Revue Data Steward interne
Notification rejet/acceptation ←  Email / notification      ←  Décision Data Steward
Publication automatique                                     →  Statut "Published"
```

## Workflow de contribution fournisseur

```
STATUT FOURNISSEUR     STATUT PIM INTERNE          ACTEUR                ACTION POSSIBLE
─────────────────────  ──────────────────────────  ────────────────────  ─────────────────────
Draft (en cours)       —                           Fournisseur           Modifier, sauvegarder
Soumis                 Awaiting Review             Fournisseur           Voir (lecture seule)
En cours de revue      In Review                   Data Steward          Approuver / Rejeter
Rejeté                 —                           Data Steward + Fourn. Commentaire requis
Demande complément     —                           Data Steward          Question ciblée
Approuvé               Approved → Published        Data Steward          Publication auto
```

## Règles d'accès et de sécurité

```
RÈGLE                          RATIONALE                              IMPLÉMENTATION
─────────────────────────────  ─────────────────────────────────────  ─────────────────────────────
Un fournisseur = ses produits  Pas de fuite entre fournisseurs        ACL par code fournisseur
Champ EAN non modifiable       Identifiant maître ERP (immuable)      Attribut en lecture seule portail
Prix non visible               Confidentialité commerciale            Masquage attribut prix
Audit trail complet            Traçabilité des modifications          Log date + user + valeur modifiée
Expiration compte              Désactivation automatique fin contrat  Date d'expiration compte fournisseur
```

## Template d'e-mail de rejet (Data Steward → Fournisseur)

```
Objet : [PIM Portail] Révision requise — Référence [SKU]

Bonjour [Prénom Fournisseur],

Votre fiche produit [SKU] — [Nom produit] a été examinée
et nécessite les corrections suivantes avant publication :

❌ Image principale : résolution insuffisante (requis : 2000×2000 px, fourni : 800×600 px)
❌ Description longue : trop courte (requis : ≥ 150 caractères, fourni : 42 caractères)
⚠️ Poids : valeur incohérente avec fiche technique fournie (2.3 kg déclaré vs 1.8 kg sur doc)

Merci de corriger ces points et soumettre à nouveau.
Délai de correction : [Date + 5 jours ouvrés]

Équipe Données Produit
```

## Livrables
- Architecture fonctionnelle du portail fournisseurs
- Formulaires de saisie par famille produit (champs, règles, aide contextuelle)
- Workflow de validation (diagramme BPMN, SLA par étape)
- Règles d'accès et de sécurité (ACL, audit trail)
- Guide d'onboarding fournisseurs (comment utiliser le portail)
- Tableau de bord suivi contributions (KPIs : taux validation, délai moyen, top fournisseurs)

## Format de sortie
Précise : **PIM utilisé** (Akeneo Supplier Data Manager, Contentserv, solution custom…), **nombre de fournisseurs** concernés, **familles produit** à couvrir, **volume** de fiches/an, **intégrations requises** (DAM pour assets, ERP pour création référence).

## Anti-patterns
- ❌ **SSO vague ou comptes partagés** entre fournisseurs : traçabilité perdue → SSO normalisé (SAML 2.0 / OpenID Connect), 1 compte = 1 contributeur
- ❌ **Pas d'ACL par code fournisseur** : un fournisseur voit/modifie les produits d'un autre → cloisonnement strict
- ❌ **EAN modifiable par le fournisseur** alors que l'ERP est maître : corruption du référentiel → attribut en lecture seule
- ❌ **Absence d'audit trail** : impossible de tracer qui a contribué quoi → log date/user/valeur
- ❌ **Formulaire sans aide contextuelle ni gabarit** : contributions de mauvaise qualité → champs guidés + règles + exemples
- ❌ **RGPD des contacts fournisseurs ignoré** : données personnelles non encadrées → base légale + durée de conservation

## Sources
- **Akeneo Supplier Data Manager** — collecte fournisseurs native — akeneo.com
- **SSO** — SAML 2.0 (OASIS) / OpenID Connect (OpenID Foundation) — authentification partenaires
- **BPMN 2.0.2** — OMG (2013) — workflow de validation des contributions — omg.org/spec/BPMN
- **GS1 General Specifications v24.0** (2024) — EAN/GTIN comme identifiant maître · **RGPD** (UE) 2016/679 — données contacts fournisseurs

## Voir aussi
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — normalisation des contributions reçues
- [`enrichissement-produit.md`](enrichissement-produit.md) — circuit de validation interne
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — Data Stewards et règles qualité
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — familles/attributs exposés aux fournisseurs
