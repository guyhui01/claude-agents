# Skill — Benchmark Solutions IA

> Certifications : **AWS Cloud Practitioner (CLF-C02)** · **Google Cloud Digital Leader** · **Azure Fundamentals (AZ-900)** · CAP IABAC · Gartner Subscriptions (Peer Insights/Magic Quadrant) · Forrester Decisions
> Agent : AGENT-CONSULTANT-IA.md

## Objectif

Sélectionner rigoureusement la **meilleure solution IA** (LLM/MLOps/plateforme métier) pour un contexte client en s'appuyant sur les **4 référentiels analystes principaux** (Gartner Magic Quadrant, Forrester Wave, IDC MarketScape, G2 Grid), les **peer reviews** (Gartner Peer Insights, Capterra, TrustRadius), la méthode économique **Forrester TEI** (Total Economic Impact), une **méthode structurée RFI→RFP→POC** et le **TCO 3-5 ans** — afin de produire une recommandation argumentée, traçable et défendable en COSTRAT.

## Cadre référentiels mobilisés (4 catégories)

| Catégorie | Référentiels |
|---|---|
| **Frameworks analystes** | Gartner Magic Quadrant + Critical Capabilities · Forrester Wave · IDC MarketScape · G2 Grid · Constellation ShortList |
| **Peer reviews** | Gartner Peer Insights · Capterra · TrustRadius · GetApp · Software Advice |
| **Méthodes économiques** | Forrester TEI (Total Economic Impact) · TCO 3-5 ans · ROI / NPV / Payback / IRR (cf. cadrage-projet) |
| **Procurement & qualité** | Kraljic Matrix (1983) · ISO/IEC 25010:2023 Quality Model · ITIL 4 Service Value Chain · RFI/RFP/POC |

## Gartner Magic Quadrant — Méthodologie officielle

Évaluation sur **2 axes** (Ability to Execute × Completeness of Vision) — **4 quadrants** :

```
                  HIGH ABILITY TO EXECUTE
                          │
        CHALLENGERS       │       LEADERS
        (Exécutent bien   │       (Exécutent bien
         aujourd'hui sans │        + vision claire
         vision forte du  │        marché à venir)
         marché futur)    │
                          │
   LOW ─────────────────────────── HIGH
   COMPLETENESS OF VISION │       COMPLETENESS OF VISION
                          │
        NICHE PLAYERS     │       VISIONARIES
        (Focus segment    │       (Comprennent où va
         précis OU peu    │        le marché mais
         différenciés)    │        n'exécutent pas
                          │        encore bien)
                          │
                  LOW ABILITY TO EXECUTE
```

**Complément Gartner Critical Capabilities** : scoring détaillé des **fonctionnalités critiques** par cas d'usage cible (ex. "Data Science Platforms - Use Case: Automated Machine Learning"). Combinaison MQ (positionnement) + CC (fonctionnalités) = couverture complète.

**Exemple récent vérifié** : Magic Quadrant for Data Science and Machine Learning Platforms 2025 — Leaders : Databricks, AWS, Microsoft, Google, Dataiku, Altair, DataRobot + IBM (passé de Challenger à Leader). *Source : rapports Gartner officiels 2025.*

## Forrester Wave — Méthodologie officielle (mise à jour 2024)

⚠️ **Forrester a supprimé la catégorie "Challengers" en 2024**. Catégories actuelles : **3 segments** (Leaders / Strong Performers / Contenders).

| Catégorie | Définition officielle Forrester |
|---|---|
| **Leaders** | Scores les plus élevés sur l'ensemble des critères, offerings forts, stratégie robuste, présence marché significative |
| **Strong Performers** | Offerings et stratégie solides mais lacunes vs Leaders ; viables pour besoins spécifiques ou forces uniques |
| **Contenders** | Produits et stratégie crédibles mais en retard vs Strong Performers et Leaders |

**3 dimensions d'évaluation** (différenciateur méthodologique vs Gartner MQ qui en a 2) :
1. **Current offering** — capacités actuelles du produit (généralement disponibles, pas roadmap)
2. **Strategy** — crédibilité et différenciation de la direction future
3. **Customer feedback** — évaluation réelle des clients (introduit pour rééquilibrer le biais "vendor stories")

## IDC MarketScape — Méthodologie officielle

**4 catégories** sur 2 axes (Capabilities × Strategies 3-5 ans) :

