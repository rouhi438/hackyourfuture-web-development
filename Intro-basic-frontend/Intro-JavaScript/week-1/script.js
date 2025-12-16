const firstName = "Abbas";
const lastName = "Hansen";
let currentAge = 45;
let isStudent = false;
let favoriteColor = "blue";

console.log(firstName, lastName, currentAge, isStudent, favoriteColor);
//part 2

// let 1stName ='John';  === false
// let user-email = 'example@example.com'; === false
// let my age = 35; ==== false

//part 3
//Correct variable names
const birthDay = "10-03-1980"; // doesn't change';
let currentTemperature = 22; // can change
const name = "Abbas"; // doesn't change
let shoppingCartItems = "x ,y ,z"; // can change

// part 4
const country = "denmark";
let city = "copenhagen";
country = "sweden"; // false
console.log(country, city);

// Types

//

console.log(typeof 3);
console.log(typeof -33);
console.log(typeof "3");
const threeConst = 3;
console.log(threeConst);
let threeLet = 3;
console.log(threeLet);
console.log(typeof 'console.log("console.log(console.log(""))")');
console.log(typeof typeof 45);
const names = ["benjamin", "Christopher"];
console.log(typeof names[0]);
console.log(typeof [3][0]);
console.log(typeof true);
//
const myName = "Abbas";
console.log(myName.length);

const mySentence = true;
if (mySentence == 0) {
  console.log("this is true");
} else {
  console.log("this is false");
}
