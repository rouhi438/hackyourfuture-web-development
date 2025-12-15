// Fibonacci Number
function fiBoNum(index) {
  let num1 = 0;
  let num2 = 1;
  for (let i = 0; i <= index; i++) {
    let currentNum = num1 + num2;
    num1 = num2;
    num2 = currentNum;
    console.log(currentNum);
  }
}
fiBoNum(5);

console.log("-----------------next command------------");

let n = 10;
let number1 = 0;
let number2 = 1;
for (let i = 0; i < n; i++) {
  let realNum = number1 + number2;
  number1 = number2;
  number2 = realNum;
  console.log(realNum);
}
