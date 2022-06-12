const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const btnReset = document.querySelector('.btnReset')
const displayResults__list = document.querySelector('.displayResults__list');
const displayScore__playerScore = document.querySelector('.displayScore__playerScore');
const displayScore__computerScore = document.querySelector('.displayScore__computerScore');
let playerScoreCount = 0;
let computerScoreCount = 0;

const toggleBtns = () => {
    btnRock.disabled = !btnRock.disabled;
    btnPaper.disabled = !btnPaper.disabled
    btnScissors.disabled = !btnScissors.disabled
}



const getComputerSelection = () => {
    const randNum3 = Math.floor(Math.random()*3+1);
    console.log(randNum3);
    if(randNum3 === 1){
        return 'rock';
    } else if (randNum3 === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}

const tie = () => {     
    const displayResults__item = document.createElement('li');  
    displayResults__item.innerText = `It's a tie! Nobody wins :/`;
    displayResults__list.append(displayResults__item);
}
const win = (playerSelection, computerSelection) => {
    const displayResults__item = document.createElement('li'); 
    displayResults__item.innerText = `You Win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    displayResults__list.append(displayResults__item);
}
const lose = (playerSelection, computerSelection) => {
    const displayResults__item = document.createElement('li'); 
    displayResults__item.innerText = `You lose :(. ${capitalize(computerSelection)} beats ${playerSelection}.`;
    displayResults__list.append(displayResults__item);
}

const incrementPlayerScore = () => {
    playerScoreCount++;
    displayScore__playerScore.innerText = playerScoreCount;
}

const incrementComputerScore = () => {
    computerScoreCount++;
    displayScore__computerScore.innerText = computerScoreCount;
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === 'rock'){
        if(computerSelection === playerSelection){
            tie();
        } else if(computerSelection === 'paper'){
            lose(playerSelection, computerSelection);
            incrementComputerScore();
        } else {
            win(playerSelection, computerSelection)
            incrementPlayerScore();
        }
    }

    if(playerSelection === 'paper'){
        if(computerSelection === playerSelection){
            tie();
        } else if(computerSelection === 'scissors'){
            lose(playerSelection, computerSelection);
            incrementComputerScore();
        } else {
            win(playerSelection, computerSelection)
            incrementPlayerScore();
        }
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === playerSelection){
            tie();
        } else if(computerSelection === 'rock'){
            lose(playerSelection, computerSelection);
            incrementComputerScore();
        } else {
            win(playerSelection, computerSelection)
            incrementPlayerScore();
        }
    }

    if(playerScoreCount === 5){
        const displayResults__item = document.createElement('li');
        displayResults__item.innerHTML = '<b>Congratulations, you win! Press reset to play again</b>';
        displayResults__list.append(displayResults__item); 
        toggleBtns();
    }
}

btnRock.addEventListener('click', () => {
    playRound('rock', getComputerSelection())
})
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerSelection())
})
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerSelection())
})
btnReset.addEventListener('click', () => {
    playerScoreCount = 0;
    computerScoreCount = 0;
    displayScore__computerScore.innerText = 0;
    displayScore__playerScore.innerText = 0;
    while(displayResults__list.firstChild){
        displayResults__list.removeChild(displayResults__list.firstChild)
    }
    if(btnRock.disabled === true){
        toggleBtns()
    }
})

