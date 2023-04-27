import React, { Component } from 'react';
import Square from '../Square/Square';
import './Board.css';

class Board extends Component {
  render() {
    const {
      handleSquareClick,
      grids,
      playerSymbol,
      changePlayer,
      isPlayer1Turn,
    } = this.props;

    const squaresArray = [];

    for ( let index = 0; index < 9; index += 1) {
      squaresArray.push(
        <Square
          handleSquareClick={ () => handleSquareClick }
          key={ index }
          index={ index }
          grids={ grids }
          playerSymbol={ playerSymbol }
          changePlayer={ changePlayer }
          isPlayer1Turn={ isPlayer1Turn }
        />
      )
    };

    return (
      <div
        className="board"
      >
        {squaresArray}
      </div>
    )
  }
}

export default Board
