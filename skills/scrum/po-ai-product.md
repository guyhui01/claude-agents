# Skill — PO de Produit IA (Responsible AI Ownership)

> Certification : PSPO-AI (Scrum.org 2024) · PSPO II
> Agent : AGENT-PO-SCRUM.md

## Objectif

Gérer le backlog et la stratégie d'un produit intégrant IA générative ou ML en contexte régulé (AI Act UE 2025-2026, NIST AI RMF, ISO 42001) — c'est-à-dire passer d'une acceptance déterministe à une acceptance **probabiliste** mesurée et tracée.

## Cadre réglementaire & normatif (à connaître avant tout backlog IA)

| Référentiel | Année | Portée | Impact PO |
|---|---|---|---|
| **AI Act UE** (Règl. 2024/1689) | 2024, application 2025-2027 | 4 niveaux de risque : interdit, haut, limité, minimal | Classifier chaque feature IA, prévoir transparence (art. 50), supervision humaine (art. 14) |
| **NIST AI RMF 1.0** | janv. 2023 | 4 fonctions : Govern, Map, Measure, Manage | Structure l'AI Risk Register et le pilotage cycle de vie |
| **ISO/IEC 42001** | 2023 | AIMS (AI Management System certifiable) | Cadre gouvernance produit IA |
| **ISO/IEC 23894** | 2023 | Risk management AI | Taxonomie risques + traitement |
| **PSPO-AI Guide** | Scrum.org 2024 | 5 responsabilités PO en contexte IA | Référentiel rôle |

## Posture PO en IA — Ce qui change

- **Outputs probabilistes, pas déterministes** → critères d'acceptation = **seuils statistiques** (precision, recall, latence p95) et non plus "doit retourner X"
- **Valeur floue au démarrage** → discovery renforcé, hypothèses testées avec A/B + shadow mode avant rollout
- **Modèles versionnés** (LLM v1 vs v2, fine-tuning) → versionner les comportements attendus dans le DoD (cf. [dor-dod.md](dor-dod.md))
- **Régulation = exigence backlog**, pas annexe → l'AI Act intègre des items obligatoires (journalisation, transparence, fallback)

## 5 responsabilités PSPO-AI (Scrum.org 2024)

1. **AI Vision** — Démontrer pourquoi l'IA bat une règle métier déterministe (sinon ne pas la déployer)
2. **AI Ethics** — Équité, transparence, vie privée, non-nuisance (alignement art. 5 AI Act)
3. **AI Backlog** — Stories adaptées à l'incertitude (cf. [ai-user-stories.md](ai-user-stories.md))
4. **AI Value** — Mesure valeur business + métriques modèle, jamais l'un sans l'autre
5. **AI Risk** — Identification, mitigation, monitoring continu (cf. [gestion-risques.md](gestion-risques.md))

## AI Risk Register — Structure NIST AI RMF

| Fonction NIST | Question à instruire | Livrable PO |
|---|---|---|
| **Govern** | Qui est responsable, quelles politiques, quelle conformité ? | Charte IA produit, RACI, traçabilité décisions |
| **Map** | Quel contexte, quels acteurs, quel risque tolérable ? | Cartographie usages, classification AI Act |
| **Measure** | Comment quantifier risques et performance ? | Dashboard métriques (cf. section suivante) |
| **Manage** | Comment traiter, monitorer, dégrader gracieusement ? | Plan mitigation, fallback, kill switch |

**Taxonomie risques IA** : hallucination · biais (genre, âge, origine) · prompt injection (OWASP LLM01) · data leak · dérive modèle (drift) · dépendance fournisseur LLM · conformité (AI Act, RGPD, sectoriel) · coût compute imprévisible.

## Métriques IA — Acceptance probabiliste

| Métrique | Définition | Source / référence | Seuil indicatif |
|---|---|---|---|
| `hallucination_rate` | % réponses factuellement fausses | FActScore (Min et al. 2023) | ≤ 2% (usage grand public) |
| `factuality_score` | Score de véracité benchmark | TruthfulQA (Lin et al. 2022) | ≥ 0.7 |
| `disparate_impact_ratio` | Ratio acceptation groupe protégé / majoritaire | EEOC 4/5ths rule (1978), repris AI Act | ≥ 0.8 (seuil légal US, alerte UE) |
| `confidence_calibration` | Expected Calibration Error (ECE) | Guo et al. 2017 | ECE ≤ 0.05 |
| `latence_p95` / `p99` | Temps réponse 95e / 99e percentile | SRE Google (Beyer et al. 2016) | p95 ≤ 500ms (UX interactive) |
| `precision` / `recall` / `F1` | Performance classification | Standard ML | Dépend usage (cf. exemple) |
| `human_override_rate` | % d'outputs corrigés par l'utilisateur | Signal qualité perçue | < 10% (sinon revoir modèle) |

## Exemple chiffré — Feature "Recommandation produit IA" (retail e-commerce)

**User Story** : *En tant qu'acheteur connecté, je veux recevoir 3 reco produits personnalisées sur la fiche produit, afin de découvrir des articles complémentaires pertinents.*

**Critères d'acceptation** (extrait — version complète dans [po-acceptance-tests.md](po-acceptance-tests.md)) :

