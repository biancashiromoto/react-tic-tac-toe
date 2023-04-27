import React, { Component } from 'react';
import { handleSquareClick } from '../../services/gameplayFunctions';
import './Square.css';

class Square extends Component {
  render() {
    const {
      index,
      grids,
      playerSymbol,
    } = this.props;
    return (
      <div
        className="square"
        onClick={ () => {
          handleSquareClick(index, grids, playerSymbol);
          
        } }
      >
      </div>
    )
  }
}

export default Square;