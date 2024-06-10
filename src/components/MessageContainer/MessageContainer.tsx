import React, { useContext } from 'react';
import '../../App.css';
import './MessageContainer.css';
import { context } from '../../context/context';
import { useGameOverMessageState, usePlayerState } from '../../hooks';

const MessageContainer: React.FC = () => {
  const {
    isTie
  } = useContext(context);

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
