# 🧠 Schedule 1 – Project Commands Guide (v2.0)

This is the complete list of structured commands used across the Schedule 1 modular system, including chat coordination, task tracking, simulation, and AGENT logic triggers.

---

## 📡 Core Communication

| Command | Purpose |
|---------|---------|
| `/log_task [task]` | Record a new global roadmap task |
| `/assign [chat]` | Assign a task to a chat module (e.g. B1, C2) |
| `/push_prompt [chat]` | Send a scoped prompt to another module |
| `/request [subject]` | Ask for analysis, format change, or update |
| `/get_updates` | Retrieve current sync status and scope summaries |
| `/get_task_log` | View all current open tasks |
| `/pending_tasks` | See which modules still have outstanding requests |

---

## 🧠 Master Chat (A1) Only

| Command | Function |
|---------|----------|
| `/reset_scope` | Reset all module scopes and relink A1 |
| `/init_project` | Rebuild project hierarchy from scratch (rare) |
| `/relink_master` | Reassert Master Vision as root authority |
| `/force_sync` | Force all modules to refresh definitions and command awareness |

---

## 🤖 AGENT Support

| Command | Function |
|---------|----------|
| `/summon_agent [agent.name]` | Activate a backend logic processor |
| `/simulate recipe [ingredients...]` | Send a recipe to fusion simulation engine |
| `/evaluate_effect [effect.name]` | Get metadata, multiplier, rarity, region data |
| `/benchmark [uid]` | Run ROI and price simulation on recipe by UID |

All AGENTS must be listed in `AGENTS.md`.

---

## 🧪 Codex Integration

| Command | Purpose |
|---------|---------|
| `/codex_wrap` | Format a prompt for Codex (structured input/output) |
| `/codex_infer` | Ask Codex to guess or generate structured logic |
| `/codex_test [file]` | Run validation or transformation logic on a file |

Used when testing schema transformations, logic scaffolding, or recipe mutation.

---

## 🛠️ Feedback & Logging

| Command | Function |
|---------|----------|
| `/log_feedback [text]` | Submit a bug, visual glitch, or confusion point |
| `/tag_feedback [tag]` | Tag feedback type: UX, Bug, Logic, Visual |
| `/set_priority [level]` | Priority level: Low, Medium, High |
| `/push_to [chat]` | Forward feedback to relevant chat module |

---

## 🗂️ Command Naming Rules

- All commands are lowercase and start with `/`
- Use spaces to separate arguments
- File names or UIDs must match exact registered ID or path

---

## 🧠 Example Command Chain

```md
/log_task Implement fusion simulator for mid-tier recipes
/assign E1
/push_prompt E1 – Create sim logic for ["Banana", "Cuke", "Gasoline"]
/summon_agent recipe.logic.agent
/simulate recipe ["Banana", "Cuke", "Gasoline"]
```

---

## 📁 Related Docs

- [`Workflow_Roles_and_Communication.md`](./Workflow_Roles_and_Communication.md)
- [`AGENTS.md`](./AGENTS.md)
- [`Schedule1_Deep_Recipe_Research_Report.md`](./Schedule1_Deep_Recipe_Research_Report.md)
