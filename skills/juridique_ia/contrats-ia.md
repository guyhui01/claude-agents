# Skill — Contrats IA (développement, SaaS, DPA, clauses PI)

> Certifications : CIPP/E · LegalTech AI Certificate · DPO Certifié CNIL
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **RGPD UE 2016/679** (art. 28, 32) · **Directive (UE) 2016/943** (secret d'affaires) · **Code de la propriété intellectuelle** (art. L.111-1, L.112-1, L.122-6) · **AI Act UE 2024/1689** · clauses TDM (Directive 2019/790)

## Objectif

Rédiger et négocier les **contrats liés aux projets IA** (développement, SaaS, licensing de modèles) et leurs clauses sensibles : propriété intellectuelle, DPA RGPD, anti-usage pour l'entraînement, indemnisation, SLA, réversibilité.

> **Périmètre & frontière** : ce skill traite la **mécanique contractuelle**. Pour la **doctrine PI et la jurisprudence vérifiée** (outputs IA, TDM, affaires NYT/Andersen/Getty/Like Company/Thaler), voir [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — source de vérité du domaine, à ne pas dupliquer ici.

## Cadre référentiels mobilisés

| Sujet | Référentiel |
|---|---|
| Sous-traitance de données | **RGPD art. 28** (DPA) + **art. 32** (sécurité) |
| Protection du modèle | **Directive (UE) 2016/943** (secret d'affaires, art. 2) |
| PI / droit d'auteur FR | **CPI** art. L.111-1, L.112-1, L.122-6 (logiciel) |
| Conformité IA | **AI Act 2024/1689** (clause de conformité fournisseur) |
| Données d'entraînement | **Directive (UE) 2019/790** art. 4 (TDM + opt-out) |

## Types de contrats IA

### Contrat de développement IA
```
Clauses essentielles :
  1. Périmètre et livrables
     → Spécifications fonctionnelles précises (lever l'ambiguïté sur "l'IA")
     → Métriques de performance (accuracy, latence, disponibilité) + critères de recette
  2. Propriété intellectuelle (cf. propriete-intellectuelle-ia.md pour la doctrine)
     → Modèle entraîné : cession vs. licence ; poids (weights) ; datasets ; code source
     → Clause d'améliorations futures
  3. Données et RGPD
     → Qualification des parties (responsable / sous-traitant) ; DPA (art. 28) obligatoire
     → Localisation des données (UE) ; rétention et suppression
  4. Garanties et responsabilités
     → Garantie de conformité AI Act ; clause biais/discrimination
     → Limitation de responsabilité sur les décisions IA ; indemnisation PI (infra)
  5. Maintenance et évolution
     → MCO (niveau de service) ; surveillance du model drift (qui surveille/corrige ?)
     → Dépendance aux modèles fondateurs (ex. évolution d'une API tierce)
```

### Contrat SaaS IA (côté client) — points de vigilance
```
  ✓ DPA conforme RGPD (art. 28) + sous-processeurs listés
  ✓ Localisation des données (UE si RGPD strict ; régions cloud documentées)
  ✓ Portabilité et réversibilité à la résiliation
  ✓ Droit d'audit et de contrôle
  ✓ SLA de disponibilité chiffré (99,9% ≠ 99,5% — calcul du downtime annuel)
  ✓ Politique de rétention / suppression
  ✓ Modifications unilatérales des CGU (clause de notification + droit de sortie)
  ✓ Usage des données client pour l'entraînement du modèle fournisseur → INTERDIT par défaut (clause infra)
  ✓ Conformité AI Act du fournisseur (rôle, documentation)
```

## Propriété des modèles IA (résumé — détail dans `propriete-intellectuelle-ia.md`)

| Élément | Protection privilégiée |
|---|---|
| Code d'entraînement | Droit d'auteur logiciel (CPI art. L.122-6) |
| **Poids du modèle** | **Secret d'affaires** (Directive 2016/943, art. 2 — 3 conditions cumulatives) ⭐ |
| Datasets propriétaires | Droit *sui generis* bases de données (Dir. 96/9) + secret d'affaires |
| Marque (nom du modèle) | Marque UE (Règl. 2017/1001) |

**Outputs des LLM (droit d'auteur)** — position synthétique (détail + jurisprudence vérifiée → `propriete-intellectuelle-ia.md`) :
- Un output **purement IA** n'est en principe pas protégeable (absence d'auteur humain — USCO 2023/2025, critère CJEU *Infopaq* C-5/08).
- Un apport **créatif humain substantiel** peut ouvrir la protection (au cas par cas).
- Litiges en cours sur l'entraînement (fair use US / TDM UE) : NYT v. OpenAI, Andersen, Getty UK, Like Company v. Google (CJUE C-250/25) → **veille active** indispensable.

> ⚠️ Ne pas affirmer une « position CJUE/EUIPO » figée : au-delà de l'arrêt *Infopaq*, il n'existe pas encore d'arrêt CJUE tranchant les outputs GenAI (Like Company C-250/25 en cours, audience 10 mars 2026). Toute clause s'appuie sur l'état du droit **daté** et la veille.

## DPA (Data Processing Agreement) — clauses clés (RGPD art. 28)
```
Clauses minimales (art. 28.3) :
  1. Objet, durée, nature et finalité du traitement
  2. Type de données + catégories de personnes
  3. Obligations et droits du responsable de traitement
  4. Sous-traitants ultérieurs (liste + autorisation préalable)
  5. Transferts hors UE (clauses contractuelles types — CCT/SCC)
  6. Mesures de sécurité (art. 32)
  7. Assistance aux droits des personnes + notification de violation
  8. Suppression / restitution en fin de contrat + droit d'audit
```

## Clauses stratégiques (templates)

### Clause anti-usage pour l'entraînement
```
Le FOURNISSEUR s'interdit d'utiliser les données du CLIENT (inputs, outputs,
conversations, prompts, logs) pour entraîner, fine-tuner ou améliorer tout
modèle ou service, sauf accord écrit préalable. Interdiction étendue aux
sous-traitants. Engagement de durée illimitée (post-contractuel inclus).
```

### Clause d'indemnisation PI
```
Le FOURNISSEUR garantit le CLIENT contre toute revendication de tiers relative
à une violation de droits PI par l'usage conforme du Service (outputs inclus).
Plafond à négocier (ex. 12-24 mois de fees). Exclusions : usage non conforme,
fine-tuning non autorisé, outputs substantiellement modifiés par le CLIENT.
→ Comparer les offres marché (Adobe Firefly, OpenAI Copyright Shield, Anthropic,
  Microsoft Customer Copyright Commitment) — conditions et plafonds variables,
  à vérifier dans les CGU à jour (cf. table DD dans propriete-intellectuelle-ia.md).
```

## Anti-patterns

- ❌ **Clauses génériques fournisseur LLM** : pas de négociation anti-entraînement ni d'indemnisation PI = risque maximal
- ❌ **Pas de DPA** alors qu'il y a sous-traitance de données personnelles (violation RGPD art. 28)
- ❌ **SLA sans calcul du downtime** : « 99,9% » et « 99,5% » = ~8,8 h vs ~43,8 h d'indisponibilité/an
- ❌ **Affirmer une jurisprudence figée non sourcée** (ex. « position CJUE/EUIPO 2025 ») : citer l'état daté + renvoyer à la veille
- ❌ **Ignorer les modifications unilatérales de CGU** : prévoir notification + droit de sortie
- ❌ **Confondre cession et licence** de la PI du modèle / des poids
- ❌ **Oublier la clause de réversibilité** (export données + portabilité) à la résiliation
- ❌ **Protéger les poids par brevet en UE** sans « effet technique » : préférer le secret d'affaires

## Livrables
- Template contrat de développement IA (annoté)
- Checklist due diligence SaaS IA
- Template DPA conforme RGPD (art. 28)
- Clause de conformité AI Act pour contrats fournisseurs
- Clauses PI types (cession, anti-usage entraînement, indemnisation) — cohérentes avec `propriete-intellectuelle-ia.md`

## Format de sortie
Précise : type de contrat · parties (client/prestataire/SaaS) · données traitées · pays d'opération · enjeux PI prioritaires · délai de négociation.

## Sources
- **RGPD** — Règlement (UE) 2016/679, art. 28 (sous-traitance/DPA), art. 32 (sécurité) — eur-lex.europa.eu
- **Directive (UE) 2016/943** du 8 juin 2016 — protection du secret d'affaires (art. 2, 3 conditions)
- **Code de la propriété intellectuelle** (FR) — art. L.111-1, L.112-1, L.122-6 (logiciels), L.341-1 (bases de données sui generis)
- **Directive (UE) 2019/790** (DSM) — art. 4 TDM commercial + opt-out
- **AI Act** — Règlement (UE) 2024/1689 (clause de conformité fournisseur, art. 50/53)
- **Règlement (UE) 2017/1001** — marque de l'Union européenne
- Jurisprudence et doctrine PI détaillées → [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) (sources vérifiées)

## Voir aussi
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — **doctrine PI & jurisprudence IA** (source de vérité, complément indispensable)
- [`rgpd-ia.md`](rgpd-ia.md) — RGPD appliqué à l'IA (bases légales, droits des personnes)
- [`ai-act-conformite.md`](ai-act-conformite.md) — obligations AI Act à refléter dans les clauses
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA (déclenchée par certains traitements contractualisés)
- [`../consultant_ia/benchmark-solutions-ia.md`](../consultant_ia/benchmark-solutions-ia.md) — due diligence fournisseurs LLM (TCO, clauses)
