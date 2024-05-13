let playerScore = 0;
let computerScore = 0;

// function to generate compter choice
const getComputerChoice = () => {
    let array = ['rock', 'paper', 'scissor'];
    return array[Math.floor(Math.random() * array.length)];
};

//function to determine winner
function playRound(playerSelection,computerSelection){
    
    if(playerSelection === computerSelection){
        return 'It\'s a tie!';
    }else if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')){
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else{
        computerScore++;
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}
//function to display score and check winner
function displayScoreAndCheckWinner(result){
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = result+
    '<br>player: ' + playerScore + ' computer: ' + computerScore;
    if(playerScore==5){
        resultDiv.innerText = 'Hurray!! you won the game!';
        playerScore = 0;
        computerScore = 0;
    }else if(computerScore==5){
        resultDiv.innerText = 'Computer wins the game!';
        playerScore = 0;
        computerScore = 0;
    }
}

//function to handle button click

function handleButtonClick(playerSelection){

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    clearInterval(a);
    displayScoreAndCheckWinner(result);
    a = setInterval(function() {
        const image = document.getElementById('image');
        var filename = [
                'Rock.png',
                'paper.png',
                'scissor.png'
        
        ]
        if(randomIndex>2){
            randomIndex=0;
        }
        image.src = filename[randomIndex];
        randomIndex++;
    },300);

}

var randomIndex = 0;
let a = setInterval(function() {

    const image = document.getElementById('image');

    var filename = [
            'Rock.png',
            'paper.png',
            'scissor.png'
    
    ]

    if(randomIndex>2){
        randomIndex=0;
    }


    image.src = filename[randomIndex];
    randomIndex++;
}, 300);

const buttons = document.querySelectorAll('button');