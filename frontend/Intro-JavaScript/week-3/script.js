const userRole = "guest";
const isAdmin = userRole === "admin";
const isLoggedIn = userRole !== "guest";

if (isAdmin) {
  console.log("You are in charge");
} else if (isLoggedIn) {
  console.log("Welcome user");
} else {
  console.log("Welcome guest");
}

console.log("----------next command---------");

const students = [
  "carl",
  "kevin",
  "victor",
  "claus",
  "eddy",
  "teDy",
  "abbas",
  "vlad",
];
const ranDom = Math.floor(Math.random() * students.length);
console.log(ranDom, students[ranDom]); // get a random name
const newStudentArray = console.log(students.reverse()); // reversing whole Array
//
let newStu = [];
for (let i = 0; i < students.length; i++) {
  const reval = students[i].split("").reverse().join("");
  newStu.push(reval);
}
console.log(newStu);

console.log("----------next command---------");

const word = ["god", "maps", "live"];
newWord = [];
for (let i = 0; i < word.length; i++) {
  const reWord = word[i].split("").reverse().join("");
  newWord.push(reWord);
}
console.log(newWord);

console.log("----------next command---------");

const newArray = [];
for (let j = 0; j < students.length; j++) {
  const newSt = students[j].split("").reverse().join("");
  newArray.push(newSt);
}
console.log(newArray);

const nameArray = [
  "god",
  " live",
  "drawer",
  "star",
  "loop",
  "stop",
  "eat",
  "gat",
];
console.log(nameArray);

// reverse Array
revArray = nameArray.reverse();
console.log(revArray);

console.log("----------next command---------");

// convert every word to one Array
const reWord = [];
for (let i = 0; i < nameArray.length; i++) {
  const revName = nameArray[i].split().reverse();
  reWord.push(revName);
}
console.log(reWord);

console.log("----------next command---------");

// convert every 2 word to one array

const copArray = [];
for (let i = 0; i < nameArray.length; i += 2) {
  copArray.push([nameArray[i], nameArray[i + 1]]);
}
console.log(copArray);

console.log("----------next command---------");

//reversing character of every word

const reName = [];
for (let i = 0; i < nameArray.length; i++) {
  const revArray = nameArray[i].split("").reverse().join();
  reName.push(revArray);
}
console.log(reName);

console.log("----------next command---------");

// adding new word to end of Array
nameArray.push("ball");
console.log(nameArray);

console.log("----------next command---------");
// removing the last word of Array
nameArray.pop();
console.log(nameArray);

console.log("----------next command---------");
// removing the first word of Array
nameArray.shift();
console.log(nameArray);

console.log("----------next command---------");
//Adding new word to first of Array
nameArray.unshift("mom");
console.log(nameArray);

console.log("----------next command---------");
//To delete one index of Array.
delete nameArray[3];
console.log(nameArray);

console.log("----------next command---------");
//Adding new word to Array and choose the index of that
let arr = ["home", "study", "JavaScript"];
arr.splice(1, 0, "book");
console.log(arr);

console.log("----------next command---------");
// returning the removed words from Array
const fruits = ["Apple", "Orange", "Apple", "Melon", "Tomato"];
const remove = fruits.splice(0, 2);
console.log(remove);

console.log("----------next command---------");
//Adding "," between every word in the list
const carList = "Bmw Toyota Chili Volvo Jeep Nissan";
const newCarList = carList.split(" ").join(",");
console.log(newCarList);

console.log("----------next command---------");
//Adding 'and' before the last word of the list
const carArray = carList.split(" ");
const allCars = carArray.slice(0, -1).join(",");
const result = carArray[carArray.length - 1];
const finalList = `${allCars} and ${result}`;

console.log(finalList);

console.log("----------next command---------");

const students33 = [];
function addStudent(name, age) {
  students33.push({ name: name, age: age });
  return { name, age };
}
addStudent("Shipra", 24);
addStudent("Juty", 25);
addStudent("Ali", 39);
addStudent("Abbas", 44);
addStudent("Marve", 21);
console.log(students33);

console.log("----------next command---------");
//finding one index of array and return whole INFO of item
function getStudents(name) {
  const students = students33.find(
    (item) => item.name.toLowerCase() == name.toLowerCase()
  );
  return students;
}
console.log(getStudents("abbas"));
console.log(getStudents("juty"));

console.log("----------next command---------");
// getting welcome comment for every index of array
function greeting() {
  students33.forEach((student) =>
    console.log("Hello," + student.name + " welcome to Team 33!")
  );
}
greeting(students33);
