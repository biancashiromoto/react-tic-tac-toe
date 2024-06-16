import { useContext } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";

export const useCellState = () => {
  const { 
    cells,
    setCells,
  } = useContext(context);
  const { playerSymbol } = usePlayerState();

  const updateCells = (index: number) => {
    cells[index] = playerSymbol;
    setCells(prevCells => {
      const newCells = [...prevCells];
      newCells[index] = playerSymbol;
      return newCells;
    });
  }

  return { cells, setCells, updateCells };
}