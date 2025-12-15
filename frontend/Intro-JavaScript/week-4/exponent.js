// Getting exponent (power) of each(one by one) argument input

function getExponentNum(num) {
  let string = num.toString();
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string[i] * string[i]);
  }
  return Number(result.join(""));
}
console.log(getExponentNum(9119));
