import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData, totalIngredients) {
    this.recipeList = recipeData.map(recipe => new Recipe(recipe, this.allIngredients));
    this.filteredList; 
    this.allIngredients = totalIngredients
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

  // filterByNameOrTag(foodName) {
  //   const findByName = this.recipeList.filter(recipe => recipe.name.toLowerCase().includes(foodName.toLowerCase()) || recipe.tags.includes(tag));
  //   this.filteredList = findByName;
  //   return findByName;
  // };

  findRecipe(id) {
    const oneRec = this.recipeList.find(recipe => {
      let idToNum = parseInt(id)
      if(recipe.id === idToNum){
        return recipe;
      }
    });
    return oneRec;
  }
};

export default RecipeRepository;