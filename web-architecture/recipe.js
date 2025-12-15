// Teach full CRUD (Create, Read, Update, Delete) using a recipe app

//========== Create Recipes=============
const recipes = [];
let result = "";
function addRecipes(title, ingredients, instructions) {
  const recipe = {
    id: recipes.length + 1,
    title: title,
    ingredients: ingredients,
    instructions: instructions,
  };
  recipes.push(recipe);
  result = `Recipe of ${title} added successfully!`;
  console.log(result);
}
addRecipes(
  "Tomato Omelette",
  ["2 eggs", "2-tomatoes", "Salt", "pepper", "1-tbsp oil"],
  "Fry the tomatoes in oil, add salt and pepper, then pour in the eggs and cook until set."
);
addRecipes(
  "Simple Pasta",
  [
    "200g pasta",
    "1-onion",
    "200g ground beef",
    "1-tbsp tomato paste",
    "salt",
    "pepper",
  ],
  "Fry the onion and beef, add tomato paste and spices. Boil the pasta and mix it with the sauce."
);
console.log(recipes);

//==========Read All recipes ==========
function viewAllRecipes() {
  recipes.forEach((item) => {
    let showItem = `${item.id}, ${item.title}'s recipe;`;
    console.log(showItem);
  });
}
viewAllRecipes();

//=========== Update recipe ==========
let update = "";
function updateRecipes(id, newTitle, newIngredients, newInstructions) {
  const newRecipe = recipes.find((element) => element.id === id);
  if (newRecipe) {
    newRecipe.title = newTitle; //|| newRecipe.title;
    newRecipe.ingredients = newIngredients; // || newRecipe.ingredients;
    newRecipe.instructions = newInstructions; //|| newRecipe.instructions;
  } else {
    console.log(`Recipe of ${newTitle} not found!`);
  }
  update = `The recipes of "${newTitle}" has successfully updated.😎`;
  console.log(update);
}

updateRecipes(
  1,
  "Lemon Chicken",
  ["2 chicken thighs", "1 lemon", "2 garlic cloves", "Salt", "pepper"],
  "Season chicken with lemon, garlic, salt, and pepper. Cook in pan or oven until golden and cooked through."
);
viewAllRecipes();

//============= Delete recipe ===========

function deleteRecipes(id) {
  const index = recipes.findIndex((item) => item.id === id);
  if (index > -1) {
    const remove = recipes.splice(index, 1);
    console.log(`Recipes of "${remove[0].title}" deleted successfully!`);
    console.log(remove);
  } else {
    console.log("Recipe not found.");
  }
}
deleteRecipes(2);
