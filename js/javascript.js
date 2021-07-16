const options = ['rock', 'paper', 'scissors'];
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const playerPick = document.getElementById('playerPick')
const computerPick = document.getElementById('computerPick')
const winnerMessage = document.getElementById('winnerMessage')
const tieText = document.getElementById('tieText')
const rockBtn = document.getElementById('#rock');
const paperBtn = document.getElementById('#paper');
const scissorsBtn = document.getElementById('#scissors');
const winnerThreshold = 3;


// computerPlay() will select a random value from the options array
function computerPlay() {
    return options[Math.floor(Math.random(options) * options.length)];
}

// the playRound(playerSelection, computerSelection) determines the winner of the game 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieText.innerHTML = `It's a tie! Keep playing!`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        updatePlayerScore();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        updatePlayerScore();
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        updatePlayerScore();
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        updateComputerScore();
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        updateComputerScore();
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        updateComputerScore();
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        updateComputerScore();
    }
}

function clearText() {
    playerPick.innerHTML = '';
    computerPick.innerHTML = '';
    tieText.innerHTML = '';
    winnerMessage.innerHTML = '';

    if (playerScore.textContent == winnerThreshold || computerScore.textContent == winnerThreshold) {
        playerScore.innerHTML = '0';
        computerScore.innerHTML = '0';
    }
}

function updatePicks(insertPlayerPick, insertComputerPick) {
    playerPick.insertAdjacentHTML('beforeend', ` ${insertPlayerPick}`);
    computerPick.insertAdjacentHTML('beforeend', ` ${insertComputerPick}`);
}

function updatePlayerScore() {
    let currentPlayerScoreNum = Number(playerScore.textContent);
    currentPlayerScoreNum += 1;
    playerScore.innerHTML = currentPlayerScoreNum;
    checkForWinner();
}

function updateComputerScore() {
    let currentComputerScoreNum = Number(computerScore.textContent);
    currentComputerScoreNum += 1
    computerScore.innerHTML = currentComputerScoreNum
    checkForWinner();
}

function checkForWinner() {
    if (playerScore.textContent == winnerThreshold) {
        winnerMessage.innerHTML = 'You win! Select a button to start next round.';
    }

    if (computerScore.textContent == winnerThreshold) {
        winnerMessage.innerHTML = 'Computer wins :( Select a button to start next round.';
    }
}

rockBtn.addEventListener('click', event => {
    clearText()
    let computerRandomPick = computerPlay()
    updatePicks('rock', computerRandomPick)
    playRound('rock', computerRandomPick)
});

paperBtn.addEventListener('click', event => {
    clearText()
    let computerRandomPick = computerPlay()
    updatePicks('paper', computerRandomPick)
    playRound('paper', computerRandomPick)
});

scissorsBtn.addEventListener('click', event => {
    clearText()
    let computerRandomPick = computerPlay()
    updatePicks('scissors', computerRandomPick)
    playRound('scissors', computerRandomPick)
});

/*
Areas for improvement:
1. Need to refactor the if then statements for playRound function 
2. Need to make the paper image the same size as the other images 
3. Remove innerHTML from code 
*/

// testing commit