# 🧠 Schedule 1 – Codex Migration & Integration Guide (v2.0)

This document outlines how **Codex** is used within the modern Schedule 1 architecture after migrating to a **Next.js + MongoDB + AGENT-backed** system.

---

## 🎯 Codex Role

Codex is now a **logic assistant and file transformer**, used for:

- JSON → array transforms
- UID auditing
- Filename verification
- Markdown → structured schema parsing
- Prompt synthesis for AGENT-compatible queries
- Effect table normalization
- Utility/test scaffolds

Codex does *not* simulate recipes. That role is handled by AGENTS.

---

## 🧩 Codex vs Agent Responsibilities

| Task | Who Handles It |
|------|----------------|
| Fusion Simulation | `recipe.logic.agent` |
| Recipe ROI Calculation | `sim.score.agent` |
| JSON to Flat Object | Codex |
| Markdown Formatter | Codex |
| Prompt Synthesis | Codex |
| Schema Guessing | Codex |
| Logic Execution | AGENTS |

---

## 🔧 Prompt Patterns

Use `/codex_wrap` to turn any internal prompt into a Codex-compatible logic prompt.

```md
/codex_wrap
Task: Convert this JSON keyed object into a flat array of recipe objects with UID injected.
Input: {
  "ogkush_123": { "name": "OG Kush", "effects": [...] }
}
```

You can also use:

```md
/codex_test [file]
```

To validate transformations (e.g. array conversion, schema checks, linting of recipe files).

---

## 🧠 Codex Prompt Examples

```md
/codex_wrap
Generate a Markdown table listing all effects in effect_metadata.json, sorted by multiplier value.

---

/codex_wrap
Check if any recipe in uid_enhanced_recipe_registry has missing or null values for "name" or "calculated_price".

---

/codex_wrap
Convert this Markdown recipe block into a JSON-ready simulation input.
```

---

## 🚫 What Codex Should NOT Do

- Simulate recipes or compute price
- Guess fusion logic
- Alter live data directly
- Write AGENT logic files

---

## ✅ Best Practices

- Always isolate Codex prompts from live UI
- Review all Codex outputs before using them in production
- Use sandbox folder (`test-env/`) to validate Codex-written logic
- Never replace master files with Codex output without `/log_task` and versioning

---

## 📁 Related Files

- [`AGENTS.md`](./AGENTS.md)
- [`Schedule1_Project_Commands_Full_Guide.md`](./Schedule1_Project_Commands_Full_Guide.md)
- `/test-env/` → where Codex outputs should land
