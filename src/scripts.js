import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
import recipeData from './data/recipes';
import usersData from './data/users';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

const searchBarBtn = document.querySelector('#searchBtn');
const savedViewBtn = document.querySelector('#savedViewBtn');
const homeViewBtn = document.querySelector('#homeViewBtn');
const infoBtn = document.querySelector('#infoBtn');
const searchBarInput =document.querySelector('#searchBar')

const cardTileDisplay = document.querySelector('#cardTileView');
const singleRecipeDisplay = document.querySelector('#singleRecipeView');
const insertUserName = document.querySelector('#userName')
const nameSearchResults = document.querySelector('#nameResultsView')
const tagSearchResults = document.querySelector('#tagResultsView')

const creatorDisplay = document.querySelector('#creatorInfoPage')
const recipeRepository = new RecipeRepository(recipeData);


// Event Listeners
window.addEventListener('load', () => {
  insertRecipeCards(recipeData)
  getRandomUser();
});

cardTileDisplay.addEventListener('dblclick', (event) => {
  if (event.target.closest('.card')) {
    showSingleRecipe(event);
  }
});

homeViewBtn.addEventListener('click', () => {
  showHomeView();
})

searchBarBtn.addEventListener( 'click', function() {
  cardTileDisplay.innerHTML = "";
  getRecipeByTag();
  getRecipeByName();
  displayNoResults();
});

searchBarInput.addEventListener( 'change', () => {
  cardTileDisplay.innerHTML = "";    
  getRecipeByTag();
  getRecipeByName();
  displayNoResults();
})

infoBtn.addEventListener('click', showInfo);

// Event handlers 
function getRecipeByTag() {
  let tagResults = [];
  let userInput = searchBarInput.value;
  tagResults = recipeRepository.filterByTag(userInput);
  tagResults.forEach(result => {
    tagSearchResults.innerHTML += `<section class="tagResults"><h1 class="searched-recipe" id=${result.tags}></h1></section>`
  });
  insertRecipeCards(tagResults);
}

function getRecipeByName() {
  let nameResults = [];
  let userInput = searchBarInput.value;
  nameResults = recipeRepository.filterByName(userInput);
  nameResults.forEach(result => {
    nameSearchResults.innerHTML += `<section class="nameResults"><h1 class="searched-recipe" id=${result.id}></h1></section>`
  });
  insertRecipeCards(nameResults);
};

function getRandomUser() {
  let randomIndex = Math.floor(Math.random() * usersData.length);
  currentUser = new User(usersData[randomIndex]);
  welcomeUser();
  return currentUser;
};

function welcomeUser() {
  if (usersData.name) {
    insertUserName.innerHTML = `${usersData.name}`;
  };
};

// function displayNoResults() {
//   if (nameResults.length === 0 && tagResults.length === 0) {
//     nameSearchResults.innerHTML = `<h1>No results found.</h1>`
//   }
// }

function insertRecipeCards(array) {
  for(let i = 0; i < array.length; i++){
    cardTileDisplay.innerHTML += 
      `<section class="card" id="${array[i].id}">
      <h2>${array[i].name}</h2>
      <img src="${array[i].image}" alt="image of ${array[i].name}">
      </section>`;
  };
};

function showSingleRecipe(event) {
  show(singleRecipeDisplay);
  show(homeViewBtn);
  hide(cardTileDisplay);
  const recipeElement = event.target;
  singleRecipeDisplay.innerHTML = 
  `<section class="single-recipe" id="${recipeElement.id}">
  <h2>Loaded Chocolate Chip Pudding Cookie Cups</h2>
  <img src="https://cookgem.com/wp-content/uploads/2021/09/Are-Spaghettios-Vegan-2.jpg" alt="image of ${recipeElement.name}">
  <div class="rating">
    <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
    <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
    <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
    <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label>
    <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
  </div>
  <div>
    <p>${recipeElement.instructions}</p>
  </div>
  <div>
    <p>${recipeElement.ingredients}</p>
  </div>
  </section>`
}
// Functions
function showHomeView() {
  console.log('Is this button really a button?');
  show(cardTileDisplay);
  hide(singleRecipeDisplay);
  hide(homeViewBtn);
  hide(creatorDisplay);
}

function showInfo() {
  show(creatorDisplay);
  show(homeViewBtn);
  hide(cardTileDisplay);
}

// Helper Functions
function show(element) {
  element.classList.remove('hidden');
};
  
function hide(element) {
  element.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};