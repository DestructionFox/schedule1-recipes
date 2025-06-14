# 🧠 Schedule 1 – Workflow Roles & Communication (v2.0)

This document defines the updated communication protocols, responsibilities, and role boundaries across all modules and agents in the Schedule 1 project.

---

## 🧩 Module Roles (Tiered Chat System)

| Tier | Prefix | Role |
|------|--------|------|
| 🧠 A  | `A1`   | Master Vision – central brain, command dispatcher |
| 📘 B  | `B1–B3`| Core Logic – data registries, pricing, backend logic |
| 📄 C  | `C1–C3`| Frontend/UX/UI – viewer, filters, onboarding |
| 🔧 D  | `D1–D2`| Utility – sandbox, image management, backups |
| 🌀 E  | `E1–E4`| Expansion – fusion sim, favorites, mobile, onboarding |

Each chat has a **clearly scoped domain**. No chat modifies another’s data without prompt from A1.

---

## 🤖 AGENT Roles (New Tier)

Agents are logic processors, not humans. They are invoked via prompts or API calls to perform deterministic backend tasks.

| Agent Name | Purpose |
|------------|---------|
| `recipe.logic.agent` | Handles fusion logic, pricing simulation, effect transformation |
| `region.match.agent` | Matches recipes to regions by demand & profit |
| `mongo.schema.agent` | Manages schema sync, DB insertion formats |
| `sim.score.agent` | Computes efficiency, ROI, and optimality of recipes |

Defined in `AGENTS.md`. These agents should never mutate production files directly – only return structured output.

---

## 🔁 Communication Protocols

| Action | Description |
|--------|-------------|
| `/log_task [task]` | Registers a new task in the roadmap |
| `/assign [chat]` | Delegates a task to a chat module |
| `/push_prompt [chat]` | Sends a scoped work order to another chat |
| `/request [subject]` | Queries a chat/agent for specific insight |
| `/relink_master` | Reestablish Master-Vision hierarchy |
| `/summon_agent [agent.name]` | Triggers a logic processor to compute or return data |
| `/simulate recipe [...]` | Sends mix to fusion simulator |
| `/codex_wrap` | Codex-specific prompt formatting for Codex-compatible modules |

---

## 📦 Workflow Best Practices

- All **source of truth** is JSON or Markdown
- Codex builds wrappers; Agents simulate logic
- A1 dispatches everything unless emergency override
- Legacy folders must never be overwritten; new outputs go to root or versioned subfolders
- All code and simulation logic must be **deterministic**

---

## 🧠 Master Vision (A1) Responsibilities

- Maintains file and chat hierarchy
- Owns `/reset_scope`, `/init_project`, `/force_sync`
- Defines module ownership
- Resolves scope conflicts
- Can refactor task trees, reassign modules, or elevate agent output

---

## 🔐 Memory/Sync Rules

- All roles and agents must be synced using `/force_sync` after major updates
- Codex and Agents should not duplicate logic—each has its own tier of control
- All simulation logic must return both value **and** explanation

---

## 🧪 Feedback & Testing

Use `/log_feedback` and `/push_to` for bug reports, UX suggestions, or logic issues. Testing happens in:

- `test-env/`
- `D1 – Debug & Feature Sandbox`
- With outputs saved as:
  - `test_[feature]_results.json`
  - `sandbox_[type].md`

---

## 📝 Example Workflow

```md
/log_task Simulate ROI of 3-step OG Kush mix
/assign B1
/push_prompt B1 – Evaluate OGKush + Viagra + Banana
/summon_agent recipe.logic.agent
/simulate recipe ["Viagra", "Banana", "OG Kush"]
```

---

## 🚧 Notes

- Roles may evolve, but all changes must go through A1
- No agent or module acts outside its scope without reassignment
- All AGENTS must be documented in `AGENTS.md` and invoked explicitly
