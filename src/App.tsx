import { useContext } from 'react';
import Board from './components/Board/Board';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { useCellState, useGameState } from './hooks';
import { context } from './context/context';
import { Button } from './components/Button';
import { GoMute, GoUnmute } from "react-icons/go";

const App = () => {
  const { cells } = useCellState();
  const { isGameOver, resetGame, toggleMute, hasGameStarted } = useGameState();
  const { isMuted } = useContext(context);
  
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 text-white"
      data-testid="app"
    >
      <Button.Root
        className="toggle-mute__button left-2 top-2 z-10 text-2xl hover:bg-teal-900 p-2 rounded-full transition-all mr-[85%] mt-[10px]"
        onClick={() => toggleMute()}
        dataTestId="toggle-mute__button"
        disabled={false}
      >
        <Button.Icon
          className="toggle-mute__button--icon"
          icon={isMuted ? GoMute : GoUnmute}
        />
      </Button.Root>
      <h1 className='text-5xl p-0'>Tic-tac-toe</h1>
      {!isGameOver && <PlayerDisplay />}
      <Board />
      <Button.Root
        className={`restart-game-button ${isGameOver && "animate-pulse"} ${hasGameStarted(cells) ? "bg-rose-400 pointer-events-none" : "bg-emerald-400 cursor-pointer"} p-4 rounded-3xl font-bogaloo transition-all`}
        onClick={() => resetGame()}
        dataTestId="restart-game-button"
        disabled={hasGameStarted(cells)}
      >
        <Button.Label label="Restart" />
      </Button.Root>
      {isGameOver && <MessageContainer />}
    </div>
  )
}

export default App;