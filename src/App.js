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
    winnerMessage: '',
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
    });
  };

  checkForWinners = (grids) => {
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
        console.log(true);
        if (isPlayer1Turn) {
          this.setState({
            winnerMessage: 'Player 1 wins!',
          })
        }
        if (!isPlayer1Turn) {
          this.setState({
            winnerMessage: 'Player 2 wins!',
          });
        }
        this.setState({
          isGameOver: true,
          grids: handleClearGridButtonClick(grids)
        });
      }
    }
    console.log(false);
  };

  render() {
    const {
      grids,
      players,
      isGameOver,
      winnerMessage,
      playerSymbol,
      isPlayer1Turn,
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
          changePlayer={ this.changePlayer }
          checkForWinners={ this.checkForWinners }
        />
        <Button
          grids={ grids }
          handleClearGridButtonClick={ handleClearGridButtonClick }
          buttonValue="Clear grid"
          clearGrids={ this.clearGrids }
        />
        <span>{winnerMessage}</span>
      </div>
    );
  }
}

export default App;
