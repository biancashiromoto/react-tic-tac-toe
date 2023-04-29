import React, { Component } from 'react';
import { handleSquareClick } from '../../services/gameplayFunctions';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Square.css';

class Square extends Component {
  state = {
    disabled: false,
  };

  handleClick = () => {
    const { disabled } = this.state;
    const { index, grids, checkMove } = this.props;
    if (!disabled) {
      handleSquareClick(index, grids, player1Symbol);
      checkMove(grids);  
      this.setState({
        disabled: true,
      })
    }
  };

  render() {
    const {
      index,
      grids,
      playerSymbol,
      clicked,
      checkMove,
    } = this.props;
    return (
      <div
        className="square"
        onClick={ () => {
          if (!clicked) {
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
