let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanChoiceLowerCase = '';
  let computerChoiceLowerCase = '';

  if (typeof humanChoice == 'string') {
    humanChoiceLowerCase = humanChoice.toLowerCase();
  }
  if (typeof computerChoice == 'string') {
    computerChoiceLowerCase = computerChoice.toLowerCase();
  }

  if (humanChoiceLowerCase == 'rock') {
    switch (computerChoiceLowerCase) {
      case 'scissors':
        console.log('You win! Rock beats Scissors');
        humanScore++;
        break;
      case 'paper':
        console.log('You lose! Paper beats Rock');
        computerScore++;
        break;
      case 'rock':
        console.log('Tie! Rock against Rock');
        break;
    }
  } else if (humanChoiceLowerCase == 'paper') {
    switch (computerChoiceLowerCase) {
      case 'rock':
        console.log('You win! Paper beats Rock');
        humanScore++;
        break;
      case 'scissors':
        console.log('You lose! Scissors beats Paper');
        computerScore++;
        break;
      case 'paper':
        console.log('Tie! Paper against Paper');
        break;
    }
  } else if (humanChoiceLowerCase == 'scissors') {
    switch (computerChoiceLowerCase) {
      case 'paper':
        console.log('You win! Scissors beats Paper');
        humanScore++;
        break;
      case 'rock':
        console.log('You lose! Rock beats Scissors');
        computerScore++;
        break;
      case 'scissors':
        console.log('Tie! Scissors against Scissors');
        break;
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

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    // console.log(
    //   `Input human: ${humanSelection} computer: ${computerSelection}`
    // );
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final score human: ${humanScore} computer: ${computerScore}`);
}

playGame();
