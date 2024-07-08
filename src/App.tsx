import { useContext } from 'react';
import Board from './components/Board/Board';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay';
import { useCellState, useGameState } from './hooks';
import { context } from './context/context';
import { Button } from './components/Button';
import { GoMute, GoUnmute } from "react-icons/go";
import "./App.css";
import { COLORS, TEST_IDS, TEXT } from './__variables';

const App = () => {
  const { cells } = useCellState();
  const { isGameOver, resetGame, toggleMute, hasGameStarted } = useGameState();
  const { isMuted } = useContext(context);
  
  return (
    <div
      className={`flex flex-col items-center justify-start gap-12 text-white transition-all ${COLORS.background} h-[100vh]`}
      data-testid="app"
    >
      <Button.Root
        className={`left-2 top-2 z-10 text-2xl ${COLORS.hover} p-2 rounded-full transition-all mr-[85%] mt-[10px]`}
        onClick={() => toggleMute()}
        dataTestId={TEST_IDS.buttons.toggleMute}
        disabled={false}
      >
        <Button.Icon
          icon={isMuted ? GoMute : GoUnmute}
        />
      </Button.Root>
      <h1 className="text-5xl p-0 font-vibes flex items-center gap-4 uppercase">
        {TEXT.title}
      </h1>
      <div className="flex flex-col gap-14">
        <PlayerDisplay />
        <Board />
        <Button.Root
          className={`${isGameOver && "animate-pulse"} ${hasGameStarted(cells) ? COLORS.restartButton.enabled : COLORS.restartButton.disabled} p-4 rounded-3xl font-londrina-solid w-[50%] mx-auto`}
          onClick={() => resetGame()}
          dataTestId={TEST_IDS.buttons.restartGame}
          disabled={!hasGameStarted(cells)}
        >
          <Button.Label label={TEXT.restartButton} />
        </Button.Root>
        {isGameOver && <MessageContainer />}
      </div>
    </div>
  )
}

export default App;