import { assert, expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import recipeTestData from '../src/data/recipeTestData';
import Ingredient from '../src/classes/Ingredient';
import ingredientTestData from '../src/data/ingredientTestData';

describe('Ingredient', () => {
  let ingredient, testRecipe;

  beforeEach(() => {
    testRecipe = new Recipe(recipeTestData[0], ingredientTestData);
    testRecipe.retrieveIngredientInfo();
    ingredient = testRecipe.ingredients[0];
  });
  
  it('should be a function', () => {
    assert.isFunction(Ingredient);
  });
  
  it('should be able to create an instance of Ingredient', () => {
    assert.instanceOf(ingredient, Ingredient);
  });
  
  it('should have an id number when created', () => {
    assert.equal(ingredient.id, 20081);
  });

  it('should have an estimated cost in cents (per unit.)', () => {
    assert.equal(ingredient.costInCents, 142);
  });

  it('should return ingredients name by id', () => {
    const findName = ingredient.returnIngredientName(testRecipe.todosIngredients, 2050);
    assert.equal(findName, 'vanilla');
  });

  it('should not return an ingredient if the name is not found', () => {
    const wrongName = ingredient.returnIngredientName(testRecipe.todosIngredients, 2);
    assert.equal(wrongName, 'Error');
  });

  it('should return an ingredients cost', () => {
    const findCost = ingredient.returnIngredientCost(testRecipe.todosIngredients, 2050);
    assert.equal(findCost, 926);
  });

  it('should not return an ingredients cost if it is not found', () => {
    const wrongCost = ingredient.returnIngredientCost(testRecipe.todosIngredients, 3);
    assert.equal(wrongCost, 'Error');
  });
});