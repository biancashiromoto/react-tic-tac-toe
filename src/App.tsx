import { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import { handleSquareClick } from './services/gameplayFunctions';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { GameStateInterface } from './interfaces/Interfaces';

class App extends Component<object, GameStateInterface> {
  state: GameStateInterface = {
    grids: ['', '', '', '', '', '', '', '', ''],
    isPlayer1Turn: true,
    playerSymbol: 'O',
    isGameOver: false,
    gameOverMessage: '',
    disabled: false,
    isTie: false,
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  changePlayer = () => {
    this.setState(prevState => ({
      isPlayer1Turn: !prevState.isPlayer1Turn,
      playerSymbol: prevState.isPlayer1Turn ? 'X' : 'O',
    }))
  };

  checkMove = (grids: string[]) => {
    const { isPlayer1Turn, isGameOver } = this.state;
    this.checkForTie();
    const winningOptions = [  
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
 
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let index = 0; index < winningOptions.length; index += 1) {
      const [x, y, z] = winningOptions[index];
      if (grids[x] && grids[x] === grids[y] && grids[x] === grids[z]) {
        this.setState({
          isGameOver: true,
          isTie: false,
          gameOverMessage: isPlayer1Turn ? 'Player 1 wins!' : 'Player 2 wins!',
        });
      }
    }
    if (isGameOver) {
      this.restartGame();
    }
    if (!isGameOver) {
      this.changePlayer();
    }
  };

  restartGame = () => {
      this.setState({
        isGameOver: false,
        isPlayer1Turn: true,
        playerSymbol: 'O',
        grids: new Array(9).fill(''),
        gameOverMessage: '',
      }, () => console.log(this.state));
  }

  checkForTie = () => {
    const { grids } = this.state;
    if (grids.every((grid) => grid !== '')) {
      this.setState({
        isGameOver: true,
        gameOverMessage: 'Tie!',
        isTie: true,
      });
    }
  };

  render() {
    const {
      grids,
      isGameOver,
      gameOverMessage,
      playerSymbol,
      isPlayer1Turn,
      disabled,
      isTie,
    } = this.state;

    return (
      <div className="App">
        <h1>Tic-tac-toe</h1>
        {!isGameOver ? (<PlayerDisplay
          isPlayer1Turn={ isPlayer1Turn }
        />) : ''}
        <Board
          handleSquareClick={ handleSquareClick }
          grids={ grids }
          isGameOver={ isGameOver }
          playerSymbol={ playerSymbol }
          isPlayer1Turn={ isPlayer1Turn }
          checkMove={ this.checkMove }
          disabled={ disabled }
        />
        <Button
          grids={ grids }
          buttonValue="Restart"
          restartGame={ this.restartGame }
          isGameOver={ isGameOver }
        />
        {isGameOver ? (
          <MessageContainer
            gameOverMessage={ gameOverMessage }
            isPlayer1Turn={ isPlayer1Turn }
            isTie={ isTie }
          />
        ) : ''}
      </div>
    );
  }
}

export default App;
