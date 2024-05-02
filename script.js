console.log('Hello world!');

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!

  let humanChoiceLowerCase = '';
  let computerChoiceLowerCase = computerChoice.toLowerCase();

  if (typeof humanChoice == 'string') {
    humanChoiceLowerCase = humanChoice.toLowerCase();
  }

  if (humanChoiceLowerCase == 'rock') {
    if (computerChoiceLowerCase == 'scissors') {
      console.log('You win! Rock beats Scissors');
      humanScore++;
    } else if (computerChoiceLowerCase == 'paper') {
      console.log('You lose! Paper beats Rock');
      computerScore++;
    } else if (computerChoiceLowerCase == 'rock') {
      console.log('Tie! Rock against Rock');
    }
  } else if (humanChoiceLowerCase == 'paper') {
    if (computerChoiceLowerCase == 'rock') {
      console.log('You win! Paper beats Rock');
      humanScore++;
    } else if (computerChoiceLowerCase == 'scissors') {
      console.log('You lose! Scissors beats Paper');
      computerScore++;
    } else if (computerChoiceLowerCase == 'paper') {
      console.log('Tie! Paper against Paper');
    }
  } else if (humanChoiceLowerCase == 'scissors') {
    if (computerChoiceLowerCase == 'paper') {
      console.log('You win! Scissors beats Paper');
      humanScore++;
    } else if (computerChoiceLowerCase == 'rock') {
      console.log('You lose! Rock beats Scissors');
      computerScore++;
    } else if (computerChoiceLowerCase == 'scissors') {
      console.log('Tie! Scissors against Scissors');
    }
  } else {
    console.log('Undecided outcome');
  }
}

function getHumanChoice() {
  let choice = prompt('Enter "Rock", "Paper", or "Scissors":');
  return choice;
}

function getComputerChoice() {
  let array = ['Rock', 'Paper', 'Scissors'];
  return array[Math.floor(Math.random() * 3)];
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
}

console.log(`Final score human: ${humanScore} computer: ${computerScore}`);
