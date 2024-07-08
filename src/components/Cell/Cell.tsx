import React from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import { CellPropsInterface } from '../../interfaces/Interfaces';
import { useCellState } from '../../hooks';
import { COLORS, TEST_IDS } from './../../__variables';
import { TEXT } from '../../__text';

const Cell: React.FC<CellPropsInterface> = ({ index }: CellPropsInterface) => {
  const {
    cells,
    isDisabled,
    handleClick,
    setupBorders
  } = useCellState();

  return (
    <div
      className={`cell flex items-center justify-center w-[75px] h-[75px] transition-all ${isDisabled ? "disabled" : COLORS.hover} ${setupBorders(index)} `}
      data-testid={TEST_IDS.cell}
      onClick={() => handleClick(index)}
    >
      {cells[index] && (
          <img
            className={`player-symbol animation-fade-in w-12 ${isDisabled && "pointer-events-none"}`}
            src={cells[index] === TEXT.player2Symbol ? player2Symbol : player1Symbol}
            alt={cells[index]}
          />
        )}
    </div>
  )
}

export default Cell;
