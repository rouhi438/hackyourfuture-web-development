const dataApi = {
  people: [
    { craft: "ISS", name: "Oleg Kononenko" },
    { craft: "ISS", name: "Nikolai Chub" },
    { craft: "ISS", name: "Tracy Caldwell Dyson" },
    { craft: "ISS", name: "Matthew Dominick" },
    { craft: "ISS", name: "Michael Barratt" },
    { craft: "ISS", name: "Jeanette Epps" },
    { craft: "ISS", name: "Alexander Grebenkin" },
    { craft: "ISS", name: "Butch Wilmore" },
    { craft: "ISS", name: "Sunita Williams" },
    { craft: "Tiangong", name: "Li Guangsu" },
    { craft: "Tiangong", name: "Li Cong" },
    { craft: "Tiangong", name: "Ye Guangfu" },
  ],
  number: 12,
  message: "success",
};

//-- to get number of ISS
const result = dataApi.people.filter((person) => {
  return person.craft === "ISS";
});

// to get name of ISS group
const names = result.map((name) => {
  return name.name;
});
console.log(
  `There are ${result.length} astronauts in space, they are: ${names}`
);
