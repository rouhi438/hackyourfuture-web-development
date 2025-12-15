/*let userName = null;
const currentDate = new Date();
const date = currentDate.getDate();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();
const jokes = [
  "What's the smartest insect? A spelling bee!😅",
  "What is fast, loud and crunchy? A rocket chip.😜",
  "How does the ocean say hi? It waves!😎",
];
const toDo = ["Learn JavaScript", "Meet the mentors"];
//===========math function ====================================
function MatheMatical(num1, num2, operators) {
  if (operators === "+" || operators === "plus") return num1 + num2;
  if (operators === "*" || operators === "times") return num1 * num2;
  if (operators === "-" || operators === "minus") return num1 - num2;
  if (operators === "/" || operators === "divided") return num1 / num2;
  if (operators === "**" || operators === "power") return num1 ** num2;
  return "I can not calculate that.";
}
//========= time function =====================================

function setTime(timeInMinutes) {
  const secondPerMinute = 60;
  const milliSecondPerSecond = 1000;

  const waitTime = timeInMinutes * secondPerMinute * milliSecondPerSecond;

  setTimeout(() => {
    console.log("Timer done...");
  }, waitTime);
}
//============================================================

function getReply(command) {
  let dicTate = command.toLowerCase();
  let item = dicTate.split(" ");
  //__________________________________________________________
  if (dicTate.startsWith("hello, my name is")) {
    const index = item.indexOf("is") + 1;
    userName = item[index];
    return `Hi, Nice to meet you ${userName}`;
  } else if (dicTate === "what is my name?") {
    return userName ? `Your name is ${userName}` : "I don't know your name";
    //________________________________________________________
  } else if (dicTate.startsWith("add") && dicTate.endsWith("to my todo")) {
    const itemToAdd = item.slice(1, item.length - 3).join(" ");
    toDo.push(itemToAdd);
    return `Added ${itemToAdd} to your todo`;
  } else if (dicTate === "what is on my todo") {
    if (toDo.length === 0) return "Your todo is empty";
    else return `You have ${toDo.length} todos - ${toDo.join(", ")}`;
  } else if (dicTate.startsWith("remove") && dicTate.endsWith("from my todo")) {
    const itemToRemove = dicTate
      .replace("remove", "")
      .replace("from my todo", "")
      .trim();
    const index = toDo.indexOf(itemToRemove);
    if (index === -1) return `${itemToRemove} is not in your todo`;

    toDo.splice(index, 1);
    return `Removed ${itemToRemove} from your todo`;
  }
  //__________________________________________________________
  else if (dicTate === "what day is it today?") {
    return `Today is ${date}.of ${month} ${year}`;

    //________________________________________________________
  } else if (command.startsWith("what is")) {
    const num1 = Number(item[2]);
    const operators = item[3];
    const num2 = Number(item[4]);
    return MatheMatical(num1, num2, operators);
    //________________________________________________________
  } else if (command.startsWith("set a timer for")) {
    const timeInMinutes = Number(item[4]);
    setTime(timeInMinutes);
    return `Timer set for ${timeInMinutes} minutes`;
    //________________________________________________________
  } else if (dicTate === "tell me a joke") {
    let randomJoke = Math.floor(Math.random() * jokes.length);
    return jokes[randomJoke];
    //________________________________________________________
  } else if (dicTate === "flip a coin") {
    return Math.random() < 0.5 ? "Heads🪙" : "Tail🪙";
  }
}

console.log(getReply("hello, my name is Abbas"));
console.log(getReply("what is my name?"));
console.log(getReply("add fishing to my todo"));
console.log(getReply("add football to my todo"));
console.log(getReply("what is on my todo"));
console.log(getReply("remove fishing from my todo"));
console.log(getReply("what day is it today?"));
console.log(getReply("what is 4 plus 3"));
console.log(getReply("what is 3 power 4"));
console.log(getReply("set a timer for 1 minutes"));
console.log(getReply("tell me a joke"));
console.log(getReply("flip a coin"));  */

// ===== تابع زمان (اصلاح شده) ====================================
// function setTime(timeInMinutes) {
//   const secondPerMinute = 60;
//   const milliSecondPerSecond = 1000;

//   const waitTime = timeInMinutes * secondPerMinute * milliSecondPerSecond;

//   setTimeout(() => {
//     console.log("Timer done...");
//     artyom.say("Timer is done!"); // اضافه کردن فیدبک صوتی
//   }, waitTime);
// }

// // ===== تابع ریاضی (اصلاح شده) ====================================
// function MatheMatical(num1, num2, operators) {
//   const operatorMap = {
//     "+": "plus",
//     "-": "minus",
//     "*": "times",
//     "/": "divided",
//     "**": "power",
//   };

//   // تبدیل عملگرهای متنی به نماد
//   let cleanOperator = operators.toLowerCase();
//   for (const [symbol, word] of Object.entries(operatorMap)) {
//     if (cleanOperator === word) {
//       cleanOperator = symbol;
//       break;
//     }
//   }

//   if (cleanOperator === "+") return num1 + num2;
//   if (cleanOperator === "*") return num1 * num2;
//   if (cleanOperator === "-") return num1 - num2;
//   if (cleanOperator === "/")
//     return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//   if (cleanOperator === "**") return num1 ** num2;

//   return "I can not calculate that.";
// }

// // ===== تابع getReply (اصلاح شده) ====================================
// function getReply(command) {
//   const dicTate = command.toLowerCase().trim();
//   const item = dicTate.split(" ");

