//
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1,
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1,
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1000, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(52, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

const listings = generateListings(37);
console.log(listings);

//------------- foreach ------------------
// (new model)
listings.forEach((list) => console.log(list.size));

// old model
function forEachHomMade(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i].size);
  }
}
forEachHomMade(listings);

//------------- map ---------------------
// new model
const priceOfListings = listings.map((list) => list.price);
console.log(priceOfListings); //return in array

// old model
function mapHomeMade(prices) {
  for (let i = 0; i < prices.length; i++) {
    console.log(prices[i].price);
  }
}
mapHomeMade(listings); // return is not array

//-------------filter -------------------
// new model ----- CHEAP ----------------
const cheapList = listings.filter((list) => list.price < 1000);
console.log(cheapList);

// old model
function cheapListing(cheap) {
  const cheapArray = [];
  for (let i = 0; i < cheap.length; i++) {
    if (cheap[i].price < 1000) {
      cheapArray.push(cheap[i]);
    }
  }
  return cheapArray;
}
console.log(cheapListing(listings));

// new model ----- EXPENSIVE -------------
const expenSiveList = listings
  .filter((list) => list.price > 9000)
  .map((list) => list.price);
console.log(expenSiveList);

// old model
function expensiveList(expensive) {
  const expensiveArray = [];
  for (let i = 0; i < expensive.length; i++) {
    if (expensive[i].price > 9000) {
      expensiveArray.push(expensive[i].price);
    }
  }
  return expensiveArray;
}
console.log(expensiveList(listings));

// new model ---------PARKING ----------
const includeParking = listings.filter((list) =>
  list.facilities.includes("Parkering"),
);
console.log(includeParking);

// old model
function withParking(parking) {
  const withParkingArray = [];
  for (let i = 0; i < parking.length; i++) {
    if (parking[i].facilities.includes("Parkering")) {
      withParkingArray.push(parking[i]);
    }
  }
  return withParkingArray;
}
console.log(withParking(listings));
