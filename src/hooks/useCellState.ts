import { useContext } from "react"
import { context } from "../context/context"

export const useCellState = () => {
  const { 
    cells,
    setCells,
  } = useContext(context);

  return { cells, setCells };
}