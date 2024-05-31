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
