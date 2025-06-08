# 📌 Schedule 1 – Roadmap & To-Do Tracker

This roadmap tracks major goals, features, and module assignments in the Schedule 1 Recipe Viewer project. It includes current priorities, long-term stretch goals, and chat dependencies.

---

## 🎯 CORE GOALS

- [x] Display complete, accurate recipe data for each weed strain
- [x] Sort and filter by effects, cost, region, ingredient
- [x] Host site on GitHub Pages with optimized frontend
- [ ] Support multiple base drug types (future: meth, cocaine, etc.)

---

## 🔧 Utility & Testing Features

- [x] Set up `/test-env/` folder and file structure
- [x] ✅ **Add persistent toggle button for switching to the test environment**
  - Implemented button in `index.html` that loads `test-index.html` from `/test-env/`
  - Coordinated with 🔍 C2 and 🧪 D1 for rendering logic
- [ ] Create reusable test boilerplate files (HTML/JS/CSS) in `/test-env/`

---

## 📄 UI/UX Goals

- [ ] Build dynamic recipe comparator UI
- [ ] Add production calculator for batch mix planning
- [ ] Show ingredient order with proper spacing and item count
- [ ] Add effect hover-tooltips with wiki popup option
- [ ] Add clickable effect filters to recipes
- [ ] Show cost and profit details per recipe card
- [ ] Implement grid vs. list toggle on Ingredient Viewer
- [ ] Add consistent navbar + toggle menu (Hamburger + side menu)
- [ ] Include help/tutorial icon for onboarding

---

## 🔍 Filtering & Search

- [ ] Smart filter UI (region, strain, cost, effect)
- [ ] Combine ingredient and effect filtering into unified bar
- [ ] Allow bookmarking filters or saving last view
- [ ] Add toggle for sort mode (profit, steps, cost efficiency)

---

## 📚 Docs & Metadata

- [x] Create `Schedule1_Chat_Module_Index.md`
- [x] Create `workflow-roles-and-communication.md`
- [x] Finish `schedule1-complete-effect-guide.md`
- [ ] Polish `Ingredients.md` with pricing and effects
- [ ] Add player-facing help guide (`How_To_Mix.md`)
- [ ] Create `Schedule1_Dev_Tips.md` for contributors

---

## 🌀 Stretch Features

- [ ] Uncle Nelson onboarding script (dialog, flow, dismiss button)
- [ ] Fusion simulator (effect chaining)
- [ ] Favorites system (local save with cookies/sessionStorage)
- [ ] Mobile UI reflow and resizing logic
- [ ] Full multi-drug architecture switch (post-launch)

---

_Last updated: 2025-04-15_
Maintained by: 🧠 Master Vision


## 🔧 Test Environment Toggle (High Priority)

- [x] Implemented a persistent button to toggle between production and test environments.
- [x] Button clearly labeled to indicate the active environment.
- [x] Test features isolated in the `/test-env/` directory.
- [x] Confirmed no cross-contamination between production and test assets.
