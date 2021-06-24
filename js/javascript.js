/* pseudo code

User enters in rock, paper, scissors, or other 
If other then say please pick r, p, s
If valid response, the computer will generate r, p, s
Program will show to the user that the computer picked r, p, s 
If match, show tie, try again 
Depending on rules of the game, the winner will be announced 

*/
let options = ["rock", "paper", "scissors"]
let playerSelection = "rock"
let computerSelection = computerPlay()

console.log("The computer picked: " + computerSelection)
console.log("You picked: " + playerSelection)

function computerPlay() {
    return options[Math.floor(Math.random(options) * options.length)]
}

function playRound(playerSelection, computerSelection) {
    let playerSelection_lowercase = playerSelection.toLowerCase();
    
    if (playerSelection_lowercase == computerSelection) {
        return "Tie! Try again.";
    } else if (playerSelection_lowercase == "rock" && computerSelection == "scissors"){
        return "You win!";
    } else if (playerSelection_lowercase == "scissors" && computerSelection == "paper"){
        return "You win!";
    } else if (playerSelection_lowercase == "paper" && computerSelection == "rock"){
        return "You win!";
    } else if (playerSelection_lowercase == "paper" && computerSelection == "rock"){
        return "Computer wins.";
    } else if (playerSelection_lowercase == "paper" && computerSelection == "scissors"){
        return "Computer wins.";
    } else if (playerSelection_lowercase == "rock" && computerSelection == "paper"){
        return "Computer wins.";
    } else if (playerSelection_lowercase == "scissors" && computerSelection == "rock"){
        return "Computer wins."
    }
}

console.log(playRound(playerSelection, computerSelection))