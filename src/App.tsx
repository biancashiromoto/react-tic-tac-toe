import { useContext } from 'react';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import MessageContainer from './components/MessageContainer/MessageContainer';
import { Utils } from './utils/utils';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { context } from './context/context';

const App = () => {
  const {
    _player1Symbol,
    _player2Symbol,
    _winningOptions
  } = new Utils();

  const {
    grids,
    setGrids,
    isGameOver,
    setIsGameOver,
    isPlayer1Turn,
    setIsPlayer1Turn,
    setPlayerSymbol,
    setGameOverMessage,
    setIsTie
  } = useContext(context);

  const changePlayer = () => {
    setIsPlayer1Turn(prevState => !prevState);
    setPlayerSymbol(prevState => prevState === _player1Symbol ? _player2Symbol : _player1Symbol);
  };

  const checkMove = (grids: string[]) => {
    checkForTie();
  
    for (let index = 0; index < _winningOptions.length; index += 1) {
      const [x, y, z] = _winningOptions[index];
      if (grids[x] && grids[x] === grids[y] && grids[x] === grids[z]) {
        setIsGameOver(true),
        setIsTie(false),
        setGameOverMessage(isPlayer1Turn ? 'Player 1 wins!' : 'Player 2 wins!')
      }
    }
    if (isGameOver) restartGame();
    changePlayer();
  };

  const restartGame = () => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(_player1Symbol),
    setGrids(new Array(9).fill("")),
    setIsPlayer1Turn(true)
  }

  const checkForTie = () => {
    if (grids.every((grid) => grid !== "")) {
      setIsGameOver(true),
      setGameOverMessage("Tie!"),
      setIsTie(true);
    }
  };

  return (
    <div className="App">
      <h1>Tic-tac-toe</h1>
      {!isGameOver && <PlayerDisplay />}
      <Board
        checkMove={ checkMove }
      />
      <Button
        buttonValue="Restart"
        restartGame={ restartGame }
      />
      {isGameOver && (
        <MessageContainer />
      )}
    </div>
  )
}

export default App;