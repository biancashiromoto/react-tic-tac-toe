import React from 'react';
import { useGameState } from '../../hooks';

const MessageContainer: React.FC = () => {
  const { gameOverMessage, addClassName } = useGameState();
  
  return (
    <div
        className={`message-container flex flex-col items-center justify-center rounded-3xl top-56 right-[50%] translate-x-2/4 absolute transition-all h-40 w-44 hover:scale-110 text-center ${addClassName()}`}
        data-testid="message-container"
      >
        <h2 className="font-londrina-solid font-semibold text-4xl">{gameOverMessage}</h2>
      </div>
  )
}

export default MessageContainer;
