# 🗂️ Schedule 1 – Chat Module Index (v2.0)

This file defines the structure, scope, and function of every modular chat in the Schedule 1 system.  
Each module is responsible for a specific tier and type of task.

---

## 🧠 A – Master Tier

| ID | Name | Role |
|----|------|------|
| A1 | Master Vision & Project Brain | Central brain, task dispatch, roadmap gatekeeper, scope manager |

---

## 📘 B – Core Logic Tier

| ID | Name | Role |
|----|------|------|
| B1 | Recipe Logic & Data Registry | Maintains recipe registry, UIDs, smart tag sync |
| B2 | Effect Logic & Pricing Docs | Holds effect metadata, multipliers, pricing factors |
| B3 | Ingredient Metadata Tracker | Handles unlocks, source, cost, icon mapping |

---

## 📄 C – UI/UX Tier

| ID | Name | Role |
|----|------|------|
| C1 | Site Build: Full HTML Recipe Viewer | Core display logic, icons, layout |
| C2 | Filtering & Search System | Live filters, tag dropdowns, fuzzy search |
| C3 | UX: Landing Page & Nav Flow | Onboarding, tabs, user interaction flow |

---

## 🔧 D – Utility Tier

| ID | Name | Role |
|----|------|------|
| D1 | Debug & Feature Sandbox | Broken ideas, visual experiments, temporary scripts |
| D2 | Assets & Icon Manager | File structure, name maps, image consistency |

---

## 🌀 E – Expansion Tier

| ID | Name | Role |
|----|------|------|
| E1 | Fusion Simulator | Simulates mixing effects, validates fusion chains |
| E2 | Favorites/Bookmark Tracker | Save + rank favorite recipes |
| E3 | Mobile UI Handler | Responsive design for phones |
| E4 | Uncle Nelson Onboarding Writer | Tutorial scripting and intro flow |

---

## 🤖 AGENT Tier (non-chat)

| ID | Name | Role |
|----|------|------|
| `recipe.logic.agent` | Fusion + price simulation |
| `region.match.agent` | Aligns recipes with regional demand |
| `sim.score.agent` | Scores ROI, value, effect richness |
| `mongo.schema.agent` | Formats schema insertions for DB sync |

All agents documented in [`AGENTS.md`](./AGENTS.md)

---

## 🧩 Module Responsibilities

- **No chat modifies outside scope unless A1 pushes prompt**
- All cross-tier updates require `/push_prompt` or `/assign`
- Only A1 can use `/reset_scope` and `/force_sync`

---

## 🧠 Tips

- Always check this file before creating a new chat
- All new modules must be logged with A1 via `/log_task`
- Use `Legacy` folder for pre-2.0 versions of data/docs

