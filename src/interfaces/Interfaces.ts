export interface SquarePropsInterface {
  index: number;
  playerSymbol: string;
  checkMove: (grids: string[]) => void;
}

export interface BoardPropsInterface {
  playerSymbol: string;
  checkMove: (grids: string[]) => void;
  isPlayer1Turn: boolean;
}

export interface ButtonPropsInterface {
  buttonValue: string;
  restartGame: () => void;
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