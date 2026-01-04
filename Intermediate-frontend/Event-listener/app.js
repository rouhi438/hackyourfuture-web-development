const clickBtn = document.getElementById("click");
let isClicked = false;
clickBtn.addEventListener("click", () => {
  if (!isClicked) {
    clickBtn.textContent = "Button clicked";
  } else {
    clickBtn.textContent = "Click Me";
  }
  isClicked = !isClicked;
});
//--- dark and light mode
const changeModeBtn = document.getElementById("mode");
//const body = document.getElementsByTagName('body');
let isChanged = false;
changeModeBtn.addEventListener("click", () => {
  if (!isChanged) {
    changeModeBtn.textContent = "Light mode";
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  } else {
    changeModeBtn.textContent = "Dark mode";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
  isChanged = !isChanged;
});
