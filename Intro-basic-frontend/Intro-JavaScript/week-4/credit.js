//Creating the number format of bank card (#### #### #### ####)
function formatCreditCardNumber(num) {
  if (typeof num !== "number") {
    return "Input must be a number!";
  } else {
    let newNum = num.toString(); //at first convert input to string
    const newFormat = newNum.replace(/.{1,4}/g, (space) => {
      return space + " ";
    });

    return newFormat.trim();
  }
}
const formattedCreditCardObject = formatCreditCardNumber("3423756459684323");
console.log(formattedCreditCardObject);

console.log("-----------------next command------------");
//Creating the number of bank cart format by another way(#### #### #### ####)

function formatCreditCardNumber(number) {
  let num = "";
  for (let i = 0; i < number.length; i = i + 4) {
    num += number.slice(i, i + 4) + " ";
  }
  return num;
}
const formattedCreditCard = formatCreditCardNumber("123456");
console.log(formattedCreditCard);
