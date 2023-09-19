const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let randomChoice = Math.floor(Math.random()*3 + 1);

function getComputerChoice() {   
    if (randomChoice == 1){
        return rock;
    }
    else if (randomChoice == 2){
        return paper;
    }
    else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors";
    }  
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper";
    }
    
    else if (playerSelection == "rock" && computerSelection == "rock"){
        return "Draw!";
    }  
    else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Draw!";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw!";
    }

    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats rock";
    }  
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beat paper";
    }
    else {
        return "You lose! Rock beats scissors";
    }
}

function game(){
    let getPlayerChoice = prompt("Enter your move: Rock, Paper, Scissors");
    console.log(playRound(getPlayerChoice.toLowerCase(), getComputerChoice()));
}
for(let i=0; i<5; i++){
    game();
}
