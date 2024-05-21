import React, { useState } from 'react';
import Square from '../Square/Square';
import './Board.css';
import { BoardPropsInterface } from "../../interfaces/Interfaces";

const Board: React.FC<BoardPropsInterface> = ({ grids, playerSymbol, checkMove }) => {
  const [board, setBoard] = useState<string[]>(['', '', '', '', '', '', '', '', '']);

  return (
    <div className="board">
      {board.map((_item, index) => (
        <Square
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