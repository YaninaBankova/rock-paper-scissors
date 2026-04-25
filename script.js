//0: rock, 1: paper, 2: scissors
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function getHumanChoice(){
    const choice = prompt("What's your choice?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case "rock":
            if(computerChoice === 1){
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else if(computerChoice === 2){
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
            break;
        case "paper":
            if(computerChoice === 2){
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            } else if(computerChoice === 0){
                console.log("You win! Paper beats rock.");
                humanScore++;
            }
            break;
        case "scissors":
            if(computerChoice === 0){
                console.log("You lose!  Rock beats scissors.");
                computerScore++;
            } else if(computerChoice === 1){
                console.log("You win! Scissors beats paper.");
                humanScore++;
            }
            break;
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(`Human ${humanScore} - computer ${computerScore}`);