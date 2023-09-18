let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let moves = ['rock', 'paper' , 'scissors'];
    let computerChoice = moves[Math.floor(Math.random() * moves.length)];
    return computerChoice;    
}
 
function playRound() {
    const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        round++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "Tie!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        round++;
        computerScore++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You lose! Scissors beats paper"; 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        round++;
        playerScore++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You win! Paper beats rock"; 
    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        round++;
        computerScore++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You lose! Paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        round++;
        playerScore++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You win! Rock beats scissors";
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        round++;
        playerScore++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You win! Scissors beats paper";
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        round++;
        computerScore++;
        console.log("Round: ", round);
        console.log("Your Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You lose! Rock beats scissors";
    } 
}

function endGame() {
    if (round === 5 && playerScore > computerScore) {
        console.log("Game Over You Win");
    } else if (round === 5 && computerScore > playerScore) {
        console.log("Game Over You Lose");
    } else if (round === 5 && computerScore === playerScore) {
        console.log("It's a tie")
    }
}

function game() {
    console.log(playRound());
    if (round < 5) {
       game();
    } else {
        endGame();
    }
}

game();        