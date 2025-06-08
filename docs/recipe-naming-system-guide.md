# 🧠 Recipe Naming System – Schedule 1 Project

This document outlines the logic, data structure, naming format, and lexicon source for dynamically generating recipe names for all Schedule 1 drug recipes. The system was designed to replace manual naming with consistent, stylish, and game-flavor-aligned name generation that mirrors in-game humor and thematic tone.

---

## 🎯 Purpose

- Fill in missing names across the recipe registry.
- Automatically generate names that feel authentic to the in-game vibe (vulgar, bizarre, funny).
- Standardize naming with expandable logic for future drug types.

---

## 🧩 Format

Each recipe name is generated using the following format:

```
[Strain Name] + [Lexicon Adjective] + [Effect Token] + [Lexicon Noun]
```

**Examples:**
- `OG Hairy Thought Cookies`
- `Green Sexy Fog Balls`
- `Grandaddy Slippery Mint Ass`
- `Sour Shiny Glow Splooge`

If no valid token is found for any effect, the system falls back to a default token such as `"Dream"`.

---

## 🧾 Input Files

To generate names, the following files are used:

| File Name | Description |
|-----------|-------------|
| `recipe-registry-smart-tags.json` | Main recipe registry file with all structured recipe data |
| `lexicon_adjectives.json` | List of humorous/in-game-like adjectives |
| `lexicon_nouns.json` | List of vulgar/funny nouns |
| `effect_to_name_tokens.json` | Mapping of effects to nameable word fragments |

---

## ⚙️ Logic Rules

1. Extract `"strain"` field from each recipe.
2. Randomly choose:
   - One `adjective` from `lexicon_adjectives.json`
   - One `noun` from `lexicon_nouns.json`
3. Select one `"effect"` from the recipe's `"effects"` list.
   - Match it to `effect_to_name_tokens.json`
4. If `name` is missing or null:
   - Build the name string using format above
   - Ensure uniqueness (add suffix `#2`, `#3` etc. if duplicate)
5. Leave existing names untouched.
6. Return a new patched file:
   - `uid_enhanced_recipe_registry_named.json`

---

## 💡 Design Philosophy

The naming system captures the tone of the game: raunchy, absurd, chaotic.
The use of in-game generated words (smegma, assblaster, cookies, grool, etc.) keeps it immersive and hilarious for players.
Effect-based tokens allow deeper relevance between what a recipe does and what it’s called.

---

## 📁 Output Example

```json
{
  "uid": "GDP-001",
  "strain": "Grandaddy Purple",
  "ingredients": ["Banana", "Cuke"],
  "effects": ["Tropic Thunder", "Jennerising"],
  "name": "Grandaddy Hairy Tropic Splooge"
}
```

---

## 🔮 Future Considerations

- Add regional themes (e.g., “LA Crack Fuel”)
- Separate naming styles for other drug categories (e.g., Meth, Cocaine)
- Incorporate player data or favorite tags into naming logic

---