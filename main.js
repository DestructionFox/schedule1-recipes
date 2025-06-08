function showStrain(id) {
  document.querySelectorAll('.strainSection').forEach(div => div.style.display = 'none');
  document.querySelectorAll('.tabButton').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).style.display = 'block';
  document.getElementById(id + '_tab').classList.add('active');
}

async function loadRegionalTop() {
  const response = await fetch('data/top-regional-recipes-by-region.json');
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
  const response = await fetch('data/recipe-registry-smart-tags.json');
  const recipes = await response.json();

  const strainMap = {
    "OG Kush": "OGKush",
    "Sour Diesel": "SourDiesel",
    "Green Crack": "GreenCrack",
    "Grandaddy Purple": "GrandaddyPurple"
  };

  for (const [strainName, id] of Object.entries(strainMap)) {
    const container = document.getElementById(id + "_Recipes");
    if (!container) continue;

    for (const [uid, recipe] of Object.entries(recipes)) {
      if (recipe.strain !== strainName) continue;

      const cssClass = `strain-${strainName.toLowerCase().replace(/ /g, '')}-border`;
      const region = recipe.best_region || 'Unknown';
      const card = document.createElement('div');
      card.className = 'recipeCard ' + cssClass;
      card.innerHTML = `
        <h3>${recipe.name || uid} — $${recipe.price}</h3>
        <div class="region-label">🏙️ Best in ${region}</div>
        <strong>Ingredients:</strong><br>
        ${recipe.ingredients.map(i => `<img class="ingredient-icon" src="assets/images/${i.replace(/ /g,'_')}_Icon.webp" alt="${i}"> ${i}`).join(' ')}
        <br><strong>Effects:</strong><br>
        ${recipe.effects.map(e => `<span class="effect">${e}</span>`).join(' ')}
      `;
      container.appendChild(card);
    }
  }
}

window.onload = () => {
  showStrain('Regional');
  loadRegionalTop();
  loadStrainRecipes();
};