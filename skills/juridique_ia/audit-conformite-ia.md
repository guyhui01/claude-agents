# Skill — Audit de Conformité IA

> Certifications : AI Act Compliance Expert · CIPP/E · ISO 27001 Lead Auditor · DPO Certifié
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **ISO/IEC 19011:2018** (lignes directrices audit) · **ISO/IEC 42001:2023** (AIMS auditable) · **NIST AI RMF 1.0** (2023) · **AI Act UE 2024/1689** · RGPD UE 2016/679 · **OWASP Top 10 for LLM Applications (2025)**

## Objectif

Réaliser des **audits de conformité** des systèmes IA (AI Act, RGPD, sécurité, éthique), selon une démarche d'audit normée (**ISO/IEC 19011:2018**), produisant un rapport scoré et un plan de remédiation daté.

## Cadre référentiels mobilisés

| Référentiel | Apport pour l'audit |
|---|---|
| **ISO/IEC 19011:2018** | Méthode d'audit : 7 principes (intégrité, présentation impartiale, conscience professionnelle, confidentialité, indépendance, approche fondée sur les preuves, approche par les risques) + gestion du programme d'audit |
| **ISO/IEC 42001:2023** | Référentiel auditable du système de management de l'IA (AIMS) — base d'un audit de certification |
| **NIST AI RMF 1.0** | Grille d'évaluation des risques (GOVERN/MAP/MEASURE/MANAGE) |
| **AI Act 2024/1689** | Obligations contrôlées (art. 5, 6+Annexe III, 9-17, 50) |
| **RGPD 2016/679** | Conformité données (art. 13/14, 22, 28, 30, 35) |
| **OWASP Top 10 for LLM Applications 2025** | Volet sécurité IA générative |

## Principes d'audit (ISO/IEC 19011:2018)

Tout audit s'appuie sur les **7 principes** : intégrité · présentation impartiale (rapporter findings positifs ET négatifs) · conscience professionnelle (diligence) · confidentialité · **indépendance** (auditeur ≠ audité) · **approche fondée sur les preuves** (chaque finding = preuve vérifiable) · **approche par les risques** (prioriser les systèmes haut risque AI Act).

## Méthodologie d'audit IA en 5 phases

### Phase 1 : Cadrage (J1-J5)
```
Livrables : lettre de mission · cartographie des systèmes IA · plan d'audit · checklist documentaire
Documents à collecter :
  → Registre des traitements (RGPD art. 30) · DPIA existantes (art. 35)
  → Documentation technique des modèles (AI Act art. 11 + Annexe IV)
  → Model Cards (Mitchell et al. 2019) / System Cards
  → Politiques de gouvernance IA · contrats fournisseurs (DPA art. 28, CGU SaaS)
  → Logs de traçabilité (AI Act art. 12)
```

### Phase 2 : Revue documentaire (J6-J15)
```
Contrôles (preuves à l'appui — ISO 19011 evidence-based) :
  ☐ AI Act : classification du risque correcte (art. 6 + Annexe III)
  ☐ AI Act : documentation technique complète si haut risque (art. 11)
  ☐ AI Act : transparence (art. 50) — marquage contenus IA / info chatbot
  ☐ RGPD art. 13/14 : information des personnes
  ☐ RGPD art. 22 : droits sur la décision automatisée
  ☐ RGPD art. 28 : DPA signé avec chaque sous-traitant
  ☐ RGPD art. 35 : DPIA réalisée si obligatoire
  ☐ Éthique : Model Card avec métriques de biais (cf. gouvernance-ethique-ia)
  ☐ Sécurité : OWASP Top 10 LLM 2025 adressé (cf. ci-dessous)
  ☐ Gouvernance : système de management IA (ISO/IEC 42001:2023)
```

### Phase 3 : Tests techniques (J16-J25)
```
Test 1 — Explicabilité : XAI disponible (SHAP/LIME) sur décisions critiques ?
Test 2 — Biais & équité : métriques de fairness par sous-groupe ; écart < seuil documenté ?
Test 3 — Supervision humaine (AI Act art. 14) : override humain réel sur décisions ?
Test 4 — Droits des personnes (RGPD) : accès < 1 mois (art. 12.3), oubli effectif, portabilité ?
Test 5 — Transparence (AI Act art. 50) : marquage "généré par IA", info chatbot ?
Test 6 — Sécurité GenAI (OWASP LLM 2025) : cf. checklist dédiée
```

