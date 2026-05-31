# Skill — Gouvernance Éthique de l'IA

> Certifications : AI Act Compliance Expert · CAP IABAC · DPO Certifié CNIL
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **OECD AI Principles** (2019, maj 2024) · **UNESCO Reco Éthique de l'IA** (2021) · **EU HLEG Ethics Guidelines for Trustworthy AI** (2019) + **ALTAI** (2020) · **NIST AI RMF 1.0** (2023) + GenAI Profile (2024) · **ISO/IEC 42001:2023** (AIMS) · ISO/IEC 23894:2023 · ISO/IEC 24028:2020 · AI Act UE 2024/1689

## Objectif

Mettre en place un **cadre de gouvernance éthique de l'IA** aligné sur les valeurs de l'organisation, les exigences de l'**AI Act** (art. 50 transparence, art. 14 supervision humaine) et les **référentiels internationaux reconnus** (OECD, UNESCO, EU HLEG, NIST). Produire les livrables opérables : politique IA, comité de gouvernance, évaluation d'impact éthique, Model Cards.

## Cadre référentiels mobilisés

| Référentiel | Statut | Apport pour la gouvernance |
|---|---|---|
| **OECD AI Principles** (2019, maj 2024) | 1er standard intergouvernemental | 5 principes valeurs + intégration GenAI 2024 (sûreté, PI, intégrité de l'information) |
| **UNESCO Recommendation on the Ethics of AI** (2021) | 194 États membres | 4 valeurs fondatrices + **Ethical Impact Assessment (EIA)** + Policy Action Areas |
| **EU HLEG — Ethics Guidelines for Trustworthy AI** (2019) | Soft law UE, socle de l'AI Act | 4 impératifs → **7 exigences clés** + liste d'évaluation **ALTAI** (2020) |
| **NIST AI RMF 1.0** (2023) | Cadre de référence US | 4 fonctions **GOVERN / MAP / MEASURE / MANAGE** (Govern transverse) + GenAI Profile (2024) |
| **ISO/IEC 42001:2023** | Norme certifiable (AIMS) | Système de management de l'IA auditable (PDCA) |
| **AI Act UE 2024/1689** | Règlement contraignant | Obligations légales (art. 5 interdits, art. 6+Annexe III haut risque, art. 50 transparence) |

## Les 7 principes éthiques — ancrage référentiel

Les principes ci-dessous **convergent** entre OECD, UNESCO et EU HLEG. Chaque principe est rattaché à sa source officielle (pas un « consensus » générique).

| # | Principe | Source officielle |
|---|---|---|
| 1 | **Transparence & Explicabilité** — décisions IA compréhensibles par les personnes affectées | OECD principe 3 · HLEG exigence 4 · AI Act art. 50 |
| 2 | **Équité & Non-discrimination** — pas de discrimination sur critères protégés | OECD principe 2 · HLEG exigence 5 · UNESCO (diversité & inclusion) |
| 3 | **Robustesse & Sécurité** — fiabilité, résistance aux attaques | OECD principe 4 · HLEG exigence 2 · NIST MANAGE |
| 4 | **Vie privée & Gouvernance des données** — minimisation, droits des personnes | HLEG exigence 3 · RGPD · ISO/IEC 27701 |
| 5 | **Responsabilité & Imputabilité** — un humain responsable des décisions | OECD principe 5 · HLEG exigence 7 · NIST GOVERN |
| 6 | **Supervision & agentivité humaines** — l'humain garde le contrôle | HLEG exigence 1 · AI Act art. 14 · UNESCO (human oversight) |
| 7 | **Bien-être sociétal & durabilité environnementale** — impact société + empreinte carbone | OECD principe 1 · HLEG exigence 6 · UNESCO (environnement & écosystèmes) |

> **Convergence des cadres** : OECD = 5 principes valeurs · EU HLEG = 7 exigences (issues de 4 impératifs : autonomie humaine, prévention du dommage, équité, explicabilité) · UNESCO = 4 valeurs fondatrices (droits humains & dignité · sociétés justes · diversité & inclusion · environnement) · NIST = 4 fonctions opérationnelles. La grille à 7 principes ci-dessus en est la synthèse opérable.

## Structure de gouvernance IA (ancrage NIST GOVERN + ISO/IEC 42001)

La fonction **GOVERN** du NIST AI RMF (transverse aux 3 autres) et le système de management **ISO/IEC 42001:2023** fondent le comité ci-dessous.

### Comité IA (AI Board)
```
Composition recommandée :
  → Président : CDO ou Directeur IA
  → DPO (Data Protection Officer)
  → RSSI (Sécurité)
  → Responsable Juridique / Conformité
  → Représentants métiers (2-3 directions concernées)
  → Data Scientist lead
  → Représentant des utilisateurs / employés

Missions :
  → Valider les cas d'usage IA avant déploiement (gate GOVERN)
  → Approuver les DPIA (RGPD art. 35) et audits de conformité AI Act
  → Arbitrer les dilemmes éthiques (référence : 7 principes ci-dessus)
  → Suivre les incidents IA et actions correctives (NIST MANAGE)
  → Rapport annuel au CODIR / Conseil d'Administration (ISO 42001 revue de direction)

Cadence : revue mensuelle (1h) + comité extraordinaire si incident.
(Fréquence à calibrer selon le volume de cas d'usage — convention organisationnelle, non normative.)
```

### Politique IA de l'organisation
```
Structure recommandée :
  1. Valeurs et principes IA (alignés OECD / UNESCO / HLEG)
  2. Cas d'usage autorisés / interdits (cf. AI Act art. 5 pour les interdits)
  3. Processus de validation des projets IA (gate comité)
  4. Rôles et responsabilités (RACI)
  5. Formation obligatoire des utilisateurs (AI Act art. 4 — AI literacy)
  6. Procédure de signalement des incidents / dérives
  7. Revue et mise à jour (annuelle ou changement significatif)
```

## Évaluation d'impact éthique (Ethical Impact Assessment)

Ancrée sur l'**EIA UNESCO (2021)** et la liste d'évaluation **ALTAI** du HLEG (2020). Complémentaire — pas substituable — à la DPIA RGPD (art. 35) et à l'évaluation de conformité AI Act.

### Grille d'évaluation (score /100)
| Dimension | Poids | Question clé | Ancrage |
|---|---|---|---|
| Transparence | 20% | L'utilisateur sait-il qu'il interagit avec une IA ? | HLEG #4 · AI Act art. 50 |
| Équité | 20% | Les biais ont-ils été testés et mitigés ? | HLEG #5 |
| Supervision humaine | 20% | Un humain peut-il contrôler / corriger ? | HLEG #1 · AI Act art. 14 |
| Vie privée | 20% | DPIA réalisée ? Données minimisées ? | HLEG #3 · RGPD art. 35 |
| Imputabilité | 20% | Qui est responsable en cas d'erreur ? | HLEG #7 · NIST GOVERN |

```
Score ≥ 80 : Déploiement autorisé
Score 60-79 : Déploiement avec mesures complémentaires
Score < 60 : Révision du projet requise
```
> Les seuils ci-dessus sont une **convention de pilotage interne** (à valider par le comité IA), non une norme réglementaire — à documenter dans la politique IA.

## Model Cards & rapports de transparence

Format **Model Cards** de référence : Mitchell et al., *Model Cards for Model Reporting* (FAT\* 2019). Couplé aux *Datasheets for Datasets* (Gebru et al., 2021) pour la documentation des données.

```yaml
# Model Card — d'après Mitchell et al. (2019)
model_name: Churn Predictor v2.1
model_type: XGBoost Classifier
training_date: 2026-03-15
training_data:
  description: CRM data 2022-2025 (500K customers)
  sensitive_attributes: age, region (NOT gender, ethnicity)
intended_use:
  - primary: Customer retention campaigns
  - out_of_scope: Individual employee evaluation, credit scoring
performance:
  overall_auc: 0.923
  by_group:                       # évaluation de l'équité par sous-groupe
    age_18_35: 0.901
    age_35_55: 0.934
    age_55_plus: 0.908
  fairness_metric: equalized_odds gap = 3.3%   # seuil cible défini et justifié par l'organisation
limitations: Model may underperform for customers with <6 months history
ethical_considerations: Campaigns must include opt-out. No automated action > €500.
contact: data-ethics@organisation.example
```
> **Métriques d'équité** : choisir et documenter la métrique (parité démographique, *equalized odds*, *equal opportunity*) et son seuil cible — il n'existe pas de seuil universel unique ; le seuil doit être justifié au regard du contexte et du risque (cf. UNESCO EIA).

## Exemple sectoriel — assurance (scoring de sinistralité, AI Act haut risque)

**Contexte anonymisé** : assureur européen mid-market, modèle de scoring de sinistralité auto (segmentation tarifaire). Usage potentiellement **haut risque** (impact sur l'accès à un service essentiel).

- **Cadrage comité IA** : classification AI Act → revue art. 6 + Annexe III ; DPIA RGPD art. 35 déclenchée.
- **EIA** : score initial 64/100 → **équité 12/20** (écart de performance entre tranches d'âge non testé), **transparence 12/20** (pas d'information assuré). Déploiement **conditionnel**.
- **Mesures correctives** : test d'équité par sous-groupe (Model Card), notice de transparence assuré (AI Act art. 50), supervision humaine sur tout refus (art. 14), opt-out réclamation.
- **Réévaluation** : EIA 84/100 → déploiement autorisé, revue comité à 6 mois.

## Anti-patterns

- ❌ **« Éthique-washing »** : charte de principes affichée sans gate de validation ni mesure (principes non opérables)
- ❌ **Confondre éthique et conformité légale** : passer l'AI Act ≠ être éthique (l'EIA va au-delà du minimum légal)
- ❌ **Comité IA sans pouvoir de blocage** : avis consultatif seulement → les projets passent quand même
- ❌ **Seuils d'équité/score arbitraires non documentés** : annoncer « gap < 5% » sans définir la métrique ni justifier le seuil
- ❌ **Model Card absente ou non maintenue** : modèle déployé sans documentation des limites et des biais
- ❌ **Supervision humaine cosmétique** (*rubber-stamping*) : l'humain valide sans pouvoir réel de contester (viole AI Act art. 14)
- ❌ **Principes éthiques non sourcés** : invoquer un « consensus international » sans référentiel (OECD/UNESCO/HLEG)
- ❌ **Oublier la durabilité** : ne pas mesurer l'empreinte carbone d'entraînement/inférence (OECD principe 1, UNESCO environnement)

## Livrables

- **Politique IA de l'organisation** (document officiel, alignée OECD/UNESCO/HLEG)
- **Charte d'utilisation de l'IA** (pour les employés)
- **Grille d'évaluation éthique (EIA)** (template, ancrée UNESCO + ALTAI)
- **Model Cards** (par modèle, format Mitchell et al. 2019) + Datasheets datasets
- **Rapport annuel de gouvernance IA** (revue de direction ISO 42001)
- **Formation « Éthique IA »** (2h, tous niveaux — AI Act art. 4 AI literacy)

## Format de sortie

Précise : taille et secteur de l'organisation · maturité éthique actuelle (NIST GOVERN) · incidents IA passés · contraintes sectorielles (santé, finance, RH, assurance) · classification AI Act des cas d'usage · audience (CODIR, équipes, utilisateurs).

## Sources

- **OECD** — *Recommendation of the Council on Artificial Intelligence* / AI Principles (OECD/LEGAL/0449, 2019, mise à jour 2024) — oecd.ai/en/ai-principles
- **UNESCO** — *Recommendation on the Ethics of Artificial Intelligence* (adoptée nov. 2021, 194 États membres) — unesco.org/en/artificial-intelligence/recommendation-ethics
- **EU High-Level Expert Group on AI** — *Ethics Guidelines for Trustworthy AI* (8 avril 2019) + *Assessment List for Trustworthy AI (ALTAI)* (2020) — digital-strategy.ec.europa.eu
- **NIST** — *AI Risk Management Framework 1.0* (NIST AI 100-1, janv. 2023) + *Generative AI Profile* (NIST AI 600-1, juil. 2024) — nist.gov/itl/ai-risk-management-framework
- **ISO/IEC 42001:2023** (AI Management System) · **ISO/IEC 23894:2023** (AI risk management) · **ISO/IEC 24028:2020** (trustworthiness in AI) — iso.org
- **Mitchell M. et al.** — *Model Cards for Model Reporting* (ACM FAT\* 2019) · **Gebru T. et al.** — *Datasheets for Datasets* (Comm. ACM 2021)
- **AI Act** — Règlement UE 2024/1689 (art. 4 AI literacy, art. 5 interdits, art. 6 + Annexe III haut risque, art. 14 supervision humaine, art. 50 transparence)

## Voir aussi

- [`ai-act-conformite.md`](ai-act-conformite.md) — classification des risques AI Act, obligations par niveau
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA RGPD art. 35 (complémentaire à l'EIA éthique)
- [`audit-conformite-ia.md`](audit-conformite-ia.md) — audit de conformité (vérifie l'application de cette gouvernance)
- [`politique-ia-entreprise.md`](politique-ia-entreprise.md) — politique IA et charte GenAI (livrable de cette gouvernance)
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — PI & IA (dimension juridique complémentaire)
- [`../data_scientist/ethique-ia-biais.md`](../data_scientist/ethique-ia-biais.md) — mesure technique des biais (couplage data science)