| Catégorie | Définition |
|---|---|
| **Leaders** | Forces sur l'ensemble des aires de stratégie ET capacités |
| **Major Players** | Forces dans la majorité des aires de stratégie et capacités |
| **Contenders** | Forces, mais limités sur certaines aires (géographie ou features spécifiques) |
| **Participants** | Présence marché limitée, capacités/stratégies en construction |

**Spécificités IDC MarketScape** :
- **Bubble size** = market share du vendor (information de poids marché intégrée à la lecture)
- **+/–** à côté du nom = year-over-year growth rate (croissance vs marché)
- **Capabilities score** = exécution court-terme (produit, go-to-market, business)
- **Strategy score** = alignement stratégie vendor avec besoins clients 3-5 ans

## G2 Grid — Méthodologie peer-based

**4 segments** sur 2 axes (Market Presence × Satisfaction) — **mise à jour trimestrielle** :

| Segment | Critères | Profil typique |
|---|---|---|
| **Leaders** | High Satisfaction + High Market Presence (quadrant haut-droit) | Top du marché ; ~3-4% des produits listés/trimestre |
| **High Performers** | High Satisfaction + Lower Market Presence (haut-gauche) | Souvent petits ou nouveaux produits, excellente UX, brand limitée — terrain des scale-ups |
| **Contenders** | Lower Satisfaction + High Market Presence (bas-droit) | Grands produits connus, reviews mitigées — outils enterprise legacy |
| **Niche** | Lower Satisfaction + Lower Market Presence (bas-gauche) | Servent des segments spécifiques sans satisfaction ni visibilité large |

**Seuils minimum publication** : ≥ 6 produits dans la catégorie, ≥ 10 reviews/produit, ≥ 150 reviews totales. **Market Presence** calculée depuis employee count, revenue estimates, web presence, social, review volume.

## Constellation ShortList — Alternative analyst-curated

**Constellation Research** publie des ShortLists analyst-curated (mise à jour annuelle, parfois semestrielle sur marchés mouvants) — **alternative spécialisée transformation digitale** vs Gartner généraliste. Méthodologie : recherche analyst-led + multi-input (clients early adopters + practitioners + market momentum).

**Quand préférer Constellation ShortList vs Gartner MQ ?**
- Décisions de digital transformation (focus différentiateur Constellation)
- Early adopters / innovation-driven leaders
- Marchés très récents pas encore couverts par Gartner MQ

## Peer review platforms — Contrepoids cabinet analyste

| Plateforme | Particularité | Usage privilégié |
|---|---|---|
| **Gartner Peer Insights** | Reviews vérifiées entreprise (no anonymous), couverture étendue | Validation indépendante vs Gartner MQ (anti-biais payant) |
| **G2** | Reviews larges B2B SaaS, 100k+ produits | Satisfaction utilisateur effective, scale-ups |
| **TrustRadius** | Reviews enterprise B2B vérifiées, méthodo qualitative riche | Reviews détaillées DSI/IT |
| **Capterra** | SMB-focused, large catalogue, free reviews | PME, premiers benchmarks |
| **Software Advice** | Comparatifs + recommandations gratuites (sister Capterra) | Gartner Group portfolio (vs sœur Peer Insights enterprise) |
| **GetApp** | Filtrage par features, intégrations | Scoring par feature précis |

**Anti-pattern** : se reposer uniquement sur Gartner MQ (vendor-paid) sans contre-poids peer reviews → biais possible vers les payeurs.

## Forrester TEI — Total Economic Impact

Méthodologie Forrester Consulting (20+ ans) pour évaluation économique d'investissement technologique sur **3 ans** — **4 composantes** :

