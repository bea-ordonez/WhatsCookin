import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData, totalIngredients) {
    this.recipeList = recipeData.map(recipe => new Recipe(recipe, totalIngredients));
    this.filteredList;
  };

  filterByTag(tag) {
    const results = this.recipeList.filter(recipe => recipe.tags.includes(tag.toLowerCase()));
    this.filteredList += results;
    return this.filteredList;
  };

  filterByName(foodName) {
    const results = this.recipeList.filter(recipe => recipe.name.toLowerCase().includes(foodName.toLowerCase()));
    this.filteredList += results;
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
};

export default RecipeRepository;