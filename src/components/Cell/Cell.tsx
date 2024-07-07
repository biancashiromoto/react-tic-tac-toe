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
    handleClick,
    setupBorders
  } = useCellState();

  return (
    <div
      className={`cell flex items-center justify-center w-[75px] h-[75px] transition-all ${isDisabled ? "disabled pointer-events-none" : "hover:bg-teal-800"} ${setupBorders(index)}`}
      data-testid="cell"
      onClick={() => handleClick(index)}
    >
      {cells[index] && (
          <img
            className={`player-symbol animation-fade-in`}
            src={cells[index] === _player2Symbol ? player2Symbol : player1Symbol}
            alt={cells[index]}
          />
        )}
    </div>
  )
}

export default Cell;