//   //__________________
//   if (dicTate.includes("my name is")) {
//     const nameStart = dicTate.indexOf("my name is") + "my name is".length;
//     userName = dicTate.substring(nameStart).trim();
//     return `Hi, Nice to meet you ${userName}`;
//   }
//   //__________________
//   else if (dicTate.includes("what is my name")) {
//     return userName ? `Your name is ${userName}` : "I don't know your name";
//   }
//   //__________________
//   else if (dicTate.includes("add") && dicTate.includes("to my todo")) {
//     const addIndex = dicTate.indexOf("add") + 3;
//     const toIndex = dicTate.indexOf("to my todo");
//     const itemToAdd = dicTate.substring(addIndex, toIndex).trim();

//     if (itemToAdd) {
//       toDo.push(itemToAdd);
//       return `Added ${itemToAdd} to your todo`;
//     } else {
//       return "Please specify what to add to your todo";
//     }
//   }
//   //__________________
//   else if (dicTate.includes("what is on my todo")) {
//     if (toDo.length === 0 || (toDo.length === 1 && toDo[0] === "")) {
//       return "Your todo is empty";
//     }
//     const validTodos = toDo.filter((todo) => todo !== "");
//     return `You have ${validTodos.length} todos - ${validTodos.join(", ")}`;
//   }
//   //__________________
//   else if (dicTate.includes("remove") && dicTate.includes("from my todo")) {
//     const removeIndex = dicTate.indexOf("remove") + 6;
//     const fromIndex = dicTate.indexOf("from my todo");
//     const itemToRemove = dicTate.substring(removeIndex, fromIndex).trim();

//     const index = toDo.indexOf(itemToRemove);
//     if (index > -1) {
//       toDo.splice(index, 1);
//       return `Removed ${itemToRemove} from your todo`;
//     } else {
//       return `Could not find "${itemToRemove}" in your todo`;
//     }
//   }
//   //__________________
//   else if (dicTate.includes("what day is it today")) {
//     return `Today is ${date} of ${month} ${year}`;
//   }
//   //__________________
//   else if (dicTate.startsWith("what is") && item.length >= 5) {
//     const num1 = Number(item[2]);
//     const operators = item[3];
//     const num2 = Number(item[4]);
//     if (isNaN(num1) || isNaN(num2)) {
//       return "Please use numbers for calculation";
//     }

//     return MatheMatical(num1, num2, operators);
//   }
//   //__________________
//   else if (dicTate.includes("set a timer for")) {
//     const timeIndex = item.indexOf("for") + 1;
//     if (timeIndex < item.length) {
//       const timeInMinutes = Number(item[timeIndex]);
//       if (!isNaN(timeInMinutes) && timeInMinutes > 0) {
//         setTime(timeInMinutes);
//         return `Timer set for ${timeInMinutes} minutes`;
//       }
//     }
//     return "Please specify a valid time for the timer";
//   }
//   //__________________
//   else if (dicTate.includes("tell me a joke")) {
//     const randomJoke = Math.floor(Math.random() * jokes.length);
//     return jokes[randomJoke];
//   }
//   //__________________
//   else if (dicTate.includes("flip a coin")) {
//     return Math.random() < 0.5 ? "Heads🪙" : "Tails🪙";
//   }

//   return "Sorry, I didn't understand that.";
// }

let userName = null;
const todos = [];

function setName(command) {
  const prefix = "Hello my name is ";
  const name = command.slice(prefix.length).trim();
  userName = name.charAt(0).toUpperCase() + name.slice(1);
  return `Nice to meet you ${userName}`;
}

function getName() {
  if (!userName) {
    return "I don't know your name yet.";
  }
  return `Your name is ${userName}`;
}

function addTodo(command) {
  const item = command.substring(4, command.indexOf(" to my todo")).trim();
  todos.push(item);
  return `${item} added to your todo`;
}

function removeTodo(command) {
  const item = command.substring(7, command.indexOf(" from my todo")).trim();
  const index = todos.indexOf(item);

  if (index === -1) return `${item} is not in your todo`;

  todos.splice(index, 1);
  return `Removed ${item} from your todo`;
}

function listTodos() {
  if (todos.length === 0) return "Your todo list is empty.";

  return `You have ${todos.length} todos - ${todos.join(", ")}`;
}

function getDate() {
  const date = new Date();
  return `${date.getDate()}. of ${date.toLocaleString("en-us", {
    month: "long",
  })} ${date.getFullYear()}`;
}

function doMath(command) {
  const expression = command.replace("what is", "").trim();
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
    return "I can only calculate simple math expressions.";
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    return result;
  } catch {
    return "I can't calculate that.";
  }
}

function setTimer(command) {
  const minutes = parseInt(command.match(/\d+/)[0]);
  setTimeout(() => console.log("⏰ Timer done!"), minutes * 60 * 1000);
  return `Timer set for ${minutes} minutes`;
}

function joke() {
  return "Why was the function sad? Because it didn’t get any arguments!";
}

function getReply(command) {
  const lower = command.toLowerCase();

  if (lower.startsWith("hello my name is")) return setName(command);
  if (lower === "what is my name") return getName();

  if (lower.includes("add") && lower.includes("to my todo"))
    return addTodo(command);
  if (lower.includes("remove") && lower.includes("from my todo"))
    return removeTodo(command);
  if (lower === "what is on my todo") return listTodos();

  if (lower === "what day is it today?") return getDate();

  if (lower.startsWith("what is")) return doMath(lower);

  if (lower.startsWith("set a timer for")) return setTimer(lower);

  if (lower === "tell me a joke") return joke();

  return "I don't understand that command.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("Tell me a joke"));
