# Skill — Audit de Conformité IA
> Certifications : AI Act Compliance Expert · CIPP/E · ISO 27001 Lead Auditor · DPO Certifié

## Objectif
Réaliser des audits de conformité complets des systèmes IA par rapport à l'AI Act, le RGPD et les standards éthiques.

## Méthodologie d'audit IA en 5 phases

### Phase 1 : Cadrage (J1-J5)
```
Livrables :
  → Lettre de mission signée
  → Cartographie des systèmes IA en périmètre
  → Plan d'audit détaillé
  → Demande de documents (checklist)

Documents à collecter :
  → Registre des traitements (Art. 30 RGPD)
  → DPIA existantes
  → Documentation technique des modèles
  → Model cards / System cards
  → Politiques de gouvernance IA
  → Contrats fournisseurs (DPA, CGU SaaS IA)
  → Logs de conformité (si disponibles)
```

### Phase 2 : Revue documentaire (J6-J15)
```
Contrôles documentaires :
  ☐ AI Act : classification correcte du risque
  ☐ AI Act : documentation technique complète (si risque élevé)
  ☐ RGPD Art. 13/14 : information des personnes (mentions légales IA)
  ☐ RGPD Art. 22 : droits sur la décision automatisée documentés
  ☐ RGPD Art. 28 : DPA signé avec chaque sous-traitant IA
  ☐ RGPD Art. 35 : DPIA réalisée (si obligatoire)
  ☐ Éthique : Model Card avec métriques de biais
  ☐ Sécurité : OWASP LLM Top 10 adressé
  ☐ Formation : programme de sensibilisation IA en place
```

### Phase 3 : Tests techniques (J16-J25)
```
Tests de conformité technique :

  Test 1 : Explicabilité
    → Le système peut-il expliquer ses décisions ? (XAI)
    → SHAP / LIME disponibles pour les décisions critiques ?

  Test 2 : Biais et équité
    → Métriques de fairness calculées par groupe sensible ?
    → Écart max entre groupes < seuil défini ?
    → Données d'entraînement représentatives ?

  Test 3 : Supervision humaine
    → Override humain disponible sur toutes les décisions ?
    → Seuil de confiance défini (en-dessous = escalade humaine) ?

  Test 4 : Droits des personnes
    → Droit d'accès : délai < 1 mois, format lisible ?
    → Droit à l'oubli : suppression effective de toutes les tables ?
    → Portabilité : export possible en JSON/CSV ?

  Test 5 : Transparence AI Act
    → Mention "Généré par IA" visible pour le contenu GenAI ?
    → Information chatbot affichée au démarrage ?
```

### Phase 4 : Rapport d'audit
```
Structure du rapport :
  1. Synthèse exécutive (1 page, pour CODIR)
     → Score global de conformité (/100)
     → Findings critiques (à corriger immédiatement)
     → Recommandations prioritaires

  2. Résultats par domaine
     → AI Act : [score + findings]
     → RGPD : [score + findings]
     → Éthique : [score + findings]
     → Sécurité : [score + findings]

  3. Plan de remédiation
     → Finding | Risque | Action | Responsable | Délai

  4. Annexes techniques
     → Tests réalisés, preuves, méthodologie
```

### Phase 5 : Suivi et re-audit
```
Plan de remédiation :
  → J+30 : corrections critiques (High/Critical findings)
  → J+90 : corrections majeures (Medium findings)
  → J+180 : améliorations recommandées
  → J+365 : re-audit de conformité
```

## Scoring de conformité IA
| Score | Niveau | Action |
|---|---|---|
| 90-100 | Conforme | Maintenance et surveillance |
| 75-89 | Conforme avec réserves | Plan d'amélioration 90 jours |
| 60-74 | Partiellement conforme | Plan de remédiation urgent |
| < 60 | Non conforme | Suspension du système recommandée |

## Livrables
- Rapport d'audit complet (confidentiel)
- Synthèse exécutive CODIR (1 page)
- Plan de remédiation priorisé
- Certificat de conformité (si applicable)
- Rapport de re-audit (J+365)

## Format de sortie
Précise : systèmes IA en périmètre · référentiels applicables (AI Act, RGPD, ISO 42001) · type d'audit (interne, externe, pre-certification) · délai · audience du rapport
