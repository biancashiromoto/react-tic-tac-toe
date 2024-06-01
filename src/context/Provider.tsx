import React, { useState } from 'react';
import { Utils } from '../utils/utils';
import { context } from './context';
import { ContextProps } from '../interfaces/Interfaces';

const {
  _grids,
  _player1Symbol,
} = new Utils();

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [grids, setGrids] = useState(_grids);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [playerSymbol, setPlayerSymbol] = useState(_player1Symbol);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [isTie, setIsTie] = useState(false);

  const value: ContextProps = {
    grids,
    setGrids,
    isGameOver,
    setIsGameOver,
    isPlayer1Turn,
    setIsPlayer1Turn,
    playerSymbol,
    setPlayerSymbol,
    gameOverMessage,
    setGameOverMessage,
    isTie,
    setIsTie
  };

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}

export default Provider;