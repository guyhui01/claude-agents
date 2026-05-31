# Skill — Feuille de Route IA
> Certifications : CAP IABAC · Azure AI-900 · PMI-ACP

## Objectif
Construire une roadmap IA **réaliste, priorisée et séquencée**, alignée sur les objectifs business, la maturité data de l'organisation et les jalons réglementaires (AI Act). Une bonne feuille de route arbitre explicitement entre valeur rapide (quick wins) et initiatives structurantes, et rend visible le « pourquoi maintenant » de chaque vague.

## Cadre méthodologique
- **McKinsey — Three Horizons of Growth** (Baghai, Coley, White, *The Alchemy of Growth*, 1999) — allouer simultanément l'effort sur 3 horizons (cœur / émergent / options), classiquement en ratio indicatif **70-20-10**. Adapté ici à la cadence IA (l'IA va plus vite que la stratégie corporate d'origine).
- **Priorisation** : matrice **Valeur × Complexité × Maturité data**, complétée par une méthode de scoring :
  - **WSJF** (Weighted Shortest Job First, SAFe — d'après D. Reinertsen, *Principles of Product Development Flow*, 2009) : `WSJF = Coût du retard / Durée du job`, où le coût du retard = valeur métier + criticité temporelle + réduction de risque/ouverture d'opportunité.
  - **RICE** (Intercom, 2016) : `(Reach × Impact × Confidence) / Effort`.
- **Now-Next-Later** (Janna Bastow / ProdPad) — format de roadmap par niveaux de confiance plutôt que par dates fermes ; utile en environnement incertain (l'IA en est un).

## Structure de la feuille de route IA (3 horizons adaptés)
```
Horizon 1 (0-6 mois)   : Quick wins — valeur rapide, faible complexité, données disponibles
Horizon 2 (6-18 mois)  : Initiatives structurantes — valeur forte, complexité moyenne
Horizon 3 (18-36 mois) : Transformation — impact majeur, complexité et dépendances élevées
```
> Inspiré des 3 Horizons McKinsey, recalé sur la cadence IA. La règle d'or : **financer H1 par des gains réels qui crédibilisent H2 et H3**, sans starver l'innovation long terme.

## Matrice de priorisation des initiatives IA
| Initiative | Valeur Business | Complexité | Maturité Data | Score (WSJF/RICE) | Priorité |
|---|---|---|---|---|---|
| (ex.) Assistant interne RH/SI | Haute | Faible | Bonne | élevé | ⭐⭐⭐ |
| (ex.) Prédiction (churn/demande) | Haute | Moyenne | Moyenne | moyen | ⭐⭐ |
| (ex.) Vision / contrôle qualité | Moyenne | Élevée | Faible | faible | ⭐ |

> Renseigner le score avec **une seule méthode cohérente** sur tout le portefeuille (ne pas mélanger WSJF et RICE dans la même grille).

## Critères de sélection d'un cas d'usage IA
- **Valeur métier** : impact sur le CA, les coûts ou la satisfaction (chiffré).
- **Faisabilité technique** : données disponibles et de qualité, modèles existants.
- **Maturité organisationnelle** : équipe capable de porter et d'exploiter le cas d'usage.
- **Time-to-value** : délai avant les premiers résultats mesurables.
- **Risque** : technique, éthique, et **réglementaire (classification AI Act)**.

## Intégrer les jalons réglementaires (AI Act) dans la roadmap
La feuille de route doit porter les échéances de conformité comme des jalons à part entière :
| Échéance | Obligation | Implication roadmap |
|---|---|---|
| **02/02/2025** | Pratiques interdites + AI literacy | Retirer/écarter tout cas d'usage prohibé ; plan d'acculturation |
| **02/08/2025** | Obligations GPAI (modèles à usage général / LLM) | Documenter l'usage des LLM, fournisseurs conformes |
| **02/08/2026** | Systèmes à haut risque (Annexe III : emploi, crédit, etc.) | Conformité avant mise en prod des cas d'usage haut risque |
| **02/08/2027** | Applicabilité pleine | Mise en conformité du parc existant (dont GPAI antérieurs) |

## Format de la roadmap
```
Q1 2026   : [Initiative 1] — Quick win
            [Initiative 2] — Quick win
Q2 2026   : [Initiative 3] — Structurante (lancement) + jalon conformité AI Act
Q3-Q4 2026: [Initiative 3] — Structurante (déploiement)
2027      : [Initiative 4] — Transformation
```

## KPIs de succès de la feuille de route
- Nombre de cas d'usage **en production** à M+6, M+12, M+24 (vs PoC, pour éviter le PoC graveyard).
- ROI cumulé des initiatives IA livrées.
- Taux d'adoption par les utilisateurs.
- Niveau de maturité IA atteint vs cible (couplage diagnostic de maturité).
- Taux de conformité AI Act des cas d'usage en prod.

## Exemple — Secteur public / collectivité territoriale (anonymisé)
**Contexte** : collectivité (~6 500 agents, ~400 000 administrés). Contraintes : RGPD, AI Act (certains services = haut risque), commande publique, souveraineté/hébergement, défiance citoyenne.
- **H1 (0-6 mois)** : assistant de recherche dans la base documentaire interne (GED), pré-réponse aux demandes usagers récurrentes — données disponibles, risque limité.
- **H2 (6-18 mois)** : optimisation de la maintenance préventive du patrimoine (voirie, bâtiments) ; détection d'anomalies sur les flux financiers — jalon de conformité AI Act avant prod.
- **H3 (18-36 mois)** : plateforme data territoriale + cas d'usage prédictifs transverses (mobilité, énergie).
- **Garde-fous** : aucun usage de scoring social (interdit) ; transparence renforcée vis-à-vis des administrés ; clauses IA dans les marchés publics.

> Horizons et périmètres **illustratifs** : à recalibrer selon la maturité data réelle et le cadre d'achat public.

## Anti-patterns
- **Roadmap = liste de jouets technos** : empiler des cas d'usage « cool » sans valeur métier priorisée.
- **Tout en Horizon 3** : que des projets transformationnels, aucun quick win → perte de crédibilité et de budget.
- **Priorisation à l'intuition** : pas de scoring partagé → arbitrages politiques opaques.
- **Ignorer la maturité data** : roadmap ambitieuse sur des données inexploitables (1ʳᵉ cause d'échec).
- **Conformité réglementaire en pièce rapportée** : AI Act traité après coup → blocage en fin de cycle.
- **Roadmap figée en dates fermes** sur 36 mois : préférer Now-Next-Later au-delà de H1.

## Livrables
- Feuille de route IA illustrée (PowerPoint / Miro), 3 horizons + jalons conformité
- Fiche de cadrage par initiative prioritaire (couplée cadrage-poc)
- Business case synthétique (H1)
- Matrice de priorisation scorée (WSJF ou RICE)
- Plan de gouvernance IA associé

## Format de sortie
Précise : résultats du diagnostic de maturité · secteur · budget · horizon cible · contraintes réglementaires (AI Act niveau de risque, RGPD) · méthode de priorisation retenue (WSJF / RICE).

## Sources
- **Baghai M., Coley S., White D.** — *The Alchemy of Growth* (1999) — McKinsey Three Horizons of Growth (allocation 70-20-10)
- **Reinertsen D.** — *The Principles of Product Development Flow* (2009) — Cost of Delay, base du WSJF (SAFe)
- **Scaled Agile (SAFe)** — *Weighted Shortest Job First (WSJF)* — priorisation par coût du retard
- **Intercom** — *RICE scoring model* (Sean McBride, 2016) — Reach × Impact × Confidence / Effort
- **Bastow J. (ProdPad)** — *Now-Next-Later roadmap* — roadmap par niveaux de confiance
- **AI Act UE** — Règlement (UE) 2024/1689 — calendrier d'application : interdictions 02/02/2025, GPAI 02/08/2025, haut risque 02/08/2026, applicabilité pleine 02/08/2027

## Voir aussi
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — diagnostic en amont alimentant la roadmap
- [cadrage-poc-ia.md](cadrage-poc-ia.md) — cadrage de chaque initiative prioritaire
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — business case par initiative (H1)
- [transformation-digitale.md](transformation-digitale.md) — programme de transformation englobant
- [presentation-executif.md](presentation-executif.md) — restitution de la roadmap au CODIR
- [`../scrum/po-ai-product.md`](../scrum/po-ai-product.md) — déclinaison produit IA (vision, backlog)
- [`../safe/program-backlog.md`](../safe/program-backlog.md) — priorisation WSJF au niveau programme
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — conformité AI Act opérationnelle
