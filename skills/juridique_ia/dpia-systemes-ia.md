# Skill — DPIA (Analyse d'Impact) pour les Systèmes IA

> Certifications : CIPP/E · CIPM · DPO Certifié CNIL · ISO/IEC 27701 Lead Implementer
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **RGPD UE 2016/679 art. 35** · **EDPB/G29 WP248 rev.01** (9 critères) · **CNIL** délibération n° 2018-327 (11 oct. 2018, liste AIPD) · couplage **AI Act 2024/1689** (art. 6 + Annexe III)

## Objectif

Réaliser les **analyses d'impact relatives à la protection des données (DPIA / AIPD)** obligatoires pour les systèmes IA susceptibles d'engendrer un risque élevé pour les droits et libertés des personnes (RGPD art. 35).

## Cadre référentiels mobilisés

| Référentiel | Apport |
|---|---|
| **RGPD art. 35** | Obligation de DPIA si « risque élevé » ; contenu minimal (art. 35.7) |
| **EDPB/G29 WP248 rev.01** | **9 critères** ; DPIA généralement requise si **≥ 2 critères** réunis |
| **CNIL délib. 2018-327** (11 oct. 2018) | Liste de **14 types** de traitements imposant une AIPD (liste non exhaustive) |
| **AI Act art. 6 + Annexe III** | Les systèmes IA haut risque déclenchent quasi systématiquement une DPIA |

## Quand une DPIA est-elle obligatoire ?

