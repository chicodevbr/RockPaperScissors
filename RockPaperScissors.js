const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === 'bomb'){
    return userInput
  } else {
    console.log('Error! Choice: rock, paper or scissors');
  }  
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
  case 0:
    return 'rock';
  case 1: 
    return 'paper';
  case 2:
    return 'scissors';
      }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "The game is a tie!"
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The Computer Won, bastard!'
    } else {
      return 'You Win!'
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      return 'You Win!'
    } else {
      return 'The Computer Won, bat!'
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'You lost, my friend'
    } else {
      return 'You Win!'
    }
  }
  if (userChoice === 'bomb'){
    return "boom!"
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();






 






