// script.js
// Simple functionality: change the page background to a random color when the button is clicked.

function getRandomColor() {
  // create a random hex color
  const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  return `#${hex}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('colorBtn');

  btn.addEventListener('click', () => {
    const newColor = getRandomColor();
    // Apply subtle gradient using the random color
    document.body.style.background = `linear-gradient(180deg, ${newColor}22, ${newColor}00)`;
    // update header color to keep contrast and show feedback
    document.querySelector('h1').style.color = newColor;
  });
});
