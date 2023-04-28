export const handleClearGridButtonClick = (grids) => {
  return grids.fill('');
};

export const handleSquareClick = (index, grids, playerSymbol) => {
  grids[index] = playerSymbol;
  return grids;
};
