import React, { useEffect, useState } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Cell.css';
import { CellPropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';
import usePlayerState from '../../hooks/usePlayerState';
import useGameState from '../../hooks/useGameState';

const Cell: React.FC<CellPropsInterface> = ({ index }: CellPropsInterface) => {
  const { _player2Symbol } = new Utils();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { playerSymbol, switchPlayer } = usePlayerState();
  const {
    cells,
    setCells,
    checkForTie,
    checkForWin,
    isGameOver
  } = useGameState();

  useEffect(() => {
    if (isGameOver || cells.every(cell => cell === "")) {
      setIsDisabled(false);
    }    
  }, [isGameOver, cells]);

  const handleClick = () => {
    if (isDisabled || cells[index]) return;
    const newCells = [...cells];
    newCells[index] = playerSymbol;
    setCells(newCells);

    if (!checkForWin(newCells)) {
      checkForTie(newCells);
      switchPlayer();
    }
    setIsDisabled(true);
  };

  return (
    <div
      className={`cell ${isDisabled && "disabled"}`}
      data-testid="cell"
      onClick={() => handleClick()}
    >
      {cells[index] && (
          <img
            className="player-symbol"
            src={cells[index] === _player2Symbol ? player2Symbol : player1Symbol}
            alt={cells[index]}
          />
        )}
    </div>
  )
}

export default Cell;
