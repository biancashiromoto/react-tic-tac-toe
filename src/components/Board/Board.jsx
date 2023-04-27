import React, { Component } from 'react';
import GridUnit from '../GridUnit/GridUnit';
import './Board.css';

class Board extends Component {
  state = {
    grids: ['', '', '', '', '', '', '', '', ''],
    currPlayer: {
      isPlayer1Turn: true,
      playerSymbol: 'O',
    },
    winnerMessage: '',
  };
  
  changePlayer = () => {
    const { currPlayer: { isPlayer1Turn } } = this.state;
    const playerSymbol = isPlayer1Turn ? 'X' : 'O';
    this.setState({
      currPlayer: {
        isPlayer1Turn: !isPlayer1Turn,
        playerSymbol: playerSymbol,
      }
    });
  }

  changeGrids = (index) => {
    const { currPlayer: { playerSymbol } } = this.state;
    const { grids } = this.state;
    grids[index] = playerSymbol;
  }

  checkForWinner = () => {
    const { grids } = this.state;
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let index = 0; index < winningCombinations.length; index += 1) {
      const [x, y, z] = winningCombinations[index];
      if (grids[x] && grids[x] === grids[y] && grids[x] === grids[z]) {
        return true;
      }
    }
    return false;
  }

  handleGridClick = (index, ) => {
    const { currPlayer: { isPlayer1Turn } } = this.state;
    this.changeGrids(index);
    this.changePlayer()
    if (this.checkForWinner()) {
      if (isPlayer1Turn) {
        this.setState({
          winnerMessage: (<span>Player 1 wins!</span>)
        });
      }
      if (!isPlayer1Turn) {
        this.setState({
          winnerMessage: (<span>Player 2 wins!</span>)
        });
      }
    };
  }

  render() {
    const { grids, currPlayer: { isPlayer1Turn, playerSymbol }, winnerMessage } = this.state;
    const gridUnitsArray = [];
    for (let index = 0; index < 9; index += 1) {
      gridUnitsArray.push(
      <GridUnit
        key={ index }
        index={ index }
        grids={ grids }
        isPlayer1Turn={ isPlayer1Turn }
        onClick={ (index) => {
          this.handleGridClick(index);
          }
        }
        playerSymbol={ playerSymbol }
      />);
    };
    return (
      <div className="game-board">
        {gridUnitsArray}
        {winnerMessage}
      </div>
    )
  }
}

export default Board;
