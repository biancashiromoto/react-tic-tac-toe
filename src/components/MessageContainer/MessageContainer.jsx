import React, { Component } from 'react';
import './MessageContainer.css';

class MessageContainer extends Component {
  render() {
    const {
      gameOverMessage,
      restartGameMessage,
    } = this.props;
    return (
      <div
        className="message-container"
      >
        <h2>{gameOverMessage}</h2>
        <span>{restartGameMessage}</span>
      </div>
    )
  }
}

export default MessageContainer
