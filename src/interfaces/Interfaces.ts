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
  isGameOver?: boolean;
}

export interface BoardPropsInterface {
  grids: string[];
  playerSymbol: string;
  checkMove: (grids: string[]) => void;
  isGameOver?: boolean;
  isPlayer1Turn: boolean;
}

export interface ButtonPropsInterface {
  buttonValue: string;
  grids: string[];
  restartGame: () => void;
  isGameOver?: boolean;
}

export interface MessageContainerPropsInterface {
  isPlayer1Turn: boolean;
  gameOverMessage: string;
  isTie: boolean;
}

export interface ContextProps {
  grids: string[];
  setGrids: React.Dispatch<React.SetStateAction<string[]>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  isPlayer1Turn: boolean;
  setIsPlayer1Turn: React.Dispatch<React.SetStateAction<boolean>>;
  playerSymbol: string;
  setPlayerSymbol: React.Dispatch<React.SetStateAction<string>>;
  gameOverMessage: string;
  setGameOverMessage: React.Dispatch<React.SetStateAction<string>>;
  isTie: boolean;
  setIsTie: React.Dispatch<React.SetStateAction<boolean>>;
}