### Volet sécurité — OWASP Top 10 for LLM Applications (2025)
```
LLM01 Prompt Injection            LLM06 Excessive Agency
LLM02 Sensitive Info Disclosure   LLM07 System Prompt Leakage
LLM03 Supply Chain                LLM08 Vector & Embedding Weaknesses
LLM04 Data & Model Poisoning      LLM09 Misinformation
LLM05 Improper Output Handling    LLM10 Unbounded Consumption
```
> Source : OWASP Gen AI Security Project, *OWASP Top 10 for LLM Applications 2025* (genai.owasp.org). Audit technique approfondi → renvoi AGENT-SECURITE-IA.

### Phase 4 : Rapport d'audit
```
1. Synthèse exécutive (1 page CODIR) : score global /100 + findings critiques + recos prioritaires
2. Résultats par domaine : AI Act · RGPD · Éthique · Sécurité (score + findings + preuves)
3. Plan de remédiation : Finding | Risque | Action | Responsable | Délai
4. Annexes techniques : tests réalisés, preuves, méthodologie (traçabilité ISO 19011)
```

### Phase 5 : Suivi et re-audit
```
J+30 : findings critiques · J+90 : findings majeurs · J+180 : améliorations · J+365 : re-audit
```

## Scoring de conformité IA
| Score | Niveau | Action |
|---|---|---|
| 90-100 | Conforme | Maintenance et surveillance |
| 75-89 | Conforme avec réserves | Plan d'amélioration 90 jours |
| 60-74 | Partiellement conforme | Plan de remédiation urgent |
| < 60 | Non conforme | Suspension recommandée + escalade |
> Grille de **pilotage interne** (convention de l'auditeur), à distinguer des obligations légales AI Act/RGPD qui, elles, ne se « scorent » pas (elles sont remplies ou non).

## Anti-patterns

- ❌ **Audit sans référentiel de méthode** : conduire un audit sans s'appuyer sur ISO/IEC 19011:2018 (preuves, indépendance, programme)
- ❌ **Cocher « conforme » sans preuve** : viole l'approche fondée sur les preuves (faux positif = risque n°1)
- ❌ **Auditeur = audité** : l'équipe qui a conçu le système ne peut pas s'auto-auditer (indépendance)
- ❌ **OWASP LLM sans version** : citer « OWASP LLM Top 10 » sans préciser l'édition (2025)
- ❌ **Confondre score interne et conformité légale** : un score 85/100 ne dispense pas d'une obligation AI Act manquante
- ❌ **Audit ponctuel sans re-audit** : la conformité IA se dégrade (model drift, évolution réglementaire)
- ❌ **Ignorer la traçabilité des preuves** : un finding non documenté n'est pas opposable

## Livrables
- Rapport d'audit complet (confidentiel) + synthèse exécutive CODIR (1 page)
- Plan de remédiation priorisé (échéances J+30/90/180/365)
- Registre de preuves (traçabilité ISO 19011)
- Certificat / attestation de conformité (si applicable, ISO 42001)
- Rapport de re-audit (J+365)

## Format de sortie
Précise : systèmes IA en périmètre · référentiels applicables (AI Act, RGPD, ISO 42001, OWASP LLM 2025) · type d'audit (interne, externe, pré-certification) · délai · audience du rapport.

## Sources
- **ISO/IEC 19011:2018** — *Guidelines for auditing management systems* (7 principes + programme d'audit) — iso.org/standard/70017.html
- **ISO/IEC 42001:2023** — AI Management System (auditable) — iso.org
- **NIST AI RMF 1.0** (NIST AI 100-1, janv. 2023) — nist.gov
- **AI Act** — Règlement (UE) 2024/1689 (art. 11 doc technique, art. 12 logs, art. 14 supervision, art. 50 transparence)
- **RGPD** — Règlement (UE) 2016/679 (art. 13/14, 22, 28, 30, 35)
- **OWASP Top 10 for LLM Applications 2025** — OWASP Gen AI Security Project — genai.owasp.org
- **Mitchell M. et al.** — *Model Cards for Model Reporting* (ACM FAT* 2019)

## Voir aussi
- [`ai-act-conformite.md`](ai-act-conformite.md) — classification et obligations AI Act (objet de l'audit)
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA RGPD art. 35
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — gouvernance et EIA (audités ici)
- [`rgpd-ia.md`](rgpd-ia.md) — conformité RGPD appliquée à l'IA
- [`../critique_conformite/audit-qualite-catalogue.md`](../critique_conformite/audit-qualite-catalogue.md) — audit qualité méthodo (ISO 19011 appliqué aux skills)
- [`../securite_ia/`](../securite_ia/) — audit technique sécurité IA (OWASP LLM approfondi)
