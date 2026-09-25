# Skill — E-learning & Rapid Learning

> Certifications: Articulate Storyline 360 Certified Developer 2026, Adobe Captivate Specialist, xAPI / SCORM Expert (ADL), LMS Administration (Moodle, TalentLMS, 360Learning), Qualiopi Digital

## Objective

Produce professional-grade e-learning and rapid-learning modules for Data-AI training, mastering authoring tools, SCORM/xAPI standards, and LMS configuration.

## 2026 authoring tools comparison

### Decision table

| Tool | Type | Interactivity | Learning curve | Price/yr | Ideal for |
|-------|------|--------------|---------------------|---------|-----------|
| **Articulate Storyline 360** | Desktop | Very high | High | €1,500/user | Complex scenarios, simulations |
| **Articulate Rise 360** | Web | Medium | Low | Included in 360 | Rapid learning, mobile-first |
| **Adobe Captivate 2024** | Desktop | Very high | Very high | €480/user | VR, technical simulations |
| **iSpring Suite** | PowerPoint | High | Low | €770/user | Fast PPT migration |
| **H5P** | Web open-source | Medium | Medium | Free | Moodle LMS, limited budget |
| **Genially** | Web | Medium | Low | €150/user | Interactive infographics |
| **Synthesia** | AI video | Low | Very low | €960/user | AI avatar training videos |

## Articulate Storyline 360 — professional workflow

### Structure of an AI e-learning module (example: "Prompt Engineering Fundamentals")

```
STORYBOARD → STORYLINE → PUBLICATION

Estimated production time (1 module, 30 min):
  Storyboard          : 4h
  SL development      : 12h
  Client review       : 2h
  Fixes               : 3h
  Tests & publishing  : 2h
  TOTAL               : ~23h/module
```

### Storyline slide template for a prompt exercise

```
Slide Type: Freeform Pick Many (interactive)

Title: "Identify the parts of an effective prompt"

Instruction: "Click the components present in this prompt:"

Prompt shown:
┌────────────────────────────────────────────────┐
│ "You are a B2B marketing expert with 10 years  │
│ of experience. Write a prospecting email       │
│ for an industrial SME interested in our        │
│ predictive-maintenance services. Tone = pro    │
│ and concise. Maximum 150 words."               │
└────────────────────────────────────────────────┘

Clickable zones (hotspots):
  [Role] → Feedback: "Correct! 'B2B marketing expert'"
  [Context] → Feedback: "Correct! 'industrial SME...'"
  [Task] → Feedback: "Correct! 'Write an email'"
  [Constraint] → Feedback: "Correct! 'Maximum 150 words'"
  [Tone] → Feedback: "Correct! 'pro and concise'"

Results layer:
  → Score 5/5: "Perfect! You've mastered the RTCT structure"
  → Score 3-4/5: "Good! Review the video on constraints"
  → Score < 3/5: "Start over with the cheat sheet"
```

## SCORM and xAPI standards

### SCORM vs xAPI (Tin Can) comparison

| Criterion | SCORM 1.2 | SCORM 2004 | xAPI |
|---------|-----------|-----------|------|
| Tracking | Basic (score, status) | Improved | Full (every action) |
| Offline | No | No | Yes |
| Mobile | Limited | Limited | Native |
| LRS required | No (LMS) | No (LMS) | Yes |
| Flexibility | Low | Medium | Total |
| 2026 adoption | Declining | Standard | Rising |

### Example xAPI statement for AI training

```json
{
  "actor": {
    "name": "Marie Dupont",
    "mbox": "mailto:marie.dupont@company.com"
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/completed",
    "display": {"en-US": "completed"}
  },
  "object": {
    "id": "https://training.ai/modules/prompt-engineering/module-2",
    "definition": {
      "name": {"en-US": "Advanced prompting techniques"},
      "type": "http://adlnet.gov/expapi/activities/module"
    }
  },
  "result": {
    "score": {"scaled": 0.87, "raw": 87, "max": 100},
    "completion": true,
    "duration": "PT18M32S"
  },
  "context": {
    "platform": "360Learning",
    "language": "en-US"
  }
}
```

## AI training video with Synthesia

### Production workflow (30 min of video)

```
Step 1 — Script (4h)
  → Write with structure: 30-sec hook + content + CTA
  → 150 words ≈ 1 min of video
  → Build in pauses for the exercises

Step 2 — Synthesia (2h)
  → Avatar choice (recommended: neutral, diverse avatar)
  → Import script → AI generation
  → Add slides, annotations, auto captions
  → Voice: English, conversational tone

Step 3 — Post-production (2h)
  → Add title screen (Canva)
  → Split into chapters (< 5 min/segment)
  → Export MP4 + upload to LMS
  → Generate SRT captions (accessibility)

Estimated cost: €80/video module (Synthesia Business Plan)
```

## LMS configuration for AI training

### 360Learning deployment checklist (example)

```yaml
AI_track_configuration:
  General_settings:
    access_duration: "90 days"
    language: "English"
    certificate: true
    passing_score: 70

  Sequencing:
    mode: "Free or conditional per module"
    prerequisite: "Module 0 required before Module 1"
    auto_reminders: ["D+3", "D+7", "D+14 if not started"]

  Gamification:
    points_per_quiz: 10
    completion_badge: "Prompt Engineer Level 1 badge"
    leaderboard: true

  Analytics:
    exports: ["Completion rate", "Quiz scores", "Time spent"]
    alerts: "Notify trainer if completion < 30% at D+14"
    auto_report: "Weekly → HR"
```

## Deliverables

- Complete e-learning module (Storyline 360 or Rise — source file)
- Interactive storyboard (Word or Notion)
- SCORM 2004 or xAPI package ready for LMS import
- Training videos (MP4 + SRT captions)
- LMS administration guide (configuration + analytics)
- E-learning style guide (colors, fonts, icons)

## Output format

Specify: **available authoring tool** (Storyline / Rise / Captivate / iSpring), **target LMS** (Moodle / 360Learning / Docebo / other), **required standard** (SCORM 1.2 / SCORM 2004 / xAPI), **module duration**, **interactivity level** (passive reading / quiz / simulation / branching scenario), **audience** and **AI topic**.

## Sources
- **Richard Mayer** — *Multimedia Learning* (2001) — multimedia principles (coherence, segmentation, redundancy)
- **John Sweller** — *Cognitive Load Theory* (1988)
- **ADL Initiative** — *SCORM* (1.2 / 2004) and *xAPI* (Experience API / Tin Can) standards
- **Michael Allen & Richard Sites** — *Leaving ADDIE for SAM* (2012) — iterative production

## Anti-patterns
- "Page-turner": linear slides/PDF with no interaction or feedback
- Violating Mayer's principles (redundant audio narration + on-screen text)
- Module too long (> 15-20 min) with no segmentation
- Choosing xAPI/SCORM without checking target-LMS compatibility
- AI video (Synthesia) generated with no structured instructional script

## See also
- [conception-parcours.md](conception-parcours.md) — upstream instructional design (ADDIE/SAM, Bloom)
- [animation-formation.md](animation-formation.md) — in-person / remote articulation
- [evaluation-formation.md](evaluation-formation.md) — quizzes and completion tracked in the LMS
- [data-literacy.md](data-literacy.md) — example of a multi-level program to deliver
