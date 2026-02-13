//-- initialize dynamically HTML
const gameApp = document.getElementById("game-app");
function renderGameApp() {
  gameApp.innerHTML = `
  <header>
        <p>Memory Game</p>
      </header>
      <main class="game-container">
        <div class="game-info">
          <div>timer : <span id="timer">0</span>s</div>
          <div>Move : <span id="moves">0</span></div>
          <div>Matched : <span id="matched">0</span>/8</div>
        </div>
        <div id="cards-box" class="cards-box"></div>
        <div class="btns">
          <button type="submit" class="reset-btn">Rest game</button>
          <button type="submit" class="hard-btn">hard Mode</button>
        </div>
      </main>
      <footer>
        <p>designed by Abbas RouHi</p>
      </footer>
  `;
}
renderGameApp();

const cardsBox = document.getElementById("cards-box");
let timerElement = document.getElementById("timer");
let movesElement = document.getElementById("moves");
let matchedElement = document.getElementById("matched");

let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;

// game state
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let gameStarted = false;

// ---------------- DATA ----------------
let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cards = [];

// duplicate letters → 16 cards
letters.forEach((letter) => {
  cards.push(letter);
  cards.push(letter);
});

// ---------------- SHUFFLE ----------------
function mixCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
}

mixCards();

// ---------------- TIMER ----------------
function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
    timerElement.textContent = timer;
  }, 1000);
}

// ---------------- CREATE CARDS ----------------
function createBoard() {
  cards.forEach((value, index) => {
    const card = document.createElement("div");

    card.className = "card";
    card.dataset.value = value;
    card.dataset.index = index;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${value}</div>
      </div>
    `;

    card.addEventListener("click", handleCardClick);

    cardsBox.appendChild(card);
  });
}

createBoard();

// ---------------- CLICK LOGIC ----------------
function handleCardClick(e) {
  const clickedCard = e.currentTarget;

  if (lockBoard) return;
  if (clickedCard === firstCard) return;
  if (clickedCard.classList.contains("matched")) return;

  // start timer first click
  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }

  clickedCard.classList.add("flip");

  if (!firstCard) {
    firstCard = clickedCard;
    return;
  }

  secondCard = clickedCard;
  moves++;
  movesElement.textContent = moves;

  checkMatch();
}

// ---------------- MATCH CHECK ----------------
function checkMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

// ---------------- MATCH SUCCESS ----------------
function disableCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");

  matchedPairs++;
  matchedElement.textContent = matchedPairs;

  resetBoard();

  if (matchedPairs === letters.length) {
    clearInterval(timerInterval);
    setTimeout(() => {
      alert("You Win!");
    }, 500);
  }
}

// ---------------- MATCH FAIL ----------------
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 900);
}

// ---------------- RESET ----------------
function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}
