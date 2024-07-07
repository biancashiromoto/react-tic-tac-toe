import { useContext } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";
import { Utils } from "../utils/utils";

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
  const { _player1Symbol } = new Utils();

  const resetGame = () => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(_player1Symbol),
    setCells(new Array(9).fill("")),
    setIsPlayer1Turn(true)
  }

  const checkForTie = () => {
    if (cells.every((cell) => cell !== "")) {
      setIsGameOver(true),
      setGameOverMessage("Tie!"),
      setIsTie(true);
    }
  }

  const addClassName = (isPlayer1Turn: boolean): string => {
    if (isTie) {
      return "bg-purple-500";
    }
    return `${isPlayer1Turn ? "bg-rose-500" : "bg-sky-700"}`;
  }

  const toggleMute = () => {
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