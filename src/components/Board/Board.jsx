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

  componentDidUpdate(prevProps) {
    const { isGameOver } = this.props;
    if (isGameOver && isGameOver !== prevProps.isGameOver) {
      this.setState({
        squares: new Array(9).fill(false),
      })
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
      isPlayer1Turn,
      checkMove,
    } = this.props;
    const squaresArray = [];

    for ( let index = 0; index < 9; index += 1) {
      squaresArray.push(
        <Square
          key={ index }
          index={ index }
          grids={ grids }
          playerSymbol={ playerSymbol }
          isPlayer1Turn={ isPlayer1Turn }
          checkMove={ checkMove }
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

export default Board;
