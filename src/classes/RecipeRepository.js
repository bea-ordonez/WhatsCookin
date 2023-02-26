import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData, totalIngredients) {
    this.recipeList = recipeData.map(recipe => new Recipe(recipe, totalIngredients));
    this.filteredList;
    this.sortedByPrice;
  };

  filterByTag(tag) {
    const results = this.recipeList.filter(recipe => recipe.tags.includes(tag.toLowerCase()));
    this.filteredList = results;
    return this.filteredList;
  };

  filterByName(foodName) {
    const results = this.recipeList.filter(recipe => recipe.name.toLowerCase().includes(foodName.toLowerCase()));
    this.filteredList = results;
    return this.filteredList;
  };

  getRecipeById(id) {
    const getId = this.recipeList.find(recipe => recipe.id === id);
    return getId;
  };

  findRecipe(id) {
    const singleRecipe = this.recipeList.find(recipe => {
      let idToNum = parseInt(id);
      if(recipe.id === idToNum){
        return recipe;
      };
    });
    return singleRecipe;
  };

  sortRecipesByCost() {
    this.recipeList.map(recipe => recipe.retrieveIngredientInfo())
    let getPrice = this.recipeList.reduce((acc, recipe) => {
      let cost = recipe.totalCostOfIngredients();
      const between = (min, max) => cost >= min && cost <= max;
      if(between(0, 50)) {
        acc.low.push(recipe);
      } else if(between(51, 100)) {
        acc.lowMid.push(recipe);
      } else if(between(101, 150)) {
        acc.mid.push(recipe);
      } else if(between(151, 200)) {
        acc.midHigh.push(recipe);
      } else if(cost > 201) {
        acc.high.push(recipe);
      };
      return acc;
    }, {low: [], lowMid: [], mid: [], midHigh: [], high: []});
    this.sortRecipesByCost = getPrice;
    return this.sortRecipesByCost;
  };
};

export default RecipeRepository;