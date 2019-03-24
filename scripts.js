function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function listen() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      return button.id;
    });
  });
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

function playRound(e) {
  let comp = computerPlay();
  let player = e.target.id;
  let win = false;

  if (comp === player) {
    console.log("Tie, you both chose " + player + ".");
    results.textContent = "Tie, you both chose " + player + ".";
    return;
  } else {
    win = calculateWinner(player, comp);
  }

  if (win) {
    console.log("You win, " + player + " beats " + comp + "!");
    results.textContent = "You win, " + player + " beats " + comp + "!";
  } else {
    console.log("You lose, " + comp + " beats " + player + ".");
    results.textContent = "You lose, " + comp + " beats " + player + ".";
  }

  updateScore(win);
}

let buttons = document.querySelectorAll("button");
let wins = document.querySelector("#wins");
let losses = document.querySelector("#losses");
let results = document.querySelector(".results > p");

buttons.forEach(button => {
  button.addEventListener('click', playRound);
});