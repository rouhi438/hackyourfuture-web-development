//-- API
const data = {
  message: "https://images.dog.ceo/breeds/puggle/IMG_112010.jpg",
  status: "success",
};
// -- Get a random dog image and display it in the browser
function showImage(data) {
  const dogImage = document.querySelector(".dog-images");
  dogImage.src = data.message;
}

function dogImages() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then(showImage);
}

window.addEventListener("DOMContentLoaded", function () {
  dogImages();
  this.setInterval(dogImages, 2000);
});

//-- Get the list of all breeds
function listBreed(data) {
  const totalBreeds = document.querySelector(".total");
  const breeds = Object.keys(data.message);
  totalBreeds.textContent = breeds.length;
}
function totalBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then(listBreed);
}
totalBreeds();

//-- Display a random image of breeds from the list
//-- And
//-- Display the name of the breed under the image
function showBreedImage(data, breedName) {
  const breedImage = document.getElementById("breed-image");
  const breedText = document.getElementById("breed-name");
  breedImage.src = data.message;
  breedText.textContent = `Breed Name : ${breedName}`;
}
function getRandomBreedImage() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      const breedName = breeds[Math.floor(Math.random() * breeds.length)];
      return fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then((response) => response.json())
        .then((imageData) => showBreedImage(imageData, breedName));
    })
    .catch((error) => console.log(error));
}
getRandomBreedImage();