```
Base : RGPD art. 35 + 9 critères EDPB (WP248 rev.01) — DPIA requise si ≥ 2 critères :

  1. Évaluation / scoring (y compris profilage)
  2. Décision automatisée avec effet juridique / significatif (art. 22)
  3. Surveillance systématique
  4. Données sensibles (art. 9) ou à caractère hautement personnel
  5. Données traitées à grande échelle
  6. Croisement / combinaison de jeux de données
  7. Données de personnes vulnérables (mineurs, patients, salariés)
  8. Usage innovant / nouvelle technologie (← l'IA en relève typiquement)
  9. Traitement faisant obstacle à un droit / à un contrat

+ CNIL délib. 2018-327 : 14 types de traitements pour lesquels l'AIPD est
  obligatoire en France (ex. profilage à grande échelle, traitements RH de
  surveillance, etc.).
```
> **IA = quasi toujours ≥ 2 critères** (usage innovant #8 + souvent scoring #1 ou grande échelle #5). La DPIA doit être menée **avant** le traitement et est un processus **itératif**.

## Structure d'une DPIA IA (contenu RGPD art. 35.7)

### Section 1 — Description du traitement
```
1.1 Contexte et objectifs : finalité(s), périmètre fonctionnel/géographique, parties prenantes
1.2 Données : catégories, sensibilité (art. 9/10), source, volume, fréquence
1.3 Flux : collecte → traitement → stockage → suppression ; transferts hors UE (mécanisme)
1.4 Spécificités IA : type de modèle, données d'entraînement, décisions (auto/assistées),
    biais identifiés + mitigation
```

### Section 2 — Nécessité et proportionnalité (art. 35.7.b)
```
2.1 Base légale (art. 6) + justification (test de mise en balance si intérêt légitime)
2.2 Proportionnalité : finalité légitime ? nécessaire ? alternatives moins intrusives ?
2.3 Droits des personnes : information, accès, opposition/retrait, portabilité (délais art. 12.3)
```

### Section 3 — Risques (cotation Probabilité × Impact, échelle 1-4)
```
R1 Discrimination / biais          → audit de biais, tests fairness, supervision humaine
R2 Fuite de données personnelles   → chiffrement, accès restreint, DLP
R3 Décision erronée impactante     → droit de recours, revue humaine, seuil de confiance
R4 Opacité / défaut d'explicabilité→ XAI (SHAP/LIME), explication art. 22 / AI Act art. 86
R5 Réidentification (pseudonymisé) → k-anonymat, confidentialité différentielle
```

### Section 4 — Mesures et conclusion
```
Plan d'action : | Risque | Mesure | Responsable | Échéance | Statut |
Avis du DPO : Favorable / Favorable avec réserves / Défavorable
Consultation préalable CNIL (art. 36) si risque résiduel élevé non maîtrisé.
Révision : la CNIL recommande une réévaluation au moins tous les 3 ans, ou à tout
changement significatif du traitement.
```

## Exemple — DPIA partielle d'un tri automatisé de CV (RH, AI Act haut risque)

| Élément | Valeur |
|---|---|
| Traitement | Pré-tri automatisé de candidatures (scoring CV) |
| Critères EDPB réunis | #1 scoring · #2 décision automatisée · #7 (candidats) · #8 IA → **4 critères ⇒ DPIA obligatoire** |
| Base légale | Intérêt légitime (art. 6.1.f) + test de mise en balance documenté |
| AI Act | Annexe III §4 (emploi) → **haut risque** ⇒ supervision humaine art. 14 |
| Risque R1 (biais) | P=3 / I=4 → **12** → mitigation : test d'équité par sexe/âge/origine, jamais de rejet 100% auto (art. 22) |
| Avis DPO | Favorable avec réserves (déploiement après test de biais + notice candidats art. 13) |

## Anti-patterns

- ❌ **DPIA réalisée après le déploiement** : elle doit précéder le traitement (art. 35)
- ❌ **« 1 seul critère donc pas de DPIA »** : un seul critère peut suffire en cas de risque élevé ; et l'IA en cumule souvent ≥ 2
- ❌ **Plan d'action sans owner ni échéance** : la DPIA devient un document mort
- ❌ **Oublier la consultation CNIL (art. 36)** quand le risque résiduel reste élevé
- ❌ **Confondre DPIA (données) et EIA éthique / évaluation AI Act** : trois objets distincts et complémentaires
- ❌ **Réidentification non traitée** : pseudonymisation présentée comme anonymisation
- ❌ **DPIA figée** : pas de réévaluation au changement significatif (ou > 3 ans)

## Livrables
- DPIA complète (structurée art. 35.7) + registre des DPIA
- Plan de mitigation des risques (owner + échéance)
- Avis du DPO documenté
- Procédure de révision (≤ 3 ans / changement significatif)

## Format de sortie
Précise : système IA décrit · données traitées (sensibles ?) · finalité · volume de personnes · décisions automatisées (oui/non) · transferts hors UE · classification AI Act.

## Sources
- **RGPD** — Règlement (UE) 2016/679, **art. 35** (DPIA) + art. 36 (consultation préalable) — eur-lex.europa.eu
- **EDPB / G29** — *Guidelines on DPIA (WP248 rev.01)* — 9 critères de risque élevé — ec.europa.eu (Article 29 WP)
- **CNIL** — Délibération n° **2018-327 du 11 octobre 2018** (liste des traitements imposant une AIPD) + référentiels AIPD — cnil.fr / legifrance.gouv.fr
- **AI Act** — Règlement (UE) 2024/1689 (art. 6 + Annexe III haut risque, art. 14 supervision, art. 86 explication)
- **CNIL** — Recommandations IA (2024-2025)

## Voir aussi
- [`rgpd-ia.md`](rgpd-ia.md) — RGPD appliqué à l'IA (bases légales, droits)
- [`ai-act-conformite.md`](ai-act-conformite.md) — haut risque (déclencheur de DPIA)
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — EIA éthique (complémentaire à la DPIA)
- [`audit-conformite-ia.md`](audit-conformite-ia.md) — vérifie l'existence et la qualité des DPIA
- [`../data_scientist/ethique-ia-biais.md`](../data_scientist/ethique-ia-biais.md) — mesure technique des biais (risque R1)
