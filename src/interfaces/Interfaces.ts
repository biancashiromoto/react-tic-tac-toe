export interface GameStateInterface {
  grids: string[];
  isPlayer1Turn: boolean;
  playerSymbol: string;
  isGameOver: boolean;
  gameOverMessage: string;
  disabled: boolean;
  isTie: boolean;
}