const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const body = document.querySelector("body");
//-- create ul
const podcastList = document.createElement("ul");
body.appendChild(podcastList);

//-- loop to get every index of array
podcasts.forEach((item) => {
  //-- create li
  const podcastItem = document.createElement("li");
  podcastList.appendChild(podcastItem);
  //-- create h1
  const currentPodcast = document.createElement("h1");
  podcastItem.appendChild(currentPodcast);
  currentPodcast.innerHTML = item.name;

  // if( item.imageUrl !== undefined){...}
  // if(item.imageUrl){...}
  if ("imageUrl" in item) {
    const img = document.createElement("img");
    img.src = item.imageUrl;
    //img.alt = item.name;
    podcastItem.appendChild(img);
  }
});
