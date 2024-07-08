interface ColorsInterface {
  background: string;
  hover: string;
  restartButton: {
    enabled: string;
    disabled: string;
  };
  gameOverMessageContainer: {
    player1: string,
    player2: string,
    tie: string,
  }
  white: string;
}

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
  white: "white",
};