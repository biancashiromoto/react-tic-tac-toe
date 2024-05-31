import React, { useContext } from 'react';
import './Button.css';
import { ButtonPropsInterface } from '../../interfaces/Interfaces';
import { context } from '../../context/context';

const Button: React.FC<ButtonPropsInterface> = ({
  buttonValue,
  restartGame
}) => {
  const {
    grids,
    isGameOver
  } = useContext(context);

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
