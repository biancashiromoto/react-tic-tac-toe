import React, { useContext, useEffect, useState } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Square.css';
import { SquarePropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';
import { context } from '../../context/context';

const Square: React.FC<SquarePropsInterface> = ({
  index,
  checkMove,
}: SquarePropsInterface) => {
  const {
    _player2Symbol,
    handleMove,
  } = new Utils();

  const {
    grids,
    isGameOver,
    playerSymbol
  } = useContext(context);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  useEffect(() => {
    if (!isGameOver) setIsDisabled(false)
  }, [isGameOver]);


  return (
    <div
      className={`square ${isDisabled && "disabled"}`}
      onClick={() => {
        handleMove(index, grids, playerSymbol)
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
