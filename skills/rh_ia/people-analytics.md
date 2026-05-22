# Skill — People Analytics & KPIs RH
> Certifications : PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objectif
Construire des tableaux de bord RH orientés données pour piloter le recrutement IT/IA, mesurer la performance RH et produire des reportings CODIR actionnables.

## KPIs Recrutement — Référentiel

```
EFFICACITÉ DU RECRUTEMENT
──────────────────────────────────────────────────────
Time to Fill        : Nb jours entre ouverture du poste et signature offre
                      Benchmark IT France : 45-60 jours (senior : 60-90j)
Time to Hire        : Nb jours entre 1er contact candidat et offre acceptée
                      Benchmark IT France : 20-30 jours
Cost per Hire       : (Coûts internes + externes) / Nb recrutements
                      Benchmark : 3 000-8 000 € (IT confirmé)
Offer Acceptance    : % d'offres acceptées / offres émises
                      Cible : > 85%

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
                      Benchmark : 25-35% (personnalisés) / 10-15% (génériques)
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
                       Benchmark IT France : 15-25% / an
Turnover volontaire  : Départs à l'initiative du salarié
Turnover involontaire: Licenciements, fins de mission
Early Attrition      : % départs < 12 mois (signal fort de mauvais recrutement)
                       Cible : < 10%

ABSENTÉISME
──────────────────────────────────────────────────────
Taux d'absentéisme   : (Jours absents / Jours théoriques) × 100
                       Benchmark : < 4% (secteur tech)

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
