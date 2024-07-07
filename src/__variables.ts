interface ColorsInterface {
  background: string;
  hover: string;
  restartButton: {
    enabled: string;
    disabled: string;
  };
  white: string;
}

export const COLORS: ColorsInterface = {
  background: "bg-sky-950",
  hover: "hover:bg-sky-900",
  restartButton: {
    enabled: "bg-green-600",
    disabled: "bg-red-600"
  },
  white: "white",
};