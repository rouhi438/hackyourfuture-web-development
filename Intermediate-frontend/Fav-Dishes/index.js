const favDishes = [
  "Spaghetti",
  "Pizza Pepperoni",
  "Sushi",
  "Beef Burger",
  "Kebab",
  "Chicken Grill",
  "pasta",
];
//-- solution by (for) loop
let dishesList = document.querySelector(".dishes-list");
for (let i = 0; i < favDishes.length; i++) {
  const li = document.createElement("li");
  dishesList.appendChild(li);
  li.textContent = favDishes[i];
}
// -- solution by (for of) loop
// for (const dish of favDishes) {
//   const list = document.createElement("li");
//   list.textContent = dish;
//   dishesList.appendChild(list);
// }
