

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/uid_enhanced_recipe_registry_smart_tags.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON:', err);
    return;
  }

  let recipes;
  try {
    recipes = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    return;
  }

  for (const uid in recipes) {
    const recipe = recipes[uid];
    if (recipe && typeof recipe.profit_margin === 'number' && recipe.profit_margin > 100) {
      console.log(`${recipe.name} (${recipe.strain}) - Profit: ${recipe.profit_margin} | Price: ${recipe.price}`);
    }
  }
});