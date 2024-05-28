import React from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './PlayerDisplay.css';
import { PlayerDisplayPropsInterface } from '../../interfaces/Interfaces';
import { Utils } from '../../utils/utils';

const PlayerDisplay: React.FC<PlayerDisplayPropsInterface> = ({ isPlayer1Turn }: PlayerDisplayPropsInterface) => {

  const {
    _player1Symbol,
    _player2Symbol
  } = new Utils();

  return (
    <div
        className="player-display-container"
      >
        <img
          src={ isPlayer1Turn ? player1Symbol : player2Symbol }
          alt={ isPlayer1Turn ? _player1Symbol : _player2Symbol }
          className="player-img-display"
        />
        <h3>{isPlayer1Turn ? 'Player 1' : 'Player 2'}</h3>
      </div>
  )
}

export default PlayerDisplay;
