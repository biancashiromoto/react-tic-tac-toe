import { fireEvent, render, screen } from "@testing-library/react";
import Provider from "../../context/Provider";
import player1Symbol from "../../assets/img/o-item.png";
import player2Symbol from "../../assets/img/x-item.png";
import Cell from "./Cell";
import { TEST_IDS } from "../../__variables";

describe("Component Cell", () => {
  beforeEach(() => {
    render(
      <Provider>
        <Cell index={0} />
      </Provider>
    );
  });
  
  it("should be correctly rendered", () => {
    expect(screen.getByTestId(TEST_IDS.cell)).toBeInTheDocument();
  });
  
  it("should correctly handle click", () => {
    expect(screen.getByTestId(TEST_IDS.cell)).not.toHaveClass("disabled");
    fireEvent.click(screen.getByTestId(TEST_IDS.cell));
    expect(screen.getByTestId(TEST_IDS.cell)).toHaveClass("disabled");
    expect(screen.getByTestId(TEST_IDS.cell).children[0]).toHaveAttribute("src", player1Symbol);
  });
  
  it("should not change if it is already disabled", () => {
    fireEvent.click(screen.getByTestId(TEST_IDS.cell));
    expect(screen.getByTestId(TEST_IDS.cell).children[0]).toHaveAttribute("src", player1Symbol);
    fireEvent.click(screen.getByTestId(TEST_IDS.cell));
    expect(screen.getByTestId(TEST_IDS.cell).children[0]).toHaveAttribute("src", player1Symbol);
    expect(screen.getByTestId(TEST_IDS.cell).children[0]).not.toHaveAttribute("src", player2Symbol);
  });
});