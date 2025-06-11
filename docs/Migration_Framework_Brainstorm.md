# 🧠 Schedule 1 – Migration Framework Brainstorm

This document outlines the planned transformation of the Schedule 1 Recipe Viewer from a static HTML + JSON system into a full-stack, modern web application using Node.js, Next.js, MongoDB, and CDN-based ISR/SSG. Each section compares the old system to the new approach, explains implementation logic, and flags potential complexities.

---

## 1. 🗂️ Data Storage & Structure

### 🔁 Old:
- JSON files in `/data/`
  - `uid_enhanced_recipe_registry.json`
  - `effect_colors.json`
  - `ingredient_and_strain_icons.json`
- Read directly by `main.js`

### 🔄 New:
- MongoDB collections (NoSQL, schema-flexible):
  - `recipes`
  - `effects`
  - `ingredients`
- Linked via ObjectID or key reference (e.g., recipe references ingredient `_id`s)
- Optional: Use static JSON fallback for local dev

### 💡 Notes:
- Recipes will be migrated as documents with nested fields
- Effects and ingredients become independent collections with their own metadata and indexing

---

## 2. 📄 Rendering Logic

### 🔁 Old:
- Static HTML (`index.html`)
- `main.js` dynamically injects DOM based on loaded JSON

### 🔄 New:
- Next.js file-based routing system
  - `/pages/index.js` → homepage
  - `/pages/strain/[strain].js` → dynamic strain recipe pages
  - `/pages/top-regional.js` → Top Recipes view
- `getStaticProps()` + `getStaticPaths()` for SSG
- `revalidate: N` for ISR (e.g., every 60 seconds)

### 💡 Notes:
- Dynamic strain pages auto-generated at build or revalidated at runtime
- Top regional picks benefit from ISR for freshness

---

## 3. 🎛️ Filtering & Search System

### 🔁 Old:
- Pure JS filtering after loading entire JSON into browser

### 🔄 New:
- Server-side filtering via query params + API routes
- Lightweight frontend fallback filtering if offline
- Debounced input search, tag selection, checkbox filtering

### 💡 Notes:
- Effects and ingredients may be pre-loaded into a global search index
- Filter settings can optionally be shareable via URL

---

## 4. 🧬 Metadata & Tooltips

### 🔁 Old:
- Markdown (`Complete_Effect_Guide.md`) and `effect_colors.json`
- Tooltips added via JS on hover

### 🔄 New:
- Tooltips rendered via React components
- Data pulled via `getStaticProps` or hydrated client-side
- Effects have color + description + region demand baked in

### 💡 Notes:
- Use hover cards or modal popouts for richer UX
- Metadata sources can still include `.md` for developer-facing docs

---

## 5. 🎨 Assets & Icons

### 🔁 Old:
- `/assets/images/` with manual `.webp` matching
- Mapped by `ingredient_and_strain_icons.json`

### 🔄 New:
- Use Next.js `<Image>` component for CDN-optimized loading
- Filename convention (`Banana.webp`, `OGKush.webp`) matched automatically
- Optional: keep icon map JSON for legacy compatibility

### 💡 Notes:
- Can add fallback alt-text if images missing
- Consider generating alt text programmatically

---

## 6. 💾 Favorites / Bookmarking System

### 🔁 Old:
- Not implemented

### 🔄 New:
- LocalStorage to track:
  - Favorited recipes
  - Recently viewed
  - Saved filters
- Optional MongoDB sync if users are ever introduced

### 💡 Notes:
- Can display favorites in header tab or sidebar
- Use shadcn/ui toggles to mark/unmark

---

## 7. 🧪 Testing & Dev Environment

### 🔁 Old:
- `/test-env/` folder with HTML + test JS

### 🔄 New:
- Use `/pages/test-preview.js` in Next.js
- Deploy test branches to staging on Vercel
- Experimental files remain in `test-env/` folder for raw exploration

### 💡 Notes:
- Rebuild `test-index.html` as an interactive dev playground in React

---

## 8. 🚀 Deployment Pipeline

### 🔁 Old:
- GitHub Pages deployment via static build

### 🔄 New:
- Hosted on Vercel with:
  - CDN caching
  - ISR for freshness without rebuilds
  - `vercel.json` config for edge behavior

### 💡 Notes:
- Use environment variables for MongoDB keys, feature toggles
- Rollbacks and preview deploys supported natively

---

## 9. 🧠 Codex & Automation

### 🔁 Old:
- Manual prompt wrapping by A1

### 🔄 New:
- Optional Codex endpoint
- Wrapped JSON patching prompts
- Can simulate fusion, patch recipe files, or validate formats

### 💡 Notes:
- No direct writes unless confirmed by Master Vision
- Add `/docs/Codex_Prompt_Log.md` to track prompt output history

---

## ✅ Final Notes
- All modules (B1–E4) will need to update their behaviors to match this framework
- Test output must now assume API/data interaction, not flat JSON only
- Documentation should reflect modular Next.js structure
- Migration will proceed incrementally, preserving legacy JSON while introducing MongoDB/ISR in parallel
