# Skill — UX Writing & Microcopy IA
> Certifications : Google UX Design · HubSpot Content Marketing

## Objectif
Rédiger les textes d'interface (boutons, messages d'erreur, onboarding, notifications) qui guident l'utilisateur avec clarté et réduisent la friction.

## Principes fondamentaux de l'UX Writing
1. **Clarté** : 1 idée = 1 phrase = 1 action
2. **Concision** : supprimer chaque mot inutile
3. **Cohérence** : même terme pour le même concept partout
4. **Ton de marque** : même voix dans toute l'interface
5. **Centré utilisateur** : "vous" pas "nous", bénéfices pas fonctionnalités

## Types de microcopy et leurs règles

### Boutons (CTA)
| À éviter | À préférer | Principe |
|---|---|---|
| "Cliquez ici" | "Commencer gratuitement" | Action + valeur |
| "Valider" | "Envoyer ma demande" | Contexte précis |
| "OK" | "Oui, supprimer" | Confirmer l'action |

### Messages d'erreur
```
Structure : Quoi s'est passé + Pourquoi + Comment y remédier

❌ "Erreur 404"
✅ "Cette page n'existe plus. Retournez à l'accueil ou faites une recherche."

❌ "Champ invalide"
✅ "L'email doit être au format nom@domaine.fr"
```

### Onboarding (premiers pas)
```
Étape 1 : Bienvenue — valider le choix de l'utilisateur
  "Bienvenue [Prénom] ! Vous avez rejoint [X] professionnels."

Étape 2 : Première action — rendre le succès immédiat
  "Commencez par ajouter votre premier projet — ça prend 2 minutes."

Étape 3 : Valeur atteinte — célébrer
  "Votre projet est créé ! Invitez maintenant votre équipe."
```

### Notifications et emails système
```
Objet : action + contexte (pas de vague)
  ✅ "[Action requise] Votre abonnement expire dans 3 jours"
  ❌ "Important : information concernant votre compte"
```

## Prompt UX Writing IA
```
"Écris le microcopy pour [élément d'interface : bouton / erreur / tooltip / onboarding].
Contexte : [ce que l'utilisateur vient de faire / vient de voir].
Ton de marque : [amical / professionnel / rassurant].
Contrainte de longueur : [X caractères max].
Objectif : [réduire la friction / encourager l'action / rassurer]."
```

## Checklist UX Writing avant publication
- [ ] Chaque bouton décrit l'action ET le résultat
- [ ] Aucun message d'erreur sans solution proposée
- [ ] Le ton est cohérent sur toute la page
- [ ] Les termes métier sont expliqués ou évités
- [ ] Testé avec de vrais utilisateurs (≈5 suffisent en test qualitatif — Nielsen & Landauer 1993)

## Livrables
- Guide de ton de voix (Voice & Tone)
- Bibliothèque microcopy par composant (boutons, erreurs, tooltips)
- Audit UX Writing de l'interface existante
- Templates onboarding (3-5 étapes)

## Format de sortie
Précise : type d'interface · composant ciblé · ton de marque · audience · contrainte de longueur · contexte d'affichage

## Anti-patterns
- ❌ **« Cliquez ici »** — libellé de bouton sans action ni valeur → ne dit pas ce qui se passe. Décrire l'action + le résultat.
- ❌ **Message d'erreur sans solution** — « Erreur 404 » / « Champ invalide » → l'utilisateur est bloqué. Toujours indiquer quoi faire.
- ❌ **Jargon ou ton corporate** — « Veuillez réessayer ultérieurement » → froid et flou. Parler comme à un humain.
- ❌ **Incohérence terminologique** — « Supprimer » ici, « Effacer » là pour la même action → confusion.
- ❌ **Microcopy non accessible** — messages reposant sur la couleur seule, libellés non lisibles par lecteur d'écran → exclusion (cf. WCAG 2.2).

## Sources
- **Jakob Nielsen** — *10 Usability Heuristics for User Interface Design* (NN/g, 1994) — heuristiques d'interface
- **Nielsen & Landauer** — *A mathematical model of the finding of usability problems* (1993) ; Nielsen, *Why You Only Need to Test with 5 Users* (NN/g, 2000) — règle des 5 utilisateurs (~85 % des problèmes en test qualitatif)
- **W3C** — *WCAG 2.2* (octobre 2023) — accessibilité du contenu (libellés, messages, contraste)
- **Torrey Podmajersky** — *Strategic Writing for UX* (O'Reilly, 2019) — voix & ton, microcopy
- **Kinneret Yifrah** — *Microcopy: The Complete Guide* (2017) — microcopy par composant

## Voir aussi
- [`../ux_design/accessibilite-wcag.md`](../ux_design/accessibilite-wcag.md) — conformité WCAG 2.2 détaillée
- [`../ux_design/audit-ux-heuristiques.md`](../ux_design/audit-ux-heuristiques.md) — 10 heuristiques de Nielsen
- [`../ux_design/tests-utilisateurs.md`](../ux_design/tests-utilisateurs.md) — tests utilisateurs (règle des 5)
- [documentation-technique.md](documentation-technique.md) — messages et guides côté produit
