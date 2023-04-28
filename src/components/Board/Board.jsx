import React, { Component } from 'react';
import Square from '../Square/Square';
import { handleSquareClick } from '../../services/gameplayFunctions';
import './Board.css';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: new Array(9).fill(false),
    }
  };

  changeClickedState = (index) => {
    const { squares } = this.state;
    squares[index] = true;
    this.setState({
      squares,
    });
  };

  render() {
    const {
      grids,
      playerSymbol,
      changePlayer,
      isPlayer1Turn,
      checkForWinners,
      checkForTie,
    } = this.props;
    const { squares } = this.state;
    const squaresArray = [];

    for ( let index = 0; index < 9; index += 1) {
      squaresArray.push(
        <Square
          handleSquareClick={ handleSquareClick }
          key={ index }
          index={ index }
          grids={ grids }
          playerSymbol={ playerSymbol }
          changePlayer={ changePlayer }
          isPlayer1Turn={ isPlayer1Turn }
          clicked={ squares[index] }
          changeClickedState={ () => this.changeClickedState(index) }
          checkForWinners={ checkForWinners }
          checkForTie={ checkForTie }
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
