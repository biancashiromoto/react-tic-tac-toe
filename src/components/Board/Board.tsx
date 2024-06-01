import React from 'react';
import Square from '../Square/Square';
import './Board.css';
import { Utils } from '../../utils/utils';
const Board: React.FC = () => {
  const { _grids } = new Utils();

  return (
    <div className="board">
      {_grids.map((_item, index) => (
        <Square
          key={index}
          index={index}
        />
      ))}
    </div>
  )
}

export default Board;