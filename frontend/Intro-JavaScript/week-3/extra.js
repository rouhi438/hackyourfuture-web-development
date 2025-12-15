/* Ahmed Hansen, 23, JavaScript Developer, ahmed.hassan@hyf.dk, Copenhagen
// React Fundamentals, 6 weeks, Intermediate, Room B-201, Tuesdays 14:00-17:00
// Sarah Mitchell, Mentor, 7 years experience, Full-Stack Development, sarah@hyf.dk
// Final Project Presentation, December 15, 2025, All students required
// Maria Santos, 20, UX/UI Designer, maria.santos@hyf.dk, Aarhus
// Node.js and Express, 8 weeks, Advanced, Prerequisites: JavaScript, HTML/CSS
// Todo List Application, Week 4, JavaScript, 85 points, Due: November 25
// Tom Andersen, Mentor, Backend Specialist, 5 years, Node.js, Python, tom@mentors.hyf.dk
// Ymin Al-Rash, 22, Data Analyst, yasmin.rashid@hyf.dk, Odense
// Monday Morning Standup, 9:00 AM, Every week, Mandatory attendance
// Portfolio Website Project, HTML/CSS/JavaScript, Week 7, 120 points maximum
// Elena Petersen, Mentor, Frontend Expert, React, Angular, Vue.js, 9 years experience */

//
const mentor = [
  {
    fiiName: "Ahmed Hansen",
    age: 23,
    skills: {
      num1: "JavaScrip Developer, Intermediate ",
      num2: "React Fundamentals, 6 weeks ",
    },
    email: "ahmed.hassan@hyf.dk",
    address: "Copenhagen, Room B-201, ",
  },
  {
    fullName: "Sarah Mitchell",
    skill: {
      num1: "Mentor",
      num2: "Full-Stack Development",
    },
    email: "sarah@hyf.dk",
  },
];

const input1 = [
  ["white", "goodness"],
  ["blue", "tranquility"],
];
const input2 = [
  ["red", "energy"],
  ["yellow", "creativity"],
  ["brown", "friendly"],
  ["green", "growth"],
];
function colorAssociation(array) {
  // We <3 colors..
  return array.map(([color, meaning]) => {
    return { [color]: meaning };
  });
}
console.log(colorAssociation(input1)); // [{white:"goodness"},{blue:"tranquility"}]
console.log(colorAssociation(input2)); // [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]

//----------Finding last character(tail) of word----------------

function correctTail(body, tail) {
  const sub = body.substring(body.length - tail.length);

  if ((sub = tail)) return true;
  else return false;
}
function correctTail(body, tail) {
  const sub = body.substring(body.length - tail.length);

  if ((sub = tail)) return true;
  else return false;
}

function correctTail(body, tail) {
  const sub = body.substring(body.length - tail.length);
  return sub === tail;
}

console.log(correctTail("Fox", "x")); // true
console.log(correctTail("Rhino", "o")); // true
console.log(correctTail("Tiger", "g")); // false
console.log(correctTail("Lion", "o")); // false
console.log(correctTail("Abed", "d")); // true
