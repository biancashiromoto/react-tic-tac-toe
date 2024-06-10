import React, { useContext, useEffect, useState } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Cell.css';
import { CellPropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';
import { context } from '../../context/context';
import { useGameOverMessageState, usePlayerState } from '../../hooks';
import { useCellState } from '../../hooks';

const Cell: React.FC<CellPropsInterface> = ({ index }: CellPropsInterface) => {
  const {
    _player1Symbol,
    _player2Symbol,
    handleMove,
    _winningOptions
  } = new Utils();

  const {
    isGameOver,
    setIsGameOver,
    setIsTie,
  } = useContext(context);

  const { setGameOverMessage } = useGameOverMessageState();

  const { isPlayer1Turn, setIsPlayer1Turn, playerSymbol, setPlayerSymbol } = usePlayerState();
  const { cells, setCells } = useCellState();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (isGameOver || cells.every(cell => cell === "")) {
      setIsDisabled(false);
    }
  }, [isGameOver, cells]);

  const changePlayer = () => {
    setIsPlayer1Turn(prevState => !prevState);
    setPlayerSymbol(prevState => prevState === _player1Symbol ? _player2Symbol : _player1Symbol);
  };

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
    changePlayer();
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
