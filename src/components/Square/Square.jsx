import React, { Component } from 'react';
import { handleSquareClick } from '../../services/gameplayFunctions';
import './Square.css';

class Square extends Component {
  render() {
    const {
      index,
      grids,
      playerSymbol,
      changePlayer,
      changeClickedState,
      clicked,
      checkForWinners,
      checkForTie,
    } = this.props;
    return (
      <div
        className="square"
        onClick={ () => {
          if (!clicked) {
            changeClickedState(index);
            handleSquareClick(index, grids, playerSymbol);
            checkForWinners(grids);
            checkForTie();
            changePlayer();
            
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