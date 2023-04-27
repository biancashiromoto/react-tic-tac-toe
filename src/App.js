import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import { handleClearGridButtonClick, handleSquareClick } from './services/gameplayFunctions';

class App extends Component {
  state = {
    grids: ['', '', '', '', '', '', '', '', ''],
    players: {
      isPlayer1Turn: true,
      playerSymbol: 'O',
    },
    isGameOver: false,
    winnerMessage: '',
  };

  render() {
    const {
      grids,
      players,
      isGameOver,
      winnerMessage,
      players: {
        playerSymbol,
      },
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
        />
        <Button
          onClick={ () => 
            handleClearGridButtonClick(grids)
          }
          buttonValue="Clear grid"
        />
        {winnerMessage}
      </div>
    );
  }
}

export default App;
