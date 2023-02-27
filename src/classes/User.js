import Recipe from "./Recipe";

class User {
  constructor(userInfo){
    this.name = userInfo.name;
    this.id = userInfo.id;
    this.pantryItems = userInfo.pantry;
    this.recipesToCook = userInfo.recipesToCook || [];
  };

  addRecipeToCook(recipe, recipesData) {
    this.recipesToCook.push(new Recipe(recipe, recipesData));
    return this.recipesToCook; 
  };

  removeRecipeFromCook(item) {
    this.recipesToCook.splice(item, 1);
    return this.recipesToCook;
  };

  findByTag(tag) {
    const findByTag = this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    return findByTag;
  };

  findByName(foodName) {
    const findByName = this.recipesToCook.filter(recipe => recipe.name === foodName);
    return findByName;
  };
};

export default User;