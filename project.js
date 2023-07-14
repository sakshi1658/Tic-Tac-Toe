// create an empty game board
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Player X starts the game
let currentPlayer = 'X';

// function to check if there is any winner
function checkWinner() {
  // check rows
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === currentPlayer &&
      board[row][1] === currentPlayer &&
      board[row][2] === currentPlayer
    ) {
      return true;
    }
  }

  // check columns
  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] === currentPlayer &&
      board[1][col] === currentPlayer &&
      board[2][col] === currentPlayer
    ) {
      return true;
    }
  }

  // check diagonals
  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) {
    return true;
  }

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) {
    return true;
  }

  return false;
}

// function to handle moves
function play(row, col) {
  // check if selected cell is empty
  if (board[row][col] === '') {
    // update the box
    board[row][col] = currentPlayer;

    // check if there is a winner
    if (checkWinner()) {
      console.log('Player ' + currentPlayer + ' wins!');
    } else {
      // switch to the next player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  } else {
    console.log('Invalid move. Please select an empty cell.');
  }
}

// Example Usage:
play(0, 0); // X
play(1, 1); // O
play(0, 1); // X
play(1, 0); // O
play(0, 2); // X (win)
