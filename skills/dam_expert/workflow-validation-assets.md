# Skill — Workflows de Validation & Cycle de Vie des Assets
> Certifications : Bynder Certified Partner · Adobe Certified Expert AEM Assets Specialist · Canto Certified Professional

## Objectif
Définir et mettre en œuvre les workflows de validation des assets digitaux : circuit de revue, approbation, versionning et gestion du cycle de vie complet — pour garantir que seuls des assets de qualité, conformes et aux droits valides sont distribués sur les canaux.

## Cycle de vie d'un asset DAM

```
STATUT            DESCRIPTION                              ACTEUR                   TRANSITIONS
───────────────   ──────────────────────────────────────   ──────────────────────   ─────────────────────────
Upload            Asset brut reçu (agence, studio)         Système / Contributeur   → In Review (auto)
In Review         En attente de validation technique       DAM Manager              → Approved / Rejected
Rejected          Asset refusé (qualité, droits, brief)    DAM Manager              → Archive (ou re-upload)
Approved          Validé, prêt à l'emploi                  DAM Manager              → Published / Expired
Published         Actif sur les canaux autorisés           Système (auto)           → Expired (date échéance)
Expired           Droits expirés ou campagne terminée      Système (auto)           → Archived / Deleted
Archived          Conservation longue durée (non visible)  DAM Admin                → Deleted (après purge policy)
Deleted           Supprimé définitivement                  DAM Admin                → (irréversible)
```

## Workflow de validation — Critères par étape

```
ÉTAPE DE VALIDATION     CRITÈRES DE CONTRÔLE                          RESPONSABLE
─────────────────────   ───────────────────────────────────────────   ──────────────────
Conformité technique    Résolution ≥ seuil canal · Format accepté     DAM Manager (auto)
                        Poids ≤ limite · Profil colorimétrique correct
Conformité brief        Asset correspond au brief créatif validé      Directeur Artistique
Droits et licences      Copyright identifié · Droits territoire OK    Juriste / DAM Manager
                        Date d'expiration renseignée
RGPD (si personnes)     Autorisation droit à l'image signée           Juriste
                        Mineurs identifiés → blocage automatique
Brand compliance        Charte graphique respectée (logo, couleurs)   Brand Manager
Métadonnées             Tags ≥ 5 · Titre renseigné · Canal défini     DAM Manager
```

## Politique de versionning

```
RÈGLE                                    IMPLÉMENTATION
──────────────────────────────────────   ─────────────────────────────────────────────────────
Toute modification = nouvelle version    Pas d'écrasement de fichier — incrémentation auto (v1, v2…)
Conservation des versions majeures       v1, v2, v3 conservées indéfiniment
Purge des versions intermédiaires        Versions mineures (v1.1, v1.2) → purge après 6 mois
Version active = version actuelle        Seule la dernière version approved est distribuée
Restauration possible                    Toute version validée peut être réactivée si besoin
Audit trail complet                      Date, auteur, action loggés sur chaque version
```

## SLA de validation

```
TYPE D'ASSET             DÉLAI CIBLE    DÉLAI MAX    ESCALADE SI DÉPASSÉ
──────────────────────   ────────────   ─────────    ─────────────────────────────
Photo produit (packshot) 24h            48h          Notification DAM Manager
Vidéo produit            48h            72h          Notification DA + Manager
Asset campagne urgente   4h             8h           Appel direct responsable DAM
Document légal           48h            5 jours      Escalade service juridique
Asset partenaire externe 3 jours        5 jours      Notification partenaire
```

## Livrables
- Diagramme de workflow validation (BPMN, statuts, transitions, acteurs)
- Critères de contrôle par étape (grille de validation)
- Politique de versionning (règles, purge, restauration)
- SLA de validation par type d'asset
- Configuration du workflow dans le DAM (Bynder Workflow, AEM Workflow, Canto)
- Rapport mensuel de performance workflow (délais, taux de rejet, backlog)

## Format de sortie
Précise : **DAM utilisé**, **types d'assets** concernés, **acteurs impliqués** (équipes, agences, juristes), **contraintes de délai** (campagnes, lancements), **volumétrie** (nb uploads/semaine), **cas spéciaux** (mineurs, personnalités publiques, droits musicaux).

## Anti-patterns
- ❌ **Workflow sans SLA** : validations qui traînent, backlog ingérable → délai cible + max + escalade par type d'asset
- ❌ **Pas de blocage automatique des mineurs identifiés** : risque RGPD (art. 9) et droit à l'image → contrôle bloquant
- ❌ **Écrasement de fichier** au lieu d'une nouvelle version : perte d'historique et d'audit trail → versionning incrémental
- ❌ **Étape « droits et licences » sautée** pour aller vite : diffusion d'assets sans droits valides → gate bloquant non contournable
- ❌ **Trop d'étapes de validation** (sur-process) : goulot d'étranglement → calibrer le circuit selon l'enjeu de l'asset
- ❌ **Validation purement déclarative** (pas de critères objectifs) : décisions subjectives → grille de contrôle explicite par étape

## Sources
- **BPMN 2.0.2** — OMG (Object Management Group, 2013) — modélisation des workflows de validation — omg.org/spec/BPMN
- **RGPD** — Règlement (UE) 2016/679, art. 9 (mineurs, données sensibles) · **Code civil** art. 9 (droit à l'image) — cf. `gestion-droits-licences.md`
- **AI Act UE** — Règlement (UE) 2024/1689, art. 50 (transparence contenus IA dans le circuit de validation)
- **Bynder Workflow / AEM Assets Workflow / Canto** — documentation éditeurs — developer.bynder.com · experienceleague.adobe.com

## Voir aussi
- [`gestion-droits-licences.md`](gestion-droits-licences.md) — contrôle droits/RGPD dans le circuit de validation
- [`taxonomie-assets.md`](taxonomie-assets.md) — métadonnées obligatoires contrôlées à la validation
- [`naming-convention.md`](naming-convention.md) — conformité du nommage à l'ingestion
- [`gouvernance-dam.md`](gouvernance-dam.md) — politique de cycle de vie et purge
