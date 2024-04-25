const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  Ties: 0,
};
updateScoreElement();
/*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */

// RestScoreBtn
const RestScoreBtn = document.querySelector(".js-restScore-btn");
RestScoreBtn.addEventListener("click", () => {
  showResetConfirmation();
});
function showResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;

  // You could use onclick="..." in the HTML above,
  // but it's recommended to use .addEventListener()
  document
    .querySelector(".js-reset-confirm-yes")
    .addEventListener("click", () => {
      restScore();
      hideResetConfirmation();
    });

  document
    .querySelector(".js-reset-confirm-no")
    .addEventListener("click", () => {
      hideResetConfirmation();
    });
}

function restScore() {
  score.wins = 0;
  score.losses = 0;
  score.Ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}

function hideResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = "";
}

const autoPlayer = document.querySelector(".js-autoPlay-btn");

autoPlayer.addEventListener("click", () => {
  autoPlay();
});

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayer.innerHTML = "Stop Playing";
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayer.innerHTML = "Auto Play";
  }
}

const Rock = document
  .querySelector(".js-rock-btn")
  .addEventListener("click", () => {
    const playerMove = "Rock";
    playGame(playerMove);
  });
const Paper = document
  .querySelector(".js-paper-btn")
  .addEventListener("click", () => {
    const playerMove = "Paper";
    playGame(playerMove);
  });
const Scissors = document
  .querySelector(".js-scissors-btn")
  .addEventListener("click", () => {
    const playerMove = "Scissors";
    playGame(playerMove);
  });

const playWithKeybord = document.body.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    playGame("Rock");
  } else if (event.key === "p" || event.key === "P") {
    playGame("Paper");
  } else if (event.key === "t" || event.key === "T") {
    playGame("Scissors");
  } else if (event.key === "a" || event.key === A) {
    autoPlay();
  } else if (event.key === "Backspace") {
    restScore();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "You Win";
    }
  }
  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `The result is:  ${result} `;
  document.querySelector(
    ".js-Moves"
  ).innerHTML = `You Picked:  ${playerMove} computerPicked:  ${computerMove}`;

  document.querySelector(".js-Moves").innerHTML = `You
    <img src="/images/${playerMove}-emoji.png" class="move-icon" />

  <img src="/images/${computerMove}-emoji.png" class="move-icon" />
  Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}  ,  losses: ${score.losses}  ,  Ties: ${score.Ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
