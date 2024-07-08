import { ColorsInterface, TestIdsInterface } from "./interfaces/Interfaces";


export const COLORS: ColorsInterface = {
  background: "bg-sky-950",
  hover: "hover:bg-sky-900",
  restartButton: {
    enabled: "bg-green-600",
    disabled: "bg-red-600"
  },
  gameOverMessageContainer: {
    player1: "bg-sky-700",
    player2: "bg-rose-500" ,
    tie: "bg-purple-500"
  },
};

export const TEST_IDS: TestIdsInterface = {
  board: "board",
  buttons: {
    toggleMute: "toggle-mute__button",
    restartGame: "restart-game__button",
  },
  cell: "cell",
  messageContainer: "message-container",
  playerDisplay: "player-display"
}