let minNumber = 1;
let maxNumber = 100;
let mysteryNumber;
let userGuess;
let maxAttempts = 0;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(guess, mysteryNumber) {
  if (guess < mysteryNumber) {
    return "Upppzz!";
  } else if (guess > mysteryNumber) {
    return "Downzz!";
  } else {
    return "You'r right!";
  }
}

function isValidInput(input) {
  let number = parseInt(input);

  return !isNaN(number);
}

function playOneRound() {
  let attempts = 0;
  let isCorrect = false;

  mysteryNumber = generateRandomNumber(minNumber, maxNumber);

  while (!isCorrect) {
    if (maxAttempts > 0 && attempts >= maxAttempts) {
      alert(
        `You've used all ${maxAttempts} attempts! The number was ${mysteryNumber}.`
      );
      break;
    }

    let message =
      attempts === 0
        ? `I'm thinking of a number between ${minNumber} and ${maxNumber}. Guess what it is!`
        : `Again!!!! Enter a number between ${minNumber} and ${maxNumber}:`;

    let userInput = prompt(message);

    if (userInput === null) {
      alert("Game canceled!");
      return;
    }

    if (!isValidInput(userInput)) {
      alert("WTF!! That's not a valid number! Do it again.");
      continue;
    }

    userGuess = parseInt(userInput);

    attempts++;

    let result = checkGuess(userGuess, mysteryNumber);

    if (result === "Correct!") {
      isCorrect = true;
      alert(
        `Wohoooooo! You found the number ${mysteryNumber} in ${attempts} attempt(s)!`
      );
    } else {
      alert(result);
    }
  }
}

function customizeGame() {
  let customize = confirm("Do you want to customize the game?");

  if (customize) {
    let minInput = prompt("Enter minimum number:", "1");
    if (isValidInput(minInput)) {
      minNumber = parseInt(minInput);
    }

    let maxInput = prompt("Enter maximum number:", "100");
    if (isValidInput(maxInput)) {
      maxNumber = parseInt(maxInput);
    }

    if (minNumber >= maxNumber) {
      alert("Minimum must be less than maximum. ");
      minNumber = 1;
      maxNumber = 100;
    }

    let difficultMode = confirm(
      "Play in difficult mode? (10 attempts maximum)"
    );
    maxAttempts = difficultMode ? 10 : 0;
  }
}

function startGame() {
  let playAgain = true;
  alert("Welcome to Our Guessing Game!");

  while (playAgain) {
    customizeGame();

    playOneRound();

    playAgain = confirm("Do you want to play again?");
  }

  alert("Thanks for playing!");
}

document.getElementById("startGame").addEventListener("click", function () {
  startGame();
});
