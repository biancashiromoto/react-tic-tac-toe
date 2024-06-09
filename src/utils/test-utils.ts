import { fireEvent, screen } from "@testing-library/react";

export const clickCells = (indexes: number[]) => {
  const cells = screen.getAllByTestId("cell");
  indexes.forEach(index => fireEvent.click(cells[index]));
};