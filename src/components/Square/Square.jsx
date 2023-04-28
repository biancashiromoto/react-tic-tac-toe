import React, { Component } from 'react';
import { handleSquareClick } from '../../services/gameplayFunctions';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
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
        {grids[index] && (
          <img
            className="player-symbol"
            src={grids[index] === 'X' ? player2Symbol : player1Symbol}
            alt={grids[index]}
          />
        )}
      </div>
    )
  }
}

export default Square;
