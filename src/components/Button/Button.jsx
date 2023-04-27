import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { buttonName, onClick } = this.props;
    return (
      <button
        onClick={ onClick }
      >
        {buttonName}
      </button>
    )
  }
}

export default Button
