import { useContext } from "react"
import { context } from "../context/context"
import { TEXT } from "../__text";

export const usePlayerState = () => {
  const { 
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol
  } = useContext(context);

  const switchPlayer = () => {
    setIsPlayer1Turn(prevState => !prevState);
    setPlayerSymbol(prevState => prevState === TEXT.player1Symbol ? TEXT.player2Symbol : TEXT.player1Symbol);
  };

  return { 
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol,
    switchPlayer
   };
}