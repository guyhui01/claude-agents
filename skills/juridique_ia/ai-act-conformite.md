# Skill — AI Act : Conformité et Obligations

> Certifications : AI Act Compliance Expert (EIPA) · CIPP/E · DPO Certifié CNIL
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **Règlement (UE) 2024/1689 (AI Act)** — art. 5, 6, 50, 51, 53, 55 + Annexe III · **ISO/IEC 42001:2023** (AIMS) · **NIST AI RMF 1.0** (2023) · couplage RGPD UE 2016/679

## Objectif

Évaluer et mettre en conformité les systèmes IA avec le **Règlement (UE) 2024/1689** (« AI Act »), entré en vigueur le **1ᵉʳ août 2024**. Classer le système selon les 4 niveaux de risque, identifier les obligations par rôle (fournisseur/déployeur), produire le plan de mise en conformité aux bonnes échéances.

## Cadre référentiels mobilisés

| Référentiel | Apport |
|---|---|
| **AI Act (UE) 2024/1689** | Obligations contraignantes : art. 5 (interdits), art. 6 + Annexe III (haut risque), art. 50 (transparence), art. 51-55 (GPAI / risque systémique) |
| **ISO/IEC 42001:2023** | Système de management de l'IA (AIMS) auditable — preuve de gouvernance |
| **NIST AI RMF 1.0** (2023) | Cadre de gestion des risques (GOVERN/MAP/MEASURE/MANAGE) — opérationnalise art. 9 (gestion des risques) |
| **RGPD UE 2016/679** | Couplage données personnelles (DPIA art. 35 ↔ AI Act haut risque) |

## Calendrier d'application AI Act (dates officielles)

```
1 août 2024   : Entrée en vigueur du règlement
2 fév. 2025   : Interdiction des pratiques à risque inacceptable (art. 5)
                + obligations AI literacy (art. 4)
                ⚠ sanctions déjà applicables : jusqu'à 35 M€ ou 7% du CA mondial
2 août 2025   : Obligations GPAI (art. 53-55) + règles de gouvernance
                (GPAI Code of Practice publié le 10 juil. 2025)
2 août 2026   : Application générale — systèmes à HAUT RISQUE (art. 6 + Annexe III)
2 août 2027   : Systèmes haut risque embarqués dans produits réglementés (Annexe I)
```

## Classification des risques IA

### 1. Risque Inacceptable — INTERDIT (art. 5)
```
→ Notation sociale (social scoring) par les autorités publiques
→ Manipulation subliminale exploitant les vulnérabilités
→ Identification biométrique à distance en temps réel dans l'espace public (sauf exceptions limitées)
→ Police prédictive fondée sur le seul profilage
→ Reconnaissance des émotions sur le lieu de travail / en éducation
→ Scraping non ciblé d'images faciales pour bases de reconnaissance
```
> Sanction : jusqu'à **35 M€ ou 7% du CA mondial** (art. 99), applicable depuis le 2 fév. 2025.

### 2. Risque Élevé — OBLIGATIONS STRICTES (art. 6 + Annexe III)
```
Domaines Annexe III :
  ✦ Recrutement et gestion RH
  ✦ Crédit et assurance (scoring, éligibilité)
  ✦ Éducation (évaluation, admission)
  ✦ Services publics essentiels (eau, énergie, prestations sociales)
  ✦ Application de la loi, migration, justice
  ✦ Biométrie · infrastructure critique
  (+ Annexe I : dispositifs médicaux et produits réglementés)

Obligations fournisseur (art. 8-17) :
  1. Système de gestion des risques (art. 9 — cf. NIST AI RMF)
  2. Gouvernance des données d'entraînement, qualité, biais (art. 10)
  3. Documentation technique (art. 11 + Annexe IV)
  4. Tenue de logs / traçabilité (art. 12 — conservation appropriée)
  5. Transparence et information du déployeur (art. 13)
  6. Supervision humaine (art. 14)
  7. Exactitude, robustesse, cybersécurité (art. 15)
  8. Enregistrement base de données UE (art. 49) + déclaration de conformité (art. 47) + marquage CE
```

### 3. Risque Limité — TRANSPARENCE (art. 50)
```
→ Chatbots : informer l'utilisateur qu'il interagit avec une IA
→ Contenus génératifs / deepfakes : marquage "généré ou manipulé par IA" (lisible machine)
→ Reconnaissance d'émotions / catégorisation biométrique : information des personnes
```

### 4. Risque Minimal — VOLONTAIRE
```
→ Filtres anti-spam · IA des jeux vidéo · recommandations non critiques
→ Codes de conduite volontaires encouragés (art. 95)
```

## Modèles d'usage général (GPAI) — art. 51 à 55

