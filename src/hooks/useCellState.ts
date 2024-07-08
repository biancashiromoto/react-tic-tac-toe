import { useContext, useEffect, useState } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";
import { useGameState } from "./useGameState";
import { Utils } from "../utils/utils";
import soundPath from "../assets/sounds/click.mp3";
import { TEXT } from "../__text";

const { _winningOptions, playSound } = new Utils();
export const useCellState = () => {
  const { 
    cells,
    setCells,
    isGameOver,
    isMuted,
    gameOverMessage
  } = useContext(context);
  const { playerSymbol, switchPlayer, isPlayer1Turn } = usePlayerState();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const {
    setIsTie,
    setIsGameOver,
    setGameOverMessage,
    checkForTie,
  } = useGameState();
  
  const updateCells = (index: number): void => {
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
        setGameOverMessage(`${isPlayer1Turn ? TEXT.player1 : TEXT.player2} ${TEXT.gameOverMessage.wins}`)
      }
    }
    switchPlayer();
  };

  const handleClick = (index: number): void => {
    if (isDisabled || cells[index] || gameOverMessage !== "") return;
    
    updateCells(index);
    checkMove(cells);
    setIsDisabled(true);
    if (!isMuted) {
      playSound(soundPath);
    }
  };
  
  const setupBorders = (index: number): string | undefined => {
    const borderStyles : { [key: number]: string } = {
      0: "border-r-2 border-b-2",
      1: "border-r-2 border-b-2",
      2: "border-b-2",
      3: "border-r-2 border-b-2",
      4: "border-r-2 border-b-2",
      5: "border-b-2",
      6: "border-r-2",
      7: "border-r-2",
    }
    return borderStyles[index];
  }
  
  return { cells, setCells, updateCells, isDisabled, setIsDisabled, checkMove, handleClick, setupBorders };
}