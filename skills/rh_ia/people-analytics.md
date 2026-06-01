# Skill — People Analytics & KPIs RH
> Certifications : PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objectif
Construire des tableaux de bord RH orientés données pour piloter le recrutement IT/IA, mesurer la performance RH et produire des reportings CODIR actionnables.

## KPIs Recrutement — Référentiel

> ⚠️ **Ordres de grandeur indicatifs, à valider sur ton périmètre.** Les valeurs ci-dessous
> ne sont **pas des benchmarks marché sourcés** : elles servent de repères de cadrage à
> recalibrer. Pour des références chiffrées, s'appuyer sur des baromètres datés (ex. SHRM
> Recruiting Benchmarking — données US ; APEC / Numeum pour la France) et **mesurer son
> propre baseline**.

```
EFFICACITÉ DU RECRUTEMENT
──────────────────────────────────────────────────────
Time to Fill        : Nb jours entre ouverture du poste et signature offre
                      Ordre de grandeur indicatif : ~45-60 j (senior plus long) — à valider
Time to Hire        : Nb jours entre 1er contact candidat et offre acceptée
                      Ordre de grandeur indicatif : ~20-30 j — à valider
Cost per Hire       : (Coûts internes + externes) / Nb recrutements
                      Coût complet par embauche — mesurer son propre baseline
Offer Acceptance    : % d'offres acceptées / offres émises
                      Cible interne usuelle : > 85% (à fixer selon contexte)

QUALITÉ DU RECRUTEMENT
──────────────────────────────────────────────────────
Quality of Hire     : Note manager à 3 mois + 6 mois (évaluation intégration)
                      Score cible : ≥ 4/5
Retention 12 mois   : % des recrutés encore présents à 12 mois
                      Cible IT : > 80%
Hiring Manager Sat. : Score satisfaction manager sur le profil recruté
                      Cible : ≥ 4/5

SOURCING
──────────────────────────────────────────────────────
Source of Hire      : % candidats par canal (LinkedIn / referral / jobboard)
Pipeline conversion : Candidatures → shortlist → entretien → offre → embauche
InMail Response Rate: % de réponses aux InMails LinkedIn
                      Ordre de grandeur : messages personnalisés nettement > génériques
                      (mesurer son propre taux ; ne pas figer un chiffre marché)
```

## Dashboard Recrutement IT — Template

```
DASHBOARD RECRUTEMENT — [Mois] [Année]
──────────────────────────────────────────────────────────────────
PIPELINE EN COURS
Postes ouverts       : [N]
Candidats en process : [N]   (Sourcing: N · Qualif: N · Entretiens: N · Offre: N)
Offres émises        : [N]   Acceptées : [N] ([%])

PERFORMANCE DU MOIS
Time to Fill moyen   : [N] jours  (vs objectif : 60j)    [▲/▼ vs M-1]
Time to Hire moyen   : [N] jours  (vs objectif : 25j)    [▲/▼ vs M-1]
Cost per Hire moyen  : [N] €      (vs budget : X €)      [▲/▼ vs M-1]
Quality of Hire (3m) : [N]/5      (cible : ≥ 4/5)        [▲/▼ vs M-1]

SOURCE OF HIRE
LinkedIn Recruiter   : [N] %
Referral/Cooptation  : [N] %
Jobboards (WTTJ etc) : [N] %
Approche directe     : [N] %

ACTIONS REQUISES
⚠ [Poste X] : Time to Fill > 75j → revoir brief ou élargir sourcing
⚠ [Poste Y] : 0 candidat qualifié → ajuster critères avec manager
```

## KPIs Workforce & Rétention

```
TURNOVER & RÉTENTION
──────────────────────────────────────────────────────
Turnover global      : (Départs / Effectif moyen) × 100
                       Ordre de grandeur indicatif (à valider) — varie fortement par secteur/zone
Turnover volontaire  : Départs à l'initiative du salarié
Turnover involontaire: Licenciements, fins de mission
Early Attrition      : % départs < 12 mois (signal fort de mauvais recrutement)
                       Cible : < 10%

ABSENTÉISME
──────────────────────────────────────────────────────
Taux d'absentéisme   : (Jours absents / Jours théoriques) × 100
                       Comparer à son propre historique et à des sources sectorielles datées

ENGAGEMENT
──────────────────────────────────────────────────────
eNPS (Employee NPS)  : "Recommanderiez-vous cette entreprise ?" (0-10)
                       Score > 30 = bon · > 50 = excellent
Satisfaction Pulse   : Enquête mensuelle courte (3-5 questions, outil : Officevibe)
```

## Rapport CODIR RH — Template mensuel

```markdown
# Rapport RH — [Mois AAAA]
## Synthèse exécutive (3 lignes)
[KPI principal : N recrutements finalisés / N postes ouverts / Time to fill moyen]

## Recrutement IT/IA
| Poste | Ouverture | Statut | TTH actuel | Risque |
|---|---|---|---|---|
| Lead ML Engineer | J-45 | Entretiens (3) | 45j | Faible |
| PO IA Senior | J-62 | Sourcing | 62j | ⚠ Élevé |

## Indicateurs clés
| KPI | Mois | Objectif | Tendance |
|---|---|---|---|
| Time to Fill | 52j | 60j | ✅ |
| Offer Acceptance | 78% | 85% | ⚠ |
| Quality of Hire | 4.1/5 | 4.0/5 | ✅ |
| Turnover 12m | 18% | <20% | ✅ |

## Points d'attention & décisions requises
- [Action 1 : description + responsable + délai]
- [Action 2]

## Prévisions M+1
[Postes à ouvrir, budget estimé, risques anticipés]
```

## Livrables
- Dashboard recrutement mensuel (Excel, Notion ou Power BI)
- Rapport CODIR RH (1-2 pages)
- Analyse source of hire avec recommandations de réallocation budget sourcing
- Rapport de qualité de recrutement (Quality of Hire à 3 et 6 mois)

## Format de sortie
Précise : volume de recrutements, outils RH disponibles (ATS, SIRH), périmètre (toute l'entreprise ou équipe IT), période analysée, audience du reporting (DRH, CODIR, managers).

## Anti-patterns
- ❌ Afficher un « benchmark France » chiffré sans source datée ni baseline mesuré sur le périmètre.
- ❌ Comparer des KPIs sans normaliser le périmètre (séniorité, zone, type de poste) → comparaisons trompeuses.
- ❌ Traiter des données RH personnelles sans base légale, minimisation ni durée de conservation (RGPD).
- ❌ Piloter sur un seul KPI (ex. Time to Fill) au détriment de la qualité (Quality of Hire, rétention).
- ❌ People analytics prédictif (turnover) sans transparence ni supervision humaine (risque biais/discrimination).

## Sources
- SHRM — Recruiting Benchmarking Report (données US, repère méthodologique) — shrm.org
- APEC / Numeum (Syntec Numérique) — données emploi IT France — apec.fr · numeum.fr
- DAMA-DMBOK 2 (2017) — gouvernance et qualité des données RH
- RGPD UE 2016/679 — art. 5 (minimisation), art. 22 (décision automatisée) — cnil.fr
- eNPS — interprétation d'échelle standard (Reichheld, *The Ultimate Question*, 2006)

## Voir aussi
- `skills/rh_ia/recrutement-sourcing-it.md` — pipeline et sourcing (source of hire)
- `skills/rh_ia/transformation-rh-ia.md` — automatisation et ROI du recrutement
- `skills/rh_ia/benchmark-remuneration-it.md` — repères rémunération
- `skills/juridique_ia/` — conformité RGPD du traitement de données RH
