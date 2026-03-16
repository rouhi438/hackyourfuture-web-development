// task-1 Click counter
const btn1 = document.querySelector(".btn-1");
const countText = document.querySelector(".count");
let count = 0;
btn1.addEventListener("click", () => {
  countText.textContent = ` ${count}`;
  // console.log(); // start 0
  count++;
});
const btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", () => {
  countText.textContent = `${count}`;
  //console.log(`Button clicked ${count} times`);
  count++;
});

// task-2. Delay clicker
const delayBtn = document.querySelector(".delay");

// delayBtn.addEventListener("click", () => {
//   setTimeout(() => {
//     console.log("This text was delayed by 3 seconds");
//   }, 3000);
// });

delayBtn.addEventListener("click", loop);

function loop() {
  setTimeout(() => {
    console.log("This text was delayed by 3 seconds");
  }, 3000);
}

// task 3

const domFunction = function () {
  console.log("DOM fully loaded and parsed");
};
document.addEventListener("DOMContentLoaded", domFunction());

// task 4
const mousePlace = document.querySelector(".mouse-place");
document.addEventListener("mousemove", (event) => {
  mousePlace.textContent = `mouseX =${event.clientX}px & mouseY = ${event.clientY}px`;
});

// task-5

let place = [];
const mostMousePlace = document.querySelector(".most-mouse-place");
document.addEventListener("mousemove", (event) => {
  place.push({
    x: event.clientX,
    y: event.clientY,
  });

  console.log(place);
});
setTimeout(() => {
  const sum = place.reduce(
    (acc, num) => {
      acc.x += num.x;
      acc.y += num.y;
      return acc;
    },
    { x: 0, y: 0 },
  );
  const averageX = Math.floor(sum.x / place.length);
  const averageY = Math.floor(sum.y / place.length);
  const span = document.createElement("span");
  span.style.position = "absolute";
  span.style.backgroundColor = "red";
  span.style.height = "10px";
  span.style.width = "10px";
  span.style.left = averageX + "px";
  span.style.top = averageY + "px";
  span.style.borderRadius = "50px";
  document.body.appendChild(span);
  mostMousePlace.textContent = `Average X:" ${averageX}, and Average Y:", ${averageY}`;
}, 10000);