| AC | Seuil |
|---|---|
| Precision@3 (clic) | ≥ 0.70 mesuré sur 7 jours roulants |
| Recall@10 (catalogue couvert) | ≥ 0.60 |
| Latence p95 inférence | ≤ 500 ms |
| `hallucination_rate` (produit recommandé existant en stock) | ≤ 1% (bloquant) |
| `disparate_impact_ratio` (genre / tranche d'âge) | ≥ 0.8 |
| **Fallback non-IA** : si latence > 800 ms ou modèle indisponible → top 3 ventes catégorie | Obligatoire |
| Mention transparence "Suggestions personnalisées par IA" visible | Conformité AI Act art. 50 |
| Journalisation décision (inputs, version modèle, output) | Conservation 6 mois |

## Mapping AI Act → backlog PO

| Niveau de risque | Exemples | Items backlog obligatoires |
|---|---|---|
| **Interdit** (art. 5) | Social scoring, manipulation comportementale | Ne pas développer |
| **Haut risque** (art. 6, Annexe III) | Recrutement, scoring crédit, biométrie | Documentation technique, supervision humaine effective, journalisation, robustesse, qualité données — items dédiés dans le backlog |
| **Risque limité** (art. 50) | Chatbot, deepfake, contenu généré | Transparence : utilisateur informé qu'il interagit avec IA |
| **Risque minimal** | Filtre antispam, reco produit basique | Bonnes pratiques recommandées, pas d'obligation légale stricte |

## Anti-patterns PO IA

- ❌ **Feature IA sans fallback non-IA** — un modèle down = produit down (violation continuité de service)
- ❌ **Pas de mesure de confiance utilisateur** — `human_override_rate` non instrumenté = pas de signal de dérive
- ❌ **Sécurité prompt-injection ignorée** — OWASP LLM01 non couverte, surface d'attaque ouverte
- ❌ **Données entraînement non documentées** — Datasheets for Datasets (Gebru et al. 2021) absents, conformité AI Act art. 10 impossible
- ❌ **Acceptance criteria sans seuils statistiques** — "le modèle fonctionne bien" n'est pas un AC, c'est un vœu
- ❌ **Transparence absente** — "magic IA" présentée sans mention = violation AI Act art. 50
- ❌ **Versioning modèle absent** — impossible de reproduire un comportement passé, impossible d'auditer une décision contestée
- ❌ **Mesure de valeur = "feature livrée"** au lieu d'outcome business (revenue uplift, NPS, taux clic) — output ≠ outcome (cf. [product-metrics-ebm.md](product-metrics-ebm.md))

## Livrables

- **AI Product Vision Statement** — extension Product Vision Board (Pichler) avec section "Why IA"
- **AI Backlog versionné** — chaque story porte la version de modèle attendue
- **AI Risk Register** — structuré NIST AI RMF (Govern/Map/Measure/Manage)
- **Model Card** (Mitchell et al. 2019) + **Datasheet for Datasets** (Gebru et al. 2021)
- **Dashboard métriques** — couple métriques modèle + métriques business

## Format de sortie

Pour chaque feature IA, précise :
- **Type d'IA** : LLM générative · ML classique · computer vision · RAG · agent
- **Cas d'usage** : description + utilisateur cible
- **Niveau de risque AI Act** : interdit / haut / limité / minimal (justifier)
- **Contraintes régulatoires** : RGPD, AI Act, sectoriel (DSA, DORA banque, MDR santé…)

## Sources

- **PSPO-AI Guide** — Scrum.org (2024) — https://www.scrum.org/resources/professional-scrum-product-owner-pspo-ai-guide
- **AI Act UE** — Règlement (UE) 2024/1689 du 13 juin 2024 — JO L 2024/1689
- **NIST AI Risk Management Framework 1.0** — NIST (jan. 2023)
- **ISO/IEC 42001:2023** — AI Management System
- **ISO/IEC 23894:2023** — AI Risk Management
- **OWASP Top 10 for LLM Applications** — OWASP (2024, v2)
- Gebru et al. — *Datasheets for Datasets* (Comm. ACM, 2021)
- Mitchell et al. — *Model Cards for Model Reporting* (FAT*, 2019)
- Min et al. — *FActScore: Fine-grained Atomic Evaluation of Factual Precision* (EMNLP 2023)
- Lin, Hilton, Evans — *TruthfulQA* (ACL 2022)
- Guo et al. — *On Calibration of Modern Neural Networks* (ICML 2017)
- Beyer et al. — *Site Reliability Engineering* (Google / O'Reilly 2016) — sur p95/p99

## Voir aussi

- [ai-user-stories.md](ai-user-stories.md) — formats user story adaptés à l'incertitude IA
- [dor-dod.md](dor-dod.md) — intégrer critères IA (bias, hallucination, fallback) dans le DoD
- [gestion-risques.md](gestion-risques.md) — gestion risques projet, articulation avec AI Risk Register
- [product-metrics-ebm.md](product-metrics-ebm.md) — mesure valeur (EBM) — couplage métriques business + modèle
- [product-vision.md](product-vision.md) — Product Vision Board, base de l'AI Vision Statement
- [`../securite_ia/owasp-llm-top10.md`](../securite_ia/owasp-llm-top10.md) — OWASP LLM Top 10 détaillé (prompt injection, data leak)
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — AI Act UE — guide opérationnel conformité
