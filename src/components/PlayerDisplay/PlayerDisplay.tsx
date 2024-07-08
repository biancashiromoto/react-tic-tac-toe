import React from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import { usePlayerState } from '../../hooks';
import { TEXT } from '../../__text';
import { TEST_IDS } from '../../__variables';

const PlayerDisplay: React.FC = () => {
  const { isPlayer1Turn } = usePlayerState();

  return (
    <div
        className="flex gap-4 items-center justify-center"
        data-testid={TEST_IDS.playerDisplay}
      >
        <img
          src={ isPlayer1Turn ? player1Symbol : player2Symbol }
          alt={ isPlayer1Turn ? TEXT.player1Symbol : TEXT.player2Symbol }
          className="w-[35px]"
        />
        <h3 className="font-semibold text-3xl font-londrina-solid">{isPlayer1Turn ? TEXT.player1 : TEXT.player2}</h3>
      </div>
  )
}

export default PlayerDisplay;
