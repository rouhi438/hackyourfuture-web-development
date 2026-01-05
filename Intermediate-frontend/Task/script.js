//-- remove first and last character of string
const characters = "eloquent";
let newCharacter = characters.slice(1, characters.length - 1);
console.log(newCharacter);
//-- functional
function sliceString(item) {
  return item.slice(1, item.length - 1);
}
console.log(sliceString("abbas"));
console.log(sliceString("ab"));
console.log(sliceString("abb"));

//------
//-- Present sheep
const sheepList = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const present = sheepList.filter((sheep) => sheep === true);
console.log(present.length);

//--
//Complete the solution so that it returns true if the first argument(string)
//  passed in ends with the 2nd argument (also a string).

const str = ["abc"];
const result = str.some((s) => s.includes("d")); // also filter() method
console.log(result);

//Task:
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".

//const inputNum = ;
let outPut = "";

function oddOrEven(inputNum) {
  let sum = inputNum.reduce((acc, num) => acc + num, 0);
  return sum % 2 === 0 ? `outPut: "even"` : `outPut : "odd"`;
}
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 4, 9, 3]));
console.log(oddOrEven([0, -1, 5, -2]));
console.log(oddOrEven([0, 3, 6, -4]));
