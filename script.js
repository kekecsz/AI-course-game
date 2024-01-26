document.addEventListener('DOMContentLoaded', function () {
    let playerScore = 0;
    let computerScore = 0;

    const choices = ['rock', 'paper', 'scissors'];

    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'Computer wins!';
        }
    }

    function updateScore() {
        document.getElementById('player-score').innerText = `Player: ${playerScore}`;
        document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
    }

    function playGame(playerChoice) {
        // Remove the 'selected' class from all buttons
        document.querySelectorAll('.choices button').forEach(button => {
            button.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked button
        document.getElementById(playerChoice).classList.add('selected');

        const computer = computerChoice();
        const result = determineWinner(playerChoice, computer);

        // Display computer's choice image and text in the right panel
        const computerChoiceImg = document.getElementById('computer-choice-img');
        computerChoiceImg.innerHTML = `<img src="${computer}.png" alt="${computer}">`;
        document.getElementById('computer-choice').innerText = `Computer chose ${computer}.`;
        document.getElementById('result').innerText = result;

        updateScore(); // Update the score display
    }

    document.getElementById('rock').addEventListener('click', function () {
        playGame('rock');
    });

    document.getElementById('paper').addEventListener('click', function () {
        playGame('paper');
    });

    document.getElementById('scissors').addEventListener('click', function () {
        playGame('scissors');
    });
});