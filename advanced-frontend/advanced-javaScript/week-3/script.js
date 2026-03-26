// Exercise-1 async/await ===========================================

async function getData() {
  const url = "https://yesno.wtf/api";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
getData();
async function getData() {
  console.log("Before we fetch data");
  const res = await fetch("https://yesno.wtf/api");
  console.log(
    "This is logged out after some time, even though the code looks synchronous! 🤯",
  );
  const allData = await res.json();
  console.log("This is logged out after some time! 🤯");
  console.log(allData);
  return allData;
}
getData();

// Exercise-2 Promise consumption ==========================================

function gettingData() {
  const url = "https://yesno.wtf/api";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(result.answer);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
gettingData();

fetch("https://yesno.wtf/api")
  .then((dataResponse) => dataResponse.json())
  .then((allData) => {
    console.log(allData);
  })
  .catch((error) => console.log(error));
// scrollTo("section.features")
//   .then(() => console.log("Scrolling done."))
//   .catch((error) => console.log(error));

//--
function getReject() {
  const url = "https://knajskdskj.jasdk";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
getReject();

// Exercise 3 =========================================
const fourSecondTimeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 4000);
});
fourSecondTimeoutPromise.then(() => {
  console.log("hello");
});

//--
const makeCafePromise = new Promise((resolve, reject) => {
  const madeCafeSuccess = true;
  const cafe = "Americano";
  setTimeout(() => {
    if (!madeCafeSuccess) {
      resolve(cafe);
    } else {
      reject("The cafe was bad");
    }
  }, 5000);
});

makeCafePromise
  .then((cafe) => {
    console.log(`Let's drink the cafe ${cafe} `);
  })
  .catch((error) => {
    console.log(error);
  });

// Exercise 4 =================================================

function YesNoFail4Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.33) {
        resolve("Yes");
      } else if (random < 0.66) {
        resolve("No");
      } else {
        reject("Something went wrong!");
      }
    }, 4000);
  });
}
YesNoFail4Seconds()
  .then((data) => {
    `The answer is ${data}`;
  })
  .catch((error) => {
    console.log(error);
  });

// Exercise 5 =================================================
async function fetchAstronauts() {
  const url = "http://api.open-notify.org/astros.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(`there are ${data.number} astronauts in space`);
    data.astronauts.forEach((ast) => {
      console.log(`${ast.name} - ${ast.craft}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
fetchAstronauts();

//--
async function getMovies() {
  const url =
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    data.forEach((movie) => {
      console.log(`${movie.title}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
getMovies();

//-- getting movie and astronauts same time

async function getBothData() {
  const astUrl = "http://api.open-notify.org/astros.json";
  const movieUrl =
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
  try {
    const [astroRes, movieRes, battery] = await Promise.all([
      fetch(astUrl),
      fetch(movieUrl),
      navigator.getBattery(),
    ]);
    const astroData = await astroRes.json();
    const movieData = await movieRes.json();
    console.log("Astronauts:", astroData.number);
    (console.log("movies:"),
      movieData.forEach((movie) => {
        console.log(movie.title);
      }));
    console.log("battery level:", battery.level * 100 + "%");
  } catch (error) {
    console.log(error.message);
  }
}
getBothData();
