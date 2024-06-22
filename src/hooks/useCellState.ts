import { useContext, useEffect, useState } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";
import { useGameState } from "./useGameState";
import { Utils } from "../utils/utils";
import clickSound from "../assets/sounds/click.mp3";

const { _winningOptions, playSound } = new Utils();
export const useCellState = () => {
  const { 
    cells,
    setCells,
    isGameOver
  } = useContext(context);
  const { playerSymbol, switchPlayer, isPlayer1Turn } = usePlayerState();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const {
    setIsTie,
    setIsGameOver,
    setGameOverMessage,
    checkForTie,
  } = useGameState();
  
  const updateCells = (index: number) => {
    cells[index] = playerSymbol;
    setCells(prevCells => {
      const newCells = [...prevCells];
      newCells[index] = playerSymbol;
      return newCells;
    });
  }

  useEffect(() => {
    if (isGameOver || cells.every(cell => cell === "")) {
      setIsDisabled(false);
    }
  }, [isGameOver, cells]);

  const checkMove = (cells: string[]) => {
    checkForTie();
  
    for (let index = 0; index < _winningOptions.length; index += 1) {
      const [x, y, z] = _winningOptions[index];
      if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
        setIsGameOver(true),
        setIsTie(false),
        setGameOverMessage(isPlayer1Turn ? 'Player 1 wins!' : 'Player 2 wins!')
      }
    }
    switchPlayer();
  };

  const handleClick = (index: number) => {
    if (isDisabled || cells[index]) return;
    updateCells(index);
    checkMove(cells);
    setIsDisabled(true);
    playSound(clickSound);
  };
  
  return { cells, setCells, updateCells, isDisabled, setIsDisabled, checkMove, handleClick };
}