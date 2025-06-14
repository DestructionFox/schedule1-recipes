# Schedule 1 – File Structure & Format Guide

This document outlines the purpose and usage of each key file in the Schedule 1 Recipe Viewer project. It includes an overview of folders, major JSON data files, Markdown documentation, and UI assets.

---

## ✅ 1. File Purpose Summary

### 📁 `/index.html`, `main.js`, `style.css`
- **Core UI structure**
- `index.html`: Base layout
- `main.js`: Pulls JSON data, handles UI rendering
- `style.css`: Visual theming, dark mode, card designs

### 📁 `/assets/images/`
- Contains all `.webp` icons for:
  - Ingredients
  - Base weed strains

### 📁 `/assets/styles/`
- Holds `style.css` for production and `test-style.css` for sandbox use

### 📁 `/data/`
- Central JSON/Markdown repository
- Data files used by JS, effect viewers, filters, and comparators

### 📁 `/docs/`
- Developer-facing Markdown files
- Contains:
  - Metadata docs
  - UID logic
  - Best-of recipes
  - Human-readable versions of complex JSON data

### 📁 `/test-env/`
- Contains alternate/test HTML+JS+CSS
- Used to validate new features without disrupting live production

---

## ✅ 2. JSON and Markdown File Roles

### JSON FILES

#### `uid_enhanced_recipe_registry.json`
> Core backend recipe registry. Contains:
- Ingredient list
- Calculated profit
- Sell price, cost, UID, strain, effect tags

#### `schedule1_all_recipes_named.json`
> Clean readable list of known recipes, strain-categorized, with names and ingredient lists

#### `effect_colors.json`
> Maps each effect to a hex or RGB color. Used in:
- Effect tags
- Visual styling and rarity indicators

#### `effect_fusions.json`
> Describes which base effects can produce others

#### `ingredient_and_strain_icons.json`
> Maps names like “Banana” to file names like `Banana_Icon.webp`

#### `top_regional_recipes.json`
> Contains best picks by region (Westville, Docks, Uptown...)

#### `top_regional_recipes_with_regions.json`
> Same as above but each entry also includes its `Region` field for easier data joins

---

### MARKDOWN FILES

#### `Schedule1_Complete_Effect_Guide.md`
- Explanation of all effect types
- Rarity / fusion / regional value

#### `Schedule1_All_24_Recipes_Named.md`
- Static HTML backup of main recipes (original scraped list)

#### `Ingredients.md`
- Full table of every usable ingredient
- Shows unlock level, source, effect

#### `Best_Recipes.md`
- Manually curated high-value or early-game recipes

#### `ROADMAP_AND_TODO.md`
- Task tracking and long-term goals

#### `UID_Generation_Guide.md`
- Explains naming system used for recipe UIDs

---

Maintain this as a reference for chat module authors and any new developer onboarding.
