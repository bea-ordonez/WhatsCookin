import './styles.css';
import fetchData from './apiCalls';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import Ingredient from './classes/Ingredient';
import User from './classes/User';

Promise.all([fetchData('users'), fetchData('ingredients'), fetchData('recipes')])
.then(vals => {
  let userData = vals[0].usersData;
  let ingredientsData = vals[1].ingredientsData;
  let recipesData = vals[2].recipeData;
  let recipeRepo = new RecipeRepository(recipesData, ingredientsData);
  insertRecipeCards(recipesData);
  getRandomUser(userData);
  
  card.addEventListener('click', (event) => {
    showSingleRecipe(event, recipeRepo, ingredientsData);
  });
});

const singleRecipeBtn = document.querySelector('.open-single-recipe')
const searchBarBtn = document.querySelector('#searchBtn');
const savedViewBtn = document.querySelector('#savedViewBtn');
const homeViewBtn = document.querySelector('#homeViewBtn');
const infoBtn = document.querySelector('#infoBtn');

const cardTileDisplay = document.querySelector('#cardTileView');
const card = document.querySelector('.card')
const singleRecipeDisplay = document.querySelector('#singleRecipeView');

const insertUserName = document.querySelector('#userName');
const searchBarInput =document.querySelector('#searchBar');
const nameSearchResults = document.querySelector('#nameResultsView');
const tagSearchResults = document.querySelector('#tagResultsView');
const savedRecipesView = document.querySelector('#savedRecipesView');

const creatorDisplay = document.querySelector('#creatorInfoPage');

const savedRecipes = []

// Event Listeners
homeViewBtn.addEventListener('click', () => {
  showHomeView();
});

searchBarBtn.addEventListener( 'click', function() {
  cardTileDisplay.innerHTML = "";
  getRecipeByTag();
  getRecipeByName();
  displayNoResults();
});

searchBarInput.addEventListener('change', () => {
  cardTileDisplay.innerHTML = "";    
  getRecipeByTag();
  getRecipeByName();
  displayNoResults();
});

infoBtn.addEventListener('click', showInfo);
savedViewBtn.addEventListener('click', () => {
    cardTileDisplay.innerHTML = "";
    viewSavedRecipes();
});

// Event handlers 
function getRecipeByTag() {
  let tagResults = [];
  let userInput = searchBarInput.value;
  tagResults = recipeRepo.filterByTag(userInput);
  tagResults.forEach(result => {
    tagSearchResults.innerHTML += `<section class="tagResults"><h1 class="searched-recipe" id=${result.tags}></h1></section>`
  });
  insertRecipeCards(tagResults);
};

function getRecipeByName() {
  let nameResults = [];
  let userInput = searchBarInput.value;
  nameResults = recipeRepo.filterByName(userInput);
  nameResults.forEach(result => {
    nameSearchResults.innerHTML += `<section class="nameResults"><h1 class="searched-recipe" id=${result.id}></h1></section>`
  });
  insertRecipeCards(nameResults);
};

function saveRecipe(event, recipeRepo) {
    //remove the event listener once the card is saved 
    if (event.target.id) {
        event.target.classList.add("hidden");
        const recipeObj = recipeRepo.getRecipeById(parseInt(event.target.id));
        const isRecipeSelected = savedRecipes.includes(recipeObj);
        if (!isRecipeSelected) {
            savedRecipes.push(recipeObj);
        } else {
            savedRecipes.splice(savedRecipes.indexOf(recipeObj), 1);
        };
    };
};

function viewSavedRecipes() {
    savedRecipesView.innerHTML = "";
    insertRecipeCards(savedRecipes, true);
};

function insertRecipeCards(array, showSelected = false) {
  for(let i = 0; i < array.length; i++){
    const isRecipeSelected = savedRecipes.includes(array[i]);
    if (!isRecipeSelected || showSelected){
    cardTileDisplay.innerHTML += 
      `<section class="card" id="${array[i].id}">
      <h2 id="${array[i].id}">${array[i].name}</h2>
      <img src="${array[i].image}" alt="image of ${array[i].name} id="${array[i].id}">
      <div class="card-buttons">
        <button class="open-single-recipe" id="${array[i].id}">View Recipe</button>
        <button class="save-recipe-btn" id="saveRecipeBtn" >Save Recipe</>
      </div>  
      </section>`;
    };
  };
  // const allCards = document.querySelectorAll(".card");
  // allCards.forEach(card => {
  //   card.addEventListener('click', (event) => {
  //     saveRecipe(event, recipeRepo);
  //   });
  // });
};

function showSingleRecipe(event, repo, ingredients) {
  show(singleRecipeDisplay);
  show(homeViewBtn);
  hide(cardTileDisplay);
  let fetchedIng = ingredients;
  const element = event.target.parentElement.parentElement.id;
  const foundRecipe = repo.findRecipe(element);
  foundRecipe.todosIngredients = fetchedIng;
  let foundIngredients = foundRecipe.retrieveIngredientInfo();
  let foundInstructions = foundRecipe.giveInstructionsForRecipe();
  singleRecipeDisplay.innerHTML = 
  `<section class="single-recipe" id="${foundRecipe.id}">
  <h2>${foundRecipe.name}</h2>
  <img src="${foundRecipe.image}" alt="image of ${foundRecipe.name}">
  <div class="rating">
    <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
    <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
    <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
    <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label>
    <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
  </div>
  <h3>Ingredients</h3>
  <div class="ingredients">
    <p>${foundIngredients.map((ing) => ` ${ing.name} `)}</p>
  </div>
  <h3>Instructions</h3>
  <div class="instructions">
    <p>${foundInstructions.map((inst) =>` ${inst} `)}</p>
  </div>
  </section>`
};

function getRandomUser(userInfo) {
  console.log(userInfo)
  let randomIndex = Math.floor(Math.random() * userInfo.length);
  let currentUser = new User(userInfo[randomIndex]);
  console.log(currentUser)
  welcomeUser(currentUser);
  return currentUser;
};

function welcomeUser(user) {
  console.log(user.name)
  if (user.name) {
    insertUserName.innerHTML = `${user.name}`;
  };
};

// Functions
function showHomeView() {
  show(cardTileDisplay);
  hide(singleRecipeDisplay);
  hide(homeViewBtn);
  hide(creatorDisplay);
};

function showInfo() {
  show(creatorDisplay);
  show(homeViewBtn);
  hide(cardTileDisplay);
};

// Helper Functions
function show(element) {
  element.classList.remove('hidden');
};
  
function hide(element) {
  element.classList.add('hidden');
};