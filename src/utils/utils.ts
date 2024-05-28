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

  /**
   * Handles the grid in the current game when the square is clicked.
   * @param index A number type that corresponds to the index in the grid array.
   * @param grids  The grid array containing an empty string or the player's symbol.
   * @param playerSymbol The current player's symbol.
   * @returns The updated grids as an array containing an empty string or the player's symbol.
   */
  public handleSquareClick = (index: number, grids: string[], playerSymbol: string): string[] => {
    grids[index] = playerSymbol;
    return grids;
  };

  /**
   * Checks if the game ends in tie.
   * @param grids The array corresponding to the grids in the current game.
   * @returns True if every grid is filled.
   */
  public isTie = (grids: string[]): boolean => grids.every(grid => grid !== "");

  /**
   * Resets the grids to an empty array.
   * @returns An array containing nine empty strings.
   */
  public resetGrids = (): string[] => new Array(9).fill("");
}