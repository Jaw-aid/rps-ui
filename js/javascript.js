let options = ["rock", "paper", "scissors"];
let playerWinMsg = "You win this round!";
let computerWinMsg = "Computer wins this round.";
let tieMsg = "Tie! Try again.";


// computerPlay() will select a random value from the options array
function computerPlay() {
    return options[Math.floor(Math.random(options) * options.length)]
}

// the playRound(playerSelection, computerSelection) determines the winner of the game 
function playRound(playerSelection, computerSelection) {
    let playerSelection_lowercase = playerSelection.toLowerCase();
    console.log("The computer picked: " + computerSelection)
    console.log("You picked: " + playerSelection)
    
    // if the user enters an invalid input, it will ask the user to submit their input again
    if (playerSelection_lowercase !== "rock" && playerSelection_lowercase !== "paper" && playerSelection_lowercase !== "scissors") {
        console.log("Redo round.")
        alert("Pick rock, paper, or scissors -- try again.");
        let playerSelection = prompt("Rock, paper, or scissors?")
        let computerSelection = computerPlay()
        return playRound(playerSelection, computerSelection);
    }

    if (playerSelection_lowercase == computerSelection) {
        return tieMsg;
    } else if (playerSelection_lowercase == "rock" && computerSelection == "scissors"){
        return playerWinMsg;
    } else if (playerSelection_lowercase == "scissors" && computerSelection == "paper"){
        return playerWinMsg;
    } else if (playerSelection_lowercase == "paper" && computerSelection == "rock"){
        return playerWinMsg;
    } else if (playerSelection_lowercase == "paper" && computerSelection == "rock"){
        return computerWinMsg;
    } else if (playerSelection_lowercase == "paper" && computerSelection == "scissors"){
        return computerWinMsg;
    } else if (playerSelection_lowercase == "rock" && computerSelection == "paper"){
        return computerWinMsg;
    } else if (playerSelection_lowercase == "scissors" && computerSelection == "rock"){
        return computerWinMsg;
    }
}

// this function starts the game and keeps track of the score
function game() {
    let computerScore = 0;
    let playerScore = 0; 
    for (let i = 0; i < 3; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = computerPlay();
        let winnerMessage = playRound(playerSelection, computerSelection);
        console.log(winnerMessage);
        if (winnerMessage == computerWinMsg) {
            computerScore++;
        } else if (winnerMessage == playerWinMsg) {
            playerScore++;
        } 
    }
    if (computerScore > playerScore) {
        console.log("Computer wins the series.")
    } else if (computerScore < playerScore) {
        console.log("You win the series!")
    } else if (computerScore == playerScore) {
        console.log("The series is a tie!")
    }
}