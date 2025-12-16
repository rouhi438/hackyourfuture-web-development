let str = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

console.log("-----------------next command ------------");

let sTr = "";
for (let i = 5; i >= 0; i--) {
  for (let j = 1; j <= i; j++) {
    sTr += "*";
  }
  sTr += "\n";
}
console.log(sTr);

console.log("-----------------next command ------------");

let start = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    start += " ";
  }
  for (let a = 1; a <= i; a++) {
    start += "*";
  }
  start += "\n";
}
console.log(start);

console.log("-----------------next command ------------");

let start2 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    start2 += " ";
  }
  for (let a = 5; a > i; a--) {
    start2 += "*";
  }
  start2 += "\n";
}
console.log(start2);

console.log("-----------------next command ------------");

const bArray = ["true", "23", "Abbas", 24, "false"];
let x = bArray.splice(1, 2);
console.log(x);
let y = bArray.slice(2);
console.log(y);

const newArray = [];
for (let i = 0; i < bArray.length; i++) {
  let element = String(bArray[i]).split("").reverse().join("");
  newArray.push(element);
}
console.log(newArray);

console.log("-----------------next command ------------");

const num = [
  [1, 2, 3, false],
  [4, 5, true, 6],
  [7, 8, 9, "abbas"],
];
const newNum = [];
for (let i = 0; i < num.length; i++) {
  for (let b = 0; b < num[i].length; b++) {
    newNum.push(num[i][b]);
  }
}
console.log(newNum);

console.log("-----------------next command ------------");

const numbers = [
  [12, 13, 14],
  [12, 13, 14],
  [12, 13, 14],
];
const total = [];
for (let i = 0; i < numbers.length; i++) {
  let sum = 0;
  for (let b = 0; b < numbers[i].length; b++) {
    sum += numbers[i][b];
  }
  total.push(sum);
}
console.log(total);

console.log("-----------------next command ------------");

const bigNum = [
  [14, 56, 67, 56, 78, 89, 45],
  [67, 56, 45, 53, 65, 12, 98, 609, 456, 876],
  [43, 425, 675, 879, 890, 789, 987, 907, 45],
];
let max = bigNum[0][0];
let min = bigNum[0][0];

for (let i = 0; i < bigNum.length; i++) {
  for (let x = 0; x < bigNum[i].length; x++) {
    if (max < bigNum[i][x]) {
      max = bigNum[i][x];
    } else if (min > bigNum[i][x]) {
      min = bigNum[i][x];
    }
  }
}
console.log("maxNum : " + max);
console.log("minNum : " + min);

console.log("-----------------next command ------------");

let odd = [];
let even = [];
for (let i = 0; i < bigNum.length; i++) {
  for (let z = 0; z < bigNum[i].length; z++) {
    if (bigNum[i][z] % 2 === 0) {
      even.push(bigNum[i][z]);
    } else if (bigNum[i][z] % 2 === 1) {
      odd.push(bigNum[i][z]);
    }
  }
}
console.log("evenArray : " + even);
console.log("oddArray : " + odd);

console.log("-----------------next command ------------");

const num1 = [
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];
const num2 = [
  [5, 6, 7, 8],
  [6, 7, 8, 9],
  [7, 8, 9, 0],
];

const mixArray = [];

for (let i = 0; i < num1.length; i++) {
  mixArray[i] = [];
  for (let j = 0; j <= num2.length; j++) {
    mixArray[i][j] = num1[i][j] + num2[i][j];
  }
}
console.log(mixArray);
