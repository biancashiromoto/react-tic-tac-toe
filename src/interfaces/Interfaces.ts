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

export interface BoardPropsInterface {
  grids: string[];
  playerSymbol: string;
  checkMove: (grids: string[]) => void;
}

export interface ButtonPropsInterface {
  buttonValue: string;
  grids: string[];
  restartGame: () => void;
  isGameOver: boolean;
}

export interface PlayerDisplayPropsInterface {
  isPlayer1Turn: boolean;
}

export interface MessageContainerPropsInterface {
  isPlayer1Turn: boolean;
  gameOverMessage: string;
  isTie: boolean;
}