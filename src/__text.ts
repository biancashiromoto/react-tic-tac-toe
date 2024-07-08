interface TextInterface {
  title: string;
  player1: string;
  player1Symbol: string;
  player2: string;
  player2Symbol: string;
  restartButton: string;
  gameOverMessage: {
    wins: string,
    tie: string
  }
}

export const TEXT: TextInterface = {
  title: "tic-tac-toe",
  player1: "Player 1",
  player1Symbol: "O",
  player2: "Player 2",
  player2Symbol: "X",
  restartButton: "Restart",
  gameOverMessage: {
    wins: "wins!",
    tie: "Tie!"
  }
}