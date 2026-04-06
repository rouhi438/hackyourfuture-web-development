//- Ex -1,2,3

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  render() {
    const card = document.createElement("div");

    card.textContent = this.getFullName();

    card.style.border = "1px solid black";
    card.style.backgroundColor = "lightBlue";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.textAlign = "center";

    document.body.append(card);
  }
}
const user1 = new User("Anita", "Hansen");

const user2 = new User("John", "Jensen");
user1.render();
user2.render();

//- Ex -4

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = Date.now();
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    //
  }

  addEducation(education) {
    //
  }

  removeEducation(education) {
    //
  }
}
const myCv = new CV("example@gmail.com");
const myDiv = document.createElement("div");
myDiv.textContent = myCv.jobs;
document.body.appendChild(myDiv);

const job1 = new Job(
  1,
  "Developer",
  "Frontend by focus on Java Script",
  "2022-02-28",
  "2025-05-20",
);
myCv.addJob(job1);
console.log(myCv.jobs);
