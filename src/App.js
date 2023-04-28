import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import { handleClearGridButtonClick, handleSquareClick } from './services/gameplayFunctions';

class App extends Component {
  state = {
    grids: ['', '', '', '', '', '', '', '', ''],
    isPlayer1Turn: true,
    playerSymbol: 'O',
    isGameOver: false,
    gameOverMessage: '',
    disabled: false,
  };

  changePlayer = () => {
    const { isPlayer1Turn, playerSymbol } = this.state;
    this.setState({
      isPlayer1Turn: !isPlayer1Turn,
      playerSymbol: playerSymbol === 'O' ? 'X' : 'O',
    });
  };

  clearGrids = () => {
    const { grids } = this.state;
    this.setState({
      grids: handleClearGridButtonClick(grids),
      isGameOver: true,
      gameOverMessage: '',
    });
  };

  checkMove = (grids) => {
    const { isPlayer1Turn } = this.state;
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
        if (isPlayer1Turn) {
          this.setState({
            gameOverMessage: 'Player 1 wins!',
            grids: handleClearGridButtonClick(grids),
            isGameOver: true,
          })
        }
        if (!isPlayer1Turn) {
          this.setState({
            gameOverMessage: 'Player 2 wins!',
            grids: handleClearGridButtonClick(grids),
            isGameOver: true,
          });
        }
      }
    }
    this.checkForTie();
    this.changePlayer();
  };

  checkForTie = () => {
    const { grids } = this.state;
    if (grids.every((grid) => grid !== '')) {
      this.setState({
        isGameOver: true,
        gameOverMessage: 'Tie!',
        grids: handleClearGridButtonClick(grids),
      });
    }
  };

  render() {
    const {
      grids,
      players,
      isGameOver,
      gameOverMessage,
      playerSymbol,
      isPlayer1Turn,
      disabled,
    } = this.state;

    return (
      <div className="App">
        <h1>Tic-tac-toe</h1>
        <Board
          handleSquareClick={ handleSquareClick }
          grids={ grids }
          players={ players }
          isGameOver={ isGameOver }
          playerSymbol={ playerSymbol }
          isPlayer1Turn={ isPlayer1Turn }
          checkMove={ this.checkMove }
          disabled={ disabled }
        />
        <Button
          grids={ grids }
          handleClearGridButtonClick={ handleClearGridButtonClick }
          buttonValue="Clear grid"
          clearGrids={ this.clearGrids }
        />
        <span>{gameOverMessage}</span>
      </div>
    );
  }
}

export default App;
