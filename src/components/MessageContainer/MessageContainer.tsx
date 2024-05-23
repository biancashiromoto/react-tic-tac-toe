import React from 'react';
import '../../App.css';
import './MessageContainer.css';
import { MessageContainerPropsInterface } from "../../interfaces/Interfaces";

const MessageContainer: React.FC<MessageContainerPropsInterface> = ({ isPlayer1Turn, isTie, gameOverMessage }) => {
  const style = {
    backgroundColor: isTie
    ? 'var(--tie)'
  : ((isPlayer1Turn)
    ? 'var(--player2)'
    : 'var(--player1)'),
  }
  return (
    <div
        className="message-container"
        style={ style }
      >
        <h2>{gameOverMessage}</h2>
      </div>
  )
}

export default MessageContainer;
