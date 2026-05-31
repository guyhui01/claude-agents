# Skill — Politique IA d'Entreprise & Charte d'Utilisation

> Certifications : AI Act Compliance Expert · CIPP/E · CAP IABAC
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **AI Act UE 2024/1689** (art. 4 AI literacy, art. 5 interdits, art. 50 transparence) · **RGPD UE 2016/679** · **OECD AI Principles** · **NIST AI RMF 1.0** · Code du travail (consultation CSE)

## Objectif

Rédiger la **politique IA** et la **charte d'utilisation de l'IA générative** d'une organisation : encadrer les usages, fixer les cas autorisés/interdits, définir les rôles et le processus de validation — en conformité AI Act + RGPD.

## Cadre référentiels mobilisés

| Sujet | Référentiel |
|---|---|
| Cas interdits | **AI Act art. 5** (pratiques à risque inacceptable) |
| Formation / AI literacy | **AI Act art. 4** (obligation depuis le 2 fév. 2025) |
| Transparence (deepfakes, chatbots) | **AI Act art. 50** |
| Données personnelles | **RGPD 2016/679** |
| Valeurs / principes | **OECD AI Principles** · **NIST AI RMF** (GOVERN) |
| Surveillance des salariés | **Code du travail** + consultation **CSE** (information-consultation) |

## Politique IA d'Entreprise — structure

```markdown
# Politique d'Intelligence Artificielle — [Organisation]
Version : 1.0 | Date : [Date] | Approuvé par : [CODIR / DG]

## 1. Objet et périmètre
Cadre d'utilisation, de développement et de déploiement des systèmes IA.

## 2. Nos valeurs IA (alignées OECD AI Principles)
- Transparente · Équitable · Responsable (humain garant) · Conforme (AI Act, RGPD)
- Durable (empreinte environnementale mesurée)

## 3. Cas d'usage autorisés
✅ Automatisation de tâches répétitives (validation manager)
✅ Assistance à la rédaction (revue humaine obligatoire)
✅ Analyse de données (contrôle qualité)
✅ Support client assisté (escalade humaine possible)
✅ Personnalisation (avec base légale RGPD)

## 4. Cas d'usage INTERDITS
❌ Pratiques interdites par l'AI Act (art. 5 : notation sociale,
   manipulation, reconnaissance d'émotions au travail/en éducation…)
❌ Surveillance des salariés sans base légale ni consultation CSE
❌ Décision RH entièrement automatisée (RGPD art. 22)
❌ Deepfakes non marqués (AI Act art. 50)
❌ Données personnelles/confidentielles dans des LLM publics non approuvés

## 5. Processus de validation des projets IA
1. Évaluation éthique (EIA) → 2. DPIA si données personnelles (RGPD art. 35)
→ 3. Revue de conformité AI Act → 4. Validation Comité IA → 5. Revue sécurité (RSSI)

## 6. Rôles et responsabilités (RACI)
| Rôle | Responsabilité |
| CDO/Dir. IA | Stratégie et conformité globale |
| DPO | Conformité RGPD | RSSI | Sécurité des systèmes IA |
| Managers | Validation des usages | Employés | Respect de la politique |

## 7. Formation obligatoire (AI Act art. 4 — AI literacy)
- "IA & RGPD : les essentiels" (2h) → tous
- "Prompt Engineering responsable" (1h) → utilisateurs GenAI
- "AI Act & conformité" (3h) → équipes data/IA/juridique

## 8. Signalement et incidents
Adresse dédiée + dispositif d'alerte (cohérent avec la procédure
lanceurs d'alerte / loi Sapin 2).

## 9. Révision
Annuelle, ou à toute évolution réglementaire majeure (AI Act, guidance CNIL).
```

## Charte d'utilisation de l'IA Générative (employés)
```markdown
# Charte IA Générative — l'essentiel
✅ JE PEUX utiliser les outils IA approuvés (liste intranet)
⚠️ JE DOIS relire et valider les outputs (je reste responsable)
❌ JE NE DOIS PAS coller de données clients/confidentielles dans un LLM non approuvé
⚠️ JE DOIS signaler tout output problématique (biais, erreur, contenu inapproprié)
⚠️ JE DOIS mentionner "assisté par IA" sur les livrables clients quand requis
   (cohérence AI Act art. 50 + déontologie)
✅ JE PEUX proposer de nouveaux cas d'usage via le portail IA
```

## Exemple sectoriel — ETI industrielle (déploiement GenAI interne)

| Élément | Choix de politique |
|---|---|
| Outils approuvés | Copilot M365 + Claude (via API entreprise), ChatGPT public interdit pour données internes |
| Cas interdit clé | Tri RH 100% auto (art. 22) + surveillance production salariés sans CSE (art. 5 émotions) |
| AI literacy | Module 2h obligatoire (art. 4) déployé avant ouverture des accès |
| Gouvernance | Comité IA trimestriel, gate de validation des nouveaux cas d'usage |
| Transparence | Mention "assisté par IA" sur documents clients ; chatbot support signalé (art. 50) |

## Anti-patterns

- ❌ **Politique sans gate de validation** : des principes affichés mais aucun contrôle réel des projets
- ❌ **Citer « risque inacceptable » sans l'art. 5** : ancrer les interdits sur le texte
- ❌ **Surveillance des salariés sans CSE** : risque prud'homal + sanction CNIL
- ❌ **Oublier l'AI literacy (art. 4)** : obligation effective depuis le 2 fév. 2025
- ❌ **Charte « copier-coller » non adaptée** au secteur (santé/finance/RH ont des contraintes propres)
- ❌ **Interdire sans fournir d'alternative approuvée** : pousse au shadow AI
- ❌ **Politique non révisée** alors que la réglementation évolue vite (AI Act, guidance CNIL)

## Livrables
- Politique IA complète (document officiel approuvé CODIR)
- Charte d'utilisation IA (1 page, format affichette)
- FAQ employés « IA au travail »
- Processus de validation des projets IA (workflow + gate Comité IA)
- Formation de sensibilisation (slides + quiz, AI literacy art. 4)

## Format de sortie
Précise : taille et secteur de l'organisation · outils IA déjà utilisés · incidents passés · niveau d'exposition externe (clients, partenaires) · présence d'un CSE · validation juridique requise.

## Sources
- **AI Act** — Règlement (UE) 2024/1689 (art. 4 AI literacy, art. 5 interdits, art. 50 transparence) — eur-lex.europa.eu
- **RGPD** — Règlement (UE) 2016/679 (art. 22 décision automatisée)
- **OECD AI Principles** (2019, maj 2024) — oecd.ai · **NIST AI RMF 1.0** (GOVERN) — nist.gov
- **Code du travail** — information-consultation du CSE (surveillance / nouveaux outils) · **Loi Sapin 2** (dispositif d'alerte)
- **CNIL** — guides IA au travail (2024-2025)

## Voir aussi
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — comité IA, EIA, valeurs (amont de la politique)
- [`ai-act-conformite.md`](ai-act-conformite.md) — cas interdits (art. 5) et obligations
- [`rgpd-ia.md`](rgpd-ia.md) — base légale des usages traitant des données personnelles
- [`contrats-ia.md`](contrats-ia.md) — encadrement contractuel des outils IA approuvés
- [`../formateur_ia/`](../formateur_ia/) — conception des formations AI literacy (art. 4)
