# Skill — Cadrage d'un PoC IA
> Certifications : CAP IABAC · PMI-ACP · AWS CCP · Anthropic Claude Code in Action

## Objectif
Définir et cadrer un Proof of Concept IA de façon à **valider ou invalider rapidement une hypothèse de valeur** en limitant les coûts et les risques — et éviter le « PoC graveyard » (PoC empilés, aucun en production). Gartner prédit que **≥ 30 % des projets d'IA générative seront abandonnés après le PoC d'ici fin 2025**, principalement pour qualité de données insuffisante, contrôles de risque inadéquats, coûts non maîtrisés ou valeur métier floue (Gartner, communiqué du 29 juillet 2024). Un cadrage rigoureux attaque directement ces quatre causes.

## Cadre méthodologique
Le cadrage d'un PoC IA combine trois référentiels complémentaires :
- **CRISP-DM 1.0** (consortium NCR / SPSS / DaimlerChrysler, 2000) — cycle en 6 phases (compréhension métier → compréhension données → préparation → modélisation → évaluation → déploiement), itératif et orienté objectif business. Le PoC couvre les 5 premières phases.
- **Lean Startup** (Eric Ries, *The Lean Startup*, 2011) — logique *Build-Measure-Learn* : un PoC est une **expérimentation pour tester une hypothèse**, pas une mini-production. On cherche le *validated learning* au moindre coût.
- **Google ML Test Score** (Breck, Cai, Nielsen, Salib, Sculley — IEEE Big Data, 2017) — rubrique de 28 tests sur la *production-readiness* (données, entraînement, service, monitoring). Utile pour juger si un PoC concluant est réellement industrialisable.

## PoC ≠ Pilote ≠ MVP
Distinction structurante, souvent confondue (source de périmètre mal cadré) :
| Étape | Objectif | Périmètre | Question répondue |
|---|---|---|---|
| **PoC** | Prouver la faisabilité + la valeur d'une hypothèse | Restreint (1 cas d'usage, données échantillon, hors prod) | « Est-ce que ça **peut** marcher ? » |
| **Pilote** | Valider en conditions réelles limitées | 1 équipe / 1 site, données réelles, environnement contrôlé | « Est-ce que ça marche **chez nous** ? » |
| **MVP** | Première version de valeur livrée en production | Périmètre minimal mais complet, utilisateurs réels | « Est-ce que ça crée de la valeur **en continu** ? » |

> ⚠️ Ne jamais vendre un PoC comme un MVP : le PoC n'a ni la robustesse, ni le monitoring, ni la sécurité d'une mise en production.

## Définition d'un PoC IA réussi
Un PoC IA valide **3 hypothèses** :
1. **Faisabilité technique** : les données existent en quantité/qualité suffisante, le modèle atteint le seuil de performance défini.
2. **Valeur métier** : l'IA améliore réellement le processus cible (gain mesurable vs baseline actuelle).
3. **Acceptabilité** : les utilisateurs adoptent l'outil (adoption, NPS, confiance).

> Un PoC qui prouve la faisabilité mais pas la valeur, ou l'inverse, est un **échec déguisé** : il faut les trois.

## Fiche de cadrage PoC IA
```
TITRE DU PoC      : [Nom descriptif de la solution]
CAS D'USAGE       : [Processus métier ciblé]
PROBLÈME RÉSOLU   : [Pain point quantifié — baseline chiffrée]
HYPOTHÈSE TESTÉE  : [Ce que le PoC doit prouver, formulé en hypothèse falsifiable]

PÉRIMÈTRE
  Inclus          : [Ce que couvre le PoC]
  Exclu           : [Ce qui n'est PAS testé — explicite]
  Données         : [Source, volume, qualité, droits d'usage / RGPD]

CRITÈRES DE SUCCÈS (définis AVANT de commencer)
  KPI Go          : [Seuil de validation — SMART]
  KPI No-Go       : [Seuil d'abandon]

ÉQUIPE
  Sponsor         : [Décideur garant du budget]
  Product Owner   : [Responsable produit]
  Tech Lead       : [Responsable technique]
  Métier          : [Expert fonctionnel + utilisateurs pilotes]

PLANNING
  Durée           : [indicatif 4-10 semaines — à calibrer selon données/complexité]
  Livrables clés  : [Jalons intermédiaires]
  Budget          : [Enveloppe PoC + 30 % contingence]

CONFORMITÉ        : [Niveau de risque AI Act · base légale RGPD · données sensibles ?]
DÉCISION POST-PoC : Go / No-Go / Pivot
```

## Étapes du PoC IA (alignées CRISP-DM)
```
S1-S2 : Compréhension métier + données — cadrage, audit data, baseline chiffrée
S3-S4 : Préparation données + modélisation (prototype technique)
S5-S6 : Évaluation + tests avec utilisateurs pilotes
S7    : Mesure des KPIs vs critères Go/No-Go + business case extrapolé
S8    : Décision Go / No-Go / Pivot + recommandation d'industrialisation
```
> Durées **indicatives** : un PoC sur données propres et disponibles tient en 4-6 semaines ; un PoC nécessitant collecte/labellisation peut dépasser 10 semaines. Calibrer dès le cadrage.

