const show = document.querySelector(".show");
async function getData() {
  const res = await fetch("https://yesno.wtf/api");
  const result = await res.json();
  console.log(result);
  show.innerHTML = `${result.answer}`;
}
console.log(getData());

// // ex -2

async function getYesOrNo() {
  //const url = "https://yesno.wtf/api";
  const url = "https://knajskdskj.jasdk";
  await fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log("success");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
getYesOrNo();

// // ex -3

const logAfterFourSecond = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 4000);
}).then(() => {
  const el = document.createElement("p");
  el.textContent = "Hello";
  document.body.appendChild(el);
  console.log("Hello");
});

const makeCafeFunc = new Promise((resolve, reject) => {
  let makeCafe = true;
  let cafe = "Americano";
  setTimeout(() => {
    if (makeCafe) {
      resolve(cafe);
    } else {
      reject("the cafe was bad ");
    }
  }, 5000);
});
makeCafeFunc
  .then((cafe) => {
    console.log(`Cafe ${cafe}`);
  })
  .catch((error) => {
    console.log("lets drink water");
  });

// // Ex -4

function YesNoFail4Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random(); // == number 1
      if (random < 0.35) {
        resolve("yes");
      } else if (random < 0.7) {
        resolve("No");
      } else {
        reject("some things wrong");
      }
    }, 4000);
  });
}
YesNoFail4Seconds()
  .then((data) => {
    console.log(`The answer is ${data}`);
  })
  .catch((error) => {
    console.log(error);
  });

// Ex -5
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
