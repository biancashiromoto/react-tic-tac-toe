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
  toggleMute: () => void;
}