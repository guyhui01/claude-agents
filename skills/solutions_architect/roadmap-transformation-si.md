# Skill — Roadmap de Transformation SI

> Certifications : TOGAF 10 Foundation & Practitioner, PMP, CITA-A (IASA), SAFe LPM

## Objectif

Construire une roadmap de transformation SI réaliste et priorisée : traduire la vision architecturale en plan d'action séquencé, avec jalons, dépendances, ressources et indicateurs de suivi.

## Structure de la roadmap SI

### Horizon Now / Next / Later (Lean Portfolio)

```
NOW (0-6 mois)          NEXT (6-18 mois)          LATER (18-36 mois)
──────────────────────  ──────────────────────    ──────────────────────────────
Quick wins techniques   Transformations majeures  Vision à long terme
Réduction dette urgente Nouveaux services         Architecture cible finale
Sécurité critique       Migrations cloud          Innovations (IA, IoT, etc.)
Stabilisation prod       Intégrations stratégiques Refonte complète legacy
```

### Axes de transformation

```
AXE                    OBJECTIF                           EXEMPLES DE CHANTIERS
─────────────────────  ────────────────────────────────   ──────────────────────────────────
Modernisation          Réduire la dette technique          Migration Java → cloud-native
Data & IA              Valoriser les actifs data           Lakehouse, LLM, analytics
Sécurité               Zéro-trust, conformité IA Act      IAM, SASE, audit LLM
Intégration            API-first, événementiel             API Gateway, Kafka, ESB → iPaaS
Cloud                  CapEx → OpEx, élasticité            Lift & Shift, puis Re-architect
Expérience             UX / Developer Experience           Portail API, self-service
```

## Template roadmap SI (tableau)

```
CHANTIER               AXE          NOW  NEXT  LATER  PRIORITÉ  OWNER
─────────────────────  ───────────  ───  ────  ─────  ────────  ─────────────
Migration BDD Oracle   Cloud        ■    ■■■                Haute    DBA + Archi
API Gateway déploiement Intégration ■■■                     Haute    DevOps
LLM RAG interne        IA           ■    ■■■   ■■■         Moyenne  AI Arch
Décomm. app legacy RH  Modern.           ■■■   ■■■         Moyenne  Chef Projet
Zero Trust IAM         Sécurité     ■■■  ■■■              Haute    RSSI + Archi
Lakehouse data         Data              ■■■   ■■          Haute    CDO + Data Eng
```

## Priorisation des chantiers

```yaml
grille_priorisation:
  criteres:
    valeur_business:
      poids: 30%
      description: "Impact direct sur le chiffre d'affaires ou les coûts"
    risque_reduit:
      poids: 25%
      description: "Réduction d'un risque opérationnel, sécurité ou réglementaire"
    faisabilite:
      poids: 25%
      description: "Disponibilité des ressources, complexité technique, dépendances"
    quick_win:
      poids: 20%
      description: "Résultat visible en < 6 mois, valeur de démonstration"
  
  scoring:
    échelle: "1 (faible) à 5 (fort)"
    formule: "score = (VB × 0.3) + (RR × 0.25) + (F × 0.25) + (QW × 0.2)"
    seuil_priorite_haute: "> 3.5"
```

## Gouvernance de la roadmap

```
RITUEL                FRÉQUENCE    PARTICIPANTS          OUTPUTS
─────────────────────  ──────────  ──────────────────   ──────────────────────────────
Revue roadmap          Trimestrielle DSI, CDO, RSSI      Roadmap mise à jour, re-priorisation
Architecture Review    Mensuelle   ARB                   Validation architectures entrants
Sprint architecte      Bi-mensuelle Architectes          Conception des chantiers next
Reporting CODIR        Mensuelle   DSI → CODIR           Dashboard avancement + KPIs
```

## Indicateurs de suivi (KPIs)

```yaml
kpis_transformation:
  avancement:
    - "% chantiers NOW livrés (objectif > 80% à 6 mois)"
    - "% jalons respectés (objectif > 85%)"
  
  qualite_architecture:
    - "Conformité architecturale ARB (objectif > 85%)"
    - "Score dette technique (objectif < 5%)"
  
  impact_business:
    - "Réduction coût infra (objectif : économies Cloud FinOps)"
    - "Incidents de prod liés à la dette technique (objectif : -50%)"
    - "Time-to-market nouvelles fonctionnalités (objectif : -30%)"
```

## Livrables

- Roadmap SI visuelle Now/Next/Later (format Miro, PowerPoint ou Confluence)
- Tableau de priorisation des chantiers (critères × scoring)
- Fiches chantiers (1 page par projet majeur : objectifs, livrables, ressources, risques)
- Dashboard de suivi trimestriel
- Présentation CODIR (10 slides)

## Format de sortie

Précise : **horizon temporel** (1 an / 3 ans / 5 ans), **axes prioritaires** (Cloud / Sécurité / Data / Modernisation / IA), **contexte** (budget contraint, transformation urgente, post-fusion), **format de restitution** (CODIR / architectes / équipes IT).
