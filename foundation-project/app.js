//-- initialize dynamically HTML
const gameApp = document.getElementById("game-app");
function renderGameApp() {
  gameApp.innerHTML = `
      <header>
        <span>M</span><span>E</span><span>M</span><span>O</span><span>R</span><span>Y</span> 
      <span>&nbsp;</span><span>G</span><span>A</span><span>M</span><span>E</span>
      </header>
      <main class="game-container">
        <div class="game-info">
          <div>Timer : <span id="timer">0</span>s</div>
          <div>Move : <span id="moves">0</span></div>
          <div>Matched : <span id="matched">0</span>/12</div>
        </div>
        <div id="cards-box" class="cards-box"></div>
        <div class="btns">
          <button type="button" class="reset-btn">Reset game</button>
          <button type="button" class="hard-btn">hard Mode</button>
        </div>
      </main>
       <p class="win-message"></p>
       <div class="emoji-icon"></div>
      <footer>
        <div class="socials">
         <a href="https://github.com/rouhi438" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a href="https://linkedin.com/in/rouhi438" target="_blank"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a href="https://codepen.io/rouhi438" target="_blank"
          ><i class="fa-brands fa-codepen"></i
        ></a>
        <a href="https://freecodecamp.org/rouhi438" target="_blank"
          ><i class="fa-brands fa-free-code-camp"></i
        ></a>
        </div>
        <hr>
        <p>© 2025 <a href"" target="_blank">Abbas R.hansen</a>. All rights reserved.</p>
      </footer>
  `;
}
renderGameApp();

// ---------------- DATA ----------------
const cardsJson = [
  { id: 1, image_path: "./anime-image/image-1.png" },
  { id: 2, image_path: "./anime-image/image-2.png" },
  { id: 3, image_path: "./anime-image/image-3.png" },
  { id: 4, image_path: "./anime-image/image-4.png" },
  { id: 5, image_path: "./anime-image/image-5.png" },
  { id: 6, image_path: "./anime-image/image-6.png" },
  { id: 7, image_path: "./anime-image/image-7.png" },
  { id: 8, image_path: "./anime-image/image-8.png" },
  { id: 9, image_path: "./anime-image/image-9.png" },
  { id: 10, image_path: "./anime-image/image-10.png" },
  { id: 11, image_path: "./anime-image/image-11.png" },
  { id: 12, image_path: "./anime-image/image-12.png" },
];
const cardsBox = document.getElementById("cards-box");
const timeElement = document.getElementById("timer");
const movesElement = document.getElementById("moves");
const matchedElement = document.getElementById("matched");
const msg = document.querySelector(".win-message");
const resetBtn = document.querySelector(".reset-btn");
const hardBtn = document.querySelector(".hard-btn");
const emojiIcon = document.querySelector(".emoji-icon");

const flipSound = new Audio("./sound_flip_card.ogg");
const correctSound = new Audio("./sounds/sound_win.wav");
const wrongSound = new Audio("./sounds/sound_wrong.wav");
const shuffleSound = new Audio("./sounds/sound_shuffle.wav");
const winnerSound = new Audio("./sounds/Winner.mp3");
const gameOverSound = new Audio("./sounds/game-over.mp3");

//------------Variables -----------------
let cards = [];
let matchedPairs = 0;
let time = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let gameStarted = false;
let hardLevel = false;
let hardTime = 40;
let emojiVisible = false;

//----------Reset Btn --------------------
resetBtn.addEventListener("click", () => {
  hardLevel = false;
  clearInterval(timerInterval);
  timer = 0;
  startGame();
  cards = shuffle([...cardsJson, ...cardsJson]);
  createGameBoard();
});

