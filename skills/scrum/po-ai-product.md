# Skill — PO de Produit IA (Responsible AI Ownership)
> Certifications : PSPO-AI (Professional Scrum Product Owner - AI)

## Objectif
Gérer le backlog et la stratégie d'un produit intégrant des fonctionnalités d'IA générative ou ML.

## Spécificités du PO en contexte IA
- Les outputs IA sont **probabilistes**, pas déterministes → les critères d'acceptation changent
- La valeur est souvent floue au départ → forte importance du discovery
- Les modèles évoluent (version LLM, fine-tuning) → versionner les comportements

## Framework PSPO-AI : 5 responsabilités clés
1. **AI Vision** : définir pourquoi l'IA est la bonne solution (vs. règles métier)
2. **AI Ethics** : garantir équité, transparence, vie privée, non-nuisance
3. **AI Backlog** : rédiger des stories adaptées à l'incertitude IA
4. **AI Value** : mesurer la valeur délivrée par les features IA (métriques dédiées)
5. **AI Risk** : identifier et mitiguer les risques (hallucinations, biais, sécurité)

## Questions à se poser avant de prioriser une feature IA
- Le problème est-il mieux résolu par l'IA que par une règle déterministe ?
- Quelles sont les conséquences d'une erreur du modèle ?
- Comment les utilisateurs sauront-ils que c'est de l'IA ?
- Comment recueillir le feedback pour améliorer le modèle ?

## IA Responsible : checklist PO
- [ ] Transparence : l'utilisateur sait qu'il interagit avec de l'IA
- [ ] Contrôle : l'utilisateur peut ignorer / corriger l'output IA
- [ ] Explicabilité : le raisonnement est accessible si nécessaire
- [ ] Biais : les données d'entraînement sont auditées
- [ ] Privacy : aucune donnée personnelle inutilement traitée

## Livrables
- AI Product Vision Statement
- Backlog IA structuré (stories + critères d'acceptation adaptés)
- AI Risk Register
- Métriques de performance modèle (précision, recall, hallucination rate)

## Format de sortie
Précise : type d'IA (LLM, ML classique, computer vision) · cas d'usage · contraintes légales (RGPD, AI Act EU)
