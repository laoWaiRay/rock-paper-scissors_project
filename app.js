const getPlayerSelection = () => {
    let playerSelection = 'a';
    while(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors' ){
        playerSelection = prompt('Please enter "rock", "paper" or "scissors"');
    }
    return playerSelection.toLowerCase();
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

const getNumRounds = () => {
    return parseInt(prompt('Please select a number of rounds'))
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const playRound = (playerSelection, computerSelection) => {

    const tie = () => {console.log('It\'s a tie!');}
    const win = (playerSelection, computerSelection) => {console.log('You win!' + `. ${capitalize(playerSelection)} beats ${computerSelection}.`);}
    const lose = (playerSelection, computerSelection) => {console.log('You lose :(' + `. ${capitalize(computerSelection)} beats ${playerSelection}.`);}

 

    if(playerSelection === 'rock'){
        if(computerSelection === playerSelection){
            tie()
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
            console.log('It\'s a tie!')
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
            console.log('It\'s a tie!')
            return('tie')
        } else if(computerSelection === 'rock'){
            lose(playerSelection, computerSelection)
            return('lose')
        } else {
            win(playerSelection, computerSelection)
        }
    }
}


game = (numRounds) => {
    let playerScore = 0;
    let computerScore = 0;
    let evenRounds = 0;

    for(let i=0; i<numRounds; i++){
        const result = playRound(getPlayerSelection(), getComputerSelection());
        if (result === 'tie'){
            evenRounds++;
        } else if(result ==='lose'){
            computerScore++;
        } else{
            playerScore++;
        }
    }
}

game(getNumRounds())

// playRound(getPlayerSelection(), getComputerSelection())