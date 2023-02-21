import { assert, expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import recipeTestData from '../src/data/recipeTestData';
import Ingredient from '../src/classes/Ingredient';
import ingredientTestData from '../src/data/ingredientTestData';

describe('Ingredient', () => {
  let ingredient, testRecipe;

  beforeEach(() => {
    testRecipe = new Recipe(recipeTestData[0], ingredientTestData);
    ingredient = new Ingredient(testRecipe.retrieveIngredientInfo);
    console.log(ingredient);
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

  it('should have a name when created', () => {
    assert.equal(ingredient.name, 'wheat flour');
  });

  it('should have an estimated cost in cents (per unit)', () => {
    assert.equal(ingredient.costInCents, 142);
  });

  it('should return ingredients by name', () => {
    const findName = ingredient.returnIngredientName(20081);
    const wrongName = ingredient.returnIngredientName(2);
    assert.equal(findName, 'wheat flour');
    assert.equal(wrongName, 'Error');
  });

  it('should return an ingredients cost', () => {
    const findCost = ingredient.returnIngredientCost(20081);
    const wrongCost = ingredient.returnIngredientCost(3);
  
    assert.equal(findCost, 142);
    assert.equal(wrongCost, 'Error');
  });
});