import { useContext } from 'react';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { useCellState, useGameState } from './hooks';
import { context } from './context/context';

const App = () => {
  const { cells } = useCellState();
  const { isGameOver, resetGame } = useGameState();
  const { isMuted, setIsMuted } = useContext(context);

  return (
    <div
      className="App"
      data-testid="app"
    >
      <Button
        label={isMuted ? "MUTED" : "NOT MUTED"}
        onClick={() => setIsMuted(prevState => !prevState)}
        type="button"
      />
      <h1>Tic-tac-toe</h1>
      {!isGameOver && <PlayerDisplay />}
      <Board />
      <Button
        className={isGameOver ? 'pulse restart-game-button' : 'restart-game-button'}
        dataTestId="restart-game-button"
        disabled={cells.every(cell => cell === "")}
        label="Restart"
        onClick={ resetGame }
      />
      {isGameOver && <MessageContainer />}
    </div>
  )
}

export default App;