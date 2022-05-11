// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    let p1Win = 'Player 1 won!'
    let p2Win = 'Player 2 won!'
    if (p1 === p2){
      return 'Draw!'
    }
    else if (p1 === 'scissors'){
      if (p2 === 'paper'){
        return p1Win
       }
      else {
        return p2Win
       }
    }
    else if (p1 === 'rock') {
      if (p2 === 'paper'){
        return p2Win
       }
      else {
        return p1Win
       }
    }
    else {
      if (p2 === 'scissors'){
        return p2Win
       }
      else {
        return p1Win
       }
    }
  };