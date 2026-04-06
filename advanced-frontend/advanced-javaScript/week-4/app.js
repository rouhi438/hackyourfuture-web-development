// ex-1
class user {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// ex-2
const user1 = new user("Abbas", "Rouhi.H");
console.log(user1.firstName);

// ex-3
class person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new person("Victor", "Valdez");

console.log(person1.getFullName());

// ex-4

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
class Cv {
  constructor(email) {
    this.Jobs = [];
    this.Education = [];
    this.email = email;
  }
  addJob(job) {
    this.Jobs.push(job);
  }
  removeJob(job) {
    this.Jobs = this.Jobs.filter((i) => i.id !== job.id);
  }
  addEducation(education) {
    this.Education.push(education);
  }
  removeEducation(education) {
    this.Education = this.Education.filter((e) => e.id !== education.id);
  }
}
const myCV = new Cv("rouhi438@gmail.com");
const body = document.querySelector("body");
const span = document.createElement("span");
span.textContent = `Email : ${this.email}`;
body.appendChild(span);
console.log(myCV);

//------

const job1 = new Job(
  1,
  "Developer",
  "Developing apps using Java-Script and React",
  new Date("2025-07-30"),
  new Date("2026-02-28"),
);
myCV.addJob(job1);
//console.log(myCV.Jobs);
//------
const job2 = new Job(
  2,
  "Teacher",
  "Teaching Math",
  new Date("2015-05-12"),
  new Date("2025-01-21"),
);
myCV.addJob(job2);
console.log(myCV.Jobs);
//---
const removed = myCV.removeJob(1);
console.log("remove:", removed);

//-- education

const education1 = new Education(
  1,
  "Bachelor",
  "DTU university",
  "Copenhagen Denmark",
  new Date("2011-06-30"),
  new Date("2017-03-30"),
);
myCV.addEducation(education1);
console.log(myCV.Education);

//-- render HTML

// getFullName(user){
// console.log(this.firstName + this.lastName)
// }

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render = () => {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   };
// }
