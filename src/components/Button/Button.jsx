import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { buttonValue, grids, clearGrids } = this.props;
    return (
      <button
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
