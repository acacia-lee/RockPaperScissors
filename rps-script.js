function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultText = `You chose ${userChoice}. Computer chose ${computerChoice}. `;

    if (userChoice === computerChoice) {
        resultText += "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText += "You win!";
    } else {
        resultText += "You lose!";
    }

    document.getElementById('result-text').textContent = resultText;
}