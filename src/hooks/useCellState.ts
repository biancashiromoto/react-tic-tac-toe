import { useContext } from "react"
import { context } from "../context/context"
import { usePlayerState } from "./usePlayerState";
import { Utils } from "../utils/utils";

export const useCellState = () => {
  const { 
    cells,
    setCells,
  } = useContext(context);
  const { playerSymbol } = usePlayerState();
  const { handleMove } = new Utils();

  const updateCells = (index: number) => {
    handleMove(index, cells, playerSymbol);
    setCells(prevCells => {
      const newCells = [...prevCells];
      newCells[index] = playerSymbol;
      return newCells;
    });
  }

  return { cells, setCells, updateCells };
}