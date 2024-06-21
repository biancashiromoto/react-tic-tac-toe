import { useContext } from "react"
import { context } from "../context/context"
import { Utils } from "../utils/utils";

export const usePlayerState = () => {
  const {
    _player1Symbol,
    _player2Symbol,
  } = new Utils();

  const { 
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol
  } = useContext(context);

  const switchPlayer = () => {
    setIsPlayer1Turn(prevState => !prevState);
    setPlayerSymbol(prevState => prevState === _player1Symbol ? _player2Symbol : _player1Symbol);
  };

  return { 
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol,
    switchPlayer
   };
}