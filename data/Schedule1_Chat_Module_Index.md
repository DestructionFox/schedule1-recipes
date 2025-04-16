# 🧠 Schedule 1 – Project Chat Index & Module Roles

This document outlines all active ChatGPT project modules used in the Schedule 1 Recipe Viewer project. Each module is assigned a clear name, responsibility, and reporting hierarchy. This file serves as the centralized team structure for development, reference, and onboarding.

---

## 🧠 A – Master Tier

### 🔹 A1 – Master Vision & Project Brain
**Role:** Central coordinator of the entire Schedule 1 project.  
**Responsibilities:**
- Maintain the big-picture vision and scope
- Track module hierarchy and dependencies
- Rename, rank, and classify chats
- Approve new modules and structural decisions
- Receive summaries and evaluate progress from all units  
**Reports to:** None (top of the hierarchy)

---

## 📘 B – Core Logic Tier (Backend & Data)

### 📘 B1 – Recipe Logic & Data Registry
**Role:** Backend engine for validating and managing all recipe logic  
**Responsibilities:**
- Validate evolution rules and mixing mechanics
- Implement UID and profit logic in `uid_enhanced_recipe_registry.json`
- Maintain the source-of-truth recipe registry
- Test and predict valid mixes and combos
**Reports to:** 🧠 Master Vision

---

### 📘 B2 – Effect Logic & Pricing Doc Chat
**Role:** Knowledge base and documentation engine for effect metadata  
**Responsibilities:**
- Manage `Schedule1_Complete_Effect_Guide.md`
- Validate price multipliers and rarity tiers
- Maintain effect hover-tooltips and styling logic
- Help filtering systems sort recipes by effects
**Reports to:** 🧠 Master Vision

---

### 🧾 B3 – Ingredient & Item Metadata Chat
**Role:** Metadata authority for all non-strain ingredients  
**Responsibilities:**
- Maintain icons, names, unlock levels, pricing, and sourcing
- Link ingredients to their effects
- Power filtering, tooltip, and grid/list views
**Reports to:** 🧠 Master Vision  
**Serves:** 📄 C1 and 🔍 C2

---

## 📄 C – UI/Frontend Tier

### 📄 C1 – Site Build: Full HTML Recipe Viewer
**Role:** Main frontend site builder and renderer  
**Responsibilities:**
- Build `index.html`, `main.js`, and `style.css`
- Render dynamic strain/recipe cards using data from JSON
- Implement tab views, tooltips, card formatting, etc.
- Integrate icons, effects, filters
**Reports to:** 🧠 Master Vision  
**Consults:** 📘 B1, 📘 B2, 🧾 B3

---

### 🔍 C2 – Filtering & Search System
**Role:** Smart filtering/search engine for recipes  
**Responsibilities:**
- Enable real-time filtering by strain, region, price, ingredient, or effect
- Use dropdowns, text inputs, checkboxes, and tag selectors
- Connect to recipe and effect metadata
**Reports to:** 🧠 Master Vision  
**Uses data from:** 📘 B1, 📘 B2, 🧾 B3

---

### 🧭 C3 – UX: Landing Page & Nav Flow
**Role:** UX designer for the site’s homepage and navigation logic  
**Responsibilities:**
- Build a stylish, helpful landing experience
- Add navbars, menus, strain selectors, and intro messages
- Design user onboarding logic (ties into E4)
**Reports to:** 🧠 Master Vision  
**Coordinates with:** 📄 C1

---

## 🧪 D – Visuals, Assets, and Testing

### 🧪 D1 – Debug & Feature Sandbox
**Role:** Dev sandbox for broken features or ideas  
**Responsibilities:**
- Receive broken UI/JS/CSS for testing and repair
- Serve as a preview lab for new experimental features
**Reports to:** 🧠 Master Vision  
**Feeds back into:** 📄 C1 and 🔍 C2

---

### 🗂️ D2 – Assets & Icons Organizer
**Role:** Manages all visual asset organization  
**Responsibilities:**
- Maintain `/assets/images/` and `/assets/styles/`
- Create `ingredient_and_strain_icons.json`
- Ensure icons match recipe and item metadata
**Reports to:** 🧠 Master Vision  
**Serves:** 📄 C1, 🔍 C2, 🧾 B3

---

## 🌀 E – Feature Expansion Tier

### 🌀 E1 – Fusion Simulator
**Role:** Experimental logic engine for effect fusion paths  
**Responsibilities:**
- Simulate chain effects and combo evolution trees
- Predict high-value outcomes from mix chains
- Could evolve into a calculator later
**Reports to:** 🧠 Master Vision  
**Feeds ideas into:** 📄 C1 and 🔍 C2

---

### ⭐ E2 – Favorites/Bookmarks Tracker
**Role:** Tracks user-favorited recipes and filters  
**Responsibilities:**
- Use cookies/sessionStorage/localStorage
- Allow saving filters, strain preferences, bookmarks
**Reports to:** 🧠 Master Vision  
**Integrates into:** 📄 C1

---

### 📱 E3 – Mobile UI Handler
**Role:** Adapts the entire site for mobile and small screen use  
**Responsibilities:**
- Collapse tabs and menus for phones
- Ensure filters and views are readable on mobile
- Optimize touch layouts
**Reports to:** 📄 C1 and 🧭 C3

---

### 📞 E4 – Uncle Nelson Onboarding Writer
**Role:** Writes onboarding dialog and tutorial behavior  
**Responsibilities:**
- Script Uncle Nelson’s intro flow
- Write his lines and option responses
- Trigger help flow in UI
**Reports to:** 🧭 C3  
**Integrates with:** 📄 C1

---

## ✅ Notes:
- Chat icons indicate tier (📘 = Core Logic, 📄 = UI, 🧠 = Central, etc.)
- This file is meant to be uploaded to `/docs/` and updated whenever roles change
- Each module prompt has been embedded into its chat for internal alignment

---

Version: **2025.04.15**  
Maintained by: 🧠 Master Vision  




🧠 Master Vision & Project Brain
├── 🧬 Core Data & Intelligence
│   ├── 📘 B1 – Recipe Logic & Data Registry
│   ├── 📘 B2 – Effect Logic & Pricing Doc Chat
│   └── 🧾 B3 – Ingredient & Item Metadata Chat (NEW)
│
├── 🖥️ UI & Frontend Display
│   ├── 📄 C1 – Site Build: Full HTML Recipe Viewer
│   ├── 🔍 C2 – Filtering & Search System (NEW)
│   └── 🧭 C3 – UX: Landing Page & Nav Flow (NEW)
│
├── 🔧 Utility & Infrastructure
│   ├── 🧪 D1 – Debug & Feature Sandbox (NEW)
│   └── 🗂️ D2 – Assets & Icons Organizer (NEW)
│
└── 🌀 Future Modules
    ├── 🧠 E1 – Fusion Simulator
    ├── ⭐ E2 – Favorites/Bookmarks Tracker
    ├── 📱 E3 – Mobile UI Handler
    └── 📞 E4 – Uncle Nelson Onboarding Writer
