// STORE OPENING HOURS - EXERCISE
const opening_hours = [
  {
    day: "Saturday",
    open: 10,
    close: 16,
  },
  {
    day: "Sunday",
    open: "Closed",
    close: "Closed",
  },
  {
    day: "Monday",
    open: 9,
    close: 19,
  },
  {
    day: "Tuesday",
    open: 9,
    close: 19,
  },
  {
    day: "Wednesday",
    open: 9,
    close: 19,
  },
  {
    day: "Thursday",
    open: 9,
    close: 19,
  },
  {
    day: "Friday",
    open: 9,
    close: 20,
  },
];

function getOpeningHours(newDay) {
  for (let i = 0; i < opening_hours.length; i++) {
    if (opening_hours[i].day === newDay) {
      return opening_hours[i];
    }
  }
}
console.log(getOpeningHours("Monday"));
// Get Opening Hours for a Day
// Should return: { day: "Monday", open: "09:00", close: "19:00" }

console.log("--------------------next command-----------------");

// EXERCISE 2: Check If Store Is Open

const isOpenNow = (day, time) => {
  for (const one of opening_hours) {
    if (one.day === day) {
      return one.open < time && one.close > time ? "open" : "closed";
    }
  }
  return "Enter valid day";
};

console.log(isOpenNow("Monday", "10")); // "open"
console.log(isOpenNow("Monday", "20")); // "closed"
console.log(isOpenNow("Friday", "18")); // "open"
console.log(isOpenNow("Sunday", "11")); // "closed"

console.log("--------------------next command-----------------");
// EXERCISE 3: Special Event Hours

/* TASK: During special events, the store opens 1 hour earlier and closes 1 hour later.
 Create a function that checks if the store is open considering special events.

INPUT: 
  - day (string): Day name
  - time (string): Time in format "HH:MM"
  - isSpecialEvent (boolean): true if there's a special event
*/

const isOpenWithEvent = (day, time, event) => {
  for (const one of opening_hours) {
    if (one.day === day) {
      if (!event) {
        return one.open <= time && one.close >= time ? "open" : "closed";
      } else {
        const open = one.open - 1;
        const close = one.close + 1;
        return open <= time && close >= time ? "open" : "closed";
      }
    }
  }
  return "Enter valid day";
};

console.log(isOpenWithEvent("Monday", 8, true)); // "open"
console.log(isOpenWithEvent("Monday", 8, false)); // "closed"
console.log(isOpenWithEvent("Friday", 21, true)); // "open"
console.log(isOpenWithEvent("Sunday", 15, true)); // "closed"
console.log(isOpenWithEvent("Monday", "8", false)); // "closed"
console.log(isOpenWithEvent("Monday", "8", true)); // "open"
console.log(isOpenWithEvent("Friday", "21", true)); // "open"

console.log("--------------------next command-----------------");

const isOpenWithEvents = (day, time, event) => {
  for (const one of opening_hours) {
    if (one.day === day) {
      if (!event) {
        return one.open <= time && one.close >= time ? "open" : "closed";
      } else {
        const open = one.open - 1;
        const close = one.close + 1;
        return open <= time && close >= time ? "open" : "close";
      }
    }
  }
  return "Enter valid day";
};
console.log(isOpenWithEvents("Sunday", 15, true)); // "close"
