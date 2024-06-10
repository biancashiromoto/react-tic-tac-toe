import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';

describe("Component PlayerDisplay", () => {
  beforeEach(() => {
    render(
      <Provider>
        <App />
      </Provider>
    );
  });

  it("should correctly display the current player", () => {
    const container = screen.getByTestId("player-display-container");
    const cells = screen.getAllByTestId("cell");

    expect(container).toHaveTextContent(/player 1/i);
    expect(container).not.toHaveTextContent(/player 2/i);
    expect(container.firstChild).toHaveAttribute("src", player1Symbol);
    
    fireEvent.click(cells[0]);
    expect(container).toHaveTextContent(/player 2/i);
    expect(container).not.toHaveTextContent(/player 1/i);
    expect(container.firstChild).toHaveAttribute("src", player2Symbol);
    
    fireEvent.click(cells[1]);
    expect(container).toHaveTextContent(/player 1/i);
    expect(container).not.toHaveTextContent(/player 2/i);
    expect(container.firstChild).toHaveAttribute("src", player1Symbol);
  });

  it("should set the current player as player 1 after player 1 wins", () => {
    const container = screen.getByTestId("player-display-container");
    const cells = screen.getAllByTestId("cell");
    fireEvent.click(cells[0]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[2]);
    fireEvent.click(screen.getByTestId("restart-game-button"));
    expect(container).toHaveTextContent(/player 1/i);
  });

  it("should set the current player as player 1 after player 2 wins", () => {
    const container = screen.getByTestId("player-display-container");
    const cells = screen.getAllByTestId("cell");
    fireEvent.click(cells[0]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[7]);
    fireEvent.click(cells[5]);
    fireEvent.click(cells[2]);
    fireEvent.click(cells[8]);
    fireEvent.click(screen.getByTestId("restart-game-button"));
    expect(container).toHaveTextContent(/player 1/i);
  });
});