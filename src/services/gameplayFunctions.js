export const handleClearGridButtonClick = (grids) => {
  grids.fill('');
  return grids;
};

export const handleSquareClick = (index, grids, playerSymbol) => {
  grids[index] = playerSymbol;
  return grids;
};
