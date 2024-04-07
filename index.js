//in Blackjack ace is 1, J = 11, Q = 12, K = 13
let cards = []; //cards array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.querySelector("#message-el");
let startBtn = document.querySelector("#start-btn");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Tshidi",
  chips: 145,
};
let playerEl = document.querySelector("#player-el");
playerEl.textContent = `${player.name} : $${player.chips}`;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    //Ace card == 11
    return 11;
  } else if (randomNumber > 10) {
    return 10; //QKJ cards = 10
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

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
  //Shoudn't be able to draw cards when isAlive = false
  //Should'nt be allowed to start the game with one card
  //Only allow the player to get a new card if she isAlive and does not have BlackJack
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard; //adding a number to an existing variable
    //Push new card to the cards array
    cards.push(newCard);
    console.log(cards);
    renderGame();
  }
}
newBtn.addEventListener("click", newCard);
