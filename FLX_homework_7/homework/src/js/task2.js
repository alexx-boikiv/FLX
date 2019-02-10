// GAME VARS
let playGame = confirm('Do you want to play a game?'),
  resetGame = false,
  numRange = 5,
  prizeTotal = 0,
  prizeAttempt1 = 10,
  prizeAttempt2 = 5,
  prizeAttempt3 = 2;

// GAME START
while(playGame || resetGame){

  // RESETTING VARS IF NEW GAME
  if(resetGame){
    resetGame = false;
    numRange = 5;
    prizeTotal = 0;
    prizeAttempt1 = 10;
    prizeAttempt2 = 5;
    prizeAttempt3 = 2;
  }

  // GAME ENGINE
  let winningNum = Math.floor(Math.random() * numRange + 1);
  winningNum = winningNum.toString();

  let i = 1;
  while(i <= 3){
    let guessNum = prompt(`Enter a number from 0 to ${numRange}
Attempts left: ${4-i}
Total prize: ${prizeTotal}
Possible prize on current attempt: ${prizeAttempt1}`);

    if(guessNum === null){
        i = 0;
        playGame = false;
        break;
    }

    if(guessNum === winningNum){
      break;
    }else{
      i++;
    }
  }

  // OUTCOMES
  if(i === 1){
    prizeTotal += prizeAttempt1;
    playGame = confirm(`Congratulation! Your prize is: ${prizeAttempt1} Do you want to continue?`);
  }

  if(i === 2){
    prizeTotal += prizeAttempt2;
    playGame = confirm(`Congratulation! Your prize is: ${prizeAttempt2} Do you want to continue?`);
  }

  if(i === 3){
    prizeTotal += prizeAttempt3;
    playGame = confirm(`Congratulation! Your prize is: ${prizeAttempt3} Do you want to continue?`);
  }

  if(i > 3){
    playGame = false;
  }

  // CONTINUATION OPTIONS
  if(resetGame){
    continue;
  }

  if(!playGame){
    alert(`Thank you for a game. Your prize is: ${prizeTotal}`);
    resetGame = confirm('Do you want to play again?');
    if(!resetGame){
      break;
    }
  }

  if(playGame){
    prizeAttempt1 *= 3;
    prizeAttempt2 *= 3;
    prizeAttempt3 *= 3;
    numRange *= 2;
  }
}

alert('You did not become a millionaire, but can.');
