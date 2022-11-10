'use strict';
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const hiddenNumber = document.querySelector('.number');

// Generate random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// hiddenNumber.textContent = randomNumber;

// Hide Button
againBtn.style.display = 'none';

// Score logic
let score = 10;
let highScore = 0;

// function
function reset() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  score = 10;
  scoreEl.textContent = score;
  document.querySelector('.guess').value = '';
  againBtn.style.display = 'none';
  hiddenNumber.style.width = '15rem';
  hiddenNumber.textContent = randomNumber;
  hiddenNumber.textContent = '?';
}

function guessedRight() {
  document.body.style.backgroundColor = '#60B347';
  message.textContent = '🎉 Correct guess. Well done!';
  againBtn.style.display = 'block';
  hiddenNumber.textContent = randomNumber;
  hiddenNumber.style.width = '30rem';
  againBtn.textContent = 'Play Again';
}

function gameOver() {
  message.textContent = 'Oops! Game over';
  scoreEl.textContent = 0;
  againBtn.style.display = 'block';
  againBtn.textContent = 'Try Again';
}

checkBtn.addEventListener('click', () => {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (guessedNumber > 20 || !guessedNumber) {
    message.textContent = 'Input number between 1 and 20';
  } else if (guessedNumber === randomNumber) {
    guessedRight();
    if (highScore < score) {
      highScore = score;
      highscoreEl.textContent = `${score * 10} points`;
    }
  } else if (guessedNumber < randomNumber) {
    if (score > 1) {
      message.textContent = 'Too Low';
      score--;
      scoreEl.textContent = score;
    } else {
      gameOver();
    }
  } else if (guessedNumber > randomNumber) {
    if (score > 1) {
      message.textContent = 'Too High';
      score--;
      scoreEl.textContent = score;
    } else {
      gameOver();
    }
  }
});

againBtn.addEventListener('click', reset);
