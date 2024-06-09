import { useContext } from "react"
import { context } from "../context/context"
import { Utils } from "../utils/utils";

const useGameState = () => {
  const {
    cells,
    setCells,
    isGameOver,
    setIsGameOver,
    gameOverMessage,
    setGameOverMessage,
    isTie,
    setIsTie,
    isPlayer1Turn
  } = useContext(context);

  const { _winningOptions } = new Utils();

  const resetGame = () => {
    setCells(new Array(9).fill(""));
    setIsGameOver(false);
    setGameOverMessage("");
    setIsTie(false);
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
        setGameOverMessage(isPlayer1Turn ? "Player 1 wins!" : "Player 2 wins!");
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
    gameOverMessage,
    setGameOverMessage,
    isTie
  };
}

export default useGameState;