| Composante | Définition |
|---|---|
| **Cost** | Toutes dépenses nécessaires : licences, intégration, formation, RUN, support, migration |
| **Benefits** | Valeur business délivrée par le produit (revenue, économies, productivité, time-to-value) |
| **Flexibility** | Valeur future (réversibilité, capacité d'extension, optionalité stratégique) |
| **Risk** | Incertitudes ajustées (technologie, mise en œuvre, adoption, fournisseur) — risk-adjustment Monte Carlo possible |

**Processus 4 phases** :
1. **Research Phase** : interviews stakeholders + analystes — collecte données
2. **Composite Organization** : Forrester construit une "organisation type" représentative des interviewés (3-5 entreprises)
3. **Financial Modeling** : modèle financier 3 ans + scénarios best/worst case
4. **Risk-adjustment** : pondération des incertitudes sur Cost et Benefits

**Pondération clé** : "Equal weight on the measure of benefits and the measure of costs" — analyse équilibrée valeur ↔ coût.

## Kraljic Matrix (1983) — Stratégie procurement appliquée à l'IA

Modèle Peter Kraljic (*Purchasing Must Become Supply Management*, HBR 1983) — segmentation des achats sur 2 axes (Profit Impact × Supply Risk) — applicable au sourcing IA :

| Catégorie | Profit Impact × Supply Risk | Stratégie sourcing IA |
|---|---|---|
| **Strategic items** | High × High | LLM critique (Claude/GPT-4o sur cas régulé) → partenariat stratégique long terme + dual-sourcing |
| **Bottleneck items** | Low × High | Solution niche obligatoire (ex. seul vendor RAG sectoriel) → sécuriser disponibilité + contrats SLA durs |
| **Leverage items** | High × Low | Catégorie commodity (Azure AI APIs, AWS Bedrock APIs) → mise en concurrence, multi-sourcing |
| **Non-critical items** | Low × Low | Outils auxiliaires (chatbot interne, traduction batch) → standardisation, prix bas |

**Application IA** : classer chaque solution IA candidate selon ces 4 catégories conditionne la stratégie RFP, le nombre de fournisseurs à shortlister, et les clauses contractuelles (lock-in, exit, SLA, IP).

## ISO/IEC 25010:2023 — Quality Model (Edition 2, novembre 2023)

**9 caractéristiques** structurant la grille critères benchmark (mise à jour majeure vs Edition 1 de 2011) :

| Caractéristique | Description |
|---|---|
| **Functional Suitability** | Capacité du produit à fournir les fonctions répondant aux besoins (Completeness · Correctness · Appropriateness) |
| **Performance Efficiency** | Performance vs ressources utilisées (Time behaviour · Resource utilization · Capacity) |
| **Compatibility** | Capacité d'échanger des informations avec d'autres systèmes (Co-existence · Interoperability) |
| **Interaction Capability** *(nouveau 2023)* | Utilisabilité élargie (Appropriateness recognizability · Learnability · Operability · User error protection · UI aesthetics · Accessibility · **Inclusivity** · **Self-descriptiveness**) |
| **Reliability** | Maintien performance dans conditions données (Faultlessness · Availability · Fault tolerance · Recoverability) |
| **Security** | Protection information & données (Confidentiality · Integrity · Non-repudiation · Accountability · Authenticity · **Resistance** nouveau) |
| **Maintainability** | Effectivité des modifications (Modularity · Reusability · Analysability · Modifiability · Testability) |
| **Flexibility** *(remplace Portability 2011)* | Adaptabilité à différents contextes (Adaptability · Scalability · Installability · Replaceability) |
| **Safety** *(nouveau 2023)* | Sécurité opérationnelle (Operational constraint · Risk identification · Fail safe · Hazard warning · Safe integration) |

→ Utiliser ces 9 caractéristiques comme **squelette de grille critères benchmark** garantit couverture exhaustive (vs 8 caractéristiques de la version 2011 obsolète).

## Méthode benchmark structurée 6 étapes (RFI → Shortlist → RFP → POC → TCO → Décision)

```
1. Cadrage & critères pondérés
   ├── Must-haves (éliminatoires) — Kraljic Strategic/Bottleneck items
   ├── Should-haves (différenciants) — pondération 1-5
   └── Nice-to-haves (bonus) — pondération < 1

2. Long list & RFI (Request For Information)
   ├── 8-15 solutions candidates (revue analystes + peer reviews + bouche-à-oreille)
   ├── Questionnaire RFI 30-50 questions (capacités, références, prix indicatif)
   └── Réponses sous 2-3 semaines

3. Shortlist — 3-5 solutions maximum (anti-paralysie décisionnelle)

4. RFP (Request For Proposal) sur shortlist
   ├── Cahier des charges détaillé (cas d'usage, volumes, SLA, conformité)
   ├── Démos techniques structurées (script identique)
   └── Réponses chiffrées + références clients secteur

5. POC technique sur 1-2 cas d'usage prioritaires
   ├── Durée 4-8 semaines, périmètre maîtrisé
   ├── Critères de succès objectifs définis avant POC
   └── Conditions production-like (charge, intégration, sécu)

6. Évaluation finale + TCO 3-5 ans + TEI + Décision
   ├── Grille pondérée scorée par évaluateurs indépendants
   ├── TCO consolidé sur 3-5 ans (cf. section TCO)
   ├── Forrester TEI (Cost + Benefits + Flexibility + Risk)
   └── Recommandation argumentée + ADR (Architecture Decision Record)
```

## TCO 3-5 ans — Composantes complètes

| Catégorie | Postes typiques |
|---|---|
| **Licences / Souscriptions** | Coût récurrent annuel par user/usage/feature |
| **Intégration initiale** | Connecteurs SI, ETL, sécurité, identité (SSO/SCIM), migration data |
| **Formation** | Formation équipes IT + utilisateurs métier (initiale + récurrente) |
| **RUN / Support** | Hébergement (si on-prem), SRE/Ops, support N1/N2/N3 |
| **Maintenance** | Patches sécu, montées de version, dette technique |
| **Conformité** | Audits, certifications (ISO 27001/42001), DPIA, third-party risk DORA |
| **Exit / Réversibilité** | Coût de migration vers alternative en fin de vie contrat |

**Cible analyse** : TCO 3 ans minimum (5 ans pour SI core/critique). Calcul **par scénario** (Conservatif / Probable / Optimiste).

## Exemple chiffré sectoriel — Groupe industriel manufacturier européen

**Contexte anonymisé** : groupe industriel manufacturier européen (12 sites de production, ~8 500 collaborateurs, CA ~1.2 Md€). Programme **"Smart Factory 2026"** — sélection d'une plateforme MLOps unifiée + computer vision qualité (3 sites pilotes) + maintenance prédictive (5 sites pilotes). Mission benchmark 4 mois.

**Cadrage Kraljic Matrix appliqué** :
- Plateforme MLOps : **Strategic item** (High Impact × High Risk) → partenariat 5+ ans, dual-sourcing acceptable
- Computer vision qualité : **Bottleneck item** (Low Impact × High Risk car niche industrielle) → sécurisation contrat + clauses lock-in modérées
- Maintenance prédictive : **Leverage item** (High Impact × Low Risk car offre concurrentielle large) → mise en concurrence vigoureuse

**Long list (RFI 12 candidats)** : Databricks · Dataiku · DataRobot · Azure ML · AWS SageMaker · Google Vertex AI · Domino Data Lab · H2O.ai · Snowflake · Iguazio · cnvrg.io · Anaconda Enterprise

**Shortlist 5 finalistes (post-RFI)** : **Databricks · Dataiku · DataRobot · Azure ML · AWS SageMaker** (alignement Gartner MQ 2025 Leaders Data Science & ML Platforms + Forrester Wave Strong Performers + peer reviews Gartner Peer Insights/G2 cohérentes).

**Grille pondérée ISO/IEC 25010:2023 (extrait, 28 critères au total)** :

| Caractéristique 25010 | Pondération | Critères clés benchmark |
|---|:---:|---|
| Functional Suitability | 20% | AutoML, NLP, computer vision native, LLM intégration, gouvernance MLOps |
| Performance Efficiency | 12% | Latence inférence, throughput, scaling auto, coût par prédiction |
| Compatibility | 10% | Connecteurs SAP/PLC industriels, formats ONNX/PMML, multi-cloud |
| Interaction Capability | 8% | UI data scientists, citizen AI mode, accessibilité, docs |
| Reliability | 10% | SLA 99.9%+, MTBF, disaster recovery, RTO/RPO |
| Security | 12% | ISO 27001/42001, SOC 2 Type II, encryption, IAM, audit logs |
| Maintainability | 8% | CI/CD modèles, versioning, A/B testing, drift detection |
| Flexibility | 10% | Multi-cloud, on-prem option, scaling horizontal, hybrid edge |
| Safety | 10% | AI Act haut risque OK (manufacturing safety-critical), fail-safe, hazard warning |

**RFP + POC (2 cas d'usage, 6 semaines/finaliste sur top 3)** : computer vision détection défauts soudure (cas 1) + maintenance prédictive sur 3 lignes critiques (cas 2). 5 fournisseurs invités, 3 retenus pour POC (Databricks, Dataiku, DataRobot).

**TCO 5 ans comparatif (extrait, scénario probable)** :

| Finaliste | Licences | Intégration | Formation | RUN | Maintenance | Exit | TCO 5 ans |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Databricks | 1.8 M€ | 0.8 M€ | 0.4 M€ | 0.6 M€ | 0.3 M€ | 0.3 M€ | **4.2 M€** |
| Dataiku | 1.4 M€ | 1.0 M€ | 0.5 M€ | 0.7 M€ | 0.4 M€ | 0.4 M€ | **4.4 M€** |
| DataRobot | 2.1 M€ | 0.7 M€ | 0.3 M€ | 0.5 M€ | 0.3 M€ | 0.3 M€ | **4.2 M€** |

**Forrester TEI 3 ans (composite organization manufacturier)** :
- Cost : 2.8 M€
- Benefits : 6.2 M€ (réduction taux rebut, gain MTBF, productivité, disponibilité ligne)
- Flexibility : positive (extension à 9 autres sites possible)
- Risk : -0.4 M€ (risk-adjusted Monte Carlo P80)
- **NPV 3 ans : +3.0 M€ · Payback : 22 mois · ROI 3 ans : 107%**

**Décision tracée (ADR)** : **Databricks** (Leader Gartner MQ 2025 DSML + score grille pondérée 4.1/5 + POC concluant + TCO compétitif + différenciation Lakehouse architecture utile pour intégration SAP + maintenance prédictive Senseye en intégration partenaire).

**Solutions complémentaires retenues** : **Cognex** (computer vision industrielle, leader niche Bottleneck) + **Senseye** (maintenance prédictive, racheté Siemens, intégration Databricks native).

**Gains projetés sur 3 sites pilotes T+18 mois** :
- Taux rebut : 3.8% → **2.8%** (-26%)
- MTBF lignes critiques : 720h → **970h** (+35%)
- Disponibilité ligne : 87% → **95%** (+8 pts)
- Investissement 5 ans : **4.2 M€** plateforme + **2.5 M€** intégration computer vision/maintenance prédictive = 6.7 M€
- ROI consolidé : **22 mois**, NPV 3 ans +3.0 M€, gain récurrent ~2 M€/an post-déploiement étendu 9 autres sites

## 8 anti-patterns benchmark solutions IA

- ❌ **Benchmark sans pondération critères** (chaque évaluateur priorise différemment) → résultat aléatoire, non défendable en COSTRAT
- ❌ **Shortlist > 5 solutions** → analyse paralysie, POC trop coûteux, décision retardée
- ❌ **Pas de POC technique** (décision purement théorique sur démo vendor) → mauvaise surprise en production
- ❌ **TCO sur 1 an** au lieu de 3-5 ans → masque les coûts RUN, montées de version, exit
- ❌ **Confondre Gartner Magic Quadrant et Forrester Wave** (méthodos différentes : 2 axes Gartner vs 3 dimensions Forrester, 4 catégories Gartner vs 3 Forrester depuis 2024)
- ❌ **Ignorer peer reviews** (Gartner Peer Insights, G2, TrustRadius) comme contrepoids cabinet conseil payés
- ❌ **Pas de critères de sortie / réversibilité** dans le RFP → lock-in éditeur, coût d'exit prohibitif
- ❌ **Décision sans test conditions production** (charge, intégration SI, sécu, conformité) → POC sandbox ≠ réalité production

## Outils

- **Plateformes analystes** : Gartner Subscriptions (Magic Quadrant + Peer Insights + Critical Capabilities + Hype Cycle) · Forrester Decisions · IDC Research · Constellation Research
- **Peer reviews & comparison** : G2 · TrustRadius · Capterra · GetApp · Software Advice · PeerSpot · ProcessUnity (TPRM)
- **RFP/RFI management** : Loopio · RFPIO · QorusDocs · Responsive (formerly RFPIO) · Notion (templates open source)
- **Grilles pondérées & scoring** : Excel/Google Sheets templates · Smartsheet · Airtable · DecisionLink
- **TCO/TEI calculators** : Forrester TEI calculator (par vendor partenaire) · Vendor TCO calculators (Databricks, Snowflake, etc.) · Custom Excel
- **POC tracking** : Confluence (documentation POC) · Notion · Jira (tickets/anomalies POC)

## Livrables

- **Cadre benchmark structuré** (charte mission + critères pondérés + Kraljic positioning)
- **Long list RFI + Shortlist + RFP** documents standardisés
- **Grille de benchmark pondérée** (ISO/IEC 25010:2023, 9 caractéristiques)
- **Résultats POC structurés** (cas d'usage, critères succès, résultats mesurés)
- **TCO comparatif 3-5 ans** (3 scénarios : Conservatif/Probable/Optimiste)
- **Forrester TEI** (Cost + Benefits + Flexibility + Risk, NPV 3 ans, Payback)
- **Recommandation argumentée** (executive 1-2 pages + détail technique 10-20 pages)
- **ADR** (Architecture Decision Record) signé tracé pour gouvernance future
- **Plan de réversibilité / exit** documenté (clauses contractuelles, coût migration)
- **Reporting COSTRAT décisionnel** (5-10 slides) avec recommandation finale

## Format de sortie

Pour chaque mission benchmark, précise :
- **Catégorie solution** : LLM/GenAI · plateforme MLOps · computer vision · maintenance prédictive · RPA+AI · NLP · vector DB · MLOps spécialisé
- **Contraintes** : RGPD, AI Act haut risque, souveraineté (SecNumCloud), DORA banque, MDR santé, ITAR défense, on-prem obligatoire
- **Stack existante** : cloud principal, langages, frameworks, identité (Active Directory/Okta)
- **Critères prioritaires** : performance · coût · time-to-market · différenciation · réversibilité · conformité
- **Délai de décision** : urgent (< 2 mois light benchmark) · standard (3-6 mois RFP+POC) · stratégique (6-9 mois full TEI)
- **Budget benchmark** : light (15-30 K€ desk research + grille) · standard (40-80 K€ + RFP + 1 POC) · approfondi (100-200 K€ + 2 POC + TEI complet)

## Sources

- **Gartner Magic Quadrant Research Methodology** — Gartner Research (méthodologie publique) — 2 axes, 4 quadrants
- **Forrester Wave™ Methodology** — Forrester Research (mise à jour 2024 : suppression de la catégorie Challengers ; 3 catégories actuelles)
- **IDC MarketScape Methodology** — International Data Corporation (4 catégories Leaders/Major Players/Contenders/Participants)
- **G2 Grid Methodology** — G2 Inc. (mise à jour trimestrielle, 4 segments Leaders/High Performers/Contenders/Niche)
- **Constellation ShortList** — Constellation Research (analyst-curated, mise à jour annuelle, focus digital transformation)
- **Forrester Total Economic Impact (TEI) Methodology** — Forrester Consulting (méthodo 20+ ans, 4 composantes Cost/Benefits/Flexibility/Risk sur 3 ans)
- **Kraljic P.** — *Purchasing Must Become Supply Management*, Harvard Business Review (1983) — matrice 2×2 sourcing portfolio
- **ISO/IEC 25010:2023** — *Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model* (Edition 2, novembre 2023) — 9 caractéristiques qualité
- **NIST SP 800-145** — *The NIST Definition of Cloud Computing* (2011) — définitions cloud essentielles pour critères benchmark
- **Gartner Magic Quadrant for Data Science and Machine Learning Platforms 2025** — Leaders : Databricks, AWS, Microsoft, Google, Dataiku, Altair, DataRobot, IBM
- **Gartner Magic Quadrant for Cloud AI Developer Services 2024** — Leaders : Microsoft, Google
- **Gartner Peer Insights** — plateforme reviews entreprise vérifiées (contrepoids MQ)

## Voir aussi

- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — diagnostic préalable maturité IA (8 dimensions) avant benchmark solutions
- [feuille-route-ia.md](feuille-route-ia.md) — feuille de route IA, séquençage des benchmarks par initiative
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — chiffrage ROI rapide en amont du benchmark approfondi
- [proposition-commerciale.md](proposition-commerciale.md) — réponse RFP (côté fournisseur, miroir de la méthode RFI/RFP côté client)
- [cadrage-poc-ia.md](cadrage-poc-ia.md) — cadrage POC dans la méthode benchmark (étape 5)
- [transformation-digitale.md](transformation-digitale.md) — programme transformation où les benchmarks s'insèrent
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — Risk Register projet + ICT Third-Party Risk DORA (clauses contractuelles benchmark)
- [`../business_analyst/cadrage-projet.md`](../business_analyst/cadrage-projet.md) — arbre Build/Buy/SaaS/Lease + Business Case (cf. cadrage amont du benchmark)
- [`../business_analyst/pilotage-projet.md`](../business_analyst/pilotage-projet.md) — pilotage du programme de mise en œuvre post-benchmark
