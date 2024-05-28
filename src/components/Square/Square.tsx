import React, { useEffect, useState } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Square.css';
import { SquarePropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';

const Square: React.FC<SquarePropsInterface> = ({
  index,
  grids,
  playerSymbol,
  checkMove,
  isGameOver
}: SquarePropsInterface) => {
  const {
    _player2Symbol,
    handleSquareClick,
  } = new Utils();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  useEffect(() => {
    if (!isGameOver) setIsDisabled(false)
  }, [isGameOver, grids]);

  return (
    <div
      className={`square ${isDisabled && "disabled"}`}
      onClick={() => {
        handleSquareClick(index, grids, playerSymbol)
        checkMove(grids),
        setIsDisabled(true)
      }}
    >
      {grids[index] && (
          <img
            className="player-symbol"
            src={grids[index] === _player2Symbol ? player2Symbol : player1Symbol}
            alt={grids[index]}
          />
        )}
    </div>
  )
}

export default Square;
