function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function calculateWinner(player, comp) {
  if (player === "rock") {
    if (comp === "scissors") {
      return true;
    } else {
      return false;
    }
  } else if (player === "paper") {
    if (comp === "rock") {
      return true;
    } else {
      return false;
    }
  } else {
    if (comp === "paper") {
      return true;
    } else {
      return false;
    }
  }
}

function updateScore(win) {
  if (win) {
    wins.textContent++;
  } else {
    losses.textContent++;
  }
}

function playRound(player, comp) {
  let win = false;

  if (comp === player) {
    results.textContent = "Tie, you both chose " + player + ".";
    return;
  } else {
    win = calculateWinner(player, comp);
  }

  if (win) {
    results.textContent = "You win, " + player + " beats " + comp + "!";
  } else {
    results.textContent = "You lose, " + comp + " beats " + player + ".";
  }

  updateScore(win);
}

function gameOver() {
  return wins.textContent === "5" || losses.textContent === "5";
}

function playGame(e) {
  let comp = computerPlay();
  let player = e.target.id;
  playRound(player, comp);
  
  if (gameOver()) {
    if (wins.textContent === "5") {
      results.textContent = "You won!";
    } else {
      results.textContent = "You lost!";
    }

    waitForRestart();
  }
}

function waitForRestart() {
  buttons.forEach(button => {
    button.style.display = "none";
  });
  
  let restart = document.createElement("button");
  restart.textContent = "Play again";
  buttonContainer.appendChild(restart);

  restart.addEventListener('click', () => {
    restart.style.display = "none";
    buttons.forEach(button => {
      button.style.display = "inline-block";
    });
    wins.textContent = "0";
    losses.textContent = "0";
    results.textContent = "";
  });
}

let buttonContainer = document.querySelector(".buttons");
let buttons = document.querySelectorAll("button");
let wins = document.querySelector("#wins");
let losses = document.querySelector("#losses");
let results = document.querySelector(".results > p");

buttons.forEach(button => {
  button.addEventListener('click', playGame);
});