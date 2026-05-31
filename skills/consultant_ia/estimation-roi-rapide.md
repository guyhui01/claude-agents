# Skill — Calcul ROI d'un Projet IA
> Certifications : CAP IABAC · AI+ Business · PMI-ACP

## Objectif
Construire un business case IA **crédible et défendable** : un calcul de ROI étayé par une méthode financière reconnue, des hypothèses traçables et des scénarios — pour convaincre les décideurs sans surpromettre. Repère de réalisme à poser d'emblée : selon McKinsey (*The State of AI*, 2024-2025), **plus de 80 % des organisations ne constatent pas encore d'impact EBIT tangible au niveau entreprise** lié à l'IA générative ; la valeur se capte surtout au niveau des processus redessinés. Un bon business case raisonne donc en **gains processus mesurables**, pas en promesse macro.

## Cadre méthodologique de valorisation
- **NPV / VAN, IRR / TRI, Payback** — fondamentaux de l'évaluation d'investissement (actualisation des flux).
- **Forrester Total Economic Impact™ (TEI)** — framework standard (20+ ans) en **4 composantes** : *Benefits*, *Costs*, *Flexibility* (valeur optionnelle d'investissements futurs), *Risk* (probabilité que coûts/bénéfices dévient). L'ajout du risque et de la flexibilité donne au business case sa crédibilité.
- **Gartner TCO (Total Cost of Ownership)** — coût complet sur le cycle de vie (build + run + change + sortie), au-delà du seul coût projet.
- **Taux d'actualisation** : utiliser le WACC de l'entreprise (souvent 8-12 % en grand compte) — à confirmer avec la DAF, ne pas inventer.

## Structure du Business Case IA

### 1. Investissements (coûts — TCO)
| Poste | Description | Montant estimé |
|---|---|---|
| Développement | PoC, développement, intégration | X € |
| Infrastructure | Cloud, GPU, licences (API LLM à l'usage) | X €/an |
| Données | Collecte, nettoyage, labellisation | X € |
| Change management | Formation, accompagnement, conduite du changement | X € |
| Conformité | Mise en conformité AI Act / RGPD, audit | X € |
| Maintenance (MCO) | Run, monitoring, ré-entraînement, évolutions | X €/an |
| **Total TCO 3 ans** | | **X €** |

### 2. Bénéfices (gains)
| Type | Indicateur | Valeur annuelle |
|---|---|---|
| **Gains directs** | Réduction coûts opérationnels | X € |
| | Automatisation tâches manuelles | X jours/an × coût chargé |
| | Réduction erreurs / retraitements | X € |
| **Gains indirects** | Amélioration satisfaction client | X % → impact CA |
| | Accélération time-to-market | X semaines gagnées |
| | Réduction churn | X % → X € CA préservé |

> Distinguer **gains *hard* (cash, vérifiables)** des **gains *soft* (estimés)** : un CODIR financera surtout sur les premiers. Documenter chaque hypothèse de gain (qui la valide ?).

## Formules clés
```
ROI (%)        = (Gains totaux actualisés - Investissements) / Investissements × 100

Payback        = Investissement initial / Gains annuels nets   (en années)

VAN (NPV)      = Σ [ Flux_n / (1 + taux)^n ] - Investissement initial      (n = 1..N)

TRI (IRR)      = taux qui annule la VAN (VAN = 0)
                 → projet rentable si TRI > coût du capital (WACC)
```
> **VAN > 0** ⇒ projet créateur de valeur. **TRI > WACC** ⇒ rendement supérieur au coût du capital. Présenter les deux : la VAN parle au DAF, le payback rassure le sponsor.

## Méthode de calcul en 5 étapes
1. **Identifier le cas d'usage** : périmètre précis, volume traité, fréquence.
2. **Quantifier l'état actuel (baseline)** : coût/temps actuel mesuré, pas estimé au doigt mouillé.
3. **Estimer l'amélioration IA** : % d'automatisation, réduction d'erreurs — sourcé sur le PoC si disponible.
4. **Projeter sur 3 ans** : courbe de montée en charge réaliste (adoption progressive, pas 100 % à J+1).
5. **Calculer ROI, VAN, TRI, payback** en **3 scénarios** (pessimiste / réaliste / optimiste) + analyse de sensibilité sur les 2-3 hypothèses les plus structurantes.

## Ordres de grandeur ROI par type de cas d'usage *(indicatifs — à calibrer, NON un référentiel)*
> ⚠️ Ces fourchettes sont des **repères de cadrage indicatifs**, pas des données de marché sourcées. Le ROI réel dépend du contexte (volumétrie, maturité data, qualité d'exécution, adoption). Rappel McKinsey : >80 % des organisations ne voient pas encore d'impact EBIT entreprise. **Toujours recalculer sur la baseline réelle du client** — ne jamais présenter ces chiffres comme une promesse.

| Type de cas d'usage | Profil de ROI typique | Payback indicatif |
|---|---|---|
| Automatisation de tâches répétitives (RPA + IA) | Élevé, rapide | Court |
| Génération de contenu / assistance rédaction | Élevé, rapide | Court |
| Chatbot / self-care service client | Moyen à élevé | Moyen |
| Prédiction (churn, demande, défaut) | Moyen, différé | Moyen à long |
| Vision par ordinateur / contrôle qualité | Variable (CAPEX matériel) | Long |

## Exemple chiffré — Logistique / transport (3PL, anonymisé)
**Contexte** : prestataire logistique régional, flotte de ~180 véhicules, ~95 000 livraisons/mois. Projet : IA d'optimisation des tournées de livraison.
- **TCO 3 ans** : ~1,2 M€ *(dev + plateforme + intégration TMS + change + MCO)*.
- **Gains annuels** : −8 % de km parcourus (carburant + heures chauffeur) ≈ 520 K€/an ; −1,5 pt de livraisons en échec ≈ 90 K€/an. Total ≈ 610 K€/an.
- **Résultats** *(taux d'actualisation 9 %, horizon 3 ans, scénario réaliste)* : payback ≈ **14 mois**, VAN ≈ **+0,4 M€**, TRI ≈ **28 %** (> WACC).
- **Scénarios** : pessimiste (−5 % km) payback ~22 mois ; optimiste (−11 %) payback ~10 mois.

> Chiffres **illustratifs** : à recalculer sur la baseline réelle (coût/km, taux d'échec, WACC du client).

## Anti-patterns
- **Gains *soft* présentés comme du cash** : gonfler le ROI avec de la « satisfaction client » non monétisée → un DAF le détecte et décrédibilise tout le dossier.
- **Pas de baseline mesurée** : sans état actuel chiffré, le gain n'est pas démontrable.
- **Montée en charge à 100 % dès J+1** : ignorer la courbe d'adoption surestime le ROI année 1.
- **Oublier le run (MCO)** : compter le build sans le coût récurrent (API LLM à l'usage, ré-entraînement) → TCO sous-évalué.
- **Taux d'actualisation inventé** : confirmer le WACC avec la DAF.
- **Chiffres de marché présentés comme garantie** : les fourchettes ROI sont indicatives, pas contractuelles.
- **Scénario unique** : toujours pessimiste/réaliste/optimiste + sensibilité.

## Livrables
- Business case complet (modèle Excel / Google Sheets paramétrable)
- Synthèse ROI 1 page pour CODIR (VAN, TRI, payback, scénarios)
- 3 scénarios + analyse de sensibilité
- Registre d'hypothèses documentées et validées (propriétaire de chaque hypothèse)

## Format de sortie
Précise : cas d'usage · volume actuel · coût actuel (baseline) · % d'automatisation cible · horizon d'évaluation (1/3/5 ans) · WACC client si connu.

## Sources
- **Forrester** — *Total Economic Impact™ (TEI) Methodology* — 4 composantes Benefits / Costs / Flexibility / Risk (framework standard 20+ ans)
- **McKinsey** — *The State of AI* (2024 « Gen AI adoption spikes and starts to generate value » ; 2025 « How organizations are rewiring to capture value ») — >80 % sans impact EBIT entreprise, valeur via redesign des workflows
- **Gartner** — *Total Cost of Ownership (TCO)* — coût complet sur le cycle de vie
- **Brealey, Myers, Allen** — *Principles of Corporate Finance* — fondamentaux NPV / IRR / payback / actualisation
- **AI Act UE** — Règlement (UE) 2024/1689 — coûts de conformité à intégrer au TCO

## Voir aussi
- [cadrage-poc-ia.md](cadrage-poc-ia.md) — le PoC fournit la mesure réelle pour calibrer le business case
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — priorisation des cas d'usage par ROI
- [proposition-commerciale.md](proposition-commerciale.md) — valorisation dans une offre de mission
- [presentation-executif.md](presentation-executif.md) — restitution du ROI au CODIR
- [`../financial_analyst/business-case-ia.md`](../financial_analyst/business-case-ia.md) — business case IA approfondi
- [`../financial_analyst/roi-transformation.md`](../financial_analyst/roi-transformation.md) — ROI d'un programme de transformation
- [`../financial_analyst/cost-benefit-analysis.md`](../financial_analyst/cost-benefit-analysis.md) — analyse coûts-bénéfices détaillée (VAN/TRI)
