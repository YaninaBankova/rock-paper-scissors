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

function playRound(humanChoice, computerChoice){
    const message = document.querySelector("#message");

    const score = document.querySelector("#score");
    let lastScore = score.textContent.split(" ");
    let humanScore = lastScore.length === 1 ? 0 : +lastScore[1];
    let computerScore = lastScore.length === 1 ? 0 : +lastScore[4];

    humanChoice = humanChoice.toLowerCase();
    computerChoice = legend[computerChoice];
    let humanWin = compare(humanChoice, computerChoice);
    switch(humanWin) {
        case 0:
            message.textContent = `Draw! We both chose ${humanChoice}.`;
            break;
        case 1:
            message.textContent = `You win! ${humanChoice[0].toUpperCase() + 
                humanChoice.slice(1)} beats ${computerChoice}.`;
            humanScore++;
            break;
        case -1:
            message.textContent = `You lose! ${computerChoice[0].toUpperCase() + 
                computerChoice.slice(1)} beats ${humanChoice}.`;
            computerScore++;
            break;
    }
    score.textContent = `Human ${humanScore} - Computer ${computerScore}`;
}

const btns = document.querySelector("#choiceBtns");
btns.addEventListener("click", (event) => {
    if(event.target.nodeName === "BUTTON"){
        playRound(event.target.innerText, getComputerChoice());
    }
});