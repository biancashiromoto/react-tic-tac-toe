import React, { useContext } from 'react';
import './Button.css';
import { ButtonPropsInterface } from '../../interfaces/Interfaces';
import { context } from '../../context/context';

const Button: React.FC<ButtonPropsInterface> = ({ label, onClick, className, dataTestId }) => {
  const { cells } = useContext(context);

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
