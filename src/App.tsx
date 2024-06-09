import Board from './components/Board/Board';
import Button from './components/Button/Button';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import useGameState from './hooks/useGameState';

const App = () => {
  const {
    resetGame,
    cells,
    isGameOver
    resetGame
  } = useGameState();

  return (
    <div
      className="App"
      data-testid="app"
    >
      <h1>Tic-tac-toe</h1>
      {!isGameOver && <PlayerDisplay />}
      <Board />
      <Button
        className={`restart-game-button ${isGameOver && "pulse"}`}
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