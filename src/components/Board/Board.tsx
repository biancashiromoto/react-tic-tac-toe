import React from 'react';
import Square from '../Square/Square';
import './Board.css';
import { BoardPropsInterface } from "../../interfaces/Interfaces";

const Board: React.FC<BoardPropsInterface> = ({ grids, playerSymbol, checkMove, isGameOver }) => {
  const board: string[] = new Array(9).fill("");

  return (
    <div className="board">
      {board.map((_item, index) => (
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