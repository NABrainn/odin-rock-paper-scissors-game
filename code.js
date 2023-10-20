const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let computerScore = 0;
let playerScore = 0;
function generateNumber() {
    return Math.floor(Math.random()*3 + 1);
}

function getComputerChoice() {   
    if (generateNumber() == 1){
        return rock;
    }
    else if (generateNumber() == 2){
        return paper;
    }
    else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock beats scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win! Paper beats rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return "You win! Scissors beat paper";
    } 
    
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Rock beats paper";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Paper beats scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    }
    else {
        return "Draw!";
    }
}


function announceWinner() {
    if(computerScore == 5 && playerScore < 5) {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("score").innerText = `Your score is: ${playerScore} || Computer score is: ${computerScore}`;
        randomChoice = Math.floor(Math.random()*3 + 1);
        generateNumber();
        return "And the winner of the match is: Computer!";
        
    } 
    else if(computerScore < 5 && playerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("score").innerText = `Your score is: ${playerScore} || Computer score is: ${computerScore}`;
        generateNumber();
        return "And the winner of the match is: Player!";
    } 
    else if(computerScore == 5 && playerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("score").innerText = `Your score is: ${playerScore} || Computer score is: ${computerScore}`;
        generateNumber();
        return "There is no winner - Draw.";
    } 
    else return "";
}


function game(){
    const rockBtn = document.getElementById("rock-btn");
    const paperBtn = document.getElementById("paper-btn");
    const scissorsBtn = document.getElementById("scissors-btn");

    rockBtn.value = "rock";
    paperBtn.value = "paper";
    scissorsBtn.value = "scissors";
    rockBtn.addEventListener('click', () => {
        const playRock = playRound(rockBtn.value, getComputerChoice());
        document.getElementById("results").innerText = playRock;
        document.getElementById("score").innerText = `Your score is: ${playerScore} || Computer score is: ${computerScore}`;
        document.getElementById("winner").innerText = announceWinner();
        
    })
        paperBtn.addEventListener('click', () => {
        const playPaper = playRound(paperBtn.value, getComputerChoice());
        document.getElementById("results").innerText = playPaper;
        document.getElementById("score").innerText = `Your score is: ${playerScore} || Computer score is: ${computerScore}`;
        document.getElementById("winner").innerText = announceWinner();
    })
        scissorsBtn.addEventListener('click', () => {
        const playScissors = playRound(scissorsBtn.value, getComputerChoice());
        document.getElementById("results").innerText = playScissors;
        document.getElementById("score").innerText = `Your score is: ${playerScore} || Computer score is: ${computerScore}`;
        document.getElementById("winner").innerText = announceWinner();
    })    
}
game();


