export class Utils {
  public _grids: string[]  = new Array(9).fill("");
  public _player1Symbol: string = "O";
  public _player2Symbol: string = "X";
  public _winningOptions: number[][] = [
    /** Horizontal */
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    /** Vertical */
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    /** Diagonal */
    [0, 4, 8],
    [2, 4, 6]
  ];

  public handleSquareClick = (index: number, grids: string[], playerSymbol: string): string[] => {
    grids[index] = playerSymbol;
    return grids;
  };

  public isTie = (grids: string[]) => {
    return grids.every(grid => grid !== "");
  };

  public resetGrids = () => {
    return new Array(9).fill("");
  };
}