//----------Start Game ------------------
function startGame() {
  cardsBox.innerHTML = "";
  clearInterval(timerInterval);
  gameStarted = false;
  hardLevel = false;
  time = 0;
  matchedPairs = 0;
  moves = 0;
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  msg.textContent = "";
  emojiIcon.innerHTML = "";
  timeElement.textContent = 0;
  timeElement.style.color = "";
  matchedElement.textContent = 0;
  movesElement.textContent = 0;
}
//-----------Hard Btn --------------------
hardBtn.addEventListener("click", () => {
  startGame();
  startHardLevel();
  cards = shuffle([...cardsJson, ...cardsJson]);
  createGameBoard();
});
//-----------Hard Level -------------------
function startHardLevel() {
  clearInterval(timerInterval);

  hardLevel = true;
  gameStarted = true;
  timer = hardTime;

  timeElement.textContent = timer;

  timerInterval = setInterval(() => {
    timer--;
    timeElement.textContent = timer;

    if (timer <= 15) {
      timeElement.style.color = "red";
    }

    if (timer <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}
// ----------------duplicate cards ---------
cards = shuffle([...cardsJson, ...cardsJson]);

// ---------------- SHUFFLE ----------------
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// ---------------- TIMER ----------------
function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timer++;
    timeElement.textContent = timer;
  }, 1000);
}

// ---------------- CREATE CARDS ----------------
function createGameBoard() {
  cards.forEach((cardsData, index) => {
    const card = document.createElement("div");

    card.className = "card";
    card.dataset.value = cardsData.id;
    card.dataset.index = index;

    card.innerHTML = `
        <div class="face front"></div>
        <div class="face back">
         <img src="${cardsData.image_path}" alt="card-${cardsData.id}">
         </div>
   `;

    card.addEventListener("click", handleCardClick);

    cardsBox.appendChild(card);
  });
}

createGameBoard();

// ---------------- CLICK LOGIC ----------------
function handleCardClick(e) {
  const clickedCard = e.currentTarget;

  if (lockBoard) return;
  if (clickedCard === firstCard) return;
  if (clickedCard.classList.contains("matched")) return;
  playSound(flipSound);

  // start timer first click
  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }

  clickedCard.classList.add("flipped");

  if (!firstCard) {
    firstCard = clickedCard;
    //playSound(shuffleSound, 0);
    //playSound(flipSound, 100);
    return;
  }

  secondCard = clickedCard;
  lockBoard = true;
  playSound(shuffleSound, 0);
  playSound(flipSound, 100);
  moves++;
  movesElement.textContent = moves;
  checkMatch();
}

// ---------------- MATCH CHECK ----------------
function checkMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;
  if (isMatch) {
    disableCards();
    playSound(correctSound, 100);
  } else {
    unMatchCard();
    playSound(wrongSound, 400);
  }
}

// ---------------- MATCH SUCCESS ----------------
function disableCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");
  matchedPairs++;
  matchedElement.textContent = matchedPairs;
  matchedElement.style.color = "blue";

  resetBoard();

  if (matchedPairs === cardsJson.length) {
    clearInterval(timerInterval);
    timer = null;
    setTimeout(() => {
      playSound(winnerSound);
      msg.innerHTML =
        "You WON The Game! 🏆<br> <span>Will Do Try Again?</span>";
      emojiIcon.innerHTML = "😎";
      emojiIcon.classList.add("emoji-anime");
    }, 500);
  }
}

// ---------------- MATCH FAIL ----------------
function unMatchCard() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 900);
}

// ---------------- RESET ----------------
function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}
// --------------- SOUND WITH DELAY ------
function playSound(sound, delay = 0) {
  setTimeout(() => {
    sound.currentTime = 0;
    sound.play();
  }, delay);
}

//------------Game Over ------------------
function gameOver() {
  lockAllCards();
  playSound(gameOverSound);
  msg.innerHTML = "Game Over!!! <br> <span>Will Do Try Again?</span>";
  emojiIcon.innerHTML = "☹️";
  emojiIcon.classList.add("emoji-anime");
}

//----------Lock All Cards-----------------
function lockAllCards() {
  lockBoard = true;
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.style.pointerEvents = "none";
  });
}

//---------- Emoji ------------------------
function showEmoji(emoji) {
  emojiIcon.textContent = emoji;
  emojiIcon.style.opacity = 1;
  emojiIcon.classList.add("emoji-anime");
  emojiVisible = true;
}
