# Skill — Sécurité IA (AI Security)
> Certifications : AWS AIF-C01 · Azure AI-102 · AI Act EU

## Objectif
Identifier et mitiger les risques de sécurité spécifiques aux systèmes IA et LLM.

## Top 10 risques LLM (OWASP LLM Top 10 — 2025)
1. **Prompt Injection** : instructions malveillantes dans les inputs utilisateurs
2. **Insecure Output Handling** : exécution non validée des outputs LLM
3. **Training Data Poisoning** : corruption des données d'entraînement
4. **Model Denial of Service** : surcharge de tokens pour épuiser les ressources
5. **Supply Chain Vulnerabilities** : dépendances compromises (modèles, plugins)
6. **Sensitive Information Disclosure** : fuite de données via le LLM
7. **Insecure Plugin Design** : tools LLM avec accès trop larges
8. **Excessive Agency** : agent avec trop de permissions
9. **Overreliance** : confiance excessive dans les outputs LLM
10. **Model Theft** : extraction du modèle via requêtes ciblées

## Mesures de protection

### Prompt Injection
- Séparer clairement instructions système et input utilisateur
- Valider et sanitizer les inputs (ne pas passer directement au LLM)
- Utiliser des guillemets XML pour délimiter le contenu utilisateur

### Gestion des permissions agents
- Principe du moindre privilège : un agent n'a accès qu'à ce dont il a besoin
- Audit log de toutes les actions des agents
- Human-in-the-loop avant actions sensibles

### Data Privacy (RGPD + AI Act EU)
- Ne pas envoyer de PII aux APIs LLM cloud sans consentement
- Anonymiser les données avant traitement
- Audit trail des données traitées par l'IA

### AI Act EU (2024-2026)
| Risque | Catégorie | Obligation |
|---|---|---|
| Inacceptable | Interdit | — |
| Élevé | Haute réglementation | Audit, transparence, supervision humaine |
| Limité | Obligation transparence | Indiquer que c'est de l'IA |
| Minimal | Libre | — |

## Livrables
- Rapport d'audit sécurité IA (OWASP LLM Top 10)
- Matrice risques × mesures de mitigation
- Checklist conformité AI Act
- Recommandations de hardening

## Format de sortie
Précise : type de système IA · données traitées · exposition (interne/public) · pays de déploiement
