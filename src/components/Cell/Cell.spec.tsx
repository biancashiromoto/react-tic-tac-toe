import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";
import { clickCells } from "../../utils/test-utils";
import player1Symbol from "../../assets/img/o-item.png";
import player2Symbol from "../../assets/img/x-item.png";

describe("Component Cell", () => {
  it("should be correctly filled with the current player's symbol", async () => {
    render(
      <Provider>
        <App />
      </Provider>);
    const cells = screen.getAllByTestId("cell");

    expect(cells[0]).not.toHaveClass("disabled");
    expect(cells[1]).not.toHaveClass("disabled");

    clickCells([0, 1]);

    expect(cells[0]).toHaveClass("disabled");
    expect(cells[0].firstChild).toHaveAttribute("src", player1Symbol);

    expect(cells[1]).toHaveClass("disabled");
    expect(cells[1].firstChild).toHaveAttribute("src", player2Symbol);
  });

  it("should correctly be cleaned when game is restarted", async () => {
    let cells;
    render(
      <Provider>
        <App />
      </Provider>);
    cells = screen.getAllByTestId("cell");
    
    expect(cells[0]).not.toHaveClass("disabled");
    expect(cells[1]).not.toHaveClass("disabled");
    
    clickCells([0, 1]);
    
    expect(cells[0]).toHaveClass("disabled");
    expect(cells[1]).toHaveClass("disabled");
    
    fireEvent.click(screen.getByTestId("restart-game-button"));
    cells = screen.getAllByTestId("cell");
    
    expect(cells[0]).not.toHaveClass("disabled");
    expect(cells[1]).not.toHaveClass("disabled");
  });
});