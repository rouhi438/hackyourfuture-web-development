//-- defining normal function
//Create a function that has two parameters: imageUrl and elementToAppendImageTo.
// The function should create an img tag and set the src attribute of the img to
// the imageUrl parameter. The function should then append the img to the
// elementToAppendImageTo - html element.

// function createElement(imageUrl, elementToAppendImageTo) {
//   const img = document.createElement("img");
//   img.src = imageUrl;
//   elementToAppendImageTo.appendChild(img);
//   img.style.width = "100%";
//   img.style.height = "100%";
//   img.style.objectFit = "cover";
// }
// createElement("https://picsum.photos/536/354", document.body);

// --  defining again by declaring parameters in the object or variable

const params = {
  imageUrl: "https://picsum.photos/536/354",
  elementToAppendImageTo: document.body,
};

function imageListener(imageUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = imageUrl;
  elementToAppendImageTo.appendChild(img);
  img.style.width = "100%";
  img.style.height = "100vh";
  img.style.objectFit = "cover";
}
imageListener(params.imageUrl, params.elementToAppendImageTo);
