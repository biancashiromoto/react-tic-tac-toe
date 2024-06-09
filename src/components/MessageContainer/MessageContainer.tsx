import React, { useContext } from 'react';
import '../../App.css';
import './MessageContainer.css';
import { context } from '../../context/context';
import usePlayerState from '../../hooks/usePlayerState';

const MessageContainer: React.FC = () => {
  const {
    gameOverMessage,
    isTie
  } = useContext(context);
  const { isPlayer1Turn } = usePlayerState();

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
