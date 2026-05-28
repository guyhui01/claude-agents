# Skills — Solutions Architect (TOGAF EA)

> Dossier rattaché à `AGENT-SOLUTIONS-ARCHITECT.md`
> Référentiels : TOGAF 10 · ArchiMate 3 · AWS SAP-C02 · Google Cloud Architect · Azure AZ-305 · IASA CITA-A · CISSP

---

## Index des skills (8)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`togaf-adm.md`](togaf-adm.md) | Conduire un cycle TOGAF ADM (9 phases) | TOGAF 10 Foundation & Practitioner |
| 2 | [`archimate-modeling.md`](archimate-modeling.md) | Modéliser avec ArchiMate 3 (3 couches B/A/T, viewpoints) | ArchiMate 3 · TOGAF 10 |
| 3 | [`urbanisme-si.md`](urbanisme-si.md) | Cartographier le SI (vues métier/fonctionnel/technique) | TOGAF 10 · CITA-A · IASA |
| 4 | [`architecture-bdat.md`](architecture-bdat.md) | Concevoir l'architecture BDAT cible (B/D/A/T) | TOGAF 10 Practitioner · CITA-A |
| 5 | [`integration-patterns.md`](integration-patterns.md) | Sélectionner les patterns d'intégration (API GW, ESB→iPaaS, EDA, microservices) | AWS SAP-C02 · Google · AZ-305 |
| 6 | [`migration-cloud.md`](migration-cloud.md) | Définir la stratégie de migration cloud (Framework 6R, TCO, wave planning) | AWS SAP-C02 · Google · AZ-305 |
| 7 | [`gouvernance-architecturale.md`](gouvernance-architecturale.md) | Mettre en place l'ARB, Tech Radar, métriques de gouvernance | TOGAF 10 · CITA-A · IASA |
| 8 | [`roadmap-transformation-si.md`](roadmap-transformation-si.md) | Construire la roadmap de transformation (Now/Next/Later, 6 axes) | TOGAF 10 · PMP · IASA |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉMARRER UNE DÉMARCHE D'ARCHITECTURE D'ENTREPRISE ?
    → togaf-adm.md (méthodologie ADM 9 phases)
    → urbanisme-si.md (cartographie SI existant)
    → archimate-modeling.md (formaliser les diagrammes)

  ... CONCEVOIR L'ARCHITECTURE CIBLE ?
    → architecture-bdat.md (4 couches B/D/A/T)
    → integration-patterns.md (intégrations applicatives)

  ... PILOTER UNE TRANSFORMATION ?
    → roadmap-transformation-si.md (Now/Next/Later)
    → migration-cloud.md (si migration cloud incluse)

  ... GOUVERNER L'ARCHITECTURE ?
    → gouvernance-architecturale.md (ARB, Tech Radar, principes)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Développement applicatif Python | `AGENT-DEV-PYTHON-IA.md` | SOLUTIONS = architecture ; DEV-PYTHON = code |
| Développement frontend TypeScript | `AGENT-DEV-TYPESCRIPT-IA.md` | SOLUTIONS = architecture ; DEV-TS = code |
| Infrastructure DevOps (K8s, Terraform) | `AGENT-DEVOPS-CLOUD.md` | SOLUTIONS = vue cible ; DEVOPS = mise en œuvre infra |
| Architecture IA spécifique (RAG, agents) | `AGENT-AI-ARCHITECT.md` | SOLUTIONS = SI global ; AI-ARCHITECT = stack IA |
| Audit sécurité, pentest, red teaming | `AGENT-SECURITE-IA.md` | SOLUTIONS = secure by design ; SECURITE-IA = audit ex-post |
| Stratégie data et gouvernance data | `AGENT-CDO-DIRECTEUR-IA.md` | SOLUTIONS = architecture ; CDO = stratégie data |
| Tech Lead applicatif | `AGENT-TECH-LEAD.md` | SOLUTIONS = vue SI complète ; TECH-LEAD = applicatif local |

---

## Référentiels et standards utilisés

- **TOGAF 10** : https://www.opengroup.org/togaf
- **ArchiMate 3.2** : https://pubs.opengroup.org/architecture/archimate3-doc/
- **AWS Well-Architected** : https://aws.amazon.com/architecture/well-architected/
- **Google Cloud Architecture Framework** : https://cloud.google.com/architecture/framework
- **Azure Well-Architected Framework** : https://learn.microsoft.com/azure/well-architected/
- **6R Cloud Migration** (Rehost, Replatform, Refactor, Repurchase, Retain, Retire)
- **IASA CITA** : https://iasaglobal.org/
- **C4 Model** (complément pour vues applicatives) : https://c4model.com/
