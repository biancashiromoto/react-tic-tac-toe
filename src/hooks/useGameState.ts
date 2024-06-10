import { useContext } from "react"
import { context } from "../context/context"

export const useGameState = () => {
  const { 
    isGameOver,
    setIsGameOver,
    isTie,
    setIsTie,
  } = useContext(context);

  return {
    isGameOver,
    setIsGameOver,
    isTie,
    setIsTie,
  };
}