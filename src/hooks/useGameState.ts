import { useContext } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";
import { TEXT } from "../__text";
import { COLORS } from "../__variables";

export const useGameState = () => {
  const { 
    isGameOver,
    setIsGameOver,
    isTie,
    setIsTie,
    gameOverMessage,
    setGameOverMessage,
    cells,
    setCells,
    setIsMuted
  } = useContext(context);
  const { setPlayerSymbol, setIsPlayer1Turn } = usePlayerState();

  const resetGame = (): void => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(TEXT.player1Symbol),
    setCells(new Array(9).fill("")),
    setIsPlayer1Turn(true)
  }

  const checkForTie = (): void => {
    if (cells.every((cell) => cell !== "")) {
      setIsGameOver(true),
      setGameOverMessage(TEXT.gameOverMessage.tie),
      setIsTie(true);
    }
  }

  const addClassName = (isPlayer1Turn: boolean): string => {
    if (isTie) {
      return COLORS.gameOverMessageContainer.tie;
    }
    return `${isPlayer1Turn ? COLORS.gameOverMessageContainer.player2 : COLORS.gameOverMessageContainer.player1 }`;
  }

  const toggleMute = (): void => {
    setIsMuted(prevState => !prevState);
  }

  const hasGameStarted = (cells: string[]): boolean => {
    return !cells.every(cell => cell === "");
  }

  return {
    isGameOver,
    setIsGameOver,
    isTie,
    setIsTie,
    gameOverMessage,
    setGameOverMessage,
    resetGame,
    checkForTie,
    addClassName,
    toggleMute,
    hasGameStarted
  };
}