let Score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  Ties: 0,
};

const playGame = (PlayMove) => {
  const ComputerMove = PickedComputerMove();

  let result = "";

  if (PlayMove === "Rock") {
    if (ComputerMove == "Rock") {
      result = "Tie";
    } else if (ComputerMove == "Paper") {
      result = "You Lose";
    } else if (ComputerMove == "Scissors") {
      result = "You Win";
    }
  } else if (PlayMove === "Scissors") {
    if (ComputerMove === "Rock") {
      result = "You Lose";
    } else if (ComputerMove === "Paper") {
      result = "You Win";
    } else if (ComputerMove === "Scissors") {
      result = "Tie";
    }
  } else if (PlayMove === "Paper") {
    if (ComputerMove === "Rock") {
      result = "You Win";
    } else if (ComputerMove === "Paper") {
      result = "Tie";
    } else if (ComputerMove === "Scissors") {
      result = "You Lose";
    }
  }
  if (result === "You Win") {
    Score.wins += 1;
  } else if (result === "You Lose") {
    Score.losses += 1;
  } else if (result === "Tie") {
    Score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(Score));
  UpdateScore();

  document.querySelector(".js-result").innerHTML = `The result is ${result}`;
  document.querySelector(
    ".js-Moves"
  ).innerHTML = `You Picked ${PlayMove}  ComputerMove ${ComputerMove}`;
};
function UpdateScore() {
  document.querySelector(".js-scores").innerHTML = `
   wins: ${Score.wins} , Losses: ${Score.losses} , Ties : ${Score.Ties}
  `;
}
const PickedComputerMove = () => {
  const ramdomNumber = Math.random();
  let ComputerMove = "";

  if (ramdomNumber >= 0 && ramdomNumber < 1 / 3) {
    ComputerMove = "Rock";
  } else if (ramdomNumber > 1 / 3 && ramdomNumber < 2 / 3) {
    ComputerMove = "Paper";
  } else if (ramdomNumber > 2 / 3 && ramdomNumber < 1) {
    ComputerMove = "Scissors";
  }
  return ComputerMove;
};
