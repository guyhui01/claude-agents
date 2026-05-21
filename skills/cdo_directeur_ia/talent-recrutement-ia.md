# Skill — Stratégie Talent & Recrutement Data-IA

> Certifications : SHRM-SCP (Strategic HR), PMI Talent Management, LinkedIn Talent Insights Certified 2026, CDMP Associate (contexte data)

## Objectif

Définir et déployer une stratégie RH Data-IA complète : cartographie des profils clés 2026, benchmarks de rémunération, arbitrage build/hire/partner et plan de développement des talents internes.

## Cartographie des profils Data-IA en 2026

### Les 12 profils clés et leurs compétences

| Profil | Niveau | Salaires Paris 2026 (brut/an) | Rareté |
|--------|--------|-------------------------------|--------|
| Chief Data Officer (CDO) | C-Level | 140 000 – 220 000 € | Très élevée |
| Head of AI / Chief AI Officer | C-Level | 150 000 – 230 000 € | Extrême |
| Data Architect (Senior) | Expert | 85 000 – 120 000 € | Élevée |
| ML Engineer / MLOps | Senior | 75 000 – 105 000 € | Très élevée |
| LLM Engineer / AI Engineer | Senior | 80 000 – 115 000 € | Extrême |
| Data Scientist (Senior) | Senior | 70 000 – 95 000 € | Élevée |
| Data Engineer (Senior) | Senior | 65 000 – 90 000 € | Élevée |
| Analytics Engineer (dbt) | Mid-Senior | 55 000 – 80 000 € | Moyenne |
| Data Analyst (BI) | Mid | 45 000 – 65 000 € | Faible |
| Data Steward / Data Governance | Mid-Senior | 50 000 – 75 000 € | Moyenne |
| Prompt Engineer / AI Product | Mid-Senior | 55 000 – 85 000 € | Élevée |
| AI Ethics Officer | Expert | 75 000 – 100 000 € | Très élevée |

### Fiches de compétences 2026 — Profils clés

```yaml
LLM_Engineer_Senior:
  missions:
    - "Intégration et fine-tuning de LLMs (Claude, GPT-4o, Llama 3)"
    - "Développement d'agents IA et systèmes RAG"
    - "LLMOps : monitoring, évaluation, prompt versioning"
  competences_techniques:
    - Python (FastAPI, LangChain, LlamaIndex)
    - Vector databases (Pinecone, Weaviate, pgvector)
    - Cloud AI services (Anthropic API, Azure OpenAI, Vertex AI)
    - MLflow / Weights & Biases pour l'évaluation LLM
  certifications_valorisees:
    - Anthropic Prompt Engineering Certification 2026
    - DeepLearning.AI LLMOps Specialization
    - AWS Certified Machine Learning Specialty
  softs_skills:
    - Pensée produit (mesurer l'impact business)
    - Communication avec parties prenantes non-techniques

MLOps_Engineer_Senior:
  stack_2026:
    orchestration: ["Airflow 2.x", "Prefect 3", "Dagster"]
    ml_platform: ["Kubeflow", "MLflow", "SageMaker Pipelines"]
    serving: ["BentoML", "Seldon Core", "Ray Serve"]
    monitoring: ["Evidently AI", "WhyLogs", "Arize Phoenix"]
    infra: ["Kubernetes", "Terraform", "GitHub Actions"]
```

## Arbitrage : Build vs Hire vs Partner

### Matrice de décision

| Critère | Build (Former interne) | Hire (Recruter) | Partner (Externaliser) |
|---------|----------------------|-----------------|----------------------|
| **Time-to-value** | 6-18 mois | 3-6 mois | 1-3 mois |
| **Coût total** | Faible long terme | Élevé court terme | Variable |
| **Rétention du savoir** | Très forte | Forte (si fidélisation) | Faible |
| **Flexibilité** | Faible | Moyenne | Forte |
| **Expertise de pointe** | Difficile | Possible (marché rare) | Accessible |

### Algorithme de décision

```
Pour chaque besoin de compétence Data-IA :

1. Est-ce un besoin durable (> 18 mois) et stratégique ?
   → OUI : Envisager Hire ou Build
   → NON : Partner (freelance, cabinet conseil)

2. Est-ce une compétence disponible en interne (gap < 6 mois) ?
   → OUI : Build (upskilling + mentorat)
   → NON : Hire (si budget) ou Partner (si urgence)

3. Le marché de l'emploi est-il trop tendu ?
   → Profils LLM Engineer, Chief AI Officer
   → Stratégie : Build + Partner en parallèle
     + Employee Value Proposition différenciante
```

## Programme de développement interne

### Data-IA Upskilling Tracks (6 mois chacun)

| Track | Public cible | Contenu | Certification visée |
|-------|-------------|---------|---------------------|
| **Data Analyst → Analytics Engineer** | Data Analysts junior/mid | dbt, SQL avancé, Git, CI/CD | dbt Developer Certification |
| **Data Engineer → MLOps** | Data Engineers seniors | Docker, Kubernetes, MLflow, Airflow | AWS ML Specialty |
| **Développeur → AI Engineer** | Dev backend Python | LangChain, API LLM, RAG, agents | Anthropic Certification 2026 |
| **Manager → Data-Driven Leader** | Managers métier | Data storytelling, SQL basique, BI | DP-900 Microsoft |

## Marque employeur Data-IA

### Leviers d'attraction 2026

```
Top 5 critères de choix des talents data (enquête 2026) :
1. Projets tech challenging (IA générative, MLOps at scale)  — 42%
2. Qualité de l'équipe et mentoring                          — 38%
3. Rémunération + BSPCE/AGA                                  — 35%
4. Flexibilité (full remote ou hybride)                      — 32%
5. Budget formation & certifications                         — 28%

Actions marque employeur :
→ Publication technique (blog, GitHub, conférences)
→ Open source contributions de l'équipe
→ Budget certifications : 3 000 €/an/personne minimum
→ Remote-first policy avec 2 jours présentiel/mois
```

## Livrables

- Cartographie des besoins en talents Data-IA (court/moyen terme)
- Grille de rémunération benchmarkée 2026 par profil
- Matrice build/hire/partner par famille de compétences
- Plan de développement interne avec tracks de formation
- Job descriptions pour les 5 profils prioritaires
- Stratégie marque employeur Data-IA (EVP + actions concrètes)
- Budget RH Data-IA annuel (recrutement + formation + rétention)

## Format de sortie

Précise : **taille équipe data actuelle** (nb + profils), **profils prioritaires à recruter** (liste), **budget RH disponible**, **délai** (urgence ou planification 12 mois), **contraintes** (télétravail, localisation, taille de l'entreprise), **secteur** (banque / retail / industrie / etc.), **niveau de maturité IA** de l'organisation.
