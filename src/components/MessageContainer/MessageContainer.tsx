import React from 'react';
import '../../App.css';
import './MessageContainer.css';
import usePlayerState from '../../hooks/usePlayerState';
import useGameState from '../../hooks/useGameState';

const MessageContainer: React.FC = () => {
  const { isPlayer1Turn } = usePlayerState();
  const { isTie, gameOverMessage } = useGameState();

  const addClassName = (isTie: boolean): string => {
    if (isTie) {
      return "tie";
    }    
    return `${!isPlayer1Turn ? "player1" : "player2"}`;
  }
  
  return (
    <div
        className={`message-container ${addClassName(isTie)}`}
        data-testid="message-container"
      >
        <h2>{gameOverMessage}</h2>
      </div>
  )
}

export default MessageContainer;
