import React from 'react';
import Cell from '../Cell/Cell';
import { Utils } from '../../utils/utils';
const Board: React.FC = () => {
  const { _INITIAL_CELLS } = new Utils();

  return (
    <div
      className="board grid grid-cols-3 w-fit"
      data-testid="board"
    >
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