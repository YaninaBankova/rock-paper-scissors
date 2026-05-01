//0: rock, 1: paper, 2: scissors
const legend = ["rock", "paper", "scissors"];

function compare(choice1, choice2){
    if(choice1 === choice2){
        return 0;
    } else if((choice1 === "rock" && choice2 === "scissors") ||
                (choice1 === "paper" && choice2 === "rock") ||
                (choice1 === "scissors" && choice2 === "paper")){
        return 1;
    } else {
        return -1;
    }
}

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function getHumanChoice(){
    const choice = prompt("What's your choice?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = legend[computerChoice];
    let humanWin = compare(humanChoice, computerChoice);
    switch(humanWin) {
        case 0:
            console.log(`Draw! We both chose ${humanChoice}.`);
            break;
        case 1:
            console.log(`You win! ${humanChoice[0].toUpperCase() + 
                humanChoice.slice(1)} beats ${computerChoice}.`);
            break;
        case -1:
            console.log(`You lose! ${computerChoice[0].toUpperCase() + 
                computerChoice.slice(1)} beats ${humanChoice}.`);
            break;
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