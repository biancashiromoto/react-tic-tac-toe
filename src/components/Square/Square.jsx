import React, { Component } from 'react';
import { handleSquareClick } from '../../services/gameplayFunctions';
import './Square.css';

class Square extends Component {
  render() {
    const {
      index,
      grids,
      playerSymbol,
      changeClickedState,
      clicked,
      checkMove,
      isGameOver,
    } = this.props;
    return (
      <div
        className="square"
        onClick={ () => {
          if (!clicked) {
            changeClickedState(index);
            handleSquareClick(index, grids, playerSymbol);
            checkMove(grids);
          }
        } }
        disabled={ clicked }
      >
        {grids[index] ? grids[index] : '' }
      </div>
    )
  }
}

export default Square;
