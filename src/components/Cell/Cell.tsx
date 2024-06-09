import React, { useContext, useEffect, useState } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Cell.css';
import { CellPropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';
import { context } from '../../context/context';
import usePlayerState from '../../hooks/usePlayerState';

const Cell: React.FC<CellPropsInterface> = ({ index }: CellPropsInterface) => {
  const {
    _player2Symbol,
    handleMove,
    _winningOptions
  } = new Utils();

  const {
    cells,
    isGameOver,
    setGameOverMessage,
    setIsGameOver,
    setIsTie,
    isPlayer1Turn,
    setCells
  } = useContext(context);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { playerSymbol, switchPlayer } = usePlayerState();

  useEffect(() => {
    if (isGameOver || cells.every(cell => cell === "")) {
      setIsDisabled(false);
    }
  }, [isGameOver, cells]);

  const checkMove = (cells: string[]) => {
    checkForTie();
  
    for (let index = 0; index < _winningOptions.length; index += 1) {
      const [x, y, z] = _winningOptions[index];
      if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
        setIsGameOver(true),
        setIsTie(false),
        setGameOverMessage(isPlayer1Turn ? 'Player 1 wins!' : 'Player 2 wins!')
      }
    }
    switchPlayer();
  };

  const checkForTie = () => {
    if (cells.every((cell) => cell !== "")) {
      setIsGameOver(true),
      setGameOverMessage("Tie!"),
      setIsTie(true);
    }
  };

  const handleClick = () => {
    if (isDisabled || cells[index]) return;
    handleMove(index, cells, playerSymbol);
    setCells(prevCells => {
      const newCells = [...prevCells];
      newCells[index] = playerSymbol;
      return newCells;
    });
    checkMove(cells);
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
