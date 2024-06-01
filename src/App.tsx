import { useContext } from 'react';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import MessageContainer from './components/MessageContainer/MessageContainer';
import { Utils } from './utils/utils';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { context } from './context/context';

const App = () => {
  const { _player1Symbol } = new Utils();

  const {
    cells,
    setCells,
    isGameOver,
    setIsGameOver,
    setIsPlayer1Turn,
    setPlayerSymbol,
    setGameOverMessage,
  } = useContext(context);

  const restartGame = () => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(_player1Symbol),
    setCells(new Array(9).fill("")),
    setIsPlayer1Turn(true)
  }

  return (
    <div className="App">
      <h1>Tic-tac-toe</h1>
      {!isGameOver && <PlayerDisplay />}
      <Board />
      <Button
        label="Restart"
        className={isGameOver ? 'pulse restart-game-button' : 'restart-game-button'}
        disabled={cells.every(cell => cell === "")}
        onClick={ restartGame }
      />
      {isGameOver && <MessageContainer />}
    </div>
  )
}

export default App;