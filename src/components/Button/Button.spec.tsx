import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";

describe("Component Button", () => {
  beforeEach(() => {
    render(
      <Provider>
        <App />
      </Provider>
    );
  });

  it("should contain the text 'Restart'", () => {
    const button = screen.getByTestId("restart-game-button");
    expect(button).toHaveTextContent(/restart/i);
  });

  it("should be initially disabled and be enabled after the game is started", () => {
    const button = screen.getByTestId("restart-game-button");
    const cells = screen.getAllByTestId("cell");

    expect(button).toHaveAttribute("disabled");
    fireEvent.click(cells[0]);
    expect(button).not.toHaveAttribute("disabled");
  });
});