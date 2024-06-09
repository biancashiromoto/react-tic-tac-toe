import { render, screen } from "@testing-library/react";
import Board from "./Board";
import Provider from "../../context/Provider";

describe("Component Board", () => {
  beforeEach(() => {
    render(
      <Provider>
        <Board />
      </Provider>
    );
  });

  it("should be correctly rendered", async () => {
    expect(screen.getByTestId('board')).toBeInTheDocument();
    const cells = screen.getAllByTestId('cell');
    cells.forEach(cell => {
      expect(cell).toBeInTheDocument()
      expect(cell).not.toHaveClass("disabled");
    });
  });
});