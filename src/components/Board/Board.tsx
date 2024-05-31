import React from 'react';
import Square from '../Square/Square';
import './Board.css';
import { BoardPropsInterface } from "../../interfaces/Interfaces";
import { Utils } from '../../utils/utils';
const Board: React.FC<BoardPropsInterface> = ({
  checkMove,
}) => {
  const { _grids } = new Utils();

  return (
    <div className="board">
      {_grids.map((_item, index) => (
        <Square
          key={index}
          index={index}
          checkMove={checkMove}
        />
      ))}
    </div>
  )
}

export default Board;