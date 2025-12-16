
// 1. Age-ify
const yearOfBirth = 1987;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// 2. Goodboy-Oldboy
const dogYearOfBirth = 2017;
const dogYearFuture = 2045;
const shouldShowResultInDogYears = true;
const dogAge = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + (dogAge * 7) + " dog years old in " + dogYearFuture);
} else {
  console.log("Your dog will be " + dogAge + " human years old in " + dogYearFuture);
}

// 3. Housey pricey
let volumePeter = 8 * 10 * 10;
let housePricePeter = volumePeter * 2.5 * 1000 + 100 * 300;
console.log("Peter actual price:", housePricePeter);
console.log("Peter is paying too " + (2500000 > housePricePeter ? "much" : "little"));

let volumeJulia = 5 * 11 * 8;
let housePriceJulia = volumeJulia * 2.5 * 1000 + 70 * 300;
console.log("Julia actual price:", housePriceJulia);
console.log("Julia is paying too " + (1000000 > housePriceJulia ? "much" : "little"));

// 4. Startup Name Generator
const firstWords = ["Easy", "Quick", "Magic", "Ultra", "Happy", "Future", "Smart", "Bright", "Super", "Tech"];
const secondWords = ["Solutions", "Corp", "Labs", "Works", "Systems", "Hub", "Agency", "Dynamics", "Studio", "World"];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters");
