let array = ['rock', 'paper', 'scissor'];

const getComputerChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 'It\'s a tie!';
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose! Paper beats Rock';
    }else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        return 'You win! Rock beats Scissor';
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats Rock';
    }else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        return 'You lose! Scissor beats Paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        return 'You lose! Rock beats Scissor';
    }else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        return 'You win! Scissor beats Paper';
    }else {
        return 'Invalid input';
    }
}

const playerSelection = 'scissor';
const computerSelection = getComputerChoice(array);
console.log(playRound(playerSelection, computerSelection));

const playGame = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Enter your choice: rock, paper or scissor');
        const computerSelection = getComputerChoice(array);
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();