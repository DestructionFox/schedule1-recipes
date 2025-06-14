# 📁 Schedule 1 – File Structure & Format Guide (Next.js + Agent Migration)

This document explains the folder structure and file conventions for the **Schedule 1 Recipe Viewer** project as it migrates to a **Next.js + MongoDB + ISR** architecture, while retaining its familiar folder layout.

---

## 📂 Folder Structure Overview

```
E:.
├───assets
│   ├───images           # Strain and ingredient icons (WebP format)
│   └───styles           # CSS files for global and scoped style logic
├───data
│   ├───uid_enhanced_recipe_registry_smart_tags.json
│   ├───effect_metadata.json
│   ├───top_regional_recipes.json
│   └───.Legacy          # Archived data files before format updates
├───docs
│   ├───Ingredients.md
│   ├───Best_Recipes.md
│   ├───Schedule1_Deep_Recipe_Research_Report.md
│   └───.Legacy          # Old/retired documentation
├───test-env
│   ├───assets           # UI sandbox icons and CSS
│   └───data             # Temporary test data
│       └───Legacy
```

---

## 🧠 Project Layers

| Layer | Purpose |
|-------|---------|
| `/data/` | Core source of truth – JSON inputs for recipes, effects, pricing, etc. |
| `/assets/` | All static frontend assets – primarily images and stylesheets |
| `/docs/` | Markdown documentation used by developers, writers, and onboarding |
| `/test-env/` | Safe space for visual or logic experiments, never used in production |

---

## 🔧 Under-the-Hood Architecture (Next.js + MongoDB)

Even with this legacy-inspired file layout, the new architecture uses:

- **Next.js pages + ISR** to render recipe views statically but update them via database hooks
- **MongoDB** stores normalized recipes, effects, and ingredient references
- **API Routes (`/api/`)** support:
  - `/api/recipe/[uid]` – fetch specific recipe
  - `/api/simulate` – run agent-based fusion logic
- **AGENTS** power logic like fusion, scoring, price prediction

---

## 📄 File Format Conventions

### JSON
- All JSON must be **minified** in production
- Naming convention: `snake_case.json`
- `uid_enhanced_recipe_registry_smart_tags.json` is primary
- All entries must include:
  ```json
  {
    "uid": "ogkush_127_fb0060",
    "name": "...",
    "effects": ["..."],
    "ingredients": ["..."],
    "calculated_price": 140,
    ...
  }
  ```

### Markdown
- `.md` files live in `/docs/`
- Must start with an H1 title
- All long-form logic (fusion, pricing, mechanics) lives here

### Images
- WebP format only
- Named to match ingredient or strain: `ogkush.webp`, `mouthwash.webp`
- Icons stored in `/assets/images/`

### CSS
- Global styles: `assets/styles/style.css`
- Strain/effect-specific styling: `strain_color_styles.css` (also in `/assets/styles/`)

---

## 🧠 Agent + API Sync Strategy

Agents live in backend logic but reference `/data/` for base truth and `/docs/` for annotations.

- Simulation agents pull from:
  - JSON files (recipes)
  - Agent logic maps (via `AGENTS.md`)
- Output can be:
  - Rendered in Next.js frontend
  - Sent back to `/api/simulate`
  - Exported as `.md` or `.json` for docs or testing

---

## ✅ Naming Standards Summary

| File Type | Convention | Example |
|-----------|------------|---------|
| JSON | `snake_case.json` | `effect_metadata.json` |
| Markdown | `PascalCase.md` | `Schedule1_Deep_Recipe_Research_Report.md` |
| Images | `lowercase.webp` | `banana.webp` |
| CSS | `hyphenated.css` | `strain_color_styles.css` |

---

## 🚧 In Development

New folders (internal use, not shown yet):

- `/agents/` – logic modules like `recipe.logic.agent.js`
- `/schemas/` – MongoDB schema files
- `/sim/` – test harnesses and pattern evaluations
- `/api/` – live routes for data queries and simulation

These will be added to the repo root but won’t disrupt the top-level folder style.

