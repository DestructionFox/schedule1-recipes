
# 📄 Recipe Playground Testing Conventions

This document defines the official testing rules and naming conventions for **📄 B4 – Recipe Playground**.
All simulations, UID generations, and temporary JSON outputs must adhere to these formats.

---

## 🧪 Purpose of B4

📄 B4 is a **sandbox-only** environment used to:
- Simulate mix chains
- Generate temporary/fake recipes
- Stress test evolution logic
- Patch or test JSON outputs (non-production)
- Test ingredient cap behavior

B4 **does not write to production files**.

---

## 🔠 Ingredient & Strain Letter Mapping

Use these one-letter symbols in simulations or shorthand chains:

| Ingredient/Strain     | Symbol |
|-----------------------|--------|
| OG Kush               | `K`    |
| Sour Diesel           | `S`    |
| Green Crack           | `G`    |
| Grandaddy Purple      | `P`    |
| Banana                | `B`    |
| Donut                 | `D`    |
| Cuke                  | `C`    |
| Flu Medicine          | `F`    |
| Mouth Wash            | `M`    |
| Viagra                | `V`    |
| Paracetamol           | `T`    |
| Horse Semen           | `H`    |
| Mega Bean             | `X`    |
| Motor Oil             | `O`    |
| Chili                 | `L`    |
| Energy Drink          | `E`    |
| Addy                  | `A`    |
| Battery               | `Y`    |
| Iodine                | `I`    |
| Gasoline              | `Z`    |

---

## 🧩 Example Simulations

| Syntax               | Meaning                                         |
|----------------------|-------------------------------------------------|
| `Simulate K + B + D` | OG Kush mixed with Banana, then Donut           |
| `Simulate P + C + V + V` | Grandaddy Purple with Cuke and double Viagra |
| `Simulate G + D + D + C` | Green Crack > Donut > Donut > Cuke           |

Repetitions are allowed and must be tested for cap behavior.

---

## 🧪 Fake UID / Name Guidelines

When patching or testing simulated recipes:
- Use UID: `test_{straincode}_{random3}`
- Use Name: `TEST – {Generated Name}` (to avoid frontend parsing errors)
- Output to: `test_patched_recipe_registry.json`

---

## ⚠️ Rules

1. ❌ Do not overwrite `recipe-registry-smart-tags.json`
2. ✅ Only output to test or sandbox folders
3. 🧠 Always tag output JSONs clearly (e.g., `"source": "B4_simulated"`)
4. 🧼 Avoid reusing real UIDs unless purposefully overriding for test

---

## 🧠 Workflow Guidance

- B1 = canonical logic (sync your rules to it)
- C1 = UI renderer (test card layout in `test-index.html`)
- D1 = accepts bugged test files for cleanup if needed

Use `/log_task`, `/reset_scope`, `/push_file`, and `/request` to communicate your test flows upstream.

---
