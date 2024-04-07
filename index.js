//in Blackjack ace is 1, J = 11, Q = 12, K = 13
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //cards array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.querySelector("#message-el");
let startBtn = document.querySelector("#start-btn");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber;
}
function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
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
  let newCard = getRandomCard();
  sum += newCard; //adding a number to an existing variable
  //Push new card to the cards array
  cards.push(newCard);
  console.log(cards);
  renderGame();
}
newBtn.addEventListener("click", newCard);
