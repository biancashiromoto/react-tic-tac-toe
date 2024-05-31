import { useContext, useEffect, useState } from 'react';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import MessageContainer from './components/MessageContainer/MessageContainer';
import { Utils } from './utils/utils';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { context } from './context/context';

const App = () => {
  const {
    _grids,
    _player1Symbol,
    _player2Symbol,
    _winningOptions
  } = new Utils();

  const [grids, setGrids] = useState(_grids);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState(_player1Symbol);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [isTie, setIsTie] = useState(false);

  const {
    isPlayer1Turn,
    setIsPlayer1Turn,
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

  useEffect(() => {
    console.log("isPlayer1Turn: ", isPlayer1Turn);
  }, [isPlayer1Turn]);

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
        grids={ grids }
        isGameOver={ isGameOver }
        playerSymbol={ playerSymbol }
        isPlayer1Turn={ isPlayer1Turn }
        checkMove={ checkMove }
      />
      <Button
        grids={ grids }
        buttonValue="Restart"
        restartGame={ restartGame }
        isGameOver={ isGameOver }
      />
      {isGameOver && (
        <MessageContainer
          gameOverMessage={ gameOverMessage }
          isPlayer1Turn={ isPlayer1Turn }
          isTie={ isTie }
        />
      )}
    </div>
  )
}

export default App;