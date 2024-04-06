let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard]; //cards array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.querySelector("#message-el");
let startBtn = document.querySelector("#start-btn");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
function startGame() {
  renderGame();
}
function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;

  if (sum <= 20) {
    message = `Do you want to draw a new card?`;
  } else if (sum === 21) {
    message = `You've got Blackjack!`;

    hasBlackJack = true;
  } else {
    message = `You're out of the game!`;
    isAlive = false;
  }

  messageEl.textContent = message;
}
startBtn.addEventListener("click", startGame);
let newBtn = document.querySelector("#new-btn");

function newCard() {
  let newCard = 6;
  sum += newCard; //adding a number to an existing variable
  //sumEl.textContent = `Sum: ${sum}`;
  // cardsEl.textContent = `Cards: ${firstCard} ${secondCard} ${newCard}`;
  //Push new card to the cards array
  cards.push(newCard);
  console.log(cards);
  renderGame();
}
newBtn.addEventListener("click", newCard);
