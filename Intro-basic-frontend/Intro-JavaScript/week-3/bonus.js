// Extra bonus week3

let candidate = { minSalary: 120000 };
let job = { maxSalary: 140000 };
function matchSaLari(candidate, job) {
  // is this job a valid matchSaLari for the candidate?

  let newSalary = candidate.minSalary * 0.9; //= 108000;
  if (newSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}
console.log(matchSaLari(candidate, job));

console.log("---------------------next command------------------");

let candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["SF", "LA"],
  },
  {
    desiresEquity: false,
    currentLocation: "Texas",
    desiredLocations: ["Kentucky"],
  },
];

let job1 = { equityMax: 1.2, locations: ["New York", "Kentucky"] };
//job condition
function match(job1, candidates) {
  return candidates.filter((candid) => {
    if (candid.desiresEquity && job1.equityMax === 0) {
      return false;
    }
    //location condition
    const locations = job1.locations;
    if (
      !locations.includes(candid.currentLocation) &&
      !candid.desiredLocations.some((loc) => locations.includes(loc))
    ) {
      return false;
    }

    return true;
  });
}

console.log(match(job1, candidates));

console.log("---------------------next command------------------");

function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

console.log(createArray(5));
