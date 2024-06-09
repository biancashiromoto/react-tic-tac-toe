import React from 'react';
import './Button.css';
import { ButtonPropsInterface } from '../../interfaces/Interfaces';
import useGameState from '../../hooks/useGameState';

const Button: React.FC<ButtonPropsInterface> = ({ label, onClick, className, dataTestId }) => {
  const { cells } = useGameState();

  return (
    <button
      className={className}
      data-testid={dataTestId}
      disabled={cells.every(cell => cell === "")}
      type="button"
      onClick={() => onClick()}
    >
      {label}
    </button>
  )
}

export default Button;
