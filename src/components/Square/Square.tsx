import React, { useContext, useEffect, useState } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './Square.css';
import { SquarePropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';
import { context } from '../../context/context';

const Square: React.FC<SquarePropsInterface> = ({ index }: SquarePropsInterface) => {
  const {
    _player1Symbol,
    _player2Symbol,
    handleMove,
    _winningOptions
  } = new Utils();

  const {
    grids,
    isGameOver,
    playerSymbol,
    setIsPlayer1Turn,
    setPlayerSymbol,
    setGameOverMessage,
    setIsGameOver,
    setIsTie,
    isPlayer1Turn,
    setGrids
  } = useContext(context);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (!isGameOver) setIsDisabled(false)
  }, [isGameOver]);

  const changePlayer = () => {
    setIsPlayer1Turn(prevState => !prevState);
    setPlayerSymbol(prevState => prevState === _player1Symbol ? _player2Symbol : _player1Symbol);
  };

  const checkMove = (grids: string[]) => {
    checkForTie();
  
    for (let index = 0; index < _winningOptions.length; index += 1) {
      const [x, y, z] = _winningOptions[index];
      if (grids[x] && grids[x] === grids[y] && grids[x] === grids[z]) {
        setIsGameOver(true),
        setIsTie(false),
        setGameOverMessage(isPlayer1Turn ? 'Player 1 wins!' : 'Player 2 wins!')
      }
    }
    if (isGameOver) restartGame();
    changePlayer();
  };

  const restartGame = () => {
    setGameOverMessage(""),
    setIsGameOver(false),
    setPlayerSymbol(_player1Symbol),
    setGrids(new Array(9).fill("")),
    setIsPlayer1Turn(true)
  }

  const checkForTie = () => {
    if (grids.every((grid) => grid !== "")) {
      setIsGameOver(true),
      setGameOverMessage("Tie!"),
      setIsTie(true);
    }
  };


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
