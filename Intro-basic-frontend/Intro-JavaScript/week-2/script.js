const currentAge = 14;

if (currentAge < 18) {
  console.log("you are a young person");
} else if (currentAge > 18 && currentAge < 64) {
  console.log("you are a adult person");
}
if (currentAge > 64) {
  console.log("you are a old person");
}

///-----------------------------------
const age = 25;
const continent = "Africa";
//const loGText = "In " + continent + "";
if (continent === "Europe") {
  if (age < 18) {
    console.log("In " + continent + " You are a child ");
  } else if (age >= 18 && age < 80) {
    console.log("In " + continent + " You are an adult");
  } else if (age > 80) {
    console.log("In " + continent + " You are old");
  }
} else if (continent === "Asia") {
  if (age < 18) {
    console.log("In " + continent + " You are a child ");
  } else if (age > 18 && age <= 50) {
    console.log("In " + continent + " You are an adult");
  } else if (age > 50) {
    console.log("In " + continent + " You are old");
  }
} else if (continent === "Africa") {
  if (age < 18) {
    console.log("In " + continent + " You are a child ");
  } else if (age >= 18 && age < 64) {
    console.log("In " + continent + " You are an adult");
  } else if (age > 64) {
    console.log("In " + continent + " You are old");
  }
}
//--------------------------------------------------
function loGText(age, continent) {
  if (age < 18) {
    console.log("In " + continent + " You are a child ");
  } else if (age >= 18 && age < 64) {
    console.log("In " + continent + " You are an adult");
  } else if (age > 64) {
    console.log("In " + continent + " You are old");
  }
}
loGText(14, "Europe");
//--------------------------------------------------------
function logText2(age, continent) {
  for (let i = 0; i < continent.length; i++) {
    if (age < 18) {
      console.log("In " + continent[i] + " You are a child ");
    } else if (age >= 18 && age < 64) {
      console.log("In " + continent[i] + " You are an adult");
    } else if (age > 64) {
      console.log("In " + continent[i] + " You are old");
    }
  }
}
logText2(18, "Asia");

//----------------------------------------------------------

function reverseWords(wordArray) {
  // Your code here
  // Return array of reversed words for loop
  for (let i = 0; i < wordArray.length; i++) {}
  // Test case
  const input = ["God", "Wolf", "Rail", "Gum", "Maps", "Live"];
  console.log(reverseWords(input));
  // Expected: ["Dog", "Flow", "Liar", "Mug", "Spam", "Evil"]
}

function reverseWords(words) {
  const length = words.length;
  let reverse = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reverse = reverse + words[i];
  }
  return reverse;
}

const input = ["God", "Wolf", "Rail", "Gum", "Maps", "Live"];
for (let i = 0; i < input.length; i++) {
  console.log(reverseWords(input));
  console.log(reverseWords(input[i].split(",")));
}

// function reverse input words one by one

const balance = 1000;
if (balance <= 0) {
  console.log("Please add money to your account");
}
if (balance > 0 && balance < 1000) {
  console.log("You balance is looking okay");
}
if (balance > 1000 && balance < 3000) {
  console.log("You balance is looking good");
}
if (balance > 3000 && balance < 10000) {
  console.log("You balance is fantastic");
}
if (balance > 10000) {
  console.log("You balance is amazing");
}
//----------------------------------------------------------

// circleArea = pi * radius * radius //   Area = pi times radius squared

function getCircleArea(radius) {
  const pi = 3.14;
  return pi * radius * radius;
}
getCircleArea(5);

// F= C × 9/5 ​+ 32
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(50));

//----------------------------------------------------------
const global = "global";
function scopeTest() {
  console.log(global);
  const functionScope = "functionScope";
  console.log(functionScope);

  function tester() {
    console.log(global);

    const testerVariable = "testerVariable";
    console.log(testerVariable);
  }
  tester();
}
scopeTest();

//  String To Log --------------------------------------------

function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}
logString("Abbas", 5);

//. Send Email Function --------------------------------------

const emailsList =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";

function sendEmailTo(emails) {
  const emailArray = emails.split("|");
  for (let i = 0; i < emailArray.length; i++) {
    console.log(`Sending email to ${emailArray[i]}`);
  }
}
console.log(sendEmailTo(emailsList));
