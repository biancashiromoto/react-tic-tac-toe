import React from 'react';
import './Button.css';
import { ButtonPropsInterface } from '../../interfaces/Interfaces';
import { useCellState } from '../../hooks';

const Button: React.FC<ButtonPropsInterface> = ({ label, onClick, className, dataTestId }) => {
  const { cells } = useCellState();

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
