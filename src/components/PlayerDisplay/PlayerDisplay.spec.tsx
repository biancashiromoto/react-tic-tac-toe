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
});