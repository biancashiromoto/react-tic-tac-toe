export interface CellPropsInterface {
  index: number;
}

export interface ContextProps {
  cells: string[];
  setCells: React.Dispatch<React.SetStateAction<string[]>>;
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
  isMuted: boolean,
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ColorsInterface {
  background: string;
  hover: string;
  restartButton: {
    enabled: string;
    disabled: string;
  };
  gameOverMessageContainer: {
    player1: string,
    player2: string,
    tie: string,
  }
}

export interface TestIdsInterface {
  board: string,
  buttons: {
    toggleMute: string,
    restartGame: string,
  },
  cell: string,
  messageContainer: string,
  playerDisplay: string
}

export interface TextInterface {
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