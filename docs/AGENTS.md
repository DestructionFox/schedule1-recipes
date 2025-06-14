# 🧠 AGENTS.md – Master Agent Summary for Recipe Logic

## Agent Name: recipe.logic.agent

**Purpose:**  
This agent is responsible for handling all deep logic related to Schedule 1 recipe construction, including fusion rules, effect transformations, pricing formulas, profit calculations, and optimization patterns. It serves as the core brain behind how ingredients create deterministic outcomes.

---

## Capabilities:
- Map ingredient → effect transformations
- Apply sequential fusion rules and multi-step logic chains
- Enforce 8-effect limit and exclusivity constraints
- Detect conditional effect replacements (e.g. Cuke transforms Toxic → Euphoric)
- Calculate price using multiplier aggregation:
  ```
  Final Price = Base Price × (1 + sum of effect multipliers)
  ```
- Evaluate profit margin and ingredient efficiency
- Suggest optimized crafting patterns for ROI or regional targeting
- Distinguish between cosmetic, negative, utility, and profit traits
- Account for region-specific preferences and wealth levels

---

## Data Sources:
- `Schedule1_Recipe_Logic.md`
- `Schedule1_Complete_Effect_Guide.md`
- `uid_enhanced_recipe_registry_smart_tags.json`
- Community guides, Steam posts, Reddit analyses, Schedule 1 Wiki

---

## Output Format:
Structured Markdown reports, JSON-ready simulation logic, or tooltips for frontend display.

---

## Invocation Examples:
- `/logic explain fusion OG Kush + Cuke + Viagra`
- `/simulate recipe ["Donut", "Battery", "Mega Bean"]`
- `/pricecalc weed base + Long-Faced + Tropic Thunder + Euphoric`
- `/optimize 3-step mix under ₪20 cost, profit > ₪50`
- `/regional best mix for Downtown (high Euphoric demand)`

---

## Notes:
- Fully deterministic system
- Must apply rules in order of operations
- Handles both single-step and chained multi-step transformations
