import React, { useContext } from 'react';
import '../../App.css';
import './MessageContainer.css';
import { context } from '../../context/context';

const MessageContainer: React.FC = () => {
  const {
    isPlayer1Turn,
    gameOverMessage,
    isTie
  } = useContext(context);

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
