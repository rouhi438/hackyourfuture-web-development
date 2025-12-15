function numAccess(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    let outPut = i;
    if (i % num1 === 0 && i % num2 === 0) {
      outPut = "FizzBuzz";
    } else if (i % num1 === 0) {
      outPut = "Fizz";
    } else if (i % num2 === 0) {
      outPut = "Buzz";
    }
    console.log(outPut);
  }
}
numAccess(3, 5);

console.log("-----------------next command------------");

for (let i = 0; i <= 100; i++) {
  console.log(
    i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? " Buzz"
      : i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i
  );
}
