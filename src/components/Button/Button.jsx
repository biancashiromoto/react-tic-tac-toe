import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const {
      buttonValue,
      grids,
      restartGame,
      isGameOver,
    } = this.props;
    return (
      <button
      className={isGameOver ? 'pulse restart-game-button' : 'restart-game-button'}
        onClick={ () => {
          restartGame();
        }}
        disabled={ (grids.every((grid) => grid === '')) }
      >
        {buttonValue}
      </button>
    )
  }
}

export default Button
