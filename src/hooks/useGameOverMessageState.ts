import { useContext } from "react"
import { context } from "../context/context"

export const useGameOverMessageState = () => {
  const { 
    gameOverMessage,
    setGameOverMessage
  } = useContext(context);

  return { gameOverMessage, setGameOverMessage };
}