export interface SquarePropsInterface {
  index: number;
  checkMove: (grids: string[]) => void;
}

export interface BoardPropsInterface {
  checkMove: (grids: string[]) => void;
}

export interface ButtonPropsInterface {
  buttonValue: string;
  restartGame: () => void;
}

export interface MessageContainerPropsInterface {
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