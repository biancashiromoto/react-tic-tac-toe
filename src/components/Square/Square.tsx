import React, { useState } from 'react';
import { handleSquareClick } from '../../services/gameplayFunctions';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Square.css';
import { SquarePropsInterface } from '../../interfaces/Interfaces';


const Square: React.FC<SquarePropsInterface> = ({ index, grids, playerSymbol, checkMove }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div
      className={`${isDisabled ? "square-disabled" : null} square`}
      onClick={() => {
        handleSquareClick(index, grids, playerSymbol),
        checkMove(grids),
        setIsDisabled(true)
      }
    }
    >
      {grids[index] && (
          <img
            className="player-symbol"
            src={grids[index] === 'X' ? player2Symbol : player1Symbol}
            alt={grids[index]}
          />
        )}
    </div>
  )
}

export default Square;
