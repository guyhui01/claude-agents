# Skill Scrum — Ticket Incident

> Certification : PSPO I
> Agent : AGENT-PO-SCRUM.md

## Template Jira
```
Titre : [PROD/REC] [Composant] — [Description courte]

Type : ☐ Bug  ☐ Incident Prod  ☐ Anomalie Recette
Sévérité : ☐ Bloquant  ☐ Majeur  ☐ Mineur  ☐ Cosmétique
Environnement : ☐ Production  ☐ Recette  ☐ Intégration
US liée : [US-XXX]

DESCRIPTION
[Description précise et factuelle]

ÉTAPES DE REPRODUCTION
1. Se connecter en tant que [rôle]
2. Naviguer vers [page]
3. Cliquer sur [élément]
4. Observer [comportement]

COMPORTEMENT ATTENDU
[Ce qui devrait se passer]

COMPORTEMENT OBSERVÉ
[Ce qui se passe réellement]

IMPACT MÉTIER
[Utilisateurs impactés, processus bloqué]

CONTOURNEMENT : ☐ Oui : [description]  ☐ Non
CAPTURES / LOGS : [lien ou pièce jointe]
```

## Niveaux de sévérité
| Niveau | Définition | Délai |
|---|---|---|
| Bloquant | Inutilisable, pas de contournement | Immédiat |
| Majeur | Dégradé, contournement possible | Sprint en cours |
| Mineur | Gêne sans impact fonctionnel | Prochain sprint |
| Cosmétique | Visuel / orthographe | Backlog |
