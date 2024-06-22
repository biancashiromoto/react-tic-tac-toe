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
   * Plays an mp3 audio.
   * @param path A string containig the mp3 audio path.
   */
  public playSound(path: string) {
    const sound = new Audio(path);
    sound.play();
  }
}