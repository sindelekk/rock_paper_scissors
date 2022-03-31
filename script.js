let pScore = 0;
let cScore = 0;


game();

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
        alert("It's a Tie!");

    else if (playerSelection === "rock") 
    {
        if (computerSelection === "scissors") 
        {
            alert(`You Win! ${playerSelection} beats ${computerSelection}`);
            pScore++;
        }
        else 
        {
            alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
            cScore++;
        }
    }
    
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
        {
            alert(`You Win! ${playerSelection} beats ${computerSelection}`);
            pScore++;
        }
        else
        {
            alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
            cScore++;
        }
    }
        
    else
    {
        if (computerSelection === "paper")
        {
            alert(`You Win! ${playerSelection} beats ${computerSelection}`);
            pScore++;
        }
        else
        {
            alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
            cScore++;
        }
    }
    alert(`Player score: ${pScore}, Computer score: ${cScore}`);
}    
function game() {
    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Your choice?").toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    alert(pScore > cScore ? "You Win!" : "You Lose!");

}   


