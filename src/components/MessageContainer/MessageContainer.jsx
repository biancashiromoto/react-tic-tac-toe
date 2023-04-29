import React, { Component } from 'react';
import '../../App.css';
import './MessageContainer.css';

class MessageContainer extends Component {
  render() {
    const {
      isPlayer1Turn,
      gameOverMessage,
      isTie,
    } = this.props;
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
}

export default MessageContainer
