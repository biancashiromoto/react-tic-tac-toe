import { useContext } from "react"
import { context } from "../context/context"

export const usePlayerState = () => {
  const { 
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol
  } = useContext(context);

  return { 
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol,
   };
}