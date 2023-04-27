export const handleClearGridButtonClick = (grids) => {
  console.log('handleClearGridButtonClick');
};

export const handleSquareClick = (index, grids, playerSymbol) => {
  grids[index] = playerSymbol;
  console.log(grids);
};
