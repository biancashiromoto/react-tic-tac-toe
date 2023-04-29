import React, { Component } from 'react';
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import './PlayerDisplay.css';

class PlayerDisplay extends Component {
  render() {
    const {
      isPlayer1Turn,
    } = this.props;
    return (
      <div
        className="player-display-container"
      >
        <img
          src={ isPlayer1Turn ? player1Symbol : player2Symbol }
          alt={ isPlayer1Turn ? 'O' : 'X' }
          className="player-img-display"
        />
        <h3>{isPlayer1Turn ? 'Player 1' : 'Player 2'}</h3>
      </div>
    )
  }
}

export default PlayerDisplay;
