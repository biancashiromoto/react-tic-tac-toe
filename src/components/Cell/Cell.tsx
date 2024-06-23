import React from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Cell.css';
import { CellPropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';
import { useCellState } from '../../hooks';

const Cell: React.FC<CellPropsInterface> = ({ index }: CellPropsInterface) => {
  const {
    _player2Symbol,
  } = new Utils();
  const {
    cells,
    isDisabled,
    handleClick
  } = useCellState();

  return (
    <label
      className="cell__label"
      data-testid="cell__label"
      htmlFor={`cell-${index}`}
      >
      {}
      <input
        checked={isDisabled}
        className={`cell ${isDisabled && "disabled"}`}
        data-testid="cell"
        id={`cell-${index}`}
        onChange={() => handleClick(index)}
        type="checkbox"
      />
      {cells[index] && (
              <img
                className="player-symbol"
                src={cells[index] === _player2Symbol ? player2Symbol : player1Symbol}
                alt={cells[index]}
              />
            )}
    </label>
  )
}

export default Cell;
