import React from 'react';
import '../../App.css';
import './MessageContainer.css';
import { useGameState } from '../../hooks';

const MessageContainer: React.FC = () => {
  const { gameOverMessage, addClassName } = useGameState();
  
  return (
    <div
        className={`message-container ${addClassName()}`}
        data-testid="message-container"
      >
        <h2>{gameOverMessage}</h2>
      </div>
  )
}

export default MessageContainer;
