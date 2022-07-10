const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const currentScore = document.querySelectorAll('.current-score');
const btnHold = document.querySelector('.btn--hold');
const newgame = document.querySelector('.btn--new');

let score = [0, 0];

let activePlayer = 0;

let current = 0;
function random() {
  let a = Math.trunc(Math.random() * 6 + 1);
  return a;
}

// new game function
function newGame() {
  score = [0, 0];
  activePlayer = 0;
  current = 0;
}

// switch player
function switchPlayer() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  current = 0;
  currentScore[activePlayer].textContent = current;

  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
}

// staring page
function Start() {
  dice.classList.toggle('hidden');
  score = [0, 0];
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
}
Start();
// roll the dice
btnRoll.addEventListener('click', function () {
  let randomNumber = random();
  console.log(randomNumber);
  dice.src = `./image/dice-${randomNumber}.png`;
  dice.classList.remove('hidden');
  if (randomNumber != 1) {
    current += randomNumber;
  } else {
    score[activePlayer] = score[activePlayer] + current;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    switchPlayer();
  }
  currentScore[activePlayer].textContent = current;
});

// hold btn
btnHold.addEventListener('click', function () {
  score[activePlayer] = score[activePlayer] + current;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  switchPlayer();
});

newgame.addEventListener('click', function () {
  Start();
});
