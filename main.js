function showStrain(id) {
  document.querySelectorAll('.strainSection').forEach(div => div.style.display = 'none');
  document.querySelectorAll('.tabButton').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).style.display = 'block';
  document.getElementById(id + '_tab').classList.add('active');
}

async function loadRegionalTop() {
  const response = await fetch('data/top_regional_recipes.json');
  const data = await response.json();
  const container = document.getElementById('regionalContent');
  for (const region in data) {
    const regionTitle = document.createElement('h3');
    regionTitle.textContent = region;
    container.appendChild(regionTitle);
    data[region].forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipeCard';
      card.innerHTML = `
        <h3>${recipe.Name} — ${recipe["Sell Price"]}</h3>
        <strong>Ingredients:</strong><br>
        ${recipe.Ingredients.map(i => `<img class="ingredient-icon" src="assets/images/${i.replace(/ /g,'_')}_Icon.webp" alt="${i}"> ${i}`).join(' ')}
        <br><strong>Effects:</strong><br>
        ${recipe.Effects.map(e => `<span class="effect">${e}</span>`).join(' ')}
      `;
      container.appendChild(card);
    });
  }
}

async function loadStrainRecipes() {
  const response = await fetch('data/uid_enhanced_recipe_registry_smart_tags.json');
  const data = await response.json();

  const strainMap = {
    "OG Kush": "OGKush",
    "Sour Diesel": "SourDiesel",
    "Green Crack": "GreenCrack",
    "Grandaddy Purple": "GrandaddyPurple"
  };

  for (const [strainName, id] of Object.entries(strainMap)) {
    const container = document.getElementById(id + "_Recipes");
    if (!container) continue;

    const recipes = Object.entries(data)
      .filter(([uid, r]) => r.base_strain === strainName)
      .map(([uid, r]) => ({ uid, ...r }));

    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipeCard';
      card.innerHTML = `
        <h3>${recipe.name || recipe.uid} — $${recipe.price_per_gram}/g</h3>
        <strong>Ingredients:</strong><br>
        ${recipe.ingredients.map(i => `<img class="ingredient-icon" src="assets/images/${i.replace(/ /g,'_')}_Icon.webp" alt="${i}"> ${i}`).join(' ')}
        <br><strong>Effects:</strong><br>
        ${recipe.effects.map(e => `<span class="effect">${e}</span>`).join(' ')}
      `;
      container.appendChild(card);
    });
  }
}

window.onload = () => {
  showStrain('Regional');
  loadRegionalTop();
  loadStrainRecipes();
};