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
      disabled,
      isGameOver,
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
          isPlayer1Turn={ isPlayer1Turn }
          clicked={ squares[index] }
          changeClickedState={ () => this.changeClickedState(index) }
          checkMove={ checkMove }
          disabled={ disabled }
          isGameOver={ isGameOver }
        />
      )
    };
    console.log(isGameOver)

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
