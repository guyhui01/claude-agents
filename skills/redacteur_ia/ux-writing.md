# Skill — AI UX Writing & Microcopy
> Certifications: Google UX Design · HubSpot Content Marketing

## Objective
Write interface text (buttons, error messages, onboarding, notifications) that guides the user clearly and reduces friction.

## Core UX writing principles
1. **Clarity**: 1 idea = 1 sentence = 1 action
2. **Concision**: cut every unnecessary word
3. **Consistency**: same term for the same concept everywhere
4. **Brand tone**: same voice across the whole interface
5. **User-centered**: "you" not "we", benefits not features

## Microcopy types and their rules

### Buttons (CTA)
| Avoid | Prefer | Principle |
|---|---|---|
| "Click here" | "Start for free" | Action + value |
| "Submit" | "Send my request" | Precise context |
| "OK" | "Yes, delete" | Confirm the action |

### Error messages
```
Structure: What happened + Why + How to fix it

❌ "Error 404"
✅ "This page no longer exists. Go back home or run a search."

❌ "Invalid field"
✅ "The email must be in the format name@domain.com"
```

### Onboarding (first steps)
```
Step 1: Welcome — validate the user's choice
  "Welcome [First name]! You've joined [X] professionals."

Step 2: First action — make success immediate
  "Start by adding your first project — it takes 2 minutes."

Step 3: Value reached — celebrate
  "Your project is created! Now invite your team."
```

### Notifications and system emails
```
Subject: action + context (nothing vague)
  ✅ "[Action required] Your subscription expires in 3 days"
  ❌ "Important: information about your account"
```

## AI UX writing prompt
```
"Write the microcopy for [interface element: button / error / tooltip / onboarding].
Context: [what the user just did / just saw].
Brand tone: [friendly / professional / reassuring].
Length constraint: [X characters max].
Objective: [reduce friction / encourage action / reassure]."
```

## UX writing checklist before publishing
- [ ] Every button describes the action AND the result
- [ ] No error message without a proposed solution
- [ ] The tone is consistent across the whole page
- [ ] Domain terms are explained or avoided
- [ ] Tested with real users (≈5 are enough for qualitative testing — Nielsen & Landauer 1993)

## Deliverables
- Voice & Tone guide
- Microcopy library by component (buttons, errors, tooltips)
- UX writing audit of the existing interface
- Onboarding templates (3-5 steps)

## Output format
Specify: interface type · targeted component · brand tone · audience · length constraint · display context

## Anti-patterns
- ❌ **"Click here"** — button label with no action or value → doesn't say what happens. Describe the action + the result.
- ❌ **Error message with no solution** — "Error 404" / "Invalid field" → the user is stuck. Always say what to do.
- ❌ **Jargon or corporate tone** — "Please try again later" → cold and vague. Talk like to a human.
- ❌ **Terminology inconsistency** — "Delete" here, "Erase" there for the same action → confusion.
- ❌ **Inaccessible microcopy** — messages relying on color alone, labels not readable by screen readers → exclusion (cf. WCAG 2.2).

## Sources
- **Jakob Nielsen** — *10 Usability Heuristics for User Interface Design* (NN/g, 1994) — interface heuristics
- **Nielsen & Landauer** — *A mathematical model of the finding of usability problems* (1993); Nielsen, *Why You Only Need to Test with 5 Users* (NN/g, 2000) — the 5-user rule (~85% of problems in qualitative testing)
- **W3C** — *WCAG 2.2* (October 2023) — content accessibility (labels, messages, contrast)
- **Torrey Podmajersky** — *Strategic Writing for UX* (O'Reilly, 2019) — voice & tone, microcopy
- **Kinneret Yifrah** — *Microcopy: The Complete Guide* (2017) — microcopy by component

## See also
- [`../ux_design/accessibilite-wcag.md`](../ux_design/accessibilite-wcag.md) — detailed WCAG 2.2 compliance
- [`../ux_design/audit-ux-heuristiques.md`](../ux_design/audit-ux-heuristiques.md) — Nielsen's 10 heuristics
- [`../ux_design/tests-utilisateurs.md`](../ux_design/tests-utilisateurs.md) — user testing (the rule of 5)
- [documentation-technique.md](documentation-technique.md) — product-side messages and guides
