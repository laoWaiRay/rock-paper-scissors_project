const getPlayerSelection = () => {
    let playerSelection = 'a';
    while(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors' ){
        playerSelection = prompt('Please enter "rock", "paper" or "scissors"');
    }
    return playerSelection;
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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const play = (playerSelection, computerSelection) => {

    const tie = () => {console.log('It\'s a tie!');}
    const win = (playerSelection, computerSelection) => {console.log('You win!' + `. ${capitalize(playerSelection)} beats ${computerSelection}.`);}
    const lose = (playerSelection, computerSelection) => {console.log('You lose :(' + `. ${capitalize(computerSelection)} beats ${playerSelection}.`);}

    if(playerSelection.toLowerCase() === 'rock'){
        if(computerSelection === playerSelection){
            tie()
        } else if(computerSelection === 'paper'){
            lose(playerSelection, computerSelection)
        } else {
            win(playerSelection, computerSelection)
        }
    }

    if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === playerSelection){
            console.log('It\'s a tie!')
        } else if(computerSelection === 'scissors'){
            lose(playerSelection, computerSelection)
        } else {
            win(playerSelection, computerSelection)
        }
    }

    if(playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection === playerSelection){
            console.log('It\'s a tie!')
        } else if(computerSelection === 'rock'){
            lose(playerSelection, computerSelection)
        } else {
            win(playerSelection, computerSelection)
        }
    }
}

play(getPlayerSelection(), getComputerSelection())