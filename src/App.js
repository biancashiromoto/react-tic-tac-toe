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
        />
        <Button
          grids={ grids }
          handleClearGridButtonClick={ handleClearGridButtonClick }
          buttonValue="Clear grid"
        />
        {winnerMessage}
      </div>
    );
  }
}

export default App;
