import React, { Component } from 'react';
import { handleClearGridButtonClick } from '../../services/gameplayFunctions';

class Button extends Component {
  render() {
    const { buttonValue } = this.props;
    return (
      <button
        onClick={
          () => handleClearGridButtonClick()
        }
      >
        {buttonValue}
      </button>
    )
  }
}

export default Button