```
GPAI standard (art. 53) :
  → Documentation technique + résumé des données d'entraînement (template AI Office)
  → Politique de respect du droit d'auteur UE (opt-out art. 4 Directive 2019/790)

GPAI à RISQUE SYSTÉMIQUE (art. 51) :
  → Présomption automatique si entraînement > 10^25 FLOP (terme officiel : "systemic risk")
  → Obligations renforcées (art. 55) : évaluations adverses (red-teaming),
    atténuation des risques systémiques, signalement incidents à l'AI Office, cybersécurité
```

## Grille d'évaluation AI Act

```
1. Est-ce un "système d'IA" au sens de l'art. 3(1) ?
   → "machine-based system... operating with varying levels of autonomy,
      that may exhibit adaptiveness... infers from input how to generate outputs"

2. Est-il INTERDIT ? → vérifier l'art. 5 (risque inacceptable)

3. Est-il à HAUT RISQUE ? → vérifier l'art. 6 + Annexe III (+ Annexe I produits)

4. Est-ce un modèle GPAI ? → art. 53 ; risque systémique si > 10^25 FLOP (art. 51)

5. Quel est mon rôle ?
   → Fournisseur (provider) : obligations maximales
   → Déployeur (deployer) : information, supervision humaine, usage conforme
   → Importateur / distributeur : vérification de conformité
```

## Documentation obligatoire (haut risque)
- Système de management des risques IA (art. 9 — référentiel **ISO/IEC 42001:2023** + **NIST AI RMF**)
- Documentation technique (art. 11 + Annexe IV)
- Déclaration de conformité UE (art. 47) + marquage CE
- Enregistrement base de données UE (art. 49)
- Procédure de supervision humaine (art. 14) + plan de tests/validation (art. 15)

## Exemple — classification d'un système de scoring crédit
```
Système : modèle de scoring d'octroi de crédit (banque de détail)
→ Art. 6 + Annexe III (point 5b "creditworthiness") = HAUT RISQUE
→ Rôle banque : déployeur (si modèle tiers) OU fournisseur (si développé en interne)
→ Obligations : gestion des risques (art. 9), gouvernance données + test de biais (art. 10),
   supervision humaine sur les refus (art. 14), information de la personne (art. 13 + RGPD art. 22)
→ Échéance : conformité au 2 août 2026
→ Couplage RGPD : DPIA art. 35 obligatoire
```

## Anti-patterns

- ❌ **Confondre « Annexe I » et « art. 5 »** : les pratiques interdites sont à l'**art. 5**, pas dans une annexe
- ❌ **« AI Act = checklist annexe »** : c'est un règlement contraignant avec sanctions (35 M€ / 7%)
- ❌ **Oublier le rôle de déployeur** : croire que seules les obligations « fournisseur » comptent
- ❌ **« Pas concerné car GPAI »** : un GPAI > 10²⁵ FLOP déclenche le régime risque systémique (art. 51)
- ❌ **Confondre transparence (art. 50) et haut risque (art. 6)** : un chatbot peut être « limité » sans être « haut risque »
- ❌ **Traiter l'AI Act sans le RGPD** : un système haut risque RH/crédit déclenche aussi une DPIA (art. 35)
- ❌ **Citer des dates ou seuils non sourcés** : toujours s'appuyer sur le texte officiel / l'AI Office

## Livrables
- Audit de conformité AI Act (classification + plan priorisé)
- Fiche de classification du système (niveau de risque + articles applicables)
- Plan de mise en conformité daté (échéances 2025/2026/2027)
- Documentation technique requise (Annexe IV)
- Formation « AI Act » (art. 4 AI literacy)

## Format de sortie
Précise : description du système IA · secteur d'usage · rôle (fournisseur/déployeur/importateur) · données traitées · niveau de supervision humaine actuel · délai de mise en conformité visé.

## Sources
- **Règlement (UE) 2024/1689 (AI Act)** — JO L du 12 juillet 2024 — eur-lex.europa.eu (art. 5 interdits, art. 6 + Annexe III haut risque, art. 9-17 obligations, art. 50 transparence, art. 51-55 GPAI/risque systémique, art. 99 sanctions)
- **Calendrier d'application** : entrée en vigueur 1 août 2024 · interdits + AI literacy 2 fév. 2025 · GPAI + gouvernance 2 août 2025 · haut risque 2 août 2026 · produits Annexe I 2 août 2027 — digital-strategy.ec.europa.eu
- **GPAI Code of Practice** — Commission européenne, publié le 10 juillet 2025
- **ISO/IEC 42001:2023** (AI Management System) — iso.org
- **NIST AI RMF 1.0** (NIST AI 100-1, janv. 2023) — nist.gov

## Voir aussi
- [`audit-conformite-ia.md`](audit-conformite-ia.md) — auditer l'application opérationnelle de l'AI Act
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA RGPD art. 35 (couplage haut risque)
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — comité IA, EIA, gouvernance (NIST GOVERN)
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — art. 53 GPAI + opt-out TDM (Directive 2019/790)
- [`politique-ia-entreprise.md`](politique-ia-entreprise.md) — politique IA et cas d'usage autorisés/interdits
