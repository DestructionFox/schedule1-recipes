# UID Generation Strategy

Used to ensure consistent, collision-resistant identifiers for recipes.

---

### Format
`<strain_slug>_<price>_<hash>`

- `strain_slug`: Lowercase, no-space version of strain name.
- `price`: Recipe's selling price.
- `hash`: First 6 characters of SHA1 hash of sorted ingredient list (joined by '|').

---

### Python Generator Function

```python
from hashlib import sha1

def generate_uid(strain, price, ingredients):
    strain_slug = strain.lower().replace(" ", "")
    ingredients_string = "|".join(sorted(ingredients))
    hash_part = sha1(ingredients_string.encode()).hexdigest()[:6]
    return f"{strain_slug}_{price}_{hash_part}"
```
