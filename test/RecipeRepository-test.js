import { assert, expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeTestData from '../src/data/recipeTestData';
import Recipe from '../src/classes/Recipe';

describe('Recipe Repository', () => {
  let recipes
  beforeEach(() => {
    recipes = new RecipeRepository(recipeTestData);
  });
  
  it('should be a function', () => {
    assert.isFunction(RecipeRepository);
  });

  it('should contain recipe data', () => {
    assert.deepEqual(recipes.recipeList[1], new Recipe(recipeTestData[1]));
  });

  it('should get recipes based on a tag input', () => {
    const findTag = recipes.filterByTag('snack');
    assert.deepEqual(findTag, [recipes.recipeList[0]]);
  });

    it('should not get recipes based on incorrect tag input', () => {
      const tagNotFound = recipes.filterByTag('False Tag');
      assert.deepEqual(tagNotFound, []);
  });

  it('should get recipes based of ingredient input', () => {
    const findName = recipes.filterByName('Loaded Chocolate Chip Pudding Cookie Cups');
    assert.deepEqual(findName, [recipes.recipeList[0]]);
  });

  it('should not get recipes based of incorrect ingredient input', () => {
    const foodNotFound = recipes.filterByName('False Name');
    assert.deepEqual(foodNotFound, []);
  });

  it('should contain a filtered list of returned results', () => {
    assert.equal(recipes.filteredList, null);

    recipes.filterByTag('starter');
    assert.include(recipes.filteredList, recipes.recipeList[0]);
  });

  it('should contain an empty array based of off user tag input', () => {
    recipes.filterByTag('False Tag');
    assert.deepEqual(recipes.filteredList, []);
  });
});