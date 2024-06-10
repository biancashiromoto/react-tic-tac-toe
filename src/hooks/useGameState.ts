import { useContext } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";
import { Utils } from "../utils/utils";
import { useCellState } from "./useCellState";

export const useGameState = () => {
  const { 
    isGameOver,
    setIsGameOver,
    isTie,
    setIsTie,
    gameOverMessage,
    setGameOverMessage,
    cells,
  } = useContext(context);
  const { setPlayerSymbol, setIsPlayer1Turn } = usePlayerState();
  const { setCells } = useCellState();
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

  return {
    isGameOver,
    setIsGameOver,
    isTie,
    setIsTie,
    gameOverMessage,
    setGameOverMessage,
    resetGame,
    checkForTie,
  };
}