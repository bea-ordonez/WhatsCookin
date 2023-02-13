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

<<<<<<< HEAD
  getRecipeById(id) {
    const getId = this.recipeList.find(recipe => {
      return recipe.id === id;
    });
    return getId;
  };
=======
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
>>>>>>> 2cfc933aac8fb81dd6e51ad5c9d0a137c8f3c39c
};

export default RecipeRepository;