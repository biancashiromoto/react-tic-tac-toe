import { useContext } from 'react';
import Board from './components/Board/Board';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { useCellState, useGameState } from './hooks';
import { context } from './context/context';
import { Button } from './components/Button';
import { GoMute, GoUnmute } from "react-icons/go";

const App = () => {
  const { cells } = useCellState();
  const { isGameOver, resetGame, toggleMute } = useGameState();
  const { isMuted } = useContext(context);
  
  return (
    <div
      className="App"
      data-testid="app"
    >
      <Button.Root
        className="toggle-mute__button"
        onClick={() => toggleMute()}
        dataTestId="toggle-mute__button"
        disabled={false}
      >
        <Button.Icon
          className="toggle-mute__button--icon"
          icon={isMuted ? GoMute : GoUnmute}
        />
      </Button.Root>
      <h1>Tic-tac-toe</h1>
      <div className="game__container">
        <PlayerDisplay />
        <div className="board-message__container">
          <Board />
          {isGameOver && <MessageContainer />}
        </div>
        <Button.Root
          className={isGameOver ? 'pulse restart-game-button' : 'restart-game-button'}
          onClick={() => resetGame()}
          dataTestId="restart-game-button"
          disabled={cells.every(cell => cell === "")}
          >
          <Button.Label label="Restart" />
        </Button.Root>
      </div>
    </div>
  )
}

export default App;