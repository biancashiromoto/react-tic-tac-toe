import React from 'react';
import Square from '../Square/Square';
import './Board.css';
import { BoardPropsInterface } from "../../interfaces/Interfaces";
import { Utils } from '../../utils/utils';

const Board: React.FC<BoardPropsInterface> = ({ grids, playerSymbol, checkMove, isGameOver }) => {
  const { _grids } = new Utils();

  return (
    <div className="board">
      {_grids.map((_item, index) => (
        <Square
          isGameOver={isGameOver}
          key={index}
          index={index}
          grids={grids}
          playerSymbol={playerSymbol}
          checkMove={checkMove}
        />
      ))}
    </div>
  )
}

export default Board;