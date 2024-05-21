export interface GameStateInterface {
  grids: string[];
  isPlayer1Turn: boolean;
  playerSymbol: string;
  isGameOver: boolean;
  gameOverMessage: string;
  disabled: boolean;
  isTie: boolean;
}

export interface SquarePropsInterface {
  index: number;
  grids: string[];
  playerSymbol: string;
  checkMove: (grids: string[]) => void;
}