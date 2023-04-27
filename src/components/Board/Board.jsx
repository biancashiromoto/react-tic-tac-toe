import React, { Component } from 'react';
import GridUnit from '../GridUnit/GridUnit';
import './Board.css';
import { changePlayer, changeGrids } from '../../services/gameplayFunctions';

class Board extends Component {
  state = {
    grids: ['', '', '', '', '', '', '', '', ''],
    currPlayer: {
      isPlayer1Turn: true,
      playerSymbol: 'O',
    }
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
    console.log(grids)
  }

  render() {
    const { grids, currPlayer: { isPlayer1Turn, playerSymbol } } = this.state;
    const gridUnitsArray = [];
    for (let index = 0; index < 9; index += 1) {
      gridUnitsArray.push(
      <GridUnit
        key={ index }
        index={ index }
        grids={ grids }
        isPlayer1Turn={ isPlayer1Turn }
        onClick={ (index) => {
          this.changePlayer();
          this.changeGrids(index);
        }}
        playerSymbol={ playerSymbol }
      />);
    };
    return (
      <div className="game-board">
        {gridUnitsArray}
      </div>
    )
  }
}

export default Board;
