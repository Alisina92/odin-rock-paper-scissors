//Step1: following function gets computer choice rock paper scissors randomly.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber <= 0 && randomNumber < 1) {
    return "rock";
  } else if (randomNumber <= 1 && randomNumber < 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

//Step2: following function prompt user to enters an option and retuns that option.
const getHumanChoice = () => {
  const humanchoice = prompt("Enter your choice: ");
  return humanchoice;
};

//Step3: following function will make the user choice incase-sensitive and plays rock paper scissors for 1 round stating the Winner or Loser
const playRound = (humanChoice, computerChoice) => {
  const lowerCaseHumanChoice = humanChoice.toLowerCase();
  const upperComp = computerChoice[0].toUpperCase() + computerChoice.slice(1);
  const upperHuman = humanChoice[0].toUpperCase() + humanChoice.slice(1);

  if (
    (lowerCaseHumanChoice === "rock" && computerChoice === "paper") ||
    (lowerCaseHumanChoice === "paper" && computerChoice === "scissors") ||
    (lowerCaseHumanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose! ${upperComp} beats ${upperHuman}`);
  } else {
    console.log(`You win! ${upperHuman} beats ${upperComp}`);
  }
};

//Step4: The playGame function will call getHumanChoice && getComputerChoice function and keeps track human and computer score based on game condition. Also calls the playRound function.
let humanScore = 0;
let computerScore = 0;

const playGame = () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
  } else {
    humanScore++;
  }

  playRound(humanSelection, computerSelection);
  console.log(`Human Score: ${humanScore}`, `Computer Score: ${computerScore}`);
};

//Step 5: calls playGame function 5x so we can play 5 rounds using a for loop.
for (let i = 0; i < 5; i++) {
  playGame();
}

//step 6: at the end declares a final winner based on the scores at end of 5 rounds.
if (humanScore > computerScore) {
  console.log("You Win! the Game");
} else {
  console.log("You Lose! the Game");
}
