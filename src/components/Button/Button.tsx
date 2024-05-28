import React from 'react';
import './Button.css';
import { ButtonPropsInterface } from '../../interfaces/Interfaces';

const Button: React.FC<ButtonPropsInterface> = ({ buttonValue, grids, isGameOver, restartGame }) => {
  return (
    <button
      type="button"
      className={isGameOver ? 'pulse restart-game-button' : 'restart-game-button'}
      onClick={ () => {
        restartGame();
      }}
      disabled={grids.every(grid => grid === "")}
    >
      {buttonValue}
    </button>
  )
}

export default Button;
