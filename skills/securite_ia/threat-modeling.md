# Skill — Threat Modeling pour les Systèmes IA
> Certifications : CISSP · CEH v13 · AWS Security Specialty

## Objectif
Identifier, modéliser et prioriser les menaces pesant sur les architectures IA avant le déploiement.

## Méthodologie STRIDE appliquée aux LLMs

| Menace | Description | Exemple IA |
|---|---|---|
| **S**poofing | Usurpation d'identité | Faux utilisateur appelle l'API LLM |
| **T**ampering | Altération des données | Empoisonnement des données RAG |
| **R**epudiation | Nier ses actions | Agent IA agit sans traçabilité |
| **I**nformation Disclosure | Fuite d'information | LLM révèle le system prompt |
| **D**enial of Service | Déni de service | Flood de longues requêtes |
| **E**levation of Privilege | Élévation de privilèges | Prompt injection → accès admin |

## Architecture de référence à modéliser

### Diagramme de flux de données (DFD)
```
[User Browser]
    ↓ HTTPS (Auth: JWT)
[API Gateway + WAF]
    ↓ mTLS
[LLM Service]
    ↓ Service Account (readonly)      ↓ Service Account (read)
[Vector Database]                   [Knowledge Base (S3)]
    ↑ Ingestion pipeline
[Data Sources (CRM, Docs)]
    ↑ CI/CD
[Model Registry (MLflow)]
```

### Trust Boundaries (frontières de confiance)
```
Boundary 1 : Internet ↔ DMZ (firewall, WAF)
Boundary 2 : DMZ ↔ Application Zone (API Gateway auth)
Boundary 3 : Application ↔ Data Zone (mTLS, IAM)
Boundary 4 : CI/CD ↔ Production (approvals, signatures)
```

## Template de menace documentée
```
ID         : THR-001
Composant  : RAG Knowledge Base (S3 bucket)
Catégorie  : Tampering (STRIDE-T)
Description : Un attaquant injecte des documents malveillants
              dans la base de connaissance pour manipuler les
              réponses du LLM (Indirect Prompt Injection).
Impact     : CVSS 8.1 (High) — manipulation des décisions business
Probabilité : Medium (accès S3 exposé sans restriction)
Mitigation :
  1. Validation et signature des documents ingérés
  2. Scan antivirus + NLP sur le contenu
  3. Ségrégation des sources de données par sensibilité
  4. Alertes sur modifications anormales du bucket
Statut     : OPEN — Priorité P1
Owner      : Équipe Sécurité
```

## MITRE ATT&CK pour les LLMs
```
Tactique : Initial Access
  T-LLM01 : Prompt Injection (Direct)
  T-LLM02 : Prompt Injection (Indirect via RAG)

Tactique : Credential Access
  T-LLM03 : Extraction de secrets via le contexte
  T-LLM04 : System Prompt Leaking

Tactique : Exfiltration
  T-LLM05 : Training Data Extraction
  T-LLM06 : Model Extraction (black-box queries)

Tactique : Impact
  T-LLM07 : Manipulation de décisions business
  T-LLM08 : Génération de contenus malveillants
```

## Processus de Threat Modeling (PASTA)
```
P — Process for Attack Simulation and Threat Analysis

1. Définir les objectifs de sécurité
2. Définir le périmètre technique
3. Décomposer l'application (DFD)
4. Analyser les menaces (STRIDE + MITRE)
5. Évaluer les vulnérabilités
6. Modéliser les attaques (kill chains)
7. Identifier et prioriser les contre-mesures
```

## Livrables
- Rapport de Threat Modeling (DFD + STRIDE + MITRE)
- Registre des menaces priorisé (CVSS)
- Plan de remédiation associé
- Revue annuelle du modèle de menaces

## Format de sortie
Précise : architecture du système (composants, flux) · données traitées · niveau d'exposition (internet/interne) · réglementations applicables · maturité sécurité actuelle
