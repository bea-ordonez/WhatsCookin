import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe, allIngreds) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.todosIngredients = allIngreds
  };

  retrieveIngredientInfo() {
    const currentIngredients = this.ingredients.map(i => {
      let newIng = new Ingredient(i);
      console.log('newIng:', newIng);
      console.log('todos', this.todosIngredients)
      newIng.name = newIng.returnIngredientName(this.todosIngredients,i.id);
      newIng.costInCents = newIng.returnIngredientCost(this.todosIngredients, i.id);
      return newIng;
    });
    this.ingredients = currentIngredients;
    return this.ingredients;
  };

  returnCostOfIngredients() {
    const total = this.ingredients.reduce((total, cur) => {
      total += (cur.costInCents * cur.quantity.amount);
      return total;
    }, 0);
    const sum = (total / 100).toFixed(2);
    return sum;
  };

  giveInstructionsForRecipe() {
    const steps = this.instructions.map(instruction => {
      return `Step ${instruction.number}: ${instruction.instruction}`
    });
    this.instructions = steps;
    return this.instructions;
  };
};

export default Recipe;