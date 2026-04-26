//0: rock, 1: paper, 2: scissors
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function getHumanChoice(){
    const choice = prompt("What's your choice?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let humanWin = 0;
    switch(humanChoice) {
        case "rock":
            if(computerChoice === 1){
                console.log("You lose! Paper beats rock.");
                humanWin = -1;
            } else if(computerChoice === 2){
                console.log("You win! Rock beats scissors.");
                humanWin = 1;
            }
            break;
        case "paper":
            if(computerChoice === 2){
                console.log("You lose! Scissors beats paper.");
                humanWin = -1;
            } else if(computerChoice === 0){
                console.log("You win! Paper beats rock.");
                humanWin = 1;
            }
            break;
        case "scissors":
            if(computerChoice === 0){
                console.log("You lose!  Rock beats scissors.");
                humanWin = -1;
            } else if(computerChoice === 1){
                console.log("You win! Scissors beats paper.");
                humanWin = 1;
            }
            break;
    }
    if(humanWin === 0){
        console.log(`Draw! We both chose ${humanChoice}.`);
    }
    return humanWin;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let score = playRound(getHumanChoice(), getComputerChoice());
        if(score === 1){
            humanScore += 1;
        } else if(score == -1){
            computerScore += 1;
        }
        console.log(`Human ${humanScore} - computer ${computerScore}`);
    } 
}

playGame();