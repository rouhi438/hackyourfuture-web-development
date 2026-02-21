import { randomIntFromInterval } from "./script.js";
import { generateListings } from "./script.js";
const listings = generateListings(37);
randomIntFromInterval(listings);
const appContainer = document.getElementById("container");
appContainer.innerHTML = "";
listings.forEach((listing) => {
  const flag = listing.hasGarden ? "Yes" : "No";
  const listingBox = document.createElement("div");
  listingBox.className = "box";
  listingBox.innerHTML = `<div class="image-holder">
          <img src="${listing.img}" alt="" />
        </div>
        <div class="house-info">
          <div class="info-1">
            <p class="type"><i class="fa-regular fa-house"></i> ${listing.type}</p>
            <p class="price">${listing.price} $</p>
          </div>
          <div class="info-2">
            <p class="facilities">Facilities : ${listing.facilities}</p>
          </div>
          <div class="info-3">
            <p class="garden">Has Garden : ${flag}</p>
            <p class="size">${listing.size} m<sup>2</sup></p>
          </div>
          <div class="check">
            <a href=""
              ><i class="fa-regular fa-calendar"></i> Book time for visit</a
            >
            <a href="">Compute now</a>
          </div>
        </div>`;
  appContainer.appendChild(listingBox);
});
