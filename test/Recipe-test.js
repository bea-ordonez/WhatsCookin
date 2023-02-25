import { assert, expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import ingredientTestData from '../src/data/ingredientTestData';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe', () => {
  let recipe

  beforeEach(() => {
    recipe = new Recipe(recipeTestData[0], ingredientTestData);
  });

  assert.isFunction(Recipe);
  it('should be a function', () => {
  });

  it('should be able to create an instance of Recipe', () => {
    assert.instanceOf(recipe, Recipe);
  });

  it('should contain its own ID number', () => {
    assert.equal(recipe.id, 595736);
  });

  it('should contain the image path of a particular recipe preview', () =>{
    assert.equal(recipe.image, recipeTestData[0].image);
  });

  it('should contain the ingredients used to make each recipe', () => {
    assert.equal(recipe.ingredients, recipeTestData[0].ingredients);
  });

  it('should contain the instructions to follow to create it', () => {
    assert.equal(recipe.instructions, recipeTestData[0].instructions);
  });

  it('should have a name', () => {
    assert.equal(recipe.name, recipeTestData[0].name);
  });

  it('should contain recipe tags', () => {
    assert.equal(recipe.tags, recipeTestData[0].tags);
  });

  it('should be able to return a list of its ingredients', () => {
    recipe.retrieveIngredientInfo();
    assert.notEqual(recipe.ingredients, recipeTestData[0].ingredients);
  });

  it('should be able to return the total cost of its own ingredients', () => {
    recipe.retrieveIngredientInfo();
    const getSum1 = recipe.totalCostOfIngredients();
    assert.equal(getSum1, 177.76);
  });

  it('should be able to return the instructions to make a recipe', () => {
    recipe.retrieveIngredientInfo();
    recipe.giveInstructionsForRecipe();
    const instruc = 'Step 2: Add egg and vanilla and mix until combined.';
    assert.equal(recipe.instructions[1], instruc);
  });
});