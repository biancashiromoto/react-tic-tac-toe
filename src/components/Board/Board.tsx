import React from 'react';
import Cell from '../Cell/Cell';
import './Board.css';
import { Utils } from '../../utils/utils';
const Board: React.FC = () => {
  const { _INITIAL_CELLS } = new Utils();

  return (
    <div className="board">
      {_INITIAL_CELLS.map((_item, index) => (
        <Cell
          key={index}
          index={index}
        />
      ))}
    </div>
  )
}

export default Board;