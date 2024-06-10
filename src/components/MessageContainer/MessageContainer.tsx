import React from 'react';
import '../../App.css';
import './MessageContainer.css';
import { useGameOverMessageState, useGameState, usePlayerState } from '../../hooks';

const MessageContainer: React.FC = () => {
  const { isTie } = useGameState();
  const { isPlayer1Turn } = usePlayerState();
  const { gameOverMessage } = useGameOverMessageState();

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
