import { render, screen } from "@testing-library/react";
import Board from "./Board";
import Provider from "../../context/Provider";
import { TEST_IDS } from "../../__variables";

let cells: Element[];

describe("Component Board", () => {
  beforeEach(() => {
    const { getAllByTestId } = render(
      <Provider>
        <Board />
      </Provider>
    );
    cells = getAllByTestId(TEST_IDS.cell);
  });

  it("should be correctly rendered", async () => {
    expect(screen.getByTestId(TEST_IDS.board)).toBeInTheDocument();
    cells.forEach(cell => {
      expect(cell).toBeInTheDocument()
      expect(cell).not.toHaveClass("disabled");
    });
  });
});