import React, { useState } from 'react';
import { Utils } from '../utils/utils';
import { context } from './context';
import { ContextProps } from '../interfaces/Interfaces';

const {
  _INITIAL_CELLS,
  _player1Symbol,
} = new Utils();

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [cells, setCells] = useState<string[]>(_INITIAL_CELLS);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState<boolean>(true);
  const [playerSymbol, setPlayerSymbol] = useState<string>(_player1Symbol);
  const [gameOverMessage, setGameOverMessage] = useState<string>("");
  const [isTie, setIsTie] = useState<boolean>(false);

  const value: ContextProps = {
    cells,
    setCells,
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
