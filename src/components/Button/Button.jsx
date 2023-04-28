import React, { Component } from 'react';
import { handleClearGridButtonClick } from '../../services/gameplayFunctions';

class Button extends Component {
  render() {
    const { buttonValue, grids } = this.props;
    return (
      <button
        onClick={
          () => handleClearGridButtonClick(grids)
        }
      >
        {buttonValue}
      </button>
    )
  }
}

export default Button
