const btns = document.querySelectorAll('.btn')
const playerChoice = document.querySelector('#playerChoice');
const comChoice = document.querySelector('#comChoice');
const comScore = document.querySelector('#comScore');
const playerScore = document.querySelector('#playerScore');
const result = document.querySelector('#result');
const buttons = document.querySelector('.buttons');

let player;
let computer;
let userScore = 0;
let compScore = 0;

function getPlayerChoice() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            player = btns[i].textContent;
            getComputerChoice();
            playerChoice.textContent = `Player: ${player}`;
            comChoice.textContent = `Computer: ${computer}`;
            result.textContent = `Result: ${checkWinner()}`;
            getScore();
            endGame();
        });
    }
}

function getComputerChoice() {
    let moves = ['Rock', 'Paper' , 'Scissors'];
    computer = moves[Math.floor(Math.random() * moves.length)];
    return computer;    
}

function checkWinner() {
    if (player == computer) {
        return "Draw!";
    } else if (computer == 'Rock') {
        return (player == 'Paper') ? "You Win!" : "You Lose!";
    } else if (computer == 'Paper') {
        return (player == 'Scissors') ? "You Win!" : "You Lose!";
    } else if (computer == 'Scissors') {
        return (player == 'Rock') ? "You Win!" : "You Lose!";
    }
}

function getScore() {
    if (result.textContent == "Result: You Win!") {
        userScore++;
        document.querySelector('#userScore').innerHTML = userScore;   
    } else if (result.textContent == "Result: You Lose!") {
        compScore++;
        document.querySelector('#compScore').innerHTML = compScore;
    } else {
        return;
    }
}

function game() {
    getPlayerChoice();
    endGame();
}

function endGame() {
    if (userScore == 5 || compScore == 5) {
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.className="btn";
        buttons.appendChild(restartButton);
        restartButton.addEventListener('click', () => {
            window.location.reload();
        });
    }
}

game();