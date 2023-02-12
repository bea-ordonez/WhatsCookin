import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData.map(recipe => new Recipe(recipe));
    this.filteredList; 
  };

  filterByTag(tag) {
    const findByTag = this.recipeList.filter(recipe => recipe.tags.includes(tag.toLowerCase()));
    this.filteredList = findByTag;
    return findByTag;
  };

  filterByName(foodName) {
    const findByName = this.recipeList.filter(recipe => recipe.name.toLowerCase().includes(foodName.toLowerCase()));
    this.filteredList = findByName;
    return findByName;
  };

  getRecipeById(id) {
    const getId = this.recipeList.find(recipe => {
      return recipe.id === id;
    });
    return getId;
  };
};

export default RecipeRepository;