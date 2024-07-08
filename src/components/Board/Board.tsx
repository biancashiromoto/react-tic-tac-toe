import React from 'react';
import Cell from '../Cell/Cell';
import { Utils } from '../../utils/utils';
import { TEST_IDS } from '../../__variables';
const Board: React.FC = () => {
  const { _INITIAL_CELLS } = new Utils();

  return (
    <div
      className="grid grid-cols-3 w-fit"
      data-testid={TEST_IDS.board}
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