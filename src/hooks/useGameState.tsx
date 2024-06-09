import { useContext } from "react"
import { context } from "../context/context"
import { Utils } from "../utils/utils";

const useGameState = () => {
  const {
    cells,
    setCells,
    isGameOver,
    setIsGameOver,
    setGameOverMessage,
    setIsTie,
    playerSymbol,
    setPlayerSymbol,
    setIsPlayer1Turn
  } = useContext(context);

  const {
    _winningOptions,
    _player1Symbol
  } = new Utils();

  const resetGame = () => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(_player1Symbol),
    setCells(new Array(9).fill("")),
    setIsPlayer1Turn(true);
  };

  const checkForTie = (updatedCells: string[]) => {
    if (updatedCells.every(cell => cell !== "")) {
      setIsGameOver(true);
      setGameOverMessage("Tie!");
      setIsTie(true);
    }
  };

  const checkForWin = (updatedCells: string[]) => {
    for (let index = 0; index < _winningOptions.length; index += 1) {
      const [x, y, z] = _winningOptions[index];
      if (updatedCells[x] && updatedCells[x] === updatedCells[y] && updatedCells[x] === updatedCells[z]) {
        setIsGameOver(true);
        setIsTie(false);
        setGameOverMessage(playerSymbol === "O" ? "Player 1 wins!" : "Player 2 wins!");
        return true;
      }
    }
    return false;
  };

  return {
    cells,
    isGameOver,
    resetGame,
    checkForTie,
    checkForWin,
    setCells,
    setIsGameOver,
    setGameOverMessage,
  };
}

export default useGameState;