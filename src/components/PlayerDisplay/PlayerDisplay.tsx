import React from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import { Utils } from '../../utils/utils';
import { usePlayerState } from '../../hooks';
import { TEXT } from '../../__text';

const PlayerDisplay: React.FC = () => {
  const { isPlayer1Turn } = usePlayerState();

  const {
    _player1Symbol,
    _player2Symbol
  } = new Utils();

  return (
    <div
        className="player-display-container flex gap-4 items-center justify-center"
        data-testid="player-display-container"
      >
        <img
          src={ isPlayer1Turn ? player1Symbol : player2Symbol }
          alt={ isPlayer1Turn ? _player1Symbol : _player2Symbol }
          className="player-img-display w-[35px]"
        />
        <h3 className="font-semibold text-3xl font-londrina-solid">{isPlayer1Turn ? TEXT.player1 : TEXT.player2}</h3>
      </div>
  )
}

export default PlayerDisplay;
