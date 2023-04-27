export const changePlayer = (currPlayer) => {
  const { isPlayer1Turn } = currPlayer;
  const playerSymbol = isPlayer1Turn ? 'X' : 'O';
  return {
    isPlayer1Turn: !isPlayer1Turn,
    playerSymbol: playerSymbol,
  }
}

export const changeGrids = (grids, index, playerSymbol) => {
  const newGridsArray = Array.from;
  newGridsArray[index] = playerSymbol;
  console.log(newGridsArray);
  return newGridsArray;
  
}