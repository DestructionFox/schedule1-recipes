# 📄 Visual Upgrade Tasks – Recipe Viewer

This task outlines the visual improvements scheduled for 📄 C1 – Site Build: Full HTML Recipe Viewer, based on the latest enhancements in recipe data from 📘 B1.

---

## 🎯 Goal

Implement visual indicators for:
1. **Best Region** (regional demand tag)
2. **Strain-Colored Borders** on recipe cards

---

## ✅ Required Changes

### 1. Regional Demand Display
- Extract from: `best_region` field in `uid_enhanced_recipe_registry_smart_tags.json`
- Display as:
  - Top-right badge (`"🏙️ Best in: Downtown"`)
  - Tooltip with full `regional_affinity` data (optional)

### 2. Strain-Based Border Colors
- Add visual cues to match strain type:
  - **OG Kush** → `#4caf50` (green)
  - **Sour Diesel** → `#ffee58` (yellow)
  - **Green Crack** → `#76ff03` (lime)
  - **Grandaddy Purple** → `#ab47bc` (purple)

- Use CSS class convention:
  ```css
  .strain-ogkush-border { border-color: #4caf50; }
  .strain-sourdiesel-border { border-color: #ffee58; }
  .strain-greencrack-border { border-color: #76ff03; }
  .strain-grandaddypurple-border { border-color: #ab47bc; }
  ```

### 3. Optional Enhancements
- Add hover-tooltips for `regional_affinity` breakdown per recipe
- Consider flag/banner style for strain names or region indicators

---

## 🔧 Commands for Implementation
To initialize this task in the chat interface:

```
/reset_scope
/log_task Display best_region on recipe cards and color border based on strain
/assign C1
/relink_master
/push_prompt
```

Prompt to deliver:
```
🎯 Visual Upgrade – Recipe Viewer

You’re now tasked with rendering new visual data from `uid_enhanced_recipe_registry_smart_tags.json`.

✅ Add:
1. A label showing `best_region` on each recipe card (e.g., “Best in Downtown”)
2. A CSS border color based on `strain`:
   - OG Kush = #4caf50
   - Sour Diesel = #ffee58
   - Green Crack = #76ff03
   - Grandaddy Purple = #ab47bc

💡 Optional:
- Tooltip on hover over region name showing `regional_affinity` values
- Use new tag classes like `.strain-ogkush-border` to cleanly apply colors

Sync with 📘 B1 if data appears inconsistent or any UID issues arise.
```

---

## 🧭 Status
Assigned to: 📄 C1 – Site Build  
Reporting to: 🧠 A1 – Master Vision

All visual updates must reflect the core data definitions provided by 📘 B1.
