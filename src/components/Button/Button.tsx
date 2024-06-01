import React, { useContext } from 'react';
import './Button.css';
import { ButtonPropsInterface } from '../../interfaces/Interfaces';
import { context } from '../../context/context';

const Button: React.FC<ButtonPropsInterface> = ({ label, onClick, className }) => {
  const { grids } = useContext(context);

  return (
    <button
      className={className}
      disabled={grids.every(grid => grid === "")}
      type="button"
      onClick={() => onClick()}
    >
      {label}
    </button>
  )
}

export default Button;
