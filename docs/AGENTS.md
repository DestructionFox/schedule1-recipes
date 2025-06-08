# 🤖 AGENTS.md – Schedule 1 Modular AI Agents

This file defines each AI-driven module ("agent") used in the Schedule 1 Recipe Viewer Project. Each agent has a distinct role, scoped responsibilities, and dependency links. This document supports prompt engineering, modular design audits, and integration with Codex systems.

---

## 🧠 A – Master Tier

### 🧠 A1 – Master Vision & Project Brain
- **Role:** Top-level coordinator and strategic brain
- **Responsibilities:**
  - Maintains hierarchy, structure, and naming conventions
  - Issues commands, assigns tasks, routes prompts
  - Approves architectural decisions, file overwrites, Codex prompts
- **Dependencies:** All other agents
- **Outputs:** Project instructions, commands, prompts, roadmap

---

## 📘 B – Core Logic Tier (Backend & Data)

### 📘 B1 – Recipe Logic & Data Registry
- **Role:** Validates and patches all backend recipe logic
- **Responsibilities:**
  - UID naming logic and evolution
  - Profit calculations and JSON schema enforcement
  - Maintains `uid_enhanced_recipe_registry.json`
- **Feeds:** C1 (renderer), C2 (filters), B2 (effect data), B3 (metadata)

### 📘 B2 – Effect Logic & Pricing Doc Chat
- **Role:** Manages effect data and pricing multipliers
- **Responsibilities:**
  - Maintains `Schedule1_Complete_Effect_Guide.md`
  - Handles tooltip logic, rarity scoring, and regional weighting
  - Assists filtering and fusion systems
- **Feeds:** C1, C2, D2

### 🧾 B3 – Ingredient & Item Metadata Chat
- **Role:** Authority on non-strain ingredient metadata
- **Responsibilities:**
  - Tracks unlock level, cost, sourcing, icon
  - Maps ingredients to effects and filter options
- **Feeds:** C1, C2, D2

---

## 📄 C – UI / Viewer Tier

### 📄 C1 – Site Build: Full HTML Recipe Viewer
- **Role:** Core frontend HTML+JS+CSS engine
- **Responsibilities:**
  - Renders recipe cards, tabs, icons, and effects
  - Reads from `/data/*.json`
  - Hooks into filters and onboarding logic

### 🔍 C2 – Filtering & Search System
- **Role:** Tag-based filter and live search engine
- **Responsibilities:**
  - Enables filtering by effect, ingredient, region, and price
  - Coordinates with B1 (recipes), B2 (effects), B3 (ingredients)

### 🧭 C3 – UX: Landing Page & Nav Flow
- **Role:** Handles homepage, tabs, and onboarding triggers
- **Responsibilities:**
  - Designs navbars, entry flow, menus
  - Ties into onboarding and favorites

---

## 🧪 D – Utility Tier (Testing, Visuals, Assets)

### 🧪 D1 – Debug & Feature Sandbox
- **Role:** Break/fix zone for risky HTML/JS
- **Responsibilities:**
  - Tests broken or experimental ideas from C1, C2
  - Hosts isolated previews via `/test-env/`

### 🗂️ D2 – Assets & Icons Organizer
- **Role:** Tracks and manages image/visual asset files
- **Responsibilities:**
  - Maintains `/assets/images/` and `ingredient_and_strain_icons.json`
  - Ensures correct icon linkage

---

## 🌀 E – Expansion Tier

### 🌀 E1 – Fusion Simulator
- **Role:** Logic engine to simulate chained effects
- **Responsibilities:**
  - Predicts outcomes from fusion chains
  - Supports theoretical calculators
- **Feeds:** B2, C1, C2

### ⭐ E2 – Favorites/Bookmarks Tracker
- **Role:** Tracks user-saved states (bookmarks, filters)
- **Responsibilities:**
  - Uses cookies/sessionStorage/localStorage
  - Integrates into C1 and C3

### 📱 E3 – Mobile UI Handler
- **Role:** Ensures mobile layout compatibility
- **Responsibilities:**
  - Responsive design, collapsible tabs, CSS tuning
- **Feeds:** C1, C3

### 📞 E4 – Uncle Nelson Onboarding Writer
- **Role:** Scripts onboarding dialog and logic
- **Responsibilities:**
  - Writes Uncle Nelson’s tutorial script
  - Hooks into C3 nav triggers and C1 content areas

---

## 🧠 S2 – Codex Prompt Engineer
- **Role:** Translates scoped project tasks into Codex-friendly prompts
- **Responsibilities:**
  - Receives tasks from B1/B2/B4/C1
  - Generates structured prompts with input/output schema
  - Never writes files or deploys code
- **Feeds:** Codex systems via prompt wrapping logic
- **Output Rules:** Must use test-env, include validation/test cases, follow safe prompt patterns

---

📁 Save this file to: `/docs/AGENTS.md`
📌 Update when new modules are added or roles change
