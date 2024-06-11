export class Utils {
  public _INITIAL_CELLS: string[]  = new Array(9).fill("");
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
   * Handles the cell in the current game when the square is clicked.
   * @param index A number type that corresponds to the index in the cell array.
   * @param cells  The cell array containing an empty string or the player's symbol.
   * @param playerSymbol The current player's symbol.
   * @returns The updated cells as an array containing an empty string or the player's symbol.
   */
  public handleMove = (index: number, cells: string[], playerSymbol: string): string[] => {
    cells[index] = playerSymbol;
    return cells;
  };
}