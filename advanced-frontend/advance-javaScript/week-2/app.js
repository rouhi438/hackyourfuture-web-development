// // task-2. Delay clicker
// const delayBtn = document.querySelector(".delay");

// delayBtn.addEventListener("click", () => {
//   setTimeout(() => {
//     console.log("This text was delayed by 3 seconds");
//   }, 3000);
// });

// // task-3 Page onload

// const myFunction = function () {
//   console.log("DOM fully loaded and parsed");
// };
// document.addEventListener("DOMContentLoaded", (event) => {
//   myFunction();
// });

// // task-4  Mouse position

// document.addEventListener("click", (e) => {
//   console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`); // for viewport
// });

// document.addEventListener("click", (e) => {
//   console.log(`Mouse X: ${e.pageX}, Mouse Y: ${e.pageY}`); // for Document page
// });

// //task-5. . Mouse position online tool

// // create some js that will get the average x and y position of a user's mouse after 30 seconds.
// const clicked = {};
// document.addEventListener("click", (event) => {
//   const tag = `${event.clientX}, ${event.clientY}`;
//   clicked[tag] = (clicked[tag] || 0) + 1;
// });
// setTimeout(() => {
//   let more = 0;
//   let text = "";
//   for (let k in clicked) {
//     if (clicked[k] > more) {
//       more = clicked[k];
//       text = k;
//     }
//   }
//   console.log("Most clicked:", text, "Clicks:", more);
// }, 3000);

// infinite loop
// function loop() {
//   console.log("I'm alive");
//  setTimeout(loop, 1000);
// }
// loop();
