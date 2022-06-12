const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const displayResults__list = document.querySelector('.displayResults__list');


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

const getNumRounds = () => {
    return parseInt(prompt('Please select a number of rounds'))
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const playRound = (playerSelection, computerSelection) => {
    const displayResults__item = document.createElement('li');
    const tie = () => {   
        displayResults__item.innerText = `It's a tie! Nobody wins :/`;
        displayResults__list.append(displayResults__item);
    }
    const win = (playerSelection, computerSelection) => {
        displayResults__item.innerText = `You Win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
        displayResults__list.append(displayResults__item);
    }
    const lose = (playerSelection, computerSelection) => {
        displayResults__item.innerText = `You lose :(. ${capitalize(computerSelection)} beats ${playerSelection}.`;
        displayResults__list.append(displayResults__item);
    }

 

    if(playerSelection === 'rock'){
        if(computerSelection === playerSelection){
            tie();
            return('tie')
        } else if(computerSelection === 'paper'){
            lose(playerSelection, computerSelection)
            return('lose')
        } else {
            win(playerSelection, computerSelection)
        }
    }

    if(playerSelection === 'paper'){
        if(computerSelection === playerSelection){
            tie();
            return('tie')
        } else if(computerSelection === 'scissors'){
            lose(playerSelection, computerSelection)
            return('lose')
        } else {
            win(playerSelection, computerSelection)
        }
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === playerSelection){
            tie();
            return('tie')
        } else if(computerSelection === 'rock'){
            lose(playerSelection, computerSelection)
            return('lose')
        } else {
            win(playerSelection, computerSelection)
        }
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


// game = (numRounds) => {
//     let playerScore = 0;
//     let computerScore = 0;
//     let evenRounds = 0;

//     for(let i=0; i<numRounds; i++){
//         const result = playRound(getPlayerSelection(), getComputerSelection());
//         if (result === 'tie'){
//             evenRounds++;
//         } else if(result ==='lose'){
//             computerScore++;
//         } else{
//             playerScore++;
//         }
//     }
//     console.log('************ GAME OVER *************')
//     console.log(`You won ${playerScore} games. You lost ${computerScore} times. There were ${evenRounds} ties.`)
// }

// game(getNumRounds())
