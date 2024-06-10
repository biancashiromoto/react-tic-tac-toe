import { useContext } from 'react';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import MessageContainer from './components/MessageContainer/MessageContainer';
import { Utils } from './utils/utils';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { context } from './context/context';
import { useCellState, useGameOverMessageState } from './hooks';

const App = () => {
  const { _player1Symbol } = new Utils();
  const { cells, setCells } = useCellState();
  const { setGameOverMessage } = useGameOverMessageState();

  const {
    isGameOver,
    setIsGameOver,
    setIsPlayer1Turn,
    setPlayerSymbol,
  } = useContext(context);

  const restartGame = () => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(_player1Symbol),
    setCells(new Array(9).fill("")),
    setIsPlayer1Turn(true)
  }

  return (
    <div
      className="App"
      data-testid="app"
    >
      <h1>Tic-tac-toe</h1>
      {!isGameOver && <PlayerDisplay />}
      <Board />
      <Button
        className={isGameOver ? 'pulse restart-game-button' : 'restart-game-button'}
        dataTestId="restart-game-button"
        disabled={cells.every(cell => cell === "")}
        label="Restart"
        onClick={ restartGame }
      />
      {isGameOver && <MessageContainer />}
    </div>
  )
}

export default App;