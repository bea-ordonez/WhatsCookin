import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe, allIngreds) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.todosIngredients = allIngreds;
    this.totalCost;
  }

  retrieveIngredientInfo() {
    const currentIngredients = this.ingredients.map(i => {
      let newIng = new Ingredient(i);
      newIng.returnIngredientName(this.todosIngredients, i.id);
      newIng.returnIngredientCost(this.todosIngredients, i.id);
      return newIng;
    });
    this.ingredients = currentIngredients;
    return this.ingredients;
  }

  totalCostOfIngredients() {
    const total = this.ingredients.reduce((total, cur) => {
      total += (cur.costInCents * cur.quantity.amount);
      return total;
    }, 0);
    this.totalCost = (total / 100).toFixed(2);
    return this.totalCost;
  }

  giveInstructionsForRecipe() {
    let steps = this.instructions.map(instruction => {
      return `Step ${instruction.number}: ${instruction.instruction}`
    });
    return steps;
  }
}

export default Recipe;