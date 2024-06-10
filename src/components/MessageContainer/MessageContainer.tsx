import React from 'react';
import '../../App.css';
import './MessageContainer.css';
import { useGameState, usePlayerState } from '../../hooks';

const MessageContainer: React.FC = () => {
  const { isTie, gameOverMessage } = useGameState();
  const { isPlayer1Turn } = usePlayerState();

  const backgroundColor = (isTie: boolean): string => {
    if (isTie) {
      return "tie";
    }
    return `${isPlayer1Turn ? "player2" : "player1"}`;
  }
  
  return (
    <div
        className={`message-container ${backgroundColor(isTie)}`}
        data-testid="message-container"
      >
        <h2>{gameOverMessage}</h2>
      </div>
  )
}

export default MessageContainer;
