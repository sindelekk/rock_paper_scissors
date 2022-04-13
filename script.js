let pScore = 0;
let cScore = 0;
let rounds = 5;

game();

function game() {
    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        computerSelection = computerPlay();
        playRound("rock", computerSelection);
    })

    let paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        computerSelection = computerPlay();
        playRound("paper", computerSelection);
    })

    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        computerSelection = computerPlay();
        playRound("scissors", computerSelection);
    })
}

function computerPlay() {
    const comp = Math.floor(Math.random() * 3);
    if (comp === 0)
        return "rock";
    else if (comp === 1)
        return "paper";
    else
        return "scissors";
}
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection)
        document.getElementById("game").innerHTML = "It`s a Tie!";

    else if (playerSelection === "rock") 
    {
        if (computerSelection === "scissors") 
        {
            document.getElementById("game").innerHTML = 
            `You Win! ${playerSelection} beats ${computerSelection}`;
            pScore++;
        }
        else 
        {
            document.getElementById("game").innerHTML =
            `You Lose! ${computerSelection} beats ${playerSelection}`;
            cScore++;
        }
    }
    
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
        {
            document.getElementById("game").innerHTML = 
            `You Win! ${playerSelection} beats ${computerSelection}`;
            pScore++;
        }
        else
        {
            document.getElementById("game").innerHTML =
            `You Lose! ${computerSelection} beats ${playerSelection}`;
            cScore++;
        }
    }
        
    else
    {
        if (computerSelection === "paper")
        {
            document.getElementById("game").innerHTML = 
            `You Win! ${playerSelection} beats ${computerSelection}`;
            pScore++;
        }
        else
        {
            document.getElementById("game").innerHTML =
            `You Lose! ${computerSelection} beats ${playerSelection}`;
            cScore++;
        }
    }

    document.getElementById("results").innerHTML = `Player score: ${pScore} : Computer score: ${cScore}`;

    winner();

}
document.getElementById("results").innerHTML = `Player score: ${pScore} : Computer score: ${cScore}`;

function winner() {
    if (pScore === rounds) {
        document.getElementById("match").innerHTML = "Victory! \nPlay again?";
        resetVariables();
        disableBtn();   
    }
    else if (cScore === rounds) {
        document.getElementById("match").innerHTML = "Defeat! \nPlay again?";
        resetVariables();
        disableBtn();   
    }
    else
        document.getElementById("match").innerHTML = "";
}
function resetVariables() {
    let button = document.getElementById("again");
    button.addEventListener("click", newGame);
    
}
function newGame() {
    pScore = 0;
    cScore = 0;
    window.location.reload();
}
function disableBtn() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}