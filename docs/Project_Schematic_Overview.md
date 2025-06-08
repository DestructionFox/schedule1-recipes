# \ud83d\udce6 Schedule 1 \u2013 Project Schematic Overview

This document outlines the full architecture and data flow for the Schedule 1 Recipe Viewer project. It includes UI structure, rendering logic, JSON dependencies, and documentation references.

---

## \ud83d\udd39 UI LAYER
- HTML: [index.html]  
  - Links to the shared CSS and strain color stylesheets, sets up strain tabs, a regional section, and the \u201cTest Mode\u201d button leading to `/test-env/`
- JS: [main.js renders recipes]  
  - `loadRegionalTop()` pulls from `data/top-regional-recipes-by-region.json` and adds recipe cards per region  
  - `loadStrainRecipes()` pulls from `data/recipe-registry-smart-tags.json`, builds cards with strain-specific borders and a region label  
  - `showStrain()` toggles visible strain sections when tabs are clicked
- CSS:  
  - `style.css` provides base layout, recipe card styling, and effect tag appearance  
  - `strain_color_styles.css` adds strain\u2011colored borders and the `.region-label` formatting

## \ud83d\udd39 DATA LAYER
- `recipe-registry-smart-tags.json`: master recipe registry with strain, price, ingredients, effects, and `best_region` fields
- `top-regional-recipes-by-region.json`: preselected top recipes organized by region for the regional tab
- `effect_colors.json`: maps each effect to an RGB color used for styling and tooltips
- `effect_fusions.json`: defines two-effect combinations that create a resulting effect
- `effect-region-demand.json`: shows how popular each effect is across subregions
- `ingredient_and_strain_icons.json`: associates each ingredient and strain with its icon path in `/assets/images`
- `lexicon_adjectives.json` & `lexicon_nouns.json`: word lists used when automatically generating recipe names

## \ud83d\udd39 DOCS LAYER
- `schedule1-complete-effect-guide.md`: detailed multipliers, effects, and usage math
- `Schedule1_Chat_Module_Index.md`: roles and hierarchy for the project modules
- `workflow-roles-and-communication.md`: explains each module\u2019s responsibilities and communication rules
- `UID_Generation_Guide.md`: explains UID format and generator function for recipes
- Other docs: `Ingredients.md`, `Effects.md`, `ROADMAP_AND_TODO.md`, `Visual_Upgrade_Tasks.md`

## \ud83d\udd39 DYNAMIC LOGIC
- Rendering logic: `main.js` injects HTML recipe cards with strain-specific border classes and region labels
- Filter/search system: planned (see `ROADMAP_AND_TODO.md`)
- Tooltip handling: effect metadata and color-coded tags support hover logic (see `Visual_Upgrade_Tasks.md`)

## \ud83d\udc40 INTERCONNECTIONS
- Recipes \u2192 Effects \u2192 Rendered Cards: JSON data lists effects; JS renders them into styled `<span>` tags
- Data updates \u2192 Drive UI rerenders: JSON files control what appears in the browser
- Markdown guides \u2192 Explain backend logic, naming rules, future tasks

---

\u2705 Summary:
Schedule 1 connects frontend rendering to JSON-driven logic and developer-facing documentation. HTML provides layout containers, JavaScript renders data dynamically, and JSON acts as the single source of truth. Stylesheets define strain colors and UI consistency. Documentation guides all core logic, naming, and effect metadata. Every layer serves a defined module with a clear role in visualizing drug recipes for gameplay.
