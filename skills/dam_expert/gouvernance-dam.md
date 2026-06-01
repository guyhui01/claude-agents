# Skill — Gouvernance DAM (Politiques, Rôles, Archivage, Audit)
> Certifications : Henry Stewart DAM Practitioner · ISO/IEC 42001:2023 · CDMP DAMA

## Objectif
Mettre en place le cadre de gouvernance du DAM : définition des politiques d'usage, des rôles et responsabilités, des règles d'archivage et de purge, des processus d'audit — pour garantir la pérennité, la conformité et la maîtrise des assets digitaux sur le long terme.

## Les 5 piliers de la gouvernance DAM

```
PILIER              CONTENU                                    LIVRABLE ASSOCIÉ
──────────────────  ─────────────────────────────────────────  ─────────────────────────────────
1. Organisation     Rôles · Responsabilités · Comité DAM       RACI · Charte gouvernance · Comité
2. Politiques       Règles d'usage · Standards · Cycle de vie  Data Policy DAM · Naming convention
3. Qualité          Standards techniques · Contrôle qualité    Grille de validation · Scorecard
4. Archivage/Purge  Règles de rétention · Archivage légal      Politique d'archivage · Purge schedule
5. Conformité       RGPD · Droits image · Droits d'auteur      Audit droits · Rapport conformité
```

## RACI des rôles DAM

```
RÔLE                 DESCRIPTION                                   RESPONSABILITÉS CLÉS
───────────────────  ────────────────────────────────────────────  ─────────────────────────────────────────
DAM Admin            Administration technique du DAM               Configuration · Utilisateurs · Sauvegardes
DAM Manager          Gouvernance opérationnelle quotidienne         Validation · Droits · Taxonomie · KPIs
Brand Manager        Gardien de la cohérence de marque             Validation brand compliance
Contributeur         Upload et enrichissement des assets            Soumission assets · Métadonnées
Lecteur interne      Consultation et téléchargement assets          Recherche · Download
Lecteur externe      Accès limité (agence, partenaire, presse)      Accès portail · Droits restreints
Juriste / DPO        Validation droits, RGPD, droits à l'image      Validation licences · RGPD assets
```

## Politique d'archivage et de purge

```
CATÉGORIE ASSET              RÉTENTION ACTIVE   ARCHIVAGE       PURGE DÉFINITIVE
──────────────────────────   ────────────────   ─────────────   ──────────────────────
Asset campagne en cours      Durée campagne     +3 ans          +7 ans (légal)
Asset produit actif          Durée de vie prod  +5 ans          +10 ans
Asset produit discontinué    0 (archivage imm.) +7 ans          +10 ans
Asset droits expirés         0 (restriction)    +1 an           +3 ans (audit)
Kit de presse                Permanent          Permanent       Jamais (archivage)
Master assets haute réso.    Permanent          Permanent       Sur décision Direction
Drafts non approuvés         30 jours           Archivage auto  +90 jours (purge auto)
Assets orphelins (non liés)  Identification J0  +30 jours       +60 jours si non réclamé
```

## Scorecard de gouvernance DAM (mensuel)

```
INDICATEUR                              CIBLE        ALERTE        MESURE
─────────────────────────────────────   ──────────   ──────────    ──────────────────────────────
Assets sans propriétaire identifié      ≤ 2%         > 5%          Champ "owner" vide
Assets sans date d'expiration droits    ≤ 5%         > 15%         Champ "expiry_date" vide
Assets non taggés (< 5 tags)            ≤ 3%         > 10%         Count tags < 5
Assets dupliqués non traités            ≤ 1%         > 3%          Détection hash MD5/SHA256
Temps moyen de validation               ≤ 24h        > 72h         Date upload → date approved
Purges planifiées effectuées            100%         < 100%        Purge policy exécutée
Utilisateurs inactifs (>90 jours)       ≤ 10%        > 20%         Audit comptes accès
```

## Audit trail — Événements à loguer

```
ÉVÉNEMENT                    DONNÉES À CONSERVER
──────────────────────────   ──────────────────────────────────────────────────────
Upload asset                 Date · Utilisateur · Nom fichier · Hash · Métadonnées
Modification métadonnées     Date · Utilisateur · Champ modifié · Ancienne valeur
Changement de statut         Date · Utilisateur · Statut avant → après
Téléchargement               Date · Utilisateur · Asset · Canal · IP (si externe)
Partage externe              Date · Utilisateur · Destinataire · Durée validité
Suppression / Archivage      Date · Utilisateur · Motif · Backup confirmé
Modification droits          Date · Utilisateur · Type de droits · Territoire
```

## Livrables
- Charte de gouvernance DAM (politiques, rôles, principes directeurs)
- RACI complet des responsabilités DAM
- Politique d'archivage et de purge (par catégorie d'assets)
- Scorecard mensuel de gouvernance (KPIs + alertes)
- Rapport d'audit annuel (conformité droits, RGPD, qualité, orphelins)
- Plan de continuité DAM (sauvegarde, reprise, procédure de sinistre)

## Format de sortie
Précise : **DAM utilisé**, **périmètre** (marques, BU, géographies), **contraintes légales** (secteur, réglementation applicable), **volumétrie** (nb assets, utilisateurs), **problèmes de gouvernance actuels** identifiés (si audit de l'existant).

## Anti-patterns
- ❌ **Gouvernance sans comité ni owner** : personne ne tranche les arbitrages → comité DAM + RACI nominatif
- ❌ **Politique d'archivage jamais exécutée** : la purge théorique ne tourne pas → coût de stockage et dette documentaire → automatiser le purge schedule
- ❌ **Durées de rétention non alignées sur les obligations légales** sectorielles : risque de conformité → valider les durées avec le juridique/DPO
- ❌ **Absence d'audit trail** : impossible de prouver qui a fait quoi → journaliser les événements clés (upload, droits, suppression)
- ❌ **Scorecard sans seuil d'alerte ni action** : gouvernance théorique → chaque KPI assorti d'une cible + alerte + responsable
- ❌ **Confondre DAM Admin (technique) et DAM Manager (gouvernance)** : responsabilités diluées → RACI distinct

## Sources
- **ISO/IEC 42001:2023** — AI Management System (gouvernance de l'IA appliquée au DAM augmenté) — iso.org
- **DAMA-DMBOK 2** (2017) — *Data Management Body of Knowledge*, gouvernance des données (CDMP) — dama.org
- **DAM Maturity Model** — DAM Foundation — damfoundation.org
- **RGPD** — Règlement (UE) 2016/679 (assets avec personnes) · obligations de **rétention légale** à préciser par secteur — eur-lex.europa.eu

## Voir aussi
- [`taxonomie-assets.md`](taxonomie-assets.md) — standards et vocabulaires contrôlés gouvernés
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — conformité droits/RGPD du pilier 5
- [`workflow-validation-assets.md`](workflow-validation-assets.md) — cycle de vie et versionning
- [`analytics-assets.md`](analytics-assets.md) — KPIs alimentant la scorecard de gouvernance
