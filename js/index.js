//Rock Paper Scissor

const choices = ['rock','paper','scissor']
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')
const playerScoreDisplay = document.getElementById('playerScoreDisplay')
const computerScoreDisplay = document.getElementById('computerScoreDisplay')
// score 

let computerScore = 0
let playerScore = 0


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a draw!';

    }

    else{
        switch(playerChoice){
            case 'rock':
            result = (computerChoice === 'scissor') ? 'You wim' :'you loose'
            break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'You Win ' : 'you lose'
                break;
                case 'scissor':
                    result = (computerChoice === 'paper') ? 'You win' : 'You loose'
                    break;


        }

    }
    playerDisplay.textContent = `PLAYER:${playerChoice}`;
    computerChoice.textContent = `Computer:${computerChoice}`;
    resultDisplay .textContent = result;

    resultDisplay.classList.remove('greenText','redText')

    switch(result){
        case 'You WIN':
        resultDisplay.classList.add('greenText');
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        break;
        case 'You LOSE':
        resultDisplay.classList.add('redText');
        computerScore++
        computerDisplay.textContent = computerScore
        break;

    }
}