## Critères Go / No-Go
| Dimension | Critère Go | Critère No-Go |
|---|---|---|
| Performance | Métrique cible atteinte (seuil défini en S1) | Sous le seuil acceptable métier |
| Données | Volume + qualité suffisants, droits d'usage clairs | Données insuffisantes / biais majeurs / non conformes RGPD |
| Utilisateurs | NPS > 0, adoption pilote > 60 % | Rejet par les utilisateurs |
| Valeur (ROI) | Business case extrapolé validé (payback crédible) | Gain économique insuffisant |
| Industrialisation | ML Test Score acceptable (données, monitoring envisageables) | Dette technique rédhibitoire |
| Conformité | Risque AI Act maîtrisé | Risque réglementaire bloquant |

## Exemple chiffré — Distribution spécialisée omnicanale (anonymisé)
**Contexte** : ETI de distribution spécialisée, ~120 magasins en France, ~2 800 collaborateurs. Pain point : ruptures fréquentes en rayon + surstock simultané sur d'autres références (réassort piloté par moyenne mobile manuelle).
- **Cas d'usage** : prévision de la demande pour optimiser le réassort magasin.
- **Hypothèse testée** : un modèle de forecasting réduit l'erreur de prévision (MAPE) d'au moins 20 % vs la baseline actuelle.
- **Périmètre PoC** : 8 magasins pilotes, 1 catégorie produit, historique de ventes 24 mois (hors prod).
- **Durée** : ~10 semaines *(indicatif)*. **Budget** : ~80 K€ *(indicatif, à calibrer)*.
- **KPI Go** : MAPE −20 % vs baseline · adoption des planneurs > 60 % · payback extrapolé < 18 mois.
- **Résultat** : MAPE −27 % sur la catégorie testée, adoption 70 %, mais qualité de données hétérogène entre magasins → **décision : Go avec pivot** (industrialisation sur 3 catégories à données fiables, plan d'assainissement data pour les autres).

> Les chiffres ci-dessus sont **illustratifs** : à recalibrer sur chaque contexte (volumétrie, maturité data, TJM, périmètre).

## Anti-patterns
- **PoC trop large** : plusieurs processus/équipes en même temps → réduire à 1 cas d'usage, 1 équipe.
- **Critères de succès flous ou définis après coup** → KPIs SMART **avant** de commencer, sinon le PoC est ininterprétable.
- **« Data quality last »** : ignorer la qualité des données → audit data dès S1 (1ʳᵉ cause d'abandon Gartner).
- **PoC graveyard** : enchaîner les PoCs sans critère d'industrialisation → décision Go/No-Go formalisée + ML Test Score.
- **Change management oublié** : pas d'utilisateurs impliqués → rejet à l'arrivée ; impliquer les pilotes dès S3.
- **PoC vendu comme MVP** : confondre faisabilité et production-readiness → robustesse/sécurité/monitoring absents.
- **Budget sous-estimé** : pas de contingence → prévoir +30 %.

## Livrables
- Fiche de cadrage PoC (1 page)
- Plan de projet PoC (planning + jalons + budget)
- Baseline chiffrée du processus actuel
- Rapport de résultats Go / No-Go / Pivot (avec mesure vs critères)
- Recommandation d'industrialisation (couplée ML Test Score)

## Format de sortie
Précise : cas d'usage · données disponibles (source, volume, qualité, droits) · équipe · budget · délai · critère de succès principal · niveau de risque AI Act.

## Sources
- **CRISP-DM 1.0** — *Cross-Industry Standard Process for Data Mining*, consortium NCR / SPSS / DaimlerChrysler (1996 conception, draft 1999, version 1.0 publiée 2000)
- **Ries E.** — *The Lean Startup*, Crown Business (2011) — boucle Build-Measure-Learn, validated learning
- **Breck E., Cai S., Nielsen E., Salib M., Sculley D.** — *The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction*, Proceedings of IEEE Big Data (2017) — 28 tests, Google
- **Gartner** — *Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025* (communiqué, 29 juillet 2024)
- **Gartner** — *Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027* (communiqué, 25 juin 2025)
- **AI Act UE** — Règlement (UE) 2024/1689 du 13 juin 2024 (classification du niveau de risque dès le cadrage)

## Voir aussi
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — diagnostic de maturité IA en amont (sélection des cas d'usage)
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — business case et ROI extrapolé post-PoC
- [feuille-route-ia.md](feuille-route-ia.md) — intégration du cas d'usage validé dans la roadmap IA
- [benchmark-solutions-ia.md](benchmark-solutions-ia.md) — choix de la solution/modèle pour le prototype
- [`../chef_projet_ia/cadrage-projet-ia.md`](../chef_projet_ia/cadrage-projet-ia.md) — cadrage projet (charte, business case) si industrialisation
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — registre de risques (AI Risk Register, NIST AI RMF)
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — classification du risque AI Act du cas d'usage
