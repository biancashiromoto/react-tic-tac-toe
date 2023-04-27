import React, { Component } from 'react';
import './GridUnit.css';

class GridUnit extends Component {
  render() {
    const { index, grids, onClick, playerSymbol } = this.props;
    console.log(index);
    return (
      <div
        className="grid-unit"
        onClick={ ({ target }) => {
          target.innerHTML = playerSymbol;
          grids[index] = playerSymbol;
          onClick(target, index);
        }}
      >
      </div>
    )
  }
}

export default GridUnit
