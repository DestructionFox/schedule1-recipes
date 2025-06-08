# 🧠 Schedule 1 – Workflow Roles & Communication Guide

This file defines the structure and internal logic of the Schedule 1 Recipe Viewer Project. Each chat in this project represents a focused module responsible for a part of the frontend, backend, or data pipeline. This document ensures they communicate effectively, follow hierarchy, and know where to redirect or request information.

---

## 🧭 MASTER LEVEL

### 🧠 A1 – Master Vision & Project Brain
**Role:** Top-level coordinator of all chats. Tracks vision, roadmap, naming, and hierarchy.

- **You report to no one.**
- **You assign roles, rename chats, set prompts, and break down ideas into modules.**
- All chats can request clarification or direction from you.

---

## 📘 CORE LOGIC TIER

### 📘 B1 – Recipe Logic & Data Registry
**Role:** Backend recipe brain. Handles UID logic, evolution rules, price logic, and JSON patching.

- **Reports to:** 🧠 A1
- **Feeds into:** C1 (HTML Viewer), C2 (Filtering), B2 (for effects), B3 (for metadata)
- **Use this chat when:** You want to validate mix logic, patch recipe files, or test new mechanics.
- **Knows:** Which JSONs are canonical (`uid_enhanced_recipe_registry.json`), how to maintain structure.

---

### 📘 B2 – Effect Logic & Pricing Doc Chat
**Role:** Effects knowledge base. Manages pricing multipliers, effect metadata, visual tags, and documentation.

- **Reports to:** 🧠 A1
- **Feeds into:** C1 (UI Viewer), C2 (Search), D2 (color styling)
- **Use this chat when:** You’re refining effect visuals, updating multipliers, or defining fusion logic.
- **Maintains:** `Schedule1_Complete_Effect_Guide.md`

---

### 🧾 B3 – Ingredient & Item Metadata Chat
**Role:** Ingredient stats hub. Tracks cost, unlock level, and metadata for all non-weed-strain items.

- **Reports to:** 🧠 A1
- **Feeds into:** C1 (UI Viewer), C2 (Filtering), B1 (Recipe JSON)
- **Use this chat when:** You want to cross-reference ingredient data or add metadata to filtering.

---

## 📄 UI & VIEWER TIER

### 📄 C1 – Site Build: Full HTML Recipe Viewer
**Role:** Frontend builder for index.html. Renders recipes, icons, effects, and tabs using real data.

- **Reports to:** 🧠 A1
- **Pulls from:** B1 (recipes), B2 (effects), B3 (icons/metadata)
- **Use this chat when:** You want to render or style the full site UI or troubleshoot layout errors.

---

### 🔍 C2 – Filtering & Search System
**Role:** Filtering engine for recipes. Builds dropdowns, tag-based filtering, and search logic.

- **Reports to:** 🧠 A1
- **Coordinates with:** B1 (recipe tags), B2 (effect-based filters), B3 (ingredient toggles), C1 (frontend)
- **Use this chat when:** You want to build user filters or recipe comparison features.

---

### 🧭 C3 – UX: Landing Page & Nav Flow
**Role:** Organizes homepage, onboarding, and menu structure (e.g., tabs, strain switches, and layout toggles)

- **Reports to:** 🧠 A1
- **Coordinates with:** C1 (content), E4 (onboarding), E2 (favorites)
- **Use this chat when:** You want to create flow from landing to recipes or optimize onboarding.

---

## 🔧 UTILITY TIER

### 🧪 D1 – Debug & Feature Sandbox
**Role:** Break and fix zone. Test incomplete HTML, JS, or features before production.

- **Reports to:** 🧠 A1
- **Receives inputs from:** C1 and C2
- **Use this chat when:** You want to try something risky or debug layout/logic bugs.

---

### 🗂️ D2 – Assets & Icons Organizer
**Role:** Manages the /assets/images and JSON image maps.

- **Reports to:** 🧠 A1
- **Supports:** C1 (icons), B3 (icon metadata), B2 (effect tag colors)
- **Use this chat when:** Image files are missing, renamed, or broken in layout.

---

## 🌀 EXPANSION FEATURES

### 🌀 E1 – Fusion Simulator
**Role:** Experimental calculator for chaining effects and testing ingredient outcomes.

- **Reports to:** B2
- **Use this chat when:** You want to simulate recipe paths or build an effect chain engine.

---

### ⭐ E2 – Favorites/Bookmarks Tracker
**Role:** Tracks recent views and bookmarks via cookies/localStorage.

- **Reports to:** C1 and C3
- **Use this chat when:** You want to support favoriting recipes or saving searches.

---

### 📱 E3 – Mobile UI Handler
**Role:** Adapts UI to work on phones. Ensures readability and reflows layout.

- **Reports to:** C1 and C3
- **Use this chat when:** You want to ensure responsiveness or test on mobile.

---

### 📞 E4 – Uncle Nelson Onboarding Writer
**Role:** Writes dynamic onboarding as Uncle Nelson. Handles tutorial steps and dialog.

- **Reports to:** C3
- **Use this chat when:** You’re writing the intro flow for first-time users.

---

## 📌 Notes for All Chats
- Refer to 🧠 A1 for project coordination or naming.
- Always update `/data/` before rendering.
- Style through shared `/assets/styles/style.css`.
- Store drafts or risky ideas in `/test-env/`.

--- 

End of structure.

### 🧠 S2 – Codex Prompt Engineer

- **Role**: Translates high-level project tasks into Codex-compatible prompts.
- **Input**: Tasks from B1 (logic), C1 (frontend), B4 (testing), etc.
- **Output**: Structured code generation prompts, safe for Codex execution.
- **Rules**:
  - Ask source, destination, overwrite policy
  - No file writing or execution
  - Use `/test-env/` unless told otherwise
  - Must include validation/test format

**Hierarchy**: Reports to Master Vision (A1)
**Coordinates with**: B1, B2, C1, B4, D1