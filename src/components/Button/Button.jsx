import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { buttonValue, grids, clearGrids } = this.props;
    return (
      <button
      className="clear-grid-button"
        onClick={ () => {
          clearGrids();
        }}
        disabled={ (grids.every((grid) => grid === '')) }
      >
        {buttonValue}
      </button>
    )
  }
}

export default Button
